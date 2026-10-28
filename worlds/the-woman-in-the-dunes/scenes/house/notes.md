# The House

The one room of the woman's house at the bottom of the pit (stage 2 of the game: the look — people stand; only light,
sand, steam and the hearth move). The places of the scenario: supper under the umbrella (I-1), «Ты знала?» (I-4), the
beads (II), the radio and the child (IV, V) — all here.

- **Frame** — `picture` camera, horizon 0.36; the eye at the room's open front looking at the back wall (5 m). The room
  is x −2.8…2.8, d 1…5; the cross-beam `beam` at 2.6 m ahead, 2.2 m up, closes the frame's top. Floor seen from about
  2.7 m ahead.
- **Walls** — `back_wall` (d 5): boards with sand seeping through the seams (`lib.boards`), the open door at x −2.1…−1.2
  (cut out of the painting; `door_opening` is its unseen shape, the light `door_light` comes in at it), the plank leaf
  slid aside, the water jar, the shelf, her strings of beads (the one bright accent), a barred window with the sand
  pressed against it, his insect net in the corner; over 2.8 m the roof's sooty underside. `wall_left`, `wall_right`
  (gable ends): boards up to the roof's slope, sand baskets; a straw rain-cape, her spare robe, sandals.
- **Floor** — `floor`: boards, sand in the seams, the entry's trodden earth with sand fanned in from the door, three
  straw mats, the sunken hearth at (−0.9, 3.0) with its coals (glow `floor#embers` → light `hearth`).
- **Things** — `kettle` on the pot-hook over the hearth (point `kettle#spout`, `steam`); `lamp` hung from the beam
  (glow `lamp#flame` → light `lamp`; its layer stirs a little); `supper`: his tray, the oiled-paper umbrella on its side,
  the sand heaped where `sand_trickle` comes down from the roof (its source hidden behind the beam).
- **Outside** — through the door: `outside_sand` (the pit's floor, her trodden way) and `outside_wall` (the pit's wall),
  lit by `sun` by day and `moon` by night.
- **People** (the world's `cast`): `woman` behind the hearth, `man` by his tray, looking at each other; no `man_with` net here —
  his net leans in the corner. Faces are lit from the front by the lamp hanging between them and the eye.
- **Light** — `night` 0 (day: the pit's white-gold light at the door) → 1 (night: moonlight, the room a clear blue
  dusk, still readable); `lamp` 0…1. `motes` — sand dust in the air, seen where light falls; `embers` — sparks over the
  hearth.
