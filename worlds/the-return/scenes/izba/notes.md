# The Ivanovs' Izba — engine 3

The second scene of «The Return» (Platonov, 1946; the game's scenario: docs/new-games/vozvrashchenie/scenario.md, §4
«Изба Ивановых», chapter 2 «Дом», 2.6 «Семён Евсеевич»). Stage 2 of writing the game — the look: the world's style
indoors, of an evening, by the lamp and the stove, and the family in another light than the yard's noon. The moment:
about half past eight, Semyon Yevseyevich has just stepped over the threshold on his way to the night shift, the new
carved horse held before him in both hands like a pass; Nastya is already at his side holding his jacket; Petrushka, the
little master of the house, turns to the guest; Lyuba at the stove, a hand on its corner; Ivanov, still in his
greatcoat, stands nearest, watching the stranger who is «as one of the family» here. A still picture (`picture`):
people stand and breathe; the lamp's flame trembles, the fire moves in the stove's mouth, the clock's pendulum swings,
dust hangs in the lamplight. No script, no showcase, no caption (the title is the page's, in the viewer's language — ru
«Изба Ивановых»).

## The look

The yard's gouache, indoors — the same lib functions: broad dry dabs with ragged edges over flat near tones, the paper's
tooth under the paint (`lib.paper`, a hashed 128 px tile with no direction — the old one had a diagonal fibre that read
as scratches across the walls), hewn grey-honey logs (`lib.hewn`, its dabs clipped to the wall), scrubbed boards
(`lib.planks`), the stove's warm whitewash (`lib.whitewash`). The people in the cast's `gouache`.

The light: a late August dusk outside (`dusk`, cool) seen through the window over the table; inside the warm ones — the
kerosene lamp on the table before the window (`lamp`: behind the group, rims on Ivanov and Petrushka, full on Semyon's
face as he faces it) and the fire in the stove's mouth (`stove`, by Lyuba). The faces toward the eye are lit by a window
in the left wall behind the eye (`side_window`, unseen; its light `window_side`, daylight) — the evening's cool light on
the front of everyone, the lamp's warmth from behind: the family «in another light». `ambient` 0.75 and `inside` 0.7 so
nothing that matters is dark. If the faces need more, raise `window_side`'s daylight, not the lamp.

## The frame

The eye 1.7 m up, the horizon at 0.28, the people 2.55–3.65 m off, each whole (Ivanov's boots near the frame's foot).
Screen x of a thing is across / distance (16:9 shows ±0.889, 4:3 ±0.667). Left to right: the stove's face with its mouth
(x −0.6…−0.46) and Lyuba at its corner (−0.36); Ivanov (−0.16); the lamp in the window (0); Petrushka (0.15); the stool
(0.26); Nastya (0.38) and Semyon (0.48) before the open doorway (0.46…0.58 on the right wall). All within 4:3.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

The room: across −2.25…1.95, distance 1.2…4.4, the ceiling 2.25.

| Element | What, where |
| --- | --- |
| `outside` | what the window looks out on, 12 m off: dusk sky, the far forest, the embankment and rails, a telegraph pole, the yard's paling (not `inside`) |
| `opening` | the window's opening (unseen): the light `window` comes in through it |
| `side_window` | a window in the left wall behind the eye (unseen, 1.9 ahead): the light `window_side` |
| `wall_back` | the back wall (4.4; x = across + 0.15): the window (across −0.45…0.35, 0.9…1.95 up) cut out, its frame, the war's paper strips, the valance, two carved horses and a geranium on the sill (point `horses`); the clock (`clock`, across 0.75; its pendulum the layer `pendulum`, `wall_back.animate.js`); Petrushka's padlocked cupboard (`cupboard`, across 1.0…1.5); the father's photograph over it (`photo`) |
| `wall_left` | the left wall, mostly behind the stove |
| `wall_right` | the right wall (x = 2.8 − distance): the open doorway to the passage (3.4…4.2 ahead, 1.75 high, point `door`), its threshold; the empty nail by its near jamb (3.2 ahead, `nail`) with the paler shape of the coat under it; a towel nearer the eye |
| `passage`, `passage_floor` | the passage (сени) seen through the doorway: its far wall 0.75 m past the room's (bench, two buckets, the yoke, a sheepskin), its grey boards |
| `floor`, `ceiling` | boards; the rag runner from the doorway into the room (Semyon stands on its end); the ceiling's beam (3.3) |
| `stove_end`, `stove_side` | the Russian stove (across −2.25…−1.15, distance 2.75…4.4, 1.95 high): its face toward the eye with the mouth (across −1.66…−1.26, 0.77…1.2 up, point `mouth`) cut out, the hearth ledge with the pot and a crock, the hollow of firewood under it, two niches, the oven fork; its side to the room with the step-box, a niche, the chimney's breast to the ceiling and the blue print curtain over the sleeping place on top. Neither casts shadows: the fire's light leaves through the mouth |
| `stove_inside`, `stove_fire` | the oven's far wall (3.2 ahead, across −1.98…−1.42 — where the mouth's sightlines meet it): embers, the vault, its glow `fire` (the light `stove`); the flames (particles) |
| `table`, `table_front`, `table_things` | the table under the window (across −0.55…0.55, 3.7…4.2, 0.76 up): bread on a towel, salt, two plates (the second set for him, `plate`), the jug and mug |
| `lamp`, `flame` | the kerosene lamp on the table (−0.05, 3.92) and its flame (a layer trembling, `flame.animate.js`); the flame's glow is the light `lamp` |
| `stool`, `stool_top` | a stool by the table's end toward the door (0.95, 3.6…3.76) — the one Petrushka will push up for a guest |
| `motes` | dust in the lamplight |

## The people (the world's `cast`)

Each turned a little toward the guest; the looks (`<id>_look`) are points brought toward the eye so the faces read
three-quarter, not in profile.

- `lyuba` (−1.0, 2.75, turned 150) — at the stove's corner (§2: «стоит у печи»), her right hand on the corner
  (`lyuba_reach`), `tired`. (Hands «under the apron» cannot be drawn: hands reaching there showed as a knot of fingers
  on the apron.)
- `ivanov` (−0.4, 2.55, turned 145) — `ivanov_coat`: in his greatcoat, belted, the cap off (2.7: «Сними, жарко». —
  «Знобит»; the greatcoat on means he has not decided to stay — the empty nail by the door says the same), `thinking`
  (wary: «чужой мужчина „как свой“»).
- `petrushka` (0.45, 2.95, turned 160) — `hands_behind`, turned to the guest, `neutral` (the host: «Вы садитесь, раз
  пришли»).
- `nastya` (1.38, 3.65, turned 215) — at Semyon's right side, her left hand holding his jacket (`nastya_reach`),
  looking at the «дядя», `afraid`.
- `semyon` (1.7, 3.55, turned 215) — `semyon_visit`: the clean jacket, the cap off, the horse (the cast's part
  `horse`) on both palms (`semyon_reach`), looking at the captain, `sad` (shy, ceremonious: «Я… на минутку. Насте
  вот»).

## Changes

Look round 4 rebuilt the scene: from three people at a loss (Lyuba, Petrushka, Ivanov with the greatcoat over his
shoulders — `ivanov_home`, whose cape read as a tent with the hands sticking out of it) to the evening of 2.6 with all
five; the room re-laid around them (the doorway moved to the back of the right wall so the guest stands in it, the
table and lamp under the window in the middle, the stove's mouth inside the 4:3 frame), the lib brought to the yard's
gouache. Element ids kept where the thing is the same (`outside`, `opening`, `wall_*`, `floor`, `ceiling`, `stove_*`,
`table`, `table_front`, `table_things`, `lamp`, `flame`, `motes`); `bench`, `bench_front`, `table_side`, `sack` gone.
