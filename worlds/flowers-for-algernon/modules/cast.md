# cast — the people of “Flowers for Algernon”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide).

## Style

`lab` — made from `soft` (rounded shapes, tinted lines, toned colours) with a smaller head, so the grown-ups read as
grown-ups; a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on it), so faces read across a room.

## Who

- `charlie` — Charlie Gordon, thirty-seven: broad and soft, a round face, sandy hair in a crew cut (the hair `crewcut`);
  a brown jacket a little too big, a white shirt and a narrow dark tie (the part `tie`), dark trousers.
- `kinnian` — Alice Kinnian, thirty-four: slight, upright, brown hair in a low bun, a plain dusty-rose day dress to below the knee (the garment `frock`),
  a dark blue exercise book held to her chest (the part `notebook`, drawn between her hands).
- `joe` — Joe Karp, forty, on the press at Donnegan's: big, broad, ruddy, dark hair under a flat cap (`hat: cap`), a
  blue work shirt, brown work trousers; a mug of beer in his right hand (the part `mug`, its point `#mug`).
- `frank` — Frank Reilly, Joe's mate: lean, black hair slicked back, a grey-olive jacket over a cream shirt, dark trousers.
- `halloran` — Halloran, who keeps the diner: heavy, older, a grey fringe, a white shirt and a long white apron.
- `old_student` — an older student of the night class: grey, round spectacles (the part `spectacles`), a grey-blue
  pullover, dark trousers.
- `young_student` — a young student of the night class: black-haired, a rust work shirt, jeans. (The students wear no
  jackets: they sit, and a jacket's skirt stands out over bent knees.)
- `strauss` — Dr Strauss: tall, spare, greying, round spectacles (the part `spectacles`, its point `#spectacles`), a
  white laboratory coat (the garment `labcoat`: its skirt hung from the waist, straight) over a grey suit.

## Motions (Kimodo)

The engine's `stand` and `walk`, and each one's own way of standing (loops, made for this world — each held by
`fullbody` or foot constraints so the pose lasts the whole clip):
- `shy_stoop` — Charlie: feet apart, the shoulders rounded, a little forward, the hands together low (at the table
  his `_reach` puts them on its edge).
- `notebook_held` — Miss Kinnian: upright, both hands at the chest (holding the `notebook`).
- `chin_in_hand` — Dr Strauss: the left arm across the waist, the right hand at the chin, thinking.
- `mug_held` — Joe: feet apart, a mug held at the chest in the right hand, the left arm free (at Halloran's his
  `_reach` puts that hand on Charlie's shoulder).
- `pointing_laugh` — Frank: laughing, pointing at someone before him with the right hand.
- `hands_on_hips` — Halloran: upright, both hands on his hips, watching.
- `book_read` — Charlie: standing a little stooped, a book open in both hands before his chest, reading (with the part
  `primer`).
- `chalk_held` — Miss Kinnian: upright, the right hand at her chest holding a stick of chalk (the part `chalk`), the
  left arm down.
- `seated_listen` — sitting on a chair at a desk, the forearms out on it, listening (the young student).
- `seated_chin` — sitting, leaning forward, the right fist at the chin, the elbow on the knee (the old student).

Parts any of them may have with them (`<id>_with`): `beer` — a glass of beer held low in both hands (Charlie's at
Halloran's: `charlie_with: ["tie", "beer"]`; its point `#beer`); `mug` — Joe's; `primer` — a reader open in both hands, tipped up to the eyes (Charlie's in the
night class: `charlie_with: ["primer"]`; its point `#book`); `chalk` — a stick of chalk in the right hand (its point `#chalk`). `_with` adds to the
parts a look has: to leave Miss Kinnian's exercise book out, the night class puts on her look's parts instead
(`kinnian_wear: {"parts": ["chalk"]}`).
