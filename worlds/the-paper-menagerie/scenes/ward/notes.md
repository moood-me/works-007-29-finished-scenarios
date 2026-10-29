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

## Contract for the check

```json
{"beats": {"door":{"after":[],"tells":["door:dad","door:nurse","door:ticket","door:book","door:tiger"],"seconds":20}, "ward_in":{"after":[],"tells":["ward_in:greet"],"seconds":9}, "once":{"after":["ward_in"],"tells":["once:touch","once:suit"],"seconds":14}, "talk_grandma":{"after":["once"],"tells":["talk_grandma:say","talk_grandma:end"],"seconds":12}, "talk_forty":{"after":["once"],"tells":["talk_forty:say","talk_forty:end"],"seconds":10}, "talk_hand":{"after":["once"],"tells":["talk_hand:say","talk_hand:end"],"seconds":14}, "coat":{"after":["talk_grandma","talk_forty","talk_hand"],"tells":["coat:dad","coat:mom"],"seconds":9}, "stay":{"after":["coat"],"tells":["stay:say","stay:turn"],"seconds":14}, "go":{"after":["coat"],"tells":["go:hand","go:door"],"seconds":10}, "night":{"after":[],"tells":["night:bag","night:tiger","night:talk","night:last"],"seconds":26}, "phone":{"after":[],"tells":["phone:dad","phone:pocket"],"seconds":14}, "menu":{"after":[],"tells":["menu:door"],"seconds":8}, "friday":{"after":[],"tells":["friday:back","friday:house"],"seconds":12}, "silence":{"after":["friday"],"tells":["silence:dark"],"seconds":6}}}
```
