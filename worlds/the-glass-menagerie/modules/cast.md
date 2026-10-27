# cast — the people of “The Glass Menagerie”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide).

## Style

`memory` — made from `soft` (rounded shapes, tinted lines, toned colours) with a head a shade smaller, so the
grown-ups read as grown-ups; a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on it), so faces read across
the room.

## Who

- `tom` — Tom Wingfield, twenty-three: lean, dark short hair, in his shirtsleeves — a white shirt, dark trousers.
- `laura` — Laura Wingfield, twenty-four: slight, a dark bob, a plain pale-blue dress.
- `tom_coat` — Tom in his grey overcoat.
- `amanda` — Amanda Wingfield, past fifty: fuller, greying hair in a bun, a faded plum house dress.
- `amanda_jonquils` — Amanda on the caller's evening, in the old jonquil-yellow dress of her girlhood.
- `jim` — Jim O'Connor, twenty-four: broad, easy, sandy-red hair, a light-brown jacket, dark trousers.

## Motions (Kimodo)

The engine's `stand` and `walk`, and: `arms_folded` — stands with the arms folded, waiting, the weight shifting now
and then (a loop); `hands_clasped` — stands with the hands clasped in front, swaying a very little (a loop);
`holds_glass` — stands holding something small in both hands before the chest, looking down at it (a loop);
`smokes` — stands smoking, the right hand bringing the cigarette to the mouth and holding it by the chest (a loop);
`hands_in_pockets` — stands at ease, the hands in the pockets, the weight shifting (a loop).

## Parts

`deer` — Laura's little glass deer, cupped in both hands, glowing with its own light; its point `deer`
(`laura#deer`). Given in a scene by `laura_with: ["deer"]`.
`cigarette` — a cigarette between the right hand's fingers, its coal glowing; its point `ember` (`tom#ember`, where
its smoke rises from). Given by `tom_with: ["cigarette"]`.
