# cast — the people of «Pride and Prejudice»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). In the
scene's `modules`. The parts' lengths are a man's metres times `F.fit.h`, their thicknesses times `F.k`.

## Style

`austen` — Hugh Thomson's people: slender and long-limbed (from `shadow`), a small head on a neck of natural length,
colours with their shade (`paint: toned`, lit by the scene), the sepia pen round them and where their colours meet
(`line` 1.1 — a fine nib, as thin as the places' finer strokes of the world's `brush`, the same ink, so people and
places are of one hand), cloth falling in long soft folds (`folds` 11, depth 0.1). Arms and legs (`regency` profiles)
slim, small hands without fingers. The face `austen` (the cast's own) is a few strokes, as the drawings give it: dark
almond eyes under a pen-dark lid, fine brows a shade darker than the hair, a straight nose (the skin's own colour, its
form the light's), a small mouth a shade rosier than the skin — each expression of `<id>_mood` (`smile`: the corners
up, the eyes a little narrowed, the brows' outer ends lifted — knowing; `thinking`: the brows drawn down and together).
Gowns fall from under the bust in a soft A-line to the floor, the slippers' toes showing (`gown`, flare 0.42, `to`
1.97: seated, it covers the shins when the feet are under the knees). The light is the scene's.

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

The world's three rare colours — Lydia's scarlet ribbon, Charlotte's grey gown, the blue seal of Darcy's letter — are
kept for those three; nobody else wears them.

## Motions

The engine's `stand` and `walk`; and `hands_behind` (stands with the hands clasped behind the back, a loop — Darcy's
way of standing) and `seated` (sits at rest on a chair, a loop: the seat through `<id>_on`, its top 0.46 m for a
woman) — both taken from Kimodo's motions of the same names in pavel/scarlet-sails; `hands_folded` (stands with the
hands folded at the breast, the head a little on one side, swaying gently — Elizabeth's amused way of standing) and
`hands_hips` (stands with both hands on the hips, shifting the weight from foot to foot — Lydia's), both loops.
