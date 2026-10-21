# The Canal Embankment — notes

The game's main place (scenario §4, place 1): the canal embankment by the lamp, on a white night. This first version
is the look of the world for the owner's review: the mood and the style, and the two main people standing where
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
up — the people's warm side and rims), the pale northern sky behind the viewer (`skylight`, bearing 165°, 40° up,
0.65: in a white night the whole sky is light, so the faces turned to us are lit, cool and clear), and the lamps: the near one (`lamp`, from `lamp#flame`, warm, 1.9 within 5.5 m: a warm spot, not a wash over the whole street) stands a few steps beyond Nastenka and the Dreamer, between
them on the screen, so its warmth rims their backs and shoulders and throws their shadows toward the viewer over the
flagstones (their `shadow` names it); the others along both banks light by their own flames (each lamp's e.light). A
little flicker; their halos the haze's `hazeGlow`. The water is lit as everything is (no glow of its own: a glowing canal bloomed into a white glare with no bank in it), painted as the sky mirrored — pearl and rose far down the canal where it
mirrors the low sky, a pale lilac nearer the viewer —; its mirror (0.8, a little rough, rippled) lays the houses,
the bridge and the lamps on it and draws the lamps along both banks and the afterglow (`sky#afterglow`, an e.light)
out into long trembling paths. Haze fades the far end of the canal and the dome; grain and vignette for the print's
paper. The scene's title is the page's (translated: «Набережная канала»); there is no caption.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking down the canal; the horizon at 0.47 — the sky the
upper half, the people's feet in the frame though they stand near)

The view stands in the street 1.7 m off the parapet: the canal fills the left of the frame, the two stand together in
the middle, near and large. What matters stays within the 4:3 frame (x 0.125…0.875); the near lamp too.

- The canal runs straight away from the viewer: its water a reflecting plane 1.6 m under the streets, across −23.9 …
  −2.2, 320 m long (`water`; a slow ripple layer drifting toward the viewer).
- The near granite parapet — her place — along the canal, its face at across −1.7 (`parapet`, its face to the street,
  a darker granite with its top edge inked; its top `parapet_top` at 1.05 m, −2.2 … −1.7, a lighter stone where hands
  rest), from a metre off into the distance: the leading line from the bottom-left.
- The street (`pavement`, −1.7 … 6.1): granite flags 2 m wide along the parapet, each slab its own shade; the roadway
  beyond of rounded setts, each stone drawn near the viewer (0…20 m), only the courses' lines farther (to 45 m), then
  the plain tone; to the houses at across 6.1.
- Near on the right, on the setts: a shallow puddle (`puddle`, across 1.8, 4.6 m off: a small mirror of the light sky,
  the yellow house and the lamps in it) and a granite bollard at the roadway's edge (`bollard`, across 2.6, 5 m: a form
  turned on a lathe, `e.kit.revolve`).
- The yellow house on the near side, its front to the canal (`yellow_house`, d 3…29), its door 12 m off (point
  `yellow_house#door`) under an awning on two round cast-iron posts (`awning`, `awning_front`, `awning_side`,
  `awning_post`; the porch step `porch`, its near end `porch_side`, its top `porch_top`) — where they will wait out the rain.
- The street lamp by the parapet, 6.5 m off at across −1.25 (`lamp`, point `lamp#flame`), beyond the two; the same lamp
  (`lib.lamp`) burns down both banks (`lamps`, copies: the near bank from 26 m every 24–34 m, the far bank's likewise).
- A bench along the parapet, 9 m off, just beyond the lamp, built of its faces so it reads from up the street: its back
  a card along the parapet (`bench`), its seat a plane (`bench_seat`, 0.45 m, point `bench_seat#seat`), its two
  cast-iron ends cards facing the viewer (`bench_end`, copies at 9 and 10.8 m).
- Across the canal the far bank's granite wall (`far_wall`) and its street (`far_street`); the houses on both banks are
  five kinds of facade (`house_a` … `house_e`, `lib.HOUSES`), each painted once and standing in many places (copies;
  facing 90 on the far bank, 270 on the near side beyond the yellow house).
- A low stone bridge over the canal 45 m off (`bridge`); a veil of mist on the water far down (`mist`); the house where
  the canal turns, closing the view at 322 m (`vista`); over it, far in the haze, a dome and a gilded needle (`spire`).
- The corner they wait for is near on the right, behind the viewer's shoulder: Nastenka faces toward it, past the
  viewer.

## The people (the world's `cast`: modules/cast.md)

Two, gathered near, a little larger than life on the screen (about 0.45 of its height), a moment of the first night
when she has stopped crying and he has dared to speak: standing quietly (the engine's `stand`: breathing), each in a
clear pose. Each casts the lamp's shadow toward the viewer (`shadow`, 0.75), the ground a little darker under their
feet. Their faces three-quarters to us, each looking toward the other's side of the viewer, so both faces read.

- `nastya` — Nastenka at the parapet, 3.6 m off, 0.3 m from its face, turned to us and to him (145°): her hands clasped
  at her breast (`nastya_reach`, both to points just before it), looking out
  past the viewer toward his side ([0, 1.6, 1.5]), her face still sad from the tears (`sad`).
- `dreamer` — the Dreamer, 4 m off, a step farther from her than he need be (1.8 m): bare-headed, his brown hair, his
  faded green frock coat; turned half to her and half to us (215°), his top hat held before his chest in both hands
  (`hat_hands`, both hands reaching to points before his chest), looking out past the viewer toward her side
  ([−0.9, 2, 1.5]) with a shy smile (`smile`).

The Lodger is not on the embankment in this look (he comes there only at the end); he is the cast's `lodger`.

## State

`lamp` 0…1 — the lamps' light (the near one's `on` and glow). The people's keys are the engine's (`<id>_reach`,
`_look`, `_with`, `_mood`).

## What moves

The clouds drift (a sky layer), the ripple runs down the canal (a layer of the water), the mist drifts across, the
lamp's flame flickers a little, the people breathe. Nothing is painted again while the scene plays.
