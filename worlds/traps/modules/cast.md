# cast — the people of “Traps”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide).

## Style

`traps` — made from `soft` (round shapes, tinted lines, toned colours) with a smaller head and a shorter neck, so the
old men read as men; a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on it) that reads across the garden.

## Who

- `traps` — Alfredo Traps, forty-five: well fed (narrow shoulders, a paunch), dark hair, a new cream summer suit
  (garment `suit`), a red tie (part `tie`); a glass of red wine half full in the right hand (part `glass`).
- `judge` — the judge, the host: small, a little paunch, bald with a white fringe (hair `fringe`) and a white moustache (part
  `moustache`), a black suit (garment `suit`), a dark red bow tie (part `bowtie`).
- `zorn` — Zorn, the prosecutor: tall and thin, silver hair, a long black frock coat (garment `frock`), a wine-red
  cravat (the scarf, colour `accent`).

## Motions

`cast.data.json` (Kimodo's, put there with put_motion), each a loop of standing as the person stands in the story:

- `stand_glass` — Traps: a wide stance, a drink held at the chest in the right hand, the left arm hanging.
- `stand_hands_folded` — the judge: upright, both hands held together before the stomach (`judge_reach` brings them
  onto his belly).
- `lean_on_hands` — Zorn: bent a little forward, both hands down before him on something waist-high (`zorn_reach`
  sets them on his chair's back).

The engine's `walk` for walking.
