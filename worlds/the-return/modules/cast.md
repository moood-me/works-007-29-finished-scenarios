# cast — the people of «The Return» as the engine's people

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts' lengths
are a man's metres, multiplied by `F.fit.h` (the height as a share of 1.76 m).

## Style

`gouache` — made from the engine's `soft`, with natural proportions (the head a little large, so the faces read; the
shoulders not wider than a body's), the body and the cloth in broad flat planes like a brush's (`facets`, twelve sides; the face's front kept round), a tinted painted edge, flat colours lit by the scene's own light (`paint: lit`), working hands (`arms: hand`: a broad, long palm), legs in
trousers of some thickness (`feet: trouser`); `soldier` — the same in a soldier's high boots (`feet: jackboot`), the head a little longer and squarer in the jaw (a
man's). The face
`gouache`: the whites of the eyes and the irises (as open as the lids let them), the upper lids' dark line, the shade
under the eyes, brows of the hair's colour softened toward the skin (a dark heavy bar reads as a frown at any mood), the nose and the shade under it, the lips; a man's (`who: man`) also the shaved jaw's faint blue-grey shade under the chin. It takes `<id>_mood` by the engine's names, each
bolder than the engine's own (`MOODS` in cast.js) so that it reads at three or four metres: `tired` — heavy lids, the
brows' outer ends down; `sad` — grief held in and waiting: the brows' inner ends up, the eyes open, the lips parted;
`thinking` — wary: the brows drawn down and together, the eyes narrowed; `angry` — sullen, a boy's grown-up
frown: the brows' inner ends hard down, the mouth set. Like the whole world: gouache on rough paper,
sand, ochre, grey-green cloth.

## Who

- `ivanov` — Captain Alexei Alexeyevich Ivanov, 36: lean but broad-shouldered, upright; a greatcoat (`greatcoat`: fitted
  to the waist, the trunk in its cloth — `bodice` —, a skirt of heavy cloth from the belt to the calves, flaring a little,
  long sleeves) and its own (`coat_kit`: the leather belt and its brass buckle, two rows of four brass buttons, the
  shoulder boards, the collar), a side cap (`pilotka`: worn straight, its darker flap, the red star), high boots (`soldier`), the kit bag
  carried by its tied neck in his left hand (`sack`: it hangs from the hand, a little late as the hand moves).
- `ivanov_home` — Ivanov at home, not yet decided to stay: the khaki tunic (`tunic`; `tunic_kit`: the belt and its buckle,
  the standing collar, the placket's three buttons, the breast pockets, the shoulder boards), the breeches in his high
  boots, the side cap still on, the greatcoat thrown over his shoulders, open (`coat_over`: a shell of heavy cloth from
  its turned-down collar over the shoulders and the arms to the calves, its fronts apart, its own boards; it does not
  swing). The scenario's sign: «шинель на плечах или на гвозде» — on the nail when he stays.
- `lyuba` — Lyubov Vasilyevna, his wife, 33: slight; a faded blue dress, a grey linen apron (`apron`), a white kerchief
  (`kerchief`).
- `petrushka` — Petrushka, the son, 11: thin but square-shouldered; a cut-down man's shirt, patched trousers, a man's old
  boots.
- `semyon` — Semyon Yevseyevich, 50: a widower, the night watchman at the store by the station; a little stooped, grey
  and cropped, his cap off indoors; an old dark jacket (`jacket`) over a grey collarless shirt, worn trousers, boots.
- `nastya` — Nastya, the daughter, 5: small, fair, round-faced; a faded rose cotton frock (`dress`), bare legs, little
  shoes.

## Motions

The engine's `stand` and `walk`; the world's: `hands_behind` (stands still, the hands clasped behind the back, looking
far ahead; a loop).
