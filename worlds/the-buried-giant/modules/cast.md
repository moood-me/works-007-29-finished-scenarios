# cast — the people of «The Buried Giant»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people.md). Looks only; the
motions are the engine's (`stand`, `walk`).

## Style

`giant` — the engine's flat geometry (`flat`): straight edges, muted plain colours, lit by the scene's own light, a
fine line, a head a little large and a bold simple face (`giant`: eyes, brows, nose, mouth; `<id>_mood` — neutral, smile, sad, thinking, tired, afraid) so the faces read at a few metres.

## Who

- `axl` — Axl, past seventy: lean, white hair, a short white beard (`beard`), a worn brown-grey coat; a cloth bundle in
  his right hand (`bundle`).
- `beatrice` — Beatrice, past seventy: small, grey hair in a knot, a long slate-blue dress, a red shawl over the
  shoulders and round the neck (`shawl_dress` and the scarf, both the look's `accent` colour) — the only red in the game.
- `wistan` — Wistan, about thirty-five: tall and broad, dark short hair, a long moss-dark coat, a sword at the left
  hip (`sword`).
- `boatman` — the boatman, ageless: tall, a long weathered grey-blue robe, a hood up over the head that leaves the face
  open (`cowl`), an oar on his right shoulder (`oar`: his right hand on its loom — the scene sets `boatman_reach` to a
  point before his right chest), a lantern hanging from his left hand (`lantern`, its point `flame`: the scene's light
  there, `"at": "boatman#flame"`).

## Parts

`beard` — a short beard on the chin, the mouth left clear, in the hair's colour. `bundle` — a tied cloth bundle hanging from the right hand (it
swings a little late). `cowl` — a hood open in front: over the brow, past the cheeks, down the nape onto the
shoulders. `oar` — from the right hand up over the right shoulder, the blade high behind. `lantern` — a small iron
lantern, its glass glowing, hanging from the left hand (swings a little late). `sword` — a sword in a leather scabbard at the left hip, the hilt forward, the point down
behind the leg.
