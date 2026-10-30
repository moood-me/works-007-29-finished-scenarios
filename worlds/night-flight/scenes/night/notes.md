# The Airfield at Night (the play's map)

The game's own scene (2026-10-30): the background of the play's map (`moood docs/games/games.md` §2). The chapters'
trees are the game's HTML (`games/night-flight/bespoke/map.js`), each at its chapter's point here; the scales stand on
a slip in its corner (the game's `ui.js gauge`).

The one night of the night mail, as Rivière sees it from his window upstairs: the great field in the blue night, its
lamps and floodlights, the three lines coming in to it from the south, the west and the north (scenario §4: the night
is blue, the floodlights and the lamps, not blackness).

- **The eye.** Camera panorama, raised 6 m (`camera_h` in the state: the eye 7.7 m up, at the office's upstairs
  window, the bureau's lit windows below it — the lights `bureau_0…2`, warm on the grass before the building, out of
  the frame), horizon 0.62: the field from some 20 m out to its far edge fills the lower part of the frame, the sky the
  upper.
- **The field.** `field` (a plane 10 × 3 km, in its own metres: y = 1500 − distance), the landing strip running
  straight away at across 24…56 m between the rows of `strip_lamps` (copies: along the field's near edge and the
  strip's two rows to 1.5 km; each copy's globe its own light, `glass`); the apron (`apron`, after the field scene's),
  the hangar lit inside, its gate open (`hangar`: the back wall under its lamps, a spare propeller, a plane's tail in
  the gloom; lights `gate`, `in0`, `in1`), the European standing before it (`plane`: the field scene's machine, painted
  standing — no keys), three floodlight masts (`floods`, lights `flood_0…2` of `floods#f0…f2`, lit all night), the
  windsock swaying (`windsock`, the field scene's), the town's lights far on the right — the north (`far_lights`).
- **The sky** (`sky`, painted once): the blue night going lighter to the horizon, the stars and the Milky Way across
  them, the moon high on the right (`sky#moon`: the light `moon` shines from it); low on the horizon the storm's bank
  to the south (left) with silent lightning (the layer `flash`), long clouds lying low in the west with their tops
  white under the moon (`clouds`, drifting a little), the town's glow in the north. The three lines (`lib.js LINES`):
  now and then a mail plane's lamp comes in on each — from the south over the storm, from the west over the clouds,
  from the north — slowly down toward the field, one line at a time (`sky.animate.js`; each lamp a layer whose box
  covers its way).
- **The points.** `c0`…`c4` (the prologue and the four chapters; the finale and the epilogue are chapter IV's last
  steps, so its tree carries them) 5 m apart at across 0…20, 10 m from the eye, 11.5 m up (the knots high in the
  frame, at about 0.24 of its height; the trees hanging down to the middle); `author` — the author's sign, across
  −3.2. Span [−3.2, 20].
- **Keys.** `shown` — the chapter the player is at; `camera_x` = shown · 5 (`script.js`: at once on opening, over a
  second on a change); `come` — each new value brings the view back to the chapter shown. The showcase walks the view
  along the chapters and back.
- **Music** — the world's palette (D/Bm): the nocturnal piano, celesta and harp for the stars over the clouds, the
  telegraph far off; nothing recorded yet.

Seen on the GPU (a frame at 16:9, before the trees were over it): the night darker and the floodlights softer than at
first (the grass had come out pale green, almost by day).

## Contract for the check

```json
{"beats": {}}
```
