# The Tailors' Shop

Stage 2 of the game (the look): М3, the tailors' shop on a Friday after the launch, in the rain (1.2, 2.4) — the town's
young men at their machines, Agustín's machine under its cover, the board that says no politics are talked here; the
colonel come in with the wall clock wrapped in sacking (2.4: he has brought it to sell). No one moves but a look; no
camera moves.

- **Where things are.** The viewer stands at the room's open side (camera `picture`, horizon 0.42). Tiled floor at 0
  (`floor`: pressed cement tiles, wet footprints in from the door, scraps and thread under the machines), the plank
  ceiling at 3.3 (`ceiling`, a card laid face down), the back wall at distance 6.2 (`back_wall`: the street door's
  opening x −2.6…−1.3 and its two leaves folded back flat, the board `back_wall#sign` — its words `tr`, patterns on
  nails, a rail of finished jackets, a calendar), the side walls at across ±3.4 from 1.3 to 6.2 (`left_wall`: bolts of
  cloth on shelves, the fitting mirror painted, a straw hat; `right_wall`: the window onto the alley x −0.75…0.45, a
  shelf of spools, shears, a tape, a slate). Shared wash and dado: `lib.js`.
- **The machines**: four tables in a row at distance 4.27 (`table` copies, their tops `table_top` at 0.78), three
  treadle machines seen from their back (`machine` copies 0…2 at across −0.9 Germán's, 1.6 Alfonso's, 2.85 Álvaro's;
  `machine:k#needle`), Agustín's at 0.35 under its cover (`cover#cover`), the stools behind (`stool` copies; Germán's
  pushed back, he has stood up). The tailor's dummy with a half-made white jacket in the front right (`dummy`). The bulb
  on its flex over Agustín's machine (`bulb`, light `bulb`, key `bulb`).
- **Outside**: through the door the street (`street`) and the houses across it (`opposite`); through the window the
  alley (`alley_ground`, `alley` — a banana leaf in the wind); the rain over both (`rain_street`, `rain_alley`, key
  `rain`); the sky.
- **Light**: the grey midday in at the door and the window (daylight lights `door_day`, `window_day`), a weak far
  `day`, the bulb's warm pool on the machines.
- **People** (modules/cast, style `macondo`): the colonel by the door (`stand_bundle`, part `bundle` — the clock in its
  sacking hanging by its knot from his right hand), looking at Germán; Germán, standing between the tables
  (`stand_side`), his right hand on the cover's top (`herman_reach`), looking at the colonel; Alfonso and Álvaro at
  their machines (`sit_machine`), their hands on the cloth at the table's edge (`<id>_reach`) — Alfonso looks at the
  colonel, Álvaro at his needle. Each sits a little to the right of his machine's middle, where the needle is (from
  here the machine's arm would hide his face otherwise).
- **Showcase**: they look at him; Álvaro looks up at the bundle, the colonel down at it, Germán at his collar,
  Alfonso at the street door; back.

## What is not right yet

- `stand_bundle` is Kimodo's plain standing with the arms hanging: the arm does not take the bundle's weight. Asked for
  "a heavy bag / a small suitcase / a bucket in the right hand", Kimodo lifted the hand to the shoulder, crossed the
  arms or held the arm out; asked for "a bundle against the stomach / a box against the chest", it held the hands out
  at the chest — none was kept.
- `sit_machine` holds the hands up before the chest; the hands are brought to the table by `reach`, so the forearms
  lie as a reach lays them, not as a sewer's do. The tailors' feet are not on the treadles.
- Germán's hand on the cover is a reach from a motion whose hand rests at the thigh: the arm is straight, a little
  stiff.
- Known in the engine and not met here (no fire, no rope, no cloth hung behind, no skirt): a Kimodo motion put in a
  scene turning to a wall; hands in the lap sliding to the sides in a module's clip (here the hands are on the table
  by `reach`, so it does not show).
