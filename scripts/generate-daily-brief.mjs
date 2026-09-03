import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BRIEFING_DIR = path.join(ROOT, "content", "briefings");
const VISUAL_DIR = path.join(ROOT, "public", "images", "briefings");
const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_DAILY_BRIEF_MODEL || "gpt-5.6-sol";
const OVERWRITE = String(process.env.OVERWRITE || "false").toLowerCase() === "true";
const requestedDate = String(process.env.PUBLISH_DATE || "").trim();

function londonParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
}

function londonDate(date = new Date()) {
  const p = londonParts(date);
  return `${p.year}-${p.month}-${p.day}`;
}

function setOutput(name, value) {
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
  }
}

function summary(text) {
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${text}\n`);
  }
}

const publishDate = requestedDate || londonDate();
if (!/^\d{4}-\d{2}-\d{2}$/.test(publishDate)) {
  throw new Error(`PUBLISH_DATE must be YYYY-MM-DD, got: ${publishDate}`);
}

fs.mkdirSync(BRIEFING_DIR, { recursive: true });
fs.mkdirSync(VISUAL_DIR, { recursive: true });

const targetFile = path.join(BRIEFING_DIR, `${publishDate}.md`);
if (fs.existsSync(targetFile) && !OVERWRITE) {
  console.log(`${targetFile} already exists. Refusing to overwrite it.`);
  setOutput("publish_date", publishDate);
  setOutput("skipped", "true");
  summary(`### Seven Gates Daily Brief\n\nSkipped: \`${publishDate}.md\` already exists.`);
  process.exit(0);
}

if (!API_KEY) {
  throw new Error("OPENAI_API_KEY is not set. Add it as a GitHub Actions repository secret.");
}

const dayNumber = Math.floor(Date.parse(`${publishDate}T00:00:00Z`) / 86400000);
const visualTypes = ["transmission_board", "signal_board", "risk_ladder"];
const visualType = visualTypes[Math.abs(dayNumber) % visualTypes.length];

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    excerpt: { type: "string" },
    opening: { type: "string" },
    stories: {
      type: "array",
      minItems: 4,
      maxItems: 5,
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          body: { type: "string" },
          sources: {
            type: "array",
            minItems: 1,
            maxItems: 3,
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                name: { type: "string" },
                url: { type: "string" }
              },
              required: ["name", "url"]
            }
          }
        },
        required: ["heading", "body", "sources"]
      }
    },
    numbers: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          value: { type: "string" },
          meaning: { type: "string" },
          sourceName: { type: "string" },
          sourceUrl: { type: "string" }
        },
        required: ["value", "meaning", "sourceName", "sourceUrl"]
      }
    },
    hinges: {
      type: "array",
      minItems: 3,
      maxItems: 4,
      items: { type: "string" }
    },
    visual: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        subtitle: { type: "string" },
        alt: { type: "string" },
        items: {
          type: "array",
          minItems: 3,
          maxItems: 4,
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              label: { type: "string" },
              value: { type: "string" },
              detail: { type: "string" },
              sourceName: { type: "string" },
              sourceUrl: { type: "string" }
            },
            required: ["label", "value", "detail", "sourceName", "sourceUrl"]
          }
        }
      },
      required: ["title", "subtitle", "alt", "items"]
    }
  },
  required: ["title", "excerpt", "opening", "stories", "numbers", "hinges", "visual"]
};

const instructions = `You are the editorial engine for Seven Gates Research, an independent publication on companies, markets and power. Write in British English for an international audience with a Nigerian knowledge advantage.

Editorial discipline:
- Interesting first. Correct always.
- Rank what matters, do not produce a news dump.
- The first story must be the most consequential development for markets, policy, business or geopolitical risk today.
- Cover 4 or 5 developments across geopolitics, markets/economics, Nigeria/Africa, AI/technology, politics and people. Do not force every category.
- Explain the Nigerian transmission mechanism only where it genuinely exists.
- Use fresh web research. Prefer primary sources, official releases, company filings and central banks; use high-quality wires for fast-moving facts.
- Counterarguments or uncertainty should appear where useful.
- Serious treatment for war, death, disaster and human suffering.
- Dry humour is welcome in small doses, but never demean the subject.
- No em dashes. No AI-sounding filler. No clichés. No recommendation language.
- Do not mention any proprietary Seven Gates scoring framework.
- Target roughly 750 words total once assembled.
- Each story body should normally be 95 to 140 words.
- Opening should be 55 to 90 words.
- Source URLs must be real URLs discovered through web research, never fabricated.
- Three numbers must be verified and decision-useful.
- The visual must be factual. Its labels and values must be supported by the cited source URLs. It is a ${visualType.replaceAll("_", " ")} today, not an AI-generated chart.
`;

const input = `Prepare the Seven Gates Daily Brief for ${publishDate}. Research developments current to the publication date. Return only the structured response requested by the schema. The title should contain an argument rather than simply the date. The excerpt should state what changed and why it matters in one sentence.`;

console.log(`Generating ${publishDate} with ${MODEL} and web search...`);
const apiResponse = await fetch("https://api.openai.com/v1/responses", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: MODEL,
    instructions,
    input,
    tools: [{
      type: "web_search",
      search_context_size: "high",
      user_location: {
        type: "approximate",
        country: "GB",
        timezone: "Europe/London"
      }
    }],
    reasoning: { effort: "medium" },
    text: {
      verbosity: "medium",
      format: {
        type: "json_schema",
        name: "seven_gates_daily_brief",
        strict: true,
        schema
      }
    },
    max_output_tokens: 7000,
    store: false
  })
});

const responseText = await apiResponse.text();
if (!apiResponse.ok) {
  throw new Error(`OpenAI API ${apiResponse.status}: ${responseText}`);
}

let response;
try {
  response = JSON.parse(responseText);
} catch {
  throw new Error(`Could not parse OpenAI API response as JSON: ${responseText.slice(0, 1000)}`);
}

const outputText = response.output_text || response.output
  ?.flatMap((item) => item.type === "message" ? (item.content || []) : [])
  .find((item) => item.type === "output_text")?.text;

if (!outputText) {
  throw new Error(`OpenAI response contained no output_text. Status: ${response.status || "unknown"}`);
}

let brief;
try {
  brief = JSON.parse(outputText);
} catch {
  throw new Error(`Structured output was not valid JSON: ${outputText.slice(0, 1200)}`);
}

function clean(value) {
  return String(value || "")
    .replaceAll("—", ",")
    .replace(/\s+/g, " ")
    .trim();
}

function validUrl(value) {
  try {
    const url = new URL(String(value));
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function mdLink(name, url) {
  if (!validUrl(url)) throw new Error(`Model returned an invalid source URL: ${url}`);
  const safeName = clean(name).replaceAll("[", "").replaceAll("]", "");
  return `[${safeName}](${url})`;
}

function yaml(value) {
  return JSON.stringify(clean(value));
}

const sourcePairs = [];
for (const story of brief.stories) {
  for (const s of story.sources) sourcePairs.push([s.name, s.url]);
}
for (const n of brief.numbers) sourcePairs.push([n.sourceName, n.sourceUrl]);
for (const v of brief.visual.items) sourcePairs.push([v.sourceName, v.sourceUrl]);

for (const [, url] of sourcePairs) {
  if (!validUrl(url)) throw new Error(`Invalid source URL returned by model: ${url}`);
}

const uniqueSources = [];
const seen = new Set();
for (const [name, url] of sourcePairs) {
  if (seen.has(url)) continue;
  seen.add(url);
  uniqueSources.push([clean(name), url]);
}

function escapeXml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function wrapSvgText(text, maxChars = 42) {
  const words = clean(text).split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function svgTextLines(lines, x, y, className, lineHeight = 22) {
  return lines.map((line, i) => `<text x="${x}" y="${y + i * lineHeight}" class="${className}">${escapeXml(line)}</text>`).join("\n");
}

function renderVisual() {
  const items = brief.visual.items.slice(0, 4);
  const width = 1400;
  const height = 760;
  const ink = "#0B1F33";
  const brass = "#B08A3E";
  const canvas = "#F5F0E6";
  const parchment = "#EDE4D3";
  const muted = "#64707B";
  const white = "#FFFFFF";

  let body = "";
  if (visualType === "transmission_board") {
    const cardW = 280;
    const gap = 45;
    const startX = 55;
    items.forEach((item, i) => {
      const x = startX + i * (cardW + gap);
      body += `<rect x="${x}" y="270" width="${cardW}" height="300" rx="18" fill="${white}" stroke="${i === 0 ? brass : parchment}" stroke-width="${i === 0 ? 4 : 2}"/>`;
      body += `<text x="${x + 24}" y="318" class="label">${escapeXml(item.label.toUpperCase())}</text>`;
      body += `<text x="${x + 24}" y="375" class="value">${escapeXml(item.value)}</text>`;
      body += svgTextLines(wrapSvgText(item.detail, 31), x + 24, 425, "detail", 26);
      if (i < items.length - 1) {
        const ax = x + cardW + 10;
        body += `<path d="M ${ax} 420 L ${ax + 25} 420" stroke="${brass}" stroke-width="4"/>`;
        body += `<path d="M ${ax + 20} 411 L ${ax + 30} 420 L ${ax + 20} 429" fill="none" stroke="${brass}" stroke-width="4"/>`;
      }
    });
  } else if (visualType === "signal_board") {
    const cardW = items.length === 4 ? 300 : 390;
    const gap = 28;
    const startX = 55;
    items.forEach((item, i) => {
      const x = startX + i * (cardW + gap);
      body += `<rect x="${x}" y="250" width="${cardW}" height="330" rx="18" fill="${i === 0 ? ink : white}" stroke="${i === 0 ? ink : parchment}" stroke-width="2"/>`;
      body += `<text x="${x + 26}" y="305" class="${i === 0 ? "labelLight" : "label"}">${escapeXml(item.label.toUpperCase())}</text>`;
      body += `<text x="${x + 26}" y="385" class="${i === 0 ? "valueLight" : "value"}">${escapeXml(item.value)}</text>`;
      body += svgTextLines(wrapSvgText(item.detail, 34), x + 26, 440, i === 0 ? "detailLight" : "detail", 27);
      body += `<rect x="${x + 26}" y="535" width="${Math.max(60, cardW - 52)}" height="5" rx="2" fill="${brass}"/>`;
    });
  } else {
    const startY = 260;
    const rowH = 95;
    items.forEach((item, i) => {
      const y = startY + i * rowH;
      const barW = 930 - i * 145;
      body += `<text x="70" y="${y + 36}" class="rank">${String(i + 1).padStart(2, "0")}</text>`;
      body += `<rect x="150" y="${y}" width="${barW}" height="72" rx="12" fill="${i === 0 ? ink : white}" stroke="${i === 0 ? ink : parchment}" stroke-width="2"/>`;
      body += `<text x="178" y="${y + 31}" class="${i === 0 ? "labelLight" : "label"}">${escapeXml(item.label.toUpperCase())}</text>`;
      body += `<text x="178" y="${y + 59}" class="${i === 0 ? "detailLight" : "detail"}">${escapeXml(clean(item.detail).slice(0, 88))}</text>`;
      body += `<text x="${Math.min(1120, 150 + barW + 28)}" y="${y + 47}" class="valueSmall">${escapeXml(item.value)}</text>`;
    });
  }

  const sourceLine = uniqueSources.slice(0, 4).map(([name]) => name).join(" · ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
<title id="title">${escapeXml(brief.visual.title)}</title>
<desc id="desc">${escapeXml(brief.visual.alt)}</desc>
<style>
  .eyebrow{font:700 18px Arial,sans-serif;letter-spacing:3px;fill:${brass}}
  .title{font:700 50px Georgia,serif;fill:${ink}}
  .subtitle{font:400 24px Arial,sans-serif;fill:${muted}}
  .label{font:700 17px Arial,sans-serif;letter-spacing:1.5px;fill:${brass}}
  .labelLight{font:700 17px Arial,sans-serif;letter-spacing:1.5px;fill:${brass}}
  .value{font:700 35px Georgia,serif;fill:${ink}}
  .valueLight{font:700 35px Georgia,serif;fill:${white}}
  .valueSmall{font:700 26px Georgia,serif;fill:${ink}}
  .detail{font:400 20px Arial,sans-serif;fill:${ink}}
  .detailLight{font:400 20px Arial,sans-serif;fill:${white}}
  .rank{font:700 28px Georgia,serif;fill:${brass}}
  .source{font:400 15px Arial,sans-serif;fill:${muted}}
</style>
<rect width="1400" height="760" fill="${canvas}"/>
<rect x="0" y="0" width="1400" height="14" fill="${ink}"/>
<text x="55" y="72" class="eyebrow">SEVEN GATES RESEARCH · VISUAL OF THE DAY</text>
<text x="55" y="142" class="title">${escapeXml(brief.visual.title)}</text>
${svgTextLines(wrapSvgText(brief.visual.subtitle, 88), 55, 190, "subtitle", 30)}
${body}
<line x1="55" y1="690" x2="1345" y2="690" stroke="${parchment}" stroke-width="2"/>
<text x="55" y="724" class="source">Sources: ${escapeXml(sourceLine || "See article source links")}. Seven Gates Research, ${escapeXml(publishDate)}.</text>
</svg>`;
}

const visualFileName = `${publishDate}-visual.svg`;
const visualPath = path.join(VISUAL_DIR, visualFileName);
fs.writeFileSync(visualPath, renderVisual(), "utf8");

const lines = [];
lines.push("---");
lines.push("draft: false");
lines.push(`date: ${yaml(publishDate)}`);
lines.push(`title: ${yaml(brief.title)}`);
lines.push(`excerpt: ${yaml(brief.excerpt)}`);
lines.push(`readingTime: "5 min"`);
lines.push(`kicker: "SEVEN GATES DAILY BRIEF"`);
lines.push(`hero: ${yaml(`/images/briefings/${visualFileName}`)}`);
lines.push(`heroAlt: ${yaml(brief.visual.alt)}`);
lines.push(`heroCaption: ${yaml(`Seven Gates Research factual ${visualType.replaceAll("_", " ")}. Sources are linked in the briefing.`)}`);
lines.push("---", "");
lines.push(clean(brief.opening), "");

brief.stories.forEach((story, index) => {
  lines.push(`## ${index + 1}. ${clean(story.heading)}`, "");
  lines.push(clean(story.body), "");
  lines.push(`**Sources:** ${story.sources.map((s) => mdLink(s.name, s.url)).join(" · ")}`, "");
});

lines.push("## Three numbers worth remembering", "");
lines.push("| Number | Why it matters | Source |", "| --- | --- | --- |");
for (const n of brief.numbers) {
  lines.push(`| **${clean(n.value).replaceAll("|", "/")}** | ${clean(n.meaning).replaceAll("|", "/")} | ${mdLink(n.sourceName, n.sourceUrl)} |`);
}
lines.push("");
lines.push("## What could change everything?", "");
for (const hinge of brief.hinges) lines.push(`- ${clean(hinge)}`);
lines.push("");
lines.push("## Sources", "");
for (const [name, url] of uniqueSources) lines.push(`- ${mdLink(name, url)}`);
lines.push("");

const markdown = lines.join("\n").replaceAll("—", ",");
fs.writeFileSync(targetFile, markdown, "utf8");

setOutput("publish_date", publishDate);
setOutput("skipped", "false");
summary(`### Seven Gates Daily Brief\n\nGenerated \`${publishDate}.md\` with **${MODEL}**, web search and a **${visualType.replaceAll("_", " ")}** visual.`);
console.log(`Wrote ${path.relative(ROOT, targetFile)}`);
console.log(`Wrote ${path.relative(ROOT, visualPath)}`);
