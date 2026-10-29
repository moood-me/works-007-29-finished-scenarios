# The Ward

Stage 2 of the game (the look): the hospital ward of chapter 2 («Хороший день», 2.1–2.2) — the same three people eleven
years on, in another light: an autumn dusk at the window and the bedside lamp. Mom, on a good day, sits on the edge of
her bed and looks at the suit Jack holds up for her («Костюм? Покажи»); Dad by the window with his phrasebook. No one
moves but a look; no camera moves.

- **Where things are.** The viewer stands at the room's open side (camera `picture`). Floor at 0 (`floor`, grey-green
  linoleum), ceiling 2.7; the back wall at distance 4.4 (`back_wall`: the window opening x −2.35…−0.85, 0.85–2.25 m
  up; the service rail and the call bell's cord over the bed), side walls at across ±2.85 (`left_wall`: the clock at
  twenty to seven, the washbasin; `right_wall`: the door to the corridor, its pane `door_glass` glowing cool). Paint:
  `lib.js` (`wall`).
- **Out of the window** (the ward is on the third floor: everything outside stands 9 m below the floor): the maple in
  the hospital garden turning (`tree`, its crown a layer in the wind), its leaves falling past the glass (`leaves`,
  particles), the town (`ground` with its street lamps; `town` — blocks and the new office tower, forty floors, the
  city Jack is going to; `town_windows` — the same blocks' lit windows, glowing; lib's `town` lays the blocks for
  both), the autumn dusk (`sky`). The dusk comes in at the window (light `dusk`, daylight; `afterglow` far and low).
- **Along the back**: the `radiator` under the window, a paper crane folded from the hospital menu on the sill
  (`crane`, still — «Зверинец» 2); the bed along the wall (`bed` — its near side, `bed_top` — the sheet,
  `headboard`, `footboard` with her chart, `pillow` and the `blanket` thrown back to the foot — forms, `lump`s); the
  drip stand behind it (`drip`, the bag empty today); the bedside table (`nightstand`, `nightstand_top`) with the lamp
  (`lamp`, key `lamp`: the room's warm light, its bulb `lamp#bulb`), the oranges Dad brought and a glass (`oranges`),
  and Laohu (`laohu`): folded again by her, a little crooked — one fold too many at the tail's root —, a fresh strip of
  tape over the old one, asleep (shut eyes, no layers: paper that does not stir). `laohu_ear` (false): the torn ear
  gone, its stub taped (the game's «Ухо» mark). Its head is its point.
- **People** (modules/cast, style `paper`): Mom (`mom_ill`: thin, an ochre kerchief, the hospital gown, her blue-grey
  cardigan) sitting on the bed's edge (`mom_on`, motion `sitting_on_bed`), her eyes on the bag; Jack at twenty-one
  (`jack_grown`: the green sweater again) by the bed's foot facing us, holding up the bag with his first suit (part
  `suit_bag`, point `jack#bag`; motion `showing_suit`), looking at her; Dad at fifty-six (`dad_grey`: grey hair, a brown
  cardigan) on the chair by the window (`dad_on`, motion `reading_seated`), reading the phrasebook (part `phrasebook`,
  point `dad#book`). The showcase: she looks up from the bag at her son and Dad up from his book at her; then she turns
  to the window, Jack's eyes go to the tiger, Dad back to his page.

What is not right yet:
- Mom does not sit up in bed with her legs under the blanket, as she would in 2.2: Kimodo would not make a person
  sitting with the legs stretched out (four asks: it gives knees drawn up, cross-legged, lying, or leaning back on the
  hands). She sits on the bed's edge instead — the good day.
- Her kerchief is a cap of cloth over the head with a knot at the nape (a hat of the cast): it reads as a kerchief only
  close; across the room it reads as a hood.
- The suit bag is a rigid shape held out from the hand, not cloth (it does not swing).
- A light edge on the floor in front of the bed (the bedside lamp's pool cut off along a straight line) — the engine's;
  not yet looked into.

## Stage 4

- `crane` (boolean, true by default): the menu crane on the sill is there only on «Зверинец» 2 — a game sets it false
  on 0–1.

## Stage 5: the corridor, the things, the pieces

Branch `r3/menagerie-pieces-b`; the game's contract — `docs/new-games/bumazhny-zverinec/game.md`, «Stage 5 — pieces».

### The corridor (`view`)

`view` — `room` (the ward, the scene's picture) or `corridor`: the script sets `camera_on` to `corridor_eye` (an unseen
anchor out in the hospital corridor at across 4.35, distance −1.6, looking down it) and `corridor_lights` 1. The
corridor runs beside the ward, beyond its right wall: across 2.95…5.8, distance −3…18 (`corridor_floor` — polished
linoleum, a faint mirror; `corridor_ceiling` with its fluorescent panels and the lights `corridor_1…4`, on by
`corridor_lights`; `corridor_left` — the ward's side: its door at distance 1.85 (point `corridor_left#door`), the
hand-rail, an extinguisher, three chairs, a notice board; `corridor_right` — other wards' doors, a window onto the dusk
town, a print; `corridor_end` — the doors to the lifts). `payphone` on the far wall at distance 5.4 (point
`payphone#receiver`; `phone_off` — its receiver off the hook, in a hand as the cast's part `receiver`). A piece seen in
the corridor names `view: 'corridor'` and `camera_on: 'corridor_eye'` in its start (lib.js `CORRIDOR`), one in the ward
`view: 'room'`, `camera_on: null` (`ROOM`): the cameras of both work in their own frame.

### Keys for the things

| key | what it shows |
| --- | --- |
| `laohu_here` | Laohu on the bedside table; false — taken home («Остался» → 2.4) |
| `menu_house` | the paper house folded from the hospital menu on the bedside table (`menu_house`, «Уехал», 2.4) |
| `menu` | the hospital menu on the bed's sheet (`menu_sheet`): `none` / `flat` / `half` (folded) |
| `suit_on_chair` | Jack's suit in its bag over the chair's back (`suit_chair`, point `suit_chair#bag`) |
| `lamp` | as before: 1 the evening, 0.6 darkening, 0.3 the night |

People have `place` keys now (`<id>_a`, `<id>_d`); `nurse` (the cast's) is in the corridor (here false unless the game
says). Mom in bed: `mom_on: [0.55, 3.98, 0.54]`, `mom_do: "lie_bed"`, `mom_turn: 90` — on her back, her head on the
pillow, her right hand on the near side (M5's `mom#hand_r`). Sitting down and getting up: `sit_down`, `rise`.
**Cameras**: the ward's own (lib.js `SH`: an eye and the point it looks at — Mom from her right or left, the two on the
bed's edge, the bedside table, Mom in bed from above, the chair, the window; in the corridor from `corridor_eye`): the
operator, in a room this small, framed Mom's back and went behind people. Dad's oranges: the cast's part `oranges`.

### Pieces

The module `beats` (lib.js `film`; script.js plays it after its own `view`). Each piece's start (`from`) is the
evening's layout (lib.js `EVENING`: Mom on the bed's edge, Dad on his chair with his book, Jack at the bed's foot with
the bag held up) with its own changes; the game's are `here`, the moods, and the keys of the things above (`crane`,
`laohu_ear`, `laohu_here`, `menu_house`, `menu`; `suit_on_chair` the game's except in `stay`, where the piece hangs the
bag).

| piece | after | what it shows |
| --- | --- | --- |
| door | — | (2.1, the corridor) Dad with his oranges and Jack with the bag by the ward's door; the nurse comes down the corridor and passes them, out behind us; medium on Jack, on Dad; both look at the door |
| ward_in | — | (2.2) in from the door: Dad puts the oranges down and sits in his chair with his book; Jack to the bed's foot; medium on her |
| once | ward_in | Jack's finger on the tiger's crooked fold, close; her hand lifts his fingers; «Suit?» — she touches it |
| talk_grandma / talk_forty / talk_hand | once | close on her: she looks at Laohu, silent, Dad looks up / she laughs / Jack sits by her, holds her hand, she reaches for the tiger and cannot |
| coat | the three talks | the lamp lower; Dad gets up and goes to the door, turns there |
| stay | coat | Jack hangs the bag on the chair (`suit_on_chair`), sits by her, her hand; Dad goes; she turns to the window |
| go | coat | Jack squeezes her hand, goes to the door with his bag, looks back; she looks at the window |
| night | — | («Остался», 3 a.m., lamp 0.3) Mom in bed wakes, looks at the bag; Jack gets up, straightens it, sits; the tiger; her face; she falls asleep |
| phone | — | (the corridor, morning) Jack at the payphone, his back to the wall, head bowed; Dad comes from the lifts with oranges; he hangs up |
| menu | — | («Уехал», night) Mom at the window folding the menu (a white sheet in her hands); she looks at the door at Dad's voice |
| friday | — | (Friday night, lamp 0.3) Dad asleep on the chair, Mom asleep in bed; Jack in with his bag («Уехал») or by her already (`suit_on_chair`); he sits on the bed's edge by her hand; close on the nightstand (the paper house, or the tiger's empty place). Then M5 |
| silence | friday | the lamp lower still |

Changes against the contract: none in names and tells. `friday:house` frames `menu_house` («Уехал») or the bedside
table's top where the tiger stood («Остался»).

### What is not right yet

- Dad has no coat to put on in `coat`: his look has no coat, he only gets up and goes.
- In `talk_hand` Jack lays the bag down where no element shows it (his look loses the part as he sits).
- `doze_chair` is Dad asleep leaning back with his arms crossed, not with his head dropped forward (two takes).
- (Not an engine gap.) `lie_bed` lies on a bed of its own, ~0.47 m up, touching no floor, so on a `walk` plane its
  height is added to the plane's. Mom in bed is `_on` `[x, distance, e]` — the documented way: `e` is the hip seat
  height (hips ≈ e + 0.14·h/1.76), 0.54 lays her on the mattress. Never `lie_bed` and a `walk` plane together.

## Contract for the check

```json
{"beats": {"door":{"after":[],"tells":["door:dad","door:nurse","door:ticket","door:book","door:tiger"],"seconds":24}, "ward_in":{"after":[],"tells":["ward_in:greet"],"seconds":9}, "once":{"after":["ward_in"],"tells":["once:touch","once:suit"],"seconds":14}, "talk_grandma":{"after":["once"],"tells":["talk_grandma:say","talk_grandma:end"],"seconds":12}, "talk_forty":{"after":["once"],"tells":["talk_forty:say","talk_forty:end"],"seconds":10}, "talk_hand":{"after":["once"],"tells":["talk_hand:say","talk_hand:end"],"seconds":14}, "coat":{"after":["talk_grandma","talk_forty","talk_hand"],"tells":["coat:dad","coat:mom"],"seconds":9}, "stay":{"after":["coat"],"tells":["stay:say","stay:turn"],"seconds":14}, "go":{"after":["coat"],"tells":["go:hand","go:door"],"seconds":10}, "night":{"after":[],"tells":["night:bag","night:tiger","night:talk","night:last"],"seconds":26}, "phone":{"after":[],"tells":["phone:dad","phone:pocket"],"seconds":14}, "menu":{"after":[],"tells":["menu:door"],"seconds":8}, "friday":{"after":[],"tells":["friday:back","friday:house"],"seconds":12}, "silence":{"after":["friday"],"tells":["silence:dark"],"seconds":6}}}
```
