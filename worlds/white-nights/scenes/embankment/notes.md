# The Canal Embankment — notes

The game's main place (scenario §4, place 1): the canal embankment by the lamp, on a white night. This first version
is the look of the world for the owner's review: the mood and the style, and the two main people standing where
they stand in the story. No one walks, no camera moves, no showcase yet (nothing happens in it to show).

## The look

Petersburg of the white nights as an old lithograph touched with watercolour: washed, pale, narrow colours (ochre,
pink, grey-green, cream, the granite's pinkish grey, the yellow house), a fine sepia ink line round every shape
(`lib.INK`). The hand is the lithograph's, shared by every painting through the lib: `lib.wash` — the watercolour never
even, its pigment in soft blotches darker and lighter and pooled at a wash's foot (the walls, the granite, the street,
the sky) — and `lib.hatch` — the shade drawn as fine sepia hatching (under the cornices and on the roofs, at the walls'
feet, in the gateways, down the pilasters' shaded sides). The houses are five kinds that never read alike (`lib.HOUSES`:
a pediment, pilasters, a main floor of tall windows under little cornices and pediments, an attic of square windows, an
iron balcony, an arched gateway to the yard), every window its own — the pane holding the sky, some dim, some with
muslin curtains, the reveal's shade, a sill. The sky is light — lilac-grey above, pearl low down, a warm
rose-peach glow over the far bank to the north-west where the evening lingers into the dawn; the water is lighter
than the sky. It is night and nothing is dark: people and faces read clearly. The lamp burns, though it is not
needed — the one warm spot in the cool light.


Light (all the engine's; everything is painted in daylight colours): an ambient in lilac-white (0.55: nothing is
dark, yet the lights model the people round), a low warm far light from where the sky glows (`glow`, bearing −21°, 6°
up — the people's warm side and rims), the pale northern sky behind the viewer (`skylight`, bearing 165°, 40° up,
0.65: in a white night the whole sky is light, so the faces turned to us are lit, cool and clear), and the lamps: the near one (`lamp`, from `lamp#flame`, warm, 1.9 within 5.5 m: a warm spot, not a wash over the whole street) stands a few steps beyond Nastenka and the Dreamer, between
them on the screen, so its warmth rims their backs and shoulders and throws their shadows toward the viewer over the
flagstones (their `shadow` names it); the others along both banks light by their own flames (each lamp's e.light). A
little flicker; their halos the haze's `hazeGlow`. The water is lit as everything is (no glow of its own: a glowing canal bloomed into a white glare with no bank in it), painted as the sky mirrored — pearl and rose far down the canal where it
mirrors the low sky, a pale lilac nearer the viewer —; its mirror (0.8, a little rough, rippled) lays the houses,
the bridge and the lamps on it and draws the lamps along both banks and the afterglow (`sky#afterglow`, an e.light)
out into long trembling paths. Haze fades the far end of the canal and the dome; grain and vignette for the print's
paper. The scene's title is the page's (translated: «Набережная канала»); there is no caption.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking down the canal; the horizon at 0.47 — the sky the
upper half, the people's feet in the frame though they stand near)

The view stands in the street 1.7 m off the parapet: the canal fills the left of the frame, the two stand together in
the middle, near and large. What matters stays within the 4:3 frame (x 0.125…0.875); the near lamp too.

- The world goes on behind the viewer too (for cameras that look back): the canal, both banks' walls and streets, the
  parapet start 40 m behind; on the near side, behind the viewer, **the side street — the corner they come from**
  (`lane`, its floor, across 6.1…30, distance −2…3, between the yellow house and the house behind it; its walls
  `lane_wall`, a house closing it at across 30), houses beyond it on both banks, the canal's far end closed by the
  `vista`'s second copy.
- The canal runs straight away from the viewer: its water a reflecting plane 1.6 m under the streets, across −23.9 …
  −2.2, from 40 m behind the viewer to 320 m ahead (`water`; a slow ripple layer drifting toward the viewer).
- The near granite parapet — her place — along the canal, its face at across −1.7 (`parapet`, its face to the street,
  a darker granite with its top edge inked; its top `parapet_top` at 1.05 m, −2.2 … −1.7, a lighter stone where hands
  rest), from a metre off into the distance: the leading line from the bottom-left.
- The street (`pavement`, −1.7 … 6.1): granite flags 2 m wide along the parapet, each slab its own shade; the roadway
  beyond of rounded setts, each stone drawn near the viewer (0…20 m), only the courses' lines farther (to 45 m), then
  the plain tone; to the houses at across 6.1.
- Near on the right, on the setts: a shallow puddle (`puddle`, across 1.8, 4.6 m off: a small mirror of the light sky,
  the yellow house and the lamps in it) and a granite bollard at the roadway's edge (`bollard`, across 2.6, 5 m: a form
  turned on a lathe, `e.kit.revolve`).
- The yellow house on the near side, its front to the canal (`yellow_house`, d 3…29), its door 12 m off (point
  `yellow_house#door`) under an awning on two round cast-iron posts (`awning`, `awning_front`, `awning_side`,
  `awning_post`; the porch step `porch`, its near end `porch_side`, its top `porch_top`) — where they will wait out the rain.
- The street lamp by the parapet, 6.5 m off at across −1.25 (`lamp`, point `lamp#flame`), beyond the two; the same lamp
  (`lib.lamp`) burns down both banks (`lamps`, copies: the near bank from 26 m every 24–34 m, the far bank's likewise).
- A bench along the parapet, 9 m off, just beyond the lamp, built of its faces so it reads from up the street: its back
  a card along the parapet (`bench`), its seat a plane (`bench_seat`, 0.45 m, point `bench_seat#seat`), its two
  cast-iron ends cards facing the viewer (`bench_end`, copies at 9 and 10.8 m).
- Across the canal the far bank's granite wall (`far_wall`) and its street (`far_street`); the houses on both banks are
  five kinds of facade (`house_a` … `house_e`, `lib.HOUSES`), each painted once and standing in many places (copies;
  facing 90 on the far bank, 270 on the near side beyond the yellow house).
- A low stone bridge over the canal 45 m off (`bridge`); a veil of mist on the water far down (`mist`); the house where
  the canal turns, closing the view at 322 m (`vista`); over it, far in the haze, a dome and a gilded needle (`spire`).
- The corner they wait for is near on the right, behind the viewer's shoulder: Nastenka faces toward it, past the
  viewer.

## The world's picture (`first_meet`)

Two, gathered near, a little larger than life on the screen (about 0.45 of its height), a moment of the first night
when she has stopped crying and he has dared to speak: standing quietly (the engine's `stand`: breathing), each in a
clear pose. Each casts the lamp's shadow toward the viewer (`shadow`, 0.75), the ground a little darker under their
feet. Their faces three-quarters to us, each looking toward the other's side of the viewer, so both faces read.

- `nastya` — Nastenka at the parapet, 3.6 m off, 0.3 m from its face, turned to us and to him (145°): her hands clasped
  at her breast (`nastya_reach`, both to points just before it), looking out
  past the viewer toward his side ([0, 1.6, 1.5]), her face still sad from the tears (`sad`).
- `dreamer` — the Dreamer, 4 m off, a step farther from her than he need be (1.8 m): bare-headed, his brown hair, his
  faded green frock coat; turned half to her and half to us (215°), his top hat held before his chest in both hands
  (`hat_hands`, both hands reaching to points before his chest), looking out past the viewer toward her side
  ([−0.9, 2, 1.5]) with a shy smile (`smile`).

The Lodger is not on the embankment in this look (he comes there only at the end); he is the cast's `lodger`.

## The nights' light (stage 4)

Each night has its own light, all of them light (never dark — faces read in every one): looks over the white night's
pearl, each a key 0…1 (smooth) the light's `looks` and a layer of the sky (`sky.js`, shown by `sky.animate.js`):
`dusk` — the prologue's evening, golden-peach low down; `lilac` — the second night, cooler; `rose` — the third, its
afterglow warmer; `overcast` — the fourth, pearl-grey cloud over all the sky, a little haze, the afterglow hidden;
`day` — Friday's errand and the morning's end: a pale blue sky, the sun (`sun`, on by `day`) on the houses. Pearl (the
first night) is all of them 0. `rain` 0…1 — the rain round the eye (particles `rain`) and the canal roughened (its
ripple, the key `ripple`, follows the rain in script.js). `lamp` puts out every lamp — the near one (light `lamp`), the
banks' (`bank_lamps`, the copies' flames) — and their glass goes a cool pale grey (lib.lamp reads it; `redraw` 0.25).

`wind` 0…1 — the wind off the canal (Д2, the game's М3): a look (the light's wind) and lime leaves blown along the street
(particles `gust`, amount `wind`). `bell` 0…10 — the strokes of ten counted: the game's sound, nothing shown.

Other keys: `cart` — a dray loaded with furniture in the far bank's street (`cart`: the city going to the dachas, coming
back); `scraps` — the torn letter's bits afloat before the parapet (`scraps`, a plane on the water, its layer drifting
down the canal); `hem` none / pinned / torn — her hem on the second night: pinned to his left sleeve with Grandmother's pin, whose glint
(the light `pin` at `dreamer#hand_l`, the key `pin` set by script.js from `hem`) shows at his wrist; torn — the pin gone.

## The people

The world's `cast` (modules/cast.md). Each stands by its place keys `<id>_a`, `<id>_d`; casts the lamp's shadow.
`nastya` (Nastenka), `dreamer`, `lodger`; the embankment's own passers (new in the cast): `gentleman` (the tipsy
gentleman in a tailcoat, 1.2), `yardman` (the yard-keeper with his broom, the prologue; part `broom`), `nanny` and
`child` (the morning's end; the child's part `bagel`), `passerby` (the morning). New parts: `broom`, `bagel`,
`letter_stained` (the letter with the puddle's brown stain — the mark «Пятно»). All but Nastenka and the Dreamer are
`_here` false by default.

## Moments (key `moment`; script.js `MOMENTS`)

The scenario's steps on the embankment as pictures of people standing (stage 4): the script lays a moment out at once
when `moment` changes, and as the scene opens only if `moment` differs from `staged` — so a restored scene keeps what a
game changed after it. **A game sets `moment` first, then any detail** (`<id>_here`, a mood). Each sets the light keys,
`rain`, `lamp`, `cart`, `pin`, `scraps` and every person (here or not, place, turn, doing, look, mood, what they hold,
reach, seat). The scene's default state is `first_meet` laid out — keep the two together.

| moment | the scenario | who and where |
| --- | --- | --- |
| `first_meet` | the world's picture: the first night, she has stopped crying | as stage 2 |
| `prologue` | the evening, «Тебя выкрасили» | dusk, the lamp unlit, the dray; the Dreamer with his stick before the yellow house, the yard-keeper with his broom by its porch |
| `first_night` | 1.1 | she weeps at the parapet under the lamp, her back half to us; he across the roadway |
| `first_gentleman` | 1.2 | she hurries off along the parapet, the gentleman after her, the Dreamer behind |
| `first_walk` | 1.3 | arm in arm toward the viewer (her right hand on his left elbow) |
| `first_corner` | 1.4 | her corner, near on the right: she has let go of his arm |
| `second_wait` | 2.1 (lilac) | he at the parapet, looking toward the corner |
| `second_bench` | 2.2–2.4 | both on the bench (`seated`), the pin's glint |
| `second_letter` | 2.6 | she holds the letter out to him |
| `second_alone` | 2.6 ⏸ | he alone at the parapet with the letter |
| `day` | Д2 | day, he along the houses with the letter, looking up at the numbers |
| `third_night` | 3.0–3.2 (rose) | arm in arm, she laughing |
| `third_ten` | 3.3 ⏸ | she at the parapet facing the corner (toward us), he behind her |
| `third_bench` | 3.4 | she on the bench, silent; he stands by |
| `third_tear` | 3.4-С | she tears the letter over the water, its scraps afloat |
| `fourth_night` | 4.1 (grey) | she weeps at the parapet, he beside her |
| `fourth_rain` | 4.3 | the rain; arm in arm along the water |
| `fourth_awning` | 4.3-С | under the yellow house's awning in the rain, she looking at the corner |
| `fourth_lodger` | 4.4 | the Lodger under the lamp, his hat in his hand, her letter in the other; the two arm in arm |
| `fourth_alone` | 4.4 ⏸ | he alone at the parapet in the rain |
| `morning` | «Утро» | day, the dray back; a nurse-maid and her child with a bagel at her place at the parapet, a passer-by, the yard-keeper; the Dreamer a step aside |

## Showcase

The moments one after another, four seconds each (showcase.js).

## State

`lamp` 0…1 — the lamps' light. `moment`, `staged`, the looks, `rain`, `ripple`, `wind`, `bell`, `cart`, `hem`, `pin`,
`scraps` (above). The
people's keys are the engine's (`<id>_here`, `_a`, `_d`, `_turn`, `_do`, `_reach`, `_look`, `_with`, `_mood`, …).

## What moves

The clouds drift (a sky layer), the ripple runs down the canal (a layer of the water), the mist drifts across, the
lamp's flame flickers a little, the rain falls, the scraps drift, the people breathe. A night's sky is a layer shown by
its key. Nothing is painted again while the scene plays (the lamps' glass only when `lamp` crosses a quarter).

## Points (for the game's marks and cameras)

The people's own (`<id>#head`, `#hand_r`, `#hand_l`, `#elbow_r`, `#elbow_l`, `#chest`, `#shoulder_r`, …; the letter's
`<id>#letter` while held), `lamp#flame`, `sky#afterglow`. Arm in arm: her hand on his elbow on the side she walks —
walking toward the viewer she is on his right (`nastya_reach` {l: `dreamer#elbow_r`}), walking away or facing the
viewer under the awning, on his left ({r: `dreamer#elbow_l`}, as the game's М4 marks `nastya#hand_r`).

## Stage 5 — not begun here

The owner stopped «Белые ночи» at stage 4 (2026-10-29). Not in the scene: the pieces (`lib.film`, the key `beat`), its
cameras and close faces, its motions. A first draft of the pieces was written against scenario §5 before the game's
contract came and was taken out whole (nothing half-made is left); what it taught is in the history note
`docs/history/2026-10-29-nochi-embankment.md`. The world has the module `beats` (copied from Canterville) for when the
pieces are written.

## What is not right yet

- The rain falls through the awning (weather fills the air round the eye; its `area` is a box, not «not under this»):
  under the awning it rains past the two as everywhere — seen as the rain beyond the awning's edge.
- People far up the street (the awning at 12 m, the bench at 9–11 m) are small in the picture camera: the close faces
  are stage 5's cameras.

