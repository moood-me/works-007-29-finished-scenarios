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
