# Lessons register

Every rule in this OS that came from a real defect or correction, with its evidence. Seven Gates evidence is cited by commit in this repository; session evidence by date. Lessons from employer and consulting work are kept in the private edition; only general writing rules appear here. New lessons take the next free number (`learning/loop.md` section 2).

## Seven Gates publishing (L1 to L27, carried from standard v6.4)

| ID | What happened | Rule | Lives in |
|---|---|---|---|
| L1 | A truncated hero shipped on GDP Does Not Pay the Coupon (01ccf53). | Open every binary and confirm it decodes in full. | seven-gates G20 |
| L2 | Charts shipped with clipped labels, a hand-drawn Africa map and a brief label fixed after publication (7c13655, 841f2bb). | Redraw from cited data; real geography; render check on every figure. | seven-gates 7 |
| L3 | The SAHCO and NAHCO note needed its analytical exhibits restored (fd4eefa). | Inventory before and after any rewrite. | longform 6 |
| L4 | A refresh overwrote the ledger from an older copy; a merge conflict hit the ledger (66ef689, 242c85f). | Pull before editing shared files; never write from an older copy. | memory 6 |
| L5 | Archive below standard: missing horizons, disclaimers, labels; em dashes; a published "red team"; fused bylines (66ef689, 55daab6). | Mechanical scans; standard disclaimer verbatim; byline on its own line. | seven-gates 9 |
| L6 | Wrong byline date on page and PDF (f829747, b3d3f34). | One date on every surface. | seven-gates G22 |
| L7 | A derived dollar price was US$0.136 where the inputs gave US$0.146 (Vitafoam, logged 3 October 2026). | Recompute every derived number from its inputs. | evidence 3 |
| L8 | Daily Brief visuals drifted to an older palette (8f0bf5f, bc0500a). | Locked palette and a deprecated-values list. | templates/sevengates |
| L9 | A ledger entry went in a separate later commit (a92f89e after d8bd40c). | Ledger entry in the same commit as the article. | memory 5 |
| L10 | Five-year charts added after publication (91a045d, f66fd19 after 175d45f). | Schedule the chart at the planning step; ship it with the article. | seven-gates 7 |
| L11 | The validator reads only briefings; research has no automated gate. | Run `tools/lokoja_lint.py` on research until a validator exists. | seven-gates 8 |
| L12 | Two documents both called v0.4; the v6.2 PDF and repository v0.6 diverged. | One file, one version. | changelog |
| L13 | Section numbers are cited by skills and the ledger. | Section numbers and gate IDs are stable. | seven-gates 9 |
| L14 | The v6.2 gate used sub-letters and restarting numbers. | Stable IDs, no sub-letters. | seven-gates 9 |
| L15 | A rewritten piece landed outside its mode range (da1f7b9). | Record accepted length and reason. | seven-gates 3 |
| L16 | The standard contradicted itself (denominator heading, billing idiom, named signatures). | Check each version against its own retirement register. | memory 2 |
| L17 | Blank lines inside HTML blocks broke Markdown; wide tables overflowed. | No blank lines in HTML blocks; wrap wide tables. | seven-gates 8 |
| L18 | Bracketed evidence tags "stick out like sore thumb" (The editor, Chellarams, 23 October 2026); high-risk claims lacked links. | Labels carried in prose; inline links for high-risk claims. | evidence 1 |
| L19 | A Steinbeck paraphrase already used on 25 September reached the first Chellarams text; the editor caught it ("We have used this reference before"). | Check the final text against the ledger. | memory 5 |
| L20 | The Chellarams hero map route ran the wrong way; the editor caught it. | Check maps and routes in AI art against a real map. | seven-gates 2 |
| L21 | The editor asked for long lyric blocks; four lines of Genesis and two of Hotel California were quoted, the rest paraphrased. | Lyrics about 25 words at most, credited and recorded. | evidence 8 |
| L22 | Five-year charts built from 6 to 19 dated closes because vendor pages were blocked (five sessions). | Sparse series plotted as dated observations, disclosed. | seven-gates 7 |
| L23 | A court ruling and two dates could not be re-opened at the cut-off. | Verification exceptions: disclosed, not load-bearing, owned. | evidence 7 |
| L24 | Thin-stock liquidity was clearer in naira turnover than in vendor averages. | Show turnover in money and recent sessions. | seven-gates 4 |
| L25 | The Chellarams PDF and its link arrived in a third commit. | Print from the final page; ship with the article. | seven-gates 8 |
| L26 | Reading time moved from 19 to 20 minutes after revision. | Recompute reading time after the final edit. | seven-gates 8 |
| L27 | The first-person opening disclosed holdings while author disclosure was deferred. | A mentioned holding is a disclosure and must be true. | voice 1 |

## Added in Lokoja OS 6.6

| ID | What happened | Rule | Lives in |
|---|---|---|---|
| L28 | The daily publishing run removed Seven Gates ledger entries in four commits: five research entries dropped on 24 October (7a6bbc0); an overwrite to 196 lines on 27 October (1bcc466); 962 to 339 lines on 29 October (88f80bc), deleting the remaining research entries and the whole corrections record; and 22 lines on 3 November (0d5faa3). The 27 October and 3 November losses were repaired; the 24 and 29 October losses were not, as of 26 November 2026. | Memory files only grow; append, compare counts, run `tools/ledger_guard.py`; restore losses from history. | memory 6 |
| L29 | Daily Brief visuals needed post-publication fixes for label fit and contrast on 18, 22, 23 and 26 November (f81696d, e70c35a, d8f133f, f0431ff), after the same failure in September. | Measure label width, check contrast, preview before publishing. | seven-gates 7 |
| L30 | October briefs ran "It does not establish X" in about one edition in three, plus restraint declarations and "not the same thing as" (c1505b5). | Retired constructions list extended on 31 October 2026. | memory 2 |
| L31 | Four AI illustration PNGs shipped truncated (about 15 KB, no end chunk) and did not display (session of 7 October 2026). | Decode-check images; reject files with no end chunk. | tools |
| L32 | Text inside AI images contradicted the articles: wrong policy rates (Butterfly), a different rating (Aradel), an invented company name and wrong era dates (Republic). | Text in AI art must agree with the article or be removed. | seven-gates 8 |
| L33 | A logo was hand-drawn before the real `mark.svg` arrived (site rebuild, September 2026). | Never approximate a mark; ask for the asset files. | templates |
| L34 | An eight-page spot check missed a mobile overflow; the social card was checked only by HTTP status; a stale local server produced unstyled screenshots. | Crawl every route at desktop and phone width; view images as images; restart the server before screenshots. | decks 8, seven-gates 9 |
| L35 | A global replace of "percent" also broke image paths (October 2026). | Never run a global text replace across code and paths; scope it to prose and check the diff. | tools |
| L36 | Shakespeare (Hamlet twice in two days, plus Macbeth), Taleb and Wu-Tang Clan (three times each in three weeks) were over-used. | Rest heavily used figures; draw from unused parts of the repertoire. | quote-bank |
| L40 | A Vitafoam package shipped cropped PDF charts instead of rebuilt figures. | Rebuild charts from the article's numbers; never crop a PDF chart. | seven-gates 7 |
| L41 | A caption called a navy line brass (Nestlé, 31 October 2026). | Caption words must match the chart. | seven-gates 8 |
| L42 | An FX endpoint was corrected from ₦415 to ₦435 per dollar during the Chellarams build. | Matched-date FX from a named source, recomputed at the final proof. | evidence 3 |
| L43 | Exchange, central-bank, vendor and lyric sites were blocked by the network in several sessions. | Say when a source was blocked; never imply verification. | seven-gates 8 |
| L44 | Source links carried LinkedIn and `utm_` tracking parameters. | Strip tracking parameters. | seven-gates 8 |
| L46 | A "proofread" SPE paper copy still had typos and an unfinished bullet at the end (2016, found in the house archive). | Completeness pass on the last page. | human-prose 9a |
| L47 | The `daily-brief` skill still lists the deprecated palette and advises "N" for naira. | This OS overrides: brand palette; ₦ checked in output. | seven-gates 10 |
| L48 | Rating labels outside the house set ("Wait") reached published pieces. | Six labels only. | seven-gates 5 |
| L49 | The editor accepts feature lengths of 4,600 to 9,200 words for history-plus-underwrite pieces. | Feature mode, accepted and recorded. | seven-gates 3 |
| L50 | The editor overrode the personification rule once ("Keep ghosts as characters"). | One-piece overrides, recorded, never precedent. | voice 1 |
| L51 | Same-day replacement of a published piece (Chellarams) needed 301 redirects and a correction note. | Replace, redirect and note; never duplicate. | seven-gates 8 |
| L52 | The editor sends terse phone commands; voice-to-text produced "Punish" for "Publish". | Act on evident intent; confirm only destructive or ambiguous actions. | seven-gates 8 |
