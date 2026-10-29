# The Kitchen

Stage 2 of the game (the look): the kitchen on a spring evening — the place that sets the world's mood (the lamp over
the oilcloth, wrapping paper, the paper animals alive, the dusk in the window) and its three people standing as they
stand in the story. No one moves but a look; no camera moves.

- **Where things are.** The viewer stands at the room's open side (camera `picture`). Floor at 0 (linoleum, `floor`),
  ceiling 2.6; the back wall at distance 4.4 (`back_wall`, the window opening x −0.95…0.35, 1.0–2.1 m up), side walls
  at across ±2.85 (`left_wall` with the calendar and the telephone; `right_wall` with the shut door to the hall).
  Wallpaper and tiles: `lib.js`.
- **Along the back**: the fridge (left corner), the counter and its cupboards (`counter` — a plane at 0.9 m with the
  sink under the window; `cabinets`), the stove and its kettle (`stove`), the shelf over it with a sleeping newspaper
  crane (`shelf`).
- **The menagerie**: two paper goats on the sill (`goats`; their heads layers that tick now and then), a kraft-paper
  buffalo in a flower pot (`buffalo`, breathing), a shark circling in the sink (`shark`, its fin a layer moved to and
  fro), and on the table Laohu (`laohu`: layers `tiger`, breathing, and `tail`; its head its point — `jack_look`).
- **The table** (`table` — the top, a plane at 0.76 casting the lamp's shadow; `table_front`), the lamp over it
  (`lamp`, key `lamp`: the room's warm light, its bulb `lamp#bulb`).
- **Out of the window**: the apple tree in blossom (`apple`, 9 m; the blossom a layer in the wind; the tin bucket at
  its foot), the white fence and gate (12 m), the street, Mark's house across it with a lit window and the school bus
  stop (`street`, 26 m), the yard's grass (`yard`), the spring dusk (`sky`). The dusk comes in at the window (light
  `dusk`, daylight; the afterglow low behind the house, `afterglow`, lights the yard and what stands in it).
- **People** (modules/cast, style `paper`): Mom behind the table, folding a yellow square (part `sheet`), her eyes on
  Jack; Jack standing at the table's left end over Laohu, his right hand on its edge (`jack_reach`); Dad in from the
  hall, hands in his pockets, watching her. The showcase: Jack looks up at her and she at the tiger; back.

## Stage 4: a year on, and «the whole house» (keys)

The evening above stays the scene's own state; chapter 3 is keys over it:

| key | what it shows |
|---|---|
| `day` 0/1 | by day (chapter 3): `sky` a clear spring day, the windows across the street dark, the light's look `day` (the afterglow out), the `sun` coming in; set at once (the sky is painted by it) |
| `packed` | the kitchen packed, the house sold (3.1): boxes on the floor (`boxes`, three stacks — copies), an open box on the table being taped (`table_box`, point `table_box#box`), the oilcloth bare but for the tape, the shelf bare, Dad's cap gone from the hook; the goats, the buffalo, Laohu and the shark not here |
| `menagerie` | «весь дом» («Зверинец» 2): `"sill"` — 3.1, three cranes and two frogs on the bare sill, the only things not packed; `"awake"` — 3.2, the cranes up on the curtains and their rod (each a layer that hops now and then), frogs on the table and the floor (`frogs`, copies, breathing), the shark back in the sink; `"none"` |
| `suit_bag` | Jack's suit in its bag on the hook by the door, the tag still on it («Остался», 3.1; point `right_wall#suit`) |

- **People**: every person has `place` keys now (`<id>_a`, `<id>_d`). A year on Mom is not here (`mom_here: false`),
  Dad is `dad_grey` without the book (`dad_wear: {...dad_grey, parts: []}`), Jack `jack_grown` without the bag. 3.2:
  Dad with a paper frog on his palm — the cast's part `frog` (`dad_with: ["frog"]`, point `dad#frog`) with
  `offer_hand`.
- **The showcase** goes on after the evening: a year on (packed, by day, the cranes on the sill, the suit on its hook)
  → the house wakes (Dad alone with a frog on his palm, looking up at the cranes).
- 3.2's «Dad in the doorway» is in Jack's room (С3) in the scenario; here the kitchen shows the same awakening for a game
  that wants to see it downstairs.

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it, after dressing the people by `year` and `young` — lib.js
`dress`). A piece's start (`from`) is every value but the game's: `<id>_here`, `<id>_mood`, and the keys the game
names — `laohu_ear`, `laohu_seam` (the marks), `suit_bag` («Остался», 3.1), `menagerie` («Зверинец» 2: `sill`). Mom's
not in chapter 3: the game does not bring her (the script does not hide her). Dad leaves in `asked` (the piece walks
him out of the door and takes him off, `dad_here` false).

New in the room for them: chairs at the table's ends (`chairs`, two copies from the side) and Mom's behind it
(`chair_back`) — the seats at Jack (−1.0, 2.2, facing right), Dad (0.72, 2.2, facing left), Mom (−0.1, 2.9); the robot
(`robot`), the deer on the counter (`deer`, modules/paper), Jack's yellow square (`ingot`, the mini-game «Сгиб»), the
table's keys (`wrapping`, `ingots`, `scraps`, `tape`), and Laohu — the world module `paper` (the same Laohu in the
kitchen, the room and the yard): where `laohu_a/d/e` put him, in someone's hands (`laohu_held`), turning at once
(`laohu_dir`), breathing by `laohu_breath`, shaking (`laohu_shake`), torn and taped (`laohu`, `tape_laid`). He walks
in hops (held, a quick snap to the next spot): paper, a little angular.

| piece | after | what |
| --- | --- | --- |
| robot | — | (prologue; `young`) Jack, five, crying over the broken robot, Dad squatting by him; Mom picks up the red sheet and folds without looking — the camera on her hands |
| palms | robot | she comes round the table and puts the tiger into his palms (`laohu` paper, `laohu_breath` 0); then М1 on `jack#hands` |
| menagerie | palms | Laohu jumps onto the paper; his name; Dad gets up; Jack reaches for a fold, she takes his fingers; the song — he walks the table hop by hop; the goats, the deer, the buffalo, the shark (cuts); Dad asleep in his chair, Laohu growls |
| ingots | — | (1.1, morning) Mom and Jack at the table folding; her words; the camera down onto his square for М2 (`ingot#start` → `#end`, `ingot_fold`) |
| ingot_name | ingots | he writes his name on it (`ingot_named`); she laughs; Laohu bats at it; Mark calls from the street |
| tape | — | (1.5) the scraps on the oilcloth; she lays them out by the old lines (`laohu` torn); Jack sits and holds the halves; then М4 on `laohu` (`tape_laid`) |
| breathe | tape | she breathes on him; he stands whole (`laohu` taped) and limps along the table |
| palm | breathe | her words; she writes 爱 on his palm; her face |
| question | palm | Dad in the doorway taking off his jacket; then the choice |
| asked | question | her answer, looking at Dad; his line; he goes out (the hammer is the game's sound); Jack's question, her «later» |
| silent | question | he strokes Laohu, she hums over her folding; Dad comes and sits at the table; Laohu limps to him |
| boxes | — | (3.1, a year on, packed, by day) Dad taping the box; with `suit_bag` he takes the suit off its hook and gives it to Jack; the camera to the sill (with `menagerie` sill, the cranes and frogs) |
| her_hand | — | (3.2) Jack walks through the kitchen with the sheet; Dad looks up from the box |

Not right yet:
- Dad's «armchair» of П.3 is his chair at the table's end (the kitchen has no armchair).
- The game's sounds (the hammer from the porch, the tape) are the game's; the pieces leave time for them.

## Contract for the check

```json
{"beats": {"robot":{"after":[],"tells":["robot:dad","robot:fold"],"seconds":10}, "palms":{"after":["robot"],"tells":["palms:give"],"seconds":8}, "menagerie":{"after":["palms"],"tells":["menagerie:name","menagerie:dad","menagerie:fold","menagerie:song","menagerie:snore"],"seconds":33}, "ingots":{"after":[],"tells":["ingots:say"],"seconds":11}, "ingot_name":{"after":["ingots"],"tells":["ingot_name:write","ingot_name:call"],"seconds":12}, "tape":{"after":[],"tells":["tape:now"],"seconds":9}, "breathe":{"after":["tape"],"tells":["breathe:up"],"seconds":8}, "palm":{"after":["breathe"],"tells":["palm:say","palm:sign"],"seconds":14}, "question":{"after":["palm"],"tells":["question:door"],"seconds":5}, "asked":{"after":["question"],"tells":["asked:look","asked:dad","asked:hammer"],"seconds":18}, "silent":{"after":["question"],"tells":["silent:dad"],"seconds":14}, "boxes":{"after":[],"tells":["boxes:dad","boxes:suit","boxes:sill"],"seconds":22}, "her_hand":{"after":[],"tells":["her_hand:dad"],"seconds":9}}}
```
