# cast — the people of «The Return» as the engine's people

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts' lengths
are a man's metres, multiplied by `F.fit.h` (the height as a share of 1.76 m).

## Style

`gouache` — made from the engine's `soft`, with natural proportions (the head a little large, so the faces read), round, a
tinted painted edge, flat colours lit by the scene's own light (`paint: lit`), working hands (`arms: hand`), legs in
trousers of some thickness (`feet: trouser`); `soldier` — the same in a soldier's high boots (`feet: jackboot`). The face
`gouache`: the whites of the eyes and the irises (as open as the lids let them), the upper lids' dark line, the shade
under the eyes, thick brows, the nose and the shade under it, the lips. It takes `<id>_mood` by the engine's names, each
bolder than the engine's own (`MOODS` in cast.js) so that it reads at three or four metres: `tired` — heavy lids, the
brows' outer ends down; `sad` — grief held in and waiting: the brows' inner ends up, the eyes open, the lips parted;
`thinking` — wary: the brows drawn down and together, the eyes narrowed. Like the whole world: gouache on rough paper,
sand, ochre, grey-green cloth.

## Who

- `ivanov` — Captain Alexei Alexeyevich Ivanov, 36: lean but broad-shouldered, upright; a greatcoat (`greatcoat`: fitted
  to the waist, the trunk in its cloth — `bodice` —, a skirt of heavy cloth from the belt to the calves, flaring a little,
  long sleeves) and its own (`coat_kit`: the leather belt and its brass buckle, two rows of four brass buttons, the
  shoulder boards, the collar), a side cap (`pilotka`: its darker flap, the red star), high boots (`soldier`), the kit bag
  carried by its tied neck in his left hand (`sack`: it hangs from the hand, a little late as the hand moves).
- `lyuba` — Lyubov Vasilyevna, his wife, 33: slight; a faded blue dress, a grey linen apron (`apron`), a white kerchief
  (`kerchief`).
- `petrushka` — Petrushka, the son, 11: thin but square-shouldered; a cut-down man's shirt, patched trousers, a man's old
  boots.

## Motions

The engine's `stand` and `walk`; the world's: `hands_behind` (stands still, the hands clasped behind the back, looking
far ahead; a loop).
