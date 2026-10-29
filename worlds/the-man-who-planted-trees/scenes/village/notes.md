# The Village — notes

Stage 4 of the game (all scenes): М1 «Деревня» of the scenario — the last village at the plateau's edge: the square
with the lime's stump, the dry well, the fountain, the charcoal heaps, the slope rising behind it where Elzéard's
oaks grow over the years. One place in four times (`time`). Stage 5 gave it its pieces (below: «Stage 5: the
pieces») and its people's ages by `time`.

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
| П.1–П.2 Lina waters the stump, the Traveller with his empty flask (the default) | `wet: true` once she pours; «Дай попить»: `mug: true` (her mug upside down on the stump) and her own mug gone (the script takes it off her); the father's voice from `home_front#door`, the door slams: `home_door` 120 → 180 |
| 1.7 the father loads charcoal, Lina at the well | `cart: true`, `father_here: true` (by the cart), Lina at the well (`lina_a: 3.6`, `lina_d: 11.2`) |
| 2.1 dawn at the empty house at the edge | `time: "chapter2"`, `dawn: 1`, `coal: 0`, `lina_here: false`, `jan_here: true` (the cast's `jan_26`) at `edge_front#door` |
| 2.2 the empty village, the fresh mound | `time: "chapter2"`, `dawn` 0…0.3, the Traveller by `grave#mound` |
| chapter 3 (the Slope line: the Traveller lives in the village) | `time: "chapter3"`, `edge_house: "lived"`, `smoke_edge: 1` |
| Э.1 the lime planted on the square | `time: "epilogue"`, `stump: "dug"` → `"planted"` (МИ5: the player presses `traveller#spade`), `neighbour_a`, `neighbour_b` (his spade), `child_a`, `child_b` here; the Silence line: `edge: "regrown"` |
| Э.3 «Рассказ»: the Traveller on the fountain's rim | `time: "epilogue"`, `edge: "regrown"`, `fountain: 1`, `rod: true`, the Traveller seated at `fountain#rim` (a seated motion: stage 5) |

The people's ages are the scene's own (script.js, `lib.AGES`): as `time` changes (and as the scene opens) it dresses
them in the cast's look of that year (`<id>_wear` — the look's object): Lina 17 / `lina_23` / `lina_37` / `lina_47`,
the Traveller 20 / `traveller_26` / `traveller_40` / `traveller_50`, Jan `jan_26` / `jan_40` (chapter 3 and on); and
in the prologue Lina without her mug while it stands on the stump (`mug`). A game sets `time`, never a look. Their
places are `<id>_a`, `<id>_d` (metres).

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it; the game sets `beat`). Each piece's `from` sets all it begins at
but the game's (`<id>_here`, `<id>_mood`, `time` and the year's keys — the smoke, the coal, the fountain, `edge` —,
the looks); it tells `<piece>:<moment>` where the game says its lines and leaves the line's time after it.

| piece | after | what (the place's time, set by the game) |
| --- | --- | --- |
| flask | — | prologue: the Traveller, full shot, shakes his flask at his ear (`flask_hand`) — empty; walks into the square, Lina at the stump |
| stump | flask | the shout from behind the father's wall (`stump:shout`), the door slams; Lina raises her mug over the stump — the pose for «Дай попить» |
| drink | stump | she looks at the stump, at him (`drink:look`); `offer`, he `drink`s, she takes the mug back and sets it upside down on the stump (`mug`) |
| pour | stump | she `pour`s her mug out on the stump (water running: `pour`; `wet`); `pour:end`; then looks at his flask |
| point_up | drink, pour | she turns and points up the slope (her arm reaching toward it) — `point_up:point`; turns back to him |
| coal_cart | — | 1.7: he comes down the path between the back houses; the father `load_sack`s on his cart; Lina at the well turns to him — the pose for «Что делает пастух?» |
| oaks_laugh | coal_cart | «Дубы»: Lina's `laugh_short` (`:laugh`), the whole square for the father's line (`:father`), she looks up at the slope (`:slope`) |
| pour_again | coal_cart | «Овец»: she goes to the stump and pours her mug out on it |
| by_door | — | chapter2, dawn: the Traveller sits up on the empty house's threshold, Jan by the wall `tie_bag` (`:tie`); Jan stands, his hand on his breast pocket (`:pat`) |
| jan_goes | by_door | Jan goes off down the road and is gone (`jan_here` false) — new |
| haze | jan_goes | he gets up, crosses the square to the mound (`:mound`, seen from beside the father's house over it), looks up at the slope's haze (`:leaves`) |
| alive | — | epilogue: the children come to the fountain (`:village`), the eye up to the forest's edge (`:edge`), Lina at the pit `beckon`s him (`:call`), the neighbour gives him the spade (`:spade`) — the pose for МИ5 |
| planted | alive | after МИ5 — new: he digs (`spade`), the young lime stands (`stump` planted, `wet`); Lina presses the earth with her foot; her close, looking up at its leaves |
| story | — | «Рассказ»: he comes with the rod, leans it on the trough (`rod`), sits on the rim (`sit_stone`), opens the notebook (`:sit`); the insert `pages`: «It was.» page after page, then a clean page where the name is written (`:name`) |
| story_wind | story | new: the wind turns the pages back to «It was.» (`:was`); the insert closes, the camera draws back to the square |

What the scene got for them: the keys `beat`, `beat_next`, `pour` (water from `lina#mug`: the particles `pouring`),
`notebook_open` / `notebook_page` / `notebook_name` / `notebook_turn` (the insert `pages`, its point `pages#name`); the
unseen points `pair` and `pair_well` (the two-shots: between Lina and the Traveller at the stump, at the well); the
cast's `flask_hand` (the flask in his hand, `#flask`) and the motions `shake_flask`, `pour`, `drink`, `spade`,
`load_sack`, `tie_bag`, `beckon` (and `carry_pail_walk`, for the other scenes; the years' `offer`, `sit_stone`,
`laugh_short` reused). Where the operator went wrong (round to the wall of the empty house; into Lina's side at the pit;
to the knees of the man sitting on the rim), the scene's own camera is set near instead (`camera_x`, `camera_z`,
`camera_yaw`: `AT_DOOR`, `AT_MOUND`, `AT_PIT`, `AT_RIM` in lib.js).

For the game: the МИ5 mark is `traveller#spade` (the pose `alive` ends in); after МИ5 it plays `planted` (not the
keys). In «Рассказ» it plays `story`, says the narrator's line, then `story_wind`. In 2.1 it plays `by_door`, the lines,
then `jan_goes` (Jan goes himself). The old `lina_wear {parts: []}` is the scene's now (`mug`).

## Points (for the game and the camera)

`stump#top`, `stump#spot` (where the lime goes), `stump#crown`; `pages#name` (the insert: the name); `fountain#rim` (a seat), `fountain#spout`,
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
- The father loads his cart with empty hands (`load_sack`: he lifts and heaves, no sack in them; the cart shows its
  sacks by `cart`).
- `spade` is Kimodo's bent digging with a shovel: three takes of "drives a spade in with one foot and leans on it" came
  out as a lunge, a stoop with hands hanging, and this one — the nearest honest.
- `drink` lifts the cup high, the head tipped back (all three takes did).
- Jan's hand on his pocket is a reach to his own chest (`jan#chest`): the takes of "pats his pocket" beat the chest
  with both hands.
- Lina looking up at the slope (1.7, `oaks_laugh:slope`; `point_up`) is seen from behind: the slope is behind the
  square from the viewer, so her face turns away from it; the shot is wide enough to show what she looks at.
- The notebook's insert is a drawn spread (paper, ruled lines, the words in an italic serif); the wind's leaf is a flat
  flip about the spine.

## Contract for the check

```json
{"beats": {"flask":{"after":[],"tells":["flask:shake"],"seconds":14}, "stump":{"after":["flask"],"tells":["stump:shout"],"seconds":9}, "drink":{"after":["stump"],"tells":["drink:look"],"seconds":20}, "pour":{"after":["stump"],"tells":["pour:end"],"seconds":12}, "point_up":{"after":["drink","pour"],"tells":["point_up:point"],"seconds":10}, "coal_cart":{"after":[],"tells":["coal_cart:lina"],"seconds":16}, "oaks_laugh":{"after":["coal_cart"],"tells":["oaks_laugh:laugh","oaks_laugh:father","oaks_laugh:slope"],"seconds":14}, "pour_again":{"after":["coal_cart"],"tells":["pour_again:pour"],"seconds":14}, "by_door":{"after":[],"tells":["by_door:tie","by_door:pat"],"seconds":14}, "jan_goes":{"after":["by_door"],"tells":["jan_goes:gone"],"seconds":12}, "haze":{"after":["jan_goes"],"tells":["haze:mound","haze:leaves"],"seconds":18}, "alive":{"after":[],"tells":["alive:village","alive:edge","alive:call","alive:spade"],"seconds":24}, "planted":{"after":["alive"],"tells":["planted:look"],"seconds":12}, "story":{"after":[],"tells":["story:sit","story:name"],"seconds":22}, "story_wind":{"after":["story"],"tells":["story_wind:was"],"seconds":10}}}
```
