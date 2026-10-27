# The Night Class

Stage 2 of the game (the look): the evening class (scenario C4) on a Tuesday in April, at 1.6 — "Charlie, read." —
the lamplit schoolroom against the dusk outside, between the white daylit laboratory and Halloran's yellow neon night;
Miss Kinnian in her own place, by her blackboard; Charlie on his feet at his desk, reading aloud; two of the class's
students watching him. No one moves but a look and a face; no camera moves.

- **Where things are.** The viewer stands in the room (camera `picture`), brought 0.7 m in and 0.15 m down by the
  state (`camera_z`, `camera_h`). Floor at 0 (`floor`: maple boards across the room), ceiling 3.2 (`ceiling`, a card
  laid face down, two shallow beams); the back wall at distance 6.7 (`back_wall`: two tall windows x −2.0…−0.6 and
  0.6…2.0, sill 0.95, head 2.75, radiators under them, a print of a ship between, a world map on its roller to the
  right); side walls at across ±3.3 from 1.0 to 6.7 (`left_wall`: a bookcase with a globe near the viewer, a pencil
  sharpener; `right_wall`: the door to the corridor, its frosted glass lit — its glow `glass` —, the coats on their
  hooks, a cork board of notices). Shared paint: `lib.js` (the wainscot and the wall's paint; the windows of the
  houses below).
- **The blackboard** on the left wall (`blackboard`: lines of round chalk handwriting, too far to read, and a small
  house drawn by them — no words), the clock over it (`clock`: a quarter to eight; the minute and second hands layers
  its animate turns).
- **The windows**: their sashes (`windows`), the glass (`pane`, `glass`: the lit room faintly in it), the roller
  blinds drawn a third down (`blinds`, translucent).
- **Outside**: the school stands on a rise (`relief.js`: level to past the railing, then down 6 m by distance 24), so
  the windows look over the roofs at the evening — the schoolyard and the street below (`yard`, draped), the railing
  (`fence`), an elm in young leaf (`tree`, each clump a layer in the wind), a street lamp just lit (`street_lamp`, its
  light `street`), the houses below (`houses`, a steeple and a water tower behind them; their lit windows
  `house_windows`, glows), the sky after sunset (`sky`: deep blue, rose and gold low down, the evening star, a thin
  new moon).
- **The teacher's corner**: her desk, its front to the class (`teacher_desk`, facing 90; its top `teacher_top`: the
  blotter, the register, the exercise books), what stands on it (`desk_things`: the hand bell — `desk_things#bell`,
  where the rabbit's foot will stand —, a pile of exercise books, her green-shaded lamp — its light `desk_lamp`), her
  chair behind it (`teacher_chair`).
- **The pupils' desks**: two columns (desk tops at across −1.15 and 0.75), three rows (distance 3.3, 4.6, 5.9) —
  each desk seen from its side (`desks`, copies at its near and far side), its top (`desk_tops`, copies: an exercise
  book, a pencil); a chair beside each (`chairs`, copies at both sides; `seats`, copies), the back away from the
  desk; Charlie's chair (column A, row 1) pushed back as he stood up.
- **Light**: evening. Four milk-glass globes on rods over the desks (`lamp_rods`, `globes` — the near row at distance
  3.1, the far row a part 2.1 m farther; each globe its own light, `globes#near_left` …), her desk lamp, the
  corridor's glass, the evening coming in at the windows (`evening`, daylight), the street lamp outside.
- **People** (modules/cast, style `lab`), each in a pose of their own (the cast's motions): Charlie standing between
  his desk and his chair, a little stooped, his reader open in both hands before his chest (`book_read`,
  `charlie_with: ["primer"]`), turned to the room (192); Miss Kinnian before her desk, upright, a stick of chalk in her
  right hand at her chest (`chalk_held`; `kinnian_wear: {"parts": ["chalk"]}` — her look's own exercise book left
  out: `_with` only adds to a look's parts), looking at him, smiling; the young student seated at the desk beside
  Charlie's (column B, row 1), his forearms on it (`seated_listen`, on `[1.25, 3.3, 0.47]`, his hands reaching for
  the desk top), looking at Charlie; the old student at the back by the window (column B, row 3), his chin in his
  hand (`seated_chin`), looking at Charlie.
- **The showcase**: Charlie reads; he looks up from the page at the room — surprised, then smiling; the old student
  glances at the young one, and the young one smiles; Charlie goes back to the page.

What is not right yet / what the engine lacks:
- A look at someone farther from the viewer turns the head away from the viewer (as at Halloran's): the students look
  at Charlie, who is nearer the viewer, and he reads facing the room, not Miss Kinnian — he looks up at the room, not
  at her.
- The chalk in her fingers is too small to see from here.
- `seated_chin` puts the elbow on the knee, not on the desk; seen from here it reads as leaning on the desk.
- The near globes are large in the top corners of the frame (they hang between the viewer and Charlie, to light his
  face).
