# cast — the people of «Pride and Prejudice»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). In the
scene's `modules`. The parts' lengths are a man's metres times `F.fit.h`, their thicknesses times `F.k`.

## Style

`austen` — slender Regency figures (from `soft`) with a short neck and a head big enough for a face to read: colours with
their shade (`paint: toned`, lit by the scene), the sepia pen round them and where their colours meet (`line` 1.1 — a
fine nib, as thin as the places' finer strokes of the world's `brush`, the same ink, so people and places are of one
hand), cloth falling in many deep soft folds (`folds` 13, depth 0.13).
Arms and legs (`regency` profiles) with flesh to them, slim wrists and ankles. Faces `austen` (the cast's own): almond
eyes — their warm whites, a dark iris filling them, a pen-dark upper lid —, brows a shade darker than the hair, a
straight nose (the skin's own colour, its form the light's), lips a shade rosier than the skin parted by a fine pen line — each expression of `<id>_mood` (`smile`: the
corners well up, the eyes a little narrowed, the brows' outer ends lifted — knowing; `thinking`: the brows drawn down
and together, the mouth level; a laugh narrows the eyes only a little, so they still read). Gowns fall from under the
bust in a soft A-line to the instep, the slippers' toes showing (`gown`, flare 0.5, `to` 1.9). The light is the scene's.

## Who

- `elizabeth` — Elizabeth Bennet, twenty: not tall, light; dark hair up in a knot, curls at the temples (`curls`),
  bareheaded; a white muslin high-waisted gown, a little warm (`gown`), short round puffed sleeves over long ones
  (`puffs`), a sage-green sash under the bust (`sash`, the look's `accent`).
- `jane` — Jane Bennet, twenty-two: a little taller, fair hair up, a primrose gown, a dusty-rose sash, pale slippers.
- `lydia` — Lydia Bennet, fifteen: round-faced, dark-blonde, a bright coral-pink gown (the liveliest of the sisters,
  never grey) and her scarlet ribbon round her hair (`ribbon`: a band above the brow, tied at the left, its two ends
  swinging).
- `darcy` — Fitzwilliam Darcy, twenty-eight: tall, straight, dark hair brushed forward (`brutus`); a whole dark blue
  tailcoat, close over the chest, its fronts cut away over the tops of the thighs (`tailcoat`), its tails to the knee behind (`tails`, a sheet of
  cloth kept to the back), the buff waistcoat as a narrow V between its open fronts (`waistcoat`), a white cravat — a high
  stock round the neck and its fall under the chin (`cravat`) —, buff breeches, dark brown-black top boots (`socks`).
- `bingley` — Charles Bingley: a little shorter than Darcy, open-faced, sandy hair brushed forward; dressed for a ball —
  a warm brown tailcoat with its tails, a white waistcoat and cravat, cream knee breeches, white stockings, black pumps.
- `charlotte` — Charlotte Lucas, twenty-seven: plain, sitting and standing straight, brown hair up without curls; her grey
  gown (the world's rare grey) with a darker grey sash.
- `guest_lady`, `guest_gent` — the neighbours at a ball, nobody in particular: a lady in a gown, a gentleman in a tailcoat;
  a scene gives each its own colours (the look's `colors`, whole) from the world's greens, creams, buffs and soft blues.

The world's three rare colours — Lydia's scarlet ribbon, Charlotte's grey gown, the blue seal of Darcy's letter — are
kept for those three; nobody else wears them.

## Motions

The engine's `stand` and `walk`; and `hands_behind` (stands with the hands clasped behind the back, a loop — Darcy's
way of standing) and `seated` (sits at rest on a chair, a loop: the seat through `<id>_on`, its top 0.46 m for a
woman) — both taken from Kimodo's motions of the same names in pavel/scarlet-sails.
