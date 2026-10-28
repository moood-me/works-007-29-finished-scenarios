# The Edge of the Village

The dunes where the village begins (stage 2 of the game: the look — people stand; only light, grass, sand in the air
move). The scenario's «Край деревни» (prologue 2: the old man at his winch, «Автобус ушёл»), the nights above the pits
(III), the morning on top (V: the bus stop's post on the road).

- **Land** — `relief.js` / `lib.land`: the eye on a low rise that falls 1.5 m to the village's plain by 8 m ahead;
  thirteen pits (`lib.PITS` — the floor's half-width and half-depth; walls 6.2 m down from the lip at 1.3 of it, a low
  lip of thrown sand round each) in rows to 100 m; the great dunes rising 7–25 m beyond 105 m to the plane's far edge
  (250 m, the skyline), a dune mass on the left. `sand` — one plane draped over it all (x = across, y = 120 − distance):
  ripples near the eye, the pits' wall runs and lips, the shore road on the right, footprints.
- **Pits' winches** — `winch` (the old man's, on the lip of the nearest pit at (1.4, 7.4), its lantern `winch#flame` →
  light `lantern`) and `winches` (copies of the same painting, `lib.winch`, on the near lips of the other twelve; their
  glows go with `lanterns` by animate). `bus_stop` — the post by the road at (14, 24).
- **Air and life** — `grass` (copies of a tuft, a `blades` layer bending in the wind), `drift` (soft sand blown along
  the plain).
- **People** (the world's `cast`): `man` on the rise with his net and box at (−2.5, 5.2), turn 140, looking at the old man, `elder` by
  his winch at (3, 6.7), turn 215, looking at the man — both cheated toward the eye so the faces read.
- **Light** — the base light is the white-gold day (`sun` high behind); `evening` (the start) — `low_sun` from behind
  the eye on the right, warm along the dunes, the sky's `evening` layer; `night` — the moon `sky#moon`, blue, the
  lanterns; `fog` — the morning fog (haze and the sky's `fog` layer). The sky's layers come in by `sky.animate.js`.
