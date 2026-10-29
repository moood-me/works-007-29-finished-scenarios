# cast — the people of «White Nights» as the engine's people

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — the engine's people.md). In
the scene's `modules`. 5 looks, 7 parts, 2 motions of its own (below) besides the engine's `stand` and `walk`. The parts'
lengths are a man's metres times `F.fit.h` (the height as a share of 1.76 m).

## Style

`litho` — made from the engine's `shadow` (slender), its own arms (`litho`: a full sleeve, a real wrist, a palm as wide as a hand, the fingers closed in it — no separate fingers, so a hand is quiet, never splayed) and legs (`litho`: full to the knee, straight down to a real ankle, a low shoe with a rounded toe), rounder in the trunk so a person
stands in the street as a body, not a cut-out; the head a little larger than life (1.32 of the shadow's), a little narrower at the chin, so that a face reads across the street without making a doll of the figure. Painted in colours under the scene's light and shaded (`toned`), the cloth in a few long soft folds (an even edge, never a serrated one), drawn round
with the houses' own sepia ink (the cast's ground `litho`: its `ink` is the scenes' `INK`, #4a3f3a) — an old lithograph
touched with watercolour. The face is the cast's `litho`, drawn to read across the street: eyes with their whites, a dark iris half under an inked upper lid, a glint in it, the lower lid's crease, thick brows of the hair's colour that the mood lifts or
knits plainly, a nose with its shade, a soft upper lip and a fuller lower one (no painted cheeks: the scene's light rounds the face); it takes `<id>_mood` (the engine's
expressions, by name). Hems are even (no ragged edge).

## Who

- `dreamer` — the Dreamer, 26: thin, a little stooped, a clerk's worn frock coat of faded bottle green to the knee,
  grey trousers, brown hair brushed up in a soft wave, down to sideburns, full at the collar (`swept`). Bare-headed: his hat is in his hands (`hat_held`, `hat_hands`, `hat_hand`,
  `hat_low`); his knotty stick (`cane`).
- `nastenka` — Nastenka, 17: small, a pale lilac-grey dress to the ankles, a dark blue-grey mantle over the shoulders
  to the hips, bare-headed: her dark hair parted in the middle, smoothed in bands over the temples and the ears to a
  knot low at the nape (`bands`).
- `lodger` — the Lodger, about 28: tall and upright, a long slate-blue frock coat, black hair, close and neat (`neat`), under a tall black top hat
  (`tophat`); at his chest instead: `"_wear": {"hat": "none"}` and `hat_hand`.
- `babushka` — Grandmother, past seventy, blind: small, a dark plum silk dress to the floor, a faded mustard shawl over
  the shoulders, white hair under a white cap (`mobcap`) tied with a lilac ribbon.
- `matryona` — Matryona, the Dreamer's servant, past sixty: short and broad, a brown homespun dress to the floor, a
  faded brick-red shawl over the shoulders, a washed linen kerchief (`kerchief`) tied under the chin over grey hair.

At home Nastenka is the same character with her look changed over it: `"look": {"garment": "frock"}` — her dress
without the mantle.

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
- `letter` — a folded letter with a red wax seal held out in the right hand, upright between the fingers, its long side
  along the forearm beyond the hand, so held out across the body it shows its face (the hand put out by `<id>_reach`);
  its point `<id>#letter`.

The hat's colour is the look's `colors.hat`.

## Hair

`bands` (a girl's: parted in the middle, smoothed down over the temples and the ears, a knot low at the nape),
`swept` (a man's: brushed up from the brow in a soft wave, down the temples to sideburns before the ears, behind them
full and down to the collar), `neat` (the same, close to the head, short at the nape). The engine's own (`short`, `bun`…) are there too.

## Garments, hats

`frockcoat` (to the knee), `longcoat` (just below the knee) — both straight, a man's coat and not a skirt, the trousers
showing under it, and over the chest the coat's front (`coatFront`: a waistcoat between the lapels in their deeper shade of the coat, the shirt's white
only at the throat under a dark stock wound round the neck, buttons), `caped` (a dress to the ankles with a mantle over the
shoulders to the hips), `frock` (the same dress without the mantle, a little shorter and narrower, smooth — it is sat in), `shawled` (an old woman's fuller dress to the floor,
a shawl over the shoulders to the hips, the top's colour); `tophat` (a tall black top hat worn a little back, a narrow brim, a silk band), `mobcap` (an old woman's white linen cap, a ribbon bow under the chin), `kerchief` (a working woman's linen kerchief drawn close over the hair and the brow, knotted under the chin — the accent —, its corner at the nape).

## Motions

Made by the motion model (make_motion), put in with put_motion (`cast.data.json`). Both are seated loops: the person
sits on a seat by `<id>_on: [across, distance, top]` (the hips over it), `<id>_do: {"motion": …, "loop": true}`.

- `seated` — sits still on a chair, the hands resting on the thighs, breathing slowly (the head free for `_look`).
- `read` — sits holding a book open in both hands at the chest, reading, now and then turning a page (with the part
  `book`).

## Stage 5's motions (taken from motions made before, each looked at)

Motions already made by Kimodo for other worlds of this studio, looked at here (`look_at_motion`, front and side,
eight moments) and put in with `put_motion` (branch `r3/nights-motions`). Done once unless «loop».

- `sit_down` (once) — stands, bends, sits down onto a chair-height seat (the bench, the stool, the armchair:
  `go('sit_down', {to: SEAT, turn})`, then `seated` looped).
- `stand_up` (once) — seated on a chair, leans forward, stands up straight.
- `laugh` (loop) — stands laughing, the head thrown back, then doubling forward, back up.
- `cry` (loop) — stands, the head bowed deep, the shoulders rounded, the arms hanging; the shaking slight.
- `hat_on` (once) — the right hand raised with the hat, set onto the head, then both hands at the chin.
- `hat_off` (once) — the right hand up to the head, lifts the hat off, brings it forward and down.
- `palm_out` (loop) — the right arm held out forward, the hand turned palm up, waiting (Glasha's palm).
- `put_down` (once) — the right hand goes forward at chest height and down to waist height in front (a letter, a hat
  on the table), then back to the side.
- `bow_deep` (once) — a deep old-fashioned bow: a step back, bent far forward with the arm across, up again. Theatrical;
  for a polite small bow none is made yet (below).
- `handshake` (once) — the right arm goes forward low, a small shake, back (the other's hand: the scene's `_reach`).
- `run` (loop, a gait) — a steady run.
- `drop_pieces` (once) — the hands at the chest, then bends a little and lets things go low before him, stands.
- `tear_letter` (once) — the hands working together at the chest, drawn a little apart at the end. The nearest: no
  clear tear (the data has no paper tearing).
- `hold_out` (once, held) — the right arm goes out straight forward at shoulder height and stays (giving a letter).
- `doze` (loop) — sits leaning far back, the arms crossed on the chest, the head back: asleep in an armchair.
- `sew` (loop) — seated, hunched, the hands working in the lap (sewing, pinning).
- `hang_up` (once) — the right hand reaches up forward to head height and back (a coat on a hook by the stove).
- `hand_heart` (once) — the right palm to the forehead, then laid on the chest over the heart.

Looked at and not taken: the bench and stool sitting-down and getting-up motions made elsewhere (they sit down onto
the ground), a wave (wild flailing), a knock (the hand held up, no knocking), a look back (unclear), covering the face
seated (it kneels), putting a letter in the inside pocket (the hands only fold at the chest), a tear with the hands
open at the shoulders.

## Not made (the game stopped at a half-stage)

The stage-5 contract (`docs/new-games/belye-nochi/game.md`, «Motions») asks for these; none is in the cast yet:
`cry_railing`, `bow_house`, `laugh_broom`, `walk_cane`, `walk_raised`, `stagger`, `arm_in_arm`, `pace`, `sit_edge`,
`sit_tucked`, `gesture_talk`, `pin_sleeve`, `head_shoulder`, `embrace_shoulders`, `give_letter` (until then:
`hold_out`), `hug_kiss`, `pull_free`, `palm_cheek`, `bell_pull`, `knock`, `unpin`, `search_hands`, `sweep_high`,
`open_window`, `lean_window`; a better `tear_letter` (torn over the water and let fall). Prompts were asked of Kimodo
(the history note has them) but the motion GPU did not wake.
