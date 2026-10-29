# cast — the people of “Night Flight”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`aero` — from the engine's `flat` (straight edges, a coat a clean trapezoid — an airline poster's figures), plain
colours under the scene's light (`lit`), a fine line, the head a little larger and a simple face (eyes, brows, nose,
mouth — `<id>_mood` shows on it), so faces read in a wide shot.

## Who

- `riviere` — Rivière, the director: past fifty, tall, upright, grey at the temples; a long dark overcoat, a dark hat (`fedora`).
- `robineau` — Robineau, the inspector: shorter and soft, a brown suit, dark hair, a small moustache; his folder in
  both hands.
- `roblet` — Roblet, the old mechanic: grey hair, a grey moustache, a faded blue work jacket; his cap off, held in both hands.
- `madame` — Madame Fabien: twenty-two, a plum-grey coat thrown on over a house dress, no hat, dark hair put up in haste.
- `pilot` — the European mail's pilot: young, fair, a brown leather flying jacket, breeches and boots, a white scarf; his
  leather helmet hanging from his right hand.
- `fabien` — Fabien, the Patagonian mail's pilot: thirty, calm; a black-brown leather coat, a white scarf, a leather
  flying helmet with the goggles up (`aviator`).
- `radioman` — Fabien's radio operator: young, a tan jacket, the flying helmet with headphones over it
  (`headphones`), a message pad in his left hand (`pad`).
- `telegraphist` — the telegraphist: in shirtsleeves, dark trousers, a green eyeshade (`visor`), thin grey hair, a small
  moustache.

- `pellerin` — Pellerin, the Chilean mail's pilot: broad, weathered, a heavy dark leather coat, a white scarf; his
  helmet pulled off, in his right hand (`helmet_held`).
- `asuncion` — the Asunción mail's pilot: a tan sheepskin-collared flying jacket, his helmet on, the goggles up, a
  moustache.
- `mechanic` — the young mechanic: blue overalls, a cloth cap (`cap`), fair hair. `mechanic_b` — an older one: stocky,
  grey-blue overalls, a cap, a grey moustache. `mechanic_c` — a lanky one: faded khaki overalls, bareheaded.

Rivière indoors (the bureau, the office) wears no hat and a jacket: `"look": {"hat": "none", "garment": "jacket"}` over `riviere`.

## Things (a look's `parts`, or `<id>_with`)

`folder` — a folder of reports held before him in both hands. `cap_held` — a cloth cap held before him in both
hands, its top to us, the peak below (its colour the look's `hat`). `fedora` (a hat) — a brim, a high rounded crown. `aviator` (a hat) — a leather flying helmet worn: a shell over the
crown and ears, the goggles pushed up on the brow. `headphones` — a band over the crown, an earpiece on each ear.
`pad` — a message pad in the left hand. `visor` (a hat) — a green eyeshade: a band and a peak over the eyes.
`moustache` — a small moustache (the hair's colour). `helmet_held` — a leather flying helmet with its goggles, hanging
from the right hand (its colour the look's `hat`). `sack` — a mail sack carried before him in both hands.
`toolbox_held` — Roblet's tool box carried by its handle in the right hand. `spanner` — a big spanner in the right
hand. `note` — a note torn off a message pad, in the right hand (its point `#note`). These four are for `<id>_with`.

## Motions (Kimodo)

The engine's `stand` and `walk`, and loops: `hands_behind` — stands, the hands clasped behind the back;
`hold_waist` — stands holding something before him at the waist in both hands (the folder); `hold_low` — stands, the head
bowed, holding something before the belly in both hands (the cap); `coat_clutch` — stands, the arms wrapped round her,
holding her coat shut, the head bowed; `stand_easy` — stands at ease, the arms hanging, the weight on one leg;
`desk_lean` — sits leaning forward over a table on the elbows (the hips at a chair's height: put a chair under them);
`fly_seated` — sits upright, the hands low before him (a pilot at the stick); `write_seated` — sits writing on a pad
held up before him (both seated as on a chair: give them a seat by `<id>_on`).

## Stage 5's motions (Kimodo, 2026-10-29)

Made for the pieces (`docs/new-games/nochnoj-polyot/game.md`, «New motions»); how and every take:
`docs/history/2026-10-29-nochnoj-polyot-motions.md`. Loops unless «once». «Near» — not quite the ask; «gap» — the
nearest Kimodo gave, the scene finishes it (a `_look`, a `_reach`, a part) or takes another.

Seated (give them a seat by `<id>_on`):
`pass_back` (once) — turns, the right arm reaches back over the right shoulder, held, comes forward.
`pass_forward` (once) — the right hand reaches forward at chest height, held, back (near: a small lean).
`write_knee` — the hands working before the chest, a hand to the mouth now and then (gap: no pad on the knee;
`write_seated` may be nearer). `tap_key` — the head down, the right forearm level before him, the hand moving (near).
`write_desk` — bent forward, the right hand moving low before him, the left on the knee (near: put the desk under it).
`doze_drop` — slumped forward, the head on the chest, asleep (near: no jerk up). `stand_up` (once) — up out of a
chair-height seat; `sit_down` (once) — down onto one, upright at the end.

Standing:
`side_ache` (once) — stooped, the right hand pressed to the left side, held the whole clip (near).
`switch_up` (once) — the right hand to a low lever, sweeps it up to shoulder height, holds (near).
`switch_down` (once) — the right arm out at shoulder height, pulls down to the waist, lets go.
`helmet_off` (once) — the right hand lifts it off the head, forward and down (near: one hand).
`helmet_on` (once) — the right hand sets it on the head, then both hands at the chin (near: one hand).
`show_hands` — both hands high above the head, palms flat, moving side to side.
`gloves_pockets` (once) — pulls at the fingers of one hand then the other at the chest, the hands down to the hips.
`laugh` — the head back, then doubled forward, back up. `shoulder_touch` (once) — the right arm out forward at
shoulder height, held, lowered (`_reach` sets it on the shoulder). `sign_paper` (once) — the left forearm flat across the
chest, the right hand working over it. `tear_paper` (once) — the hands working at the chest, drawn a little apart (gap).
`put_pocket` (once) — the hands at the head first (start it from ~0.7 s), then the right hand to the left upper chest
(gap). `engine_work` — bent a little, both forearms level at chest height, the hands working, the head over them.
`cap_on` (once) — both hands up to the head, set it on, down. `lift_box` (once) — bends, the right hand to the ground,
stands with the right arm hanging at the side (ends as `walk_carry` holds it). `walk_carry` — a slow walk, the shoulders
slumped, the right arm hanging straight with a weight (a gait). `give_box` (once) — the arms wide at chest height, pushed
forward (near: wide for a big box). `palm_out` — the right arm forward, palm up, waiting. `pick_chocks` (once) — bends
deep, both hands to the ground, straightens holding them before the waist. `wipe_hands` — the hands rubbing together
at the waist. `load_sack` — bends, both hands to the ground, straightens, the right hand toward the shoulder (gap).
`phone_listen` — the left hand at the left ear, the head tilted to it. `hand_receiver` (once) — the left arm out to his
left at shoulder height, the hand open, held. `pull_tape` — bent a little, both hands working before the chest (gap: no
hand over hand). `tear_tape` (once) — the hands at the chest, then the right hand held out forward. `hold_tape` — both
hands held together up at the chest, still. `shoulders_shake` — the head bowed deep, the shoulders rounded, the arms
hanging (the shaking slight). `hand_hover` (once) — the right arm forward at shoulder height, held, lowered a little
(`_reach` puts it over the shoulder). `coat_off` (once) — the arms crossed at the chest, then the hands to the hips and
down (gap: no clothing in the data). `raise_hand` (once) — the right arm high above the head, held, the head up.
`look_under` (once) — bends forward, knees bent, the head low, the hands before him at chest height; ends bent.
`hand_on_side` — leans to his right, the right hand up at head height on something beside him (near).
`lay_paper` (once) — the right hand forward at chest height, down to waist height, back. `gloves_on` (once) — the left
forearm across the chest, the right hand pulling at it, then both hands working at the chest. `fold_tape` (once) — both
hands working at the chest, lowered together. `nod` (once) — a still stand, the head a little bowed (gap: no nod; nod
by `_look`). `write_note` (once) — the left hand holds something at the chest, the right writes on it, the head bowed.
`cough` (once) — the right hand to the mouth, bends coughing, twice.

Crouching: `pull_chocks` (once) — crouched, both hands reach forward low and draw back to the knees.
