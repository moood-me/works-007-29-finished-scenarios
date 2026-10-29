# Inside the Shepherd's House — notes

The scenario's М2 from within (§4: «каменный, чистый; лампа, стол, ведро, собака у двери»): the one room of Elzéard's
stone house, for the steps played at the table — П.4, П.5, 1.5, 2.7, 3.4. The same world and style as the house from
outside (`shepherds-house`): the cast's flat figures, plain dusty colours, the scene's own light. Lamp-lit and warm;
the faces read.

- Camera `picture`, horizon 0.45: a room seen from its open side, 6 m wide (−3…3), from 0.6 m to its back wall at
  5.4 m, 2.5 m high. Walls of whitewashed stone (the lib's `lime`), a low ceiling of smoke-dark boards on three beams
  (`ceiling`, a card laid face down), a floor of pale flags with a rag rug under the table.
- **Back wall**: the window (across 0.8…1.7, 1.05…2.0 m up), its casement open (`window`, point `pane`), its right
  reveal and sill; beyond it the plateau (`ground_out`), the empty slope across the stream rising to the bare ridge
  (`slope`, 300 m off, point `ridge`) and the sky (`sky`: dusk, or night with stars and the moon — a layer its
  animate keeps where the moon stands in the world, `[64, 320, 15]`, so the window shows it over the slope). The inner
  `shutter` stands open at the window's left, his shaving mirror on it (`shutter#mirror`). A shelf with a jug and
  bowls.
- **Left wall**: the door (2.2…3.0 m away) open on the plateau (`left_wall#door`); his hat on a peg, the rod leaning
  by the door (indoors he carries nothing). The `dog` lies inside by the door (`dog`). `step_gifts` — the bread and
  socks on the threshold (`bread_step`).
- **Right wall**: the hearth, the pot on its chain, firewood; the `fire` in it (as high as `hearth`, the light
  `hearth_fire`).
- **The table** (across −0.85…0.85, 2.9…3.7 m, top 0.76 m): `table_top` (casts the lamp's shadow), `table_front`,
  `table_back`; `table_things` — the soup (`soup`), the empty sack once poured, the Traveller's `notebook` (shut /
  open), the city's `letter`, each a layer shown by its key; `acorns` — the heap, the cracked ones aside, the ten heaps
  of ten, each a layer shown and scaled by `acorns`, `tens`, `counted` (nothing is painted again as they are counted).
  The `lamp` on it (its light `lamp`, by `lamp`). The `stool`s: Elzéard's behind the table (seat [0.15, 4.05], top
  0.46 m, facing the room), the Traveller's at its left end ([−1.25, 3.35], turned 115: three quarters to the viewer).
  The `pail` of water on the floor between them (its acorns while `acorns` is pail; `pail_push` slides it to the
  Traveller). The full `sack` on the floor by Elzéard's stool (`sack`). `table_mid` — an unseen point between the two,
  for the two-shot.
- **The table close** (`table_close`, an insert by `close`): the planks under the lamp, the acorns big. With `acorns`
  heap — МИ1: the heap with ten cracked ones among it (`table_close#cracked_k`), each sliding to a little pile on the
  right as its bit of `cracked_out` is set; with `acorns` counting — the guiding `count`: nine heaps of ten and the
  last ten in a line (`table_close#acorn_k`, `#next`), each sliding into the tenth heap as `counted` reaches it. Every
  acorn that moves is a layer moved by animate. The game may use it, or mark the people's hands (as it does now:
  `elzeard#hands`, `traveller#hands`).
- Light: ambient 0.62 warm; the look `night` (bluer) by `time`; the lamp (1.8, reach 6) lights both faces from the
  front-right; the hearth from the right.

## The moments (key `moment`; script.js)

Laid out at once when `moment` changes, and as the scene opens only if `moment` differs from `staged`. **A game sets
`moment` first, then any detail.** Indoors every look is the cast's of that year with its hat off and nothing carried
(`<id>_wear`: the look's own object, `hat: 'none'`, rod, bag and flask left off).

| moment | scenario | the room | who |
|---|---|---|---|
| `arrival` | П.4–П.5 | dusk, the lamp, the soup, the sack on the floor, the dog | Elzéard (55) and the Traveller (20) seated, eating |
| `button` | 1.5 | dusk, the lamp, the acorns in the pail | Elzéard (55) shaving at the window; the Traveller (20) seated |
| `night` | 2.7 | night, the moon in the window, the acorns being counted, the notebook open, the letter | Elzéard (61) counting, the Traveller (26) |
| `evening` | 3.4 | dusk, the lamp, the acorns being counted, the notebook shut; no dog | Elzéard (75) counting slowly, the Traveller (40) |

## Pieces (modules/beats; lib.js `film`)

| piece | after | what |
|---|---|---|
| table | — | П.4: he stands at the table with the sack and pours it out (`pour_sack`) — `table:pour`; sits down; both look at the heap (then МИ1) |
| hundred | table | after МИ1: he counts them out in tens (`count_table`) — `hundred:end` («Сто») — and sweeps them into the pail (`sweep_pail`) |
| out_to_dog | hundred | П.5 asked: he gets up (`rise`), walks round to the door — `out_to_dog:door` — and out (`elzeard_here` false); the Traveller alone at the lamp |
| silence | hundred | П.5 silent: he pushes the pail over to the Traveller (`push_pail`); both look at the lamp — `silence:sit` |
| button | — | 1.5: he shaves at the window (`shave`), sits down by the lamp and sews (`sew`, the cloth in his hand), medium — `button:sew` |
| hundred_night | — | 2.7: night; he counts (`count_table`), the camera comes to the table; nine tens out — `hundred_night:count` (then the guiding `count`, then Ш1) |
| stay_laugh | hundred_night | Ш1 stay: the acorns into the pail — `stay_laugh:pail`; the Traveller laughs (`laugh_seated`) — `stay_laugh:laugh`; shuts the notebook — `stay_laugh:shut` |
| go_write | hundred_night | Ш1 go: the acorns into the pail — `go_write:pail`; the Traveller writes by the lamp (`write_table`), medium — `go_write:write` |
| hundred_slow | — | 3.4: the old man at the door (looks down at the bread when `bread_step`), comes in — `hundred_slow:in`; sits down — `hundred_slow:sat` |
| year_word | hundred_slow | 3.4 Road: the Traveller writes the word in his notebook — `year_word:write` |
| count_slow | hundred_slow, year_word | 3.4: he counts, slower (`count_slow`); nine tens out — `count_slow:count` (then the guiding `count`) |
| slow_name | count_slow | 3.4 Name: close on him — `slow_name:good` («Сто». «Хорошо»); he looks at the window — `slow_name:window` («За хребтом склон голый») |
| slow_silence | count_slow | 3.4 Silence: close — `slow_silence:sam` («Сам»); he laughs once — `slow_silence:laugh`; two-shot — `slow_silence:told` (the Traveller's line); the acorns into the pail, close — `slow_silence:plant` («Посажу») |

The close faces of §4 that fall here: Elzéard on «Хорошо» and on «Сам» / «Посажу» (3.4) — `slow_name`,
`slow_silence`. («Зря», 2.5, is on the forest edge.) The game's lines are said at the moments; every piece ends in a
living pose (the people seated and breathing, or in a loop).

Motions of this scene (cast.data.json, made for it, three takes at most): `sit_table`, `count_table`, `count_slow`,
`eat_soup`, `sew`, `shave`, `write_table`, `laugh_seated`, `push_pail`, `sweep_pail`, `pour_sack`, `sit_down`,
`rise`. Cast parts: `sack` (in both hands), `cloth` (in the left hand).

## Not right yet

- Kimodo did not make writing at a table nor pouring a sack out well (three takes each): `write_table` moves the
  right hand at chest height over the table, `pour_sack` holds the sack before him and tips it forward at the end.
- The seated motions sit on a chair of Kimodo's height; the people sit on the stools by `<id>_on` (hips at 0.46 m).

## Contract for the check

```json
{"beats":{"table":{"after":[],"tells":["table:pour"],"seconds":10},"hundred":{"after":["table"],"tells":["hundred:end"],"seconds":12},"out_to_dog":{"after":["hundred"],"tells":["out_to_dog:door"],"seconds":10},"silence":{"after":["hundred"],"tells":["silence:sit"],"seconds":8},"button":{"after":[],"tells":["button:sew"],"seconds":16},"hundred_night":{"after":[],"tells":["hundred_night:count"],"seconds":10},"stay_laugh":{"after":["hundred_night"],"tells":["stay_laugh:pail","stay_laugh:laugh","stay_laugh:shut"],"seconds":12},"go_write":{"after":["hundred_night"],"tells":["go_write:pail","go_write:write"],"seconds":11},"hundred_slow":{"after":[],"tells":["hundred_slow:in","hundred_slow:sat"],"seconds":18},"year_word":{"after":["hundred_slow"],"tells":["year_word:write"],"seconds":6},"count_slow":{"after":["hundred_slow","year_word"],"tells":["count_slow:count"],"seconds":10},"slow_name":{"after":["count_slow"],"tells":["slow_name:good","slow_name:window"],"seconds":10},"slow_silence":{"after":["count_slow"],"tells":["slow_silence:sam","slow_silence:laugh","slow_silence:told","slow_silence:plant"],"seconds":16}},"points":["elzeard#hands","traveller#hands","elzeard#cloth","table_things#heap","table_things#bowl","table_things#notebook","table_things#letter","pail#pail","lamp#flame","window#pane","shutter#mirror","left_wall#door","step_gifts#loaf","dog#head","slope#ridge","sky#moon","table_close#cracked_0","table_close#cracked_1","table_close#cracked_2","table_close#cracked_3","table_close#cracked_4","table_close#cracked_5","table_close#cracked_6","table_close#cracked_7","table_close#cracked_8","table_close#cracked_9","table_close#acorn_0","table_close#acorn_1","table_close#acorn_2","table_close#acorn_3","table_close#acorn_4","table_close#acorn_5","table_close#acorn_6","table_close#acorn_7","table_close#acorn_8","table_close#acorn_9","table_close#next","table_close#heap"],"keys":["moment","beat","beat_next","time","lamp","hearth","bread_step","acorns","tens","counted","cracked_out","close","notebook","letter","dog"]}
```
