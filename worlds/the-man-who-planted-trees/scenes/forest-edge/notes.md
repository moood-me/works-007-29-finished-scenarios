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
