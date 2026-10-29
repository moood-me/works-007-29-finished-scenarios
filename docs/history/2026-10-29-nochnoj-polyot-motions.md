# 2026-10-29 — «Ночной полёт»: stage 5's motions

The 47 new motions of the contract (`docs/new-games/nochnoj-polyot/game.md`, branch `r3/night-flight-s5`, «Stage 5 —
pieces», «New motions») made by Kimodo on the local studio, each looked at (`look_at_motion`, front and side, eight
moments, the default body) and put into `worlds/night-flight/modules/cast.data.json` with `put_motion` (branch
`r3/night-flight-motions`, one commit a motion). Names exactly as the contract's. What each one is, as seen:
`modules/cast.md`, «Stage 5's motions».

How: no studio calls before 07:10 UTC (the shared GitHub limit); then one `make_motion` at a time, the look right
after it; loops asked as a chain of the same prompt (so the action goes on the whole clip). A prompt that gave the
wrong thing was reworded in the data's words (BONES-SEED `timelines.jsonl`, searched locally: it has levers, hats,
phones, coughs, heavy objects by one hand, chairs; it has no clothing — no helmets, gloves, coats, pockets as
garments — no writing, no paper tearing, no nodding) and made again, up to three takes. Where none of three was
right the nearest is kept and said so (gaps, below).

## Kept (take, prompt(s), seconds, key)

| name | take | prompt(s) | s | key |
| --- | --- | --- | --- | --- |
| `pass_back` | 1 | A seated person reaches back over their right shoulder with the right hand, passing a small piece of paper to someone sitting behind them | 3 | `d7dfd4c21124` |
| `pass_forward` | 2 | A seated person leans forward and reaches out the right hand at chest height, giving a small, light object to someone in front of them | 3 | `001053a4b0e7` |
| `write_knee` | 3 | A seated person writes on a notepad held on their lap with the right hand, looking down at it | 2+2 | `98ebb1b7abaa` |
| `tap_key` | 2 | A person sitting upright on a chair is tapping quickly with the right hand on the table in front of them at waist height | 2+2 | `08fd771d675a` |
| `side_ache` | 2 | A standing person suddenly presses the right hand against the left side of the stomach, bends a little, then lowers the hand and stands upright | 3 | `d9db4e1e9752` |
| `switch_up` | 1 | A person standing upright grabs a lever at mid-height in front of them with the right hand and slowly pushes it up | 4 | `331e729d4de5` |
| `switch_down` | 1 | A person standing upright grabs a lever at mid-height in front of them with the right hand and slowly pulls it down | 5 | `c55f1168d369` |
| `helmet_off` | 3 | A person standing upright lifts their hat off their head with the right hand and lowers it to the side | 3 | `c0b06e04784c` |
| `helmet_on` | 3 | A person standing upright raises the right hand holding a hat and places it on their head / A standing person touches under their chin with both hands | 2.5+1.5 | `a902447bd4aa` |
| `show_hands` | 2 | An excited person tells a story, raising both hands high above the head with the palms flat and moving them from side to side | 2+2 | `b66c1e4bf2db` |
| `gloves_pockets` | 1 | A standing person pulls at the fingers of the left hand with the right hand, then at the fingers of the right hand with the left hand / A standing person puts both hands deep into their pockets | 2.5+1.5 | `3b11ffba5d05` |
| `laugh` | 1 | A standing person is laughing, the shoulders shaking, leaning back a little | 1.5+1.5 | `f55c9637283d` |
| `shoulder_touch` | 1 | A person reaches forward and lays the right hand on the shoulder of someone standing in front of them for a moment, then lowers it | 3 | `ff439a4dbf85` |
| `sign_paper` | 1 | A standing person holds a flat object in the left hand at chest height and writes on it with the right hand | 4 | `eb7bc6dd20d1` |
| `tear_paper` | 2 | A person holding a sheet of paper in both hands at chest height rips it apart, pulling the hands away from each other, twice | 3 | `e64b1abdd0e7` |
| `put_pocket` | 2 | A person folds a small, light object with both hands at chest height / A person puts a small object into their upper chest pocket with the right hand | 1.5+1.5 | `260506dfacda` |
| `engine_work` | 1 | A standing person is working on a machine at chest height in front of them with both hands at a steady pace | 2+2 | `acdfac05eb87` |
| `cap_on` | 2 | A person standing with the arms at the sides raises both hands and puts a cap on their head, then lowers the hands | 3 | `1159e5452dcb` |
| `lift_box` | 3 | A person bends down, grabs a big, heavy object from the ground with the right hand and stands up, holding it down at their right side | 3 | `a9ed81c0633f` |
| `walk_carry` | 1 | A person walks forward slowly, carrying a big, heavy object by its handle in the right hand, the shoulders bent | 2+2 | `0b6917fd3db3` |
| `give_box` | 3 | A person is holding a big, heavy object with both hands at chest height / A person extends both arms forward at chest height, handing a big, heavy object to someone | 1.5+1.5 | `5764b51924d3` |
| `palm_out` | 1 | A standing person holds the right hand out in front of them, palm up, waiting for something to be put in it | 2+2 | `74f255cbfb74` |
| `pick_chocks` | 1 | A person bends down and picks up two objects from the ground, one in each hand, and stands up | 4 | `d271bcba7cf7` |
| `wipe_hands` | 1 | A standing person is wiping their hands with a cloth at waist height | 2+2 | `fadcffd8fff8` |
| `load_sack` | 3 | A person bends down and picks up a big, heavy object from the ground with both hands / A person lifts a big, heavy object onto their right shoulder and holds it there | 2+2 | `26f9f8342b6e` |
| `phone_listen` | 2 | A person stands talking on the phone, holding the phone to their left ear with the left hand | 2+2 | `6ebfac16cd8e` |
| `hand_receiver` | 1 | A person holds a phone out with the left hand to someone standing beside them | 3 | `e213f278b634` |
| `pull_tape` | 2 | A standing person pulls a rope toward them hand over hand at waist height, looking down at it | 2+2 | `296e4c724342` |
| `tear_tape` | 2 | A person tears a small piece of paper with both hands at chest height / A person holds out a small object with the right hand to someone in front of them | 1.5+1.5 | `daf7978f149e` |
| `hold_tape` | 1 | A standing person holds a small piece of paper close to the chest with both hands, the head bowed | 2+2 | `0a3630b2c6dc` |
| `sit_down` | 2 | A person standing upright sits down on a chair behind them | 3 | `9d32d6cde426` |
| `stand_up` | 2 | A person sitting on a chair stands up | 3 | `d303415671e9` |
| `doze_drop` | 2 | A tired person sitting on a chair hunches forward and dozes off, the head dropping onto the chest, then wakes up and lifts the head | 3+3 | `c66043b0e8b8` |
| `shoulders_shake` | 1 | A sad person standing with the head bowed is crying silently, the shoulders shaking | 2+2 | `005ba64194a4` |
| `hand_hover` | 2 | A standing person slowly reaches the right hand forward at chest height, holds it still in the air for a moment, and lowers it back to the side | 3 | `95b2cc0f803a` |
| `coat_off` | 3 | A person pulls their jacket off the shoulders with both hands and slides the arms out behind their back | 4 | `7c592c7f8bbd` |
| `raise_hand` | 1 | A person raises the right arm high above the head and holds it there | 3 | `22066b0ed21a` |
| `pull_chocks` | 1 | A crouching person pulls two objects away from in front of them toward their body with both hands | 3 | `0b9a53634f73` |
| `look_under` | 1 | A person bends forward to look under something at chest height in front of them | 3 | `29334de8ec47` |
| `hand_on_side` | 3 | A person stands with the right arm stretched out to the side, the palm resting on a wall at shoulder height | 2+2 | `23dbe57c80f0` |
| `write_desk` | 2 | A seated person leans forward over a table, the left forearm resting on the table, moving the right hand on the table in front of them at a steady pace | 2.5+2.5 | `58d4c2b97ac7` |
| `lay_paper` | 1 | A person bends forward a little and puts a small, light object down on the table in front of them with the right hand | 3 | `338844fcc9e9` |
| `gloves_on` | 1 | A standing person pulls a glove onto the left hand with the right hand / A standing person pulls a glove onto the right hand with the left hand | 2+2 | `d81816c5a0d7` |
| `fold_tape` | 1 | A person folds a small piece of paper with both hands and tucks it into the left hand | 3 | `189aed0648d2` |
| `nod` | 1 | A standing person nods their head once, slowly | 2 | `ac4c95ced159` |
| `write_note` | 1 | A standing person holds a small notepad in the left hand and writes something short on it with the right hand | 3 | `a7a14e7b1458` |
| `cough` | 1 | A standing person covers their mouth with the right fist and coughs | 2 | `c4fc1079082b` |

`lift_box` take 3 holds a right-hand constraint: `walk_carry`'s right hand at its frame 30, at frames 80 and 89 (so it
ends with the box hanging at the side, ready for `walk_carry`). `nod`, `tear_paper`, `put_pocket`, `pull_tape` keep an
earlier take (the later ones were worse).

## Judged (every take)

- pass_back OK: seated, turns, the right arm reaches back over the right shoulder, held, comes forward
- pass_forward WEAK: seated, talking gestures; the right hand goes out forward only for a moment, no lean -> remake
- write_knee WRONG: seated, the right hand held at the chest, the head tilted (as on a phone); no writing on the knee -> remake
- tap_key WRONG: slumped far forward, head down at the knees, the hands in the lap -> remake
- side_ache WEAK: bent forward the whole clip, the left arm across the belly; no brief press of the right hand -> remake
- switch_up OK (near): reaches down to a low lever with the right hand, sweeps it up to shoulder height, holds it there
- switch_down OK: the right arm out at shoulder height, pulls down slowly to the waist, lets go, stands
- helmet_off WRONG: one hand raised high over the head, waving/touching the crown; no both-hands lift -> remake
- helmet_on WEAK: begins with both hands already over the head (no lift from rest), brings them down onto the head, then both hands at the chin -> remake longer
- show_hands WEAK: both hands up overhead in the first second, then bends and gestures at chest height -> remake
- gloves_pockets OK (near): pulls at the fingers of one hand then the other at chest height, the hands go down to the hips at the end (no deep pockets in the data)
- laugh OK: head thrown back, then doubles forward, back up
- shoulder_touch OK (near): the right arm out straight forward at shoulder height, held, lowered (the scene's reach sets it on the shoulder)
- sign_paper OK (near): the left forearm held flat across the chest, the right hand working over it; small moves
- tear_paper WEAK: hands together at the chest, small fiddling, never pulled apart; arms down at the end -> remake
- put_pocket WRONG: hands held together at the chest (as in prayer) all through; no pocket -> remake as a chain
- engine_work OK (near): bent a little, both forearms level at chest height, the hands working together, the head bowed over them
- cap_on WEAK: both hands over the head from the first frame (no lift from rest), 2 s too short -> remake longer
- lift_box WEAK: squats deep, the right hand to the ground, stands — but ends with the right arm reaching forward at the chest, not a box hanging at the side -> remake
- walk_carry OK: a slow walk, the shoulders slumped and leaning, the right arm hanging straight as with a weight
- give_box WRONG: both arms spread wide to the sides, leaning forward; nothing held before him -> remake
- palm_out OK: the right arm held out forward, then a little lower, the hand turned palm up, waiting
- pick_chocks OK: bends down deep, both hands to the ground, straightens holding them before the waist
- wipe_hands OK (near): the hands rubbing together at the waist, dropped between (the loop takes the rubbing)
- load_sack WRONG: crouches to the ground with both hands and stands again; nothing onto the shoulder -> remake
- phone_listen WEAK: the left hand goes to the ear and away again, the head tilted -> remake (held all through)
- hand_receiver OK: the left arm goes out to his left side at shoulder height, the hand open, held
- pull_tape WEAK: hands at the chin, then working together at the waist; no hand-over-hand drawing -> remake
- tear_tape WEAK: hands together at the chest, small moves; never held out -> remake as a chain
- hold_tape OK (near): both hands held together up at the chest/chin, the head a little tilted, still
- sit_down WRONG: sits down onto the ground (no seat) -> remake: on a chair
- stand_up WRONG: gets up from the ground -> remake: from a chair
- doze_drop WRONG: seated leaning back, the head thrown back, a hand at the neck; no dropping forward -> remake (on a chair)
- shoulders_shake OK (near): stands, the head bowed deep, the shoulders rounded, the arms hanging (the shaking slight)
- hand_hover WRONG: Kimodo made the doer seated, the right hand thrown up high twice -> remake standing
- coat_off WEAK: the forearms held forward, the hands fiddling at the wrists, then dropped; no coat pulled off -> remake
- raise_hand OK: the right arm goes up high above the head and stays there, the head up
- pull_chocks OK: crouching, both hands reach forward low and draw back to the knees
- look_under OK (near): bends forward, knees bent, the head low and forward, the hands out before him at chest height; ends bent (held)
- hand_on_side WEAK: leans aside, the legs crossed, the arms hanging; no hand up on anything -> remake
- write_desk WRONG: seated upright, the hands at the chest (as on a phone); no leaning over a table -> remake
- lay_paper OK (near): the right hand goes forward at chest height and down to waist height in front, then back to the side (a small bend)
- gloves_on OK (near): the left forearm across the chest, the right hand pulling at it; then the hands together working at the chest
- fold_tape OK (near): both hands together working at the chest, then lowered together to the waist (no glove in the data)
- nod WEAK: the head a little bowed all through; no nod seen -> remake
- write_note OK: the left hand holds something at the chest, the right hand writes on it, the head bowed to it
- cough OK: the right hand to the mouth, bends forward coughing, twice

**second takes**

- pass_forward#2 OK (near): seated, the right hand reaches forward at chest height, held, back (a small lean)
- write_knee#2 WRONG: doubled over, a hand to the forehead (despair) -> a third take
- tap_key#2 OK (near): seated, the head down, the right forearm level before him, the hand moving
- side_ache#2 OK (near): stooped, the right hand pressed to the left side of the belly; held the whole clip (the scene goes back to stand)
- helmet_off#2 WRONG: hands to the head, then a deep bow with the arms out, then up again -> a third take
- helmet_on#2 WEAK: hands to the head, a bow with the arms out, hands up, then both hands at the face/chin -> a third take
- show_hands#2 OK: both hands held high above the head, palms flat, moving side to side; lowered only at the very end
- tear_paper#2 WEAK: hands working at the chest, drawn a little apart now and then; no clear tear -> a third take
- put_pocket#2 WEAK: begins with both hands on the head (the chain's start), then hands at the chest, then the right hand to the left upper chest -> a third take, one prompt
- cap_on#2 OK: from rest both hands rise to the head, set something on it, come down
- lift_box#2 WEAK: bends, the right hand to the ground, straightens — but again ends with the right forearm raised to the chest -> a third take with a hand constraint (the hand hanging as in walk_carry)
- give_box#2 WRONG: the same spread arms as take 1 -> a third take as a chain from holding
- load_sack#2 WRONG: arms out, a stepping turn, then crouches to the ground; nothing onto the shoulder -> a third take
- phone_listen#2 OK: the left hand held at the left ear the whole clip, the head tilted to it, listening
- pull_tape#2 WEAK: the hands working together at the chest, bent forward; no hand-over-hand pull -> a third take
- tear_tape#2 OK (near): hands working together at the chest, then the right hand held out forward at chest height
- sit_down#2 OK: stands, bends, sits down onto a chair-height seat, upright at the end
- stand_up#2 OK: seated on a chair, leans forward, stands up straight
- doze_drop#2 OK (near): seated, slumped forward, the head down on the chest, the arms in the lap — asleep, still (no jerk up)
- hand_hover#2 OK (near): standing, the right arm goes forward at shoulder height, held there, lowered a little (the scene's reach sets it over the shoulder)
- coat_off#2 WEAK: the arms crossed over the chest, then the hands at the hips, down; no coat pulled off -> a third take
- hand_on_side#2 WRONG: the same lean with the legs crossed, the arms hanging -> a third take
- write_desk#2 OK (near): seated, bent forward, the right hand moving before him low, the left on the knee (no table in the data: the scene's desk under it)

**third takes**

- write_knee#3 WEAK: seated, both hands before the chest, small moves, a hand to the mouth now and then; no pad on the knee -> kept as the nearest (gap; the cast's write_seated is nearer: writing on a pad held up)
- helmet_off#3 OK (near): the right hand up to the head, lifts it off, brings it forward and down (one hand, as the data has it)
- helmet_on#3 OK (near): the right hand raised high, set onto the head, then both hands at the chin
- nod#3 WRONG: stands still, no nod (a head-only move Kimodo does not make) -> gap: kept take 1 (the head a little bowed); the nod by the scene's _look
- tear_paper#3 WEAK: the hands open at the shoulders, then down -> gap: kept take 2 (the hands working at the chest, drawn a little apart)
- put_pocket#3 WRONG: the right arm stretched forward -> gap: kept take 2 (hands at the head at the start, then at the chest, the right hand to the left upper chest)
- lift_box#3 OK (near): bends, the right hand down to the ground, stands with the right arm hanging at the side (a right-hand constraint from walk_carry's frame 30 at frames 80, 89)
- give_box#3 OK (near): holds the arms wide at chest height (round a big box), then pushes both forward; Kimodo's "big, heavy object in both hands" is always wide-armed — for the tool box the scene's reach brings the hands together
- load_sack#3 WEAK, kept (gap): bends, both hands to the ground, straightens, the right hand comes up toward the shoulder at the end; nothing clearly onto the shoulder
- pull_tape#3 WEAK: hands working at the chest, one arm flung up once -> gap: kept take 2 (bent a little, both hands working before the chest)
- coat_off#3 WEAK, kept (gap): arms out, crossed at the chest, hands to the hips, down — the gesture of it, no coat (no clothing in the data)
- hand_on_side#3 OK (near): leans to his right, the right hand up at head height resting on something beside him, held

## Gaps (the nearest kept; the scene finishes it, or takes another)

- `nod` — Kimodo makes no nod (three takes: a still stand). Kept: take 1, the head a little bowed; the nod is the
  scene's `madame_look` (down a little and back).
- `write_knee` — no writing on a knee (despair, phone-like hands). Kept: take 3, seated, the hands working before the
  chest. The cast's `write_seated` (writing on a pad held up) may be nearer — the pieces' author chooses.
- `tear_paper` — no tearing apart. Kept: take 2, the hands working at the chest, drawn a little apart.
- `put_pocket` — no pocket. Kept: take 2 (starts with the hands at the head, then the right hand to the left upper chest
  — the inside pocket); the pieces may start it from its frame ~20 (`from`).
- `load_sack` — never onto the shoulder. Kept: take 3, bends, both hands to the ground, straightens, the right hand
  rising toward the shoulder at the end.
- `pull_tape` — no hand-over-hand drawing. Kept: take 2, bent a little, both hands working before the chest.
- `coat_off` — no clothing in the data. Kept: take 3, arms crossed at the chest, then the hands to the hips and down.
- Near, not exact: `helmet_off` and `helmet_on` with the right hand (the data's hat), not both; `give_box` is
  wide-armed (a big box); `hand_on_side` rests the hand at head height; `side_ache` is held stooped the whole clip;
  `doze_drop` sleeps slumped without the jerk up; `shoulder_touch`, `hand_hover`, `palm_out`, `hand_receiver` reach
  into the air (the other's shoulder or hand is the scene's `_reach`); `gloves_pockets`, `gloves_on`, `fold_tape`,
  `sign_paper` are hands working at the chest/waist (no gloves, no paper in the data).
