# The Dreamer's Room — notes

The game's place 2 (scenario §4), the Dreamer's garret, on a rainy morning — the morning of the finale «Минута»:
Matryona has just come in by the door and holds out the letter («От барышни, что ли?»), he sits on the chair he turned
from his table. For the owner's stage-2 review of the world's look: the same lithograph touched with watercolour as the
embankment and Grandmother's room, now by grey daylight, and two people as they look in it — Matryona, new to the cast,
and the Dreamer at home, in another light than the night's. They hold their poses (breathing, the candle trembling, the
rain, a cobweb stirring); nobody walks, the camera does not move, no showcase yet.

## The look

Cool and low after Grandmother's warm room: old green distemper gone dull and smoked (`lib.greenWall` — uneven
patches, soot under the ceiling, runs of damp, cracks in ink), a grey whitewashed ceiling with one beam and the candle's
smoke over the table, bare grey-brown boards. The one warm thing is the candle-end on the table, still burning in the
daylight — he sat up all night and forgot it (the world's lamp that burns though it is light, indoors). Everything in
daylight colours with the fine sepia ink line (`lib.INK`). It is a grey morning, but the room is light: faces and hands
read clearly.

Light (the engine's): the day comes in at the one window, in the left wall (`window_day`, of `window`) — from the
Dreamer's front-left, so his face is lit by it; Matryona stands nearer the window and gets it from behind-left, her face
held by the high ambient and the bounce. The candle (`candle`, of `table_things#flame`) — a small warm light behind him.
High ambient (0.86, grey-green), `inside` 0.6, a little haze for the candle's halo.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking at the back wall)

The room: across −1.6…1.9, 0…4.8 deep, the ceiling 2.45 (`floor` — it runs on to 5.5 under the stairwell, `ceiling`,
`wall_back`, `wall_left`, `wall_right`; openings cut by `lib.cut`).

- Left wall: the window onto the courtyard, 3.2…4.1 m in, 0.8…2.0 m up (`window` — the frame, two shut leaves of three
  panes, a faint film on the glass; `sill` with two books and a candle-end). It is shut, as all the game. Beyond it,
  seen through: the rain in the courtyard (`rain`, particles kept to the yard by their `area`) and the wall of the house
  across, wet ochre with rows of windows (`yard`, at across −6.5, its foot out of sight below); rain running down the
  panes (`pane_drops`, on the window).
- Back wall: the door to the stair at across −1.45…−0.7, standing ajar into the room (`door`, hinged at −0.7, facing
  125; `passage` — the stairwell's grey wall and the rail going down, seen through it); a little shelf of books; over
  the table a cheap print of Venice pinned up askew.
- The writing table against the back wall at across 0.2…1.4 (`table`, `table_top` — the copy-work spread on it, an ink
  blot; `table_things` — the tied papers, the inkwell and quill, a cold cup, the brass candlestick with the stub
  burning: its flame a layer swayed by `table_things.animate.js`, points `flame`, `cup`, `papers`).
- The back-right corner: his knotty stick leaning there (`stick`); over it, under the ceiling, the cobweb (`cobweb`,
  copy 0; copy 1 — a smaller one over the door in the back-left corner) — a layer stirring in the draught from the door.
- Right wall: his worn greatcoat on a peg and his hat on a nail by it (in `wall_right`).
- The chair, turned from the table toward the room, its seat at across 0.6, 3.45 in, 0.45 up, facing 220
  (`chair_back`, `chair_seat`, `chair_front`).

## The people (the world's `cast`: modules/cast.md)

- `dreamer` — on the chair (`dreamer_on` the seat, the cast's `seated` loop), turned toward the room and Matryona (220),
  bare-headed in his frock coat, his face kept to us (`dreamer_look` a point between the letter and the viewer), sad.
- `matryona` — Matryona, 3.0 m in, by the window side, turned three-quarters to us toward him (135), holding out the
  letter in her right hand (`matryona_with: ["letter"]`, the hand put out by `matryona_reach.r`), her face kept to us
  (`matryona_look` a point between him and the viewer), her lips pressed (`thinking`). New in the cast for this scene:
  the character `matryona`, the hat `kerchief`, the part `letter` (point `matryona#letter`).

## State

`candle` 0…1 — the candle-end's light and glow; `rain` 0…1 — the rain outside and on the panes (the «Утро» finale has
no rain). The people's keys are the engine's (`<id>_on`, `_do`, `_look`, `_with`, `_reach`, `_mood`).

## What moves

The rain outside and on the glass, the candle's flame and its light, the cobweb in the draught, the two breathing.
Nothing is painted again while the scene plays.

## Not here yet

The window opening (the finale «Окно»), Matryona sweeping the cobweb down, a showcase — they come with the game's
stages, not this look.
