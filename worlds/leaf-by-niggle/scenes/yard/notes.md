# The Yard

Stage 2 of the game (the look), the third scene: Niggle's yard (С1 of the scenario) the day after the storm, at the
moment of chapter 3.2 — the Inspector of Houses has come round; the next storm is coming from the hills. The place
of the game's choices with the neighbours (the thistles, the fence, the cottage with the hole in its roof) and the
Inspector, new in the cast. People stand: a look, a pose, the face's mood; no one moves, no camera moves.

- **Where things are.** The viewer stands in Niggle's overgrown garden (camera `picture`, horizon 0.42). The shed
  (`shed`, a card at 6 m, across −3.3, turned to us and a little right — `facing` 160; 4.4 wide, the ridge 4.75 up):
  grey boards (`lib.js` — the shed's planks and leaf, as in the shed), the doorway open, the room behind it
  (`shed_inside`: the platform's steps, a part of the canvas — `shed_inside#canvas`), the sketch of a leaf pinned
  by the door (`shed#sketch`), the bicycle against the wall (`bicycle`). The path from the door to the gate and on
  toward us, the puddles of the night (`puddle` — a mirroring plane). The fence (`fence`, 9.2 m, the gate at across
  ~1.4), Parish's cabbages (`cabbages`), his cottage (`cottage`, 13.6 m, across 5.2, `facing` 196): the hole in the
  roof over the bedroom (`cottage#hole`), broken tiles on the ground, the bucket by the door, the bedroom
  (`cottage_room`, behind its window), the cold chimney; the old apple tree (`apple`, its leaves falling — `leaves`).
  Beyond: the stubble field (`field`, to 1.1 km), hedge trees (`hedge`, copies), the low hills (`hills`, 700 m). Rank
  grass (`weeds`) and thistles (`thistles`) in Niggle's yard, copies. The ground of both yards is one plane (`yard`).
- **Not to the metre with the shed.** In the shed its doorway looks straight at the cottage's window. Here both are
  turned to the viewer as on a stage (shed 160, cottage 196) so that Niggle in the doorway and the cottage both read;
  laid true, one of them would be seen edge on.
- **Light.** The washed afternoon after the storm: the low sun from behind the viewer's right (`sun`, bearing 150,
  18° up) on the fronts of the shed, the Inspector, the cottage; the slate-grey bank of the next storm over the hills
  to the right, behind the cottage (`sky` layer `bank`). `storm` 0…1 — the bank slides left over the sky (`sky`'s
  animate) and the light goes grey and cold, the sun out, the wind up (a look).
- **Motion.** The grass, the thistles and the apple's crown in the wind; clouds drift; leaves fall from the apple; the
  bank comes over by `storm`.
- **People** (modules/cast, style `niggle`): Niggle in his doorway, brush in hand (`hold_brush`), turned to us and to
  the Inspector, looking at him, sad; the Inspector of Houses (`inspector`, new in the cast: a grey town coat, a dark
  bowler — hat `bowler` —, his open book — part `book`, its point `inspector#book`; `hold_book`) before the door,
  turned to us, reading; Parish at his own door on his stick (`lean_stick` — the weight off the bad leg), looking up
  at the hole in his roof, not at them; Mrs Parish at the bedroom window, looking at Niggle.
- **Showcase**: the Inspector (he looks up from his book at the canvas through the door, Niggle at him); the book
  (the Inspector back to his book, Niggle turns to his Tree, angry: "It is my picture!"); the cloud (the storm comes
  over, Parish and the Inspector look up at it); back.

## What is not right yet

- The Inspector's face shows only while he reads (turned to us); looking at the canvas he is seen from behind his
  shoulder — Niggle in the doorway and he face each other, and only one of them can face the viewer too.
- His book is seen from its back (its pages are turned to him): a dark slab in his hands.
- The people are small (Niggle ~ 1/4 of the frame's height); Parish and Mrs Parish at the cottage are small figures,
  Mrs Parish dim in her room. Close views need the camera, which this stage has none of.
- The worker with the barrow waiting at the gate (3.2) is not here: not in the cast yet.
- The cottage is a flat front (no side walls, no roof's depth); the hole is painted on it.
- The apple's crown is soft rounds, a little "bubbly", as in the shed's side window.
- Known limits of the engine, not got round here: a motion from Kimodo is turned toward a wall in a scene; hands on
  the knees in a module's clip go out to the sides; cloth does not hang behind the back; a sitting woman's skirt is
  a lump; particles `fire` are balls; no rope between two people.
