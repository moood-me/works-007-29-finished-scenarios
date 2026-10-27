# The Churchyard

Stage 2 of the game (the look): the churchyard (С6) on a late October Sunday morning, the bell ringing — the moment of
3.1: Mrs Grose has taken Flora to the church door; Miles has stopped by an old table tomb on the path and turned to
the governess ("When am I going back to school?"). No motion of people, no camera moves.

- **Where things are.** The viewer stands on the gravel path among the graves (camera `picture`, horizon 0.5). The
  land is `relief.js` — rising 0.5 m from 6 to 18 m ahead (the churchyard's old raised ground), falling away beyond
  the wall — painted by the draped plane `land`: the damp grass, the graves' mounds, the path up to the porch and its
  branch to the gate, the lime's fallen leaves; the meadow and the autumn fields beyond. `wall` (with the gate at
  across −14) at 33 m, `far_land` a card at 700 m.
- **The church** is built on the unseen anchor `church` (across 3, distance 24, facing 150 — turned so its west end
  and south side are both seen): `south_wall` (rubble, quoins, two buttresses, three two-light windows, the south
  door's arch), `roof` (a plane, tilt 46.8, centre at its slope's middle), `west_end` (the gable, its three lancets,
  the bellcote on its point: the opening cut through to the sky, the `bell` and its `clapper` layers swung by
  `west_end.animate.js`; point `west_end#bell`), `chancel` and `chancel_roof` (lower, set back), the `porch` (its
  arch cut open, a sundial in its gable), `porch_left`, `porch_right`, `porch_floor`, and `doorway` — the open door
  into the candlelit nave (`glows`, its light `doorway#candles`, point `doorway#door`). lib.js: `rubble`, `quoins`,
  `window2`, `slates`, `weathered` (a headstone's lichen and worn letters), `crown`, `ROOKS`.
- **The churchyard.** Headstones — `stone_round`, `stone_shoulder`, `stone_cross`, each copies leaning and tinted
  a little; the table tomb on the unseen anchor `tomb` (across −1, distance 4.5): `tomb_end`, `tomb_side`, `tomb_top`
  (point `tomb_top#corner` — where Miles's hand rests). The great `yew` on the left, the `lime` framing the top right
  (`leaves` fall from it), `elms` (copies) beyond the wall with `rooks` wheeling over them, `tufts` of long grass.
- **People** (cast: modules/cast). Miles (−1.68, 4.5), `hand_on_stone`, his left hand on the tomb (`miles_reach`
  `{l: "tomb_top#corner"}`), looking at the governess. The governess (1.0, 4.1), `book_before` with her prayer book
  (`governess_with: ["prayerbook"]`), looking at Miles (`thinking`): she does not answer. Mrs Grose (1.05, 18.25)
  at the porch, turned to the door, Flora's hand in hers (`grose_reach` ↔ `flora_reach`); Flora looks back at Miles.
- **State.** `bell` 0…1 — the bell rung (1) or still (0): the swing grows or dies away over a couple of seconds (the
  animate's own lag), so 3.2's "the bell falls silent" is `bell` → 0.
- **What moves.** The bell and its clapper, the people breathing, the crowns and the grass in the air, the high cloud
  drifting, the rooks, leaves falling from the lime.
- **Light.** The sun low behind the viewer on the right (`sun`, from bearing 145, 16° up, pale gold): the long south
  wall lit, the west gable in shade, the shadows long ahead to the left; a morning haze (0.2) over the far elms;
  saturation 0.82.

## What is not right yet

- The faces are small here (the people 4 m off, Grose and Flora 18 m): a game's close shot frames them; a camera
  target's close view of the two in front goes round behind them (the operator) — a close-up needs its own camera.
- `hand_on_stone` (Kimodo: "rests their left hand on a table") gave a hand reaching forward-left at the hip, not on
  a surface at the side; the reach puts it on the tomb, but Miles leans a little forward over it.
- The bell is small in the wide view (it is high on the far gable).
- The trees are the world's leaf clumps (as at the lawn and the lake): dense, a little bubbly.
