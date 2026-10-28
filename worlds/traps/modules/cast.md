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
- `kummer` — Kummer, the defender: short and stout, red in the face, untidy white hair, a pince-nez (part
  `pincenez`), a crumpled grey-brown suit, a green tie (part `tie`), his cane in the right hand (part `cane`: from
  under the hand to the floor).
- `pile` — Pile, the executioner: huge (height 1.1, thick 1.5), grey hair cropped close, a dark brown suit, a white
  napkin tucked into his collar (part `napkin`), a knife upright in his right fist and a fork in his left (part
  `cutlery`).

Parts held only in some scenes (the person's `_with`): `chamberstick` — the judge's brass candlestick with a burning
candle in the right hand (its point `flame`: a light `"at": "judge#flame"`).

## Motions

`cast.data.json` (Kimodo's, put there with put_motion), each a loop of standing as the person stands in the story:

- `stand_glass` — Traps: a wide stance, a drink held at the chest in the right hand, the left arm hanging.
- `stand_hands_folded` — the judge: upright, both hands held together before the stomach (`judge_reach` brings them
  onto his belly).
- `lean_on_hands` — Zorn: bent a little forward, both hands down before him on something waist-high (`zorn_reach`
  sets them on his chair's back).
- `sit_forearms` — at table: sitting wide, leaning forward, the forearms on the table, elbows out (`_on` a seat;
  `_reach` sets the hands on the cloth) — Traps; Pile too, hunched over his plate (begun at another moment of the
  loop, `{"motion", "loop": true, "from"}`, so the two do not breathe in step).
- `sit_upright` — the judge at table: sitting upright, the hands forward on the table (`_reach`).
- `lean_to_shoulder` — Kummer standing by a seated man: leaning to his left, the left hand out to the other's
  shoulder (`kummer_reach` `l`: `"traps#shoulder_r"`), the right down on his cane (`r`: a point at his hip).

- `sit_bed` — Traps on the edge of a bed, slumped, tired (`_on` the bed's edge; `_reach` sets the hands on the sheet
  beside him).
- `stand_proud` — Zorn: upright and still, the chest out, the chin up.
- `stand_tired` — Kummer: standing still, a little hunched, breathing heavily (`kummer_reach` `r` down to his hip,
  on the cane).
- `stand_candle` — the judge: upright, both hands at his chest, the right holding the candle (part `chamberstick`).

The engine's `walk` for walking.
