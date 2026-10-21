# The Hollow (engine 3)

The world's third scene for stage 2 of «Master and Man» (the look: people stand, nothing is played). Chapter 3,
«The Drift», and the night of chapters 3–5: the sleigh has gone down into a hollow and sunk; Nikita has unharnessed
Mukhorty, stood one shaft upright at the sleigh's front and tied his red sash to its top «so that they will be found»;
he has covered the horse with the matting and sits huddled in the front of the sleigh; the master sits deep in its
back in his two coats, his hand at the bosom where the money is, his eyes on the workman. The mood in one word:
**the night** — long, white, driven; not dark: the snow and the blizzard give the light, faces read.

Why this place: it is the story's own place (the hollow is where the game's three hinges are: «Flight», «The Rein»,
«The Coat») and it shows the same two people in the third light of the world — after the grey day of the yard and the
lamp of the hut, the cold blue of the night storm, where the only warm colours are the fox coat and the sash.

## Space

Metres: across to the right, distance ahead; the eye 1.7 m up, the camera `picture`, the horizon 0.38. The viewer
stands on the hollow's flat bottom; its far bank rises from 9 m to a crest about four metres up at 21 m, its sides
beyond 8–9 m to either hand (`relief.js`). What matters is within 4:3 (x 0.125…0.875): the horse's head, the sash, the
two in the sleigh.

| What | Where (across, distance) |
| --- | --- |
| the sleigh (an unseen anchor, turned 150: its front toward the eye on the left, its back away on the right) | 0.9, 3.1 |
| — its near side, far side, front board, back, the straw floor (a `walk` plane 0.15 m up) | on the anchor |
| the shaft standing upright at the sleigh's front, the sash at its top (2.22 m up, the point `shaft#sash`) | on the anchor: −1.15, 0.2 |
| Nikita, huddled on the straw in the front | 0.39, 3.38 |
| Vasily Andreich, seated on the straw in the back | 1.3, 3.91 |
| Mukhorty (facing 165: his head to the left, toward us), under the matting, tail to the wind | −1.5, 5.3 |
| wormwood (copies) | about the hollow |
| a drift before the eye (lower left) | −1.9, 1.7 |

## Elements

sky (the murk of the storm, lit by the snow: slate-blue overhead, paler toward the crest, a paler place high right where
a moon is behind it; layers of cloud and scud and a veil over the crest, all running left), ground (a draped plane: the
wind's ridges, blue hollows, the sleigh's half-filled furrow coming down the bank from the right, the trampled snow by
the horse), crest_wind / drift_far / drift_near / wind_front (ground wind: drifting wisps), wormwood (a clump bent by the
wind, copies), horse (the yard's Mukhorty unharnessed, sunk to the fetlocks, head low, the matting over him — `horse_cover`;
layers mane, tail, head; points head, cheek, nose, bit, neck, back; + `breath`), the sleigh's cards and straw plane on
the `sleigh` anchor (the yard's sleigh, sunk to the boards, snow packed against its side), shaft (the pole and the sash's
two ends — layers bent by the wind about the knot), the two people (`modules/cast`), storm (blizzard) and flurry (snow
driving past close), breath_vasily, breath_nikita.

## Light

The engine's: a night lit by the snow — ambient 0.5 cool (`#93a6cc`), bounce 0.6; a hidden moon behind the viewer on the
left (`moon`, 205°, 38°, `#c8d6f2`, 1.1) that lights the faces turned toward us and casts the shadows; a weak light of
the snow-glow ahead (`snowlight`, 25°, 18°) for rims. Haze 0.42 toward `#7d8fb0`: the banks and the crest go soft and
blue in the driven snow; a cold tint 0.16, saturation 0.92, a firm vignette, grain. No warm light anywhere: the fox coat
and the sash are the warm colours.

## State

`storm` 0…1 — how hard the blizzard drives (0.85); `horse_cover` — the matting on the horse (true) or not (false: the
choice of chapter 3 where it is on the men). People stand on the straw plane, their places their own across/distance
(no `_on`): Vasily `knees_sit`, turned 230, his right hand at his chest (`vasily_reach {r: vasily#chest}`), looks at
Nikita, mood thinking; Nikita `huddle`, turned 235, looks down ahead toward us (`[-1.0, 2.1, 0.4]`), mood neutral.

## Showcase

`hollow` (8 s, as it stands) → `glances` (the master looks at the horse, up at the sash and back to Nikita; Nikita
lifts his head to the horse and lowers it) → `gust` (the storm up to 1 and back).

## Not yet

- The blizzard's flakes hardly show against the snow (white on white); it reads by the ground wind, the sash, the
  wormwood and the haze.
- The matting is drawn on the horse; with `horse_cover` false it is gone, but nothing yet lays it over the men.
