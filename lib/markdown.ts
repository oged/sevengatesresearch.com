import { marked } from "marked";

/**
 * Renders article Markdown to HTML.
 *
 * Wide tables are wrapped in a scroll container so they scroll inside their own
 * box rather than forcing the whole page sideways. Doing it here — instead of
 * with `display:block` on the table itself — keeps the table semantics that
 * screen readers rely on.
 */
export function renderMarkdown(source: string): string {
  const html = marked.parse(source, { async: false }) as string;
  return html
    .replace(/<table>/g, '<div class="table-scroll"><table>')
    .replace(/<\/table>/g, "</table></div>");
}
