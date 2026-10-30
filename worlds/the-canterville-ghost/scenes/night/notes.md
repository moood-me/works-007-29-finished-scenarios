# Canterville by Night (the play's map)

The game's own scene (2026-10-30): the background of the play's map (`moood docs/games/games.md` §2). The chapters'
trees are the game's HTML (`games/the-canterville-ghost/bespoke/map.js`), each at its chapter's point here.

- `sky` — painted once: the night going pale toward the land, the stars, the moon high on the left in its haze, a few
  long clouds (their layer drifts a little: `sky.animate.js`); low across the frame the manor black against the sky —
  gables, two-and-more towers with battlements, chimney stacks — its windows dark but one: high on the right the
  Tapestry Chamber's, a cold pale light; the old dry almond on the left, the churchyard yew far on the right, the lawn.
- Camera panorama, span [−3.2, 30]: seven places 5 m apart (`c0`…`c5` the prologue, the four chapters, the epilogue;
  `c6` the finale), 10 m from the viewer at elevation 2.65 (the knots high in the frame, the trees hanging down to the
  middle); `author` — the author's sign, across −3.2.
- `shown` — the chapter the player is at; `camera_x` = shown · 5 (script.js: at once on opening, over a second on a
  change); `come` — each new value brings the view back to the chapter shown.

## Contract for the check

```json
{"beats": {}}
```
