# cast — the people of «Master and Man»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). In the scene's
`modules`. 3 looks, 3 motions of its own (besides the engine's `stand` and `walk`). A part's lengths are a man's metres
times `F.fit.h` (the height as a share of 1.76 m).

## Style

`tolstoy` — made from the engine's `soft`: the head a little large so a face reads across a yard, rounded forms, a
fine line of a darker shade round them, faces of their own (eyes with whites, brows, a nose, a mouth, frost-red cheeks —
`<id>_mood` shows an expression), bare hands with fingers, felt boots. Painted in daylight colours, lit by the scene. Like the whole world: a painterly winter
illustration — white, grey-blue, ice-blue, with few warm spots: the red fox fur, the red sash.

## Who

- `vasily` — Vasily Andreich Brekhunov, the master: about fifty, stout, ruddy, a trimmed brown beard (`beard_trim`);
  the long red fox-fur coat to the middle of the shin (`fox_coat`) with a roll of lighter fur at the neck
  (`fur_collar`), a round dark fur hat (`fur_hat`), felt boots.
- `nikita` — Nikita, the workman: about fifty, wiry, a long greying beard (`beard_long`); a thin homespun coat to the
  knee, ragged at the hem (`armyak`), the red sash round it, knotted at the left hip, its ends swinging (`sash`); a
  low worn sheepskin hat (`sheepskin_hat`), grey felt boots.
- `praskovya` — Praskovya Mikhailovna, his wife: slight, a long dark blue-grey dress down to the floor (`long_dress`), a light woollen shawl over her head,
  tied under the chin (`shawl`).

## Motions (Kimodo's, standing loops)

- `hands_hips` — stands with his hands on his hips (the master on his porch).
- `hands_breast` — stands with her hands folded at the breast, swaying a very little (holding her shawl).
- `hands_behind` — stands with the hands behind the back.

The engine's `stand` (at rest, breathing) and `walk`. With `stand`, `<id>_reach` puts a hand where it is told (Nikita's
right hand on the horse's cheek: `{"r": {"on": "horse", "at": [-1.2, -0.06, 1.5]}}`) and `<id>_look` turns the head.
