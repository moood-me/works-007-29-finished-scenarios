# The Acquaintances' Door — notes

The game's place 4 (scenario §4), the day «Дверь» (Д3): a narrow landing on the stair of a Petersburg house, the
acquaintances' door with its bell pull; the Dreamer stands before it with Nastenka's letter, Glasha opens. Stage 4:
the people stand (breathing), nobody walks, the camera does not move, no pieces yet.

## The look

The world's lithograph touched with watercolour (`lib.js`: `wash`, `hatch`, `cut`, `box` — the same hand as the
embankment's and Grandmother's lib.js; keep them alike — and `plaster`: a stair's warm ochre distemper with its darker
dado, cracks in ink, the grime of hands). By day: a grey-pearl light from the tall stair window ahead over the well and
from a window behind the viewer (out of the picture); worn yellowish limestone slabs, a dark handrail on cast-iron
balusters, a bottle-green panelled door with a brass plate. Light, not dark: faces read.

Light (the engine's): `front_window` — daylight of `front_glass`, a window behind the viewer, lighting the faces from
the front-left; `stair_window` — daylight of `window_glass`, the tall window over the well; ambient 0.86, `inside` 0.55,
a little dust in the air.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking along the landing)

- The landing (`floor`): across −1.0…1.4, 0…6 deep, the ceiling at 3.3 (`ceiling`).
- Left: the well — the railing along its edge at across −1.0 (`rail`), the flight going down beyond it from the back
  wall at the landing's level to the landing below at −2.4 near the viewer (`flight`, `well_floor`), the well's side
  wall (`wall_left`, its dado climbing with the steps). «Шаги ниже по лестнице» come from there; the Dreamer leaves that
  way.
- Ahead: the stairwell's back wall with the tall stair window (`wall_back`, `window_glass`).
- Right: the wall with the door (`wall_right`, the doorway cut at 3.2…4.15 m in, 2.15 m high; point
  `wall_right#doorway`). The door (`door`) is hinged at the doorway's near side and opens into the flat (state `door`,
  turned by `script.js`; point `door#handle`). The bell pull just beyond the doorway (`bell`, its brass handle at 1.17 m: point `bell#handle`).
- Through the doorway: the flat's hall (`hall` — its far wall: ochre paper, an inner doorway, a peg rail with a cloak
  and a bonnet; `hall_floor`, `hall_ceiling`).

## The people (the world's `cast`)

- `dreamer` — before the door, a step from it (across 0.85, 3.95 m in), turned mostly to the door and a little to us
  (120°), the letter in his right hand at the chest (`dreamer_with: ["letter"]`, or `["letter_stained"]` with the mark
  Пятно), his left hand on the bell pull (`dreamer_reach.l: "bell#handle"`), his face to us (`dreamer_look` a point
  between the door and the viewer), `thinking`.
- `glasha` — new in the cast: in the open doorway (across 1.5, 3.9 m in), turned to him and to us (245°), her right
  hand held out for the letter (`glasha_reach.r` a point before him), a smile. `glasha_here` false while the door is
  shut.

The moment of the silence (⏸, before he pulls): `door` shut, `glasha_here` false, his hand on the cord. The moment she
opens: `door` open, `glasha_here` true (the scene's own state is this one, with his hand still on the cord — let it
go with `dreamer_reach: {"l": null, …}` as the piece needs).

## State

`door` — shut / open (the game's; it swings over a second: `script.js` moves `door_turn`, 270 shut … 350 open, the
scene's own). The people's keys are the engine's
(`<id>_here`, `_look`, `_reach`, `_with`, `_mood`).

## What moves

Dust in the window's light, the two breathing. Nothing is painted again while the scene plays.

## Done, and what is left

Stage 4 is done (2026-10-29): the place, the door that swings, Glasha, the Dreamer with the letter (or the stained
one), the points the game marks on. The game stopped at this half-stage (Pavel, 2026-10-29): no pieces yet. Left for
stage 5:

his hand pulling the cord, the bell, Glasha opening, taking the letter into her apron or watching him go, the door
closing, him going down the stair — the pieces `bell`, `apron`, `wrong_door` of the game's contract
(`docs/new-games/belye-nochi/game.md`, «Stage 5 — pieces»), their motions, the camera, the «Contract for the check».
