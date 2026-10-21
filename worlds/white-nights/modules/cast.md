# cast — the people of «White Nights» as the engine's people

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — the engine's people.md). In
the scene's `modules`. 4 looks, 3 parts, 2 motions of its own (below) besides the engine's `stand` and `walk`. The parts'
lengths are a man's metres times `F.fit.h` (the height as a share of 1.76 m).

## Style

`litho` — made from the engine's `shadow` (slender, hands with fingers, pointed shoes), its head larger and its limbs
fuller so that faces read at a distance,
painted in colours under the scene's light (`toned`), a fine line round every colour in a darker shade of it
(`tinted`) — an old lithograph touched with watercolour; the face `simple` (eyes, brows, nose, mouth; `<id>_mood`).
Hems are even (no ragged edge).

## Who

- `dreamer` — the Dreamer, 26: thin, a little stooped, a clerk's worn frock coat of faded bottle green to the knee,
  grey trousers, dark brown hair. Bare-headed: his hat is in his hands (`hat_hands`, `hat_hand`).
- `nastenka` — Nastenka, 17: small, a pale lilac-grey dress to the ankles, a dark blue-grey mantle over the shoulders
  to the hips, a straw bonnet with a dark rose ribbon bow under the chin.
- `lodger` — the Lodger, about 28: tall and upright, a long dark frock coat, black hair; his top hat at his chest
  (`hat_hand`).
- `babushka` — Grandmother, past seventy, blind: small, a dark plum silk dress to the floor, a faded mustard shawl over
  the shoulders, white hair under a white cap (`mobcap`) tied with a lilac ribbon.

At home Nastenka is the same character with her look changed over it: `"look": {"garment": "frock", "hat": "none",
"hair": "bun"}` — her dress without the mantle, no bonnet, her hair up.

## Things (the cast's parts: `<id>_with`, or a look's `parts`)

- `hat_hands` — a top hat held before the chest in both hands, between them, its crown out from the chest (where the
  hands are: put them there by `<id>_reach`).
- `hat_hand` — a top hat in the right hand, its crown out from the chest.
- `book` — an open book held in both hands, between them, its pages turned to the reader's face; its point
  `<id>#book` (to look at it).

The hat's colour is the look's `colors.hat`.

## Garments, hats

`frockcoat` (to the knee), `longcoat` (below the knee, fuller), `caped` (a dress to the ankles with a mantle over the
shoulders to the hips), `frock` (the same dress without the mantle), `shawled` (an old woman's fuller dress to the floor,
a shawl over the shoulders to the hips, the top's colour); `bonnet` (a deep straw bonnet framing the face, a ribbon bow
under the chin), `mobcap` (an old woman's white linen cap, a ribbon bow under the chin).

## Motions

Made by the motion model (make_motion), put in with put_motion (`cast.data.json`). Both are seated loops: the person
sits on a seat by `<id>_on: [across, distance, top]` (the hips over it), `<id>_do: {"motion": …, "loop": true}`.

- `seated` — sits upright, the hands folded in the lap, breathing (made on a bench; the head turns where `_look` says).
- `read` — sits holding a book open in both hands at the chest, reading, now and then turning a page (with the part
  `book`).
