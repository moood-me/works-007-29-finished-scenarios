# The Mezzanine — notes

The upper half of the game's place 3 (scenario §4: «Наверху мезонин: скошенный потолок, столик, окошко на канал»), the
room the Lodger rented and the Dreamer moves into — the finale «Мезонин»: an evening of the white nights, two cups on
the little table, at ten she goes to the window and stands there as she stood at the parapet. Its own scene beside
`grandmother` (the room below): it is reached by the stair's hatch, and the room below and this one are never seen at
once. Stage 4: the two sit or stand (breathing), the steam rises; no walking, no camera, no pieces.

## The look

The world's lithograph touched with watercolour (`lib.js`: `wash`, `hatch`, `cut`, `box` — the same hand as the
embankment's and Grandmother's lib.js; keep them alike — and `paper`: the attic's faded blue paper with a white
trellis). Under the roof: whitewashed boards on two slopes between dark rafters, a flat strip of ceiling under the
ridge, low knee walls at the sides, the gable at the back with the little window. Pale and cool, like the white night
outside; the warm things are the wood, the tea and the patchwork.

Light (the engine's): `night_window` — the white night's light of the window (`window_light`, an unseen card in its
opening), `glow` — a little rose light of the low sky coming in through the window, `front_day` — a soft light from
the room's front (where the hatch's light and the stair are), so faces turned to us read; ambient 0.82, lilac-white.

## What is where (metres; the viewer at 0 by the front wall, eyes 1.7 m up, looking at the gable)

- The room: across −2…2, 0…4.2 deep (`floor`); the knee walls 1 m high at ±2 (`knee_left` — a shelf of books, his
  stick leaning; `knee_right` — his hat on a nail); the slopes (`slope`, two copies) up to the flat ceiling at 2.45 m
  (`ceiling`, across −0.7…0.7).
- The gable at 4.2 (`gable`): the little window at across 0.28…0.92, 0.95…1.75 m up (point `gable#window`), a print of
  a ship. Through the window, far (`view`, 14 m): the canal in the white night — the far bank's houses, the granite,
  the light water, a lamp burning on the near bank.
- The hatch of the stair from Grandmother's room in the floor, front right (painted in `floor`; point `floor#hatch`).
- The little table (`table`, `table_top`, a white cloth) at across −0.58, 2.6…3.1; on it the tea (`cups`: his cup at the
  left end, hers at the right, the teapot between — points `cups#his`, `cups#hers`), the steam over each (`steam_a`,
  `steam_b`, by `steam_his`, `steam_hers`). Two bentwood chairs at its ends (`chair`, two copies), the bed along the
  right knee wall under its patchwork (`bed`, `bed_top`).

## The people (the world's `cast`; their spots — `lib.SPOTS`, laid out by `script.js`)

- `dreamer` — `table`: at the left end of the table, turned to her and to us (115°), the cast's `seated`, his hands at
  his cup (`dreamer_reach`); `stand`: standing in the room before the table.
- `nastya` — at home, without the mantle (`look.garment: frock`). `table`: at the right end, opposite him and not beside
  him, turned to him and to us (235°), seated, her hands at her cup; `window`: standing at the little window, as at the
  parapet — look her out of it; `hatch`: just come up the stair by the hatch, with the tea.

`<id>_here`, `_look`, `_reach`, `_with`, `_mood` are the game's: give `_reach: null` when they stand (the hands at the
cups are only for the table).

## State

`steam_his`, `steam_hers` 0…1 (smooth) — the steam over each cup («две чашки, одна остывшая»: one of them 0);
`dreamer_spot` (table, stand), `nastya_spot` (table, window, hatch).

## What moves

The steam, the two breathing. Nothing is painted again while the scene plays.

## Known

Seated in the cast's `seated`, the frock and the frock coat show a pale patch over the knee (the leg's skin-coloured
shape through the hanging cloth) — the cast's garments over that motion; the same in Grandmother's room. Not mended
here (the cast is shared; the motions artist owns `seated`).
