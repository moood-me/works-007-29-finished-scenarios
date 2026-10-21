# The Dragon's Lair

The lair of chapter IV: the path along the rim of a stone pit in the mountains, and on the pit's floor Querig, the old
she-dragon, lying asleep, mist pouring from her nostrils and welling up out of the pit. Dawn, the sun just up on the
right; the mist lit pale rose, the people in front always clear. Stage 2 (look): Sir Gawain stands on the path between
the others and the pit, leaning on his great sword, looking at Wistan; Wistan faces him; Axl and Beatrice hand in hand
behind Wistan — Axl looks at Gawain, Beatrice down at the dragon — standing, breathing, no moves.

- Land: `lib.land` (relief.js calls it): the ground falling 15 cm a metre from the viewer to the pit's rim (−1.65 m at
  12 m), climbing toward the mountain past 30 m, rising on the left (the slope the path climbs) and far right. The pit:
  `lib.PIT` (centre 9 across, 22 ahead, radius 10 m, 3.6 m deep, its floor flat inside 0.55 of the radius);
  `lib.pitQ(a, d)` — how far a place is from its middle in radii. `land` — the draped plane (centre 140 m ahead: a place
  `d` ahead is at y = 140 − d): heath and scree, the path, the pit's lip, walls (streaked down their fall) and floor.
- `querig` — a card standing on the pit's floor (9.2 across, 23 ahead), seen side-on, head to the left. Layers `body`
  (breathes: animate scales it from the ground, a 6.5 s breath, by `breath`), `head`, `eye`, `lid` (lifted by
  `querig_eye`). Points `querig#nostrils`, `querig#eye`, `querig#head` (and her unnamed point). From the near rim her
  lowest half-metre is hidden by its lip — she is seen lying below.
- Her breath: particles `breath` (smoke at `querig#nostrils`) and `pit_mist` (big slow smoke over the floor), both
  `amount: "breath"` — at 0 no more comes, what is in the air drifts off. Mist bands (`mist_pit` behind her, `mist_low`
  about her feet, `mist_far`, `mist_mount`) drift left with the wind; their animate thins them by `clear`.
- Light: the sun `from: "sky#sun"` (low on the right, in front: the people's fronts lit by the ambient, rims from the
  sun). Looks `thick` and `clear` (the game's Mist ↔ Clear; `clear` with `breath` 0 is the morning after her death).
- People: `axl`, `beatrice`, `wistan`, `gawain` of the cast. Gawain's hands are set on his sword's hilt by
  `gawain_reach` — two points just before him (move them with him if he is moved; the sword is drawn from his hands
  straight down to the ground).
- Copies (`crags`, `boulders`, `tufts`) are laid by `tools/lair_copies.py`, which writes them into scene.json (keep its
  PIT and the people's places as the scene has them).
