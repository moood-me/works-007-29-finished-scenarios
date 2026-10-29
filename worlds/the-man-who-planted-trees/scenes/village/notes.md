# The Village — notes

Stage 4 of the game (all scenes): М1 «Деревня» of the scenario — the last village at the plateau's edge: the square
with the lime's stump, the dry well, the fountain, the charcoal heaps, the slope rising behind it where Elzéard's
oaks grow over the years. One place in four times (`time`), people standing (a breath and a look); no motion of
people, no camera moves, no mini-games — they are stage 5's.

## Where things are

Camera `picture`, horizon 0.55 (the frame is as tall as its distance: a person 7 m off is about a fifth of it). The
viewer stands at the front of the square looking in; the land is one draped plane (`land`) over `relief.js`;
`lib.js` has the shape (`streamX`, `streamW`, `edgeA`, `rise`, `fall`, `slope`, `channel`, `ground`) and the houses.

- **The square** (level to 30 m): the lime's stump in its middle (`stump`, 0.4 / 8.2 m), the fountain on the left
  (`fountain`, −3.4 / 12.6: a stone trough and a pillar with a spout), the well on the right (`well`, 4.6 / 11.8),
  the handcart by Lina's father's house (`cart`, −6 / 9.6), the grave at the left edge (`grave`, −6.4 / 18.6).
- **The houses** (`lib.HOUSES`, each on its unseen anchor: the front's foot): `home` — Lina's father's (left near,
  its door a leaf of its own, `home_door`), `edge` — the empty house at the village's edge (right near: 2.1, the Slope
  line's house in the third chapter), `b1`, `b2` (the back of the square, the path up the slope between them), `l2`,
  `r1`. Each: `<id>_front`, `<id>_roof` (a plane), `<id>_chimney` (its smoke: `smoke_<id>`), and for the two near ones
  the gable toward the square (`<id>_side`). How each is in each time — `lib.PLAN` (roof: old / holed / patched /
  new; front: empty / shut / lived / new).
- **The slope** behind the village (from 30 m up; +9 m at 60 m, +50 m at 450 m): bare in the prologue; then Elzéard's
  oaks — the forest's lower edge over the village at 46–56 m (`edge_oak`, its stumps `edge_stump`), rows behind it
  (`oak`), stretches of eight farther up (`wood_far`); the path up it (`slope_path`), the stream coming down it on the
  left (`water` near, the land's painting farther up).
- **Right**: the open ground where the charcoal heaps are (`heap`, two copies, their smoke `coal_a`, `coal_b`), the
  plateau's edge (`edgeA`), and far below the lowlands' fields and river, the mountains (`mountains`).
- **Left behind**: Lina's garden by the stream (`gardens`, parts; the land paints the gardens' earth), fruit trees
  (`fruit`), grass tufts round the square (`grass`).
- Copies (oaks, stumps, stretches, fruit trees, grass) are laid out by `node tools/village-copies.mjs` (it rewrites
  their `copies` in scene.json).

## The times and the moments (state)

`time` changes the place itself — the houses, the land's colours, the slope's oaks, the stream's water, the heaps,
the grave, the gardens, the fruit trees, the fountain's stone. What it does not set — the smoke, the fountain's water,
the edge, the stump, the people — are keys of their own, set by the game with it:

| time | what it is | the keys to set with it |
|---|---|---|
| `prologue` (prologue, chapter 1) | the dying village: roofs fallen in, doors gaping, the father's house shut, charcoal heaps smouldering, the stream's bed dry and white, the slope bare | `coal: 1`, every `smoke_<id>: 0`, `fountain: 0` |
| `chapter2` (+6) | empty; the stream back, Lina's new garden by it, her father's fresh grave, the heaps cold, a grey haze of young oaks on the slope | `coal: 0`, smokes 0 |
| `chapter3` (+20) | `home`, `b1`, `r1` mended and lived in, gardens, young fruit trees, the forest grown over the village | `smoke_home`, `smoke_b1`, `smoke_r1`: 1; `edge` as the line goes; `edge_house: "lived"` + `smoke_edge: 1` on the Slope line |
| `epilogue` (+30) | every house roofed anew, glazed, flowers on the sills, the fountain clean, gardens, fruit trees in blossom | every `smoke_<id>: 1`, `fountain: 1`, `edge`: `"whole"` (the Name) or `"regrown"` (the Silence) |

The moments of the scenario (§5) the scene has:

| moment | state over the default |
|---|---|
| П.1–П.2 Lina waters the stump, the Traveller with his empty flask (the default) | `wet: true` once she pours; «Дай попить»: `mug: true` (her mug upside down on the stump) and her own mug gone — `lina_wear: {"parts": []}`; the father's voice from `home_front#door`, the door slams: `home_door` 120 → 180 |
| 1.7 the father loads charcoal, Lina at the well | `cart: true`, `father_here: true` (by the cart), Lina at the well (`lina_a: 3.6`, `lina_d: 11.2`) |
| 2.1 dawn at the empty house at the edge | `time: "chapter2"`, `dawn: 1`, `coal: 0`, `lina_here: false`, `traveller_wear` — the cast's `traveller_26`, `jan_here: true` (the cast's `jan_26`) at `edge_front#door` |
| 2.2 the empty village, the fresh mound | `time: "chapter2"`, `dawn` 0…0.3, the Traveller by `grave#mound` |
| chapter 3 (the Slope line: the Traveller lives in the village) | `time: "chapter3"`, `edge_house: "lived"`, `smoke_edge: 1`, `traveller_wear` — `traveller_40`, `lina_wear` — `lina_37` |
| Э.1 the lime planted on the square | `time: "epilogue"`, `stump: "dug"` → `"planted"` (МИ5: the player presses `stump#spot`), `lina_wear` — `lina_47`, `traveller_wear` — `traveller_50`, `neighbour_a`, `neighbour_b` (his spade), `child_a`, `child_b` here; the Silence line: `edge: "regrown"` |
| Э.3 «Рассказ»: the Traveller on the fountain's rim | `time: "epilogue"`, `edge: "regrown"`, `fountain: 1`, `rod: true`, the Traveller seated at `fountain#rim` (a seated motion: stage 5) |

The people's looks by age are the cast's (`scene.kit.cast.characters.<name>` as `<id>_wear`): `lina` 17 / `lina_23` /
`lina_37` / `lina_47`; `traveller` 20 / `traveller_26` / `traveller_40` / `traveller_50`; `jan_26`. Their places are
`<id>_a`, `<id>_d` (metres).

## Points (for the game and the camera)

`stump#top`, `stump#spot` (МИ5 «Липа»: where the lime goes), `stump#crown`; `fountain#rim` (a seat), `fountain#spout`,
`fountain#fall`; `well#mouth`, `well#bucket`; `cart#bed`; `grave#mound`, `grave#cross`; `home_front#door` (the
father's voice; `#threshold`), `edge_front#door`, `edge_front#threshold` (2.1); `gardens#lina`; `heap:0#vent`;
`rod#top`; unseen: `square`, `slope_path` (Lina points up the slope), `forest_edge` (the lower edge over the village —
the stumps of the Silence line).

## People (cast: modules/cast)

`lina` (`lina`, the mug in her hand), `traveller` (`traveller`), `father` (`charcoal_burner`), `jan` (`jan_26`),
`neighbour_a` (`neighbour_woman`), `neighbour_b` (`neighbour_man`, the `spade` by `_with`), `child_a`
(`village_girl`), `child_b` (`village_boy`). Added to the cast for this place: those characters, `lina_47`,
`traveller_50`, and the part `spade`. All but Lina and the Traveller are away (`_here: false`) by default.

## Light

A dry afternoon: the sun behind the viewer's left shoulder (`sun`, from [205, 32]) lighting the faces turned to the
viewer, the houses' fronts, the slope; a little haze paling the lowlands. The look `dawn` (2.1): the sun just under
the horizon behind the left (`sun_dawn`, on by `dawn`), rose and gold, a cooler ambient; the sky's dawn layer
(sky.animate.js).

## What is not right yet

- Elzéard's oaks are the same height all over the slope in each time (the painting reads `time`, the copies' scale
  varies them a little): the slope planted over twenty years is not shown younger at its far end.

## Contract for the check

```json
{"beats": {"flask":{"after":[],"tells":["flask:shake"],"seconds":14}, "stump":{"after":["flask"],"tells":["stump:shout"],"seconds":9}, "drink":{"after":["stump"],"tells":["drink:look"],"seconds":20}, "pour":{"after":["stump"],"tells":["pour:end"],"seconds":12}, "point_up":{"after":["drink","pour"],"tells":["point_up:point"],"seconds":10}, "coal_cart":{"after":[],"tells":["coal_cart:lina"],"seconds":16}, "oaks_laugh":{"after":["coal_cart"],"tells":["oaks_laugh:laugh","oaks_laugh:father","oaks_laugh:slope"],"seconds":14}, "pour_again":{"after":["coal_cart"],"tells":["pour_again:pour"],"seconds":14}, "by_door":{"after":[],"tells":["by_door:tie","by_door:pat"],"seconds":14}, "jan_goes":{"after":["by_door"],"tells":["jan_goes:gone"],"seconds":12}, "haze":{"after":["jan_goes"],"tells":["haze:mound","haze:leaves"],"seconds":18}, "alive":{"after":[],"tells":["alive:village","alive:edge","alive:call","alive:spade"],"seconds":24}, "planted":{"after":["alive"],"tells":["planted:look"],"seconds":12}, "story":{"after":[],"tells":["story:sit","story:name"],"seconds":22}, "story_wind":{"after":["story"],"tells":["story_wind:was"],"seconds":10}}}
```
