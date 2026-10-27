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

Rivière indoors (the bureau) wears no hat and a jacket: `"look": {"hat": "none", "garment": "jacket"}` over `riviere`.

## Things (a look's `parts`, or `<id>_with`)

`folder` — a folder of reports held before him in both hands. `cap_held` — a cloth cap held before him in both
hands, its top to us, the peak below (its colour the look's `hat`). `fedora` (a hat) — a brim, a high rounded crown. `aviator` (a hat) — a leather flying helmet worn: a shell over the
crown and ears, the goggles pushed up on the brow. `headphones` — a band over the crown, an earpiece on each ear.
`pad` — a message pad in the left hand. `visor` (a hat) — a green eyeshade: a band and a peak over the eyes.
`moustache` — a small moustache (the hair's colour). `helmet_held` — a leather flying helmet with its goggles, hanging
from the right hand (its colour the look's `hat`).

## Motions (Kimodo)

The engine's `stand` and `walk`, and loops: `hands_behind` — stands, the hands clasped behind the back;
`hold_waist` — stands holding something before him at the waist in both hands (the folder); `hold_low` — stands, the head
bowed, holding something before the belly in both hands (the cap); `coat_clutch` — stands, the arms wrapped round her,
holding her coat shut, the head bowed; `stand_easy` — stands at ease, the arms hanging, the weight on one leg;
`desk_lean` — sits leaning forward over a table on the elbows (the hips at a chair's height: put a chair under them);
`fly_seated` — sits upright, the hands low before him (a pilot at the stick); `write_seated` — sits writing on a pad
held up before him (both seated as on a chair: give them a seat by `<id>_on`).
