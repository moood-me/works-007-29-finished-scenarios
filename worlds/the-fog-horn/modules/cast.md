# cast — the people of “The Fog Horn”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`fog` — the engine's flat geometry (`flat`): straight edges, plain quiet colours, lit by the scene's light; a fine line;
a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on it), so faces read in a wide shot.

## Who

- `johnny` — Johnny, the keeper's assistant, twenty-two: lean, dark short hair, a navy pea jacket over a grey jumper,
  a rust scarf (the one warm colour on him).
- `mcdunn` — McDunn, the keeper: broad and heavy, a white beard, a dark knitted cap, a thick dark jacket over a
  grey-brown jumper.

## Things (`<id>_with`, or a look's `parts`)

`lantern` — McDunn's hand lantern hanging from the right hand by its bail (it swings a little late), out; `lantern_lit`
— the same lit: its glass glows. Both mark the point `#flame` (the middle of the glass): the scene's light of the
lantern stands there (`"at": "johnny#flame"`, its `on` a key). `beard` — a full beard (a look's).

## Motions (Kimodo)

The engine's `stand` and `walk`, and: `hands_behind` — stands with the hands clasped behind the back, a loop.
