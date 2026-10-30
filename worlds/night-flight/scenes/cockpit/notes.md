# The Cockpit

Stage 2 of the game (the look): place С4 of the scenario — Fabien's plane in the air, seen from beside it: Fabien in
the front cockpit, his radio operator behind. Its three skies are the scenario's three: the dusk over Patagonia (П.1,
1.5 — the windows lighting up below), the storm (2.2, 3.4), and over the clouds under the stars (3.4). People only sit
(their loops); no camera moves. The showcase goes through the three skies.

- **Where things are.** Camera `picture`, level with the cockpits. The plane is built on an unseen anchor `plane`
  (at Fabien's seat: across 0.15, distance 3.2; its `elevation` is the key `bob`, 1.6 m level; it turns about that point — `pitch` its `roll`, `roll` its `tilt`): `fuselage` (a card, its right side, nose left — the
  line's silver and blue as the Chilean mail at the field; the cowling, the exhaust `#exhaust`, the propeller a blur
  — the layer `prop`; the windscreens, the cabane struts, the near wheel, the tail; points `#cockpit`,
  `#rear_cockpit`), `deck` (a plane: its top, the cockpits cut through it), `far_wall` (its far side's inside, seen
  through them), `cockpit_floor` (unseen, what their feet stand on), `wing` (the parasol wing over the front
  cockpit, a card laid face down — seen from below; its near half runs past the viewer), `tailplane`.
- **The sky** (`sky`, screen heights) paints all three skies and what lies below by `storm` and `above`: the dusk —
  the afterglow on the left, cloud streaks, the steppe in two bands drifting back at two speeds (`far_steppe`,
  `near_steppe`), a little town's lights on the horizon (`town`), the lone house's window under the plane (`house`),
  silent lightning far behind on the right (`flash`, its own flicker); the storm — cloud masses streaming past,
  lightning inside them (`flash` by the key); over the clouds — the stars, the Milky Way, the cloud sea in two bands
  (`far_sea`, `near_sea`), the lightning deep in it while `storm` is 1.
- **Light.** Dusk: the set sun's warm light from the left, low (`sun`); the storm: `lightning` (a far light, `on`
  `flash`), the cockpits' lamps (`panel`, `radio_lamp` — `on` `panel`) lighting the faces from below; over the
  clouds: the moon behind the viewer (`moon`, `on` `above`). The light's looks `storm` and `above`.
- **People.** Cast `modules/cast`. Fabien (`fly_seated` — upright, his hands low before him on the stick; turned a
  little to us, 245) and the radio operator (`write_seated` — writing on a pad; 270), seated on the anchor by
  `<id>_on` `{"on": "plane", "at": […]}`, so they rise and sink with it.
- **Keys.** `storm`, `rain` (the downpour's amount — the showcase sets it with `storm`, and 0 over the clouds),
  `above`, `panel`; `flash` and `bob` are set by the scene's script (the lightning while `storm` is 1; the plane's
  rise and fall — a few centimetres slowly, jolts in the storm).

## What is not right yet

- **The faces** are larger than in the other two scenes but still small in the whole picture (a picture camera has no
  lens to choose; nearer would cut the plane to a wall of fabric).
- **The radio operator's writing hand** comes up to the windscreen with the pencil, like a raised stick; his pad (in
  the left hand) stays below the rim. Every seated take of Kimodo sits as on a chair; in the cockpit it is hidden.
- **No scarf in the wind.** Fabien's white scarf is the look's (`scarf`), close round the neck: loose cloth flying
  back in the slipstream behind him is not something the engine hangs (the known trouble of cloth behind a back).
- **The storm** is only light and rain; the plane is thrown by `bob` (up and down), not rolled or pitched — a
  `tilt` on the anchor would tip the seated people with it, untried.
- The propeller is a blur only (no blade seen through it), and at 4:3 it is out of the frame.

## Stage 4: the night and the gap

- **The night over the steppe** (`night` 1, with `storm` 0 and `above` 0; the light's look `night`): eleven o'clock
  (1.5) — a deep blue starry sky, the steppe black with its pale dry riverbeds, the lights of Trelew below ahead on the
  left (the layer `town`, drifting back), the silent lightning of the storm far behind in the south. The instrument
  lamps (`panel`) light the faces.
- **The gap in the storm** (`gap` 0…1, in the storm: 3.4): a ragged opening overhead, its edges lit, stars in it (the
  layer `gap`, shown by animate), and a little starlight down through it (light `gap_light`, `on` `gap`).
- Not done (stage 5): the note passed from hand to hand (the cast has the part `note` — `<id>_with: ["note"]`, point
  `#note` — for the motion); the plane laid on a wing (the miss of М5) — a `tilt` on the anchor `plane` would tip the
  seated people with it, untried.
- Seen on the GPU (a sheet: the night over Trelew; the storm with the gap open).

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it; the game sets `beat`). The shots are cameras of their own (the
eye and the point it looks at) in the open air on the plane's right side — the two (`two`), Fabien medium and close,
the two looking up at the gap; the wide shot is the scene's picture camera. Notes go from hand to hand by the cast's
`note` (`<id>_with`): the giver's motion (`pass_back` / `pass_forward`), the taker's hand reaching for the giver's,
the note passing between them.

- **Keys (the asks).** `roll` (−70…70, smooth: the anchor `plane` tilted by its `place.tilt`, the seated people with
  it — the plane laid on a wing about its length); `water` (0…1: the sea far below through a rent in the cloud, a layer
  of the storm's sky shown in the lightning); `climb` (0…1: the storm's cloud masses sink past — layers moved down —
  and the gap overhead opens wider, its light growing); `house` (0…1: the lone house's window lit at dusk).

| piece | after | what |
| --- | --- | --- |
| dusk | — | dusk over the steppe; the house's window lights below; a slow push in to Fabien |
| note_back | dusk | Fabien writes on his knee, passes the note back; the operator reads it and taps it out |
| trelew | — | the night over Trelew: a note forward, Fabien's answer back; close on him looking down at the lights |
| storm | — | thrown about (`roll` a little); a note forward, his one-handed answer back; ends at the stick (М5) |
| gap | — | the gap opens overhead; the operator's note forward |
| key_held | gap | the operator holds his key down; Fabien looks at the fuel gauge |
| lamp_note | gap | Fabien holds the note to the lamp, looks at the light, writes «To her», passes it back; the tap |
| laugh_note | gap | he looks long at the signature, writes, passes it back; the tap; the gap closes |
| above | — | over the clouds in the moon: his face close; «Beautiful» forward; his last back; the tap |

## Stage 5: what is not right yet

- `roll` tilts the anchor about its length as seen from the side: the fuselage card leans toward or away from the
  viewer (foreshortened), not banked across the frame — that is a roll as it is, seen from beside.

## After the browser test (2026-10-29)

- **The nose raised in the climb.** The anchor `plane` turns in its own face by its `roll` (the engine's word for a
  card's or an anchor's turn in its face; `place.roll` = key `pitch`, − the nose up), about Fabien's seat, where the
  anchor now is (its parts and the two seats moved by 0.55 across and 1.6 down to stay where they were). The script
  sets `pitch` from `climb`: −14·sin(π·climb) — up as it starts climbing, the most halfway, level at the top.
  (Until 2026-10-29 it was a chain of three anchors turned 90° and back, the engine having no such turn; gone. Seen on
  the GPU, render 2697 — the same picture as the chain's, render 2700.) The bank (`roll` key, the anchor's `tilt`) is
  now about the seat too, no longer about a point 1.6 m below it; it is applied after the pitch, about the level line.
- **The storm lit.** The look `storm` brighter (ambient 0.72, its colour lighter, less haze), the cockpit lamps
  stronger and wider (`panel` 2.3 / 1.8 m, `radio_lamp` 1.5 / 1.5 m); Fabien looks ahead a little toward the lens
  (`STORM_LOOK`), his face lit by the lamp. The sky stays black-violet, the rain and the lightning as they were.
- **Looks on the note.** The taker reads the note (`#note`, the cast part's point); the look comes off it before the
  hand is emptied (`drop`) — the look stayed on a point gone with the part and warned.
- `write_knee` (the cast's) has no pad on the knee: `write` plays `write_seated`.

## Contract for the check

```json
{"beats": {"dusk":{"after":[],"tells":["dusk:window"],"seconds":8}, "note_back":{"after":["dusk"],"tells":["note_back:read","note_back:tap"],"seconds":8}, "trelew":{"after":[],"tells":["trelew:note","trelew:answer","trelew:under"],"seconds":14}, "storm":{"after":[],"tells":["storm:note","storm:answer"],"seconds":12}, "gap":{"after":[],"tells":["gap:note"],"seconds":8}, "key_held":{"after":["gap"],"tells":["key_held:end"],"seconds":6}, "lamp_note":{"after":["gap"],"tells":["lamp_note:write","lamp_note:tap"],"seconds":14}, "laugh_note":{"after":["gap"],"tells":["laugh_note:write","laugh_note:closed"],"seconds":12}, "above":{"after":[],"tells":["above:face","above:note","above:last"],"seconds":21.5}}}
```
