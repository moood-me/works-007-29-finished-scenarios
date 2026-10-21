# The Ivanovs' Izba — engine 3

The second scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4
«Изба Ивановых», chapter 2 «Дом»). Stage 2 of writing the game — the look: the world's style indoors, in the evening, by
the lamp and the stove, and its three main people close enough for their faces to read — Lyuba and Petrushka at the
table, Ivanov at the door: a stranger in his own house. A still picture (`picture`): people stand and breathe; the lamp's
flame trembles, the fire moves in the stove's mouth, the clock's pendulum swings, dust hangs in the lamplight. No script,
no showcase, no caption (the title is the page's, in the viewer's language — ru «Изба Ивановых»).

## The look

The yard's gouache, indoors: flat near tones laid with dry ragged strokes, the paper's tooth under the paint as soft
blots a few centimetres across (`lib.paper`: a small hashed tile laid large and smoothed — never specks), hewn honey-grey
logs (`lib.hewn`), scrubbed boards (`lib.planks`), the stove's whitewash (`lib.whitewash`); `light.grain` low. The people
in the cast's `gouache` (broad flat planes, the faces round). A late August evening: outside the window the dusk over the
line (`outside`), a cool light from it (`window`, `dusk`); inside the warm ones — the kerosene lamp on the table (`lamp`,
before the mother and the son, a little to the left) and the fire in the stove's mouth (`stove`, at the mother's left, as
near the eye as she is: its light on her face and the boy's). Ivanov, farther, by the door, is lit less warmly.

## The frame

The eye 1.7 m up, the horizon at 0.36, the people 2.5–3.05 m off (a head about 90 px in a 900 px frame). Left to right
in 4:3: the stove's face with its mouth turned to the eye, the fire seen straight in; the lamp; Lyuba behind the table,
her hands under her apron, looking down past everyone; Petrushka at her side, hands behind his back, a sidelong sullen
look toward his father; the window between the boy and the father; Ivanov in the greatcoat just before the shut door,
the kit bag on the floor by his boots, the empty nail by his head. The table runs along the bottom of the frame: its top
and its cloth's hem hide the mother and the son below the hips (nothing seen through it).

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

The room: across −2.3…1.75, distance 1.0…4.6, the ceiling 2.4.

| Element | What, where |
| --- | --- |
| `outside` | what the window looks out on, 16 m off: dusk sky, the far forest, the embankment and rails, a telegraph pole, the yard's paling (not `inside`) |
| `opening` | the window's opening (unseen): the window's light `window` comes in through it |
| `wall_back` | the back wall (4.6): the window (across 0.8…1.6, 0.85…1.75 up) cut out, its frame and white half-curtain, two carved horses on the sill (point `horses`); the clock over the mother's and the son's heads (`clock`, across −0.2) — its pendulum the layer `pendulum`, swung by `wall_back.animate.js`; the father's photograph high over the boy (`photo`) |
| `wall_left`, `wall_right` | the side walls; on the right one the shut door to the passage (2.6…3.5 ahead, point `door`), the empty nail by it (`nail`, 3.65, 1.72 up) where a greatcoat would hang, a towel on a peg nearer the eye |
| `floor`, `ceiling` | boards; the rag runner across from the door to the stove (2.65…3.35 ahead); the ceiling's beam (3.6) |
| `stove_end`, `stove_side` | the Russian stove (across −2.3…−0.9, distance 2.3…4.6, 1.85 high, its chimney to the ceiling): its face toward the eye with the mouth (across −1.5…−1.0, 0.82…1.32 up, point `mouth`) cut out, the hearth ledge and the pot, the firewood niche, the iron door leant by the plinth, the oven fork, mittens, felt boots on its top; its long side to the room. Neither casts shadows: the fire's light leaves through the mouth |
| `stove_inside`, `stove_fire` | the oven's far wall half a metre in (2.8, facing the eye): the embers' bed and the vault (glowing; its glow `fire` is the light `stove`), and the flames (particles) |
| `bench`, `bench_front` | the bench under the window (0.45 up) |
| `table`, `table_front`, `table_side`, `table_things` | the table near the eye (across −0.95…0.45, 1.65…2.35, 0.76 up): bread on a towel, the salt, two plates (the second at the end toward the door, point `plate`, set for him), the jug and the mug, a linen cloth's hem over its edges |
| `lamp`, `flame` | the kerosene lamp on the table (−0.7, 2.1) and its flame (a layer trembling, `flame.animate.js`); the flame's glow `flame` is the light `lamp` |
| `sack` | Ivanov's kit bag on the floor by the door (1.55, 2.85) |
| `motes` | dust in the air of the room, seen where the light falls |

## The people (the world's `cast`)

One moment of chapter 2's evening: he has come in and not taken off the greatcoat; the table is laid, the second plate set.
Each looks where they mean — the points of the looks (`<id>_look`) set toward the eye, so that the faces are seen
three-quarter, not in profile across the room.

- `lyuba` (−0.3, 2.6, turned 190) — behind the table by the stove (§2: «стоит у печи; руки прячет под фартук»): her hands
  reach (`lyuba_reach`) under the apron's top in front of her, she looks down past everyone at the table's near corner,
  `sad` (shame held in).
- `petrushka` (0.3, 2.5, turned 160) — at her side, by the table's end, `hands_behind` («руки за спиной»), a sidelong
  look toward his father, `angry` (the cast's sullen frown: the little master of the house).
- `ivanov` (1.2, 3.05, turned 220) — standing just before the door (§2: «стоит, когда другие сидят; ближе к двери»), in
  the greatcoat (his look's `parts`: the coat's kit only, not the bag in hand — it lies by his boots), `thinking` (wary),
  looking toward the two at the table.

Semyon Yevseyevich and Nastya stay in the cast for the scenes that need them; they are not in this picture.
