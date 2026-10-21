# The Ivanovs' Yard — engine 3

The first scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4 «Двор
Ивановых»). Stage 2 of writing the game — the look: the world's mood and style and how the three main people look. A
still picture (`picture`): people stand and breathe, smoke rises from the chimney, the cirrus drifts, the bucket on the
well sweep stirs in the wind. Nothing else moves; no script, no showcase.

## The look

Gouache on rough paper: flat near tones laid with dry strokes (`lib.strokes`), a high pale sky (milky white at the line,
grey-blue up high), sand, ochre, weathered grey wood, rust of the rails, the grey-green cloth of the greatcoat. Not dark:
an early afternoon at the end of August, the sun behind the viewer on the right (`sun`, bearing 168, 42° up), so all
three faces are lit; light haze pales the distance. Grain 0.14 for the paper.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

| Element | What, where |
| --- | --- |
| `sky` | the sky; layers `cirrus` and `bank` drift (their ends meet) |
| `fields`, `forest` | the stubble beyond the line (a plane 60 m … 2 km), the pine forest at the horizon (1.7 km) |
| `station` | the station far left (−30, 170): the water tower, the station house, poplars — no signs |
| `yard` | the ground, draped over the land (`relief.js`: the embankment 13.4…18.6 ahead, its top 0.7 m on the left rising to 1.5 m on the right, `lib.rise`): the yard, the trodden path gate → porch, chips by the block, the path along the line (12…13), ballast and sleepers, the dirt road up to the crossing (across 10…12.6) |
| `rail_near`, `rail_far` | the rails (15.24, 16.76): cards in the land's metres, rising with the line (`lib.rail`) |
| `poles` | telegraph poles every 20 m at 13.2 ahead, their wires (copies) |
| `barrier` | the crossing's barrier at the top of the rise, raised (10, 14.3) |
| `house_wall`, `roof`, `chimney`, `chimney_smoke` | the izba on the left: its long log wall to the yard (−3.6, 2.5…11.5; door at 7 ahead, three windows in carved frames), the roof's slope (a plane, `rotation` 90, `tilt` 35, ridge at −6.3, 4.8 m), the brick chimney and its smoke |
| `porch`, `steps`, `porch_front`, `risers` | the porch before the door (0.5 m up, −3.6…−2.3) and two steps down to the right; `porch` and `steps` are walked on |
| `fence`, `gate` | the paling along the line at 11.5 ahead, the gate (1.4…2.4) standing open into the yard |
| `woodpile`, `woodpile_end`, `block` | the woodpile on the right (4.6, 5.5…7.9), the chopping block with the axe stuck in it (3.3, 6.6) |
| `well_front`, `well_side`, `well_top`, `crane` | the well (5.5, 10.15) and its sweep (`crane`, post at 7.4, 10.4; the layer `bucket` sways) |

## The people (the world's `cast`)

Three stand as they stand in the story — their status habits (scenario §2), not one moment of a chapter:

- `ivanov` (−0.5, 5) — nearest, in the greatcoat he will not take off until he decides to stay, the side cap, the kit bag
  on his back; upright, turned a little away from his family, eyes on the ground ahead (`ivanov_look`), face plain.
- `lyuba` (−2.9, 7) — on the porch by the door, looking at him (`lyuba_look`), her hands together at the apron
  (`lyuba_reach`, both hands to one point before her waist: the cast has no motion of hands hidden under an apron yet —
  the motion model was paused), sad.
- `petrushka` (2.4, 7.4) — by the woodpile and the block, hands behind his back (`hands_behind`), looking at his
  father, serious (`thinking`).

The space between them is empty sand on purpose: the yard they lived in without him.
