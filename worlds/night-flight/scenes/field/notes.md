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

## Contract for the check

```json
{"beats": {"dark_drone":{"after":[],"tells":["dark_drone:switch"],"seconds":6}, "landing":{"after":["dark_drone"],"tells":["landing:down","landing:stop","landing:pellerin"],"seconds":14}, "breeze":{"after":["landing"],"tells":["breeze:say","breeze:laugh","breeze:hands"],"seconds":10}, "gloves":{"after":["breeze"],"tells":["gloves:pockets","gloves:riviere"],"seconds":6}, "touch":{"after":["gloves"],"tells":["touch:hand","touch:turn"],"seconds":6}, "pass":{"after":["gloves"],"tells":["pass:by"],"seconds":5}, "fine":{"after":[],"tells":["fine:near"],"seconds":6}, "fine_robineau":{"after":["fine"],"tells":["fine_robineau:pocket"],"seconds":8}, "fine_self":{"after":["fine"],"tells":["fine_self:give","fine_self:pocket"],"seconds":8}, "fine_tear":{"after":["fine"],"tells":["fine_tear:torn","fine_tear:look"],"seconds":6}, "roblet":{"after":[],"tells":["roblet:say","roblet:hands"],"seconds":10}, "order":{"after":["roblet"],"tells":["order:laid"],"seconds":4}, "roblet_go":{"after":["order"],"tells":["roblet_go:cap","roblet_go:gate"],"seconds":16}, "box_lift":{"after":["roblet"],"tells":["box_lift:held"],"seconds":4}, "box_given":{"after":["box_lift"],"tells":["box_given:look"],"seconds":5}, "palm":{"after":["roblet"],"tells":["palm:out"],"seconds":3}, "chocks_pick":{"after":["palm"],"tells":["chocks_pick:say","chocks_pick:gone"],"seconds":8}, "european":{"after":[],"tells":["european:switch"],"seconds":10}, "twice":{"after":["european"],"tells":["twice:wipe","twice:look"],"seconds":8}, "at_chocks":{"after":["european"],"tells":["at_chocks:end"],"seconds":4}, "who_checked":{"after":["european"],"tells":["who_checked:ask","who_checked:under","who_checked:bench"],"seconds":12}, "robineau_out":{"after":["european","twice","at_chocks","who_checked"],"tells":["robineau_out:near"],"seconds":8}, "window":{"after":["european","twice","at_chocks","who_checked","robineau_out"],"tells":["window:her","window:pilot"],"seconds":8}, "folder":{"after":["window"],"tells":["folder:look","folder:paper","folder:shut"],"seconds":8}, "ready":{"after":["folder"],"tells":["ready:say"],"seconds":8}, "runup":{"after":[],"tells":["runup:look"],"seconds":4}, "hand_up":{"after":["runup"],"tells":["hand_up:up"],"seconds":3}, "takeoff":{"after":["hand_up"],"tells":["takeoff:chocks","takeoff:off","takeoff:gone"],"seconds":16}, "stand_down":{"after":["runup"],"tells":["stand_down:pilot","stand_down:robineau"],"seconds":8}, "dark_field":{"after":["stand_down"],"tells":["dark_field:still","dark_field:walk"],"seconds":10}, "waits":{"after":["runup"],"tells":["waits:say"],"seconds":8}, "timetable":{"after":["waits"],"tells":["timetable:chocks","timetable:gone","timetable:hand"],"seconds":18}}}
```

## Stage 5: the pieces

The game's pieces of the field (the contract: `docs/new-games/nochnoj-polyot/game.md` «Stage 5 — pieces»): `lib.js`
`film(scene)`, played by `script.js` (`scene.kit.beats.play`; the module `beats`). Each piece's `from` sets every value
it begins at but the game's (`<id>_here`, `<id>_mood`; the variant keys `bends`, `robineau`, `roblet`; in chapter IV
`roblet_spot` and `workbench`, which the step sets as before). The shots are cameras of their own (the eye and the
point it looks at), from where the faces look.

- **The asks done.** `lever` (0…1: the switch's handle, a layer of `hangar_front` on its axle at `hangar_front#switch`,
  turned by animate — half round down at 0, up at 1); the floodlights one by one: `floods` stays the game's key, the
  script sets `flood_0`…`flood_2` as it passes ⅓, ⅔, 1 (each mast's lamps a layer `lit0`…`lit2`, its light `on` its
  key; the edge lamps with the first); the insert `paper` (`paper_open`; the typed order «Roblet, mechanic, is
  dismissed…» on the box's lid, the signature from `paper#from` to `paper#to` shown as `ink` rises — painted once
  under a strip of paper that draws back, the pen's nib going along —, `blot`); the insert `folder` (`folder_open`;
  the board's letter «On suspending the night flights», typed, stamped URGENT); `cowling` (the European's cowling
  open, its panel up, the engine bare; point `plane#cowling`); place keys (`<id>_a`, `<id>_d`) for Rivière,
  Robineau, Pellerin, the pilot and the three mechanics. Roblet's `SPOTS` moved to `lib.js` (script.js reads them; a piece's `from` sets a spot's place values, never `roblet_spot`).
- **Where.** Rivière at the switch stands at −1.2, 19.93 facing the wall (turn 16), his right hand to the switch.
  Chapter I: after the landing Pellerin stands before the plane at −0.6, 8.6 with the mechanics round him, Rivière in
  the shadow at −3.6, 9.8. Chapter IV: Rivière left of the plane's nose at −2.6, 13.0 and the pilot by the fuselage at
  2.0, 13.15 — level with each other, so each looks at the other in profile, and each one's shot is taken from the
  front on the side he looks to; Robineau at Rivière's shoulder (−3.4, 12.4) or by the hangar's wall (−4.8, 16.0) as
  the game's `robineau` says.
- **The sky painted wide** (`sky`, box [−2.2, −0.6, 6, 1.25]): the pieces' cameras turn up to some 60° aside; the
  picture's sky stopped at about 65° and showed black past it.
- **Faces follow the look.** A face goes where its `_look` is: one who looks at someone farther from the lens shows the
  back of his head whatever his turn (seen on the GPU: Rivière looking at the pilot by the plane). The places above
  are laid out for it.

| piece | after | what |
| --- | --- | --- |
| dark_drone | — | dark; the Chilean's lamp far out on the right; mechanics by the drums looking up; Rivière walks to the switch, hand on it |
| landing | dark_drone | the Chilean comes down nose first onto the lit field to its stand, the engine dies; Pellerin comes round the nose, pulls off his helmet; the mechanics walk up; Rivière back into the shadow |
| breeze | landing | Pellerin among the mechanics; they laugh; he shows the ridge with both hands |
| gloves | breeze | close on his hands: gloves off, hands into pockets; close on Rivière in the shadow; then both in the frame (the chance) |
| touch / pass | gloves | Rivière's hand on his shoulder, he turns / Rivière walks past him toward the hangar |
| fine | — | Robineau before the Chilean with the form; Rivière comes to him |
| fine_robineau / fine_self / fine_tear | fine | he signs and pockets it / Rivière signs it and gives it back / Rivière tears it before the mechanics |
| roblet | — | Roblet before the gate with his cap, the box at his feet; the mechanics slow and turn; close on his hands |
| order | roblet | Rivière lays the order on the box (М2 next: the insert `paper`) |
| roblet_go | order | Roblet's cap on, the box up, across the lit field to the dark, gone |
| box_lift / box_given | roblet / box_lift | Rivière lifts the box and holds it out (М3) / Roblet holds it; the mechanics look at Rivière |
| palm / chocks_pick | roblet / palm | Roblet with the spanner, Rivière's palm out (М4) / Roblet picks up the chocks and goes to the wheel |
| european | — | ten to three, dark; the European warming under the lamps; bags loaded; Rivière goes out to the switch (М8) |
| twice / at_chocks / who_checked | european | Roblet shuts the cowling, wipes his hands / Roblet at the chocks / the pilot asks the young mechanic, looks under the cowling; the empty workbench |
| robineau_out | european (and the three) | Robineau in from the office's side, to Rivière's shoulder |
| window | european (and the four) | Rivière back from the switch; the camera to her silhouette in the lit window upstairs; back to the pilot |
| folder | window | Robineau looks up at the window, opens the folder: the board's letter (insert `folder`), shuts it |
| ready | folder | by `bends`: the helmet on and waiting / turned to Rivière / the mechanics talk low, the hand on the plane |
| runup | — | the engine runs up; the pilot looks at Rivière; close on Rivière (Ш3) |
| hand_up / takeoff | runup / hand_up | Rivière's hand raised (М7) / the chocks pulled, the plane runs and goes north, the lights melt; Robineau by `robineau` |
| stand_down / dark_field | runup / stand_down | the mechanics freeze or the pilot takes his helmet off; Rivière and Robineau to the switch (М8 off) / the engine dies, Rivière walks away past Roblet |
| waits / timetable | runup / waits | the pilot looks at Rivière, the window, him / a mechanic pulls the chocks, the plane goes, Rivière's hand up as its lights are in the sky |

### What is not right yet

- Two people talking stand level, in profile to each other: a shot of one is 3/4 at best; Robineau looking up at
  the window (`folder`) is seen over his shoulder (the window is ahead of the lens).
- Seen on the GPU (two sheets, 07:12 and 07:18): the switch and its lever (down, up), the floodlights one by one
  (`floods` 0.5: the first mast alone), the inserts `paper` (the order, the signature, the blot) and `folder`, the
  cowling open, the landing's approach, the people's places; not yet the sky painted wide and chapter IV's new places.

- The motions of the contract (`helmet_off`, `show_hands`, `laugh`, `engine_work`, `pull_chocks`, …) are named but
  were not in the cast when this was written (the motions author's branch); until they land the people do nothing new.
- **The approach.** `dark_drone`/`landing` put the Chilean's lamp far out on the right (110, 330, 35 m up), not the
  game's `PLANE.coming` (−90, …): the plane is a side card, nose left, so it must come in moving left to come nose
  first. The game's own `PLANE.coming` keys are overridden by the piece's `from`.
- **Robineau at the workbench** (1.2): the workbench (12.6, 11.8) is out of the picture's frame; Robineau waits before
  the plane at 1.7, 5.4 instead.
- **`floods` one by one** reads `scene.get('floods')` on its 'change' and 'move': if a move's 'change' already gives the
  target, all three masts would come on at its start — untried on a moving key (a sheet sets values at once).
- `timetable` tells `hand` before `gone` (his hand goes up while the lights are still in the sky; «Gone» as they melt).
- `european`'s Robineau reads the game's `robineau` key (the contract lists it only for `takeoff`/`timetable`): the
  game should set it from the step's start.
- `runup` does not set `roblet_spot`/`workbench` (the step's, as in `european`).
