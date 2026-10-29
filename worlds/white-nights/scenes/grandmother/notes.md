# Grandmother's Room — notes

The game's place 3 (scenario §4), the room downstairs in Grandmother's little house, on Sunday after mass (Вс1): the
look of the world indoors for the owner's review — the same lithograph touched with watercolour as on the embankment,
now by day, and the people in it: Grandmother (new to the cast), Nastenka at home, the Dreamer as a guest. They hold
their poses (breathing, a page turned now and then); nobody walks, the camera does not move, no showcase yet. Stage 4
(2026-10-29) opened the door to the stairs with the landing and the flight beyond it, gave the people spots, the Lodger
and Fyokla, the pin to whoever is pinned, and the memory's morning light; the mezzanine above is its own scene,
`mezzanine`.

## The look

Warm and close after the cool embankment: old cream wallpaper with stripes and small sprigs, painted plank floor, a
low whitewashed ceiling with two dark beams, going into a warm shade near the viewer, a white tiled stove, a geranium in the window (the one bright red), a
claret wing armchair. Everything in daylight colours with the fine sepia ink line (`lib.INK`) and the embankment's lithograph hand (`lib.wash` — an uneven watercolour wash on the wallpaper, the floor, the ceiling, the armchair, the stair; `lib.hatch` — the ink's hatching in the shade under the frieze, over the skirting, low on the armchair, on the stair's stringer and the stove's side; copied from the embankment's lib.js — keep the two alike). It is day and the room is
light; faces and hands read clearly.

Light (the engine's): the day comes in at a window on the left wall beside the viewer (`side_window`, from
`window_left_glass`, out of the picture) — it lights the faces from the front-left; a weaker day from the back window
(`back_window`); the sun through the left window (`sun`, `through` its opening) lays a warm patch on the floor by
Nastenka's bench, its beam shown by a little haze (`shafts`) and dust motes in it (`dust`); the lampada before the icon
(`lampada`, from `icon#flame`) — a small red-gold warmth in the corner. High ambient, `inside` 0.5.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking at the back wall)

The horizon is low (0.3): the floor is seen from about 2.4 m in, so the three can stand a metre nearer than the room's
middle and read large, the ceiling only a strip at the top.

The room: across −2.65…2.75, 0…6 deep, the ceiling 2.8 (`floor`, `ceiling`, `wall_back`, `wall_left`, `wall_right`;
`lib.wallpaper`, openings cut by `lib.cut`).

- Back wall (6 m): the window at across −1.1, 0.85…1.95 m up (`window` — frame, muslin; `window_glass` — the street's
  day seen through it, glowing; `sill`, `geranium`); the tiled stove in the back-left corner (`stove`, `stove_side`);
  over the armchair the oval portrait of the general who once courted her (in `wall_back`); the table at across 1.35
  (`table`, `table_top`, `table_things` — the Lodger's books, a cup, the knitting); the wall clock over it (`clock`,
  its pendulum a layer swung by `clock.animate.js`; point `clock#face`); the icon across the back-right corner with its
  towel and lampada (`icon`, point `icon#flame`).
- Left wall: the doorway to the stairs, 3.6…4.5 m in (cut in `wall_left`; point `wall_left#door`), its door
  (`door`, hinged at the doorway's back side, opening into the room: state `door` — shut, ajar, open —, swung over a
  second by `script.js`; point `door#latch`). Through it, when
  open: the landing outside (`landing`, boards), the flight going down toward the back of the house along the stair's
  far wall (`steps`, `stair_wall` with its rail and a little window — `stair_glass`, its daylight `stair_day`;
  `stair_ceiling`) — «пролёт в несколько ступеней», where people go out. Seen from the viewer only as a narrow wedge
  through the doorway: a person on the landing (spot `landing`) stands in it. The window that lights the room, 1.4…2.4
  m in, beside the viewer.
- Right wall: the steep stair up to the mezzanine, its foot 2.6 m in, its top under the hatch at 4.6 (`stair` — a tilted
  plane of treads; `stair_side` — stringer, newel post, rail; the hatch painted in `ceiling`).
- The armchair a little right of the middle, brought forward, its seat at across 0.45, 3.7 in, 0.42 up (`chair_back`,
  `chair_seat`, `chair_arms` — two copies, `chair_front`); the low bench at its left side, the seat at across −0.45,
  3.42 in, 0.34 up (`stool`, `stool_top`).
- A striped runner from the door toward the armchair (in `floor`).

## The people (the world's `cast`; their spots — `lib.SPOTS`, laid out by `script.js`)

Each person's place, turn, motion and seat come from the key `<id>_spot` (script.js sets `<id>_a`, `_d`, `_turn`,
`_do`, `_on` at once when the scene opens and whenever the spot changes). Who is here, where they look, what they hold
and their faces are the game's (`<id>_here`, `_look`, `_with`, `_reach`, `_mood`). Faces kept to us: give `_look` a
point between the one they look at and the viewer (a look straight across the room shows a profile).

- `babushka` — `chair`: in the armchair (the cast's `seated`), facing the room and us; blind, `babushka_look: null`.
- `nastya` — at home (`look.garment: frock`). `stool` (default): on the low bench at Grandmother's side, the book open
  (`read`, `_with ["book"]`), a hand's breadth from the armchair; `stand`: stood up beside the bench (a little to its
  left, still pinned: the pin stretches); `door`: just inside the door, turned to the room — the memory: with the
  bundle (`_with ["bundle"]`, her hands before her waist by `_reach`, e.g. `{"r": [-1.95, 3.74, 1.0], "l": [-1.85,
  3.88, 1.0]}`); `landing`: out on the landing, seen through the door; `table`: by the table at the back.
- `dreamer` — `door` (default): come in from the door, his hat low in his hand (`_with ["hat_low"]`); `table`: by the
  table at the back, where the letter is laid and the hat left; `beside`: a step from Nastenka's bench, to take her
  hand; `stool`: on the low bench, reading to Grandmother («Булавка»: `_with ["book"]`, `pin: "him"`); `landing`:
  out on the landing.
- `lodger` — new here (`lodger_here` false by default). `chair`: standing at the armchair's right, the two men at the
  room's two sides and Nastenka between, his hat at his chest (`_wear {"hat": "none"}`, `_with ["hat_hand"]` — the
  defaults); `door`: just in at the door; `stair`: at the foot of the little stair to the mezzanine (the memory: his
  books, `_with ["books"]`, the hands as hers); `landing`: out on the landing.
- `fyokla` — new in the cast, Grandmother's deaf servant (`fyokla_here` false by default). `stove`: by the stove at the
  back; `table`: by the table.
- `pin` — Grandmother's pin: a thin bright steel line with an ink edge from Grandmother's lap to the one pinned to her
  (state `pin`: `pinned`, `taut` — to Nastenka; `him` — to the Dreamer; `off`), laid each frame by `pin.animate.js`
  along the way from `babushka#hips` to `<who>#hips` (a little below) and drawn over its middle only; its head and a
  glint glow; its point — the element's own, `pin` — the line's middle (М9's mark).
- `hat` — the Dreamer's top hat lying on the table by the wall (state `hat_table`; point `hat#hat`). Its card stands at 3.2 m, in
  front of both laps (the `stand` spot keeps Nastenka behind it).

## The memory

`time` memory — the room a year ago, as Nastenka tells it (2.4): a cool, pale early-morning light (`script.js` sets
the look `memory`: the lampada nearly out, the day's sun off; `morning_sun` low through the left window, long across
the floor). The scenario's frame: `babushka_here` false, `dreamer_here` false, `pin` off, `door` open, `lodger_here` true at `stair` with the books,
`nastya_spot` `door` with the bundle.

## State

`lampada` 0…1 — the icon lamp's light and glow; `time` — sunday / memory; `door` — shut / ajar / open; `pin` —
pinned / taut / off / him; `hat_table` — his hat on the table; `babushka_spot`, `nastya_spot`, `dreamer_spot`, `lodger_spot`, `fyokla_spot` (above). The
people's keys are the engine's. `door_turn` (90 / 75 / 5) and `memory` (the look, 0…1) are the scene's own, moved by
`script.js` from `door` and `time`.

## Done, and what is left

Stage 4 is done (2026-10-29): the door and the stair beyond it, the spots, the Lodger and Fyokla, the pin to whoever is
pinned, the hat on the table, the memory's morning light. The game stopped at this half-stage (Pavel): no pieces yet.
Left for stage 5: the pieces `memory`, `after_mass`, `knock`, `stairs_out`, `stand_pin`, `table`, `turn`, `talk`,
`refuse`, `unpin_go`, `pinned`, `rustle` with their motions (`knock`, `unpin`, `search_hands`, `hat_on`…), М6 and М9,
the camera — `docs/new-games/belye-nochi/game.md`, «Stage 5 — pieces».

## What moves

The clock's pendulum, the lampada's flicker, the dust in the sun, the pin's glint going with them, Grandmother
breathing, Nastenka reading and turning a page. Nothing is painted again while the scene plays.
