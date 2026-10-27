# cast — the people of “The Ones Who Walk Away from Omelas” as the engine's people

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — the engine's people.md). Its
data (`cast.data.json`) holds the motions, written there by `put_motion`.

## Style

`omelas` — the engine's soft rounded figures (`soft`) in plain light colours under the scene's own light (`paint: lit`),
a fine line; the face `simple` — eyes, brows, a nose, a mouth, so that a face reads across a square and takes
`<id>_mood`.

## Who

- `ila` — Ila at twelve: slight, auburn hair loose, a light summer dress (`shift`), sandals; her mother's wooden flute
  (`flute`) in her hands.
- `ila_17` — Ila five years on (chapters 2–3): grown tall and slender, the auburn hair tied back (`ponytail`), a
  longer linen dress of sea-green (`frock`), sandals; the same flute.
- `pim` — Pim at nine, the neighbours' boy Ila teaches: small, tow-haired, a pale blue shirt, brown breeches,
  barefoot; a flute of his own (`flute`).
- `mev` — Mev, her grandmother, about seventy: small and solid, white hair in a bun, a dark blue-grey dress; the cellar's
  key on a cord on her breast (`key_cord`), a basket of flowers on her left arm (`basket`).
- `kor` — Kor at twelve: sunburnt, sturdy, dark short hair, an oat-coloured shirt, brown breeches, barefoot.
- `the_child` — the child in the cellar: it looks six, perhaps it is nearly ten; small and thin, the hair matted, a
  grey-brown rag of a smock (`rag`), barefoot, pale.
- The townsfolk: `rose_woman` (a woman in rose), `blue_man` (a man in pale blue), `old_man` (an old man in cream),
  `flower_girl` (a little girl in yellow).

## Parts

`flute` — the wooden flute held across between the hands (point `#flute`). `key_cord` — an old iron key on a cord round
the neck (point `#key`). `basket` — a wicker basket of flowers hanging from the left hand, swinging a little late. `lamp` — the cellar's small iron
lantern hanging from the right hand by its bail, its glass glowing (point `#lamp`: a scene's light there). `bowl` — a
small wooden bowl of porridge held before the waist in both hands (point `#bowl`). A scene says who has what
(`<id>_with`): in the cellar Ila has the lamp, Mev the key and the bowl.

## Motions (Kimodo)

`sit_flute` — sits on a low wall, knees together, feet on the floor, holding a small thing up to the mouth with both
hands (a loop; Ila on the fountain's rim, her hands then set by `reach`); `hands_behind` — stands, the hands clasped
behind the back, breathing (a loop).
`lamp_up` — stands holding a lantern raised before the face in the right hand, arm forward (a loop; Ila in the cellar,
the part `lamp`); `huddle` — sits on the floor, knees drawn up to the chest, arms round the legs, rocking a little (a
loop; the child); `hold_bowl` — an old person standing bowed over a bowl held in both hands before the waist (a loop;
Mev in the cellar, the part `bowl`); `stiff` — stands stiff, arms hanging, the hands balled into fists (a loop; Kor in
the cellar).
`play_flute` — stands playing a flute held sideways at the mouth, swaying a little (a loop; Pim in the yard, his hands
set on it by `reach`); `sit_lap` — sits on a low bench, a small thing held in the lap with both hands, watching someone
(a loop; Ila at seventeen on the yard's bench); `bowl_upright` — stands upright holding a bowl in both hands before
the waist (a loop; Mev in the kitchen door, the part `bowl`).
