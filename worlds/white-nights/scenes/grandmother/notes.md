# Grandmother's Room — notes

The game's place 3 (scenario §4), the room downstairs in Grandmother's little house, on Sunday after mass (Вс1): the
look of the world indoors for the owner's review — the same lithograph touched with watercolour as on the embankment,
now by day, and the people in it: Grandmother (new to the cast), Nastenka at home, the Dreamer as a guest. They hold
their poses (breathing, a page turned now and then); nobody walks, the camera does not move, no showcase yet.

## The look

Warm and close after the cool embankment: old cream wallpaper with stripes and small sprigs, painted plank floor, a
low whitewashed ceiling with two dark beams, a white tiled stove, a geranium in the window (the one bright red), a
claret wing armchair. Everything in daylight colours with the fine sepia ink line (`lib.INK`). It is day and the room is
light; faces and hands read clearly.

Light (the engine's): the day comes in at a window on the left wall beside the viewer (`side_window`, from
`window_left_glass`, out of the picture) — it lights the faces from the front-left; a weaker day from the back window
(`back_window`); the sun through the left window (`sun`, `through` its opening) lays a warm patch on the floor by
Nastenka's bench, its beam shown by a little haze (`shafts`) and dust motes in it (`dust`); the lampada before the icon
(`lampada`, from `icon#flame`) — a small red-gold warmth in the corner. High ambient, `inside` 0.5.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking at the back wall)

The room: across −2.65…2.75, 0…6 deep, the ceiling 2.8 (`floor`, `ceiling`, `wall_back`, `wall_left`, `wall_right`;
`lib.wallpaper`, openings cut by `lib.cut`).

- Back wall (6 m): the window at across −1.1, 0.85…1.95 m up (`window` — frame, muslin; `window_glass` — the street's
  day seen through it, glowing; `sill`, `geranium`); the tiled stove in the back-left corner (`stove`, `stove_side`);
  over the armchair the oval portrait of the general who once courted her (in `wall_back`); the table at across 1.35
  (`table`, `table_top`, `table_things` — the Lodger's books, a cup, the knitting); the wall clock over it (`clock`,
  its pendulum a layer swung by `clock.animate.js`; point `clock#face`); the icon across the back-right corner with its
  towel and lampada (`icon`, point `icon#flame`).
- Left wall: the door to the stairs, 3.6…4.5 m in (painted in `wall_left`; point `wall_left#door`) — the Dreamer
  stands by it; the window that lights the room, 1.4…2.4 m in, beside the viewer.
- Right wall: the steep stair up to the mezzanine, its foot 2.6 m in, its top under the hatch at 4.6 (`stair` — a tilted
  plane of treads; `stair_side` — stringer, newel post, rail; the hatch painted in `ceiling`).
- The armchair in the middle, its seat at across 0.25, 4.6 in, 0.42 up (`chair_back`, `chair_seat`, `chair_arms` — two
  copies, `chair_front`); the low bench at its left side, the seat at across −0.52, 4.32 in, 0.34 up (`stool`,
  `stool_top`).
- A striped runner from the door toward the armchair (in `floor`).

## The people (the world's `cast`: modules/cast.md)

- `babushka` — Grandmother in the armchair (`babushka_on` the seat, the cast's `seated` loop: still, the hands on her knees),
  facing the room, her blind eyes turned straight at the guest (`babushka_look: "dreamer"`).
- `nastya` — Nastenka on the low bench at Grandmother's side, at home (her look over the character: the dress without
  the mantle, no bonnet, her hair up), turned half to Grandmother (145°), reading to her (the cast's `read` loop, the
  part `book`, looking at it: `nastya#book`).
- `dreamer` — the Dreamer by the door, 4 m in, turned to them (110°), his top hat held before his chest in both hands
  (`dreamer_with: hat_hands`, his hands put there by `dreamer_reach`), looking at Nastenka, a shy smile.
- `pin` — Grandmother's pin: a thin bright line from her dress to Nastenka's, laid each frame by `pin.animate.js` from
  `babushka#hips` to `nastya#hips` (a little below), a glint on it (the engine's glow). It follows them as they breathe;
  if Nastenka stands, it stretches with her — when the game unpins her it will need a key to put it away.

## State

`lampada` 0…1 — the icon lamp's light and glow. The people's keys are the engine's (`<id>_on`, `_do`, `_look`, `_with`,
`_reach`, `_mood`).

## What moves

The clock's pendulum, the lampada's flicker, the dust in the sun, the pin's glint going with them, Grandmother
breathing, Nastenka reading and turning a page. Nothing is painted again while the scene plays.
