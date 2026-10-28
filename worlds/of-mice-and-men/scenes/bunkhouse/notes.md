# The Bunkhouse — Friday evening, under the light

Stage 2 of the game (the look), its second scene — С2 of the scenario: the bunkhouse on Friday evening (chapter 2,
2.1–2.3), before Carlson comes in with Candy's dog. The pool's gold gone to lamplight: one tin-shaded light over the
table, the rafters and the corners dark, the blue evening in the small window and the open door, the barn's lit doors
across the yard. Four people as they are in 2.1: George at his solitaire talking to Slim across the table, Lennie
standing by his bunk, Candy on his with the old dog at his feet.

- **Where things are.** Camera `picture`, horizon 0.44. Floor at 0 (`floor`, bare boards), ceiling 3.0 (`ceiling`:
  boards and the rafters' ties, a card on its back edge tilted −90); the back wall at distance 7.6 (`back_wall`: the
  small window x −1.375…−0.625, 1.25–2.0 m up; the door to the yard x 1.3…2.3, 2.1 m; the calendar, Candy's broom),
  side walls at across ±4.2 (`left_wall`: the wash bench, the pegs with a coat, a hat, chaps; `right_wall`: Slim's
  coiled jerkline, a bridle, and `side_window`). Paint: `lib.js` (`boards`, `appleBox`).
- **Along the back**: three bunks (`bunk_top` — planes at 0.5 m, `bunk_front`, `shelf` — the apple boxes nailed over
  them; copies at across −3.0, 0.0, 3.25, tinted apart), `window` (its light `window_dusk`), the `door` standing open
  into the room (hinged on its right at 2.3; its light `door_dusk`, a point of daylight at the opening).
- **The table** (`table` — the top, a plane at 0.76 casting the lamp's shadow, George's solitaire at its left end and
  the evening's cards; `table_front`) and the light over it (`lamp` — the bulb, key `lamp`: the room's light, its point
  `lamp#bulb`; `lamp_shade` — the green tin cone, casting the lamp's shadow up on the ceiling); `box_top`/`box_front` —
  apple boxes on end for seats (George's, Slim's, an empty one); `stove` — the iron stove at the left, its pipe through
  the ceiling (it frames the left edge); `dust` — motes in the lamplight.
- **Outside** (seen through the window and the door): `sky` (the evening after sundown, the evening star), `hills`,
  `yard`, `barn` (its big doors lamplit — the men's evening — and Crooks's small window in the lean-to; its glows
  `barn#door`, `barn#crooks`), `tree` (a eucalyptus, its crown a layer in the wind).
- **People** (modules/cast): `george` on his box at the table's left end (`george_on`), `solitaire`, looking at Slim,
  tired; `slim` on the box at its right end (`slim_on`), `forearms_on_table`, looking at George; `lennie` standing by
  his bunk, `shy` (hands clasped, swaying a little), looking at the dog, smiling; `candy` on the edge of his bunk
  (`candy_on`), `pet_dog` (leaning to his left, his left hand going down to the dog), sad. `dog` — Candy's old
  sheepdog lying at his feet, its flank breathing (layer `flank`), its head the point `dog#head`.
- State: `lamp` 0…1. The showcase: George's eyes go down to his cards, Lennie's to Slim, Candy's up to the two of
  them; back.
- Stage 2 (the look of the world): people sit and stand; only breath, the dust, the dog's flank and the wind in the
  tree move.

`light.bounce` is 0.55: the soft fill in the corners. (It was 0 while the engine's bounce read what stood behind an
opaque card — the barn and the eucalyptus showed through the ceiling; mended in engine 3, `engine3-next`.)

What is not right yet:
- A light edge on the floor in front of the table: the lamp's pool ends along a soft circle (as in other worlds'
  rooms) — the engine's, not looked into.
- Candy has both hands: his right was lost to a machine — the cast cannot leave one hand off a figure of shapes.
- `pet_dog` is Kimodo's "leans to the left and pets an animal on the floor": his hand comes down beside the dog's head
  and goes back, it does not rest on it; asked as "sits on the edge of a bed, stroking a dog" Kimodo stood him up bent
  over, or crouched him — no sitting man stroking a dog lying by him.
- The dog is a flat painting lying side on, not a form: seen from the front it is a pale lump.
- George's face is in profile, under his hat brim, and small at this distance; the faces read better in close shots,
  which stage 2 does not have.
