# The Pier — notes

The world's first scene and its look: the wedding night. A still lake under a full moon, a wooden pier running in from
the left, Orpheus and Eurydice sitting at its end with their feet in the water, a lantern on the boards between them,
paper lanterns floating all round. One feeling: tenderness, quiet. Camera `picture`; the showcase is the look's — the
whole place, the two nearer, each nearer, the lake again. Nobody moves but for breathing, rings on the water from her
feet, the reeds in the wind, the flames and the glints.

## How it is built

- `sky` — gradient night, the full moon at stage x `0.76·aspect`, y 0.15 (`sky#disc`: the light `moon` comes from it),
  stars (layer 1, twinkled in `sky.wgsl`), thin drifting cloud streaks (layer 2).
- `far_shore` (330 m), `mist` (210 m, drifting bands), `water` (one plane 1600 × 600 m, a mirror: rough 0.35, ripple
  0.25; its near 40 m carry a drifting ripple layer).
- `moon_path` — a glowing plane lying on the water under the moon: dabs strewn evenly by screen height from the far
  shore to the frame's foot, along the line 0.462 m across per metre ahead (the moon's 24.7° to the right). If the moon
  moves in `sky.js`, this slope and the plane's `across` move with it.
- The pier: `pier_deck` (a walkable plane, its top at 0.55 m), `pier_side` (the edge beam and posts), `post` at its end.
- `pier_lantern` — their lantern between them (light `lantern`, the warm light on their faces); `lanterns` — ten paper
  lanterns on the water (copies; each its own `e.light`).
- `reeds` (near, left), `reeds_far` (out in the water, right) — `lib.reeds`, each blade a wind layer.
- `rings` — three rings spreading from her feet (its animate).
- People (`modules/cast`): `eurydice` at (−1.3, 5.25) turned 150, `orpheus` at (0.15, 5.25) turned 210 — each turned
  toward the other, so looking at each other their faces are three-quarters to the viewer (turned away, they were seen
  in profile). Both `seated` on the deck's edge (`<id>_on`). His hands on `lyre#arm` and `lyre#strings`; the `lyre`
  card stands by his right thigh and turns with him (facing 210) — move it with him.
- `between` — an unseen point between them for the camera.

## The showcase

`the pier` (10 s) → `the two` (camera on `between`, full) → `eurydice` (medium; she sits turned to 185 and looks at the
nearest floating lantern, `lanterns:0`, so her face comes round to us — a head turned far from the body shows the
back of her `straight` hair under her chin) → `orpheus` (medium; he sings out over the lake, `[1.2, 2, 1.1]`)
→ `the lake` (the scene's own camera, he looks at her again). Close shots and shots turned far aside were tried: close,
the faces read as too plain for this style; turned aside (`camera_yaw` 45°) the camera looks past the painted sky.
`moon_path` is right from the start and near it; from the nearer shots it is a slanting streak of light.
