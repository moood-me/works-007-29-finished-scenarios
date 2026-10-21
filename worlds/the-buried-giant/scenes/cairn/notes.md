# The Giant's Cairn

The pass of chapters II and III: a round cairn of piled stones (the buried giant's), a shepherd's turf-roofed shelter
with a low fire before it, mist lying in the saddle and coming off the mountain beyond. Noon, the mist pale and lit
from inside; the people in front always clear. Stage 2 (look): Axl and Beatrice hand in hand, Wistan before the cairn
looking at Axl — standing, breathing, no moves.

- Land: `relief.js` (gentle climb ahead from 6 m, shoulders rising either side from 8 m) and the draped plane `land`
  (centre 110 m ahead: a place `d` ahead is at y = 110 − d) — grass, heather, the path past the cairn's left and up
  the saddle, stones.
- The cairn: a form (`kit.lump`, 2.6 m radius, 2.4 m high), point `cairn#top`.
- The shelter: unseen anchor `shelter` (facing 165) with its back wall, right side wall, posts, roof plane; the hearth
  before it (`hearth#fire`), its light `hearth_light` on `hearth`, flames and smoke particles.
- Mist: four drifting see-through bands (`mist_near`, `mist_mid`, `mist_far`, `mist_mount`) — the largest cost of
  the frame; keep them few. The mist's thickness is the light's looks `thick` and `clear` (the game's Mist ↔ Clear).
- Copies (`boulders`, `heather`, `tufts`) are laid by `tools/cairn_copies.py`, which writes them into scene.json.
- People: `axl`, `beatrice`, `wistan` of the cast; hands joined by `_reach`, looks by `_look`.
