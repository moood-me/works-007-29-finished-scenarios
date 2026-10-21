# The Dragon's Lair

The lair of chapter IV: the path along the rim of a wide stone pit in the mountains, and on the pit's floor Querig, the
old she-dragon, lying asleep, mist coming from her nostrils and welling up out of the pit. Dawn, the sun just up on the
right over a broken ridge; the mist lit pale rose, the people in front always clear. Stage 2 (look): Sir Gawain stands
before the pit leaning on his great sword, facing Axl (and the viewer); Axl and Beatrice hand in hand on the path,
turned to him — Beatrice looking at Axl; Wistan up the slope on the left, looking at Gawain — standing, breathing, no
moves.

- Land: `lib.land` (relief.js calls it): the ground falling 25 cm a metre from the viewer (−2 m at 9 m), climbing
  toward the mountain past 26 m, rising on the left (the slope the path climbs) and far right. The pit: `lib.PIT`
  (centre 11.5 across, 21 ahead, radius 12 m, 3 m deep, its floor flat inside 0.68 of the radius) — wide and shallow so
  that from the start the whole of her, head too, shows over its near lip (a deeper or narrower pit hides her head
  behind its left wall); `lib.pitQ(a, d)` — how far a place is from its middle in radii. `land` — the draped plane
  (centre 140 m ahead: a place `d` ahead is at y = 140 − d): heath and scree, the path, the pit's lip, walls (streaked
  down their fall) and floor.
- `querig` — a card standing on the pit's floor (12.05 across, 21 ahead), seen side-on, head to the left; drawn at 1/K
  of her size and scaled by `K` (1.2) in each layer — her points are marked under the scale (they follow the canvas's
  transform). Layers `body` (breathes: animate scales it from the ground, a 6.5 s breath, by `breath`), `head`, `eye`,
  `lid` (lifted by `querig_eye`). Points `querig#nostrils`, `querig#eye`, `querig#head` (and her unnamed point).
- Her breath: particles `breath` (smoke at `querig#nostrils`) and `pit_mist` (big slow smoke over the floor), both
  `amount: "breath"` — at 0 no more comes, what is in the air drifts off. Mist bands (`mist_pit` billowing behind her,
  `mist_low` a thin veil at her feet, `mist_far`, `mist_mount`) drift left with the wind; their animate thins them by
  `clear`.
- `mountain` — a broken ridge far off (peak to the left), its faces turned from the sun a shade darker.
- Light: the sun `from: "sky#sun"` (low on the right, in front: the people's fronts lit by the ambient, rims from the
  sun). Looks `thick` and `clear` (the game's Mist ↔ Clear; `clear` with `breath` 0 is the morning after her death).
- People: `axl`, `beatrice`, `wistan`, `gawain` of the cast. Faces show only toward what is nearer the viewer than
  they are, so Gawain stands behind the couple and looks at Axl. Gawain's hands are set on his sword's hilt by
  `gawain_reach` — two points just before him (move them with him if he is moved; the sword is drawn from his hands
  straight down to the ground).
- A camera framing her closely (camera_target `querig`) goes down into the pit, round its wall.
- Copies (`crags`, `boulders`, `tufts`) are laid by `tools/lair_copies.py`, which writes them into scene.json (keep its
  PIT and the people's places as the scene has them).
