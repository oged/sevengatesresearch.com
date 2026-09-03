"use client";

import { useMemo, useState } from "react";

export type ResearchSummary = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  readingTime: string;
  researchType: string;
  category: string;
  ticker?: string;
  region?: string;
};

function humanDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T12:00:00Z`));
}

export function ResearchLibrary({ items }: { items: ResearchSummary[] }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("All");
  const [category, setCategory] = useState("All");

  const kinds = useMemo(() => ["All", ...Array.from(new Set(items.map((x) => x.researchType))).sort()], [items]);
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((x) => x.category))).sort()], [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (kind !== "All" && item.researchType !== kind) return false;
      if (category !== "All" && item.category !== category) return false;
      if (!q) return true;
      return [item.title, item.excerpt, item.ticker, item.category, item.region, item.researchType]
        .filter(Boolean).join(" ").toLowerCase().includes(q);
    });
  }, [items, query, kind, category]);

  return <>
    <div className="research-tools">
      <label className="research-search">
        <span>Search the archive</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="GTCO, Seplat, dividends, naira…" />
      </label>
      <label>
        <span>Work type</span>
        <select value={kind} onChange={(e) => setKind(e.target.value)}>
          {kinds.map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
      <label>
        <span>Category</span>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
    </div>

    <div className="research-count">{filtered.length} published piece{filtered.length === 1 ? "" : "s"}</div>

    {filtered.length ? <div className="cards research-cards">
      {filtered.map((item) => <article className="card research-card" key={item.slug}>
        <div className="research-card-meta">
          <span>{item.researchType}</span>
          <span>{item.category}</span>
          {item.ticker && <span>{item.ticker}</span>}
        </div>
        <time>{humanDate(item.date)} · {item.readingTime}</time>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <a href={`/research/${item.slug}`}>Read research →</a>
      </article>)}
    </div> : <div className="empty-state">No research matches those filters.</div>}
  </>;
}
