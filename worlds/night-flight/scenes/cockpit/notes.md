# The Cockpit

Stage 2 of the game (the look): place С4 of the scenario — Fabien's plane in the air, seen from beside it: Fabien in
the front cockpit, his radio operator behind. Its three skies are the scenario's three: the dusk over Patagonia (П.1,
1.5 — the windows lighting up below), the storm (2.2, 3.4), and over the clouds under the stars (3.4). People only sit
(their loops); no camera moves. The showcase goes through the three skies.

- **Where things are.** Camera `picture`, level with the cockpits. The plane is built on an unseen anchor `plane`
  (across 0.7, distance 3.2; its `elevation` is the key `bob`): `fuselage` (a card, its right side, nose left — the
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

## Contract for the check

```json
{"beats": {"dusk":{"after":[],"tells":["dusk:window"],"seconds":8}, "note_back":{"after":["dusk"],"tells":["note_back:read","note_back:tap"],"seconds":8}, "trelew":{"after":[],"tells":["trelew:note","trelew:answer","trelew:under"],"seconds":14}, "storm":{"after":[],"tells":["storm:note","storm:answer"],"seconds":12}, "gap":{"after":[],"tells":["gap:note"],"seconds":8}, "key_held":{"after":["gap"],"tells":["key_held:end"],"seconds":6}, "lamp_note":{"after":["gap"],"tells":["lamp_note:write","lamp_note:tap"],"seconds":14}, "laugh_note":{"after":["gap"],"tells":["laugh_note:write","laugh_note:closed"],"seconds":12}, "above":{"after":[],"tells":["above:face","above:note","above:last"],"seconds":18}}}
```
