# The Corridor

Stage 4 of the game (all the places): С2 «Коридор» of the scenario (§4; chapters 1.1–1.2, 2.4–2.5, 4С.2–4С.4, the
final «Миндаль»'s first night) — the long upper corridor at night, its doors and its people standing. People stand,
sit and breathe; no motion of people, no camera moves, no mini-games. The same look as the library, the tapestry
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

## What is not right yet

- People who face each other along the corridor show the viewer one side's backs (4С.3: Virginia looks down the
  corridor at him). Close shots are stage 5's.
- Mr Otis's `doze` leans back with the arms folded and the head tipped back (Kimodo gave that for "asleep in a chair");
  the book lies on his knees by `book`.
- The armour is a flat painting seen from before; its shoulders read a little round.
- The corner is seen nearly edge-on from the start: a dark gap and a strip of the passage's wall.
- The light under Virginia's door (1.1) is her candle in the doorway, not a line of light under a shut door.
