# The Master's Yard — engine 3

The first scene of «An Ordinary Miracle» (Schwartz, 1954; the game's scenario:
docs/new-games/obyknovennoe-chudo/scenario.md, §4 place 2, «Двор и сад»). Stage 2 of writing the game — the look: the
world's mood and style and how the three main people look. A still picture (`picture`): people stand and breathe,
smoke rises from the chimney and leans in the wind, the clouds drift, the grass tufts, the apple tree's crown and the
well's hanging bucket move in the gusts, the hearth's light in the open door flickers. No script, no showcase, no
caption.

## The look

A storybook in gouache: flat warm tones with soft rounded dabs of broken colour over them (`lib.dabs`), clean
outlines of things, no texture on the people (the engine's figures of shapes in the world's `tale` style — cast.md).
Honey-coloured logs, white carved boards with cornflower-blue, a green meadow, blue mountains with snow, a golden
evening sky. A late-summer golden evening (the scenario's «летний день и золотой вечер»): the sun low behind the
viewer's right shoulder (`sun`, bearing 135, 13° up, warm) lights the faces turned to the eye, the house's front and
the mountains, and throws long shadows away to the left; the shade a cool blue-grey (`ambientColor`), a warm `tint`.
The warm accents: the hearth's glow in the open door (`hearth`, 4 m) and the window (`window`).

## The frame

Horizon at 0.45: the people's faces sit about there, the house's roof, the apple tree and the mountains above. The
Bear (`medved`, −0.95, 3.7, turned toward her) and the Princess (`princess`, 0.75, 3.45, turned toward him, smiling)
stand near in the middle, whole; between them, far off, the open gate and the road going away into the meadow and up
toward the hills — the leading line to the mountains. The Master (`hozyain`) stands on the porch in the open door
(−3.0, 6.4, 0.45 up), his hands behind his back, smiling, watching them — as the scenario has him: in doors and
windows, watching. On the right the well (2.5, 5.6) and the apple tree behind it (4.6, 8.8); on the left the chopping
block with the axe (the young man chops wood for the house), the woodpile against the front and the window (16:9).

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

- The land (`relief.js`): level to 16 m, then rising 14 m by 200 m. `meadow` — one draped plane, 600 × 240 m, centred
  110 m ahead (a world point (a, d) is (a, 110 − d) in its painting): the yard's trampled earth before the house and
  round the well, paths from the porch to the gate and the well, the road from the gate bending right up the slope,
  wild flowers near.
- The house: `house_front` (a card facing the yard, anchored at its right corner −2.4, 6.6, painted 8 m to the left:
  logs on a stone footing, the door at −3.0 open on the warm room, a window at −6.0 with a carved frame and blue
  shutters), `house_gable` (facing right, 6.6 → 12 m), `roof` (the front slope: a plane tilted 36°, the eaves at 6.3 m
  and 2.7 m up, the ridge at 9.3 m and 4.9 m up), `konyok` (the carved horse at the ridge's end), `chimney` (its point
  `#mouth` — the smoke's). The porch: `porch` (a floor people stand on, 0.45 up), `porch_front`, `step`, `step_front`,
  `porch_roof` (the posts and the little gable).
- `fence` (wattle, 12 m ahead, from behind the house to the right edge, a gap at 0.65…2.25), `gate` (its leaf hinged at
  2.25, open toward the yard: facing 110).
- `firs` — one fir, 22 copies at the forest's edge on the slope (left behind the house and on the right), the middle
  left open to the road and the hills. `hills` (600 m), `ridge` (1.8 km), `peaks` (5 km) — cards standing far; the
  meadow's far edge (14 m up at 230 m) hides their feet.

## For the next stages

The scenario's other looks of this yard (the spring meadow of the prologue, the storm, the moonlit night, the morning
with the carriage, winter) are looks and keys yet to be made; the ids above are meant to stay.
