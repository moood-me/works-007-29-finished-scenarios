# The Ivanovs' Yard — engine 3

The first scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4 «Двор
Ивановых»). Stage 2 of writing the game — the look: the world's mood and style and how the three main people look. A
still picture (`picture`): people stand and breathe, smoke rises from the chimney, the cirrus drifts, the grass tufts and
the bucket on the well sweep stir in the wind, the stove's light through the open door flickers a little. Nothing else
moves; no script, no showcase.

## The look

Gouache on rough paper: flat near tones laid with dry strokes (`lib.strokes`), sand, ochre, weathered grey wood, rust of
the rails, the grey-green cloth of the greatcoat. A late August evening: the sun low behind the viewer on the right (`sun`,
bearing 145, 13° up, warm), so the three faces take its warm light and the shadows run long across the yard; the
shadowed sides cool (`ambientColor`); the sky apricot low over the fields, grey-blue high up; a lamp lit in the windows
and the stove's light in the open door (`house_lights`, glows) — the warm yellow of home. Not dark.

## The frame

The three stand together near the eye (3–3.6 m), all of them inside the 4:3 frame's middle (x 0.125…0.875), feet clear of
its bottom: the horizon at 0.36 keeps their feet in and their faces large. Between the son and the father the open gate
he came in by. Everything that tells the place — the porch and the open door on the left, the chimney, the well and its
sweep on the right — also lies inside the 4:3 middle; only the house's near wall and the barrier run past the edges.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

| Element | What, where |
| --- | --- |
| `sky` | the evening sky; layers `cirrus` and `bank` drift (their ends meet) |
| `fields`, `forest` | the stubble beyond the line (a plane 60 m … 2 km), the pine forest at the horizon (1.7 km) |
| `station` | the station far left (−30, 170): the water tower, the station house, poplars — no signs |
| `yard` | the ground, draped over the land (`relief.js`: the embankment 13.4…18.6 ahead, its top 0.7 m on the left rising to 1.5 m on the right, `lib.rise`): the yard, the trodden path gate → porch and the trodden patch where the three stand, chips by the block, wet ground by the well, the path along the line (12…13), ballast and sleepers, the dirt road up to the crossing (across 10…12.6) |
| `rail_near`, `rail_far` | the rails (15.24, 16.76): cards in the land's metres, rising with the line (`lib.rail`) |
| `poles` | telegraph poles every 20 m at 13.2 ahead, their wires (copies) |
| `barrier` | the crossing's barrier at the top of the rise, raised (10, 14.3) |
| `house_wall`, `house_lights`, `roof`, `chimney`, `chimney_smoke` | the izba on the left: its long log wall to the yard (−3.6, 2.5…11.5; the door at 7 ahead standing open, three windows in carved frames); on its plane `house_lights` — the lit lower panes and the passage behind the door, glowing, each a light; the roof's slope (a plane, `rotation` 90, `tilt` 35, ridge at −6.3, 4.8 m), the brick chimney on the slope (−5, 10.5) and its smoke |
| `porch`, `steps`, `porch_front`, `risers` | the porch before the door (0.5 m up, −3.6…−2.3) and two steps down to the right; `porch` and `steps` are walked on |
| `fence`, `gate` | the paling along the line at 11.5 ahead (across −5.96…9.24), the gate's gap (across −1.02…0.06) and its leaf standing open into the yard |
| `woodpile`, `block`, `buckets`, `tufts` | the woodpile by the fence on the right (5.6, 11), its face of log ends to the eye; the chopping block with the axe (1.3, 3.75) at the father's right; two zinc buckets and the yoke at the mother's feet (−1.65, 3.2); tufts of dry grass (copies, a layer bending in the wind) at the near edge, along the house and the fence |
| `well_front`, `well_side`, `well_top`, `crane` | the well (2.9, 10.2) and its sweep (`crane`, post at 5.1, 10.2, 3.6 m; tip over the well at 4.95 m — below the frame's top at that depth; the layer `bucket` sways) |

## The people (the world's `cast`)

Three stand as they stand in the story — their status habits (scenario §2), not one moment of a chapter — one group:
the son and the mother on the left, the father on the right, the gate between; their bodies opened to the eye, their
heads turned to one another (each `<id>_look` a point by the other's head, brought a little toward the eye, so the faces
are seen three-quarter, not in profile).

- `ivanov` (0.35, 3.2, turned 195) — in the greatcoat he will not take off until he decides to stay: belted, two rows of
  brass buttons, shoulder boards, the collar; the side cap with its star, the kit bag's straps over his shoulders;
  upright, looking at his son and his wife, face plain.
- `lyuba` (−1.05, 3.55, turned 145) — a step behind her son, looking at her husband, her hands together at the apron
  (`lyuba_reach`, both hands to one point before her waist: the cast has no motion of hands hidden under an apron yet),
  sad.
- `petrushka` (−0.45, 3.05, turned 150) — before his mother, hands behind his back (`hands_behind`), looking at his
  father, serious (`thinking`).
