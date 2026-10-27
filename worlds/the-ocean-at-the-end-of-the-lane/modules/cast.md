# cast — the people of «The Ocean at the End of the Lane»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). Figures of
shapes in the world's style `lane`: the engine's round, big-headed `soft` figures, coloured and shaded by the scene's
light (`paint: lit`), simple faces (`<id>_mood` shows on them).

## Who

- `boy` — the boy, seven: small and slight, brown hair, a blue-grey jumper, grey shorts, long grey socks, sandals.
- `lettie` — Lettie Hempstock, "eleven — for a long time": short red-brown hair, a faded green frock to the knee
  (`frock`, the cast's garment) over a mustard cardigan, green wellingtons.
- `gran` — old Mrs Hempstock: ancient and small, a white bun, a long dark plum dress, a grey shawl.
- `dad` — the boy's father, in shirt-sleeves after work: a white shirt, a dark wine tie (the part `tie`; its middle the
  point `dad#tie`), grey trousers, short dark hair.
- `ursula` — Ursula Monkton as people see her: young, long honey hair, a grey dress below the knee (`shift`, the cast's
  garment), a pink scarf at her throat. Her pink coat is not on her: it hangs in the hall (the house's scene).
- `sister` — the boy's sister, five: a fair ponytail, a red pinafore (`frock`) over a white blouse, white socks, red shoes.

## Parts

- `tie` — Dad's tie (in his look).
- `book` — the boy's book, open in both hands before his chest, tipped away from him: given with `boy_with: ["book"]`
  (with a motion that holds the hands so — `reading`); its middle the point `boy#book`.

## Motions (Kimodo, put with put_motion)

- `pockets` — stands relaxed, both hands in the pockets, shifting the weight a little (a loop).
- `perch` — sits on something high, the legs dangling and swinging slowly, the hands on its edge (a loop; the seat
  through `<id>_on`).
- `sit_calm` — sits upright on a chair, the hands folded in the lap (a loop; the seat through `<id>_on`).
- `reading` — stands holding an open book before the chest in both hands, reading (a loop; with the part `book`).
- `shy_sway` — a child standing shyly, the hands clasped before her, swaying a little (a loop).
