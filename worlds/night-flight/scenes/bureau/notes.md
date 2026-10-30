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

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it after laying the people out by their spots; the game sets
`beat`). `lib.SPOTS` — the spots script.js lays out and the pieces start from; a piece's `from` never sets a spot key,
only the places (a piece that leaves someone at a spot sets the spot and its values together). The shots are cameras of
their own (the eye and the point it looks at — the operator would go round toward the room's open side): every line
said to someone is in a medium or close shot.

- **The asks.** `riviere_spot` + `inker` (at the telegraph table's left end, the inker before him) and `flags` (close
  before the map's south, his right hand free); `madame_spot` (`door`, `inker` — behind the telegraphist, over his
  shoulder) and her place keys `madame_a/_d`; the Asunción pilot's `asuncion_a/_d`. **The map** (`map.js`, its
  `animate`; geometry in `lib.MAP`): `flag_hand` (none / blue / north / red — that flag lifted from its place into the
  layer `led`), `flag_to` (san_julian / sea / field / north / off), `flag_u` (0…1 along its way), `flag_slip` (0…1:
  sliding off, askew); Rivière's right hand on it (`riviere_reach` `map#led`, script.js) while it is in his hand. Points
  `map#san_julian`, `map#sea`, `map#north_end`, `map#led` (moving), with `map#blue`, `map#north`, `map#red`,
  `map#field`. **The drawer**: `map_drawer` (a small table under the map's left half; `drawer` 0/1; point
  `map_drawer#drawer`). **The inker**: `tape_pull` (0…1 — the strip drawn out of it level to the left, the layer
  `pulled`), `tape_mark` (words / line / cut). **The office door** (new, for going in and out by it): the leaf
  `office_door` (`office_door` 180 shut … 98 open into the office; the frosted glass and its light moved onto it), the
  opening cut through `back_wall`, the office's lamp-lit wall `office_room` and floor `office_floor` behind it.
- **The yard at dawn** (`yard`, `outside` rolled): with the game's `roblet` keep, the one at the wing is Roblet (his
  blue jacket, his grey head); else a mechanic, and a bare workbench by the gate.
- Robineau comes back from supper in his overcoat (`robineau_wear` {garment: coat}) and takes it off in `coat_off`.
- Chapter IV's pieces read the game's `robineau` (3.7: work / sit / silent) for where Robineau is (work — at his desk
  writing); from the bearing on, the blue flag is where the game put it (the pieces do not set it).

| piece | after | what |
| --- | --- | --- |
| inker | — | 19:50: the inker, the telegraphist tapping, Rivière goes close to the map (М1 `flag`) |
| ache | inker | he turns from the map; his hand to his side |
| papers | — | 22:05: Robineau comes from his desk to him at the map |
| out | papers | Rivière goes out by the field door |
| asuncion_flag | — | 23:20: the Asunción mail coming down in the window (`outside` landing, the game's), the inker; close on Rivière at the map (М1 `flag_north` next) |
| asuncion_in | — | 23:20 (after М1 `flag_north`): the Asunción pilot comes in, lays his report on the desk, turns to Rivière, who comes forward |
| storm_south | asuncion_in | the inker; the telegraphist reads; Rivière goes to the table and gives the order |
| back | — | 00:30: Robineau back from supper in his overcoat, to his desk |
| folder_shift | back | he shifts the papers in his folder |
| to_map | back | Rivière goes to the map, his back to the room |
| coat_off | back | Robineau sees the tape, falls silent, takes off his overcoat |
| pilot_in | coat_off | the European pilot comes in, looks at the map, sits on the bench |
| phone | — | 01:35: Rivière takes the receiver |
| phone_robineau | phone | he holds it out to Robineau; Robineau listens, hangs up, eyes down |
| phone_down | phone | Rivière hangs up |
| she | — | she comes in at the field door and stops; Rivière turns; the pilot gets up |
| she_robineau | she | Robineau moves away to his desk |
| tape | — | 02:15: the inker; Rivière goes to it, the tape in his hands (М9) |
| comodoro | — | after М9: the telegraphist reads off the tape, raises his eyes; her face; the pilot |
| minute | — | 02:16: the clock; the telegraphist's hand over the key; ends on the two — Rivière at the inker, the hand over the key (the timer; the choice is Rivière's) |
| bearing_sent | minute | he sends it, takes his hand off; her face |
| hers_asked | minute | Rivière comes toward her and asks |
| own_sent | minute | he taps as Rivière dictates, raises his eyes; her face |
| last_tape | — | 02:25: Rivière draws the last tape (`tape_mark` the game's); its close, her face |
| tape_torn | last_tape | he tears it off and gives it to her; she holds it to her |
| over_shoulder | last_tape | she goes behind the telegraphist and reads over his shoulder |
| scraps | last_tape | scraps of tapping; the inker stops |
| silence | — | 02:45: the clock, the telegraphist counting; Rivière close at the map (М1 `flag_sea` / `flag_hold`) |
| all_gone | silence | after М1: her face by the field door, turned to the telegraphist (his «that's all» on it) |
| pilot_out | — | after М1: the pilot gets up, puts on his helmet, goes out |
| to_office | pilot_out | Robineau leads her out by the office door |
| shoulders | — | 02:48: Robineau back by the office door, at his desk; his shoulders shake; ends on the two — Rivière at the map, Robineau at his desk (the choice is Rivière's) |
| work | shoulders | he sits to his report; Rivière's hand over his shoulder, not touching |
| sit | shoulders | Rivière sits on the bench; Robineau beside him; the telegraphist looks, turns back |
| alone | shoulders | Rivière to the map; Robineau takes his folder and goes out without his coat |
| victory_map | — | 03:10: Rivière comes out of the office to the map (М1 `flag_red`) |
| silence_map | — | 03:10: he comes out to the map, looks at the red flag, does not touch it |
| dawn | — | 06:00 (`roblet` the game's): the telegraphist dozing on the bench; toward the window; Rivière close at the map (М1 `flag_down`) |
| flags_down | — | after М1 (`robineau` the game's): the other flags into the drawer one by one |
| next_evening | — | 19:40 (`outside` and the flags the game's): Robineau comes in to his desk |
| bench_again | next_evening | he sits on the bench without asking, catches Rivière's eye, gets up; Rivière to the map |
| report | next_evening | he lays the report on the desk |
| cough | next_evening | he coughs |
| montevideo | next_evening | the inker; the telegraphist reads; Rivière close at the map (М1 `flag_blue`) |
| chilean_lands | — | after М1 (`outside` landing): toward the window — the Chilean comes down |
| release | next_evening | Rivière looks at the map a long time; close at the map (М1 `flag_late`) |
| telegram | next_evening | Robineau lays the telegram; Rivière goes to the window, the dark field beyond |

## After the browser test (2026-10-29)

- The choices after `minute` and `shoulders` are Rivière's (a mark on `riviere#chest`): both pieces ended on a shot
  without him (the key close; Robineau at his desk) — the mark had no place, the play waited. They now end on shots of
  the two: `SH.minute` (from the front right: Rivière at the inker, the telegraphist's hand over the key) and
  `SH.shoulders` (Rivière at the map, Robineau at his desk). Seen on the GPU (render 1262).

## Stage 5: what is not right yet

- Faces turned to someone at the back of the room are seen in profile (the room is seen from its open side; a camera
  behind them would look into the nothing there).
- Sitting down on the bench is `sit_down` played where they stand before it, then the seat (`_on`) and `fly_seated`.

## Polish (2026-10-30)

- `receiver_off` (bool): the telephone's earpiece gone from its hook while Rivière or Robineau holds it (2.4: `phone`
  sets it, `phone_robineau` and `phone_down` clear it as it is hung up).
- 2.4: the telephone's shots from before his face (`SH.desk`, `desk_close` on the right, toward Robineau's desk —
  before, they were behind his shoulder); listening, he looks out past the lens.
- 3.3: `minute` ends on all three — Rivière at the inker turning to her by the field door, she, the telegraphist's
  hand over the key (`SH.minute_her`): the one who chooses, the one the choice is for.

## Contract for the check

```json
{"beats": {"inker":{"after":[],"tells":["inker:read","inker:map"],"seconds":6}, "ache":{"after":["inker"],"tells":["ache:say","ache:hand"],"seconds":4}, "papers":{"after":[],"tells":["papers:near"],"seconds":6}, "out":{"after":["papers"],"tells":["out:door"],"seconds":6}, "asuncion_flag":{"after":[],"tells":["asuncion_flag:landed","asuncion_flag:map"],"seconds":7}, "asuncion_in":{"after":[],"tells":["asuncion_in:report"],"seconds":8}, "storm_south":{"after":["asuncion_in"],"tells":["storm_south:read","storm_south:order"],"seconds":6}, "back":{"after":[],"tells":["back:desk"],"seconds":6}, "folder_shift":{"after":["back"],"tells":["folder_shift:end"],"seconds":4}, "to_map":{"after":["back"],"tells":["to_map:end"],"seconds":4}, "coat_off":{"after":["back"],"tells":["coat_off:end"],"seconds":5}, "pilot_in":{"after":["coat_off"],"tells":["pilot_in:look","pilot_in:sat"],"seconds":10}, "phone":{"after":[],"tells":["phone:receiver"],"seconds":5}, "phone_robineau":{"after":["phone"],"tells":["phone_robineau:talk","phone_robineau:down"],"seconds":9}, "phone_down":{"after":["phone"],"tells":["phone_down:end"],"seconds":3}, "she":{"after":[],"tells":["she:in","she:up"],"seconds":8}, "she_robineau":{"after":["she"],"tells":["she_robineau:end"],"seconds":4}, "tape":{"after":[],"tells":["tape:at"],"seconds":5}, "comodoro":{"after":[],"tells":["comodoro:read","comodoro:eyes"],"seconds":8}, "minute":{"after":[],"tells":["minute:ready"],"seconds":5}, "bearing_sent":{"after":["minute"],"tells":["bearing_sent:off"],"seconds":6}, "hers_asked":{"after":["minute"],"tells":["hers_asked:ask"],"seconds":6}, "own_sent":{"after":["minute"],"tells":["own_sent:dictate","own_sent:eyes"],"seconds":8}, "last_tape":{"after":[],"tells":["last_tape:read"],"seconds":8}, "tape_torn":{"after":["last_tape"],"tells":["tape_torn:held"],"seconds":6}, "over_shoulder":{"after":["last_tape"],"tells":["over_shoulder:end"],"seconds":6}, "scraps":{"after":["last_tape"],"tells":["scraps:read","scraps:stop"],"seconds":6}, "silence":{"after":[],"tells":["silence:count"],"seconds":6}, "all_gone":{"after":["silence"],"tells":["all_gone:her"],"seconds":2}, "pilot_out":{"after":[],"tells":["pilot_out:helmet","pilot_out:door"],"seconds":10}, "to_office":{"after":["pilot_out"],"tells":["to_office:door"],"seconds":8}, "shoulders":{"after":[],"tells":["shoulders:stand"],"seconds":9}, "work":{"after":["shoulders"],"tells":["work:hand"],"seconds":8}, "sit":{"after":["shoulders"],"tells":["sit:sat","sit:turn"],"seconds":12}, "alone":{"after":["shoulders"],"tells":["alone:folder","alone:door"],"seconds":12}, "victory_map":{"after":[],"tells":["victory_map:at"],"seconds":6}, "silence_map":{"after":[],"tells":["silence_map:look"],"seconds":8}, "dawn":{"after":[],"tells":["dawn:window"],"seconds":8}, "flags_down":{"after":[],"tells":["flags_down:end"],"seconds":10}, "next_evening":{"after":[],"tells":["next_evening:in"],"seconds":6}, "bench_again":{"after":["next_evening"],"tells":["bench_again:up"],"seconds":8}, "report":{"after":["next_evening"],"tells":["report:laid"],"seconds":4}, "cough":{"after":["next_evening"],"tells":["cough:end"],"seconds":3}, "montevideo":{"after":["next_evening"],"tells":["montevideo:read"],"seconds":6}, "chilean_lands":{"after":[],"tells":["chilean_lands:end"],"seconds":6}, "release":{"after":["next_evening"],"tells":["release:ask","release:say"],"seconds":6}, "telegram":{"after":["next_evening"],"tells":["telegram:read","telegram:window"],"seconds":12}}}
```
