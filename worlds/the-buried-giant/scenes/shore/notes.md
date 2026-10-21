# The Shore

The cove of chapter V and the finales: a shingle beach curving round still water, the boatman's boat drawn up with
its stern afloat, the flat stone by its bow where the candle stub burns, the island low in the sea haze under the sun.
A clear evening — the game's first after the mist has gone — going to night, when the lantern and the candle are the
only warm lights on faces. Stage 2 (look): Axl and Beatrice hand in hand, the boatman before his boat with the oar on
his shoulder and the lantern in his hand, looking out at the viewer — standing, breathing, no moves.

- Land: `lib.land` (relief.js calls it): the shingle sloping 3 cm a metre to the water (the plane `sea`, at −0.3 m),
  the cove's arms curving out to sea (`0.012 · across²`), the grassy bank on the left, level far off (a floor 1.5 m
  under the sea) — so the far cards (`island`, `headland_l`, `headland_r`, `sea_haze`) stand at elevation 1.2 to sit
  on the water. `lib.shoreAt(across)` — where the water's edge is; the beach's wet band, the weed and the foam follow it.
- `beach` — the draped plane (centre 25 m ahead: a place `d` ahead is at y = 25 − d): shingle, wet band, weed, pebbles,
  the bank and the path climbing it (the «Тропа» finale's way). `foam` — a plane at the water's level, its layer run up
  and back by animate.
- `boat` — a form lofted over 13 frames (bow at −x, facing 150: the bow on the shingle by the stone). `stone` — a
  form (`kit.lump`), its point `stone#top`. `candle` on it: the flame a layer (its light `candle_light`, `on`: `candle`).
- `sky` — the evening (sun at `sky#sun`, where the light `sun` comes from — its glitter path on the water), clouds
  drifting; the night and the stars layers shown by `night` (animate). The look `night` puts the sun out.
- People: `axl`, `beatrice`, `boatman` of the cast. The boatman's right hand is set on the oar's loom by
  `boatman_reach` (a point before his right chest: move it with him if he is moved); `lantern_light` is at
  `boatman#flame`. `lantern` 0.35 by day (a faint glow), 1 at night. The boatman casts no shadow (`"shadow": false`): the lantern
  hangs against his robe, and the robe's shadow from it lay over the shingle as a hard-edged wedge.
- Copies (`rocks`, `grass`) are laid by `tools/shore_copies.py`, which writes them into scene.json.
