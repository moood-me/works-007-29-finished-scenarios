# The Square

Stage 4 of the game (all its places), the scenario's С6: the square of 3.3 — a spring afternoon, the first Qingming
without her; Jack has brought the letter (Laohu unfolded) to the town and found a woman from a Chinese tour group on a
bench, waiting for her bus. She reads it to him. The place and its people standing (a breath, a look; the lindens stir,
the clouds drift); no one walks, no camera moves, no mini-games — stage 5's.

## Where things are

Camera `picture`, horizon 0.46 (the frame's height at distance d is d metres: the safe frame's half-width there is
0.67·d).

- **Near us**: the bench (`bench` — its back's three green slats on cast-iron ends, her brown handbag at its left end;
  `bench_seat` — the seat, a plane at 0.44 m) at across −1.6, 4.4 m. Points: `bench#seat`, `bench#bag`.
- **The square**: warm grey paving in big stones, a ring of darker stone before the town hall (`ground`); two
  cast-iron lamp posts (`lamps`, copies); four lindens in new leaf (`trees`, copies; their crowns a layer in the wind).
- **The coach** (`bus`) in its lay-by on the right, 17 m off, side on, its front to the left and its door just behind
  the front standing open (point `bus#door`, across ≈ 2.7) — white, with the tour company's teal sweep and yellow line
  (the guide's colours).
- **Across the square** (38 m): the town hall (`town_hall`: cream stucco, a pedimented bay, the arched door up three
  steps, geraniums under the upper windows, the clock tower at twenty past three with a copper-green cap; points
  `town_hall#clock`, `town_hall#door`; drawn at 0.72 of its written sizes); the rows of old houses with striped
  awnings along both sides (`row_left`, `row_right`; the lib's `row`), the town's roofs and a spire far off (`far`),
  the spring afternoon sky (`sky`, its clouds a drifting layer).
- **Light**: the afternoon sun behind the viewer on the right (`sun`), faces toward us lit.

## People (cast: modules/cast)

- `translator` (new): a woman of fifty-five from the tour group, a northerner — short permed hair going grey, a camel
  trench coat, a red scarf; seated on the bench (`translator_on: [-1.3, 4.12, 0.45]`, motion `reading_seated`), the
  letter open in her hands (`translator_with: ["letter"]`, point `translator#letter`), her face to us, looking up at
  Jack (looking down at the letter she shows the top of her head: a game keeps her reading glances short).
- `jack`: Jack at twenty-two — the cast's `jack_grown` without the suit bag (`jack_wear: {"parts": []}`), standing by
  her at (−0.15, 3.85), turned toward her, his eyes on the letter.
- `guide` (new): the group's guide in the company's teal jacket and cap, at the coach's door, her little flag held up
  (`guide_with: ["flag"]`, motion `showing_suit` — the right hand up at the side), looking at the translator: the bus
  is boarding.
- `tourist_cap`, `tourist_hat`, `tourist_coat` (new): three of the group by the door, waiting to get in.

Added to the cast for this place: the characters above; the parts `letter` (Laohu unfolded — one thin sheet of the red
wrapping with its gold stars and the old yellow tape across it; her writing is not on the part; point `letter`; used in
the yard too) and `flag` (point `flag`). Every key a game needs here is a person's:
`<id>_here`, `_look`, `_mood`, `_with` (the letter passes from Jack's hands to hers and back: `jack_with` /
`translator_with`), `_turn`; people have no `place` keys yet — stage 5 adds them where someone walks (the translator to
the bus).

## The showcase

She looks up at Jack, surprised (the paper is warm), he at the letter, then at her → she reads, he with her → the
guide calls, she glances at the bus and back up at Jack.

## What is not right yet / for stage 5

- 3.3's close-up of her face and the insert with the letter's writing (the tape peeled in M7) are stage 5's: the
  writing is not drawn on the part (a sheet that small and two-sided read as a red box).
- The guide holds her flag with `showing_suit` (a motion made for holding up a suit bag by its hook): it reads as a
  hand raised with a flag; a calling gesture is stage 5's motion.
- The letter in her hands still reads as a small red box, not a thin sheet: an `F.ball` 0.001·h thick is drawn with
  depth all the same (the part's ball seems to keep a minimum thickness or round its edges). A flat sheet held in the
  hands wants a part drawn as a sheet (`F.cloth` is only for what is worn from the start) — stage 5, or a question for
  the engine.
