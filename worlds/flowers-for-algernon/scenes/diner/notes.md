# Halloran's

Stage 2 of the game (the look): Halloran's diner (scenario C2) on a Friday night in April, before the dance (1.3) —
the warm, yellow, neon-lit evening against the white daylit laboratory; Charlie among his "friends", Joe Karp and
Frank Reilly, and Halloran behind his counter, all standing as they stand in the story. No one moves but a look and a
face; no camera moves.

- **Where things are.** The viewer stands in the room (camera `picture`), brought 0.7 m in and 0.15 m down by the state (`camera_z`, `camera_h`). Floor at 0 (`floor`: cream and oxblood
  tiles), ceiling 3.0 (`ceiling`, pressed tin, a card laid face down); the back wall — the diner's front onto the
  street, seen from inside — at distance 6.2 (`back_wall`, the window x −2.2…−0.4, sill 0.9, head 2.6, a radiator
  under it); side walls at across ±3.2 from 1.0 to 6.2 (`left_wall`: the street door, coat hooks, a team photograph,
  a calendar; `right_wall`: the swing door to the back with its lit porthole, the pay telephone). Shared paint:
  `lib.js` (the walls' green tiles and cream paint; the windows of the houses across the street).
- **The window**: its frame (`window`), the glass (`pane`, `glass`: the lit room faintly mirrored in it against the
  night), a café curtain over its lower half (`curtain`, translucent), the sign hung in it (`neon`, glows: a coffee
  cup in rosy neon, its steam a layer that flickers).
- **Outside**: the street (`street`, a plane: sidewalk, curb, road with tram rails), a street lamp (`street_lamp`, its
  light `street`), the houses across (`houses`, their lit windows `house_windows`, glows), the night sky (`sky`).
- **The counter** along the right two thirds (across 0.2…3.2): its front (`counter`, distance 4.7) and top
  (`counter_top`, 1.06 high), what stands on it (`counter_things`: a pie, Frank's half-drunk glass, an ashtray — its
  smoke `smoke` from `counter_things#ashtray` —, a cup, ketchup and mustard, napkins, sugar); four stools before it
  (`stools`, copies). Behind it the back counter (`back_counter`, `back_counter_top`, 0.95) and the wall
  (`back_bar`: white tiles, the kitchen hatch lit warm — its light `hatch` —, the coffee urn — its steam `steam` from
  `back_bar#urn` —, cups, a pie under a dome, shelves, the menu board, its lines unread).
- **The jukebox** in the left corner (`jukebox`, facing 150): a walnut cabinet, its lit glass painted again as layer 1;
  its shader (`jukebox.wgsl`) makes that glow, colours rolling slowly up the arch and bubbles rising in the side
  pilasters (`u_glow`: how bright). Its light `jukebox`.
- **Light**: night. Three green-shaded lamps over the counter (`pendants`, their bulbs `bulbs` — copies; their lights
  `lamp_0…2` are points at the bulbs, as a light can't take a copy's e.light by "of"), the fan's milk globe in the
  middle (`fan_globe`, light `globe`), a dome on the ceiling by the door nearer the viewer (`dome`, light `dome`: what
  lights the faces), the jukebox, the neon sign, the hatch, the street lamp outside. The ceiling fan turns slowly
  (`fan_blades`, a card laid face down, its layer turned by its animate; `fan_motor`).
- **People** (modules/cast, style `lab`), each standing their own way (the cast's motions): Charlie in the middle,
  facing the room, a little stooped (`shy_stoop`), a glass of beer low in both hands (`charlie_with: ["tie",
  "beer"]`), laughing; Joe on his left (the viewer's), turned to him, a mug in his right hand (`mug_held`), his left
  hand on Charlie's shoulder (`joe_reach: {l: "charlie#shoulder_r"}`), laughing; Frank on the right, turned to him,
  pointing at him and laughing (`pointing_laugh`); Halloran behind the counter, hands on his hips (`hands_on_hips`),
  smiling at Charlie. Those who look at Charlie stand a little behind him, turned to him and open to the room: a look
  at someone farther from the viewer turns the head (and the waist) away from the viewer — the first layout, all
  three in a row, showed the backs of their heads.
- **The showcase**: everyone laughing; Frank looks round at Halloran over the counter, Joe after him; Charlie, left in
  it alone, looks down at his glass, the laugh gone (`sad`); Frank and Joe turn back to him, and he looks up and laughs again.

What is not right yet / what the engine lacks:
- Frank's jacket (the built-in `jacket`) flares out from the waist like a skirt over his bent knees.
- Faces at this distance are small: the moods read only roughly.
- The lamps over the counter are copies; a light can't be "of" a copy's e.light (`bulbs:0#bulb` is refused), so
  their lights are points written where the bulbs are.
