# cast — the people of “The Paper Menagerie”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide).

## Style

`paper` — made from `soft` (rounded shapes, tinted lines, toned colours) with a smaller head, so the grown-ups read
as grown-ups beside the boy; a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on it), so faces read across
the room.

## Who

- `jack` — Jack at ten: slight, black-brown hair, a green sweater, jeans.
- `mom` — Mom, thirty-four: small, black hair in a low bun, a blue-grey blouse, dark trousers, a cream apron; in her
  hands a square of yellow paper (part `sheet`, its colour her `accent`).
- `dad` — Dad, forty-five: broad, sandy thinning hair, a pale blue work shirt, brown trousers.
- `jack_grown` — Jack at twenty-one: tall and slight, the same hair, a green sweater again, dark jeans; the bag with his
  first suit held up (part `suit_bag`, its colour his `accent`).
- `mom_ill` — Mom in hospital, forty-five: thin, an ochre kerchief (hat `kerchief`), a pale hospital gown and trousers,
  her blue-grey cardigan, slippers.
- `mark` — Mark, ten, from across the street: a little taller than Jack, sandy-red hair, a red windbreaker, jeans, white
  sneakers; his plastic knight in his hands (part `knight`, its shield his `accent`).
- `dad_grey` — Dad at fifty-six: grey hair, a brown cardigan, brown trousers; his phrasebook in his hands (part
  `phrasebook`, its cover his `accent`).
- `translator` — the woman on the square (chapter 3), fifty-five, from a tour group: short permed hair going grey, a
  camel trench coat, a red scarf (her `accent`).
- `guide` — the tour group's guide: young, a ponytail, the company's teal jacket and cap; her flag (part `flag`, its
  pennant her `accent`).
- `tourist_cap`, `tourist_hat`, `tourist_coat` — three of the group: an older man in a khaki jacket and a cap, a woman
  in a pink jacket and a sun hat, a man in a navy windbreaker.
- `jack_five` — Jack at five (the prologue): a small round-headed boy, a mustard sweater, navy corduroys (the kitchen's
  and Jack's room's key `young` dresses `jack` so).
- `nurse` — the nurse on the ward's corridor (2.1): pale teal scrubs, a white cardigan, dark hair in a bun.
- `mark_grown` — Mark at twenty-two (3.4): broad, the same sandy-red hair, a red jacket over a white T-shirt, jeans;
  his sports bag (part `duffel`) by `_with`.
- `boy_a`, `boy_b` — Mark's friends at the bus stop (1.7), ten: a tall blond one in a striped blue sweatshirt with a
  navy backpack, a stocky dark-curled one in a mustard windbreaker with a red backpack (part `backpack`).

## Hats

- `kerchief` — a cloth cap over the whole head, brow to below the nape, a small knot behind, two ends (the look's `hat`).

## Parts

- `sheet` — a square of paper held up between the hands, its face out, being folded (the look's `accent` colour).
- `suit_bag` — a long zipped suit bag hanging straight down from the right hand's hook, its face where the hips face;
  its middle the point `bag` (the look's `accent`).
- `plate` — a white plate of five steamed buns carried level on the left hand; the point `plate` over the buns.
- `scraps` — torn pieces of Laohu's red paper gathered in both hands; the point `scraps`.
- `knight` — a little silver plastic knight held to the chest in both hands, a blue shield (the look's `accent`), its
  light-up sword gone grey; the point `knight`.
- `phrasebook` — a small book held open in both hands before the chest; the point `book` (cover: the look's `accent`).
- `letter` — Laohu unfolded: a thin square of red wrapping paper with gold stars, the old yellow tape across it (a flat
  tube with cut ends), held open in both hands before the chest, tipped a little away, its outside away from the reader (her writing on its back is an insert's); the point
  `letter`.
- `flag` — a tour guide's little flag held up in the right hand, its pennant the look's `accent`; the point `flag`.
- `frog` — a paper frog of green wrapping paper sitting on the open right hand; the point `frog`.
- `backpack` — a school backpack on the back, its flap a shade darker, two straps (the look's `accent`); the point
  `backpack`.
- `duffel` — a sports bag carried by its handles in the right hand, hanging at the side (the look's `accent`); the point
  `bag`.
- `oranges` — a string bag of six oranges hanging from the left hand; the point `oranges`.
- `receiver` — a telephone's black receiver held to the ear in the right hand; the point `receiver`.

## Motions (Kimodo)

The engine's `stand` and `walk`, and: `folding` — stands folding a small sheet of paper in both hands held up before
the chest, creasing and turning it (a loop); `hands_in_pockets` — stands relaxed, both hands in the front trouser
pockets, the weight shifting a little (a loop); `sitting_on_bed` — sits upright on a seat, relaxed, the hands in the
lap (a loop: with `<id>_on` a seat); `reading_seated` — sits reading a small book held in both hands at the chest (a
loop, seated); `showing_suit` — stands holding something up by its hook in the right hand, out to the side at
shoulder height (a loop); `holding_toy` — stands still, sullen, a small thing held close to the chest in both hands (a
loop); `crouch_scraps` — squats low, the hands between the knees holding something small (a loop); `offer_hand` —
stands stooping a little, the right hand held out before her, the left forearm level at the waist as if carrying a
plate (a loop).
Stage 5 (`r3/menagerie-pieces-b`, the ward's and the square's pieces; each looked at with `look_at_motion` before it
was put): `hold_hand_bed` — sits leaning forward, both hands together before the knees, still (a loop; the hands are
set on the other's hand by `_reach`); `phone_call` — stands, the right hand at the ear holding a receiver, the head
bowed (a loop; with the part `receiver`); `doze_chair` — sits leaning back, the arms crossed, the head back, asleep (a
loop; the second take — the first and the asked-for head dropped forward did not come: the arms crossed and the head
upright; this one reads as asleep with `eyes_closed`); `lie_bed` — lies on the back, still, the arms at the sides (a
loop; its feet the way the person's turn faces; with `<id>_on` a point of a bed, e.g. the ward's `bed_top#lie`);
`peel` — sits picking at something held before the chest with both hands, then the hands down to the lap (a loop);
`check_watch` — sits, lifts the left wrist and looks at it, then the hands back to the lap (once, 3 s); `beckon` —
stands, the right arm thrown forward and up toward someone, then down (once, 3 s: a guide calling her group);
`sit_down` — stands, sits down on a seat behind and stays (once, 3 s: `go('sit_down', {to, turn})`, then `_on` the
seat); `rise` — sits on a chair, stands up and steps forward (once, 3 s: `go('rise', {from})`; the first take rose
from the floor).
