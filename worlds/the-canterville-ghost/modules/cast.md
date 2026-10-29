# cast — the people of “The Canterville Ghost”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`canterville` — the storybook's round soft figures (`soft`), heads a little smaller, with the world's face
`storybook` (eyes, brows, nose, mouth drawn bold — `<id>_mood` shows on it): faces read across a room.

## Who

- `virginia` — Virginia Otis, fifteen: slight, golden-brown hair loose, a white muslin frock with a pale blue sash.
- `simon` — Sir Simon de Canterville, the ghost: tall, gaunt, old, a grey-green doublet with puffed trunk hose (the
  garment `doublet`) and a cloak down his back, rusty manacles with a chain between them and irons on his ankles; his
  hair, beard, brows and ruff glow with his own pale light (`GHOSTLY`, a glowing colour), his eyes are red coals in dark
  sockets (the face `ghost`). A scene gives him a light of his own just before him (a light at his chest is inside him
  and leaves his front dark).
- `virginia_habit` — Virginia back from riding (the same girl, another look of hers): a riding habit of bottle-green
  cloth (the garment `habit`), a white stock at her throat (`stock`).
- `simon_garden` — Sir Simon in the Garden of Death, out of time: the same look without his irons (no `shackles`, no
  `fetters`).
- `otis` — Mr Hiram B. Otis, the American Minister: a black frock coat, a grey waistcoat, brown hair going grey.
- `mrs_otis` — Mrs Lucretia R. Otis: handsome, healthy, middle-aged; her dark hair up in a knot (`bun`), a gown of
  deep plum to the floor (the garment `gown`).
- `washington` — Washington Otis, the eldest son: fair-haired, good-looking, a dark blue-grey frock coat over a light
  waistcoat.
- `twin_star`, `twin_stripes` — the twins («Звёзды и Полосы»), ten years old, alike as two peas: navy short jackets
  and knickerbockers, white shirts and stockings, sandy hair.

## Parts

`ruff`, `beard`, `shackles` (manacles and the chain sagging from wrist to wrist), `fetters` (irons on the ankles, a
chain on the floor between), `cloak` (a flat swinging tube down the back: the engine hangs a sheet of cloth, `F.cloth`,
only before a garment) — Sir Simon's; `sash`, `stock` — Virginia's; `bottle` — the bottle of oil for the chains in the right hand
(Mr Otis's, by `otis_with`). `candle` — a candle in a brass candlestick in the right hand, upright
whatever the hand does, its flame glowing; its point `flame` is where a scene puts its light (`"at": "otis#flame"`;
whoever carries one, by `<id>_with: ["candle"]`).

## Motions (Kimodo)

The engine's `stand` and `walk`, and: `clasped` — stands, both hands clasped at the chest, a loop; `loom` — stands
with both arms raised over the head (the ghost's frightening), a loop; `offer` — stands, the right forearm held out
before the chest (holding something out), a loop; `upright` — stands upright, both hands clasped behind the back, a
loop; `brood` — sits (on a seat: `<id>_on`), the right hand to the brow, the left on the knee, tired, a loop; `sit_ground` —
sits on the ground, the knees up, the arms loose on them, looking ahead, a loop; `pray` — kneels upright, the hands
together at the chin, a loop.
