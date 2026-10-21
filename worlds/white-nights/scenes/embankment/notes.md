# The Canal Embankment — notes

The game's main place (scenario §4, place 1): the canal embankment by the lamp, on a white night. This first version
is the look of the world for the owner's review: the mood and the style, and the three main people standing where
they stand in the story. No one walks, no camera moves, no showcase yet (nothing happens in it to show).

## The look

Petersburg of the white nights as an old lithograph touched with watercolour: washed, pale, narrow colours (ochre,
pink, grey-green, cream, the granite's pinkish grey, the yellow house), a fine sepia ink line round every shape
(`lib.INK`), a little hatching under the cornices. The sky is light — lilac-grey above, pearl low down, a warm
rose-peach glow over the far bank to the north-west where the evening lingers into the dawn; the water is lighter
than the sky. It is night and nothing is dark: people and faces read clearly. The lamp burns, though it is not
needed — the one warm spot in the cool light.

Light (all the engine's; everything is painted in daylight colours): an ambient in lilac-white (0.6: nothing is dark,
yet the lights model the people round), a low warm far light from where the sky glows (`glow`, bearing −21°, 6° up —
the people's warm side and rims), the pale northern sky behind the viewer (`skylight`, bearing 165°, 40° up: in a white
night the whole sky is light, so the faces turned to us are lit, cool and clear), the lamp (`lamp`, from
`lamp#flame`, warm and strong, 8 m: a warm pool on the three of them and the flagstones, a little flicker, its halo the
haze's `hazeGlow`). The water keeps its own light (`glows`: it holds the whole light sky, which the mirror does not
show) and is painted lighter than the sky; its mirror (rough, rippled) draws the lamps along both banks and the
afterglow (`sky#afterglow`, an e.light) out into long trembling paths. Haze fades the far end of the canal and the
dome; grain and vignette for the print's paper. The scene's title is the page's (translated: «Набережная канала»);
there is no caption.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking down the canal; the horizon at 0.43)

The view stands close to the parapet so the canal fills the left half of the frame and the three stand gathered in
the middle (all of them within the 4:3 frame).

- The canal runs straight away from the viewer: its water a reflecting plane 1.6 m under the streets, across −23.1 …
  −1.4, 320 m long (`water`; a slow ripple layer drifting toward the viewer).
- The near granite parapet — her place — along the canal, its face at across −0.9 (`parapet`, its face to the street;
  its top `parapet_top` at 1.05 m, −1.4 … −0.9), from a metre off into the distance: the leading line from the bottom-left.
- The street (`pavement`): flagstones along the parapet, the cobbled roadway beyond, to the houses at across 6.9.
- The yellow house on the near side, its front to the canal (`yellow_house`, d 3…29), its door 12 m off (point
  `yellow_house#door`) under an awning on two round cast-iron posts (`awning`, `awning_front`, `awning_side`,
  `awning_post`; the porch step `porch`, its near end `porch_side`, its top `porch_top`) — where they will wait out the rain.
- The street lamp by the parapet, 5.8 m off (`lamp`, point `lamp#flame`) — where the Lodger stands; the same lamp
  (`lib.lamp`) burns down both banks (`lamps`, copies: the near bank every 25–35 m, the far bank's street likewise).
- A bench along the parapet beyond it, 13 m off (`bench`, point `bench#seat`).
- Across the canal the far bank's granite wall (`far_wall`, from the water up to its parapet) and its street
  (`far_street`); the houses on both banks are five kinds of facade (`house_a` … `house_e`, `lib.HOUSES`), each painted
  once and standing in many places (copies; facing 90 on the far bank, 270 on the near side beyond the yellow house).
- A low stone bridge over the canal 45 m off (`bridge`); a veil of mist on the water far down (`mist`); the house where
  the canal turns, closing the view at 322 m (`vista`); over it, far in the haze, a dome and a gilded needle (`spire`).
- The corner they wait for is near on the right, behind the viewer's shoulder: Nastenka looks toward it, past the
  viewer.

## The people (the world's `cast`: modules/cast.md)

Three near the viewer (3.5–6 m), gathered round the lamp, so that faces, hands and the clothes of the 1840s read; each
stands differently, each face turned to us at least three-quarters.

- `nastya` — Nastenka at the parapet, 3.5 m off, 0.3 m from its face, nearest of the three: turned toward the corner
  (150°), her right hand resting on the granite's top (`nastya_reach.r`, the elbow bent), her left at her breast
  holding her mantle (`.l`), looking toward the corner just past the viewer ([2.5, 0, 1.6]), waiting (`thinking`).
- `dreamer` — the Dreamer on the right, a step farther than he need be (4.4 m off, 1.6 m from her): bare-headed, his
  brown hair, his faded green coat; turned half to her and half to us (225°), his knotty stick in the right hand
  (`cane`), his top hat held low before him by its brim in the left (`hat_held`), looking at her with a shy smile.
- `lodger` — the Lodger by the lamp, 5.9 m off: upright in his top hat and long slate-blue coat, his right hand on the
  lamp's post (`lodger_reach.r`), the left at his side, looking at her, reserved (`neutral`).

They stand (the engine's `stand`: breathing), their hands put where they rest and hold by `reach` (each target within
the arm's length of the shoulder as it stands, so the elbow bends). The cast has no standing motions of its own yet:
leaning on the parapet, holding a hat shyly, standing to attention are the first to make (make_motion → put_motion).

## State

`lamp` 0…1 — the lamp's light and glow (the light's `on`). The people's keys are the engine's (`<id>_reach`,
`_look`, `_with`, `_mood`).

## What moves

The clouds drift (a sky layer), the ripple runs down the canal (a layer of the water), the mist drifts across, the
lamp's flame flickers a little, the people breathe. Nothing is painted again while the scene plays.
