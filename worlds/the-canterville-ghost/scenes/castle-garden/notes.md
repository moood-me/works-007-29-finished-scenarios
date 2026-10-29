# The Garden by the Castle

Stage 4 of the game (all scenes): С6 «Сад у замка» of the scenario — the garden by the castle, the old dry almond
tree, the lawn, Virginia's easel, the avenue to the gates, and beyond the railing the churchyard with the old yew.
The place and its people standing (a breath and a look); no motion of people, no camera moves, no mini-games — they
are stage 5's.

## Where things are

Camera `picture`, horizon 0.45; flat land (no relief). The viewer stands on the lawn with the house behind them,
looking down the garden toward the park wall.

- **Far:** the sky (`sky`: a clear morning; at night the night sky, the moon high on the right — `sky#disc` — and the
  clouds about it), the park's woods (`woods`, 90 m), the park wall (`wall`, 56 m) with the gates standing open
  (`gates`, 56 m, `gates#gates`), the little church beyond the churchyard (`church`, 34 m, left).
- **Ground:** `lawn` (mown in stripes; daisies in summer), `churchyard` (rough grass, left of and beyond the
  railing), `avenue` (gravel, 3.6 m wide, from behind the viewer at across 5.6 straight to the gates), `path`
  (gravel across the foot of the lawn at 4.25 m, joining the avenue).
- **The avenue:** two rows of limes (`lime`, copies; crowns a layer in the wind), one each side; in autumn lime
  leaves fall (`leaves`).
- **The churchyard:** the railing (`railing`: across at 5.6 m from far left to the corner by the limes, a wicket gate
  in it near the corner, at across 1.4…2.1, `railing#gate`; `railing_side`: from the corner along the limes back to 30 m), old
  headstones and crosses (`church_stone`, `church_cross`: copies), the old yew (`yew`, 12.8 m, left of the middle —
  the same tree as in the Garden of Death, with the nightingale on its left arm, `yew#nightingale`), and under it the
  grave (`grave`: a plane, the pit or the mound seen from above; `heap`: the earth at its far side seen side on —
  the spoil heap with a spade, or the back of the mound). By the grave the coffin on its trestles (`coffin`:
  purple pall with the Canterville arms in gold, a tuft of black plumes at each end nodding in the wind, the cross
  of almond blossom on top; `coffin#lid`) and two torches on poles (`torchpole`, two copies, `torchpole:0#flame`,
  `torchpole:1#flame`; their fire `fire_a`, `fire_b`; their light `torches`).
- **The garden:** the old almond tree just inside the railing (`almond`, 5.2 m, a little right of the middle; its
  dry twigs a layer; in blossom white and pink; `almond#trunk`, `almond#crown`), long grass left uncut along the
  railing and round its foot (`tuft`, copies), Virginia's easel turned toward the almond, seen from behind its board,
  her box of colours on its shelf (`easel`, `easel#board`), her camp stool behind her (`stool`, `stool#seat` at
  0.45 m), a robin on the wicket's left post (`robin`: it bobs; gone by night).
- **The coaches** (`coach`, `coach2` on it 11 m further): two travelling coaches seen from behind on the avenue,
  as they go out to the gates on the morning of departure; `coach_d` is how far the first is.

## The moments it shows (state)

The scene opens at 1.5 «Миндаль»: a summer morning, Virginia standing at her easel painting the almond (`offer`, a
brush in her hand, looking at the crown), Mrs Umney passing on the path, looking at the tree. The other moments are
the same scene in another state, set by the game:

| moment | state |
|---|---|
| 1.5 Virginia paints, Mrs Umney passes | the default |
| 2.6 Virginia sits at the easel and does not paint; Cecil sits on the grass by her | `mrs_umney_here: false`, `virginia_on: [3.35, 6.35, 0.45]` (the stool) with `virginia_do: "brood"`, `virginia_with: null`; `cecil_here: true` (`sit_ground`, looking at the board) |
| the funeral (finals «Миндаль», «Свеча»), night, autumn, the almond in blossom | `night: 1`, `autumn: 1`, `almond: "blossom"`, `easel: false`, `mrs_umney_here: false`, `funeral: true`, `grave: "open"`, `torches: 1`; Virginia at the coffin (`virginia_a: 0.25`, `virginia_d: 7.2`, `virginia_turn: 250`, `virginia_do: "clasped"`, `virginia_with: ["almond_cross"]`, `virginia_look: "coffin#lid"`); the family here (`otis`, `mrs_otis`, `washington` — `washington_with: ["torch"]`, `torch_held: 1` —, `twin_star`, `twin_stripes`), placed round the coffin (their own places are these); the cross laid: `cross: true`, `virginia_with: null`; the moon coming out: `clouds` 1 → 0. «Свеча»: `otis_with: ["candle"]` (the cast's candle; its light `candle` at `otis#flame`), `candle: 1`, Mr Otis apart (`otis_a`, `otis_d`), `otis_do: "offer"` |
| the last shot of «Миндаль» | night, `almond: "blossom"`, `grave: "mound"`, `cross: true`, no people |
| years later (Virginia and Cecil under the yew) | `virginia_wear` / `cecil_wear`: the cast's `virginia_duchess`, `cecil_duke` (the look objects, `scene.kit.cast.characters.…`), placed by the grave |
| the last shot of «Пятно»: the coaches go out past the dry almond | `autumn: 1`, `easel: false`, `mrs_umney_here: false`, `coaches: true`, `coach_d` moved toward the gates (stage 5) |

Every key is in `states`; the people's places are `<id>_a`, `<id>_d` (metres), so the game puts them where a moment
needs.

## People (cast: modules/cast)

`virginia` (her white frock; `brush`, `almond_cross` by `_with`), `mrs_umney` (black silk, white cap),
`cecil` (`cecil`: riding coat, breeches), `otis`, `mrs_otis`, `washington` (`torch` by `_with`: its point
`washington#torch`, the light `torch_held` and the fire `fire_held` there), `twin_star`, `twin_stripes` — `mrs_otis`, `washington`, the twins and the candle are the cast's as the
chamber's author made them (one definition each). Added to the cast for this place: the characters `mrs_umney`,
`cecil`, `virginia_duchess`, `cecil_duke`; the hat `bonnet`; the parts `torch`, `brush`, `almond_cross`.

## Light

By day the sun low behind the viewer on the right (`sun`), a fresh morning ambient; the look `night` (moonlight from
`sky#disc`, the night ambient, the sun out) and `clouds` (the moon's light dimmed). Torches (`torches`, `torch_held`)
and the candle (`candle`) light the funeral warm.

## Looked at

Rendered on the studio (picture of the default; frames of the funeral at night and of an autumn day with Virginia
sitting, Cecil on the grass and the coaches): every face reads; the funeral is lit warm by the torches under the
moon, readable; the colours are the world's (the library's and the tapestry room's storybook look).

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it). What the scene got for them:

- **The insert `board`** (М3 «Этюд», opened by `board_open`): the sheet on her easel close — her pencil study of the dry
  almond, a wash of sky, and the brush line up the trunk from `board#root` to `board#fork`, shown as `sketch_line` rises
  (a strip of paper over it draws back toward the fork: its animate); the trunk in faint pencil to follow; `blot` — a
  blot of brown run on the trunk.
- **Keys.** `nightingale` (the bird on the churchyard yew lifts as it sings; the song is the game's); the game's
  `with_family` and `father_apart` (the funeral). Mrs Umney's element is `mrs_umney` (was `umney`).

| piece | after | what |
| --- | --- | --- |
| paint | — | 1.5: she paints at her easel; Mrs Umney comes along the path, stops by the almond and looks; then the box |
| look_house | paint | she turns and looks back at the house, toward the viewer (close) |
| easel_idle | — | 2.6: she sits at the easel not painting; Cecil on the grass looks up at her and asks |
| funeral | — | night: she walks to the coffin and lays the cross of almond blossom (`lay_down`); the moon comes out; the family beside her or a step behind; Mr Otis apart with his candle («Свеча») |
| years | — | years later: Virginia and Cecil (the Duchess, the Duke) come through the wicket and walk to the mound under the yew |
| almond_last | — | night: the camera goes slowly in and up onto the blossoming almond |
| coaches | — | autumn morning: the coaches go out down the avenue to the gates |

## What is not right yet

- Virginia at the easel shows her face: the board is seen from behind (its back, her box of colours on its shelf);
  the study itself is seen only in the insert `board` (М3).
- The mourners stand behind the churchyard railing as seen from the garden: its bars cross them. A closer shot of
  the funeral is stage 5's camera.
- The cross of almond blossom laid on the coffin is a ridge of flowers along its top: the coffin is a side-on card,
  its lid seen almost edge on from the garden.
- The coaches are seen from behind only (they go away from the viewer); their horses are legs and tails under them.
- Virginia painting is a standing pose (`offer` with a brush), no brush stroke.
- The funeral is seen from the garden over the railing (the camera raised and pushed in to it): the operator framing her
  went round into the churchyard, behind the mourners. Laying the cross (`lay_down`) she turns her back to the viewer
  while it plays — the motion as Kimodo made it turns her about; she faces the viewer again as it ends.
- Looks at something behind a person turn the head away (years: looking at the mound from its near side showed the
  backs of their heads): they stand beyond the mound, facing the viewer, and look down at it.


## Measured (measure_scene, 0b640c4 — before the merge; the default 1.5 state)

Frames 16.7 ms p95 on desktop and laptop, 16.8 on the phone (FAIL by 0.1 ms); worst 16.8; GPU p95 5.5 / 4.4 / 3.5
ms; no soft run (0 / 0.07 / 0.25 s); view pages 402 / 347 / 164 of the room 1419 / 1076 / 439; open about 2.5–2.8 s.
FAILS: allocated a frame ~30 KB in all three — the engine's modules (sheets/cache.js record, people/player.js,
people/shapes.js, cloth.js), the scene's own code ~0.4–0.5 KB of it, most of that the cast's `brush` part (fixed
after the measure: the torch, the brush and the cross keep their vectors with F.keep); GC pause worst 2.2 ms
(desktop) and 3.7 ms (phone) on the scene's thread. The engine's share is the engine's, not this scene's to mend.

## Contract for the check

```json
{"beats": {"paint":{"after":[],"tells":["paint:umney","paint:box"],"seconds":10}, "look_house":{"after":["paint"],"tells":["look_house:end"],"seconds":4}, "easel_idle":{"after":[],"tells":["easel_idle:ask"],"seconds":8}, "funeral":{"after":[],"tells":["funeral:cross","funeral:moon"],"seconds":16}, "years":{"after":[],"tells":["years:stop"],"seconds":10}, "almond_last":{"after":[],"tells":["almond_last:end"],"seconds":10}, "coaches":{"after":[],"tells":["coaches:end"],"seconds":14}}}
```
