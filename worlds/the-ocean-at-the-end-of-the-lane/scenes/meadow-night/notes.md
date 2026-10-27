# The Meadow at Night

Stage 2 of the game (the look, docs/new-games/okean-v-konce-dorogi/scenario.md §4 «Луг»; IV-3–6): the meadow behind
Hempstock Farm on the night of the witch's circle, just after Lettie has come back with the bucket — the boy in the
circle of dark grass, Lettie kneeling at the bucket on its edge, Ginnie on the farm's back step with her lantern, the
hunger birds sitting round, still — a breath, the ocean's light moving in the bucket, the grass and the birds' rags in
the night air. No motion of people, no camera moves, no showcase (nothing happens in it yet).

- **The view.** Camera `picture`, horizon 0.4, at a child's eye as in the kitchens (`camera_h` −0.55: the eye 1.15 m
  over the ground). Looking across the meadow: the farm on the right (16 m), the village far off on the left (200 m).
- **The meadow** (`meadow`, a plane 1600 × 1000 m, the worn path to the farm's yard), the `circle` of dark grass (3 m
  across, its centre 3.7 m off), the low `near_grass` at the frame's bottom edge (1.85 m), the far hedges and `trees`
  (70 m; on the left only the hedge, opening toward the village).
- **The farm** (`farm` front, `farm_end` its left gable seen aslant, `farm_lit` — its open back door and two lit windows,
  glowing; the door's light `farm_lit#door`), the yard's low wall (`yard_wall`) with a gap before the door.
- **Far off** (`village`): the rise with the village's roofs, its church and lit windows; this side of it the boy's
  house, his sister's window lit upstairs (`village#sister` — the window IV-6 watches) and the hall below.
- **The sky** (`sky`): night blue, stars, the moon high on the left (`sky#moon`, where the moonlight comes from).
- **The bucket** (`bucket`, 0.3 m): galvanised tin, the wire handle fallen aside; in it the ocean — its face lit from
  within, glints wandering over it (`bucket.wgsl`), its glow `bucket#water` the light on their faces; `bucket#rim`.
- **The hunger birds** (`birds`, seven copies of one painting): ragged rook-shaped shadows as tall as a child's waist,
  round the circle behind and beside the two, never between them and us; their rags in the wind (a layer).
- **People** (the world's cast, modules/cast.md). The boy in the circle, hugging himself, shivering (`hug_cold`), turned
  half to us and looking at Lettie (to his left); Lettie kneeling at the bucket outside the circle (`kneel`), turned to
  us, frowning («Не вымыло»), her hand by the water; Ginnie Hempstock on the back step, the lantern raised in her right
  hand (`lantern_up`, `ginnie_with: ["lantern"]`).
- **Light.** The moon (`moon`, from the sky's disc), the ocean in the bucket (`ocean` — sea-green, from below, on the
  two faces and the circle's grass), the farm's door (`door`), Ginnie's lantern (`lantern`, at `ginnie#lamp`).

## What is not right yet

- **A look to a person's right turns them to the wall** (the known trouble, seen in the kitchen at home): the bucket and
  the boy are both to Lettie's right as she is turned to us, so she has no `_look` — her head is as `kneel` holds it,
  bowed a little toward the bucket — and the boy looks only to his left, at her.
- **A skirt kneeling is a lump**: Lettie's frock over her knees stands as a heap of cloth behind her (the known trouble of
  a skirt sitting).
- Ginnie's lantern is raised before her in `lantern_up`; the scenario has it lowered once she stops (IV-5) — a take with
  the arm down (seed 0, «arms hanging down at their sides, carrying a lantern») raised it first and lowered it only
  later, so its loop is not a still lowered arm; the raised one is kept.
- The boy's `hug_cold` is bent well forward (a cold, scared child); another take (upright) let go of himself halfway.
- Ginnie is small (16 m off, on the step where the scenario puts her): her face is not read in the wide frame.
- A cloth's edge, the particle fire, a rope between two people — none is used here.
