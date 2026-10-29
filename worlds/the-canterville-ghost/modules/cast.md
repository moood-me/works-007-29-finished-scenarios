# cast — the people of “The Canterville Ghost”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`canterville` — the storybook's round soft figures (`soft`), heads a little smaller, with the world's face
`storybook` (eyes, brows, nose, mouth drawn bold — `<id>_mood` shows on it): faces read across a room.

## Who

- `virginia` — Virginia Otis, fifteen: slight, golden-brown hair loose, a white muslin frock with a pale blue sash.
- `simon` — Sir Simon de Canterville, the ghost: tall, gaunt, old, a grey-green doublet with puffed trunk hose (the
  garment `doublet`) and a cloak down his back, rusty manacles with a chain between them and irons on his ankles; his
  hair, beard, brows and ruff glow with his own pale light (`GHOSTLY`, a glowing colour), his eyes are red coals in dark
  sockets (the face `ghost`). A scene gives him a light of his own just before him (a light at his chest is inside him
  and leaves his front dark).
- `virginia_habit` — Virginia back from riding (the same girl, another look of hers): a riding habit of bottle-green
  cloth (the garment `habit`), a white stock at her throat (`stock`).
- `simon_garden` — Sir Simon in the Garden of Death, out of time: the same look without his irons (no `shackles`, no
  `fetters`).
- `otis` — Mr Hiram B. Otis, the American Minister: a black frock coat, a grey waistcoat, brown hair going grey.
- `mrs_otis` — Mrs Lucretia R. Otis: handsome, healthy, middle-aged; her dark hair up in a knot (`bun`), a gown of
  deep plum to the floor (the garment `gown`).
- `washington` — Washington Otis, the eldest son: fair-haired, good-looking, a dark blue-grey frock coat over a light
  waistcoat.
- `twin_star`, `twin_stripes` — the twins («Звёзды и Полосы»), ten years old, alike as two peas: navy short jackets
  and knickerbockers, white shirts and stockings, brown hair.
- `mrs_umney` — Mrs Umney, the housekeeper: old, stout, black silk to the floor, a white cap (the hat `bonnet`) over
  grey hair.
- `cecil` — Cecil, the young Duke of Cheshire, fifteen: slim, fair-brown hair, a dark blue riding coat, buff breeches,
  boots.
- `virginia_duchess` — Virginia years later, the young Duchess (a look of hers for `<id>_wear`): grown, her hair up, a
  deep blue dress, a pale lilac sash.
- `cecil_duke` — Cecil years later, the Duke (a look of his for `<id>_wear`): grown, a dark blue frock coat.
- `virginia_night` — Virginia at night (another look of hers): a long white nightgown loose from the shoulders to the
  floor (the garment `nightgown`), no sash, her hair loose.
- `otis_gown` — Mr Otis woken in the night (another look of his): a quilted dressing gown of dark wine red to the calves
  (the garment `dressing_gown`) over his nightshirt, slippers.

## Parts

`ruff`, `beard`, `shackles` (manacles and the chain sagging from wrist to wrist), `fetters` (irons on the ankles, a
chain on the floor between), `cloak` (a flat swinging tube down the back: the engine hangs a sheet of cloth, `F.cloth`,
only before a garment) — Sir Simon's; `sash`, `stock` — Virginia's; `bottle` — the bottle of oil for the chains in the right hand
(Mr Otis's, by `otis_with`). `candle` — a candle in a brass candlestick in the right hand, upright
whatever the hand does, its flame glowing; its point `flame` is where a scene puts its light (`"at": "otis#flame"`;
whoever carries one, by `<id>_with: ["candle"]`). `candle_l` — the same candle in the left hand (point `flame`
too): for one whose right hand is busy (Mr Otis holding out the bottle) and for `hold_candle`. `book` — a book lying
shut on the lap of one who sits (point `<id>#book`), by `<id>_with`.

`torch` — a torch held upright in the right hand, its flame glowing (its point `<id>#torch`: a scene's fire and light
there); `brush` — a paint
brush in the right hand; `almond_cross` — a cross of white and pink almond blossom held upright between the hands
before the chest (with `clasped`).

Stage 5's: `parcel` — a little paper parcel tied with string in the right hand (point `parcel`); `casket_hand` — the little
casket of dark wood, its lid gilt, lying on the right palm, held in one hand (point `casket`; the hall's `casket` below
is the same held in both hands; the hall's `lantern` serves the tapestry too); `newspaper` — a newspaper held open between both hands
before one who sits (point `newspaper`); `sketchbook` — a sketchbook lying open on the knees of one who sits (point
`sketchbook`); `stub` — an unlit candle-end between the fingers of the right hand (point `stub`). The hat `bonnet` — Mrs Umney's white cap.

`shawl` — a cream cashmere shawl round the shoulders, its point down the back and its ends down the front (Mrs Otis's,
by `_with`, the night Virginia is missing); `casket` — the little old casket bound in brass held in both hands before
the chest (with `clasped`; its point `casket`); `lantern` — a hand lantern hanging from the right hand by its ring, its
glass glowing (its point `lantern`: a scene's light there) — the hall's.

## Motions (Kimodo)

The engine's `stand` and `walk`, and: `clasped` — stands, both hands clasped at the chest, a loop; `loom` — stands
with both arms raised over the head (the ghost's frightening), a loop; `offer` — stands, the right forearm held out
before the chest (holding something out), a loop; `upright` — stands upright, both hands clasped behind the back, a
loop; `brood` — sits (on a seat: `<id>_on`), the right hand to the brow, the left on the knee, tired, a loop; `sit_ground` —
sits on the ground, the knees up, the arms loose on them, looking ahead, a loop; `pray` — kneels upright, the hands
together at the chin, a loop; `doze` — sits (on a seat: `<id>_on`), leaning back asleep, the arms folded, the
head tipped back, a loop (with `<id>_mood` `eyes_closed`); `hold_candle` — stands holding a candle up before the chest in
the left hand (with `candle_l`), the right hand hanging, a loop.

Stage 5's (Kimodo, made one by one, each looked at on a figure before it was put; loops unless «once»): `kneel_rub` —
kneels, bent forward, one hand scrubbing the floor (weak: a small scrub); `faint_sit` (once) — sits down heavily into a
chair and leans back; `laugh_bend` — laughs, the head thrown back, then doubles over, the hands at the belly, twice, and straightens (remade
after the play test); `point` (once) — the
right arm down and forward at the floor; `sit_table` — sits upright, the forearms forward on a table; `read_paper`,
`read_seated` — sit holding something at the chest (near the same: the newspaper part between the hands; read_seated's
book is not on the lap); `write` — sits, the forearms at a table's height, the right hand now and then up to the head;
`sit_sill` — sits facing ahead, the right hand at the chest (not sideways: the scene turns them); `smash` (once) —
snatches, crouches, the right hand flung to the floor, ends standing; `recoil` (once) — cowers, the hands up at the
face (no clear step back); `run` — runs, from the first frame; `bow_deep` (once) — a deep bow, a leg back, upright
again; `rub_sleeve` — sits, the right hand rubbing the left upper arm; `listen_wall` — stands, the head tilted to
the left, the left hand cupped at the ear; `shake_chain` — sits, both fists up by the head, shaking; `pound_wall` —
an angry wide stance, the right fist raised and swung down, twice in 6 s; `weep` — kneels, the hands over the face;
`lie_down` (once) — an old man sits and lies back (it travels backward: place him a length forward); `lay_down`
(once) — bends forward, the hands at the thighs' height (weak); `tiptoe` — a hunched creeping walk (a gait);
`stand_up` (once) — from sitting on a chair to standing; `button_coat` — the hands at the chest, small; `wave_hands` —
one jump with both hands overhead, then stands (a loop of one jump in 4 s).

Not made: `stamp` and `knock_wall` (three takes each gave an arm raised and held, no foot, no knocking) — the pieces
use the nearest: `upright` for her stamp, `offer` (the forearm held out to the wall) for the knock.
