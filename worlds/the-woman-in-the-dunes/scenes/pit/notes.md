# The Pit

The bottom of the sand pit the woman lives in (stage 2 of the game: the look — people stand, only light, sand and
air move).

- **Land** — `relief.js` / `lib.js`: an oval funnel, its flat floor out to `pitR` 1 (7.5 m either way across of 0.5,
  6.5 m either way in depth of 5), the walls rising 6.2 m to the lip at `pitR` 1.3, a low crest beyond it. The viewer
  starts on the floor at the near side. `sand` is one plane draped over it all (x = across, y = 8 − distance).
- **House** — an unseen anchor `house` (across −3.4, distance 6.6, facing the eye); on it `house_front` (x −2.5…2.5,
  the eave 2.8 m; points `door`, `eave`), `house_side` (the right gable, 3.6 m deep, ridge 3.6 m), `roof` (the front
  slope, eave 2.8 → ridge 3.6: tilt 20.85°), `doorway` (the lamp-lit room through the open door: a layer brought up by
  `lamp_in`), `tools` (two shovels and a basket). `barrel` and `lamp_post` (its lantern `lamp_post#flame`,
  `lamp_post#lantern`) stand before it.
- **The lip** — `winch` on the far lip (rope drum, the rope ladder rolled up, a lantern `winch#flame`; point
  `winch#ladder`). The rope down the far wall is painted on the sand.
- **People** (the world's `cast`): `man` before the lamp post, `woman` before the door, `elder` on the far lip by the
  winch, looking down. Their looks/moods are in `state`.
- **Light** — `night` 0 (evening: the sun low behind, `sun`, gilds the top of the far wall; the floor in blue shade) →
  1 (night: the `sky` layer `night` brought in by its animate, the moon `sky#moon` the `moon` light). `lantern` — both
  lanterns; `lamp_in` — the lamp in the house (`room_lamp` at the doorway, the `doorway` layer).
- **Air** — `sand_fall` (a thin stream of sand off the eave), `lip_drift` (soft sand blown off the far lip by the wind).
