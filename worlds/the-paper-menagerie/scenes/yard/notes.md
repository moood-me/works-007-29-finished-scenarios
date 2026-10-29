# The Yard

Stage 2 of the game (the look): the yard of chapter 1 («Мусор», 1.2–1.3, «Двор») on a spring Sunday morning, Qingming —
the world in daylight after the two evening scenes, and Mark, the third of the important people. Mark has torn Laohu
and thrown the pieces down; Jack crouches over them on the grass; Mom has come down the steps with a plate of buns and
holds out her hand («Дай. Я починю»). No one moves but a look; no camera moves.

- **Where things are.** The viewer stands in the front yard (camera `picture`), the house facing us at distance 8.5
  (`house`: butter-yellow clapboard over a concrete foundation 0.6 m high; the green front door at x −1.0 behind the
  porch; the kitchen window at x 2.4 with the kitchen's curtains and the two paper goats on its sill; Jack's window at
  x −4.4 with a paper crane hanging in it; the porch lamp, off), its roof's near slope (`roof`, a tilted plane) and the
  `chimney`. The porch: its floor (`porch`, 0.6 m), its posts, rails and lattice (`porch_front`), three steps down
  toward us (`treads` and `risers` — copies; `stringer`). The onion bed by the porch (`onion_bed`, `onions` — three
  copies of a row, their leaves a layer in the wind). The side fence on the left (`fence`, facing 90), the house next
  door beyond it (`neighbour`), the neighbours' trees over the roof (`trees`, a layer in the wind), gardens far off
  (`far`, so the land does not end), the morning `sky` (its clouds a drifting layer).
- **In the yard**: the grass and the trodden path from the gate behind us to the steps (`ground`), last night's
  `puddle` at their foot (a mirror, a little ripple — where the knight fell); the torn pieces of Laohu on the grass
  round Jack (`scraps`: red wrapping paper with gold stars, creased; two of them layers that lift in the breeze); the
  apple tree in blossom on the right, the tin bucket waiting at its foot for the evening (`apple`, the blossom a layer
  in the wind; points `crown`, `bucket`), its petals drifting down (`petals`, particles).
- **Light**: the morning sun low from behind the viewer on the left (`sun`), the sky's blue in the shade.
- **People** (modules/cast, style `paper`): Mark (`mark`, new: ten, sandy-red hair, a red windbreaker, jeans, white
  sneakers) on the path, the wet knight held to his chest (part `knight`; motion `holding_toy`), glaring at Jack; Jack
  (`jack`) crouched on the grass with the pieces in his hands (part `scraps`, given by `jack_with`; motion
  `crouch_scraps`); Mom (`mom`, the plate only: `mom_wear` `{parts: ["plate"]}` — her look's own sheet is not in her
  hands here) standing by him, the plate of buns in her left hand (part `plate`), her right held down to him
  (`mom_reach`; motion `offer_hand`). The showcase: Mark turns his eyes on her; Jack looks up at his mother and Mark
  back to him, waiting; Jack looks at Mark.

What is not right yet:
- Mom stands bent over Jack instead of crouching beside him, as 1.3 says («присаживается рядом»): Kimodo gave no
  crouch with one hand held out and the other holding a plate (three asks — the head bowed to the knees, the plate's
  hand thrown up to the head, a standing stoop instead of a kneel). The standing stoop reads; she is just taller than
  the moment wants.
- Jack crouches with his hands low between his knees, the pieces held there, not up before his face: a crouch with
  the hands at the chest came out with the arms stretched to the ground (on a child's bones the arms read as poles)
  or sitting on the heels.
- The buns' steam is left out: smoke particles at the plate's point (`mom#plate`, a part's point) showed nothing, at
  her hand barely a wisp in the daylight.
- Mark's hair, like Jack's, reads as a cap at this distance (the style's `short` hair).
- The porch has no roof over it, only its beam: a plane seen from below shows its back, so the shallow roof is not
  drawn and casts no shade on the door.

## Stage 4: the dusk, the fire, a year on (keys)

The scenario's other moments in the yard, as keys over the morning (which stays the scene's own state as it was):

| key | what it shows |
|---|---|
| `dusk` 0…1 | the spring dusk (1.4; a year on, 3.4–3.6, the endings): the sky's layer `dusk` over the morning (animate), the light's look `dusk` (pink and lavender, readable — ambient 0.6), the sun out, the `afterglow` low behind the viewer on the left |
| `porch_lamp` 0…1 | the lamp over the front door (`house#lamp`'s glow; the light `porch_lamp`) |
| `house_lights` 0…1 | the kitchen window lit warm (the house's layer `kitchen_lit`, the light `kitchen`) and the lamp in Jack's room (`room`) |
| `fire` 0…1 | the paper burning in Mom's bucket (1.4, the ending «Дым»): `flames`, `embers`, `smoke` at `apple#fire`, the light `fire` |
| `scraps` | the torn pieces on the grass (1.2–1.3); false once he has them |
| `sold` | a year on, the house sold: no curtains, nothing on the sills, Jack's room bare, the bucket rusty, the last box on the porch (`last_box`), the «Sold» sign on the lawn (`sign`); no torn pieces |
| `shoebox` 0/1/2 | the shoebox of animals on the top step (3.4–3.6): 1 — the attic's, dusty (goats, deer, buffalo); 2 — full, the lid off (cranes, frogs, the shark too) |
| `menu_house` | the paper house from the hospital menu on top of the shoebox («Уехал») |

- **Jack's window is open now**: the house paints its glass out (`destination-out`) and his room stands behind it
  (`jack_room`, a card 0.6 m behind the wall; `room_floor` an unseen `walk` plane at 0.6 m). Someone stood there
  (`jack_a: -4.4, jack_d: 8.85`) is seen in the window from the chest up — 1.4 «Убежал»: Jack in his window, Mom
  looking up at it (`house#jack_window`).
- **People**: every person has `place` keys now (`<id>_a`, `<id>_d`), and `dad` is here (`dad_here` false by default).
  A year on: `jack_wear` the cast's `jack_grown` without the suit bag, `dad_wear` `dad_grey` without the book; the
  letter in Jack's hands is the cast's part `letter` (`jack_with: ["letter"]`, point `jack#letter`). Dad sits on the
  top step with `dad_on: [-1.25, 6.86, 0.42]` and `sitting_on_bed`.
- **The showcase** goes on after the morning: the dusk with Mom at the fire and Jack beside her → Jack in his window
  → Dad comes, his hand on her back → a year on, Dad on the step by the shoebox, Jack with the letter → «Дым»: Jack at
  the fire, Dad's hand on his back.

Not right yet:
- The bucket (and so the fire) stands at across 3.8, 5.4 m — at the 4:3 safe frame's right edge (x ≈ 0.70 of the
  frame's height off the middle; the safe frame ends at 0.67): wide screens see it, a 4:3 screen cuts it. The tree was
  approved where it is; the ending «Дым» (its mini-game over the fire) should frame it with the camera (stage 5).
- 3.4's grown Mark and his car across the street are behind the viewer (the yard looks at the house); the gate and the
  car at it too. A game shows them by the camera turned, or does without.
- The animals in the shoebox are a painting — still; their slowing down and falling asleep (3.6) is stage 5's.
