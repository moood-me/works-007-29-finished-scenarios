# The Farm Kitchen

Stage 2 of the game (the look, docs/new-games/okean-v-konce-dorogi/scenario.md §4 «Кухня фермы»; I-3): the Hempstocks'
kitchen on a clear late morning, and three of the game's people in it, still — a breath, the fire, the steam, the
reeds in the window. No motion of people, no camera moves, no showcase (nothing happens in it yet).

- **The view.** Camera `picture`, horizon 0.4, at a child's eye: `camera_h` −0.55 in the starting state (the eye 1.15 m
  over the floor — the story is the boy's). The room is 5.8 m wide (x −2.9…2.9), 2.5 m high, its back wall at 4.3 m
  (the room runs on 1.2 m behind the viewer). In the 4:3 frame: the window, the three people and the fire.
- **Back wall** (`back_wall`): limewash; the deep window left of the middle (x −2.4…−0.9, 0.75–2.05 m: `reveal_l`,
  `reveal_r`, `lintel`, `sill`, `casement`, `sill_things`; `opening` — its unseen hole the daylight comes in at); right
  of it the copper pans and the clock; the chimney's brick alcove (x 1.05…2.65) with the mantel beam over it, and the
  black range standing in it (`range` front with the firebox — its coals a layer of added light, its point
  `range#fire`; `range_side`, `range_top`, `kettle`). Left wall: the dresser with plates. Right wall: a calendar, a
  coat on a peg. The flagstone `floor`, the beamed `ceiling` (a card laid face down from the top of the back wall),
  `herbs` from a joist, the rag `rug` before the range.
- **The table** (`table` top, `table_side`, `table_end`) along the room on the left, its far end under the window; on it
  the milking pail, the boy's porridge (jam in it: purple) with the jam jar, a loaf and a jug.
- **Outside the window**: `sky`, the field (`meadow`, a path to the pond), the duck `pond` (a mirror, rippling) left
  beyond the window, `reeds` swaying on its far bank, the far `trees`.
- **People** (the world's cast, modules/cast.md). The boy on the tall `stool` at the table's near corner (`boy_on`),
  turned half to us, looking down at his bowl; Lettie standing right of the window, hands in her pockets, smiling at
  him; old Mrs Hempstock in her chair before the range (`gran_on`), smiling at him. The chair is built of its parts
  round her seat (`chair_back`, `chair_seat`, `chair_front`, `chair_arm_r`, `chair_arm_l`; turned 215° as she is).
- **Light.** The sun from the left beyond the window (`sun`, `through` its opening: across the table, the boy and the
  floor, `motes` in it), the daylight at the window (`window_light`), the fire in the range (`fire`, key `fire`;
  `flames`), the steam from the kettle (`steam`).
