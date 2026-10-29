# The Secret Chamber

Stage 4 of the game (all its places), the scenario's С5: the little stone room behind the panel on the staircase
landing, where Sir Simon's bones have sat chained for three hundred years — the place of two moments of the
scenario (4.6 and 4С.5), each a key `moment`. People stand, kneel and breathe; the candles flicker, the almond's crown
stirs, dust hangs in the moonbeam; no motion of people, no camera moves.

- **Where things are.** Camera `picture`, horizon 0.42. A low room 6 m wide, 2.4 m high, from 0.9 m to its far wall
  at 5.6 m: the stone floor (`floor`, flags, dust, old straw along the far wall), the stone ceiling on two black oak
  beams (`ceiling`, a card laid face down, `tilt` −90), walls of rough stone (the lib's `stone`: courses of uneven
  blocks, damp, stains running down).
- **The far wall** (`back_wall`): the great iron ring on its staple left of the middle, at 0.95 m (`back_wall#ring`,
  across −0.15); on the right the low round-headed mouth of the passage in the wall (x 1.35…2.05, 1.75 m at its
  crown), cut through — behind it the narrow stair going up into the dark toward the Tapestry Chamber (`passage`,
  `passage_floor`).
- **The skeleton** (`skeleton`, a thing: one card 0.18 m out from the far wall, casting its shadow): a gigantic man's
  bones sitting slumped against the wall under the ring, the knees drawn up, the skull fallen forward; a rusted chain
  from the ring to an iron band round the waist; the right arm stretched along the floor to the left, the long fingers
  (`skeleton#hand`) stopping a few centimetres short of the pewter `trencher` (a plane on the floor, across −1.62) and
  the `ewer` beside it (across −2.02). Points: `skeleton#skull`, `#hand`, `#chain`, `trencher#trencher`, `ewer#ewer`.
- **The left wall** (`left_wall`, +x away from the viewer): the way out to the hall — the hidden panel standing open
  (4.3…5.1 m away, 1.85 m high, its oak lining; `left_wall#panel`), cut through; beyond it the landing: `door_jamb`
  (the panel's frame on the far side of the opening), `hall` (the landing's oak panelling and the banister going
  down), `hall_floor`, and the light `landing` (the candles out there, key `landing`).
- **The right wall** (`right_wall`, +x toward the viewer): the little barred window onto the garden high in it (4.5…5.2
  m away, from 1.1 m to 1.7 m), cut through; its far reveal (`reveal`), its `sill`, and the `window` (three iron bars
  and one across, at the wall's outer face; `window#window`; its box is the opening the moon comes in by). Outside,
  2.2 m below the chamber's floor: the garden (`lawn`), the old almond tree in white blossom (`almond`, its crown a
  layer stirring in the wind; `almond#blossom`), the night sky (`sky`). From the viewer's place the window is seen
  at a slant: only a sliver of the night and the blossom shows; a camera near the window sees the almond whole.
- **Light.** The moon low behind the right wall (`moon`, `from` [102, 7.5], `through` the window): a beam across the
  room in the haze, falling on the ring and the skull on the far wall, `motes` in it — nobody stands in it, so its
  patch stays whole. The candles in the hands (`otis_candle` at `otis#flame`, `washington_candle` at
  `washington#flame`: the cast's part `candle`), the landing's glow through the panel. Ambient 0.36, cool: the
  stone is painted a dark cool grey, the candles warm the faces.

## People and the key `moment`

Set by the scene's script as it opens and whenever `moment` changes (`script.js`):

- **`family`** (4.6, the night he died; the default). The whole family come in through the panel with candles.
  Virginia, in her riding habit (`virginia_habit`), kneels at the skeleton's right (`pray`, 1.0 / 4.45, turn 248),
  looking at the skull, `sad`. Mr Otis stands just behind her right (1.6 / 4.65, turn 225), his candle held out over
  her (`offer`, `otis_with: ["candle"]`), looking down at her. Mrs Otis by the panel (−1.75 / 3.8, `clasped`) and
  Washington in the panel's opening with his candle (−2.75 / 4.75, `offer`), both looking at Virginia. The twins at the
  window, `surprised`, looking out at the almond (`window#window`): `twin_star` before it (2.35 / 4.25, half turned
  away), `twin_stripes` beyond it by the far wall (2.7 / 5.48, his face to the room). The landing lit.
- **`father`** (4С.5, the last night). She has led him down the passage in the wall: Virginia in her white frock (her
  `virginia_wear`: the cast's `virginia`) kneeling as before; Mr Otis alone in the passage's mouth (1.7 / 5.75, turn
  200) with his candle, looking at her; nobody else (`<id>_here` false); the landing dark.

Mr Otis walks by his place keys `otis_a`, `otis_d` (the moment sets them; a game may walk him between them). Every
face is turned between the viewer and what it looks at, so it reads (only `twin_star`, looking out of the window,
shows his cheek). Cecil is not here: the scenario does not put him in this room.

## What is not right yet

- Virginia's face, kneeling with her hands at her chin and looking at the skull, is seen in profile, half behind her
  hands.
- The almond is seen only through a sliver of the window from the viewer's place (the window is in a side wall, so
  that the moon can fall on the ring in the far wall); the twins' «Миндаль!» wants a camera at the window (stage 5).
