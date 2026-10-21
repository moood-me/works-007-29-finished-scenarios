# The Ivanovs' Yard — engine 3

The first scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4 «Двор
Ивановых»). Stage 2 of writing the game — the look: the world's mood and style and how the main people look (the three and little Nastya). A
still picture (`picture`): people stand and breathe, smoke rises from the chimney, the cirrus drifts, the grass tufts and
the bucket on the well sweep stir in the wind, the stove's light through the open door flickers a little. Nothing else
moves; no script, no showcase. No caption: the picture speaks alone.

## The look

Gouache on rough paper: flat near tones laid with dry ragged-edged strokes (`lib.strokes`), and over every painting the
paper's tooth (`lib.paper`: a tile of pale specks and darker pits made in a canvas of the painting's own, laid only over
paint, `source-atop`, its tile about a fifth of the distance it is seen from — so its grain stays a pixel or so on the
screen; 0.12 stage heights on the sky). The people are the engine's figures of shapes (the world's `cast`): smooth, lit
by the scene, with a painted contour — the engine paints no texture on a person, so the paper's grain over them is only
the frame's `grain` (0.38); a gouache tooth on the people themselves is a thing for the engine, not to be faked here.
Pale sand, ochre, weathered grey wood, the rust and worn steel of the rails, the grey-green cloth of the greatcoat; a
high whitish sky and a whitish haze (`haze` 0.22) laying the distance back in layers.
Late August 1945, about noon (the scenario's 2.1: he comes from the station before one): the sun high behind the
viewer on the right (`sun`, bearing 150, 38° up, a warm white) lights the faces turned to the eye and throws short
shadows away to the left; the shade cool grey (`ambientColor`), the colours a little faded (`saturation` 0.86). Not an
evening: no lamp in the windows; the only warm accent is the stove's dim glow far in the open door (`house_lights`,
the light `stove`, 4 m). After the war: the windows still carry the paper strips pasted crosswise in the war, one pane
boarded over (no glass to be had).

## The frame

A family portrait at its awkward moment, near: the four between 2.35 and 3.1 m (faces about a tenth of the frame's
height for the grown-ups), inside the 4:3 frame's middle (stage x 0.29…0.75), the horizon at 0.27 — so the people fill
the lower half and no empty sand is left below them; Ivanov's boots touch the frame's bottom. Behind them the yard, the
well and its sweep, the woodpile, the low paling and over it the line on its embankment rising to the right to the
crossing, its barrier raised; the station's water tower far on the left. The buckets (stage x 0.19…0.29) and the block
(0.76…0.84) inside the 4:3 frame.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

| Element | What, where |
| --- | --- |
| `sky` | the whitish day sky; layers `cirrus` and `bank` drift (their ends meet) |
| `fields`, `forest` | the stubble beyond the line (a plane 60 m … 2 km), the pine forest at the horizon (1.7 km) |
| `station` | the station far left (−30, 170): the water tower, the station house, poplars — no signs |
| `yard` | the ground, draped over the land (`relief.js`: the embankment — its near slope 14…15.6 ahead, its top to 17.8, its far slope to 19.6 — 1.0 m high on the left rising to 1.9 m at the crossing, `lib.top`; where the road climbs, across 7.8…10.2, its near slope reaches from 11.5 ahead, `lib.ramp`): the pale yard, the trodden path gate → porch and the trodden patch before the porch, the boot prints from the gate to where Ivanov stands, pebbles and stones, chips by the block, wet ground by the well, grass; beyond the fence the footpath along the line (12.2…13), the embankment's slopes, ballast and sleepers, the dirt road with its two ruts up the ramp to the crossing and over it |
| `rail_near`, `rail_far` | the rails (16.2, 17.2): cards in the land's metres, rising with the line (`lib.rail`) |
| `poles` | telegraph poles every 20 m at 13 ahead, their wires (copies) |
| `barrier` | the crossing's barrier on the left of the road at the top of the rise, raised (7.4, 14.8) |
| `house_wall`, `house_lights`, `roof`, `chimney`, `chimney_smoke` | the izba on the left: its long log wall to the yard (−3.6, 2.5…11.5; the door at 7 ahead standing open, three windows in carved frames, paper strips crosswise on the panes, the middle window's lower left pane boarded — `lib.windowFrame`); on its plane `house_lights` — the passage behind the door and the stove's dim glow in it; the roof's slope (a plane, `rotation` 90, `tilt` 35, ridge at −6.3, 4.8 m), the brick chimney on the slope (−5, 10.5) and its smoke |
| `porch`, `steps`, `porch_front`, `risers` | the porch before the door (0.5 m up, −3.6…−2.3) and two steps down to the right; `porch` and `steps` are walked on |
| `fence`, `gate` | the low paling (1.1 m) along the line at 11.5 ahead (across −5.96…6.47, its corner post by the woodpile), the gate's gap (across −1.02…0.06) and its leaf standing open into the yard |
| `woodpile`, `block`, `buckets`, `yoke`, `tufts` | the woodpile by the fence on the right (5.6, 11); the chopping block with the axe (2.56, 4.8); two zinc buckets of water by the porch side (−2.0, 4.3) and the yoke lying aslant on the sand before them (a plane, −1.9, 3.9, turned 55°); tufts of dry grass (copies, a layer bending in the wind) in the near corners, along the house and the fence |
| `well_front`, `well_side`, `well_top`, `crane` | the well (2.9, 10.2) and its sweep (`crane`, post at 5.1, 10.2, 3.6 m; the layer `bucket` sways) |

## The people (the world's `cast`)

One moment of their meeting in the yard (the scenario's 2.1): the awkwardness and the warmth in where they look. Each
looks at someone (`_look`), the bodies turned half to the eye so the faces are seen three-quarter:

- `ivanov` (0.88, 2.35, turned 235) — nearest, on the right: in the greatcoat he will not take off until he decides to
  stay, the kit bag still in his left hand (`ivanov_reach` holds the hand a little out from the coat), tired
  (`tired`), looking at his wife's face (`lyuba#head`).
- `lyuba` (0.1, 2.65, turned 140) — before him, her hands folded before her apron (`lyuba_reach`, both hands to one
  point at her waist), looking at him but not into his eyes — at his chest (`ivanov#chest`): shame and waiting (`sad`).
- `petrushka` (−0.5, 2.8, turned 150) — the son, a step off: hands behind his back (`hands_behind`, his habit), serious
  and wary (`thinking`), looking straight at his father (`ivanov#head`).
- `nastya` (−0.85, 3.1, turned 160) — the little one half behind her brother, holding his hand behind his back
  (`nastya_reach` r: `petrushka#hand_l`), looking at the stranger who is her father (`ivanov#head`).
