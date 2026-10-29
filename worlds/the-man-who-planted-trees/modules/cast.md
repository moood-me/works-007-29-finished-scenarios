# cast — the people of “The Man Who Planted Trees”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`plateau` — the engine's flat geometry (`flat`): straight edges, plain dusty colours, lit by the scene's light, a fine
line, a simple face (eyes, brows, nose, mouth — `<id>_mood`).

## Who

- `elzeard` — Elzéard, the shepherd, 55: tall and lean, clean-shaven, short grey hair under a dark felt hat, a brown
  wool jacket buttoned over a pale shirt.
- `traveller` — the Traveller, 20: slight, bare-headed, brown hair, a faded blue-grey jacket; a canvas bag on a strap
  over the left shoulder, a tin flask at the right hip (both of his look).
- `lina` — Lina, 17, the charcoal burner's daughter: sturdy, dark hair under a rust-red kerchief (the world's one
  colour accent), a soot-grey dress, barefoot; a tin mug in her right hand (of her look).

Six years on (the second chapter):

- `elzeard_61` — Elzéard at 61: the same man, his hair white, the jacket faded; the rod in his hand (of his look).
- `traveller_26` — the Traveller at 26, back from the war: a grey-olive soldier's greatcoat to the knee, a field cap,
  the bag on its strap.
- `lina_23` — Lina at 23: the rust-red kerchief, a slate-blue dress, shoes; a wooden pail in her right hand (of her
  look).

Fourteen years on (the third chapter):

- `traveller_40` — the Traveller at 40: a short beard, greying brown hair, a faded blue-grey jacket again (as at 20), the
  bag on its strap.
- `lina_37` — Lina at 37: broader, the rust-red kerchief, a dark indigo dress, shoes; the pail in her right hand.
- `jan_40` — Jan at 40, the district's forester, the Traveller's comrade from the regiment: solid, clean-shaven, a
  bottle-green forester's coat to the knee, a peaked cap; his notebook in his left hand (of his look).

The village (М1, its own scene):

- `charcoal_burner` — Lina's father, the charcoal burner, about fifty: thickset, a soot-black leather apron over a grey
  shirt, a flat cap, his skin dark with coal dust.
- `jan_26` — Jan at 26, the night they are let go from the regiment: the same grey-olive greatcoat and field cap as the
  Traveller's, broader, dark-haired, clean-shaven, his kitbag on its strap.
- `lina_47` — Lina at 47 (the epilogue): broad, the rust-red kerchief, a sage-green dress, shoes.
- `traveller_50` — the Traveller at 50: grey hair, a short grey beard, the faded blue-grey jacket, the bag.
- `neighbour_woman`, `neighbour_man` — villagers come back (the epilogue): a dun dress and a bun (no kerchief: the
  rust-red is Lina's alone); shirt sleeves and a felt hat (a spade by `_with`).
- `village_girl`, `village_boy` — the village's children (the epilogue).

The years after (the house, the forest's edge, the stream across the years):

- `elzeard_75`, `elzeard_85` — Elzéard at 75 and 85: leaner, the hair snow-white, the jacket faded paler; the rod.
- `chief` — the chief from town (3.2): stout, a camel town coat, a dark hat.
- `ranger` — the young ranger (3.2, 3.5): a lighter forester's green jacket, a cap.
- `axeman` — a man of the village with an axe (3.1): a worn brown jacket, a cap, the axe (of his look).
- `visitor_a`, `visitor_b` — visitors come to look (3.5 on the Name, the finals): a woman in a plum town coat and hat
  with a basket (of her look); a man in a grey-blue town coat and hat with a notebook (of his look).
- The boy of the final «The Pupil» is the village's `village_boy`.

## Things (the cast's parts: a look's `parts`, or `<id>_with`)

`rod` — the iron rod, upright in the right hand from the ground to a hand's width over the fist; its top is the
person's point `#rod`. `mug` — a tin mug upright in the right hand (`#mug`). `satchel` — the bag at the left hip
(`#bag`). `flask` — the flask at the right hip (`#flask`). `pail` — a wooden pail hanging from the right hand by its
bail (`#pail`). `notebook` — a forester's notebook in the left hand (`#notebook`). `spade` — a spade upright in the right hand, its blade
on the ground (`#spade`). `letter` — a sheet of letter paper in the left hand (`#letter`). `gourd` — a gourd of water in the right hand
(`#gourd`). `axe` — an axe hanging from the right hand, the head by the knee (`#axe`). `basket` — a
wicker basket hanging from the right hand (`#basket`). `beard` — a short beard in the
hair's colour (worn, not held).

## Motions

`hands_behind` — stands still, the hands clasped behind the back, looking far ahead (a loop). Besides the engine's
`stand` and `walk`.
