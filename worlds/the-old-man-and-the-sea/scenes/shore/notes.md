# The Beach

Stage 2 of the game (the look): С3, the beach of the village in the late afternoon of the prologue (П.1) — the old
man back with his empty skiff, the boy beside him, the boy's father by the lucky boat. People stand; no motion of
people, no camera moves. Camera `picture`.

- **Where things are.** `lib.js` holds the bay as numbers: the water at `WATER` (−0.5 m), its edge at
  `shore(across)` — 13 m ahead, nearer on the right, curving forward on the left and running out along the bay at
  about −33°; `land` — the beach falling to the water and under it, the village's slope rising inland on the left
  (`relief.js` is it). The sand is one draped plane (`sand`: wet along the edge, the tide's line, the road up the
  slope, the keel's furrow, footprints, the slope's grass). The sea is one mirror plane (`sea`: shallows green-blue
  off the edge, the deep dark blue). `wash`: a plane just over the water with two lines of foam its animate runs up
  the sand and back.
- **Far.** The village across the bay is one card on the water 260 m off (`far_village`: hills, houses, palms, boats,
  the Terrace on its piles at the right; its windows' and the Terrace's lamps glow with `dusk`); a headland 2 km off
  on the right (`far_cape`); two skiffs at anchor rocking (`moored_a`, `moored_b`).
- **Near.** The old man's skiff (`skiff`: a card turned to the bay, the mast stepped, the patched sail furled on it),
  the lucky boat (`lucky_boat`), the village's skiffs (`boats`, copies), the palms (`palm`, copies: the crowns sway in
  the wind), the boy's house with its open door and the cot by it (`house`) and the lamp hanging in the door (`lamp`,
  lit with `dusk`, its light `house_lamp`). `lib.skiff` paints every boat.
- **The sky** (`sky`): the late afternoon (the sun low behind the viewer's right shoulder: light `sun` from [115, 12],
  so faces turned to the viewer are lit) and the dusk, cross-faded by `dusk`; the clouds on the horizon drift; a
  man-of-war bird circles.
- **People.** Santiago (white hair, faded blue shirt, looking aside toward the village, a faint smile), Manolin (to
  his right and a little behind, looking up at him), the father (by the lucky boat, hands on his hips, watching the
  boy). Cast: modules/cast.
- **Keys.** `dusk` (the afternoon → the blue dusk: the light's look, the sky, the lamps).
