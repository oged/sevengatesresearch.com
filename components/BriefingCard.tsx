import type { Briefing } from "@/lib/content";

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
  }).format(new Date(`${date}T12:00:00Z`));
}

export function BriefingCard({ item }: { item: Briefing }) {
  return (
    <article className="card">
      <time dateTime={item.date}>{formatDate(item.date)} &middot; {item.readingTime}</time>
      <h3><a href={`/briefing/${item.date}`}>{item.title}</a></h3>
      <p>{item.excerpt}</p>
      <a href={`/briefing/${item.date}`}>Read brief &rarr;</a>
    </article>
  );
}
