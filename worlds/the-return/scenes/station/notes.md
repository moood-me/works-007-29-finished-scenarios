# The Station — engine 3

The third scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4
«Станция», chapter 2.1 (c)). Stage 2 of writing the game — the look: the station of the Ivanovs' village on a misty
late-August morning, Wednesday, before the train, and two people not seen before — Nastya and Semyon Yevseyevich —
beside Lyuba and Petrushka, in another light than the yard's evening and the izba's lamp. A still picture (`picture`):
people stand and breathe; the fog over the fields drifts, the veil of cloud drifts, smoke rises from the station house's
chimney, the bell's rope and the grass stir. No script, no showcase, no caption (the title is the page's: ru «Станция»).

## The look

The world's gouache (the izba's lib: dry ragged strokes kept inside what they paint, the paper's tooth as soft blots,
never specks): clapboard in the railway's ochre with white trims, a red-brown iron roof, old red brick, weathered grey
planks, the ballast's grey, rusty rails with pale worn tops, packed sand. The morning: the fog not yet off the fields —
`haze` 0.5 toward a warm white (`hazeColor`), so the water tower at 44 m is soft, the store at 46 m paler, the poles
fade along the line, the forest is a ghost; a low drifting bank of fog 60 m off (`mist`); a high whitish sky. A soft sun
behind the eye's left (`sun`, bearing 200, 28° up, a warm white) lights the faces and the house front, the shadows fall
away behind the people; a high pale `ambient` keeps everything light. Not dark.

## The frame

The eye on the platform, 1.7 m up, the horizon at 0.32. The line runs aslant — from behind the eye's left (the train
comes from there: from Masha's side) away to the far left into the fog: the main track with the kerb of old sleepers at
the platform's edge, a siding beyond it, the telegraph poles beyond that; it leads the eye to the water tower standing by
it in the fog (x ≈ −0.29 of the frame). The four on the platform 2.7–3.1 m off, whole, feet near the frame's foot,
their faces toward the eye: they look along the line toward where the train will come, behind the viewer — the
viewer stands where Ivanov will step off. Behind them the station house's long ochre front (the door, the bell, the
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

One moment of chapter 2.1 (c), before the train comes in: the three who came to meet it and the old man who brought the
girl. Each looks along the line toward the eye's left-behind, where the train will come from (looks' points behind the
eye), so the faces are seen near full, a little turned.

- `petrushka` (−0.75, 3.0, turned 200) — at the left, nearest the line, `hands_behind` («руки за спиной»), watching
  for the train (he knows all the trains by the clock), `thinking` (wary, grown up).
- `lyuba` — `lyuba_best` (new in the cast): the blue pre-war dress, no apron, the white kerchief (§2.1: «Люба в синем
  довоенном платье») — (0.0, 2.7, turned 190), her hands clasped before her (`lyuba_reach`), `sad` (waiting, afraid
  of it).
- `nastya` (0.8, 2.9, turned 175) — by the old man, holding the flap of his jacket (`nastya_reach` l, a point at his
  right side), looking low toward the eye, `neutral` (she does not remember her father).
- `semyon` — `semyon_out` (new in the cast): his clean jacket, the cap on — (1.2, 3.1, turned 200), looking down toward
  the girl's side and the eye (`semyon_look`, a point low before her: looking at her head itself, so near, bows his
  face away under the cap), `neutral` (he only brought her: «Я на минутку. Довёл только»).

Ivanov is not in the picture: he is on the train. Other lights of this place (the junction's night in rain, Masha's
station at dawn — the scenario's §4) are for later scenes or looks.
