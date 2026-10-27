# The Meadow — notes

Chapter II's place (stage 2, the look): the meadow of the dead under the earth. Dark grass starred with pale glowing
asphodels, a light stream of forgetting coming in from the left before the viewer and going off to the right toward
the stair in the far wall, shades standing apart, turned away. Eurydice sits on a stone on the far bank, her feet in
the stream, her clay cup beside her, a flower she let go floating by her feet; Orpheus has found her, standing on her
bank with his lantern held a little up. One feeling: stillness. Camera `picture`. Nobody moves but for breathing, the
lantern's swing, the flowers and the grass, the stream's light flowing, the rings at her feet, the veils and the mist.

## How it is built

- `sky` — no sky under the earth: a vault lost in a pale lilac haze, lighter toward the far edge; faint veils drifting
  (a layer).
- `cliffs` (280 m) — the walls of the underworld, high at both sides, low left of the middle, a broken rim; the stair
  cut into the rock on the right (five flights) and at its top a small round of pale light (`cliffs#opening`, its glow
  an `e.light`; `cliffs#stair` — its foot). The haze makes it lilac.
- `mist` (120 m) — drifting bands. `ground` — one plane 600 × 300 m, grass blades painted only in the near 30 m.
- `stream` — a plane that glows, 30 m right and 76 m ahead (it runs from the left edge before the viewer to 150 m):
  its path (`P` in `stream.js`) widens as it goes; `stream.wgsl` makes its light flow (right and away). Two lights
  of its own stand over it near the people (`stream_near`, `stream_bend`) — the stream lights their faces from below.
  If the path moves, move them, the stone, the rings and the flower, and run `tools/meadow_copies.py` again.
- `asphodels` (46 copies) — glow, each with a small `e.light`; `grass` (26 copies) — near tufts, wind layers. Both
  laid by `tools/meadow_copies.py`: off the stream, off the people, out of the lines of sight to the two (a tuft
  between the eye and a person made the operator's close shots lose them).
- People (`modules/cast`): `eurydice` seated (`seated`) on `stone` at (−1.6, 5.75), `eurydice_on` its top (0.36 m),
  turned 175 to the stream and the viewer, her right hand on `cup#rim`, her left on the stone; `orpheus` at (0.4, 6.4)
  turned 215, `orpheus_with: ["lantern"]` (the cast's part in his left hand; the light `lantern` at `orpheus#flame`),
  his left hand reaching a little up and out so the lantern hangs at his chest. `shade_1` … `shade_6` — the cast's
  shades (`shade_man`, `shade_woman`, `shade_old`), from 11 to 28 m, turned away.
- `rings` (from her feet) and `float_flower` (turning, rocking) — planes just over the stream.
- `between` — an unseen point between the two for the camera.
- Light: the vault's (`vault`, far, pale lilac), the lantern, the stream's two, the flowers'; ambient 0.55 — the
  meadow is dark but the people read.

## The showcase

`the meadow` (10 s) → `the two` (full on `between`) → `eurydice` (medium; she looks at the flower on the water) →
`orpheus` (medium; she looks at him again) → `the shades` (wide on `shade_1`) → `the stream` (the scene's camera).
