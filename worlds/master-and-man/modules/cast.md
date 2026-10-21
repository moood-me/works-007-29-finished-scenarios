# cast — the people of «Master and Man»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). In the scene's
`modules`. 3 looks, 3 motions of its own (besides the engine's `stand` and `walk`). A part's lengths are a man's metres
times `F.fit.h` (the height as a share of 1.76 m).

## Style

`tolstoy` — made from the engine's `soft`, but a painter's figure, not a toy's: true proportions (a grown man's head,
the face longer than wide, a neck, limbs of their length, a trunk as deep as a body), rounded forms, a fine line of a
darker shade round them, bare hands with fingers, felt boots. Faces drawn as a painter would: the eye in its socket, its
white and iris, the upper lid coming down over it with its line of lashes, the fold under it, heavy brows, a nose with
its wings, the folds from the nose to the mouth, the lips, the cold's flush wide and faint — each person their own
(`tolstoy_vasily`: heavy half-lidded reckoning eyes under drawn brows; `tolstoy_nikita`: mild creased eyes;
`tolstoy_praskovya`: wide eyes, light brows; `tolstoy` for anyone else). `<id>_mood` shows an expression. Painted in
daylight colours, lit by the scene. Like the whole world: a painterly winter illustration — white, grey-blue,
ice-blue, with few warm spots: the red fox fur, the red sash.

## Who

- `vasily` — Vasily Andreich Brekhunov, the master: about fifty, stout, ruddy, a trimmed brown beard (`beard_trim`);
  the red fox-fur coat to a hand below the knee (`fox_coat`), the felt boots under it, a roll of lighter fur at the neck
  (`fur_collar`) and narrow fur cuffs (`fur_cuffs`), a round dark fur hat (`fur_hat`).
- `nikita` — Nikita, the workman: about fifty, wiry, a long greying beard white with rime, little icicles in it, rime on the brows (`beard_long`, `beard_frost`); a thin homespun coat to the
  knee, ragged at the hem (`armyak`), the red sash round it, knotted at the left hip, its ends swinging (`sash`); a
  low worn sheepskin hat (`sheepskin_hat`), grey felt boots.
- `praskovya` — Praskovya Mikhailovna, his wife: slight, a long dark blue-grey dress down to the floor (`long_dress`), a light woollen shawl over her head,
  tied under the chin (`shawl`).

## Motions (Kimodo's, standing loops)

- `hands_hips` — stands with his hands on his hips.
- `hands_breast` — stands with her hands folded at the breast, swaying a very little (holding her shawl).
- `hands_behind` — stands with the hands behind the back.

The engine's `stand` (at rest, breathing) and `walk`. `<id>_reach` puts a hand where it is told, over any of them (Nikita's
left hand on the horse's bridle: `{"l": {"on": "horse", "at": [-1.36, -0.06, 1.36]}}`; the master, `hands_behind`, one
hand brought to the bosom of his coat) and `<id>_look` turns the head.
