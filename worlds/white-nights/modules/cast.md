# cast — the people of «White Nights» as the engine's people

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — the engine's people.md). In
the scene's `modules`. 4 looks, 6 parts, 2 motions of its own (below) besides the engine's `stand` and `walk`. The parts'
lengths are a man's metres times `F.fit.h` (the height as a share of 1.76 m).

## Style

`litho` — made from the engine's `shadow` (slender, pointed shoes), its own arms (`litho`: a full sleeve, a real wrist, a palm as wide as a hand, with fingers), rounder in the trunk so a person
stands in the street as a body, not a cut-out; the head a little larger than life and rounder, so that a face reads
across the street. Painted in colours under the scene's light and shaded (`toned`), the cloth in long deep folds, drawn round
with the houses' own sepia ink (the cast's ground `litho`: its `ink` is the scenes' `INK`, #4a3f3a) — an old lithograph
touched with watercolour. The face is the cast's `litho`, drawn to read at a few metres: large eyes with their whites, a dark iris half under a
heavy inked upper lid, a glint in it, the lower lid's crease, strong brows of the hair's colour that the mood lifts or
knits, a nose with its shade, an upper lip and a fuller lower one, colour in the cheeks; it takes `<id>_mood` (the engine's
expressions, by name). Hems are even (no ragged edge).

## Who

- `dreamer` — the Dreamer, 26: thin, a little stooped, a clerk's worn frock coat of faded bottle green to the knee,
  grey trousers, brown hair. Bare-headed: his hat is in his hands (`hat_held`, `hat_hands`, `hat_hand`,
  `hat_low`); his knotty stick (`cane`).
- `nastenka` — Nastenka, 17: small, a pale lilac-grey dress to the ankles, a dark blue-grey mantle over the shoulders
  to the hips, a straw bonnet with a dark rose ribbon bow under the chin.
- `lodger` — the Lodger, about 28: tall and upright, a long slate-blue frock coat, black hair under a tall black top hat
  (`tophat`); at his chest instead: `"_wear": {"hat": "none"}` and `hat_hand`.
- `babushka` — Grandmother, past seventy, blind: small, a dark plum silk dress to the floor, a faded mustard shawl over
  the shoulders, white hair under a white cap (`mobcap`) tied with a lilac ribbon.

At home Nastenka is the same character with her look changed over it: `"look": {"garment": "frock", "hat": "none",
"hair": "bun"}` — her dress without the mantle, no bonnet, her hair up.

## Things (the cast's parts: `<id>_with`, or a look's `parts`)

- `hat_held` — a top hat held low before him by its brim in the left hand, hanging under the hand, its crown out before
  him and a little down (the hand put there by `<id>_reach`).
- `cane` — the Dreamer's knotty stick in the right hand, its point on the ground a little before the foot, its knob over
  the hand.
- `hat_hands` — a top hat held before the chest in both hands, between them, its crown out from the chest (where the
  hands are: put them there by `<id>_reach`).
- `hat_hand` — a top hat in the right hand, its crown out from the chest.
- `hat_low` — a top hat held low at the side by its brim in the left hand, its crown out away from the body and a
  little down (the arm as the motion has it).
- `book` — an open book held in both hands, between them, its pages turned to the reader's face; its point
  `<id>#book` (to look at it).

The hat's colour is the look's `colors.hat`.

## Garments, hats

`frockcoat` (to the knee), `longcoat` (below the knee, fuller), `caped` (a dress to the ankles with a mantle over the
shoulders to the hips), `frock` (the same dress without the mantle, a little shorter and narrower, smooth — it is sat in), `shawled` (an old woman's fuller dress to the floor,
a shawl over the shoulders to the hips, the top's colour); `bonnet` (a deep straw bonnet framing the face, a ribbon bow
under the chin), `tophat` (a tall black top hat worn a little back, a narrow brim, a silk band), `mobcap` (an old woman's white linen cap, a ribbon bow under the chin).

## Motions

Made by the motion model (make_motion), put in with put_motion (`cast.data.json`). Both are seated loops: the person
sits on a seat by `<id>_on: [across, distance, top]` (the hips over it), `<id>_do: {"motion": …, "loop": true}`.

- `seated` — sits still on a chair, the hands resting on the thighs, breathing slowly (the head free for `_look`).
- `read` — sits holding a book open in both hands at the chest, reading, now and then turning a page (with the part
  `book`).
