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

Light (all the engine's; everything is painted in daylight colours): a high ambient in lilac-white, a weak low warm
far light from where the sky glows (`glow`, bearing −21°, 6° up — soft long shadows), a weak cool light from high up
(`skylight`), the lamp (`lamp`, from `lamp#flame`, warm, a little flicker, its halo the haze's `hazeGlow`). Haze
fades the far end of the canal and the dome; grain and vignette for the print's paper.

## What is where (metres; the viewer at 0, eyes 1.7 m up, looking down the canal)

- The canal runs straight away from the viewer: its water a reflecting plane 2.2 m under the streets, across −24 …
  −2.3, 320 m long (`water`; a slow ripple layer drifting toward the viewer).
- The near granite parapet — her place — along the canal at across −1.8 (`parapet`, its face to the street; its top
  `parapet_top` at 1.05 m, 0.5 m wide), from a metre off into the distance: the leading line from the bottom-left.
- The street (`pavement`): flagstones along the parapet, the cobbled roadway beyond, to the houses at across 6.
- The yellow house on the near side, its front to the canal (`yellow_house`, d 3…29), its door 12 m off (point
  `yellow_house#door`) under an awning on two iron posts (`awning`, `awning_front`, `awning_side`, `awning_post`;
  the porch step `porch`, `porch_top`) — where they will wait out the rain.
- The street lamp by the parapet, 10 m off (`lamp`, point `lamp#flame`) — where the Lodger will stand.
- A bench along the parapet beyond it, 16 m off (`bench`, point `bench#seat`).
- Across the canal the far bank's granite wall (`far_wall`) and its street (`far_street`); the houses on both banks
  are five kinds of facade (`house_a` … `house_e`, `lib.HOUSES`), each painted once and standing in many places
  (copies; facing 90 on the far bank, 270 on the near side beyond the yellow house).
- A low stone bridge over the canal 45 m off (`bridge`, one arch the water shows through); a veil of mist on the
  water far down (`mist`); the house where the canal turns, closing the view at 322 m (`vista`); over it, far in the
  haze, a dome and a gilded needle (`spire`).
- The corner they wait for is near on the right, behind the viewer's shoulder: Nastenka looks toward it, past the
  viewer.

## The people (the world's `cast`: modules/cast.md)

- `nastya` — Nastenka by the parapet, 4.6 m off: turned toward the corner (150°), looking toward it ([3, 1, 1.55]),
  waiting (`thinking`).
- `dreamer` — the Dreamer a step farther from her than he need be (2.3 m, 6 m off), turned to her (232°), looking at her,
  his top hat held before his chest in both hands (`dreamer_with: hat_hands`, his hands put there by
  `dreamer_reach`), a shy smile.
- `lodger` — the Lodger by the lamp, 9.8 m off, upright, turned toward her (189°), his top hat at his chest in the
  right hand (`lodger_with: hat_hand`, `lodger_reach.r`), looking at her.

They stand (the engine's `stand`: breathing). The cast has no motions of its own yet: the motion model's Space was
paused when this was made, so the poses are `stand` with the hands put where they hold things by `reach`. Leaning on
the parapet, holding a hat shyly, standing to attention are the first motions to make (make_motion → put_motion). (Her hand put on the parapet's top by `reach` came out as an
  arm stuck out sideways: left for a leaning motion.)

## State

`lamp` 0…1 — the lamp's light and glow (the light's `on`). The people's keys are the engine's (`<id>_reach`,
`_look`, `_with`, `_mood`).

## What moves

The clouds drift (a sky layer), the ripple runs down the canal (a layer of the water), the mist drifts across, the
lamp's flame flickers a little, the people breathe. Nothing is painted again while the scene plays.
