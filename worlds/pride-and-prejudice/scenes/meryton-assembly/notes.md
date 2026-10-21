# Meryton, the assembly room

A scene of the world for the owner's look at its style (stage 2 of writing the game: the look) — the third place
after Pemberley and Longbourn, and the first in candlelight: the ball at Meryton (scenario: I.1, places — Meryton, the
assembly room). The second dance: Jane and Bingley face each other in the set, Darcy stands apart, the only one in the
room who is still, and watches them; Elizabeth, a few steps from him by the wall with Charlotte, has just heard what he
said of her — and smiles to herself. People stand; only the light lives — the candles flicker, motes drift in the
windows' light, the floor's wax gives back the room.

## What is where (from the start: x across, metres; the room 7.2 m wide — across −2.8…4.4 —, 6 m high, 16 m long)

- **Elizabeth** (`elizabeth`) — nearest, left of the middle (−1.0, 3.25 m off), standing with her hands folded
  (`hands_folded`), turned a little to the
  screen's right (195°: under 180 is toward the screen's left), looking ahead (`elizabeth_look`), a knowing
  smile (`elizabeth_mood`; the showcase starts her neutral and lets it come).
- **Charlotte Lucas** (`charlotte`, cast `charlotte`: the world's rare grey gown, hers alone) — at Elizabeth's
  left, a little behind (−1.65, 3.55 m), turned to her (215°), looking at her.
- **Jane** (`jane`) and **Bingley** (`bingley`, cast `bingley`: a warm brown tailcoat, white waistcoat, cream
  breeches, white stockings, pumps — dressed for the ball) — in the set in the middle (0.15 and 0.95, 4.9–5.0 m),
  turned to each other three-quarter to the eye (240° and 120°), looking at each other and smiling.
- **Darcy** (`darcy`) — apart at the right (2.2, 5.6 m), turned to the screen's left (145°), hands behind his back
  (`hands_behind`), looking at Bingley (`darcy_look`), grave (`darcy_mood: thinking`) — he does not see her.
- The neighbours (cast `guest_lady`, `guest_gent`, each its own colours by the look's `colors`): a couple facing each
  other in the set behind, in the gap between Elizabeth and Jane (`guest_a_lady`, `guest_a_gent`, 8.5 m); a couple
  talking under the far windows, between Bingley and Darcy (`guest_b_lady`, `guest_b_gent`, 11 m). They stand where
  the heroes' heads leave the frame free — move them with care.
- The room: `floor` (waxed boards, a mirror plane — strength 0.2, rough 0.3, fade 3 —, the chalked wreath of the night
  in the middle, rubbed where the set has danced), `ceiling` (a plane face down: sage coffers in cream ribs — the
  title reads white over it), `left_wall` (six fluted pilasters, celadon panels), `right_wall` (three tall
  round-headed windows to the street, 6.5, 10 and 13.5 m off), `back_wall` (the double doors, a half-round lunette over
  the gallery). The dress of the walls is one, in `lib.js` (`wall`, `holed`).
- `gallery` — the musicians' gallery across the far end (15 m), on two columns, a balustrade with the tops of a harp, a
  bass and two music stands behind it; `gallery_flames` — the stands' candles. Nobody plays there yet: the musicians
  are for when the game needs them (people, seated, behind the rail).
- `window` (copies: the frames and the gold damask curtains of the three windows), `opening_a/b/c` (the unseen panes
  the daylight comes in at), `evening` (beyond them, 3.6 m out: the evening sky, Meryton's houses across the street,
  a few windows lit, elms).
- `chandelier` / `chandelier_flames` (copies: one over the set at the right, 7.5 m, one over the middle, 12.5 m — two
  rings of six and eight candles, `lib.candles`), `sconce` / `sconce_flames` (copies: girandoles on the pilasters,
  `lib.SCONCE`), `chairs` (copies along the left wall), `motes` (dust in the windows' light).

## Light

The engine's: the three windows' daylight (`window_a/b/c`, 1.6) from the right; the two chandeliers (`chandelier_near`,
`_far`: points at their candles' height, a warm pale gold) and the seven girandoles (`sconce_0` … `sconce_6`; the
first, on the left wall 2 m off, and the last, on the right wall 4.75 m off, are out of the frame — they light the
faces from before); `ambient` 0.86 in a warm cream, `inside` 0.6, `bounce` 0.65; a light haze lit round the flames
(`hazeGlow` 0.35). `later` (0…1) is a look: the windows down to a third, the chandeliers and the girandoles near the eye up (the faces stay lit), the room warmer — the
showcase moves it. No painting reads it.

## Brushes

The world's module `brush` (wash, pen, foliage) — the same hand as Pemberley's and Longbourn's; the cast's line is the
same sepia ink.

## Colour

Cream, sage and celadon, the gilt of the chandeliers and girandoles, the boards' honey; the people's own colours. The
rare three: Charlotte's grey is here, on her alone; no scarlet (Lydia is not here), no blue seal.
