# cast — the people of “Leaf by Niggle”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide).

## Style

`niggle` — made from `soft` (rounded shapes, tinted lines), `toned` by the scene's light, the head a little big so a face
reads across the shed; a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on it).

## Who

- `niggle` — Niggle: a little roundish man past his middle years, untidy greying-brown hair, a faded blue painter’s
  smock; his brush in the right hand (part `brush`).
- `parish` — Parish, his neighbour: lean, lame, a short moustache (part `moustache`), a cloth cap, a worn green-brown
  jacket; his ash stick in the right hand (part `stick`, from the hand to the floor by the feet). In that country he
  has no stick: `parish_with: ["moustache", "spade"]` — his spade stuck in the earth by his right foot, his right hand
  on its grip (part `spade`; with `stand_spade`).
- `guide` — the Guide (of the workhouse, and in that country the shepherd): tall, lean, a long grey-green shepherd's
  cloak (garment `cloak`), a broad hat, his shepherd's staff with a crook in the right hand (part `staff`).
- `mrs_parish` — Mrs Parish: small, ill, a pale kerchief (hat `kerchief`), a faded rose house dress.

## Motions (Kimodo)

The engine's `stand` and `walk`, and: `hold_brush` — stands holding something small at chest height in the right hand,
breathing (a loop); `reach_up` — stands looking up, the right arm raised overhead as if touching something above
(a loop; with `<id>_reach` its hand goes to the point); `hold_staff` — stands holding a tall upright pole in the right
hand at chest height (a loop); `stand_spade` — stands easy, weight on one leg, the right hand low at the side as on a
spade's grip (a loop).
