# The Ivanovs' Yard — engine 3

The first scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4 «Двор
Ивановых»). Stage 2 of writing the game — the look: the world's mood and style and how the main people look (the three and little Nastya). A
still picture (`picture`): people stand and breathe, smoke rises from the chimney and leans in the wind, the cirrus
drifts, the grass tufts bend in the gusts, the bucket on the well sweep sways, the stove's light through the open door
flickers a little. Nothing else moves; no script, no showcase. No caption: the picture speaks alone (the title over it
is the page's, every scene's).

## The look

Gouache on rough paper: flat near tones laid with broad soft dabs (`lib.strokes`: few, wide, faint — a field of thin
long strokes read as scratches), and over every painting the paper's tooth (`lib.paper`: a tile of pale specks and
darker pits in two sizes and no direction — a fibre hashed along the rows made diagonal scratches —, laid only over
paint, `source-atop`, its tile about a fifth of the distance it is seen from; 0.12 stage heights on the sky, faintly).
The people are the engine's figures of shapes (the world's `cast`): smooth, lit by the scene, with a painted contour —
the engine paints no texture on a person, so the paper's grain over them is only the frame's `grain` (0.22); a
gouache tooth on the people themselves is a thing for the engine, not to be faked here. Pale sand, ochre, weathered
grey wood, the rust and worn steel of the rails, the grey-green cloth of the greatcoat; a high whitish sky and a whitish
haze (`haze` 0.22) laying the distance back in layers.
Late August 1945, about noon (the scenario's 2.1: he comes from the station before one): the sun high behind the
viewer on the right (`sun`, bearing 150, 38° up, a warm late-summer white) lights the faces turned to the eye and
throws short shadows away to the left; the shade cool grey (`ambientColor`), the colours a little faded (`saturation`
0.9) under a faint warm `tint`. Not an evening: no lamp in the windows; the warm accent is the stove's glow in the open
door (`house_lights`, the light `stove`, 4.5 m, on the porch) — the lamp and the stove at their full are the izba's
(scene `izba`). After the war: the windows still carry the paper strips pasted crosswise in the war, one pane boarded
over (no glass to be had).

## The frame

A family portrait at its awkward moment, near: Ivanov and Lyuba at 2 m (their faces about an eighth of the frame's
height, cut below the knees), the children behind them at 2.8 and 3.05 m, whole; all inside the 4:3 frame's middle
(stage x 0.33…1.35). The horizon at 0.36, so that the izba's whole long wall, its near corner and the chimney's
smoke are in the frame. The izba on the left behind the children, its door open; behind Lyuba the gate and the line on
its embankment rising to the right to the crossing, its barrier raised; behind Ivanov the well's sweep, the woodpile,
the block with the axe; the station's water tower far off between the izba and Lyuba. The buckets at the left edge
(16:9 only).

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

| Element | What, where |
| --- | --- |
| `sky` | the whitish day sky, a few broad washes; layers `cirrus` and `bank` drift (their ends meet) |
| `fields`, `forest` | the stubble beyond the line (a plane 60 m … 2 km), the pine forest at the horizon (1.7 km) |
| `station` | the station far left (−30, 170): the water tower, the station house, poplars — no signs |
| `yard` | the ground, draped over the land (`relief.js`: the embankment — its near slope 14…15.6 ahead, its top to 17.8, its far slope to 19.6 — 1.0 m high on the left rising to 1.9 m at the crossing, `lib.top`; where the road climbs, across 7.8…10.2, its near slope reaches from 11.5 ahead, `lib.ramp`): the pale yard, the trodden path gate → porch steps and the trodden patch, the boot prints from the gate to where Ivanov stands, pebbles and stones, chips by the block, wet ground by the well, grass along the house's wall and its gable end; beyond the fence the footpath along the line (12.2…13), the embankment's slopes, ballast and sleepers, the dirt road with its two ruts up the ramp to the crossing and over it |
| `rail_near`, `rail_far` | the rails (16.2, 17.2): cards in the land's metres, rising with the line (`lib.rail`) |
| `poles` | telegraph poles every 20 m at 13 ahead, their wires (copies) |
| `barrier` | the crossing's barrier on the left of the road at the top of the rise, raised (7.4, 14.8) |
| `house_end`, `house_wall`, `house_lights`, `roof`, `chimney`, `chimney_smoke` | the izba on the left, 5.4 m wide, 6.6 m long: its gable end toward the eye (5.0 ahead, across −8.4…−3.0: logs, the gable's upright boards, a vent, barge boards); its long wall to the yard (across −3.0, 5.0…11.6 ahead, anchor 8.3; the near corner's log ends; the door at 8.0 ahead standing open, a window either side in carved frames, paper strips crosswise on the panes, the far window's lower left pane boarded — `lib.windowFrame`); on its plane `house_lights` — the passage behind the door and the stove's glow in it; the roof's slope (a plane, `rotation` 90, `tilt` 35, eaves at −2.6, ridge at −5.7, 4.82 m, 4.7…11.9 ahead), the brick chimney on the slope (−4.4, 11.0) and its smoke |
| `porch`, `steps`, `porch_front`, `risers` | the porch before the door (0.5 m up, across −3.0…−1.7, 7.2…8.8 ahead) and two steps down to the right; `porch` and `steps` are walked on |
| `fence`, `gate` | the low paling (1.1 m) along the line at 11.5 ahead (across −5.96…6.47 — its left end behind the izba —, its corner post by the woodpile), the gate's gap (across −1.02…0.06) and its leaf standing open into the yard |
| `woodpile`, `block`, `buckets`, `tufts` | the woodpile by the fence on the right (5.6, 11); the chopping block with the axe (2.56, 4.8); two zinc buckets of water near the izba's corner (−2.3, 3.4: solid metal, shaded round, the water dark in them); tufts of dry grass (copies, a layer bending in the gusts) in the near corners, along the house and the fence. (The yoke that lay on the sand is gone: a plane seen so low read as a loose rope.) |
| `well_front`, `well_side`, `well_top`, `crane` | the well (2.9, 10.2) and its sweep (`crane`, post at 5.1, 10.2, 3.6 m; the layer `bucket` sways) |

## The people (the world's `cast`)

One moment of their meeting in the yard (the scenario's 2.1): the awkwardness and the warmth in where they look. The
two grown-ups face each other, turned half to the eye, each looking at the other's face (a point by it brought 0.35 m
toward the eye, so that both faces are three-quarter — no further, or the look goes past the other); the children look
at the stranger who is their father. Each its own expression:

- `ivanov` (0.6, 2.0, turned 235) — on the right: in the greatcoat he will not take off until he decides to stay, the
  kit bag still in his left hand (`ivanov_reach` l: the hand at his side, a little back), the right hand out from the
  coat at his thigh (r); looking down at his wife with an awkward, held-in smile (`smile`).
- `lyuba` (−0.1, 2.0, turned 125) — before him, her hands folded at her waist before the apron (`lyuba_reach`), looking
  up into his face: grief held in and waiting (`sad`).
- `petrushka` (−0.95, 2.8, turned 125) — the son, a step behind his mother, facing his father: the grown-up frown
  (`angry`), the hands behind his back (`hands_behind`, his habit) — the right one held by his sister (r:
  `nastya#hand_l`).
- `nastya` (−1.65, 3.05, turned 140) — the little one half a step behind her brother and to his side (her own outline),
  holding his hand (l: `petrushka#hand_r`), looking at the stranger, wary (`afraid`).

The reaches are points in the world worked out from where each stands and faces (a hand 0.25 m to the side); moving
anyone means working them out again.
