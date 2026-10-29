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
- Jack in his window shows only his head over the sill (a boy of ten on the room's floor; the sill is 1 m over it):
  it reads close, barely from where we stand.
- The animals in the shoebox are a painting — still; their slowing down and falling asleep (3.6) is stage 5's.

## Stage 5: the street behind the yard (`view`)

Made on the world's ask (game.md, «Asks of the world» 4; `r3/menagerie-pieces-b`). `view` `street` — the script sets
`camera_on` to `street_eye` (unseen, in the yard at distance 1.2, facing the street), so the camera looks back the way
the viewer came: the white `front_fence` along the yard's front (distance −1.6) with its gate open (world across
−0.9…0.4, point `front_fence#gate`); `street` — a plane: our sidewalk, the road with its yellow middle line, the far
sidewalk, the lawns across with Mark's path and the driveways; the `stop` on our sidewalk at across −2.1 (the yellow
sign with a bus on it, no words, a concrete block; point `stop#sign`); `houses_across` at distance −20 — Mark's white
house with blue shutters and a red door (points `houses_across#mark_door`, `#mark_window`) between the neighbours';
`car` — Mark's green hatchback at the far curb (point `car#door`); `bus` — the yellow school bus on our lane, moved
along the street by `bus_a` (40 out of sight on the left as seen from the yard; about −0.6 its door at the stop;
point `bus#door`); `street_trees` (maples, copies), `far_street`. People for it: `mark_grown` (at his car), `boy_a`,
`boy_b` (at the stop), all with `place` keys and not here by default. Cards facing the yard (facing 0) paint their x
to the right of one looking from `street_eye` (world across −x). The sky behind is the yard's own, carried round (its
gradient, no clouds).

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it, after its own `year` and `view`). A piece's start (`from`) is
every value but the game's: `<id>_here`, `<id>_mood`, and the keys the game names — `way` (the yard's choice: english,
chinese, run), `zoo` («Зверинец» 0–2), `father` (all, apple, later), `ending` (tiger, letter, smoke), `laohu_ear`,
`laohu_seam`, `shoebox`, `menu_house`, `tear` (as the square left it), `hanzi_crooked`. Pieces seen toward the street
start with `view` street and `camera_on` street_eye (their cameras in its frame: lib.js `CAMS`). Who is not in a piece
waits behind the house's left corner (or the boys and grown Mark at their own places), unseen whether the game brings
them or not; a piece takes someone off (`<id>_here` false) when they go into the house or a car.

New for them: walk planes on the porch and its steps (`porch` walks; `steps_walk`, unseen, tilted); Laohu (the world
module `paper`: the same as the kitchen's and the room's — in hops, turning at once, in Jack's hands or the crook of his
arm or Mark's hands: `laohu_held`; standing up out of the folded sheet: `laohu_rise`); Mark's knight out of his hands
(`knight`, `knight_at`) and its shining sword (the light `sword`, `knight_lit`); the scraps' five points
(`scraps#s1`…`s5`, `scraps_left` — the mini-game «Клочки»); the plate on the step (`plate_step`); his ingot in the fire
(`ingot`, `ingot_named`); the goats in Jack's window (`window_animals`); the shoebox's animals lying down one by one
(`menagerie_sleep`); over the sheet in Jack's hands (`folds`, carried to `jack#letter`) — the creases trembling
(`tremble`, «Разгладить») and the flaps folding back (`fold`, «Сложить»); her letter close (the insert `letter`,
`letter_close`); the bottom of her sheet close with her 爱 and his (the insert `hanzi`, `hanzi_close`, points
`hanzi#start`, `#end`: `hanzi`, `hanzi_crooked` — «Иероглиф»); the sheet laid on the step (`step_sheet`); something
striped in the smoke (`stripes`); the apple's `trunk` point; `last_box`.

| piece | after | what |
| --- | --- | --- |
| knight | — | (1.2) Mark shows the knight, its sword lit; Laohu comes down the steps and knocks it into the puddle; Mark fishes it out, tears Laohu twice, throws the pieces; the wind; Jack crouches among them; then М3 |
| plate | — | (1.3) Mom down the steps with the plate, by Jack, her hand out; close on her face; then the choice |
| yard_english | plate | she freezes; the plate on the step, her palm open; he puts the pieces in it; he and Mark go out through the gate; she sits alone on the step |
| yard_chinese | plate | he gives her the pieces; Mark mocks and goes; she and Jack on the step, a bun |
| yard_run | plate | Jack runs into the house; Mark goes; she sets the plate on the step |
| fire | — | (1.4, dusk) Mom at the bucket; by `way`: Jack passing / beside her / in his window; close on his ingot in the fire |
| dad_home | fire | Dad comes from the gate, his hand on her back; to Jack (english, chinese) |
| stop | — | (1.7, toward the street) the stop; Jack out through the gate; by `way`; Laohu after him with `zoo` 1–2; the bus |
| mark | — | (3.4, toward the street) grown Mark at his car; by `way` he crosses and pats Jack / looks past and gets in / nods |
| step | — | (3.4) Dad on the top step, the shoebox; Jack with the sheet: «What does she write?»; then the choice |
| father_all | step | his «scar…»; he goes to the apple tree, his palm on the bark |
| father_apple | step | he smiles, looking up at the tree |
| father_later | step | he nods, carries the last box into the house |
| sign | — | (3.5) Jack sits on the lower step to write; the hanzi insert opens; then М8 |
| sunset | sign | the animals lie down one by one; the sheet trembling (close); the rusty bucket; then the choice |
| tiger | sunset | Jack folds the sheet; then «Сложить» on `jack#letter` |
| tiger_up | tiger | Laohu stands on the step, shakes himself, purrs; Jack carries him in the crook of his arm |
| letter_end | sunset | the porch lamp; then «Разгладить» on `jack#letter` |
| letter_flat | letter_end | he lays the sheet on the step; close: her 爱 and his |
| smoke | sunset | Jack at her bucket, the fire lit, the sheet held out; then «Огонь» on `jack#letter` |
| smoke_up | smoke | the sheet burns; the smoke up through the tree, something striped in it |
| dad_end | — | the finales' last shot by `father` × `ending` (scenario §9); Jack's last lines over it |

Not right yet:
- «Потом» × «Дым»: the scenario's Dad opening the kitchen window cannot be staged (the house's front is one painted
  card, no one stands inside the kitchen's window); he stands at the door instead.
- Jack seen in his window (1.4 «Убежал») shows his head over the sill; the piece frames the window close.
- The sheet's folding back («Сложить») is shown as flaps coming over the sheet in his hands (`folds`), then Laohu stands
  up on the step: a part of the cast cannot show a state of its own.

## Contract for the check

```json
{"beats": {"knight":{"after":[],"tells":["knight:show","knight:tear","knight:wind"],"seconds":22}, "plate":{"after":[],"tells":["plate:hand","plate:face"],"seconds":12}, "yard_english":{"after":["plate"],"tells":["yard_english:freeze","yard_english:go"],"seconds":15}, "yard_chinese":{"after":["plate"],"tells":["yard_chinese:give","yard_chinese:go"],"seconds":14}, "yard_run":{"after":["plate"],"tells":["yard_run:door","yard_run:plate"],"seconds":12}, "fire":{"after":[],"tells":["fire:pass","fire:speak","fire:window","fire:ingot"],"seconds":14}, "dad_home":{"after":["fire"],"tells":["dad_home:back","dad_home:talk"],"seconds":14}, "stop":{"after":[],"tells":["stop:mark","stop:laohu","stop:window","stop:bus"],"seconds":22}, "mark":{"after":[],"tells":["mark:say"],"seconds":12}, "step":{"after":[],"tells":["step:ask"],"seconds":6}, "father_all":{"after":["step"],"tells":["father_all:scar","father_all:tree"],"seconds":14}, "father_apple":{"after":["step"],"tells":["father_apple:smile"],"seconds":9}, "father_later":{"after":["step"],"tells":["father_later:nod"],"seconds":10}, "sign":{"after":[],"tells":["sign:pen"],"seconds":6}, "sunset":{"after":["sign"],"tells":["sunset:goat","sunset:fold"],"seconds":16}, "tiger":{"after":["sunset"],"tells":["tiger:fold"],"seconds":5}, "tiger_up":{"after":["tiger"],"tells":["tiger_up:up","tiger_up:hum"],"seconds":15}, "letter_end":{"after":["sunset"],"tells":["letter_end:lamp"],"seconds":5}, "letter_flat":{"after":["letter_end"],"tells":["letter_flat:flat"],"seconds":10}, "smoke":{"after":["sunset"],"tells":["smoke:hold"],"seconds":8}, "smoke_up":{"after":["smoke"],"tells":["smoke_up:say","smoke_up:stripes"],"seconds":13}, "dad_end":{"after":[],"tells":["dad_end:say","dad_end:last"],"seconds":14}}}
```
