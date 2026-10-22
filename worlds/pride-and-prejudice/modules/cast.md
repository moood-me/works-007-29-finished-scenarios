# cast — the people of «Pride and Prejudice»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). In the
scene's `modules`. The parts' lengths are a man's metres times `F.fit.h`, their thicknesses times `F.k`.

## Style

`austen` — Hugh Thomson's people: slender and long-limbed (from `shadow`), a head on a neck of natural length (a
little bigger than his, `head` 1.14, so a face reads at the size people stand in a scene), colours with their shade
(`paint: toned`, lit by the scene), the sepia pen round them and where their colours meet (`line` 1.1 — a fine nib, as
thin as the places' finer strokes of the world's `brush`, the same ink, so people and places are of one hand), cloth
falling in long soft folds (`folds` 11, depth 0.1). Arms and legs (`regency` profiles) slim, small hands without
fingers. The gentlemen's style `austen_man` (from `austen`): sleeves close from a natural shoulder (`gent` arms, no puff
at the sleeve's head), thighs with flesh to them (`gent` legs), a chest a little deeper. Faces (the cast's own, one hand
— `faceOf`): almond eyes — their warm whites, a dark iris, a pen-dark upper lid and a fine lower one —, brows a shade
darker than the hair, a straight nose (the skin's own colour, its form the light's), lips a shade rosier than the skin
parted by a fine pen line — each expression of `<id>_mood` (`smile`: the corners well up, the eyes a little narrowed,
the brows' outer ends lifted — knowing; `thinking`: the brows drawn down and together, the mouth level; a laugh narrows
the eyes only a little, so they still read). Each person's own cast of face: `austen` (everyone's but these two),
`austen_wry` (Elizabeth's: one brow a little raised, one corner of the mouth higher — with a smile, a knowing one),
`austen_proud` (Darcy's: heavier lids, brows heavier and set low, the mouth firm, its corners a little down). Gowns fall
from under the bust in a soft A-line to the floor, the slippers' toes showing (`gown`, flare 0.42, `to` 1.97: seated,
it covers the shins when the feet are under the knees). The light is the scene's.

## Who

- `elizabeth` — Elizabeth Bennet, twenty: not tall, light; dark hair up in a knot, curls at the temples (`curls`),
  bareheaded (indoors: at Longbourn, at a ball); a white muslin high-waisted gown, a little warm (`gown`), short round
  puffed sleeves over long ones (`puffs`), a sage-green sash under the bust (`sash`, the look's `accent`). Her face
  `austen_wry`.
- `elizabeth_walking` — the same Elizabeth out walking: a straw bonnet (`bonnet`, the look's `hat`) with a sage ribbon
  tied under the chin; a closed parasol of pale sage silk in her left hand (`parasol`: its tip on the ground a little
  before and outside her foot).
- `jane` — Jane Bennet, twenty-two: a little taller, fair hair up, a primrose gown, a dusty-rose sash, pale slippers.
- `lydia` — Lydia Bennet, fifteen: round-faced, dark-blonde, a bright coral-pink gown (the liveliest of the sisters,
  never grey) and her scarlet ribbon round her hair (`ribbon`: a band above the brow, tied at the left, its two ends
  swinging).
- `darcy` — Fitzwilliam Darcy, twenty-eight (style `austen_man`, face `austen_proud`): tall, straight, dark hair brushed
  forward (`brutus`); a dark blue tailcoat of the 1810s, close over the chest, its fronts ending at the waist
  (`tailcoat`) and curving back from there into tails that hang to the backs of the knees (`tails`: a sheet of cloth
  from past the sides at the waist to the back half at the knees, clear of the thighs), a high standing collar behind
  the neck, lower toward the front, open before the cravat (`collar`), the buff waistcoat as a narrow V between its open fronts (`waistcoat`), a white cravat — a high
  stock round the neck and its fall under the chin (`cravat`) —, doeskin breeches, dark brown-black top boots (`socks`) with tan turned-down tops
  (`boot_tops`).
- `bingley` — Charles Bingley: a little shorter than Darcy, open-faced, sandy hair brushed forward; dressed for a ball (style
  `austen_man`) — a warm brown tailcoat with its tails and standing collar, a white waistcoat and cravat, cream knee breeches, white stockings, black pumps.
- `charlotte` — Charlotte Lucas, twenty-seven: plain, sitting and standing straight, brown hair up without curls; her grey
  gown (the world's rare grey) with a darker grey sash.
- `guest_lady`, `guest_gent` — the neighbours at a ball, nobody in particular: a lady in a gown, a gentleman in a tailcoat;
  a scene gives each its own colours (the look's `colors`, whole) from the world's greens, creams, buffs and soft blues.

The world's three rare colours — Lydia's scarlet ribbon, Charlotte's grey gown, the blue seal of Darcy's letter — are
kept for those three; nobody else wears them.

## Motions

The engine's `stand` and `walk`; and `hands_behind` (stands with the hands clasped behind the back, a loop — Darcy's
way of standing) and `seated` (sits at rest on a chair, a loop: the seat through `<id>_on`, its top 0.46 m for a
woman) — both taken from Kimodo's motions of the same names in pavel/scarlet-sails; `hands_folded` (stands with the
hands folded at the breast, the head a little on one side, swaying gently — Elizabeth's amused way of standing) and
`hands_hips` (stands with both hands on the hips, shifting the weight from foot to foot — Lydia's), both loops.
