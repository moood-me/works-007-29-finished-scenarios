# The Field by the Hangar

Stage 2 of the game (the look): place С3 of the scenario — the field by the hangar at 22:30 (chapter 1, step 1.3): the
Chilean mail just in, the field's floodlights on, Roblet in front of the gate with his cap in his hands and his tool box
packed, Robineau with his folder, Rivière looking at the old man's hands. People only stand (their loops); no camera
moves.

- **Where things are.** Camera `picture` (the gaze lowered a little, `look` 0.08, so the three stand whole) from the edge of the concrete apron (`apron`, a plane 1…21 m ahead). The
  hangar (`hangar`, an unseen anchor at across 7.5, distance 18, turned 16° toward the viewer) is built of cards on it:
  `hangar_front` (corrugated iron, arched top, the gate's opening x ±6.2 × 6.4 m left empty; the sliding leaves pushed
  aside; the gate lamp `#gate`, the work lamp `#work` over the field's switch box `#switch`), `hangar_side` (its near
  side outside), and inside: `hangar_floor`, `hangar_back` (spare propeller, wheel, tool board, shelves),
  `hangar_wall` (its far side), `hangar_ceiling` (a card laid face down), `hangar_lamps` (three on cords — parts 0, 4.5,
  9 m back — lights `#l0…#l2`), `spare_engine`.
- **Before the gate** the plane (`plane`, a side profile card, nose left; `#cockpit`, `#wheel`), the workbench, the
  drums. **The field** (`field`, 6 × 3 km of grass, the landing strip; its painting is in its own metres, y = 1500 − distance), the lamps along its edge (`edge_lamps`, copies),
  the windsock (`windsock`, its sock a layer swaying in the wind), the floodlight masts (`floods`, three at 95 m between
  the office and the hangar; lights `#f0…#f2`), the fence and gate at 140 m, the office (`office` + `office_windows`:
  the bureau's lit windows below, Rivière's window upstairs by `office`, the red lamp on the radio mast), the town's
  lights on the horizon (`far_lights`). **The sky**: the blue night, stars, the storm bank low in the south (left) with
  silent lightning in it (`flash`, its animate: a window of 4.5 s holds one flicker or two, or none).
- **Light.** The night is the light (ambient blue, haze); the moon is behind the viewer (`moon`, a far light) and lights
  the faces; the floodlights cold white from the far left, the hangar's lamps warm from behind the people.
- **People.** Cast: `modules/cast` (style `aero`). Roblet (`hold_low`, the cap) front left at 3.5 m, facing us, his tool box at
  his side; Rivière (`hands_behind`) behind him in the middle, looking at him; Robineau (`hold_waist`, the folder) on
  the right, looking at Roblet. Placed so all three faces turn toward the viewer.
- **Keys.** `floods` (the floodlights and the edge lamps), `hangar` (its lamps; switched — the inside lamps' bulbs repaint),
  `office` (Rivière's window).

## Stage 4: the whole night on the field

Made for stage 4 of the game: everyone the scenario puts on the field, the two planes and what they do, as keys.
Still no motions of people.

- **People** (cast `modules/cast`): besides Rivière, Robineau and Roblet — **Pellerin** (`pellerin`, before the
  viewer on the right, his helmet pulled off in his hand; chapter I), **the European pilot** (`pilot`, before the
  viewer on the left, his helmet in his hand; chapter IV), **the mechanics** at the plane: `mechanic` (the young one,
  at the engine), `mechanic_b` (with a mail sack — `_with: ["sack"]`), `mechanic_c` (by the tail). Roblet by
  `roblet_spot` (`script.js`): `front` (before the gate, his box at his feet), `engine`, `chocks`. Pellerin and the
  pilot stand where Rivière, looking at them, turns his face to the viewer.
- **The plane** (`plane`: `chilean` — the blue band; `european` — the red band; `none`), moved by `plane_a`,
  `plane_d`, `plane_h` (it lands, takes off: the scene places it, a piece moves it), pitched about its wheel by
  `plane_pitch`; `engine` (the propeller a blur, the exhaust glowing — layers `blades`, `disc`), `plane_lights` (its
  landing lamp, light `plane_lamp`), `chocks`. Points `plane#nose`, `plane#wheel`, `plane#cockpit`.
- **Things:** `toolbox` (1 at Roblet's feet, 0 gone; hidden while he holds it — `roblet_with` `toolbox_held`, a part
  of the cast), `workbench` (`tools` / `empty`, under its own lamp — light `bench_lamp`), `bags` (the mail bags by the
  plane), `madame_window` (her silhouette in Rivière's lit window upstairs — the layer `madame` of `office_windows`,
  point `office_windows#madame`).
- Seen on the GPU (a sheet: Pellerin just in with the mechanics; the European ready with the bags, Roblet at the
  chocks, the pilot, her silhouette upstairs; the European in the air over the field, its lamp lit).
- Not: the plane rolled into the hangar (only seen in the bureau's window, as the scenario has it); the floodlights
  going out one by one (`floods` is smooth, all together — one by one is stage 5's).
