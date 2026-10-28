# brush — the world's watercolour and pen

The brushes every scene of the world paints with, so that its places are of one hand — a light watercolour wash and a
fine sepia pen, as Hugh Thomson drew the novel. In the scene's `modules` (`"brush"`), then `e.kit.brush` in an
element's code (`kit.brush` in the scene's lib). All of them paint once; none reads time or the light.

- `INK` — the pen's sepia (`#3d2c1f`); the cast's people are lined in the same ink.
- `tone(c, k, a)` — a colour (`#rrggbb`) a shade lighter (k > 1) or darker (k < 1), with an alpha, as a CSS string.
- `rand(seed)` — a steady random sequence (the same every painting).
- `px(e)` — the metres one screen pixel of a 1080-px frame covers at the element's distance: give the pen its width in
  pixels, `1.6 * px`.
- `pen(g, path, width, alpha = 0.8)` — the path stroked in sepia, with a finer second stroke a hair beside it.
- `hatch(g, clip, [x0, y0, x1, y1], step, angle, width, alpha)` — parallel pen strokes over the box, only inside
  `clip`: shade under an eave, inside an arch, on a trunk's dark side.
- `wash(g, path, color, box, r, blooms = 4, edge = 0)` — the path filled, pigment blooming lighter and darker in it,
  its rim pooled a shade darker (`edge`: the rim's width, metres).
- `foliage(g, centres, greens, r, dab, ink = 0)` — clumps of leaf dabs about `[x, y, radius]` centres over a dark
  underlayer, greens from shade to light; with `ink` (a pen width) the pen scallops round the clumps' tops and hatches
  their undersides.
- `ridge(x0, x1, base, step, top)`, `ridgeLine(x0, x1, step, top)` — a line of land against the sky, closed / its top
  alone.
- `cloud(g, x, y, w, r)` — a soft cloud (a sky's stage heights).
- `grass(g, spots, len, r, width, alpha)` — short pen strokes in tufts about `[x, y, count]` (a lawn's hatching).
