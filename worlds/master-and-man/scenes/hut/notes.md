# The Old Man's Hut (engine 3)

The world's second scene for stage 2 of «Master and Man» (the look: people stand, nothing is played). Chapter 2,
«A Stranger's Hut»: the rich household in Grishkino on the evening of the storm. The master and Nikita have come in out
of the cold; the master sits in the place of honour under the icons, the old man leans over the table to him, the
elder son stands by the door to the passage, Nikita sits at the edge, on the bench by the stove. The mood in one word:
**warmth** — borrowed, for an hour: the lamp, the samovar, the fire in the stove against the blue evening in the window
and the cold dark of the passage behind the son.

Why this place: it shows the world's other light — the same people (the master, Nikita) in lamp- and firelight rather
than in the grey day — and two of the story's other people (the old man, his son). The warm spots here are the
master's red fox coat under the lamp, the copper samovar, the stove's fire, the lampada's red glass; the cold ones the
window and the passage. Everyone is clearly seen: the room is lit warm and bright enough to read every face.

## Space

A room seen from its open side (camera `picture`, horizon 0.39). Metres: across to the right, distance ahead; the
eye 1.7 m over the floor. The room 6 m wide (across −3.0…3.0), its back wall at distance 5.2, the ceiling 2.4 m up.
What matters lies within the 4:3 middle (x 0.125…0.875): the icons, the stove's fire; the window is half seen in 4:3, whole in 16:9.

| What | Where (across, distance) |
| --- | --- |
| back wall, the passage door (across −0.35…0.55, 1.75 m high), the crockery shelf over it | 0, 5.2 |
| left wall, the window in it (distance 4.48…5.02, 0.86…1.66 m up) | −3.0 |
| right wall (behind the stove) | 3.0 |
| the icons' corner: a corner shelf, three icons, a towel, the lampada (1.55 m up) | −2.7, 4.9 |
| the clock (ходики), its pendulum swinging | −0.45, 5.17 |
| the table (top 0.76 m, across −2.95…−1.05, distance 4.0…4.9), its cloth, bread, glasses, the bottle | −2.0, 4.45 |
| the samovar on the table, steaming | −1.4, 4.68 |
| the lamp hung over the table (its flame about 1.8 m up) | −1.85, 4.45 |
| the stove (front at distance 3.6, across 0.85…2.95; top 1.8 m; the mouth across 1.7…2.25, 0.62…1.15 m up) | 1.9, 3.6…5.2 |
| benches (seat 0.45 m): behind the table, under the window, along the stove's side | — |
| Vasily Andreich, seated behind the table under the icons, hands on the table | −2.3, 5.02 |
| the old man, standing at the table's end, his right hand on it, turned to his guest | −0.75, 4.35 |
| the elder son, in the passage door, his arms folded | 0.1, 4.85 |
| Nikita, seated at the end of the bench by the stove, hands in his lap | 0.69, 3.5 |

## Elements

back_wall, wall_left, wall_right (hewn logs from inside, `lib.logs`), floor (boards, the striped runner from the door),
ceiling (boards, the great beam), window (glows: the blue evening, frost flowers, a drifting `snow` layer), icons
(+ the lampada's glow), clock (+ `pendulum` layer, `clock.animate.js`), bench (copies along the walls) and
bench_top_back / _left / _stove (their seats), table_top (casts the lamp's shadow on the floor), table_front, table_side,
table_things (a card at the glasses' line), samovar (points `tap`, `top`) and `steam`, lamp (a `lamp` layer that sways
a very little, `lamp.animate.js`; its `flame` is the light), stove_front (the mouth is a hole in the painting — the fire
seen through it), stove_side, embers (glows: the coals, a flickering `coals` layer; the light `stove`), stove_fire
(fire particles behind the mouth), the four people (`modules/cast`).

## Light

The engine's: ambient 0.55 warm grey (`#c4b8ac`), bounce 0.55; the lamp over the table (`lamp`, warm, 1.6, reach
5.5) — the main light; the stove's fire (`stove`, orange, flickering) — warming Nikita's side and the floor before the
stove; the lampada (`lampada`, a small red glow on the icons); the window's cold blue (`dusk`). A thin warm haze glowing
round the lamp. The people and the samovar cast their shadows; the table top casts the lamp's shadow on the floor.

## State

People: Vasily `table_talk` (seated at a table, hands folded on it, small head movements), seated on `[-2.3, 5.02,
0.45]`, hat off (`vasily_wear {hat: none}`), looks at the old man, mood smile; the old man `stand`, his right hand on the
table's end (`old_man_reach`), turned 220 (toward us), looks at Vasily, mood smile (the cast's `lean_table` is there
for a moment when he leans over to his guest); the son
`arms_folded`, looks at Vasily, mood thinking (sullen); Nikita `bench_sit` (seated, hands in the lap) on `[0.69, 3.5,
0.45]`, indoors in his shirt and red sash — hat and coat off, the frost gone from his beard (`nikita_wear`: `garment:
none` — a skirt over a seated lap spreads like a sheet) —, his eyes on the bottle on the table (`table_things#bottle`:
the pledge he keeps), mood neutral.

## Showcase

`hut` (8 s, as it stands) → `glances` (the son looks at Nikita and back; Nikita lifts his eyes to the master and lowers
them; the master glances at the samovar and back to the old man) → `evening` (8 s).
