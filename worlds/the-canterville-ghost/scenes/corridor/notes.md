# The Corridor

Stage 4 of the game (all the places): С2 «Коридор» of the scenario (§4; chapters 1.1–1.2, 2.4–2.5, 4С.2–4С.4, the
final «Миндаль»'s first night) — the long upper corridor at night, its doors and its people standing. People stand,
sit and breathe; no motion of people, no camera moves, no mini-games. Stage 5 gives it its pieces (below: «Pieces»). The same look as the library, the tapestry
chamber and the garden: flat painted oak and plaster, storybook figures, warm candles against cold moonlight.

## Where things are

Camera `picture`, horizon 0.42. The corridor is 4 m wide (x −2…2), 3.6 m high, from 0.7 m to its far end at 14 m.

- **Left wall** (`left_wall`, x = distance − 7.4): three tall windows (1.6–2.8, 3.6–4.8, 11.4–12.6 m away; their
  leading `window`, three copies), the **parents' door** (5.6–6.6 m; leaf `door_parents`), the **corner** — the wide
  square opening into the side passage to the other bedrooms (8.6–10.2 m; what is seen through it is `passage`).
- **Right wall** (`right_wall`, x = 7.4 − distance): **the armour** on its stand (`armour`, 3.8 m, point `armour#helm`)
  and the **little table** beside it (`table`, 4.6 m, point `table#top`), **Virginia's door** (5.8–6.8 m; leaf
  `door_virginia`), the **twins' door** (9.8–10.8 m; leaf `door_twins`), three ancestors' portraits.
- **Far end** (`back_wall`, 14 m): the shut door of the Tapestry Chamber (`back_wall#door`) under the Canterville arms.
- Floor (`floor`, oak boards; it reaches just past the walls under the rooms — no farther, so the windows show only
  the night), the long Turkey `runner`, the beamed `ceiling`, six candle `sconce`s (copies).
- Behind the doors: each room's far wall as the door shows it (`room_parents`, `room_virginia`, `room_twins`), on the
  same floor. Outside the middle window stands the wall of the parents' wing (`wing`): without it the window looked
  straight into their room and its open door leaf.
- Props by keys: `bottle` (`table` draws it, `oil` the smashed one on the floor), `spook` (the twins' turnip ghost:
  `spook_bits` on the floor while "making", `spook` standing at the corner, its own candle light, points
  `spook#turnip`, `spook#placard` — the placard's four lines are `tr`), `armchair` (`armchair` behind, `armchair_front`
  before whoever sits, and the lit floor candlestick `chair_candle`).

## Light

The moon from behind on the left (`moon`, bearing 260, 26° up) comes in only through the three windows (`through`):
its patches lie across the floor and the right wall at 2.2–3.4, 4.2–5.4 and 12–13 m — Sir Simon's default place is in
the middle one; the armour stands in the dark between (in a patch it outshone him). Ambient 0.5, cool. Warm lights:
the candle in Mr Otis's or Virginia's hand (`otis_candle`, `virginia_candle`, `at` `<id>#flame` of the cast's `candle_l`),
the sconces (`sconces`), the turnip, the chair's candle. Sir Simon's own light `ghost` stands 0.6 m before him:
`place` across `simon_a`, distance `ghost_d` — **keep `ghost_d` = `simon_d` − 0.6** whenever he is moved (the engine has
no light that follows a person at an offset before them; at his chest it would be inside him — cast.md).
The look `evening` (1) turns the windows to dusk and the moon's light to a quarter.

## Keys (scene.json `states` says each)

`evening`, `sconces`, `door_parents` (90 shut … 0 open), `door_virginia`, `door_twins` (270 shut … 360 open; ~290 a
crack), `bottle` (none/table/smashed), `spook` (none/making/standing), `armchair`, `ghost_light` (1 full, ~0.4 the
faint last night, 0 away), `ghost_d`, and every person's `<id>_a`/`<id>_d` place.

## People (cast: modules/cast)

`simon`, `otis` (its look `otis_gown` — the dressing gown — by default; `otis_wear` the cast's `otis` object for the
evening), `virginia` (look `virginia_night`; `virginia_wear` the cast's `virginia` for the evening), `washington`,
`twin_star`, `twin_stripes` (the canonical cast; here only from the evening of 2.4, `_here` false by default).

The default state is **1.2** (one at night): Sir Simon in the middle (0.2 / 4.6, turn 195, angry, looking ahead — at
the viewer), Mr Otis in his doorway (−1.6 / 6.1, turn 135, `offer`, the bottle and a candle, looking at him, smiling),
Virginia at her door ajar (1.8 / 6.35, turn 225, `hold_candle` with `candle_l`, looking at him). Each stands so the
face turns toward the viewer: whoever looks at someone further away than themselves shows the back of the head.

Spots for the other moments (a / d, turn), checked on renders where noted:

| moment | who and where |
|---|---|
| 1.2 the bottle left | `bottle` "table", `otis_with` [] (he puts it down: stage 5); then "smashed" |
| 1.2 the pillow | `door_twins` ~320 (the twins unseen behind it) |
| 2.4 evening (rendered) | `evening` 1, `sconces` 1, `spook` "making", Simon and Mr Otis `_here` false, `ghost_light` 0; twin_star −1.5 / 7.2 (140), Washington −1.25 / 8.9 (165), twin_stripes −0.45 / 8.3 (200), all `laugh`/`smile`; Virginia (frock) level with them across the corridor — 0.9 / 7.6, turn 250 — so both sides show their faces (with her further on, 9.2, they turned their backs to the viewer; with her nearer, she did) |
| 2.5 midnight | `spook` "standing"; Sir Simon out of the corner −1.7 / 9.4, turn 170, looking at `spook#turnip` (the ghost is nearer, so he faces the viewer); the brothers behind the twins' door (`door_twins` ~300) |
| 4С.2 evening | `armchair` true, Mr Otis in his coat at her door 1.2 / 6.0, Virginia in the doorway 1.8 / 6.3 |
| 4С.3 night (rendered) | Mr Otis (coat) asleep: `otis_on` [1.4, 7.32, 0.45], `otis_do` "doze", `otis_with` ["book"], `otis_mood` "eyes_closed", turn 180; Sir Simon at the far end 0 / 12.4 (`ghost_d` 11.8), then at her door; Virginia at her open door (`door_virginia` 330) 1.7 / 6.2 |
| 4С.4 «Мимо кресла» | she passes the chair on the corridor side (x ≈ 0.6) toward the far door |

## Measured

`measure_scene` (run 98, commit 544c912, Tesla T4): GPU ~4.0 ms a frame, 266 pages a view against 1420, no soft run,
no late cuts. Fails: "allocated a frame" (~29–32 KB — the engine's modules; the scene's own code, the cast's drawing
included, ~4 KB), a GC pause of 3.7 ms on the desktop profile, and frames p95 16.8 ms against 16.7 (the 60 Hz pace).
The same as the chamber's measure: the engine's, not the scene's.

## What is not right yet

- People who face each other along the corridor show the viewer one side's backs (4С.3: Virginia looks down the
  corridor at him). Close shots are stage 5's.
- Mr Otis's `doze` leans back with the arms folded and the head tipped back (Kimodo gave that for "asleep in a chair");
  the book lies on his knees by `book`.
- The armour is a flat painting seen from before; its shoulders read a little round.
- The corner is seen nearly edge-on from the start: a dark gap and a strip of the passage's wall.
- The light under Virginia's door (1.1) is her candle in the doorway, not a line of light under a shut door.

## Pieces (stage 5)

The scene's pieces for the game (modules/beats; `lib.js` `film`, `script.js`; the contract: the game's
`docs/new-games/kentervilskoe-prividenie/game.md` «Stage 5 — pieces»). The game opens the scene on a piece (`beat`),
sets who is `here`, their moods and the variant keys (`plays`); each piece's `from` sets everything else it begins at
(the corridor's keys, the places, the camera) and is cut to unless the piece follows one of its `after`. Each tells its
moments and `beat:<name>` at its end, and ends in a living pose. The script keeps Sir Simon's light before him
(`ghost_d` = `simon_d` − 0.6) wherever he walks.

| piece | shows |
| --- | --- |
| `chains` | 1.1: he walks from the far end toward her shut door, his light coming (the camera on her door) |
| `oil` | 1.2: Mr Otis opens his door, offers the oil (medium on him), sets the bottle on the little table, goes back in; she is behind her door at its crack (`door_virginia` as М2 left it) |
| `smash` | he snatches the bottle and smashes it (`smash`), howls; a pillow flies past his head from the twins' door; he goes along the right wall to her crack and looks into it — cut to the crack seen from the corridor's middle (his face and hers) |
| `wish_stop` / `pass_by` / `creak_look` | after «Good night, sir»: he stops, his light sinks, sad, goes into the right wall; or he just goes; or (М2 creaked) he stares into the crack, burning, then goes |
| `pacing` | 1.6: in the dark he walks up and down before her shut door (two clinks), then into the wall |
| `peas_night` | 1.6: the empty corridor; the twins' door opens a crack (the cry), the groan, shut |
| `turnip` | 2.4 evening: the boys stand the turnip ghost up at the corner (medium on its placard), she walks to her place across them |
| `candle_walk` | 2.5: she walks with her candle from her door toward the far door as М4 moves `virginia_d`; the piece ends when she reaches it |
| `route` | 2.5 midnight: he walks up to the turnip ghost, looks it over, runs his hand along the placard, snorts (the twins' door a crack), walks on through the far door |
| `fright` | 2.5 midnight: he comes round the corner onto it, starts back (`recoil`), runs (`run`) through the far door; the twins' door opens on their laughter |
| `defend` | 2.4: she stands before the boys and holds out her hand (`offer`), then goes into her room |
| `gallop` | 2.5 morning: the twins run down the corridor to the far door and stand laughing there |
| `word` / `chair_sit` | 4С.2: the armchair at her door; Mr Otis holds out his hand (М9); then sits down in it (`faint_sit`) with the book (`read_seated`) |
| `farewell` / `farewell_go` | 4С.3: Mr Otis asleep in the chair; Sir Simon (by `plays`: his full array and light, or his garden look and a faint light) walks from the far end to her door; she opens it; he bows (`bow_deep`); then walks back down the corridor (seen over her shoulder from her doorway) and waits near the far end |
| `pass_chair` / `stay_door` / `wake_papa` | 4С.4 after М8 / М8в / М8б: she walks on to him and he turns to her; or he walks on and fades and she shuts her door; or Mr Otis wakes, gets up (`stand_up`), faces him, he bows or nods (`plays`) and fades, and Papa takes her hand |
| `woken` | 4С.5: the silence wakes him (`stand_up`), her room empty; he takes the candle off the stand and goes to the far door |
| `chair_night` / `no_chair` | the epilogue: he reads in the chair by her door, she goes in and shuts it; or no chair, nobody — she opens her door and looks out |

Added for them: the point `door_virginia#handle` (the ring: М2), the twins' `pillow` (an element moved by
`pillow_a`/`_d`/`_e`/`_spin`, shown by `pillow`), `stand_candle` (the candle on the stand by the armchair, taken in
`woken`), `plays` (the game's), `beat`/`beat_next`, the right-hand wall of her room (`room_virginia_side`: the shots
at the crack see into it at a slant), the turnip ghost's box widened to what it paints.

Shots: the corridor is built to be seen forward — behind the start there is no end wall, so no camera looks back
toward the start; a face turned down the corridor is shown by turning the person toward the viewer (he stands just
beyond her door's free edge and looks back into the crack). Where the operator, coming from the start, would frame a
back or come too near, a piece sets its own camera (`CAM`: an eye and a point, camera_x/_z/_yaw).

### Not right yet (stage 5)

- `read_seated` holds the open book up before the chest, while the cast's `book` lies shut on the knees: his hands are
  empty over it.
- `gallop` is a morning in the evening's light (`evening` 1 — dusk at the windows, as the game's `CORRIDOR.morning`
  has it; the contract's row says `evening` 0, the moonlit night): the corridor has no daylight look.
- `candle_walk` waits for М4 to bring `virginia_d` to 13.2 m; М4 moves only `virginia_d`, so she walks along the right
  side (across 1.8) and steps to the far door at the end.
- In `wake_papa` she reaches for his hand from where М8б left her (the shoulder mini-game sets only her reach).
- `woken` keeps Mr Otis in his coat (he fell asleep in it in the chair, `farewell`); the tapestry's `wait_wall` row
  asks for `otis_gown` the same night.

## Contract for the check

```json
{"beats": {"chains":{"after":[],"tells":["chains:near"],"seconds":8}, "oil":{"after":[],"tells":["oil:speak","oil:set","oil:shut"],"seconds":14}, "smash":{"after":["oil"],"tells":["smash:howl","smash:pillow","smash:crack"],"seconds":12}, "wish_stop":{"after":["smash"],"tells":["wish_stop:look","wish_stop:gone"],"seconds":8}, "pass_by":{"after":["smash"],"tells":["pass_by:gone"],"seconds":6}, "creak_look":{"after":["smash"],"tells":["creak_look:stare","creak_look:gone"],"seconds":7}, "pacing":{"after":[],"tells":["pacing:clink","pacing:gone"],"seconds":10}, "peas_night":{"after":[],"tells":["peas_night:cry","peas_night:groan"],"seconds":6}, "turnip":{"after":[],"tells":["turnip:placard","turnip:stop"],"seconds":12}, "candle_walk":{"after":[],"tells":["candle_walk:door"],"seconds":8}, "route":{"after":[],"tells":["route:stop","route:snort","route:gone"],"seconds":14}, "fright":{"after":[],"tells":["fright:shriek","fright:gone","fright:laugh"],"seconds":10}, "defend":{"after":[],"tells":["defend:say","defend:go"],"seconds":10}, "gallop":{"after":[],"tells":["gallop:run"],"seconds":6}, "word":{"after":[],"tells":["word:hand"],"seconds":4}, "chair_sit":{"after":["word"],"tells":["chair_sit:sat"],"seconds":6}, "farewell":{"after":[],"tells":["farewell:far","farewell:door","farewell:bow"],"seconds":16}, "farewell_go":{"after":["farewell"],"tells":["farewell_go:end"],"seconds":6}, "pass_chair":{"after":["farewell_go"],"tells":["pass_chair:met"],"seconds":8}, "stay_door":{"after":["farewell_go"],"tells":["stay_door:stop","stay_door:gone","stay_door:shut"],"seconds":10}, "wake_papa":{"after":["farewell_go"],"tells":["wake_papa:up","wake_papa:bow","wake_papa:gone","wake_papa:hand"],"seconds":14}, "woken":{"after":[],"tells":["woken:up","woken:gone"],"seconds":12}, "chair_night":{"after":[],"tells":["chair_night:sat"],"seconds":8}, "no_chair":{"after":[],"tells":["no_chair:end"],"seconds":6}, "trap_her":{"after":[],"tells":[],"seconds":1}}}
```
