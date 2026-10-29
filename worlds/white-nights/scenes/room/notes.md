# The Dreamer's Room — notes

The game's place 2 (scenario §4), the Dreamer's garret, its mornings: Д1 (Friday, the letter on the table, Matryona's
tea), the finales «Минута», «Лестница», «Утро» (the letter brought, the cobweb) and «Окно» (Monday, the window opened at
last). Stage 2 made its look (a rainy morning, Matryona holding out the letter); stage 4 (2026-10-29) gave it the
variants of every step as keys, the steps' standing layouts (`moment`), the points the game presses. **White Nights
stops at a half-stage: no stage-5 pieces here** (no motion of people, no camera moves) — see «Not done» below.

## The look

Cool and low: old green distemper gone dull and smoked (`lib.greenWall` — uneven patches, soot under the ceiling, runs
of damp, cracks in ink), a grey whitewashed ceiling with one beam, bare grey-brown boards. The one warm thing is the
candle-end on the table, still burning in the daylight (he sat up all night). Everything in daylight colours with the
fine sepia ink line (`lib.INK`). Grey mornings, but the room is light: faces and hands read clearly.

Light (the engine's): the day comes in at the one window, in the left wall (`window_day`, of `window`); a clear morning
(`sun`) brings the sun in through it (`sun`, a far light `through` the window, a warm look); the candle (`candle`, of
`table_things#flame`). High ambient (0.86), `inside` 0.6. Looks: `sun` (warm, brighter), `dim` (greyer, its colours
gone — the room grown old with Matryona, «Оставь»).

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking at the back wall)

The room: across −1.6…1.9, 0…4.8 deep, the ceiling 2.45 (`floor` — on to 5.5 under the stairwell, `ceiling`,
`wall_back`, `wall_left`, `wall_right`; openings cut by `lib.cut`).

- Left wall: the window onto the courtyard, 3.2…4.1 m in, 0.8…2.0 m up: its frame (`window`, point `latch` — where the
  leaves meet, the game's mark for М7) and two casement leaves of their own (`leaf_near` hinged at 3.2, `leaf_far` at
  4.1), turned into the room by `window` 0…1 (the script sets their facings `leaf_near_f` 90→170, `leaf_far_f` 90→10;
  each leaf's animate marks its `latch`, where a hand opens it); rain running down their panes (`drops_near`,
  `drops_far`, `rain`). The `sill` (books, a candle-end; point `hand` — where his hand lies) with a layer that goes dark
  with water by `wet`; under it `wall_drips` (drops down the wall), `sill_splash`, `wet_floor` (a pool, by `wet`).
- Beside the viewer on the left, 1.0…1.7 m in: the tiled stove (`stove`, its face to the room, point `nail`;
  `stove_side`) — only its edge in the room's picture; his frock coat hung on it to dry (`coat_dry`, by `coat_drying`).
- Outside, through the window: the land drops to the courtyard seven metres below (`relief.js`); `yard_ground` (wet
  cobbles, puddles, a woodpile, a barrel), the house across it (`yard`, four storeys), our own wall under the window
  (`house_face`), the rain falling there (`yard_rain`, kept to the yard by its `area` — it no longer draws over the near
  wall), two people crossing (`yard_man` — the cast's `dvornik`; `yard_woman` — `nanny` in a darker dress; `_here` false
  but in the `window` layout).
- Back wall: the door to the stair at across −1.45…−0.7, hinged at −0.7, its leaf turned by `door` (0 shut, 0.6 ajar, 1
  wide; the script sets `door_f`); `passage` beyond; the long brush leaning right of the door (`brush`, point `brush`;
  not drawn while `matryona_with` has `brush`); a shelf of books; the print of Venice over the table.
- The writing table along the back wall at across 0.2…1.4 (`table`, `table_top`, `table_things` with the candle, points
  `flame`, `cup`, `papers`); her letter lying on it (`table_letter`, point `letter`, by `letter_table`); the glass of
  tea Matryona brings (`tea_glass`, point `tea`, by `tea`).
- The back-right corner: his knotty stick (`stick`); over it the cobweb (`cobweb`, point `web` — the game's mark for
  В12; by `cobweb`: 1 hanging … 0 swept — as it goes it sags, tears loose and falls, its animate); a smaller one over
  the door (`cobweb_door`, it stays). Both painted by `lib.web`.
- Right wall: his greatcoat on a peg (in `wall_right`); his hat on its nail beside it (`hat_peg`, point `hat`, by
  `hat_peg`).
- The chair, turned from the table toward the room, its seat at across 0.6, 3.45 in, 0.45 up, facing 220.

## People (the world's `cast`: modules/cast.md)

`dreamer` (place keys `dreamer_a`, `dreamer_d`; seated by `dreamer_on`, the cast's `seated` / `read`; in «Окно» У4 his
dressing gown: `dreamer_wear` = the cast's `dreamer_robe`), `matryona` (`matryona_a`, `matryona_d`; her gait the cast's
`old_walk`), `yard_man`, `yard_woman`. Faces are kept to the camera: Matryona looks between him and us when she speaks
to him.

## Keys (the game's)

`candle`, `rain`, `sun`, `dim`, `letter_table`, `tea`, `cobweb`, `window`, `wet`, `coat_drying`, `hat_peg`, `door`,
`moment` — scene.json `states` says each. The leaves' and the door's facings are the script's.

## The steps' layouts — `moment` (stage 4)

`lib.room(scene).layouts`, set at once by the script when `moment` changes (every value a layout gives: the people,
the room's things, the shot). The game's own keys stay the game's (`rain`, `sun`, `dim`, `cobweb`); `monday` and
`window` read `coat_drying` — set it first (or with them).

| moment | step | who, where | the shot |
| --- | --- | --- | --- |
| `tea` | Д1 (`tea`) | the letter and the tea on the table; he in his chair; Matryona come round to his left, asking («От барышни, что ли?») | two-shot from the front |
| `letter` | the finales' morning (`letter_morning`, `stairs_morning`) | he in his chair; Matryona holding out the letter to him | two-shot |
| `corner` | «Минута»'s last frame (`swept`, `left_cobweb`) | he reading the letter; Matryona by the corner, under the cobweb or the bare corner (`cobweb`) | the corner, both faces |
| `monday` | «Окно» (`monday`) | he in his chair (in the dressing gown if `coat_drying`); Matryona at the stove talking to his coat (У4) or in the door (У) | the room from beside the stove |
| `window` | «Окно»'s last frame (`window_open`) | the window open, the sill wet, his hand on it, his face not seen; two crossing the yard below | from behind him |

The showcase plays the five, five seconds each (`showcase.js`).

## Points the game presses

`window#latch` (М7 — the game drives `window` 0…1 as the finger pulls), `cobweb#web` (В12), and for looks and marks
`table_letter#letter`, `tea_glass#tea`, `hat_peg#hat`, `sill#hand`, `stove#nail`, `brush#brush`, `leaf_near#latch`,
`leaf_far#latch`, the people.

## Not done (stage 5, stopped)

The game's contract (docs/new-games/belye-nochi/game.md «Stage 5 — pieces») names the room's pieces `tea`
(`tea:ask`, `tea:pocket`), `letter_morning`, `stairs_morning`, `swept`, `left_cobweb`, `carts`, `monday`,
`window_open` and the mini-game `open_window` (М7 on `window#latch`, `window` 0→1; a miss — Matryona opens it). They were
drafted on this branch (commit 7bc668d0 and before: lib.film, the beats played by the script) and taken out untested
when the game stopped at a half-stage — no piece is in the scene now. What a pick-up needs:
- the motions: the contract's `sweep_high`, `open_window`, `hat_on` (the motions author's); the room's own asked of
  Kimodo but not made when stopped (`carry_tea`, `set_down`, `take_table`, `shake_head`); `stand_up`, `put_pocket`,
  `nod`, `hang` are in the cast already;
- cast parts drafted and taken out: a glass of tea carried, the long brush in both hands (held upright by her own
  points: `matryona#chest`, `matryona#hips` — a reach to `{"on": "matryona", …}` is refused: a person is not an element
  to be in the frame of), his hat in Matryona's hand (`hat_hand` takes the holder's hat colour — her kerchief's);
- the boy of «Лестница» (who brings his hat) is not in the scene;
- the yard view down from the open window (a camera at the window pitched −45°) read badly in the draft — the yard is
  a deep well; it needs a better shot.

## What moves

The rain on the panes and in the yard, the candle's flame and its light, the cobwebs in the draught, the people
breathing; the leaves, the door, the cobweb's fall and the wet move by their keys. Nothing is painted again while the
scene plays.

## Checked

GPU renders of the showcase (render 2984, the next after it): each layout's faces read; the window seen whole past the
stove; the rain no longer drawn over the near wall. Not measured (`measure_scene`) since stage 4.
