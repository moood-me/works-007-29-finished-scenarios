# The Ivanovs' Izba — engine 3

The second scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4
«Изба Ивановых», chapter 2 «Дом»). Stage 2 of writing the game — the look: the world's style indoors, in the evening, by
the lamp and the stove, and two more of its people — Semyon Yevseyevich and Nastya — beside Lyuba and Ivanov in another
light. A still picture (`picture`): people stand and breathe; the lamp's flame trembles, the fire moves in the stove's
mouth, the clock's pendulum swings, dust hangs in the lamplight. No script, no showcase, no caption.

## The look

The yard's gouache, indoors: flat near tones laid with dry ragged strokes and the paper's tooth over every painting
(`lib.strokes`, `lib.paper` — the same functions as the yard's lib, copied: each scene's lib is its own; if a third
scene needs them they belong in a world module). Hewn honey-grey logs (`lib.hewn`), scrubbed boards (`lib.planks`), the
stove's whitewash (`lib.whitewash`). A late August evening: outside the window the dusk over the line (`outside`), a
cool light from it (`window`, `dusk`); inside the warm accents — the kerosene lamp on the table (`lamp`, before the
people: their faces lit from the front) and the fire in the stove's mouth (`stove`, behind Lyuba's right shoulder:
her rim and Ivanov's left side). Not dark: `inside` 0.5 of a bright dusk ambient, and the lamp's pool reaches all four.

## The frame

The room seen from its open side, the eye 1.7 m up, the horizon at 0.36. The stove on the left, its long face and mouth
turned to the room; the table with the lamp near the eye, left of the middle; behind it Lyuba at the stove; Ivanov in
the middle by the window; Semyon Yevseyevich and Nastya on the right, near the door — all four inside the 4:3 frame.
The door, the empty nail by it and the kit bag on the floor by the door are at the right edge (the bag inside 4:3, the
door and the nail seen on 16:9).

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

The room: across −3.0…2.9, distance 1.0…5.8, the ceiling 2.4.

| Element | What, where |
| --- | --- |
| `outside` | what the window looks out on, 16 m off: dusk sky, the far forest, the embankment and rails, a telegraph pole, the yard's paling (not `inside`) |
| `opening` | the window's opening (unseen): the window's light `window` comes in through it |
| `wall_back` | the back wall (5.8): the window (across −0.4…0.4, 0.85…1.75 up) cut out, its frame and white half-curtain; two carved horses on the sill (point `horses`); the father's photograph (`photo`); the clock (`clock`) — its pendulum the layer `pendulum`, swung by `wall_back.animate.js` |
| `wall_left`, `wall_right` | the side walls; on the right one the shut door to the passage (2.35…3.3 ahead, point `door`), the empty nail by it (`nail`, 3.55) where a greatcoat would hang, a towel on a peg |
| `floor`, `ceiling` | boards; the rag runner across from the door to the stove (3.05…3.75 ahead); the ceiling's beam |
| `stove_end`, `stove_side` | the Russian stove (across −3…−1.5, distance 2.9…4.9, 1.85 high, its chimney to the ceiling): the end toward the eye (niches, mittens); the long face to the room, its mouth (4.05…4.7 ahead, 0.82…1.38 up, point `mouth`; Lyuba stands to its right, so the fire is seen beside her) cut out, the hearth ledge, the iron pot, the oven door leant beside, the soot, the firewood niche, the oven fork |
| `stove_inside`, `stove_fire` | the vault and the embers inside the mouth (glowing; its glow `fire` is the light `stove`), and the flames (particles) |
| `bed`, `curtain` | the bed in the corner behind the stove (5.5), the chintz curtain before it (5.05, translucent), drawn a little aside |
| `bench`, `bench_front` | the bench along the back wall under the window and to the right (0.45 up) |
| `cupboard` | the little cupboard on the back wall to the right, its padlock (`lock`) — the sugar, the boy's key |
| `table`, `table_front`, `table_side`, `table_things` | the table near the eye (across −1.15…0.05, 2.45…3.25, 0.76 up): bread on a towel, the salt, two plates (the second, point `plate`, set for him), the jug and the mug; it casts the lamp's shadow on the floor |
| `lamp`, `flame` | the kerosene lamp on the table (−0.55, 3.0) and its flame (a layer trembling, `flame.animate.js`); the flame's glow `flame` is the light `lamp` |
| `sack` | Ivanov's kit bag on the floor by the door (2.3, 3.6) |
| `motes` | dust in the air of the room, seen where the light falls |

## The people (the world's `cast`)

One moment of chapter 2's evening (scenario 2.6): Semyon Yevseyevich has come in on his way to his night shift, for the
children; Nastya holds on to his jacket. Each looks at the one they mean, the point of the look (`<id>_look`) brought
toward the eye so that the faces are seen three-quarter, not in profile across the room.

- `lyuba` (−0.85, 3.75, turned 165) — at the stove, where she stands (§2: «стоит у печи»), looking at Nastya with Semyon,
  a little smile (`smile`).
- `ivanov` (0.55, 3.9, turned 165) — standing, in the greatcoat (he has not hung it on the nail), the kit bag set down by
  the door (his look's `parts`: the coat's kit only, not the bag in hand), wary of the man who comes in «as one of their
  own» (`thinking`), looking at him.
- `semyon` (1.85, 3.45, turned 205) — new in the cast: grey, cropped, cap off, an old dark jacket; just inside, by the
  door, looking at Ivanov, ceremonious (`neutral`).
- `nastya` (1.4, 3.65, turned 200) — new in the cast: five, fair, a faded rose frock; at his side, her left hand on his
  jacket's hem (`nastya_reach`), looking at the stranger who is her father (`afraid`).
