# Rivière's Office

Stage 4 of the game (all its places): place С1 of the scenario — Rivière's office upstairs over the field, the place of
the finale (Ф.1–Ф.4, three o'clock, the first rain). Made in the look of the bureau (the same distemper and dark dado,
the same lamp-warm room against the blue night, the same cast). People stand and sit (their loops); no motions of
people, no camera moves.

- **Where things are.** Camera `picture` from the room's open side. The room is 5 m wide (across −2.5…2.5), its floor
  1.3…5.4 m ahead, 3.1 m high: `floor` (boards, a carpet under the desk), `back_wall` (the big window onto the field
  cut out at across −1.0…1.8, sill 0.85 m, head 2.6 m; a radiator under it; a photograph and a calendar on the left, a
  barometer on the right), `left_wall` (the door onto the landing open at 3.75…4.6 m ahead, its leaf back against the
  wall; nearer, the hooks with Rivière's overcoat and hat), `right_wall` (the glazed cabinet of the line's logs, a
  framed map of the stations), `ceiling`. Beyond the door: `landing` (its far wall, the banister going down, a bulb —
  light `landing`) and `landing_floor`. The window: `pane` (glass, the room faintly in it), `window_frame`,
  `pane_rain` (drops running down the glass by `rain`).
- **The desk** (right, near): `desk` (its front to the room), `desk_top` (the log open — point `desk_top#log` —, the
  telegram forms, the ink stand, an ashtray), `desk_lamp` (white opal shade, light `desk_lamp`), `phone`
  (`phone#phone`), `desk_chair` behind it. **The visitor's chair** (`visitor_chair`) by the door, turned to the room.
- **Below the window** — the field 4.5 m under the floor (everything outside has `elevation` −4.5): `field` (wet
  grass, the strip, the apron with puddles), `edge_lamps` (copies, lit with `floods`), `floods` (two masts, lights
  `flood_0`, `flood_1`, their lamp faces the layer `lit`), `hangar` (70 m off: the lit gate — light `gate` —, the
  workbench under its lamp — light `bench_lamp` —, and small painted figures by the keys `yard_roblet`,
  `yard_robineau`), `plane_out` (the European stood down, its pilot by the wing — only with `plane` standing),
  `rain_out` (rain over the field by `rain`), `sky` (the storm overhead, the town's glow on the horizon, lightning in
  the cloud — its layer `flash`, by animate).
- **Light.** The desk lamp and a lamp behind the viewer (`front_lamp`, both `on` `lamp`) light the faces; the lit field
  comes up through the window (`field_glow`, `on` `floods`), rimming whoever stands there; the landing's bulb behind
  the door. The look `rain` thickens the air.
- **People** (cast `modules/cast`), laid out by `script.js` from the spot keys: Rivière (`riviere_spot`: `room` — just
  in, turned toward her; `window` — by the window's right side, turned to the room; `desk` — sitting at the desk,
  `desk_lean` over the log), Madame Fabien (`madame_spot`: `window` — at the window's left side, `coat_clutch`, turned
  to the room; `door` — by the door, ready to go; `chair` — on the visitor's chair, `fly_seated`), Robineau in the
  doorway (`hold_waist`, the folder; only his `_here`). Where they look and their faces are the game's.
- **Keys.** `lamp`, `floods`, `rain`, `plane` (gone / standing), `yard_roblet` (none / hangar / chocks),
  `yard_robineau` (0 / 1), `riviere_spot`, `madame_spot` (and the places they set, `riviere_a/_d`, `madame_a/_d`).

Measured (`measure_scene`, measuring 957, 1080p): no soft run on any profile, GPU about 3 ms (T4); fails "allocated a
frame" (~40 KB — the engine's people and modules: the scene's own animates make nothing) and the GC pause that
follows (2.0–2.6 ms against 2), and on desktop frames p95 16.8 against 16.7 (the 60 Hz pacing).

## What is not right yet

- Two people looking at each other across the room are seen in profile (the picture camera is fixed); bodies are
  opened to the viewer so the profiles read.
- Rivière at the desk leans low over it (Kimodo's `desk_lean`); writing in the log is a motion for stage 5.
- The people below the window are painted figures, small (70 m off): they read as who is there, not as faces.

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it after laying the people out; the game sets `beat`). `lib.SPOTS`
— the spots. The shots are cameras of their own: her medium, close and her hands at each of her places (the window,
the door, the chair), Rivière at his desk, the doorway, and one through the window's glass down to the yard. A piece
starts her where the game's `madame_spot` (by the ending) has her, and him by the window when she sits (dawn), else in
the room's middle; the window's keys (lamp, floods, rain, plane, yard_*) are the game's.

- **The asks.** The insert `log_page` (`log_open` 0…1; `ink` 0…1 — the line written from `log_page#from` to
  `log_page#to`, a paper-coloured cover drawn back and the pen's nib going along, point `log_page#pen`; `blot` 0/1 — a
  blot where the pen was; `log_line` bearing / unknown — the words, through `tr`, in `lang/ru.json`); Robineau's place
  keys `robineau_a/_d`; the variant keys of `leaves`: `leave_turn` (nod / none / look / wait / past), `leave_look`
  (none / sky / field).

| piece | after | what |
| --- | --- | --- |
| office | — | Rivière comes in from the landing to his place; she turns to him |
| rises | office | (dawn) she gets up from the chair, goes to the door |
| gloves_on | office, rises | she puts on her gloves (close on her hands) |
| tape_glove | office, rises | she folds the tape into her glove |
| leaves | office, rises, gloves_on, tape_glove | to the door; to him and to the window as the keys say; out |
| log | — | Rivière sits at his desk and opens the log (the insert; М2 `log`) |
| log_done | — | after М2: the page closes; he looks to the window; the camera through the glass to the yard |
| doorway | log_done | Robineau appears in the doorway |

## Stage 5: what is not right yet

- At his desk Rivière faces the room with the window behind him: looking out at it in `log_done` he turns his head
  round over his shoulder; the camera then goes through the glass.

## Contract for the check

```json
{"beats": {"office":{"after":[],"tells":["office:in"],"seconds":8}, "rises":{"after":["office"],"tells":["rises:up"],"seconds":5}, "gloves_on":{"after":["office","rises"],"tells":["gloves_on:end"],"seconds":4}, "tape_glove":{"after":["office","rises"],"tells":["tape_glove:end"],"seconds":4}, "leaves":{"after":["office","rises","gloves_on","tape_glove"],"tells":["leaves:door","leaves:look","leaves:gone"],"seconds":10}, "log":{"after":[],"tells":["log:open"],"seconds":5}, "log_done":{"after":[],"tells":["log_done:window"],"seconds":8}, "doorway":{"after":["log_done"],"tells":["doorway:in"],"seconds":4}}}
```
