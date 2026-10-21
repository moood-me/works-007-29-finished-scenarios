# Pemberley, by the water

The first scene of the world, for the owner's look at its style (stage 2 of writing the game: the look). The place is
Pemberley at the water (scenario: places, IV.2 and Б-IV.2): the pond, the bridge, the house across the water on rising
ground backed by woody hills. It sets the world: a light watercolour with a fine sepia pen line (Hugh Thomson), green
and cream, bright, no dark corners. People stand; only the air moves — wind in the grass, the reeds, the beech and the
laurel, the clouds drifting, the water's ripple and its mirror.

## What is where (from the start: x across the stage, metres)

- **Elizabeth** (`elizabeth`, cast `elizabeth`) — on the gravel walk at −1.3 m, 5 m off, turned a little to the left
  (190°), looking down aside at the walk (`elizabeth_look`), a small smile (`elizabeth_mood`). Bareheaded, as she
  walks out: a pale high-waisted gown, a sage sash.
- **Mr Darcy** (`darcy`, cast `darcy`) — three steps from her, at 1.35 m, 5.7 m off, turned toward her (215°), hands
  behind his back (`hands_behind`), looking at her (`darcy_look: "elizabeth"`) — "looks at her when she does not
  see". Dark blue coat, white cravat, buff breeches.
- The house (`house`) is between them in the distance, 150 m off across the water, on the relief's rise; the woods
  (`woods`, 320 m) and the far hills (`hills`, 900 m) behind it; park trees in clumps on either side (`park_tree`,
  copies); the stone bridge to the right (`bridge`, 92 m, its foot at the water's level −0.2).
- The water (`water`, a mirror plane at −0.2 from 9 m to 107 m), lily pads by the near bank on the left; the bank's
  side-on edge (`near_edge`, the land steps from 0 to −0.7 at 9.4 m) with reeds (`reeds`, copies).
- Near: the lawn and the walk (`lawn`, draped), a beech's trunk at the left edge with a bough over the top of the
  frame (`tree_left`, its crown a wind layer), a laurel with cream roses at the right edge (`shrub_right`), grass
  tufts and cow parsley along the bottom (`tuft`, `parsley`, copies, each a wind layer about its foot — the
  engine's wind bends a layer about its pivot by the distance from it, so a row of grass is many small copies, not
  one wide layer).

## Light

The engine's: the sun from behind the viewer on the left (`sun_bearing` 215, `sun_height` 38) lights both faces from
the front; ambient 0.85, a light haze toward a pale green-grey. `evening` (0…1) is a look — warmer, a little more
haze; the showcase moves it with the sun (238, 22) for an early evening, still bright. No painting reads these keys.

## Brushes

`lib.js`: `wash` (a fill with blooms of pigment — the path filled again with radial gradients, so they stay inside —
and a darker pooled edge), `pen` (a sepia line, its width in screen pixels by the element's distance: `px`),
`foliage` (leaf dabs in three greens over a dark underlayer), `ridge`, `cloud`. The three rare colours of the world
(Lydia's scarlet, Charlotte's grey, the blue seal) are not used here.
