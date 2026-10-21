# The Ivanovs' Izba — engine 3

The second scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4
«Изба Ивановых», chapter 2 «Дом»). Stage 2 of writing the game — the look: the world's style indoors, in the evening, by
the lamp and the stove, and its three main people whole, from their boots on the boards to their faces, near enough
for the faces to read — Lyuba at the stove, Petrushka at the bench's end, Ivanov nearer the door: a stranger in his own
house. A still picture (`picture`): people stand and breathe; the lamp's
flame trembles, the fire moves in the stove's mouth, the clock's pendulum swings, dust hangs in the lamplight. No script,
no showcase, no caption (the title is the page's, in the viewer's language — ru «Изба Ивановых»).

## The look

The yard's gouache, indoors: flat near tones laid with dry ragged strokes, the paper's tooth under the paint as soft
blots a few centimetres across (`lib.paper`: a small hashed tile laid large and smoothed — never specks), hewn honey-grey
logs (`lib.hewn`), scrubbed boards (`lib.planks`), the stove's whitewash (`lib.whitewash`); `light.grain` low. The people
in the cast's `gouache` (broad flat planes, the faces round). A late August evening: outside the window the dusk over the
line (`outside`), a cool light from it (`window`, `dusk`); inside the warm ones — the kerosene lamp on the table by the window (`lamp`,
between the boy and the father, behind them: warm on their near cheeks and edges) and the fire in the stove's mouth
(`stove`, at the mother's right as she faces the room, as near the eye as she is: its light on her face and the boy's).

## The frame

The eye 1.7 m up, the horizon at 0.22 (the gaze a little down, so the floor before the people is in the frame), the
people 2.45–2.7 m off: each whole, the boots on the boards with their shadows under them (Lyuba's feet at 0.91 of the
frame's height), a head about 100 px in a 900 px frame. The frame's height is the lens's focal length: a thing h metres
below the eye at d metres is (h / d) of the frame under the horizon; 4:3 shows across/d within ±0.667, 16:9 ±0.889.
Left to right in 4:3: the stove's face with its mouth turned to the eye, the fire seen straight in (the stove's left,
plain whitewash, runs past the frame's edge); Lyuba by the stove's corner, her hands under her apron, turned toward her
husband, her eyes lowered toward his side (tired, ashamed); Petrushka at the end of the bench before the table, hands
behind his back, looking up at his father (serious); the horses on the window's sill against the dusk; the lamp on the
table in the window's light; Ivanov before the door in his tunic and boots, the greatcoat thrown over his shoulders,
turned toward the two, at a loss; the empty nail by the door's near jamb, clear of his head; the kit bag by his boots.
Its two and he: the mother and the son together on the left, the father a step apart on the right.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

The room: across −2.0…1.55, distance 1.0…4.6, the ceiling 2.4.

| Element | What, where |
| --- | --- |
| `outside` | what the window looks out on, 12 m off (near enough that the sill's sightline falls on its sand): dusk sky, the far forest, the embankment and rails, a telegraph pole, the yard's paling (not `inside`) |
| `opening` | the window's opening (unseen): the window's light `window` comes in through it |
| `wall_back` | the back wall (4.6): the window (across 0.45…1.25, 0.85…1.75 up) cut out, its frame and white half-curtain, two carved horses of pale wood at the sill's left end, against the panes (point `horses`); the clock over the mother's and the son's heads (`clock`, across −0.15) — its pendulum the layer `pendulum`, swung by `wall_back.animate.js`; the father's photograph high over the boy (`photo`) |
| `wall_left`, `wall_right` | the side walls; on the right one the shut door to the passage (2.96…3.9 ahead, point `door`), the empty nail by its near jamb (`nail`, 2.8 ahead, 1.72 up) where the greatcoat hung before the war, a paler shape of it on the logs under it, a towel on a peg nearer the eye |
| `floor`, `ceiling` | boards; the rag runner from under the door to the middle (2.55…3.2 ahead); the ceiling's beam (3.6) |
| `stove_end`, `stove_side` | the Russian stove (across −2.0…−0.6, distance 2.3…4.6, 1.85 high, its chimney to the ceiling): its face toward the eye with the mouth (across −1.2…−0.7, 0.82…1.32 up, point `mouth`) cut out, the hearth ledge and the pot, the firewood niche, the oven fork (past the 4:3 frame), mittens in a niche over the pot; its long side to the room. Neither casts shadows: the fire's light leaves through the mouth |
| `stove_inside`, `stove_fire` | the oven's far wall half a metre in (2.8, facing the eye): the embers' bed and the vault (glowing; its glow `fire` is the light `stove`), and the flames (particles) |
| `bench`, `bench_front` | two benches (0.45 up), one painting standing twice (copies): under the window along the back wall (4.26…4.6), and before the table (2.88…3.22, across 0…1.55) — Petrushka stands at its left end |
| `table`, `table_front`, `table_side`, `table_things` | the table by the window (across −0.05…1.15, 3.3…3.9, 0.76 up): bread on a towel, the salt, two plates (the second at the end toward the door, point `plate`, set for him), the jug and the mug, a linen cloth's hem over its edges |
| `lamp`, `flame` | the kerosene lamp on the table (0.85, 3.55) and its flame (a layer trembling, `flame.animate.js`); the flame's glow `flame` is the light `lamp` |
| `sack` | Ivanov's kit bag on the floor by his boots, before the door (1.3, 2.9) |
| `motes` | dust in the air of the room, seen where the light falls |

## The people (the world's `cast`)

One moment of chapter 2's evening: he has come in and not hung up the greatcoat (it is over his shoulders: the nail is
empty); the table is laid, the second plate set. Each is turned a little toward the others and looks toward them, the
looks' points (`<id>_look`) brought some 30° toward the eye, so that the faces are seen three-quarter, not in profile.

- `lyuba` (−0.3, 2.45, turned 150) — by the stove's corner (§2: «стоит у печи; руки прячет под фартук»): her hands
  reach (`lyuba_reach`) under the apron's top in front of her, her eyes lowered toward her husband's side (not at the
  table, not at the eye), `tired` (worn out, ashamed).
- `petrushka` (0.05, 2.7, turned 140) — at the end of the bench before the table, `hands_behind` («руки за спиной»),
  looking up toward his father, `neutral` (the serious little master of the house; his size and the open face the child).
- `ivanov` (1.0, 2.65, turned 220) — `ivanov_home`: on the runner before the door (§2: «стоит, когда другие сидят;
  ближе к двери»), in the tunic, belted, the breeches in his high boots, the side cap straight, the greatcoat thrown
  over his shoulders (§4: «шинель на плечах или на гвозде» — on the shoulders: he has not decided to stay), looking
  toward the two, `sad` (held in, at a loss).

Semyon Yevseyevich and Nastya stay in the cast for the scenes that need them; they are not in this picture.
