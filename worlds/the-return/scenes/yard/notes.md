# The Ivanovs' Yard — engine 3

The first scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4 «Двор
Ивановых»). Stage 2 of writing the game — the look: the world's mood and style and how the three main people look. A
still picture (`picture`): people stand and breathe, smoke rises from the chimney, the cirrus drifts, the grass tufts and
the bucket on the well sweep stir in the wind, the stove's light through the open door flickers a little. Nothing else
moves; no script, no showcase. No caption: the picture speaks alone.

## The look

Gouache on rough paper: flat near tones laid with dry ragged-edged strokes (`lib.strokes`), and over every painting the
paper's tooth (`lib.paper`: a tile of pale specks and darker pits made in a canvas of the painting's own, laid only over
paint, `source-atop`, its tile about a fifth of the distance it is seen from — so its grain stays a pixel or so on the
screen; 0.17 stage heights on the sky). Pale sand, ochre, weathered grey wood, the rust and worn steel of the rails, the
grey-green cloth of the greatcoat; a high whitish sky and a whitish haze (`haze` 0.2) laying the distance back in layers.
A late August evening: the sun low on the right behind the viewer (`sun`, bearing 128, 12° up, warm) lights the people's
right sides and throws their shadows long to the left; their other sides cool (`ambientColor`); the warm accent is the
stove's fire through the open door and the lamp in the windows (`house_lights`; the door's glow is the light `stove`,
reaching 7 m — it warms Lyuba's and Petrushka's left sides). Not dark.

## The frame

The three near the eye (2.7–3.9 m), inside the 4:3 frame's middle (x 0.125…0.875), feet clear of its bottom (the horizon
at 0.32). Over the low paling the line: the embankment with its two rails rising to the right to the crossing at the top
of the rise, its barrier raised, the dirt road climbing a ramp to it; the station's water tower far on the left; the
telegraph poles along the line.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

| Element | What, where |
| --- | --- |
| `sky` | the evening sky; layers `cirrus` and `bank` drift (their ends meet) |
| `fields`, `forest` | the stubble beyond the line (a plane 60 m … 2 km), the pine forest at the horizon (1.7 km) |
| `station` | the station far left (−30, 170): the water tower, the station house, poplars — no signs |
| `yard` | the ground, draped over the land (`relief.js`: the embankment — its near slope 14…15.6 ahead, its top to 17.8, its far slope to 19.6 — 1.3 m high on the left rising to 2.6 m at the crossing, `lib.top`; where the road climbs, across 7.8…10.2, its near slope reaches from 9 ahead, `lib.ramp`): the pale yard, the trodden path gate → porch and the trodden patch before the porch, the boot prints from the gate to where Ivanov stands, pebbles and stones, chips by the block, wet ground by the well, grass; beyond the fence the footpath along the line (12.2…13), the embankment's slopes, ballast and sleepers, the dirt road with its two ruts up the ramp to the crossing and over it |
| `rail_near`, `rail_far` | the rails (16.2, 17.2): cards in the land's metres, rising with the line (`lib.rail`) |
| `poles` | telegraph poles every 20 m at 13 ahead, their wires (copies) |
| `barrier` | the crossing's barrier on the left of the road at the top of the rise, raised (7.4, 14.8) |
| `house_wall`, `house_lights`, `roof`, `chimney`, `chimney_smoke` | the izba on the left: its long log wall to the yard (−3.6, 2.5…11.5; the door at 7 ahead standing open, three windows in carved frames); on its plane `house_lights` — the lit lower panes and the passage behind the door, glowing; the roof's slope (a plane, `rotation` 90, `tilt` 35, ridge at −6.3, 4.8 m), the brick chimney on the slope (−5, 10.5) and its smoke |
| `porch`, `steps`, `porch_front`, `risers` | the porch before the door (0.5 m up, −3.6…−2.3) and two steps down to the right; `porch` and `steps` are walked on |
| `fence`, `gate` | the low paling (1.1 m) along the line at 11.5 ahead (across −5.96…6.47, its corner post by the woodpile), the gate's gap (across −1.02…0.06) and its leaf standing open into the yard |
| `woodpile`, `block`, `buckets`, `yoke`, `tufts` | the woodpile by the fence on the right (5.6, 11); the chopping block with the axe (2.2, 4); two zinc buckets of water by the porch side (−2.75, 4.3) and the yoke lying on the sand before them (a plane, −2.3, 3.75); tufts of dry grass (copies, a layer bending in the wind) at the near edge, along the house and the fence |
| `well_front`, `well_side`, `well_top`, `crane` | the well (2.9, 10.2) and its sweep (`crane`, post at 5.1, 10.2, 3.6 m; the layer `bucket` sways) |

## The people (the world's `cast`)

One moment of their meeting, as the scenario's status habits have them (§2) — who is who to whom is in the poses:

- `ivanov` (0.75, 2.7, turned 205) — nearest, on the right: in the greatcoat he will not take off until he decides to
  stay, the kit bag still in his left hand (`ivanov_reach` holds the hand a little out from the coat), tired and
  cautious (`tired`), his eyes down and aside — not yet meeting theirs (`ivanov_look`, a point on the ground before
  Lyuba).
- `lyuba` (−0.4, 3.7, turned 150) — a step behind, turned to her husband, looking at his face (`lyuba_look`, a point by
  his head brought a little toward the eye so that her face is seen three-quarter), her right hand at her breast
  (`lyuba_reach`), grief held in and waiting (`sad`).
- `petrushka` (−1.75, 3.9, turned 195) — apart from them, by the porch and the buckets of water he brought: hands behind
  his back (`hands_behind`), his body turned from his father, his head turned to him (`petrushka_look`), wary
  (`thinking`).
