# The Tapestry Chamber

Stage 2 of the game (the look), the second scene: Sir Simon's own room on an autumn afternoon (chapter 3, 3.1–3.2) —
the same two people as in the library, in another light: no midnight and no looming, a tired old man in the window
and the girl who has come in at the door. People stand and sit and breathe; no motion of people, no camera moves.

- **Where things are.** Camera `picture`, horizon 0.42. A room 6.5 m wide, 3.1 m high, from 0.9 m to its far wall at
  5.4 m: the floor, the beamed ceiling (a card laid face down, `tilt` −90), plaster over a low oak dado, and the old
  hunting tapestries (the lib's `tapestry`: millefleurs, trees, a stag, hounds, two hunters, faded; `wall`, `arch`).
- **The far wall** (`back_wall`): a tapestry on the left; on the right the deep window under a Tudor arch (x 0.6…2.6,
  0.5–2.7 m), cut through. Its embrasure is `embrasure` (two copies, its stone sides), the window seat `seat` (a plane
  at 0.48 m with its cushion) and `seat_front`; the glass is `window` 0.5 m behind the wall's face (stone, two mullions
  and a transom, diamond leading), and through it the avenue: `lawn`, `avenue` (the gravel walk), `lime` (copies: two
  rows of limes in yellow, their crowns a layer stirring in the wind), `park` (woods far off), `sky`, and `leaves`
  falling among the limes.
- **The left wall**: a tapestry and the door (4.2–5.2 m away) under its arch, its leaf `door` standing ajar out into
  the corridor (`corridor`, `corridor_floor` seen through it). **The right wall**: a tapestry nearer, and the old
  mirror further back in its brown-gilt frame (`mirror`: a plane, `reflect`, rough and weak — it shows the window
  dimly), an oak chest under it.
- **People** (cast: modules/cast). Sir Simon sits on the window seat (`simon_on`), `brood` — his right hand to his brow,
  the left on his knee — `tired`, looking at the floor before him, his pale light (`ghost`) just before him. Virginia,
  in her riding habit (`virginia_habit`), stands at the far end of the room by the door, hands behind her back
  (`upright`), looking at him with pity (`sad`); she is level with him so her face is seen in profile.
- **Light.** The low sun through the window (`sun`, `through` the opening at the glass: its patch on the floor, its
  shafts in the haze about him), a warm glow inside the window (`daylight`), his own pale light. Warm, golden, still.

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it): the game names a piece in `beat`, it plays from its start (or on
from the piece before, if it is `after` it) and tells its moments. What the scene got for them:

- **Keys.** `evening`, `night` (looks: the light, the sky's layers `dusk` and `night`, the night avenue `night_view` in
  the window, the moon `moon` through the window on `night`); `vision` (М5: a look dimming the room, and the little
  moonlit garden with its yew, `vision`, in the window); `dark` (a look: the room black but his light — `ghost_dark`,
  stronger, on `dark`); `wall` (the wall behind the tapestry: its two leaves `wall_l`, `wall_r` — the middle of the far
  wall's tapestry, x −2.0…−0.8, cut out of `back_wall` and painted the same — swing back into a narrow dark way of stone,
  `passage`, `passage_side`, `passage_floor`, `passage_top`, to 8.5 m); `stir` (the tapestry on the leaves sways on its
  rod: their animate); `shapes` (shadows and wings in the dark way: `shapes`, glowing dim violet layers drifting);
  `stub` (none / sill: `stub` on the window seat by the glass, point `stub#stub` / hand: the cast's `stub` in his hand, by
  the script); `turnip` (the twins' turnip head and placard by the seat, `turnip#turnip`, `turnip#placard`); `lantern`
  (Washington's lantern on the floor with its light, `floor_lantern#lantern`); `candle_floor` (`candle_floor#flame`);
  `door` (the door's facing: 90 shut, 120 ajar as in the look); the people's place keys; the candles' lights
  (`virginia_candle`, `otis_candle` at `<id>#flame`) and the held lantern's (`lantern_held` at `washington#lantern`, by
  the script); Sir Simon's light kept 0.6 m before him by the script (`ghost_a`, `ghost_d`; over the seat while he
  sits), out while he is not here (`ghost_light`).
- **People.** `otis`, `washington` (`_here` false by default, in the corridor beyond the door); every person walks by
  `<id>_a`/`<id>_d`.
- **The game's keys** read by pieces: `plays` (hand_down), `shares`, `trap` (lantern), `candle_out` (candle_room — the
  contract said `virginia_with` []; the piece starts her with the candle or the dead candle-end by this key, so its
  start can name her hands).
- **«The dark behind the wall»** (the game's place `dark`) is the piece `dark`: the room with `wall` 1, `dark` 1,
  `shapes` 1, the two standing hand in hand in the dark way, the camera through the opening.

Pieces (seconds without lines). Shots: the room is small and the operator comes near — a contract's «medium» is
`full` here, its «close» `medium` (nearer it went into a seated figure).

| piece | after | what | start |
| --- | --- | --- | --- |
| insulted | — | on the seat he rubs his sleeve, gets up, listens at the right wall, back to the seat | night |
| rehearse | — | before the mirror: looms, then bows to it | evening |
| candle_room | — | she comes in with her candle (or the dead candle-end), to the window, whispers, sets it on the seat | night, he away |
| stub_sleeve | — | on the seat he turns her candle-end, hides it in his sleeve | day |
| turnip_shake | — | the turnip by the seat; he shakes his chains at it | day |
| leaves | — | the door opens, she comes in to her place by the wall | the afternoon |
| reuben | leaves | he gets up, looms, sits back | |
| talk | leaves, reuben | she walks nearer (1.6 m), a two-shot | |
| sandwich | talk | she holds out the parcel; he takes it | |
| stamp | talk, sandwich | she stamps | |
| wall_parts | talk, sandwich, stamp | the tapestry stirs, the wall parts; he stands, holds out his hand | |
| into_wall | wall_parts | hand in hand into the opening; the wall shuts | |
| hand_down | wall_parts | he bows (plays) or sits back; the wall shuts; she runs out | |
| dark | — | the two in the dark way, shapes passing | dark |
| lantern | — | Washington with his lantern: pounds and sits (shares) / goes (watch) / sits | evening |
| knock_evening | — | Mr Otis with a candle knocks on the tapestry | evening |
| wait_wall | — | Mr Otis in his gown knocks, sets the candle down, sits; the wall parts, she steps out with the casket | night |
| candle_last | — | Mr Otis comes in with a candle and sits on the floor before the tapestry; the camera pushes in | night |

## What is not right yet

- Virginia's face is seen only in profile: whoever looks at him from nearer the viewer than he is shows the back of
  the head; she stands level with him for that.
- His chain (`shackles`) runs from the hand at his brow straight down to the hand on his knee: it reads as a rod.
- His cloak is the cast's flat tube down his back — sitting, it stands out behind him like a slab (the engine hangs
  cloth only before a garment, not behind the back).
- The mirror cannot leave him out: the engine has no person who is not mirrored ("в зеркале его нет" in the
  scenario). He sits where the mirror does not see him from the start; a viewer leaning far to the left may; in
  `rehearse` he stands before it and is mirrored, faintly (the mirror is rough and weak) — an engine gap.
- The wall that parts is two leaves cut out of the far wall: a thin seam shows down the middle of the tapestry when it
  is seen close.
- Sitting down on the floor (`sit_ground` for Washington and Mr Otis) is a loop: they go from standing to sitting in a
  third of a second (no motion of sitting down on the floor); setting a lantern or a candle down, the thing appears on
  the floor as the hand lets it go (no bending down).
- Facing the tapestry to knock (`knock_evening`, `wait_wall`) Mr Otis shows his back; Virginia whispering at the window
  shows her profile.

## Contract for the check

```json
{"beats": {"insulted":{"after":[],"tells":["insulted:ear","insulted:seat"],"seconds":14}, "rehearse":{"after":[],"tells":["rehearse:loom","rehearse:bow"],"seconds":12}, "candle_room":{"after":[],"tells":["candle_room:whisper","candle_room:sill"],"seconds":12}, "stub_sleeve":{"after":[],"tells":["stub_sleeve:turn","stub_sleeve:hidden"],"seconds":10}, "turnip_shake":{"after":[],"tells":["turnip_shake:shake"],"seconds":8}, "leaves":{"after":[],"tells":["leaves:door"],"seconds":10}, "reuben":{"after":["leaves"],"tells":["reuben:up","reuben:down"],"seconds":10}, "talk":{"after":["leaves","reuben"],"tells":["talk:near"],"seconds":6}, "sandwich":{"after":["talk"],"tells":["sandwich:taken"],"seconds":8}, "stamp":{"after":["talk","sandwich"],"tells":["stamp:stamp"],"seconds":3}, "wall_parts":{"after":["talk","sandwich","stamp"],"tells":["wall_parts:supper","wall_parts:open","wall_parts:hand"],"seconds":12}, "into_wall":{"after":["wall_parts"],"tells":["into_wall:hand","into_wall:shut"],"seconds":12}, "hand_down":{"after":["wall_parts"],"tells":["hand_down:bow","hand_down:whisper","hand_down:gone"],"seconds":14}, "dark":{"after":[],"tells":["dark:voices"],"seconds":8}, "lantern":{"after":[],"tells":["lantern:pound","lantern:end"],"seconds":12}, "knock_evening":{"after":[],"tells":["knock_evening:knock"],"seconds":8}, "wait_wall":{"after":[],"tells":["wait_wall:knock","wait_wall:sat","wait_wall:out"],"seconds":18}, "candle_last":{"after":[],"tells":["candle_last:sat"],"seconds":14}}}
```
