import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const { gfm } = require("turndown-plugin-gfm");

const BASE = (process.env.LEGACY_BASE_URL || "https://www.sevengatesresearch.com").replace(/\/+$/, "");
const BASE_URL = new URL(BASE);
const SITE_HOST = BASE_URL.hostname.replace(/^www\./, "");
const MIN_ITEMS = Number.parseInt(process.env.MIN_RESEARCH_ITEMS || "15", 10);
const OVERWRITE = String(process.env.RESEARCH_OVERWRITE || "false").toLowerCase() === "true";
const MAX_PAGES = Number.parseInt(process.env.MAX_RESEARCH_PAGES || "120", 10);

const root = process.cwd();
const contentDir = path.join(root, "content", "research");
const imageRoot = path.join(root, "public", "images", "research");
fs.mkdirSync(contentDir, { recursive: true });
fs.mkdirSync(imageRoot, { recursive: true });

const APP_FILES_B64 = {"lib/research.ts": "aW1wb3J0IGZzIGZyb20gIm5vZGU6ZnMiOwppbXBvcnQgcGF0aCBmcm9tICJub2RlOnBhdGgiOwppbXBvcnQgbWF0dGVyIGZyb20gImdyYXktbWF0dGVyIjsKaW1wb3J0IHsgbWFya2VkIH0gZnJvbSAibWFya2VkIjsKCmV4cG9ydCB0eXBlIFJlc2VhcmNoSXRlbSA9IHsKICBzbHVnOiBzdHJpbmc7CiAgZGF0ZTogc3RyaW5nOwogIHRpdGxlOiBzdHJpbmc7CiAgZXhjZXJwdDogc3RyaW5nOwogIHJlYWRpbmdUaW1lOiBzdHJpbmc7CiAga2lja2VyOiBzdHJpbmc7CiAgcmVzZWFyY2hUeXBlOiBzdHJpbmc7CiAgY2F0ZWdvcnk6IHN0cmluZzsKICB0aWNrZXI/OiBzdHJpbmc7CiAgcmVnaW9uPzogc3RyaW5nOwogIGhlcm8/OiBzdHJpbmc7CiAgaGVyb0FsdD86IHN0cmluZzsKICBoZXJvQ2FwdGlvbj86IHN0cmluZzsKICBsZWdhY3lVcmw/OiBzdHJpbmc7CiAgbGVnYWN5SW1wb3J0ZWQ/OiBib29sZWFuOwogIGRyYWZ0PzogYm9vbGVhbjsKICBodG1sOiBzdHJpbmc7Cn07Cgpjb25zdCBkaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgImNvbnRlbnQiLCAicmVzZWFyY2giKTsKCmZ1bmN0aW9uIGdldEZpbGVzKCkgewogIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSByZXR1cm4gW107CiAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKGRpcikuZmlsdGVyKChuYW1lKSA9PiBuYW1lLmVuZHNXaXRoKCIubWQiKSAmJiAhbmFtZS5zdGFydHNXaXRoKCJfIikpOwp9CgpmdW5jdGlvbiBwYXJzZShmaWxlTmFtZTogc3RyaW5nKTogUmVzZWFyY2hJdGVtIHsKICBjb25zdCByYXcgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGRpciwgZmlsZU5hbWUpLCAidXRmOCIpOwogIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKHJhdyk7CiAgcmV0dXJuIHsKICAgIHNsdWc6IFN0cmluZyhkYXRhLnNsdWcgfHwgZmlsZU5hbWUucmVwbGFjZSgvXC5tZCQvLCAiIikpLAogICAgZGF0ZTogU3RyaW5nKGRhdGEuZGF0ZSB8fCAiMjAyNi0wMS0wMSIpLAogICAgdGl0bGU6IFN0cmluZyhkYXRhLnRpdGxlIHx8ICJVbnRpdGxlZCByZXNlYXJjaCIpLAogICAgZXhjZXJwdDogU3RyaW5nKGRhdGEuZXhjZXJwdCB8fCAiIiksCiAgICByZWFkaW5nVGltZTogU3RyaW5nKGRhdGEucmVhZGluZ1RpbWUgfHwgIjggbWluIiksCiAgICBraWNrZXI6IFN0cmluZyhkYXRhLmtpY2tlciB8fCAiU0VWRU4gR0FURVMgUkVTRUFSQ0giKSwKICAgIHJlc2VhcmNoVHlwZTogU3RyaW5nKGRhdGEucmVzZWFyY2hUeXBlIHx8ICJSZXBvcnQiKSwKICAgIGNhdGVnb3J5OiBTdHJpbmcoZGF0YS5jYXRlZ29yeSB8fCAiUmVzZWFyY2giKSwKICAgIHRpY2tlcjogZGF0YS50aWNrZXIgPyBTdHJpbmcoZGF0YS50aWNrZXIpIDogdW5kZWZpbmVkLAogICAgcmVnaW9uOiBkYXRhLnJlZ2lvbiA/IFN0cmluZyhkYXRhLnJlZ2lvbikgOiB1bmRlZmluZWQsCiAgICBoZXJvOiBkYXRhLmhlcm8gPyBTdHJpbmcoZGF0YS5oZXJvKSA6IHVuZGVmaW5lZCwKICAgIGhlcm9BbHQ6IGRhdGEuaGVyb0FsdCA/IFN0cmluZyhkYXRhLmhlcm9BbHQpIDogdW5kZWZpbmVkLAogICAgaGVyb0NhcHRpb246IGRhdGEuaGVyb0NhcHRpb24gPyBTdHJpbmcoZGF0YS5oZXJvQ2FwdGlvbikgOiB1bmRlZmluZWQsCiAgICBsZWdhY3lVcmw6IGRhdGEubGVnYWN5VXJsID8gU3RyaW5nKGRhdGEubGVnYWN5VXJsKSA6IHVuZGVmaW5lZCwKICAgIGxlZ2FjeUltcG9ydGVkOiBCb29sZWFuKGRhdGEubGVnYWN5SW1wb3J0ZWQpLAogICAgZHJhZnQ6IEJvb2xlYW4oZGF0YS5kcmFmdCksCiAgICBodG1sOiBtYXJrZWQucGFyc2UoY29udGVudCwgeyBhc3luYzogZmFsc2UgfSkgYXMgc3RyaW5nLAogIH07Cn0KCmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxSZXNlYXJjaCgpIHsKICByZXR1cm4gZ2V0RmlsZXMoKS5tYXAocGFyc2UpLmZpbHRlcigoeCkgPT4gIXguZHJhZnQpLnNvcnQoKGEsIGIpID0+IHsKICAgIGNvbnN0IGJ5RGF0ZSA9IGIuZGF0ZS5sb2NhbGVDb21wYXJlKGEuZGF0ZSk7CiAgICByZXR1cm4gYnlEYXRlIHx8IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKTsKICB9KTsKfQoKZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoSXRlbShzbHVnOiBzdHJpbmcpIHsKICByZXR1cm4gZ2V0QWxsUmVzZWFyY2goKS5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHNsdWcpOwp9CgpleHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRlZFJlc2VhcmNoKHNsdWc6IHN0cmluZywgY291bnQgPSA2KSB7CiAgY29uc3QgY3VycmVudCA9IGdldFJlc2VhcmNoSXRlbShzbHVnKTsKICBpZiAoIWN1cnJlbnQpIHJldHVybiBbXTsKICBjb25zdCBhbGwgPSBnZXRBbGxSZXNlYXJjaCgpLmZpbHRlcigoeCkgPT4geC5zbHVnICE9PSBzbHVnKTsKICBjb25zdCBzYW1lQ2F0ZWdvcnkgPSBhbGwuZmlsdGVyKCh4KSA9PiB4LmNhdGVnb3J5ID09PSBjdXJyZW50LmNhdGVnb3J5KTsKICBjb25zdCByZXN0ID0gYWxsLmZpbHRlcigoeCkgPT4geC5jYXRlZ29yeSAhPT0gY3VycmVudC5jYXRlZ29yeSk7CiAgcmV0dXJuIFsuLi5zYW1lQ2F0ZWdvcnksIC4uLnJlc3RdLnNsaWNlKDAsIGNvdW50KTsKfQo=", "components/ResearchLibrary.tsx": "InVzZSBjbGllbnQiOwoKaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICJyZWFjdCI7CgpleHBvcnQgdHlwZSBSZXNlYXJjaFN1bW1hcnkgPSB7CiAgc2x1Zzogc3RyaW5nOwogIGRhdGU6IHN0cmluZzsKICB0aXRsZTogc3RyaW5nOwogIGV4Y2VycHQ6IHN0cmluZzsKICByZWFkaW5nVGltZTogc3RyaW5nOwogIHJlc2VhcmNoVHlwZTogc3RyaW5nOwogIGNhdGVnb3J5OiBzdHJpbmc7CiAgdGlja2VyPzogc3RyaW5nOwogIHJlZ2lvbj86IHN0cmluZzsKfTsKCmZ1bmN0aW9uIGh1bWFuRGF0ZShkYXRlOiBzdHJpbmcpIHsKICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoImVuLUdCIiwgeyBkYXk6ICJudW1lcmljIiwgbW9udGg6ICJzaG9ydCIsIHllYXI6ICJudW1lcmljIiwgdGltZVpvbmU6ICJVVEMiIH0pCiAgICAuZm9ybWF0KG5ldyBEYXRlKGAke2RhdGV9VDEyOjAwOjAwWmApKTsKfQoKZXhwb3J0IGZ1bmN0aW9uIFJlc2VhcmNoTGlicmFyeSh7IGl0ZW1zIH06IHsgaXRlbXM6IFJlc2VhcmNoU3VtbWFyeVtdIH0pIHsKICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCIiKTsKICBjb25zdCBba2luZCwgc2V0S2luZF0gPSB1c2VTdGF0ZSgiQWxsIik7CiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgiQWxsIik7CgogIGNvbnN0IGtpbmRzID0gdXNlTWVtbygoKSA9PiBbIkFsbCIsIC4uLkFycmF5LmZyb20obmV3IFNldChpdGVtcy5tYXAoKHgpID0+IHgucmVzZWFyY2hUeXBlKSkpLnNvcnQoKV0sIFtpdGVtc10pOwogIGNvbnN0IGNhdGVnb3JpZXMgPSB1c2VNZW1vKCgpID0+IFsiQWxsIiwgLi4uQXJyYXkuZnJvbShuZXcgU2V0KGl0ZW1zLm1hcCgoeCkgPT4geC5jYXRlZ29yeSkpKS5zb3J0KCldLCBbaXRlbXNdKTsKCiAgY29uc3QgZmlsdGVyZWQgPSB1c2VNZW1vKCgpID0+IHsKICAgIGNvbnN0IHEgPSBxdWVyeS50cmltKCkudG9Mb3dlckNhc2UoKTsKICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHsKICAgICAgaWYgKGtpbmQgIT09ICJBbGwiICYmIGl0ZW0ucmVzZWFyY2hUeXBlICE9PSBraW5kKSByZXR1cm4gZmFsc2U7CiAgICAgIGlmIChjYXRlZ29yeSAhPT0gIkFsbCIgJiYgaXRlbS5jYXRlZ29yeSAhPT0gY2F0ZWdvcnkpIHJldHVybiBmYWxzZTsKICAgICAgaWYgKCFxKSByZXR1cm4gdHJ1ZTsKICAgICAgcmV0dXJuIFtpdGVtLnRpdGxlLCBpdGVtLmV4Y2VycHQsIGl0ZW0udGlja2VyLCBpdGVtLmNhdGVnb3J5LCBpdGVtLnJlZ2lvbiwgaXRlbS5yZXNlYXJjaFR5cGVdCiAgICAgICAgLmZpbHRlcihCb29sZWFuKS5qb2luKCIgIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKTsKICAgIH0pOwogIH0sIFtpdGVtcywgcXVlcnksIGtpbmQsIGNhdGVnb3J5XSk7CgogIHJldHVybiA8PgogICAgPGRpdiBjbGFzc05hbWU9InJlc2VhcmNoLXRvb2xzIj4KICAgICAgPGxhYmVsIGNsYXNzTmFtZT0icmVzZWFyY2gtc2VhcmNoIj4KICAgICAgICA8c3Bhbj5TZWFyY2ggdGhlIGFyY2hpdmU8L3NwYW4+CiAgICAgICAgPGlucHV0IHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPSJHVENPLCBTZXBsYXQsIGRpdmlkZW5kcywgbmFpcmHigKYiIC8+CiAgICAgIDwvbGFiZWw+CiAgICAgIDxsYWJlbD4KICAgICAgICA8c3Bhbj5Xb3JrIHR5cGU8L3NwYW4+CiAgICAgICAgPHNlbGVjdCB2YWx1ZT17a2luZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRLaW5kKGUudGFyZ2V0LnZhbHVlKX0+CiAgICAgICAgICB7a2luZHMubWFwKCh4KSA9PiA8b3B0aW9uIGtleT17eH0+e3h9PC9vcHRpb24+KX0KICAgICAgICA8L3NlbGVjdD4KICAgICAgPC9sYWJlbD4KICAgICAgPGxhYmVsPgogICAgICAgIDxzcGFuPkNhdGVnb3J5PC9zcGFuPgogICAgICAgIDxzZWxlY3QgdmFsdWU9e2NhdGVnb3J5fSBvbkNoYW5nZT17KGUpID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX0+CiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHgpID0+IDxvcHRpb24ga2V5PXt4fT57eH08L29wdGlvbj4pfQogICAgICAgIDwvc2VsZWN0PgogICAgICA8L2xhYmVsPgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzc05hbWU9InJlc2VhcmNoLWNvdW50Ij57ZmlsdGVyZWQubGVuZ3RofSBwdWJsaXNoZWQgcGllY2V7ZmlsdGVyZWQubGVuZ3RoID09PSAxID8gIiIgOiAicyJ9PC9kaXY+CgogICAge2ZpbHRlcmVkLmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPSJjYXJkcyByZXNlYXJjaC1jYXJkcyI+CiAgICAgIHtmaWx0ZXJlZC5tYXAoKGl0ZW0pID0+IDxhcnRpY2xlIGNsYXNzTmFtZT0iY2FyZCByZXNlYXJjaC1jYXJkIiBrZXk9e2l0ZW0uc2x1Z30+CiAgICAgICAgPGRpdiBjbGFzc05hbWU9InJlc2VhcmNoLWNhcmQtbWV0YSI+CiAgICAgICAgICA8c3Bhbj57aXRlbS5yZXNlYXJjaFR5cGV9PC9zcGFuPgogICAgICAgICAgPHNwYW4+e2l0ZW0uY2F0ZWdvcnl9PC9zcGFuPgogICAgICAgICAge2l0ZW0udGlja2VyICYmIDxzcGFuPntpdGVtLnRpY2tlcn08L3NwYW4+fQogICAgICAgIDwvZGl2PgogICAgICAgIDx0aW1lPntodW1hbkRhdGUoaXRlbS5kYXRlKX0gwrcge2l0ZW0ucmVhZGluZ1RpbWV9PC90aW1lPgogICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPgogICAgICAgIDxwPntpdGVtLmV4Y2VycHR9PC9wPgogICAgICAgIDxhIGhyZWY9e2AvcmVzZWFyY2gvJHtpdGVtLnNsdWd9YH0+UmVhZCByZXNlYXJjaCDihpI8L2E+CiAgICAgIDwvYXJ0aWNsZT4pfQogICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9ImVtcHR5LXN0YXRlIj5ObyByZXNlYXJjaCBtYXRjaGVzIHRob3NlIGZpbHRlcnMuPC9kaXY+fQogIDwvPjsKfQo=", "app/research/page.tsx": "aW1wb3J0IHsgUmVzZWFyY2hMaWJyYXJ5IH0gZnJvbSAiQC9jb21wb25lbnRzL1Jlc2VhcmNoTGlicmFyeSI7CmltcG9ydCB7IGdldEFsbFJlc2VhcmNoIH0gZnJvbSAiQC9saWIvcmVzZWFyY2giOwoKZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0gewogIHRpdGxlOiAiUmVzZWFyY2ggTGlicmFyeSB8IFNldmVuIEdhdGVzIFJlc2VhcmNoIiwKICBkZXNjcmlwdGlvbjogIkNvbXBhbnkgdW5kZXJ3cml0ZXMsIG1hcmtldCBub3RlcyBhbmQgZXNzYXlzIGZyb20gU2V2ZW4gR2F0ZXMgUmVzZWFyY2guIiwKfTsKCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VhcmNoUGFnZSgpIHsKICBjb25zdCBpdGVtcyA9IGdldEFsbFJlc2VhcmNoKCkubWFwKCh7IGh0bWwsIGhlcm8sIGhlcm9BbHQsIGhlcm9DYXB0aW9uLCBsZWdhY3lVcmwsIGxlZ2FjeUltcG9ydGVkLCBkcmFmdCwga2lja2VyLCAuLi5pdGVtIH0pID0+IGl0ZW0pOwogIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9ImFyY2hpdmUiPgogICAgPGRpdiBjbGFzc05hbWU9InNoZWxsIj4KICAgICAgPGRpdiBjbGFzc05hbWU9ImFyY2hpdmUtaGVhZCI+CiAgICAgICAgPHAgY2xhc3NOYW1lPSJraWNrZXIiPlJFU0VBUkNIIMK3IFJFUE9SVFMgwrcgTk9URVMgwrcgRVNTQVlTPC9wPgogICAgICAgIDxoMT5Bcmd1bWVudHMgc29ydGVkIGJ5IHRoZSB3b3JrIHRoZXkgZG8uPC9oMT4KICAgICAgICA8cCBjbGFzc05hbWU9ImRlY2siPlJlcG9ydHMgdW5kZXJ3cml0ZSBjb21wYW5pZXMuIE5vdGVzIHVwZGF0ZSBhbiBhcmd1bWVudC4gRXNzYXlzIGV4YW1pbmUgbWFya2V0cywgaW5zdGl0dXRpb25zIGFuZCBwb3dlci4gR2VvZ3JhcGh5IGlzIGEgZmlsdGVyLCBub3QgYSBzZXBhcmF0ZSBjb3JyaWRvci48L3A+CiAgICAgIDwvZGl2PgogICAgICA8UmVzZWFyY2hMaWJyYXJ5IGl0ZW1zPXtpdGVtc30gLz4KICAgIDwvZGl2PgogIDwvc2VjdGlvbj47Cn0K", "app/research/[slug]/page.tsx": "aW1wb3J0IHR5cGUgeyBNZXRhZGF0YSB9IGZyb20gIm5leHQiOwppbXBvcnQgeyBub3RGb3VuZCB9IGZyb20gIm5leHQvbmF2aWdhdGlvbiI7CmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICJAL2NvbXBvbmVudHMvQnJpZWZpbmdDYXJkIjsKaW1wb3J0IHsgZ2V0QWxsUmVzZWFyY2gsIGdldFJlbGF0ZWRSZXNlYXJjaCwgZ2V0UmVzZWFyY2hJdGVtIH0gZnJvbSAiQC9saWIvcmVzZWFyY2giOwoKZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RhdGljUGFyYW1zKCkgewogIHJldHVybiBnZXRBbGxSZXNlYXJjaCgpLm1hcCgoeCkgPT4gKHsgc2x1ZzogeC5zbHVnIH0pKTsKfQoKZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWV0YWRhdGEoeyBwYXJhbXMgfTogeyBwYXJhbXM6IFByb21pc2U8eyBzbHVnOiBzdHJpbmcgfT4gfSk6IFByb21pc2U8TWV0YWRhdGE+IHsKICBjb25zdCB7IHNsdWcgfSA9IGF3YWl0IHBhcmFtczsKICBjb25zdCBpdGVtID0gZ2V0UmVzZWFyY2hJdGVtKHNsdWcpOwogIGlmICghaXRlbSkgcmV0dXJuIHt9OwogIHJldHVybiB7CiAgICB0aXRsZTogaXRlbS50aXRsZSwKICAgIGRlc2NyaXB0aW9uOiBpdGVtLmV4Y2VycHQsCiAgICBhbHRlcm5hdGVzOiB7IGNhbm9uaWNhbDogYC9yZXNlYXJjaC8ke2l0ZW0uc2x1Z31gIH0sCiAgICBvcGVuR3JhcGg6IHsKICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsCiAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmV4Y2VycHQsCiAgICAgIHR5cGU6ICJhcnRpY2xlIiwKICAgICAgcHVibGlzaGVkVGltZTogaXRlbS5kYXRlLAogICAgICBpbWFnZXM6IGl0ZW0uaGVybyA/IFtpdGVtLmhlcm9dIDogdW5kZWZpbmVkLAogICAgfSwKICB9Owp9CgpleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBSZXNlYXJjaEFydGljbGVQYWdlKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBQcm9taXNlPHsgc2x1Zzogc3RyaW5nIH0+IH0pIHsKICBjb25zdCB7IHNsdWcgfSA9IGF3YWl0IHBhcmFtczsKICBjb25zdCBpdGVtID0gZ2V0UmVzZWFyY2hJdGVtKHNsdWcpOwogIGlmICghaXRlbSkgbm90Rm91bmQoKTsKICBjb25zdCByZWxhdGVkID0gZ2V0UmVsYXRlZFJlc2VhcmNoKHNsdWcsIDYpOwoKICByZXR1cm4gPGFydGljbGUgY2xhc3NOYW1lPSJhcnRpY2xlLXNoZWxsIj4KICAgIDxoZWFkZXIgY2xhc3NOYW1lPSJhcnRpY2xlLWhlYWQiPgogICAgICA8cCBjbGFzc05hbWU9ImtpY2tlciI+e2l0ZW0ua2lja2VyfTwvcD4KICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+CiAgICAgIDxwIGNsYXNzTmFtZT0iZGVjayI+e2l0ZW0uZXhjZXJwdH08L3A+CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJtZXRhIj4KICAgICAgICA8c3Bhbj57Zm9ybWF0RGF0ZShpdGVtLmRhdGUpfTwvc3Bhbj4KICAgICAgICA8c3Bhbj57aXRlbS5yZWFkaW5nVGltZX0gcmVhZDwvc3Bhbj4KICAgICAgICA8c3Bhbj57aXRlbS5yZXNlYXJjaFR5cGV9PC9zcGFuPgogICAgICAgIDxzcGFuPntpdGVtLmNhdGVnb3J5fTwvc3Bhbj4KICAgICAgICB7aXRlbS50aWNrZXIgJiYgPHNwYW4+e2l0ZW0udGlja2VyfTwvc3Bhbj59CiAgICAgIDwvZGl2PgogICAgPC9oZWFkZXI+CgogICAge2l0ZW0uaGVybyAmJiA8ZmlndXJlIGNsYXNzTmFtZT0iYXJ0aWNsZS1oZXJvIj4KICAgICAgPGltZyBzcmM9e2l0ZW0uaGVyb30gYWx0PXtpdGVtLmhlcm9BbHQgfHwgaXRlbS50aXRsZX0gLz4KICAgICAge2l0ZW0uaGVyb0NhcHRpb24gJiYgPGZpZ2NhcHRpb24+e2l0ZW0uaGVyb0NhcHRpb259PC9maWdjYXB0aW9uPn0KICAgIDwvZmlndXJlPn0KCiAgICA8ZGl2IGNsYXNzTmFtZT0iYXJ0aWNsZS1ncmlkIj4KICAgICAgPGRpdj4KICAgICAgICA8ZGl2IGNsYXNzTmFtZT0icHJvc2UgcmVzZWFyY2gtcHJvc2UiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5odG1sIH19IC8+CiAgICAgICAgPGRpdiBjbGFzc05hbWU9ImRpc2NsYWltZXIiPjxzdHJvbmc+RGlzY2xhaW1lci48L3N0cm9uZz4gU2V2ZW4gR2F0ZXMgUmVzZWFyY2ggaXMgcHJvdmlkZWQgZm9yIGluZm9ybWF0aW9uYWwgYW5kIGVkdWNhdGlvbmFsIHB1cnBvc2VzIG9ubHkuIEl0IGlzIG5vdCBwZXJzb25hbCBpbnZlc3RtZW50LCBsZWdhbCwgdGF4IG9yIGZpbmFuY2lhbCBhZHZpY2UuIFByaWNlcywgYXNzdW1wdGlvbnMgYW5kIHZhbHVhdGlvbnMgYXJlIGRhdGVkIHJlc2VhcmNoIHNuYXBzaG90cy4gUmVhZGVycyBzaG91bGQgdmVyaWZ5IHRoZSBldmlkZW5jZSBhbmQgY29uc2lkZXIgdGhlaXIgb3duIGNpcmN1bXN0YW5jZXMgYmVmb3JlIG1ha2luZyBpbnZlc3RtZW50IGRlY2lzaW9ucy48L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIDxhc2lkZSBjbGFzc05hbWU9ImFzaWRlIj4KICAgICAgICA8ZGl2IGNsYXNzTmFtZT0iYXNpZGUtYm94Ij4KICAgICAgICAgIDxoMz5SZWxhdGVkIHJlc2VhcmNoPC9oMz4KICAgICAgICAgIHtyZWxhdGVkLmxlbmd0aCA/IDx1bCBjbGFzc05hbWU9ImFzaWRlLWxpc3QiPntyZWxhdGVkLm1hcCgoeCkgPT4gPGxpIGtleT17eC5zbHVnfT4KICAgICAgICAgICAgPHRpbWU+e2Zvcm1hdERhdGUoeC5kYXRlKX08L3RpbWU+CiAgICAgICAgICAgIDxhIGhyZWY9e2AvcmVzZWFyY2gvJHt4LnNsdWd9YH0+e3gudGl0bGV9PC9hPgogICAgICAgICAgPC9saT4pfTwvdWw+IDogPHA+Tm8gcmVsYXRlZCBtaWdyYXRlZCByZXNlYXJjaCB5ZXQuPC9wPn0KICAgICAgICAgIDxwPjxhIGhyZWY9Ii9yZXNlYXJjaCI+QnJvd3NlIGZ1bGwgcmVzZWFyY2ggYXJjaGl2ZSDihpI8L2E+PC9wPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3NOYW1lPSJhc2lkZS1ib3giPgogICAgICAgICAgPGgzPlNldmVuIEdhdGVzIHJ1bGU8L2gzPgogICAgICAgICAgPHA+SW50ZXJlc3RpbmcgZmlyc3QuIENvcnJlY3QgYWx3YXlzLjwvcD4KICAgICAgICA8L2Rpdj4KICAgICAgPC9hc2lkZT4KICAgIDwvZGl2PgogIDwvYXJ0aWNsZT47Cn0K", "app/page.tsx": "aW1wb3J0IHsgQnJpZWZpbmdDYXJkLCBmb3JtYXREYXRlIH0gZnJvbSAiQC9jb21wb25lbnRzL0JyaWVmaW5nQ2FyZCI7CmltcG9ydCB7IGdldEFsbEJyaWVmaW5ncyB9IGZyb20gIkAvbGliL2NvbnRlbnQiOwppbXBvcnQgeyBnZXRBbGxSZXNlYXJjaCB9IGZyb20gIkAvbGliL3Jlc2VhcmNoIjsKCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkgewogIGNvbnN0IGJyaWVmaW5ncyA9IGdldEFsbEJyaWVmaW5ncygpOwogIGNvbnN0IGxhdGVzdCA9IGJyaWVmaW5nc1swXTsKICBjb25zdCByZWNlbnQgPSBicmllZmluZ3Muc2xpY2UoMSwgNCk7CiAgY29uc3QgcmVzZWFyY2ggPSBnZXRBbGxSZXNlYXJjaCgpLnNsaWNlKDAsIDMpOwoKICByZXR1cm4gPD4KICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0iaGVybyI+PGRpdiBjbGFzc05hbWU9InNoZWxsIGhlcm8tZ3JpZCI+CiAgICAgIDxkaXY+CiAgICAgICAgPHAgY2xhc3NOYW1lPSJraWNrZXIiPlNFVkVOIEdBVEVTIFJFU0VBUkNIPC9wPgogICAgICAgIDxoMT5JbmRlcGVuZGVudCByZXNlYXJjaCBvbiBjb21wYW5pZXMsIG1hcmtldHMgYW5kIHBvd2VyLjwvaDE+CiAgICAgICAgPHAgY2xhc3NOYW1lPSJkZWNrIj5OaWdlcmlhbiBpbiBrbm93bGVkZ2UsIGludGVybmF0aW9uYWwgaW4gc2NvcGUsIHNjZXB0aWNhbCBieSBoYWJpdC4gVGhlIGFyZ3VtZW50IGNvbWVzIGZpcnN0LiBUaGUgYXJpdGhtZXRpYyBnZXRzIHRoZSBmaW5hbCB2b3RlLjwvcD4KICAgICAgPC9kaXY+CiAgICAgIDxhc2lkZSBjbGFzc05hbWU9Imhlcm8tY2FyZCI+CiAgICAgICAgPHAgY2xhc3NOYW1lPSJraWNrZXIiPkxBVEVTVCBEQUlMWSBCUklFRjwvcD4KICAgICAgICB7bGF0ZXN0ID8gPD48aDI+e2xhdGVzdC50aXRsZX08L2gyPjxwPntmb3JtYXREYXRlKGxhdGVzdC5kYXRlKX0gwrcge2xhdGVzdC5yZWFkaW5nVGltZX08L3A+PHA+e2xhdGVzdC5leGNlcnB0fTwvcD48YSBocmVmPXtgL2JyaWVmaW5nLyR7bGF0ZXN0LmRhdGV9YH0+UmVhZCB0b2RheeKAmXMgYnJpZWYg4oaSPC9hPjwvPgogICAgICAgIDogPD48aDI+TWlncmF0aW9uIGluIHByb2dyZXNzPC9oMj48cD5UaGUgcHVibGljYXRpb24gZW5naW5lIGlzIGxpdmUgaW4gc291cmNlIGNvbnRyb2wuPC9wPjxhIGhyZWY9Ii9icmllZmluZy9hcmNoaXZlIj5PcGVuIGFyY2hpdmUg4oaSPC9hPjwvPn0KICAgICAgPC9hc2lkZT4KICAgIDwvZGl2Pjwvc2VjdGlvbj4KCiAgICA8c2VjdGlvbiBjbGFzc05hbWU9InNlY3Rpb24iPjxkaXYgY2xhc3NOYW1lPSJzaGVsbCI+CiAgICAgIDxkaXYgY2xhc3NOYW1lPSJzZWN0aW9uLWhlYWRpbmciPjxoMj5MYXRlc3QgcmVzZWFyY2g8L2gyPjxhIGhyZWY9Ii9yZXNlYXJjaCI+RXhwbG9yZSBhbGwgcmVzZWFyY2gg4oaSPC9hPjwvZGl2PgogICAgICB7cmVzZWFyY2gubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9ImNhcmRzIj57cmVzZWFyY2gubWFwKChpdGVtKSA9PiA8YXJ0aWNsZSBjbGFzc05hbWU9ImNhcmQiIGtleT17aXRlbS5zbHVnfT4KICAgICAgICA8dGltZT57Zm9ybWF0RGF0ZShpdGVtLmRhdGUpfSDCtyB7aXRlbS5yZXNlYXJjaFR5cGV9PC90aW1lPgogICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPgogICAgICAgIDxwPntpdGVtLmV4Y2VycHR9PC9wPgogICAgICAgIDxhIGhyZWY9e2AvcmVzZWFyY2gvJHtpdGVtLnNsdWd9YH0+UmVhZCB0aGUgYW5hbHlzaXMg4oaSPC9hPgogICAgICA8L2FydGljbGU+KX08L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0iZW1wdHktc3RhdGUiPlJlc2VhcmNoIG1pZ3JhdGlvbiBpcyBpbiBwcm9ncmVzcy48L2Rpdj59CiAgICA8L2Rpdj48L3NlY3Rpb24+CgogICAgPHNlY3Rpb24gY2xhc3NOYW1lPSJzZWN0aW9uIj48ZGl2IGNsYXNzTmFtZT0ic2hlbGwiPgogICAgICA8ZGl2IGNsYXNzTmFtZT0ic2VjdGlvbi1oZWFkaW5nIj48aDI+UmVjZW50IGJyaWVmaW5nczwvaDI+PGEgaHJlZj0iL2JyaWVmaW5nL2FyY2hpdmUiPlZpZXcgYXJjaGl2ZSDihpI8L2E+PC9kaXY+CiAgICAgIHtyZWNlbnQubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9ImNhcmRzIj57cmVjZW50Lm1hcCgoaXRlbSkgPT4gPEJyaWVmaW5nQ2FyZCBrZXk9e2l0ZW0uZGF0ZX0gaXRlbT17aXRlbX0vPil9PC9kaXY+CiAgICAgIDogPGRpdiBjbGFzc05hbWU9ImVtcHR5LXN0YXRlIj5UaGUgYnJpZWZpbmcgYXJjaGl2ZSBwb3B1bGF0ZXMgYXV0b21hdGljYWxseSBmcm9tIDxjb2RlPmNvbnRlbnQvYnJpZWZpbmdzPC9jb2RlPi48L2Rpdj59CiAgICA8L2Rpdj48L3NlY3Rpb24+CgogICAgPHNlY3Rpb24gY2xhc3NOYW1lPSJzZWN0aW9uIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAidmFyKC0tcGFyY2htZW50KSIgfX0+PGRpdiBjbGFzc05hbWU9InNoZWxsIGhlcm8tZ3JpZCI+CiAgICAgIDxkaXY+CiAgICAgICAgPHAgY2xhc3NOYW1lPSJraWNrZXIiPlRIRSBTRVZFTiBHQVRFUzwvcD4KICAgICAgICA8aDI+SnVkZ2VtZW50IGJlZm9yZSBvcm5hbWVudC48L2gyPgogICAgICAgIDxwIGNsYXNzTmFtZT0iZGVjayI+T3duZXJzaGlwIGFuZCBnb3Zlcm5hbmNlLiBCdXNpbmVzcyBlY29ub21pY3MuIEZpbmFuY2lhbCBpbnRlZ3JpdHkuIENhcGl0YWwgYWxsb2NhdGlvbi4gQ29tcGV0aXRpdmUgZW5kdXJhbmNlLiBWYWx1YXRpb24gYW5kIGV4cGVjdGVkIHJldHVybi4gRG93bnNpZGUsIGNhdGFseXN0cyBhbmQgcG9ydGZvbGlvIGZpdC48L3A+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzTmFtZT0iaGVyby1jYXJkIj48aDM+SG91c2UgcnVsZTwvaDM+PHA+SW50ZXJlc3RpbmcgZmlyc3QuIENvcnJlY3QgYWx3YXlzLjwvcD48cD5TdHJvbmcgb3BpbmlvbnMsIGxvb3NlbHkgaGVsZC4gQ2FwaXRhbCwgdGlnaHRseSBoZWxkLjwvcD48L2Rpdj4KICAgIDwvZGl2Pjwvc2VjdGlvbj4KICA8Lz47Cn0K", "app/sitemap.ts": "aW1wb3J0IHR5cGUgeyBNZXRhZGF0YVJvdXRlIH0gZnJvbSAibmV4dCI7CmltcG9ydCB7IGdldEFsbEJyaWVmaW5ncyB9IGZyb20gIkAvbGliL2NvbnRlbnQiOwppbXBvcnQgeyBnZXRBbGxSZXNlYXJjaCB9IGZyb20gIkAvbGliL3Jlc2VhcmNoIjsKCmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpdGVtYXAoKTogTWV0YWRhdGFSb3V0ZS5TaXRlbWFwIHsKICBjb25zdCBiYXNlID0gImh0dHBzOi8vc2V2ZW5nYXRlc3Jlc2VhcmNoLmNvbSI7CiAgY29uc3Qgc3RhdGljUm91dGVzID0gWyIiLCAiL2JyaWVmaW5nIiwgIi9icmllZmluZy9hcmNoaXZlIiwgIi9yZXNlYXJjaCIsICIvYWJvdXQiXQogICAgLm1hcCgocm91dGUpID0+ICh7IHVybDogYCR7YmFzZX0ke3JvdXRlfWAsIGxhc3RNb2RpZmllZDogbmV3IERhdGUoKSB9KSk7CiAgY29uc3QgYnJpZWZzID0gZ2V0QWxsQnJpZWZpbmdzKCkubWFwKCh4KSA9PiAoewogICAgdXJsOiBgJHtiYXNlfS9icmllZmluZy8ke3guZGF0ZX1gLAogICAgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZShgJHt4LmRhdGV9VDEyOjAwOjAwWmApLAogIH0pKTsKICBjb25zdCByZXNlYXJjaCA9IGdldEFsbFJlc2VhcmNoKCkubWFwKCh4KSA9PiAoewogICAgdXJsOiBgJHtiYXNlfS9yZXNlYXJjaC8ke3guc2x1Z31gLAogICAgbGFzdE1vZGlmaWVkOiBuZXcgRGF0ZShgJHt4LmRhdGV9VDEyOjAwOjAwWmApLAogIH0pKTsKICByZXR1cm4gWy4uLnN0YXRpY1JvdXRlcywgLi4uYnJpZWZzLCAuLi5yZXNlYXJjaF07Cn0K"};
const RESEARCH_CSS_B64 = "Ci8qIFJFU0VBUkNIX01JR1JBVElPTl9TVFlMRVNfU1RBUlQgKi8KLnJlc2VhcmNoLXRvb2xze2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDI2MHB4LDEuNGZyKSBtaW5tYXgoMTYwcHgsLjVmcikgbWlubWF4KDE4MHB4LC42ZnIpO2dhcDoxNHB4O21hcmdpbjoyNnB4IDAgMTJweDtwYWRkaW5nOjE4cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS10cmF2ZXJ0aW5lKTtiYWNrZ3JvdW5kOnZhcigtLXBhcmNobWVudCl9Ci5yZXNlYXJjaC10b29scyBsYWJlbHtkaXNwbGF5OmdyaWQ7Z2FwOjdweDtjb2xvcjp2YXIoLS1zbGF0ZSk7Zm9udDo2MDAgMTBweC8xLjIgdmFyKC0tZm9udC1pbnRlcmZhY2UpLHNhbnMtc2VyaWY7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi4wOGVtfQoucmVzZWFyY2gtdG9vbHMgaW5wdXQsLnJlc2VhcmNoLXRvb2xzIHNlbGVjdHt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgdmFyKC0tdHJhdmVydGluZSk7YmFja2dyb3VuZDojZmZmZGY4O2NvbG9yOnZhcigtLWluayk7cGFkZGluZzoxMXB4IDEycHg7Zm9udDo1MDAgMTRweC8xLjMgdmFyKC0tZm9udC1pbnRlcmZhY2UpLHNhbnMtc2VyaWY7Ym9yZGVyLXJhZGl1czowfQoucmVzZWFyY2gtdG9vbHMgaW5wdXQ6Zm9jdXMsLnJlc2VhcmNoLXRvb2xzIHNlbGVjdDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1icmFzcy1saWdodCk7b3V0bGluZS1vZmZzZXQ6MXB4fQoucmVzZWFyY2gtY291bnR7bWFyZ2luOjAgMCAxOHB4O2NvbG9yOnZhcigtLWJyYXNzKTtmb250OjYwMCAxMXB4IHZhcigtLWZvbnQtaW50ZXJmYWNlKSxzYW5zLXNlcmlmO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtsZXR0ZXItc3BhY2luZzouMDhlbX0KLnJlc2VhcmNoLWNhcmRze2FsaWduLWl0ZW1zOnN0cmV0Y2h9LnJlc2VhcmNoLWNhcmR7bWluLWhlaWdodDoyODBweH0ucmVzZWFyY2gtY2FyZC1tZXRhe2Rpc3BsYXk6ZmxleDtnYXA6NnB4O2ZsZXgtd3JhcDp3cmFwO21hcmdpbi1ib3R0b206MTBweH0KLnJlc2VhcmNoLWNhcmQtbWV0YSBzcGFue2JvcmRlcjoxcHggc29saWQgdmFyKC0tdHJhdmVydGluZSk7cGFkZGluZzo0cHggN3B4O2NvbG9yOnZhcigtLXNsYXRlKTtmb250OjYwMCA5cHgvMSB2YXIoLS1mb250LWludGVyZmFjZSksc2Fucy1zZXJpZjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bGV0dGVyLXNwYWNpbmc6LjA2ZW19Ci5yZXNlYXJjaC1wcm9zZSBmaWd1cmV7bWFyZ2luOjMwcHggMDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRyYXZlcnRpbmUpO2JhY2tncm91bmQ6dmFyKC0tcGFyY2htZW50KX0KLnJlc2VhcmNoLXByb3NlIGZpZ3VyZSBpbWd7d2lkdGg6MTAwJX0ucmVzZWFyY2gtcHJvc2UgZmlnY2FwdGlvbntwYWRkaW5nOjlweCAxMnB4O2NvbG9yOnZhcigtLXNsYXRlKTtmb250OjExcHgvMS40NSB2YXIoLS1mb250LWludGVyZmFjZSksc2Fucy1zZXJpZn0KLnJlc2VhcmNoLXByb3NlIGltZ3ttYXJnaW46MjRweCBhdXRvfS5yZXNlYXJjaC1wcm9zZSBocntib3JkZXI6MDtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS10cmF2ZXJ0aW5lKTttYXJnaW46MzhweCAwfQpAbWVkaWEobWF4LXdpZHRoOjgyMHB4KXsucmVzZWFyY2gtdG9vbHN7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcn0ucmVzZWFyY2gtY2FyZHttaW4taGVpZ2h0OjB9fQovKiBSRVNFQVJDSF9NSUdSQVRJT05fU1RZTEVTX0VORCAqLwo=";

function decode(s) { return Buffer.from(s, "base64").toString("utf8"); }
function sameSite(url) { return url.hostname.replace(/^www\./, "") === SITE_HOST; }
function squash(v) { return String(v || "").replace(/\s+/g, " ").trim(); }
function yaml(v) { return JSON.stringify(String(v ?? "")); }
function slugify(v) {
  return String(v || "").toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 90) || "image";
}
function normalisePageUrl(raw, base = BASE) {
  try {
    const u = new URL(raw, base);
    if (!sameSite(u)) return null;
    u.protocol = BASE_URL.protocol;
    u.host = BASE_URL.host;
    u.hash = "";
    u.search = "";
    return u.href.replace(/\/+$/, "");
  } catch { return null; }
}
function isResearchArticle(url) {
  try {
    const u = new URL(url);
    return /^\/research\/[^/?#]+\/?$/.test(u.pathname);
  } catch { return false; }
}
async function fetchText(url, attempts = 3) {
  let last;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, {
        redirect: "follow",
        headers: {
          "user-agent": "Mozilla/5.0 (compatible; SevenGatesMigration/1.0; +https://sevengatesresearch.com)",
          "accept": "text/html,application/xhtml+xml",
          "accept-language": "en-GB,en;q=0.9",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      last = err;
      await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    }
  }
  throw last;
}
function discoverLinks(html, sourceUrl) {
  const $ = cheerio.load(html);
  const found = new Set();
  $("a[href]").each((_, el) => {
    const candidate = normalisePageUrl($(el).attr("href"), sourceUrl);
    if (candidate && isResearchArticle(candidate)) found.add(candidate);
  });
  return found;
}
function parseDate(text, html$) {
  const meta = html$('meta[property="article:published_time"]').attr("content")
    || html$('meta[name="date"]').attr("content")
    || html$('time[datetime]').first().attr("datetime");
  if (meta) {
    const d = new Date(meta);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  const months = {
    january:"01", february:"02", march:"03", april:"04", may:"05", june:"06",
    july:"07", august:"08", september:"09", october:"10", november:"11", december:"12"
  };
  const m = text.match(/\b([0-3]?\d)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(20\d{2})\b/i);
  if (m) return `${m[3]}-${months[m[2].toLowerCase()]}-${String(m[1]).padStart(2, "0")}`;
  return "2026-01-01";
}
function inferReadingTime(text) {
  const m = text.match(/\b(\d{1,3})\s*min(?:ute)?s?(?:\s*read)?\b/i);
  return m ? `${m[1]} min` : `${Math.max(4, Math.round(text.split(/\s+/).length / 220))} min`;
}
function inferType(text) {
  const s = text.toLowerCase();
  if (s.includes("macro commentary") || s.includes("essays") || s.includes("essay")) return "Essay";
  if (s.includes("notes") || s.includes("research note") || s.includes("updated")) return "Note";
  if (s.includes("deep dive") || s.includes("company analysis") || s.includes("earnings underwrite") || s.includes("report")) return "Report";
  return "Report";
}
function inferCategory(text) {
  const candidates = [
    "Energy & commodities","Telecommunications","Consumer goods","Agriculture","Hospitality",
    "Financials","Banking","Insurance","Macro","Energy","Technology","Markets","Politics"
  ];
  const lower = text.toLowerCase();
  return candidates.find((x) => lower.includes(x.toLowerCase())) || "Research";
}
function inferTicker(text) {
  const ngx = text.match(/\bNGX\s*:\s*([A-Z0-9]{2,12})\b/);
  if (ngx) return ngx[1];
  const labeled = text.match(/\b(?:Ticker|Symbol)\s*[:·]\s*([A-Z0-9]{2,12})\b/i);
  return labeled ? labeled[1].toUpperCase() : "";
}
function inferRegion(text) {
  const lower = text.toLowerCase();
  if (lower.includes("nigeria")) return "Nigeria";
  if (lower.includes("africa")) return "Africa";
  return "Global";
}
function assetExtension(contentType, url) {
  const ct = String(contentType || "").toLowerCase();
  if (ct.includes("image/svg")) return ".svg";
  if (ct.includes("image/png")) return ".png";
  if (ct.includes("image/webp")) return ".webp";
  if (ct.includes("image/gif")) return ".gif";
  if (ct.includes("image/jpeg")) return ".jpg";
  try {
    const ext = path.extname(new URL(url).pathname).toLowerCase();
    if (/^\.(png|jpe?g|webp|gif|svg)$/.test(ext)) return ext === ".jpeg" ? ".jpg" : ext;
  } catch {}
  return ".img";
}
function unwrapNextImage(raw, baseUrl) {
  try {
    const u = new URL(raw, baseUrl);
    if (u.pathname === "/_next/image" && u.searchParams.get("url")) {
      return new URL(u.searchParams.get("url"), baseUrl).href;
    }
    return u.href;
  } catch { return null; }
}
async function downloadAsset(raw, baseUrl, slug, hint, index, assetMap) {
  const abs0 = unwrapNextImage(raw, baseUrl);
  if (!abs0) return null;
  if (assetMap.has(abs0)) return assetMap.get(abs0);
  try {
    const res = await fetch(abs0, {
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0 (compatible; SevenGatesMigration/1.0)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const bytes = Buffer.from(await res.arrayBuffer());
    if (!bytes.length) throw new Error("empty asset");
    const ext = assetExtension(res.headers.get("content-type"), abs0);
    if (ext === ".img") throw new Error(`unrecognised content type ${res.headers.get("content-type")}`);
    const dir = path.join(imageRoot, slug);
    fs.mkdirSync(dir, { recursive: true });
    const digest = crypto.createHash("sha1").update(abs0).digest("hex").slice(0, 8);
    const file = `${String(index).padStart(2, "0")}-${slugify(hint)}-${digest}${ext}`;
    fs.writeFileSync(path.join(dir, file), bytes);
    const local = `/images/research/${slug}/${file}`;
    assetMap.set(abs0, local);
    return local;
  } catch (err) {
    console.warn(`Asset skipped for ${slug}: ${abs0} (${err.message})`);
    return null;
  }
}
async function localiseImages($, main, pageUrl, slug) {
  const assetMap = new Map();
  const images = main.find("img").toArray();
  let index = 1;
  for (const el of images) {
    const node = $(el);
    let raw = node.attr("src") || node.attr("data-src");
    if (!raw) {
      const srcset = node.attr("srcset") || node.attr("data-srcset");
      if (srcset) raw = srcset.split(",").pop().trim().split(/\s+/)[0];
    }
    if (!raw || raw.startsWith("data:")) continue;
    const alt = squash(node.attr("alt")) || `research-image-${index}`;
    const local = await downloadAsset(raw, pageUrl, slug, alt, index++, assetMap);
    if (local) {
      node.attr("src", local);
      node.removeAttr("srcset").removeAttr("data-src").removeAttr("data-srcset").removeAttr("loading");
      node.closest("picture").find("source").remove();
    }
  }
  main.find("a[href]").each((_, el) => {
    const node = $(el);
    const href = node.attr("href");
    if (!href) return;
    const abs = unwrapNextImage(href, pageUrl);
    if (abs && assetMap.has(abs)) node.attr("href", assetMap.get(abs));
  });
  return assetMap;
}
function trimMarkdown(markdown, title, excerpt) {
  let lines = markdown.replace(/\r/g, "").split("\n");
  const h1 = lines.findIndex((line) => /^#\s+/.test(line.trim()));
  if (h1 >= 0) lines = lines.slice(h1 + 1);
  while (lines.length && !lines[0].trim()) lines.shift();

  const ex = squash(excerpt);
  for (let i = 0; i < Math.min(12, lines.length); i++) {
    if (ex && squash(lines[i].replace(/^>\s*/, "")) === ex) {
      lines.splice(i, 1);
      break;
    }
  }
  while (lines.length && !lines[0].trim()) lines.shift();

  const tailPatterns = [/^\[?Previous report/i, /^\[?Research library/i, /^Browse all reports/i];
  let cut = -1;
  for (let i = Math.floor(lines.length * 0.65); i < lines.length; i++) {
    if (tailPatterns.some((r) => r.test(lines[i].trim()))) { cut = i; break; }
  }
  if (cut >= 0) lines = lines.slice(0, cut);

  return lines.join("\n").replace(/\n{4,}/g, "\n\n\n").trim() + "\n";
}
async function importArticle(url) {
  const slug = new URL(url).pathname.split("/").filter(Boolean).pop();
  const target = path.join(contentDir, `${slug}.md`);
  if (fs.existsSync(target) && !OVERWRITE) {
    console.log(`Skip existing ${slug}`);
    return { slug, url, skipped: true };
  }

  const html = await fetchText(url);
  const $ = cheerio.load(html);
  const main = $("main").first().length ? $("main").first().clone() : $("body").first().clone();
  main.find("script,style,noscript,form,nav,footer,header.site-header,.site-header,.site-footer").remove();

  const title = squash(main.find("h1").first().text()) || squash($("title").first().text()).replace(/\s*\|\s*Seven Gates Research.*$/i, "");
  if (!title) throw new Error("title not found");

  const metaDescription = squash($('meta[name="description"]').attr("content"));
  const firstAfterH1 = squash(main.find("h1").first().nextAll("p").first().text());
  const excerpt = metaDescription || firstAfterH1 || squash(main.find("p").first().text()).slice(0, 260);
  const pageText = squash(main.text());
  const date = parseDate(pageText, $);
  const readingTime = inferReadingTime(pageText);
  const researchType = inferType(pageText);
  const category = inferCategory(pageText);
  const ticker = inferTicker(pageText);
  const region = inferRegion(pageText);

  const assetMap = await localiseImages($, main, url, slug);

  let hero = "";
  let heroAlt = "";
  let heroCaption = "";
  const ogImage = $('meta[property="og:image"]').attr("content") || $('meta[name="twitter:image"]').attr("content");
  if (ogImage) {
    const ogAbs = unwrapNextImage(ogImage, url);
    hero = ogAbs && assetMap.get(ogAbs) || await downloadAsset(ogImage, url, slug, "editorial-hero", 0, assetMap) || "";
  }
  if (hero) {
    const heroImg = main.find(`img[src="${hero}"]`).first();
    if (heroImg.length) {
      heroAlt = squash(heroImg.attr("alt"));
      const fig = heroImg.closest("figure");
      heroCaption = squash(fig.find("figcaption").first().text());
      if (fig.length) fig.remove(); else heroImg.remove();
    }
  }

  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*",
    strongDelimiter: "**",
  });
  td.use(gfm);
  td.keep(["figure", "figcaption"]);
  let markdown = td.turndown(main.html() || "");
  markdown = trimMarkdown(markdown, title, excerpt);

  const substantial = markdown.replace(/\[[^\]]+\]\([^)]+\)/g, "").replace(/[#*_>`|~-]/g, "").trim();
  if (substantial.length < 900) throw new Error(`body suspiciously short (${substantial.length} chars)`);

  const fm = [
    "---",
    "draft: false",
    "legacyImported: true",
    `legacyUrl: ${yaml(url)}`,
    `slug: ${yaml(slug)}`,
    `date: ${yaml(date)}`,
    `title: ${yaml(title)}`,
    `excerpt: ${yaml(excerpt.slice(0, 420))}`,
    `readingTime: ${yaml(readingTime)}`,
    `kicker: ${yaml(`SEVEN GATES RESEARCH · ${researchType.toUpperCase()}`)}`,
    `researchType: ${yaml(researchType)}`,
    `category: ${yaml(category)}`,
    ...(ticker ? [`ticker: ${yaml(ticker)}`] : []),
    `region: ${yaml(region)}`,
    ...(hero ? [`hero: ${yaml(hero)}`] : []),
    ...(heroAlt ? [`heroAlt: ${yaml(heroAlt)}`] : []),
    ...(heroCaption ? [`heroCaption: ${yaml(heroCaption)}`] : []),
    "---",
    "",
  ].join("\n");

  fs.writeFileSync(target, fm + markdown, "utf8");
  console.log(`Imported ${date} · ${slug} · ${title} · ${assetMap.size} asset(s)`);
  return { slug, url, title, date, readingTime, researchType, category, ticker, region, assets: assetMap.size };
}
function bootstrapApplication() {
  for (const [relative, encoded] of Object.entries(APP_FILES_B64)) {
    const target = path.join(root, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, decode(encoded), "utf8");
    console.log(`Bootstrapped ${relative}`);
  }

  const cssPath = path.join(root, "app", "globals.css");
  const css = fs.readFileSync(cssPath, "utf8");
  const start = "/* RESEARCH_MIGRATION_STYLES_START */";
  const end = "/* RESEARCH_MIGRATION_STYLES_END */";
  const block = decode(RESEARCH_CSS_B64).trim() + "\n";
  let next;
  if (css.includes(start) && css.includes(end)) {
    const pattern = new RegExp(`${start.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n?`);
    next = css.replace(pattern, block);
  } else {
    next = css.trimEnd() + "\n\n" + block;
  }
  fs.writeFileSync(cssPath, next, "utf8");
  console.log("Updated app/globals.css");
}
async function main() {
  bootstrapApplication();

  const seeds = [
    `${BASE}/research`,
    `${BASE}/`,
    `${BASE}/companies`,
  ];
  const articleUrls = new Set();
  const seenSeeds = new Set();

  for (const seed of seeds) {
    try {
      const html = await fetchText(seed);
      for (const url of discoverLinks(html, seed)) articleUrls.add(url);
      seenSeeds.add(seed);
      console.log(`Discovery seed ${seed}: ${articleUrls.size} research link(s) found so far`);
    } catch (err) {
      console.warn(`Discovery seed failed ${seed}: ${err.message}`);
    }
  }

  const queue = [...articleUrls];
  const crawledArticles = new Set();
  while (queue.length && crawledArticles.size < MAX_PAGES) {
    const url = queue.shift();
    if (crawledArticles.has(url)) continue;
    crawledArticles.add(url);
    try {
      const html = await fetchText(url);
      for (const linked of discoverLinks(html, url)) {
        if (!articleUrls.has(linked)) {
          articleUrls.add(linked);
          queue.push(linked);
        }
      }
    } catch (err) {
      console.warn(`Link expansion failed ${url}: ${err.message}`);
    }
  }

  const urls = [...articleUrls].sort();
  if (urls.length < MIN_ITEMS) {
    throw new Error(`Only ${urls.length} research URLs discovered; minimum safety threshold is ${MIN_ITEMS}. Refusing migration.`);
  }
  console.log(`Discovered ${urls.length} live research article URL(s).`);

  const results = [];
  const failures = [];
  for (const url of urls) {
    try {
      results.push(await importArticle(url));
    } catch (err) {
      failures.push({ url, error: err.message });
      console.error(`FAILED ${url}: ${err.message}`);
    }
  }

  const importedFiles = fs.readdirSync(contentDir).filter((x) => x.endsWith(".md") && !x.startsWith("_"));
  if (importedFiles.length < MIN_ITEMS) {
    throw new Error(`Only ${importedFiles.length} research Markdown files exist after migration; minimum is ${MIN_ITEMS}.`);
  }

  const manifest = {
    migratedAt: new Date().toISOString(),
    legacyBaseUrl: BASE,
    discovered: urls.length,
    markdownFiles: importedFiles.length,
    successfulThisRun: results.filter((x) => !x.skipped).length,
    skippedExisting: results.filter((x) => x.skipped).length,
    failures,
    items: results,
  };
  fs.writeFileSync(path.join(contentDir, "_migration-manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

  console.log(`Research migration complete: ${importedFiles.length} Markdown file(s), ${failures.length} failure(s).`);
  if (failures.length) console.log(JSON.stringify(failures, null, 2));
}
await main();
