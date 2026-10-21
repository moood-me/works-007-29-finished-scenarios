# The Canal Embankment — notes

The game's main place (scenario §4, place 1): the canal embankment by the lamp, on a white night. This first version
is the look of the world for the owner's review: the mood and the style, and the three main people standing where
they stand in the story. No one walks, no camera moves, no showcase yet (nothing happens in it to show).

## The look

Petersburg of the white nights as an old lithograph touched with watercolour: washed, pale, narrow colours (ochre,
pink, grey-green, cream, the granite's pinkish grey, the yellow house), a fine sepia ink line round every shape
(`lib.INK`). The hand is the lithograph's, shared by every painting through the lib: `lib.wash` — the watercolour never
even, its pigment in soft blotches darker and lighter and pooled at a wash's foot (the walls, the granite, the street,
the sky) — and `lib.hatch` — the shade drawn as fine sepia hatching (under the cornices and on the roofs, at the walls'
feet, in the gateways, down the pilasters' shaded sides). The houses are five kinds that never read alike (`lib.HOUSES`:
a pediment, pilasters, a main floor of tall windows under little cornices and pediments, an attic of square windows, an
iron balcony, an arched gateway to the yard), every window its own — the pane holding the sky, some dim, some with
muslin curtains, the reveal's shade, a sill. The sky is light — lilac-grey above, pearl low down, a warm
rose-peach glow over the far bank to the north-west where the evening lingers into the dawn; the water is lighter
than the sky. It is night and nothing is dark: people and faces read clearly. The lamp burns, though it is not
needed — the one warm spot in the cool light.

Light (all the engine's; everything is painted in daylight colours): an ambient in lilac-white (0.55: nothing is
dark, yet the lights model the people round), a low warm far light from where the sky glows (`glow`, bearing −21°, 6°
up — the people's warm side and rims), the pale northern sky behind the viewer (`skylight`, bearing 165°, 40° up: in a
white night the whole sky is light, so the faces turned to us are lit, cool and clear), and the lamps: the near one
(`lamp`, from `lamp#flame`, warm and strong, 7 m) stands just before Nastenka and the Dreamer, so its warmth falls on
their faces and shoulders turned to us and throws their shadows back from their feet over the flagstones (their
`shadow` names it); the next one down the bank (`lamp_far`, a light at that lamp's flame, 11 m off, 5 m) warms the
Lodger beside it and casts his. A little flicker; their halos the haze's `hazeGlow`. The water keeps its own light
(`glows`: it holds the whole light sky, which the mirror does not show), painted as that sky mirrored — pearl and rose
far down the canal where it mirrors the low sky, the cool lilac of the sky higher up nearer the viewer —; its mirror
(0.7, a little rough, rippled) lays the houses, the bridge and the lamps on it and draws the lamps along both banks and
the afterglow (`sky#afterglow`, an e.light) out into long trembling paths. Haze fades the far end of the canal and the dome; grain and vignette for the print's paper. The scene's
title is the page's (translated: «Набережная канала»), shown at the top in the middle — the near lamp stands well to the
left of it; there is no caption.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking down the canal; the horizon at 0.56 — low, so the
light sky fills the top and the near lamp stands whole in the frame)

The view stands in the street 2.4 m off the parapet: the canal fills the left of the frame; the three stand apart.

- The canal runs straight away from the viewer: its water a reflecting plane 1.6 m under the streets, across −24.6 …
  −2.9, 320 m long (`water`; a slow ripple layer drifting toward the viewer).
- The near granite parapet — her place — along the canal, its face at across −2.4 (`parapet`, its face to the street;
  its top `parapet_top` at 1.05 m, −2.9 … −2.4), from a metre off into the distance: the leading line from the bottom-left.
- The street (`pavement`, −2.4 … 5.4): granite flags along the parapet, each slab its own shade; the roadway beyond of
  rounded setts, each stone drawn near the viewer (0…20 m, four greys, darker joints), only the courses' lines farther
  (to 45 m), then the plain tone; to the houses at across 5.4.
- Near on the right, on the setts: a shallow puddle (`puddle`, across 1.7, 3 m off: a small mirror, the light sky in
  its own pale lilac, the yellow house and the lamps in it) and a granite bollard at the roadway's edge (`bollard`,
  across 2.7, 4.2 m: a form turned on a lathe, `e.kit.revolve`) — the frame's near right is a street, not an empty
  floor.
- The yellow house on the near side, its front to the canal (`yellow_house`, d 3…29), its door 12 m off (point
  `yellow_house#door`) under an awning on two round cast-iron posts (`awning`, `awning_front`, `awning_side`,
  `awning_post`; the porch step `porch`, its near end `porch_side`, its top `porch_top`) — where they will wait out the rain.
- The street lamp by the parapet, 3.4 m off (`lamp`, point `lamp#flame`), just before Nastenka; the same lamp
  (`lib.lamp`) burns down both banks (`lamps`, copies: the near bank at 11 m — the Lodger's — then every 20–35 m, the
  far bank's street likewise).
- A bench along the parapet, 17 m off (`bench`, point `bench#seat`).
- Across the canal the far bank's granite wall (`far_wall`, from the water up to its parapet) and its street
  (`far_street`); the houses on both banks are five kinds of facade (`house_a` … `house_e`, `lib.HOUSES`), each painted
  once and standing in many places (copies; facing 90 on the far bank, 270 on the near side beyond the yellow house).
- A low stone bridge over the canal 45 m off (`bridge`); a veil of mist on the water far down (`mist`); the house where
  the canal turns, closing the view at 322 m (`vista`); over it, far in the haze, a dome and a gilded needle (`spire`).
- The corner they wait for is near on the right, behind the viewer's shoulder: Nastenka looks toward it, past the
  viewer.

## The people (the world's `cast`: modules/cast.md)

Three, each apart and clear, standing quietly (the engine's `stand`: breathing), no gesture held mid-way: Nastenka by
the railing, the Dreamer a step farther than he need be, the Lodger far off by the next lamp. Each a head of hair, not a
bare ball: Nastenka bare-headed, her dark hair parted and smoothed in bands over the ears to a knot at the nape (the
cast's `bands`); the men's hair brushed up in a wave, down to sideburns (`swept`, `neat`). Hands closed and quiet (the
cast's style has no separate fingers). Each casts the lamp's shadow back over the street (`shadow`, 0.75), the ground
a little darker under their feet.

- `nastya` — Nastenka at the parapet, 4.5 m off, 0.28 m from its face, both arms hanging quietly as she stands, just beyond the near lamp: turned to us and toward
  the corner (160°), looking toward the corner just past the viewer ([1.2, 0, 1.6]), waiting, a little sad (`sad`).
- `dreamer` — the Dreamer on the right, 5.1 m off, about 2 m from her: bare-headed, his brown hair, his faded green
  frock coat; turned half to her and half to us (215°), his knotty stick in the right hand (`cane`), his top hat held
  low at his side in the left (`hat_low`), both arms as the standing has them; looking at her with a shy smile.
- `lodger` — the Lodger far off by the next lamp, 10.6 m: upright, his long slate-blue frock coat and dark trousers,
  black hair, his top hat at his chest in the right hand (`lodger_wear` {hat: none}, `hat_hand`, `lodger_reach.r` a
  point before his chest), looking toward her, reserved (`neutral`).

## State

`lamp` 0…1 — the lamps' light, the near one's and the Lodger's (the lights' `on`; the near one's glow too). The people's keys are the engine's (`<id>_reach`,
`_look`, `_with`, `_mood`).

## What moves

The clouds drift (a sky layer), the ripple runs down the canal (a layer of the water), the mist drifts across, the
lamp's flame flickers a little, the people breathe. Nothing is painted again while the scene plays.
