# Pemberley, by the water

The first scene of the world, for the owner's look at its style (stage 2 of writing the game: the look). The place is
Pemberley at the water (scenario: places, IV.2 and Б-IV.2): the pond, the bridge, the house across the water on rising
ground backed by woody hills. It sets the world: a light watercolour with a fine sepia pen line (Hugh Thomson), green
and cream, bright, no dark corners. People stand; only the air moves — wind in the grass, the reeds, the beech and the
laurel, the clouds drifting, the water's ripple and its mirror. The second scene, `longbourn-room`, shows the Bennets'
drawing room and the sisters.

## What is where (from the start: x across the stage, metres; the horizon at 0.36)

- **Elizabeth** (`elizabeth`, cast `elizabeth_walking`) — the nearer of the two, a little right of the middle and low in the
  frame (her feet near its bottom), on the walk at across 0.1, 2.85 m off: turned three-quarter to the eye toward the
  right (220°; as the engine turns a person, under 180 is toward the screen's left, over it toward its right), looking
  ahead down the walk where it comes out at the near right (`elizabeth_look`, at eye height) — not at him; a knowing
  smile (`elizabeth_mood`; her face `austen_wry`: one brow up, one corner of the mouth higher) — she knows he looks.
  Her right hand rests at her waist (`elizabeth_reach`: a point just before her sash), her left holds a closed parasol
  of pale sage silk, its tip on the gravel before her foot; a straw bonnet with a sage ribbon under the chin; a white
  high-waisted gown, short puffed sleeves, a sage sash. White against the green and the water beyond: she stands clear.
- **Mr Darcy** (`darcy`, cast `darcy`) — three steps behind her, farther back on the walk and to the left (across −1.45,
  4.7 m off), so the two stand on two planes, he the smaller: turned to her (215°), hands clasped behind his back
  (`hands_behind`), looking at her (`darcy_look: "elizabeth"`), grave (`darcy_mood: thinking`; his face `austen_proud`:
  heavier lids, low heavy brows, a firm mouth) — "looks at her when she does not see". His dark blue coat stands
  against the pale water and the house's reflection, clear of the bridge (far to the right) and of the beech (to his
  left). A tailcoat of the 1810s: its fronts end at the waist and curve back into tails to the backs of the knees, a
  high standing collar behind the neck, a pale waistcoat, a white cravat, doeskin breeches, black top boots with tan
  tops. Both faces three-quarter to the eye; both within the 4:3 frame. Their shadows (`shadow` 0.75) fall behind them
  to the right from the sun low on the left.
- The house (`house`) above and between them in the distance, 150 m off across the water at across −20, on the
  relief's rise; the high woods behind it (`woods`, 320 m) close the view — no far hills: from here the woods stand higher than any range at 900 m, which only ever showed as pale flat slivers between their crowns; park trees in clumps on
  either side (`park_tree`, copies); the stone bridge to the right on the far shore (`bridge`, across 38, 106 m, its foot at the
  water's level −0.2), where the stream comes down out of the park into the water: its piers stand in the water on
  pointed cutwaters, the stone wet and darker at the waterline, the vaults in shade with the stream going back under
  them; at either end the parapet sweeps down in a wing wall into a grassy embankment in the park's greens, a clump of
  shrubs where the stone meets the grass — it goes from bank to bank. Whole within the 4:3 frame.
- The water (`water`, a mirror plane at −0.2 from 9 m to 107 m), lily pads by the near bank on the left; the bank's
  side-on edge (`near_edge`, the land steps from 0 to −0.7 at 9.4 m) with reeds (`reeds`, copies).
- Near: the lawn and the walk (`lawn`, draped; the walk, 2.3 m wide, comes along the water from the left and turns
  toward the eye under both their places, out at the near right), a beech's trunk at the left, 5.6 m off at across
  −3.4 — inside the 4:3 frame, holding its left side (`tree_left`: grey-green bark washed unevenly, warm down its sunlit
  left edge, moss at the foot, the shade side densely hatched and its darkest edge cross-hatched, the top under the
  crown's shade hatched across, bark lines and a beech's dark "eyes"; one low bough reaching in under the title's left
  end and the crown's lowest masses at the top-left corner — a wind layer; the rest of the crown is above the frame,
  the title clear), a low laurel with cream roses at the right edge, 5.2 m off, its top under the eye so the bridge and
  the water stand clear (`shrub_right`). The foreground is not symmetric: under the beech only two low tufts; the
  uncut grass, buttercups and cow parsley gather at the right, beside the walk where it comes out (`tuft`, `parsley`,
  copies, each a wind layer about its foot).
- No caption: the page sets only the scene's title, in white over the sky's deep top.
- The sky (`sky`): a graded cerulean, deep at the top where the page sets the title in white (it reads over it),
  paling to a soft blue at the woods (blue enough that the far crowns stand against it); three clouds high in
  the right-hand corner, drifting very slowly to the right round the sky's width. No cloud lies low behind the woods:
  slivers of one showed as white triangles between the crowns.

## Light

The engine's: the sun from behind the viewer, well to the left (`sun_bearing` 242, `sun_height` 28, strength 1.15) — a
soft side light that lights both faces and models the people against the walk; ambient 0.64 in a cool grey
(`#e9edf0`), so the sides turned from the sun and the shade under the trees are a little deeper; a thin haze toward a
pale blue-grey (0.07), shafts 0.03 — no milky veil over the far park. `evening` (0…1) is a look — warmer, a little more
haze; the showcase moves it with the sun (258, 18) for an early evening, still bright. No painting reads these keys.

## Brushes

The world's module `brush` (brush.md): `wash` (blooms of pigment and a pooled darker edge), `pen` (a sepia line a few
screen pixels wide, slightly doubled, as a nib leaves it — widths are `n * px`), `hatch` (pen hatching in the shade:
the portico, under the cornices, inside the bridge's arches, under the trees' clumps), `foliage` (leaf dabs in three
greens over a dark underlayer, the pen scalloping round the tops), `grass` (the lawn hatched in short strokes),
`ridge`, `cloud`. The cast's people are drawn round with the same sepia ink, as fine as the places' finer strokes (`cast`: style
`austen`, line 1.1, ground `sepia`), their gowns and coats in deep soft folds lit by the scene. What the engine does
not give people is a painted surface: they are lit solids with the pen round them, never a wash with its grain or a
hatching over their folds — so they stay smoother than the places; nothing here fakes it.

## What moves

People stand and breathe (the engine's `stand`; Darcy's `hands_behind` loop); the beech's bough and crown, the
laurel, the tufts and the cow parsley sway in the wind (their layers); the water ripples its mirror (`ripple` 0.15);
the clouds drift. Nothing is painted again as it plays.

## Colour

The world's palette here: greens and cream, the stone's buff, the sky's blue — and Darcy's dark blue coat, Elizabeth's
sage sash, the laurel's cream roses. The world's three rare colours (Lydia's scarlet ribbon, Charlotte's grey gown,
the blue seal) are not in this scene: neither she nor they are here, and nothing else wears them.
