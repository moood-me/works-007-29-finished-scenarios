# The Forest Edge — notes

The scenario's М3, the slope over the village, across all the years (stage 4 of the game stages: every place of the
game; people stand, no motions, no camera, no mini-games — stage 5's). Its stage-2 look was the third chapter's
afternoon (3.1–3.2); the same place now shows the bare slope of the first chapter, the young wood of the second, the
grown forest of the third and the epilogue's, each with what the scenario's branches put there.

- Camera `picture`, horizon 0.55; the frame is as tall as its distance (a 53° lens). The view from the meadow shelf
  where the path runs: the forest's near edge along the stream on the left, its edge swinging right and back from
  ~16 m, the valley falling away to the right beyond the brow (`browA`), the village 235 m off over it.
- The land is one draped plane (`land`) over `relief.js`; `lib.js` has the shape (`streamX`, `streamW`, `edgeA`,
  `browA`, `slope`, `channel`, `ground`), the path near (`pathX`), the trees (`oak`, `youngOak`, `oakOf`, `beech`,
  `stump`) and the Road's row (`rowPlace`, `beechHeight`). All the copies are laid out by
  `node tools/forest-edge-copies.mjs` (it rewrites their `copies` in scene.json, and puts `stump_bread` on a stump).
- Light: the late afternoon's sun from behind the viewer's right (`sun`); the look `morning` (cooler, hazier) for the
  first chapter, with `mist`.

## The years (`year`: 0, 6, 20, 30) and what reads them

- Oaks (`oak_a/b/c`, `wood_far`, the near edge's `edge_*`): none at 0, young (3–4 m: `youngOak`) at 6, grown at 20
  and 30. `willow`: none at 0, a first willow at 6, grown from 20. `grass`: dry straw at 0, greening at 6, summer grass
  with flowers at 20, taller (unmown) at 30.
- `land`: bare and dry at 0 (dust and scrub, bare earth up the hill, the fields fallow), the young wood's darker floor
  at 6, the summer meadow and the forest's dark floor from 20. `village`: the dying village before 20 (old roofs, the
  emptied houses roofless, the fruit trees bare), some new roofs at 20, every roof mended at 30. `valley_trees` and the
  hills' woods only from 20.
- `stream` (boolean, set with the year by the moments): the water, the rushes, the green banks; false — the dry bed
  white with stones (`water` and `sedge` paint nothing).

## The moments (key `moment`; script.js)

The script lays a moment out at once when `moment` changes, and as the scene opens only if `moment` differs from
`staged`. **A game sets `moment` first, then any detail of its branch.** The default state is `delegation` laid out.

| moment | scenario | the place | who (standing) |
|---|---|---|---|
| `planting` | 1.1–1.4 | year 0, morning look, mist, the sheep and the dog on the meadow, a pail of acorns | Elzéard (55, the rod in hand), the Traveller (20) |
| `grove` | 2.5 | year 6, hives at the edge's foot across the stream | Elzéard (61) by the hives, the Traveller (26) on the near bank; Lina (23) placed at the edge, `lina_here` false |
| `edge` | 3.1 | year 20, the bread on the stone, the hives' empty stones (Lina knows) | the Traveller (40), Lina (37) with her pail; the man with the axe placed, `axeman_here` false |
| `delegation` | 3.2–3.3 | the same (the stage-2 look) | the Traveller, Jan (40), Lina, the chief, the ranger |
| `stumps` | 3.5 Silence | the lower edge felled (`stumps` "lower") | Jan among the stumps, Elzéard (75) between them, the Traveller, Lina |
| `board` | final «Табличка» | year 30, the board, the Road's row of 24 beeches | the Traveller (50) with Elzéard's rod, two visitors at the board |
| `pupil` | final «Ученик» | year 30, the board, his beeches on the meadow | the Traveller (50), the boy (`village_boy`) with the rod, two visitors |
| `two_rods` | final «Два прута» | year 30, his beeches above the head, the lower edge old (`lower_old`), Elzéard's rod in the ground, the pail of seeds in notebook leaves | the Traveller (50) with his rod |

What a branch changes after the moment (the game's):

- **Lina doesn't know** (3.1): `bread` false, `hives` "hives", `stumps` "begun", `axeman_here` true.
- **Свой дуб** (2.5): `own_oak` true. **Lina knows** in 2.5: `lina_here` true.
- **The Road** in the third chapter: `beeches` "row", `beech_row` 13, then 14 when he plants the year's (МИ4) — the
  next place is the unseen `beech_next` (the script moves it). **The Slope**: `beeches` "slope" (МИ4 at `slope_spot`).
- 3.5 Silence, **Lina knows**: `stump_bread` true (a loaf on a stump).
- The epilogue on the Name when Lina did not know: `stumps` "begun_old" (old stumps grown over).
- 1.4 «Взять прут»: `rod_ground` true at `rod_a`/`rod_d` (the moment puts it at `plant_spot`), Elzéard's `_with` [].

## Points the game presses

`bread#seat` (the stone they sit on), `bread#loaf`, `hives:0…4` (a hive or its stone), `edge_first:k#cut`,
`edge_a|b|c:k#cut` (the stumps' cuts — Jan's palm), `stump_bread#loaf`, `own_oak#bark`, `oak_a|b|c:k#bark`
(2.5 trunk to trunk), `beech_slope:k#bark`, `beech_next` (where the Road's next beech goes), `slope_spot` (МИ4 on the
Slope), `plant_spot` (1.1–1.2, where the rod goes in), `row_from`/`row_to` (3.3, a row of oaks through the wood),
`board#plate`, `board#foot` (Табличка: the rod under the board), `rod#top`, `pail#top`, `dog#head`; the people's own
points (`#rod`, `#pail`, `#notebook`, `#axe`, `#basket`).

## People (cast: modules/cast)

`elzeard` (`elzeard_75`; `elzeard`, `elzeard_61` by `_wear`), `traveller` (`traveller_40`; `traveller`,
`traveller_26`, `traveller_50`), `lina` (`lina_37`; `lina_23`), `jan` (`jan_40`), `chief`, `ranger`, `axeman`,
`visitor_a`, `visitor_b`, `boy` (`village_boy`).

## Not right yet

- 3.5 Silence: the felled edge is the near edge across the stream; the people stand 9–18 m off — faces read, but the
  palm on a stump and the rod between the stumps want stage 5's close shots.
- The stumps and the oaks are separate copies by kind; a stump keeps the oak's copy scale.
- The Road's row past fourteen stands as a second row beside the first (one tree a year for 24 years).

## Pieces (stage 5)

`lib.js` `film(scene)`, played by `script.js` (modules/beats: the game sets `beat`). A piece's `from` sets its
people's places, turns, motions, looks, what they hold, the camera and its own things (`rod_ground`, `pail`,
`new_beech`) — never the game's `_here`, `_mood`, the year's and the branch's keys (the moment's, then the game's), nor
`_wear` (the moment's look of the year). Close shots are the operator's (`camera_target` + `camera_shot`). People's
new motions are the cast's: `plant_rod`, `sit_stone`, `touch_bark`, `write_standing`, `laugh_short`, `palm_stump`,
`walk_old` (Elzéard's gait at 75 and 85).

| piece | place | what it shows (the tells: where the game says its lines) |
|---|---|---|
| `rod_mist` | slope0 | the mist; Elzéard drives the rod in three times (`blow`), the Traveller watching — then МИ2 at `plant_spot` |
| `stone` | slope0 | both on the flat stone (`sit`), the rod in the ground by them |
| `rod_left` | slope0 | he leaves the rod in the earth and goes to the sheep (`gone`) — the choice on `rod#top` |
| `took_rod` | slope0, after `rod_left` | the Traveller plants, clumsy; Elzéard comes back, looks at the hole (`back`), plants on |
| `counting` | slope0, after `rod_left` | Elzéard plants on; the Traveller counts (`count`) |
| `oaks` | slope6 | the Traveller to the bank; Elzéard at his hives (`hives`); when `lina_here`: Lina's palm on an oak (`lina`), she runs down; «Зря» — Elzéard close (`zrya`) |
| `own_oak` | slope6, after `oaks` | Elzéard leads him to the crooked oak by the stone (`there`) |
| `edge` | edge20 | the Traveller comes to his row's end (Road) or his slope (`arrive`); Lina by the stream |
| `axe` | edge20, after `edge` | Lina on the path before the axeman (`path`, `nobody`), «Не ничей!» close (`loud`), «А чей?» (`whose`), he goes (`go`) |
| `beech` | edge20, after `edge` | the Traveller with the rod at this year's beech (`ready`) — then МИ4 on `new_beech` |
| `delegation` | edge20 | Lina leads the chief, the ranger and Jan up from the valley (`jan_place`); the chief (`chief`), his laugh (`laugh`); Jan knows him (`alive`), a hand on his shoulder (`hug`), «Ты тогда сюда наверх ушёл» (`up`) |
| `the_row` | edge20, after `delegation` | along a row to the wood; Jan's palm on the bark (`bark`), the notebook (`page`), Jan close — then Ш2 |
| `named` | edge20, after `the_row` | Jan close (`good`), reads to the chief (`read`, `chief`); Lina close (`lina`), she walks ahead |
| `unnamed` | edge20, after `the_row` | Jan's page or his hand on the shoulder (`silent`) (`jan`); the chief reads (`read`), Jan looks at the lower edge (`look`); Lina on the path before the chief, close (`lina`, `whose`, `answer`); he goes down (`down`) |
| `stumps` | stumps20 | Jan's palm on a stump (`palm`), he goes down (`down`); Elzéard down between the stumps, plants (`rod`); the Traveller beside him (the guiding `stumps`); Lina close (`lina`) |
| `plaque` | board30 | visitors at the board (`read`); the Traveller plants the rod under it (`rod`) and goes |
| `two_rods` | beeches30 | he plants among his beeches by Elzéard's rod (`plant`) |
| `pupil` | pupil30 | «Это вы — Эльзеар?» (`ask`) — «Нет» (`no`); he gives the boy the rod and sets his hands (`hands`) |

Keys for the pieces: `new_beech` (none | crooked | straight — МИ4 drives it; on the Road set `beech_row` 14 and
`new_beech` none once the year's tree stands in the row), `silent` (the game's: Ш2 silence — Jan's hand).

Not right yet: the embrace is a hand on the shoulder (two people touching is not Kimodo's); the pail's notebook leaves
want an insert («Два прута»); the Traveller's acorn in the hand (МИ2) is the mini-game's.

## Contract for the check

```json
{"beats":{"rod_mist":{"after":[],"tells":["rod_mist:blow"],"seconds":22},"stone":{"after":[],"tells":["stone:sit"],"seconds":8},"rod_left":{"after":[],"tells":["rod_left:gone"],"seconds":9},"took_rod":{"after":["rod_left"],"tells":["took_rod:back"],"seconds":18},"counting":{"after":["rod_left"],"tells":["counting:count"],"seconds":18},"oaks":{"after":[],"tells":["oaks:hives","oaks:lina","oaks:zrya"],"seconds":26},"own_oak":{"after":["oaks"],"tells":["own_oak:there"],"seconds":14},"edge":{"after":[],"tells":["edge:arrive"],"seconds":12},"axe":{"after":["edge"],"tells":["axe:path","axe:nobody","axe:loud","axe:whose","axe:go"],"seconds":26},"beech":{"after":["edge"],"tells":["beech:ready"],"seconds":7},"delegation":{"after":[],"tells":["delegation:jan_place","delegation:chief","delegation:laugh","delegation:alive","delegation:hug","delegation:up"],"seconds":34},"the_row":{"after":["delegation"],"tells":["the_row:bark","the_row:page"],"seconds":22},"named":{"after":["the_row"],"tells":["named:good","named:read","named:chief","named:lina"],"seconds":32},"unnamed":{"after":["the_row"],"tells":["unnamed:jan","unnamed:read","unnamed:look","unnamed:lina","unnamed:whose","unnamed:answer","unnamed:down"],"seconds":34},"stumps":{"after":[],"tells":["stumps:palm","stumps:down","stumps:rod","stumps:lina"],"seconds":50},"plaque":{"after":[],"tells":["plaque:read","plaque:rod"],"seconds":22},"two_rods":{"after":[],"tells":["two_rods:plant"],"seconds":12},"pupil":{"after":[],"tells":["pupil:ask","pupil:no","pupil:hands"],"seconds":18}},"points":["plant_spot","rod#top","bread#seat","bread#loaf","hives:0","edge_first:0#bark","edge_first:1#bark","edge_a:0#bark","edge_first:0#cut","edge_a:0#cut","own_oak#bark","beech_next","slope_spot","new_beech#top","row_from","row_to","board#plate","board#foot","pail#top","stump_bread#loaf","traveller#rod","traveller#hand_r","elzeard#rod","jan#notebook","boy#hand_r"],"keys":["moment","beat","beat_next","new_beech","new_beech_a","new_beech_d","silent","rod_ground","rod_a","rod_d","pail","bread","hives","stumps","stump_bread","own_oak","beeches","beech_row","board"]}
```
