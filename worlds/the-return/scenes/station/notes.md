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
planks, the ballast's grey, rails in plain rust with pale worn tops, packed sand toward ochre. The palette is the
world's: a whitish sky, sand, ochre, the grey-green cloth of the greatcoat, the rails' rust, and one warm yellow — the
stationmaster's lamp still burning in the window right of the door (the house's `lamp`, flickering a little), the
same warm as the izba's stove and lamp. Late morning, the fog lifting: `haze` 0.2 toward a warm white — the water
tower and the store read in the distance; a low drifting bank of fog 60 m off (`mist`); the sky a denser grey-blue
high up, whitish only toward the horizon, so that sky, sand and platform are not one tone. A warm sun behind the eye's
left (`sun`, bearing 205, 32° up, strength 1.3) lights the faces turned toward the eye and the house front; with the
`ambient` at 0.52 the shadows behind the people and under the canopy read; `grain` 0.16 lays the paper's tooth over the
whole frame, the people with it. Not dark.

The people are the engine's figures of shapes: their surface takes no painted texture (engine 3 draws a person's
parts in flat palette colours under the scene's light — no stroke, no paper of their own); the frame's grain is the one
tooth they share with the paintings. A painted surface for people is a request to the engine.

## The frame

The eye on the platform, 1.7 m up, the horizon at 0.36 — the eye level at the people's heads, not looking down on them
as on a diorama (at 0.27 the camera looked down). The line runs aslant — from behind the eye's left (the train comes
from there: from Masha's side) away to the far left into the fog: the main track with the kerb of old sleepers at the
platform's edge, a siding beyond it, the telegraph poles beyond that; it leads the eye to the water tower standing by
it in the fog. The five stand as one group in the middle of the frame (x 0.36…0.70 of 16:9, inside 4:3), 3.35–4.35 m
off, their feet at 0.78–0.89 of the frame: Ivanov on the left, Lyuba facing him, the three behind her stepped back in
depth. Everyone is turned three-quarter toward the eye and looks, cheated as on a stage, at a point between the one they
look at and the eye (`<id>_look` as points: looking at the head itself turned every face to profile): Ivanov turned 140
(toward the eye and to his right), the family 210–225 (toward the eye and to its left), so the meeting reads as faces. Behind them the station house's long ochre front (the door, the bell, the windows, the lamp),
its near gable end on the right.

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
before them; a breath before Lyuba runs to him. Everyone looks toward someone — the four toward Ivanov, he toward Lyuba — at points cheated toward the eye.

- `ivanov` — the greatcoat, the side cap, the kit bag in his left hand (`ivanov`) — (−0.8, 3.5, turned 140), looking
  at Lyuba, `tired` (worn out by the road and at a loss: heavy lids, the brows' inner ends raised).
- `lyuba` — `lyuba_best`: the blue pre-war dress, no apron, the white kerchief (§2.1: «Люба в синем довоенном платье») —
  (0.05, 3.35, turned 210), nearest to him, her hands clasped before her breast (`lyuba_reach`, 0.2 m before her at
  1.05 m), `sad` (waiting and holding it in).
- `petrushka` (0.6, 3.85, turned 220) — a step behind his mother, standing plainly, his hands at his sides (`stand`),
  `thinking` (wary).
- `semyon` — `semyon_out`: his clean jacket, the cap on — (1.45, 4.35, turned 225), looking at Ivanov, `smile` (kind,
  ceremonious: «Я на минутку. Довёл только»).
- `nastya` (1.1, 4.05, turned 215) — before the old man on his near side, holding his jacket's flap with her left hand
  (`nastya_reach`, a point 0.18 m off his middle toward her, at 0.65 m), looking at the stranger, `afraid` (she does not
  remember her father: «Деда!»).

What moves: the people breathe; the fog bank and the sky's veil drift; smoke from the chimney; the bell's rope and the
grass in the air; the lamp's flame flickers.

Other lights of this place (the junction's night in rain, Masha's station at dawn — the scenario's §4) are for later
scenes or looks. The train itself is not in the frame: only its stop by the water tower behind Ivanov.
