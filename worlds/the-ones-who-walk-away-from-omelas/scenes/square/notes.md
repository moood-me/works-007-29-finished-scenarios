# The Square — Omelas on the morning of the Festival of Summer

The place of the prologue and of chapter 1's evening (scenario M1, П.2 and П.4): the city's square, a fountain in it,
the Meeting House on the left with its side door down to the cellar, painted houses on the right; past the square's far
edge a terrace drops to the lower city going down to the bay, and across the bay the Eighteen Peaks under snow.

- Land: `relief.js` — the square flat to 31 m; a terrace wall drops 6 m (31–33 m), then the city goes down 5 m in 100
  to the shore at 600 m; the sea's bed below the water beyond. `town` (draped) paints the lower city's ground,
  `bay` (−34 m) the sea, `peaks` (22 km off) the mountains.
- The lower city — copies laid out by `tools/square-copies.mjs` (run it after changing the layout; it rewrites the
  copies in scene.json): `house` near, `block` (rows of eight) far, `tower`, `grove` (crowns in the wind), `boat` on the bay.
- The square: `paving` (a ring of darker stones round the fountain), `edge` (the kerb and the stair's head with two
  urns), `meeting` (seen along its length, x −8 at 6 m … x 8 at 22 m; its side door at x −1 — point `meeting#door`),
  `belltower`, `row` (three painted houses; `row#window` — the open window, Pim's), `planetree` (copies; crowns in the
  wind).
- The fountain: `fountain` (the basin, a form; its rim's coping at 0.52 m is where Ila sits), `column` (a form),
  `water` (the basin's water, its glints wavering), `jet` and `spill` (particles).
- The festival: `garlands` (three cords, 9, 13.5, 18 m ahead), `pennant` (stretches of four) and `lantern` copies
  along them (the same curve, laid out by the tool); `petals` on the air.
- Light: the sun behind the viewer on the left (`sun`); `evening` 0…1 — the festival evening: the sky's `evening`
  layer, the look putting the sun out, the lanterns' glows (their animate) and three lights over the cords (`on`).
- People (`modules/cast`): `ila` (12) sitting on the basin's rim (`ila_on`, a seated loop) playing the flute, looking
  at no one — her hands hold it at her lips by `ila_reach` (points before her mouth, to her right), the flute drawn
  between them; `mev` beside her, the basket on her arm, the key on her breast, watching her; `kor` (12) standing by the
  rim, hands behind his back, laughing at her; four townsfolk stopped to listen (`rose_woman`, `blue_man`, `old_man`,
  `flower_girl`). The basin's centre is 4.6 m ahead; Ila 2.96 m.
- Stage 2 (the look of the world): people stand; only breathing, water, wind, lanterns move.
