# The Bureau

Stage 2 of the game (the look): place С2 of the scenario — the line's bureau at night, the moment of 3.1 (01:45): Madame
Fabien has come in from the field and stands by the door, her coat thrown on, no hat; Rivière has got up and stands by
the map, turned to her; the European mail's pilot has got up from the bench, his helmet in his hand; the telegraphist
bent over his table, the inker running. People only stand (their loops); no camera moves.

- **Where things are.** Camera `picture` from the room's open side. The room is 6 m wide (across −3…3), its floor 1.6…7.4 m
  ahead, 3.3 m high: `floor` (boards, a runner before the map), `back_wall` (the window on the field cut out at across
  0.8…2.8; the door of Rivière's office on the left, its frosted glass lit — `#office`), `left_wall` (the door onto the
  field open at 4.0…5.1 m ahead — the night, the yard lamp and the field seen through it; coat hooks, a photograph),
  `right_wall` (the timetable board, a radiator), `ceiling` (a card laid face down). On the back wall: `map` (the three
  lines from the field — the city never named — south, west, north; the flags: the west's, the north's, the European's
  at the field, the Patagonian's blue alone on the south line — its own layer `blue`; points `#field`, `#blue`), `clock`
  over it (hands by `time`, the second hand ticking — `#face`), the window (`pane` — glass, the room faintly in it;
  `window_frame`). Under the window `bench` (the pilot's gloves and map case left on it). On the right the telegraph
  table: `tel_desk` (its front, the tape hanging over its edge to the floor — the layer `tape`, creeping down while
  `tape` is 1), `tel_top` (the key, forms, a spike), `tel_inker` (its reel turning — `#ink`), `tel_lamp`, `tel_chair`.
  Near the viewer on the right Robineau's desk: `rob_desk`, `rob_top`, `rob_lamp`, `rob_phone` (`#phone`). Over the
  room `ceiling_lamp` on its cord, swaying a little in the draught from the open door; dust in its light (`motes`).
- **Outside.** `sky` (blue night, stars; the storm bank low where the window looks, silent lightning in it — `flash`, its
  animate), `field` (the dark grass, the strip), `yard` (the hangar 75 m off seen through the window, its gate lit, the
  European mail's plane in it under the lamps, two mechanics; the edge lamps; an unlit floodlight mast — its light
  `#gate`), `yard_lamp` (a lamp on a post outside the door, seen through it, rimming her from behind).
- **Light.** Warm inside, blue outside. The hanging lamp (`lamp`), Robineau's desk lamp, the telegraph lamp, the office
  door's glass; a lamp behind the viewer (`front_lamp`, no element: the room goes on behind the camera) so the faces turned
  to us are lit. `inside` 0.25 lets in a little of the moon.
- **People.** Cast `modules/cast`. Madame Fabien (`coat_clutch` — her arms wrapped round her, holding her coat shut) by
  the door, looking at Rivière; Rivière (`hands_behind`, his loop in the field; indoors — no hat, a jacket over his own look) before the
  map, looking at her; the pilot (`stand_easy`, the helmet hanging from his right hand — part `helmet_held`) by the
  bench, looking at her; the telegraphist (`desk_lean` — leaning over the table on his elbows, his right hand on the key by `telegraphist_reach`) at the table, looking at
  Rivière.
- **Keys.** `lamps` (the three lamps), `office` (the office door's glass), `tape` (the inker running), `time` (the
  clock, minutes after midnight: 105 now; the scenario's 22:05, 23:20, 00:30, 01:35, 02:10, 02:45 are all one key).

## Stage 4: everyone, the hours, the flags

Made for stage 4 of the game (all its places): the people the scenario puts in the bureau, where they sit, the
map's flags and the window's hours as keys. Still no motions of people.

- **People** (cast `modules/cast`), laid out by `script.js` from their spot keys (their place, turn, loop, seat):
  Rivière (`riviere_spot`: `map` — before the map; `desk` — by Robineau's desk, at the telephone; `bench` — sitting
  on the bench by the telegraph), **Robineau** (`robineau_spot`: `desk` — standing behind his desk with his folder;
  `writing` — sitting at it over his report, `desk_lean`, the folder put down; `bench` — sitting on the bench beside
  Rivière), the European pilot (`pilot_spot`: `standing`; `bench` — sitting, his helmet on his knees), the
  telegraphist (`telegraphist_spot`: `table`; `bench` — sitting on the bench, dozing with `telegraphist_mood`
  `eyes_closed`), **the Asunción mail's pilot** (`asuncion`, one place, before the bench, turned toward the map),
  Madame Fabien by the door. Seated: the cast's `fly_seated` on the bench's seat (`<id>_on`, 0.47 m), `desk_lean` at
  a desk. Robineau's desk now shows its front (`rob_desk`) and his chair behind it (`rob_chair`): he sits facing us.
- **The map's flags** (`map`): `blue` (south — Río Gallegos, san_julian, trelew, sea — the bearing, off), `west`
  (air — over the Andes, field, off), `north` (air — up the river, field, off), `red` (field, north, off). Points
  `map#blue`, `map#west`, `map#north`, `map#red` (each flag where it stands), `map#field`.
- **The hours** (`script.js` from `time`): `dusk` (18:30–20:30 — the prologue's evening and the next evening) and
  `dawn` (5:30–8:00) — the light's looks and the sky's painting (afterglow; a grey overcast lifting; the storm bank
  only at night).
- **Outside the window** (`outside`, the `yard`): `european` (the night: the European in the lit gate), `empty`
  (gone), `rolled` (dawn: being rolled back into the hangar), `landing` (the next evening: the floodlight lit, the
  Chilean mail coming down), `idle` (the next evening with the night mail suspended: floodlights dark, the gate half
  shut, Pellerin smoking by his plane).
- Seen on the GPU (a sheet of four moments: the pilot on the bench; Rivière and Robineau on the bench; dawn with the
  telegraphist dozing and Robineau writing; the next dusk with the Asunción pilot).

## What is not right yet

- **Faces are small.** The room is shown whole from its open side, and the people stand 4.5…6.3 m off: they read as
  figures, their faces (eyes, brows) barely. A picture camera has no lens to choose; nearer people would mean a smaller
  room or a cut to a shot — not this stage's.
- **Sitting.** Every Kimodo take of someone seated at a desk (tapping a key, writing, typing) leaned back as in an
  armchair; only “leans forward with their elbows on the table” sat at the table. His right hand is put on the key by
  `telegraphist_reach`; it does not tap. Dozing on the bench is sitting upright with the eyes shut (a head fallen
  forward is a motion for stage 5); Robineau writing leans low over his desk.
- **The pilot's jacket** in the flat style flares at the thighs like a short skirt when his hip is shifted.
- The map's flags are small at this distance: they read only as specks of colour by the field.
