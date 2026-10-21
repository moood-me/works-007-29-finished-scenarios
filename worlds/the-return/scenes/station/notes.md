# The Station — engine 3

The third scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4
«Станция», chapter 2.1 (c)). Stage 2 of writing the game — the look: the station of the Ivanovs' village on a misty
late-August morning, Wednesday, about eleven, the moment Ivanov has stepped off the train at the water tower and stands
before his family — Lyuba, Petrushka, and two people not seen before, Nastya and Semyon Yevseyevich —, in another light
than the yard's noon and the izba's lamp. A still picture (`picture`):
people stand and breathe; the fog over the fields drifts, the veil of cloud drifts, smoke rises from the station house's
chimney, the bell's rope and the grass stir. No script, no showcase, no caption (the title is the page's: ru «Станция»).

## The look

The world's gouache (the izba's lib: dry ragged strokes kept inside what they paint, the paper's tooth as soft blots,
never specks): clapboard in the railway's ochre with white trims, a red-brown iron roof, old red brick, weathered grey
planks, the ballast's grey, rusty rails with pale worn tops, packed sand. Late morning: the fog
lifting off the fields — `haze` 0.3 toward a warm white (`hazeColor`): the water tower at 44 m soft but whole, the store
at 46 m paler, the poles fade along the line, the forest far and pale; a low drifting bank of fog 60 m off (`mist`); a
high whitish sky. The haze was 0.5: it washed out everything but the near house, so the house's ochre stood alone
against a white picture; at 0.3, with the picture's `saturation` 1.08, the near and the far are one painting. A warm sun
behind the eye's left (`sun`, bearing 205, 38° up, strength 1.05) lights the faces turned toward the eye and the house
front, the shadows fall away behind the people; a high pale `ambient` keeps everything light. Not dark.

## The frame

The eye on the platform, 1.7 m up, the horizon at 0.27 (at 0.32 the nearest feet fell at the frame's foot and Lyuba's
hem was cut). The line runs aslant — from behind the eye's left (the train
comes from there: from Masha's side) away to the far left into the fog: the main track with the kerb of old sleepers at
the platform's edge, a siding beyond it, the telegraph poles beyond that; it leads the eye to the water tower standing by
it in the fog (x ≈ −0.29 of the frame). Ivanov on the left at 2.8 m, by the kerb (his feet at about
0.91 of the frame), turned toward his family — his back and cheek to the eye; the four 3.3–4.1 m off on the right, whole,
stepped back one behind the other in depth (not a row), all looking at him: their faces three-quarter toward the eye
(turned about 241°, toward the eye's left), so the meeting reads as faces, not backs. Behind them the station house's long ochre front (the door, the bell, the
windows), its near gable end on the right (seen whole in 16:9).

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

The line (`lib.LINE`): its middle passes p0 = (−3.2, 2.0), direction u = (−0.34, 0.94) (bearing 340); its right side
n = (0.94, 0.34) is the platform's. A point t along it and `off` to its right: p0 + t·u + off·n. Things along it are
laid by these numbers (worked out once, written into scene.json as across/distance).

| Element | What, where |
| --- | --- |
| `sky` | the misty sky; layers `veil` and `fogtop` drift (their ends meet) |
| `fields`, `forest` | the fields from 70 m to 2 km (a plane), the forest 700 m off (in this fog almost gone) |
| `mist` | the bank of fog 60 m off across the whole view (layer `bank`, drifting, its ends 320 m apart) |
| `ground` | one plane (across −60…40, distance 0…70) painted along the line (rotated in its code): weeds beyond, the siding (off −4.6), the main track (ballast, sleepers every 0.55 m, rails 0.76 each side), the kerb of sleepers (off 1.95…2.2), the platform's sand, its pale tread, a worn path to the door (t 8) |
| `tower` | the water tower right of the line (t 42.8, off 5, 44 m ahead): brick base, timber tank with hoops, cone roof, a brick annex; point `tank` |
| `store` | the store beyond the siding (t 50, off −9), in the fog: plank shed, two doors, loading dock |
| `poles` | telegraph poles left of the siding (off −7.2) every 20 m along (t 25…85), cards along the line, wires toward the eye |
| `house` | the station house's front (t 2…14, off 6.5, facing 250): plinth, clapboard, four windows, the door (t 8; point `door`), the canopy, the bell on its bracket (point `bell`; its rope the layer `rope`, stirring), a lantern, a bench |
| `house_end` | its near gable end (t 2, off 6.5…12.5, facing 160): a window, the gable boards, round vent, the roof's lip |
| `roof`, `chimney`, `house_smoke` | the roof's slope toward the line (a plane: eave at off 6.1, 2.95 m; ridge at off 9.5, 5.0 m; `rotation` 290 — its far edge toward bearing 70, `tilt` 31.1), the chimney on it (t 11, far enough along that its smoke shows over the roof) and its smoke |
| `tufts` | dry grass (copies, a layer bending in the air) on the platform and by the kerb |

## The people (the world's `cast`)

One moment of chapter 2.1 (c): the train has stopped at the water tower, Ivanov has come along the platform and stops
before them; a breath before Lyuba runs to him. Everyone's look is on someone — the four on Ivanov's head, he on Lyuba's.

- `ivanov` — the greatcoat, the side cap, the kit bag in his left hand (`ivanov`) — (−0.85, 2.8, turned 90: toward the
  family), looking at Lyuba, `smile` (awkward, tired from the road).
- `lyuba` — `lyuba_best`: the blue pre-war dress, no apron, the white kerchief (§2.1: «Люба в синем довоенном платье») —
  (0.05, 3.3, turned 241), the nearest to him, her hands clasped before her breast (`lyuba_reach`, 0.2 m before her at
  1.05 m), `smile` (laughing through tears — «смеётся сквозь слёзы»).
- `petrushka` (0.7, 3.65, turned 241) — a step behind his mother, `hands_behind` («руки за спиной»), `sad` (moved and
  holding it in, waiting; not the frown he had: `thinking` read as an angry grimace at this distance).
- `semyon` — `semyon_out`: his clean jacket, the cap on — (1.45, 3.85, turned 245), looking at Ivanov, `smile` (kind,
  ceremonious: «Я на минутку. Довёл только»).
- `nastya` (1.85, 4.1, turned 244) — half behind the old man on his far side, holding the back of his jacket's flap
  with her left hand (`nastya_reach`, a point 0.18 m off his middle toward her, at 0.7 m), peeking at the stranger,
  `afraid` (she does not remember her father: «Деда!»).

Other lights of this place (the junction's night in rain, Masha's station at dawn — the scenario's §4) are for later
scenes or looks. The train itself is not in the frame: only its stop by the water tower behind Ivanov.
