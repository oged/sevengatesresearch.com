import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MAX_PDF_BYTES = 4 * 1024 * 1024;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

function yamlString(value: string) {
  return JSON.stringify(value);
}

function validDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function normalisePath(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

type GitHubJson = Record<string, any>;

async function githubJson(
  repo: string,
  token: string,
  endpoint: string,
  init: RequestInit = {},
): Promise<GitHubJson> {
  const response = await fetch(`https://api.github.com/repos/${repo}${endpoint}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });

  const text = await response.text();
  let data: GitHubJson = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
  }

  if (!response.ok) {
    throw new Error(`GitHub ${response.status}: ${data.message || "request failed"}`);
  }
  return data;
}

async function commitReport(args: {
  repo: string;
  branch: string;
  token: string;
  pdfPath: string;
  pdfBase64: string;
  markdownPath: string;
  markdown: string;
  title: string;
}) {
  const { repo, branch, token, pdfPath, pdfBase64, markdownPath, markdown, title } = args;
  const encodedBranch = branch.split("/").map(encodeURIComponent).join("/");

  const ref = await githubJson(repo, token, `/git/ref/heads/${encodedBranch}`);
  const parentSha = String(ref.object?.sha || "");
  if (!parentSha) throw new Error("Could not resolve the GitHub branch head.");

  const parent = await githubJson(repo, token, `/git/commits/${parentSha}`);
  const baseTree = String(parent.tree?.sha || "");
  if (!baseTree) throw new Error("Could not resolve the GitHub base tree.");

  const [pdfBlob, markdownBlob] = await Promise.all([
    githubJson(repo, token, "/git/blobs", {
      method: "POST",
      body: JSON.stringify({ content: pdfBase64, encoding: "base64" }),
    }),
    githubJson(repo, token, "/git/blobs", {
      method: "POST",
      body: JSON.stringify({
        content: Buffer.from(markdown, "utf8").toString("base64"),
        encoding: "base64",
      }),
    }),
  ]);

  const tree = await githubJson(repo, token, "/git/trees", {
    method: "POST",
    body: JSON.stringify({
      base_tree: baseTree,
      tree: [
        { path: pdfPath, mode: "100644", type: "blob", sha: pdfBlob.sha },
        { path: markdownPath, mode: "100644", type: "blob", sha: markdownBlob.sha },
      ],
    }),
  });

  const commit = await githubJson(repo, token, "/git/commits", {
    method: "POST",
    body: JSON.stringify({
      message: `Publish PDF research: ${title}`,
      tree: tree.sha,
      parents: [parentSha],
    }),
  });

  await githubJson(repo, token, `/git/refs/heads/${encodedBranch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha, force: false }),
  });

  return String(commit.sha);
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    if (!verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value)) {
      return NextResponse.json({ error: "Publishing session expired. Sign in again." }, { status: 401 });
    }

    const token = process.env.GITHUB_TOKEN || "";
    const repo = process.env.GITHUB_REPO || "oged/sevengatesresearch.com";
    const branch = process.env.GITHUB_BRANCH || "main";

    if (!token) {
      return NextResponse.json(
        { error: "GITHUB_TOKEN is not configured in Vercel." },
        { status: 500 },
      );
    }

    const form = await request.formData();
    const title = String(form.get("title") || "").trim();
    const excerpt = String(form.get("excerpt") || "").trim();
    const date = String(form.get("date") || "").trim();
    const requestedSlug = String(form.get("slug") || "").trim();
    const readingTime = String(form.get("readingTime") || "10 min").trim();
    const kicker = String(form.get("kicker") || "SEVEN GATES RESEARCH · REPORT").trim();
    const researchType = String(form.get("researchType") || "Report").trim();
    const category = String(form.get("category") || "Research").trim();
    const ticker = String(form.get("ticker") || "").trim();
    const region = String(form.get("region") || "").trim();
    const hero = normalisePath(String(form.get("hero") || ""));
    const heroAlt = String(form.get("heroAlt") || "").trim();
    const heroCaption = String(form.get("heroCaption") || "").trim();
    const draft = String(form.get("draft") || "") === "true";
    const pdf = form.get("pdf");

    if (!title || title.length < 8) {
      return NextResponse.json({ error: "Title must be at least 8 characters." }, { status: 400 });
    }
    if (!excerpt || excerpt.length < 20) {
      return NextResponse.json({ error: "Deck / excerpt must be at least 20 characters." }, { status: 400 });
    }
    if (!validDate(date)) {
      return NextResponse.json({ error: "Publication date must be YYYY-MM-DD." }, { status: 400 });
    }
    if (!(pdf instanceof File)) {
      return NextResponse.json({ error: "Choose a PDF file." }, { status: 400 });
    }
    if (!pdf.name.toLowerCase().endsWith(".pdf") && pdf.type !== "application/pdf") {
      return NextResponse.json({ error: "The selected file is not a PDF." }, { status: 400 });
    }
    if (pdf.size > MAX_PDF_BYTES) {
      return NextResponse.json(
        { error: `PDF is ${(pdf.size / 1024 / 1024).toFixed(2)} MB. Mobile GitHub publishing is capped at 4 MB.` },
        { status: 413 },
      );
    }
    if (hero && (!heroAlt || !heroCaption)) {
      return NextResponse.json(
        { error: "A hero image requires both alt text and a caption." },
        { status: 400 },
      );
    }

    const slug = slugify(requestedSlug || title);
    if (!slug) {
      return NextResponse.json({ error: "Could not create a valid slug." }, { status: 400 });
    }

    const pdfRepoPath = `public/reports/${slug}.pdf`;
    const pdfWebPath = `/reports/${slug}.pdf`;
    const markdownRepoPath = `content/research/${slug}.md`;

    const optional = [
      ticker ? `ticker: ${yamlString(ticker)}` : "",
      region ? `region: ${yamlString(region)}` : "",
      hero ? `hero: ${yamlString(hero)}` : "",
      heroAlt ? `heroAlt: ${yamlString(heroAlt)}` : "",
      heroCaption ? `heroCaption: ${yamlString(heroCaption)}` : "",
    ].filter(Boolean).join("\n");

    const markdown = `---
draft: ${draft ? "true" : "false"}
slug: ${yamlString(slug)}
date: ${yamlString(date)}
title: ${yamlString(title)}
excerpt: ${yamlString(excerpt)}
readingTime: ${yamlString(readingTime)}
kicker: ${yamlString(kicker)}
researchType: ${yamlString(researchType)}
category: ${yamlString(category)}
${optional ? optional + "\n" : ""}pdf: ${yamlString(pdfWebPath)}
pdfOnly: true
---

This Seven Gates Research report is published as a PDF-first edition so the designed layout, charts, typography and pagination remain intact.
`;

    const pdfBase64 = Buffer.from(await pdf.arrayBuffer()).toString("base64");
    const commitSha = await commitReport({
      repo,
      branch,
      token,
      pdfPath: pdfRepoPath,
      pdfBase64,
      markdownPath: markdownRepoPath,
      markdown,
      title,
    });

    return NextResponse.json({
      ok: true,
      slug,
      draft,
      commitSha,
      commitUrl: `https://github.com/${repo}/commit/${commitSha}`,
      livePath: `/research/${slug}`,
      previewPath: `/admin/preview/${slug}`,
      pdfPath: pdfWebPath,
    });
  } catch (error) {
    console.error("PDF publish failed", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown publishing error." },
      { status: 500 },
    );
  }
}
