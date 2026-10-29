# The Attic

The scenario's С4 (stage 4, `r3/menagerie-rooms`): under the roof's two slopes, the little gable window and its dusty
light (`sun` through `window`, the motes), old cartons, a trunk, the junk by the gable, the brick chimney; the hatch in
the floor (`hatch`) and the hall's light coming up through it (`hatch_light`); the shoe box in the light (`box` shut /
gone, `stir` — it starts now and then). Jack (grown: the script dresses him as `jack_grown` without the suit bag) stands
on the ladder in the open hatch (1.0, 3.45), chest and head above the floor.

## Stage 5: the piece

The module `beats` (lib.js `film`; script.js plays it).

| piece | after | what |
| --- | --- | --- |
| wake_attic | — | (3.2, «Зверинец» 0) the box starts in the dusty light; Jack in the hatch reaches it and takes it down (`jack_with` shoebox, `box` gone) |

The room's `wake_room` goes on from here (Jack on the floor of his room with the box).

## Contract for the check

```json
{"beats": {"wake_attic":{"after":[],"tells":["wake_attic:box"],"seconds":8}}}
```
