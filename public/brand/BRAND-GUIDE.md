# Seven Gates Research — logo & brand basics

## The mark
An Etruscan gateway. The arch is cut into **seven voussoirs** — one per gate of the
process — and the seventh, the keystone, is brass: it locks the ring, and pulling any
one stone brings the arch down. Behind it the vault recedes through **seven arches** to
a lit brass core: depth, compounding, growth. Travertine jambs, ink podium, no ornament.

Order of the gates: ownership and governance · business economics · financial integrity ·
capital allocation · competitive endurance · valuation and expected return ·
downside, catalysts and portfolio fit.

## Colour
| Role | Name | Hex |
|---|---|---|
| Primary / stone | Ink | `#1A1F24` |
| Accent / keystone | Brass | `#A67C3D` |
| Keystone on ink | Brass light | `#C69A52` |
| Keystone on oxblood | Brass pale | `#E0B268` |
| Jambs | Travertine | `#C6BFAE` |
| Background | Parchment | `#F4F0E8` |
| Background, pages | Canvas | `#FBF8F1` |
| Secondary / seals | Oxblood | `#46160F` |
| Body text | Slate | `#46504F` |

Two backgrounds only: canvas or ink. Oxblood is for avatars, seals and report covers.

## Type
- **Cinzel** 600 — wordmark and display. `SEVEN GATES` set in caps, letter-spacing 0.12em.
- **EB Garamond** 400/500 — headlines and body prose.
- **Archivo** 500 — small caps labels, nav, UI. `RESEARCH` at 0.42–0.48em tracking.

## Files
```
brand/svg/  logo-primary            stacked mark + wordmark (default)
            logo-primary-reversed   same, on ink
            logo-horizontal         mark left, two-line wordmark (site header, signature)
            logo-horizontal-reversed
            mark / mark-reversed    mark alone, full detail — 40px and up
            mark-small              solid one-stone mark — under 40px
            mark-small-reversed
            mark-oxblood            mark on oxblood
            avatar-square           512×512 oxblood tile (social)
            favicon / favicon-light 64×64 tiles
brand/png/  favicon-32, favicon-64, apple-touch-icon-180, icon-512
            mark-1024, mark-1024-reversed, avatar-1024
            logo-primary-2x, logo-horizontal-2x, logo-horizontal-reversed-2x
```

## Rules
- **Clear space:** one podium-width (the full base bar) on every side.
- **Minimum sizes:** detailed mark 40px tall; below that switch to `mark-small`. Wordmark
  never below 14px cap height.
- **Never:** re-colour the keystone anything but brass, add a gradient or shadow, outline
  the mark, stretch it, or set the wordmark in another face.
## Fonts and the wordmark — important
The lockup SVGs (`logo-primary*`, `logo-horizontal*`) keep the wordmark as **live text** in
Cinzel and Archivo. Loaded as `<img src="…svg">` an SVG cannot see your page's Google Fonts
stylesheet, so on a machine without those fonts installed the letterforms fall back to a
default serif. Each line has a locked `textLength`, so proportions and the brass rule stay
correct either way — but the letterforms will differ.

So:
- **On the site:** use the text-free marks (`mark.svg`, `mark-small.svg`) plus the wordmark as
  live HTML text with the Google Fonts link — see `website-snippets.html`. Sharpest, and the
  type is selectable and responsive.
- **Where you cannot control fonts** (email, third-party platforms, someone else's deck, print
  vendors): use the **PNG lockups**. They are baked in the real typeface.
- **Handing files to a designer:** send the SVG lockups and tell them to install Cinzel 600 and
  Archivo 500 (both free, Google Fonts).
- PNG lockups are 2× — halve them in CSS.
