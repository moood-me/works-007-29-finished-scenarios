# The Hall

Stage 4 of the game (all its places), the scenario's С7: the great hall of Canterville Chase — the grand stair with its
landing and the hidden panel on it (the secret chamber's second way out), the old clock, the armchair at the stair's
foot, the window onto the pond, the front door and the porch where the carriages are brought. The place and its people
standing (a breath, a look, the candles' flicker, the pendulum, the candle-ring swaying a hair); no one walks, no
camera moves, no mini-games — stage 5's.

## Where things are

Camera `picture`, horizon 0.4. A hall 11.2 m wide (across −5.6…5.6), 5.6 m high, its far wall 8 m away; the viewer
stands at its front. The moments' table is in script.js (`MOMENTS`); the scene's default `state` is the `midnight`
moment laid out — keep the two together when a moment changes.

- **The far wall** (`back_wall`, x as across): oak to the beams (the lib's `oak`: a linenfold dado, two tiers of
  panels, a frieze). From the left —
  - **the landing** 2.1 m up, from the left wall to −2.14, 6.4…8 m away (`landing`: an unseen `walk` plane; its
    underside `landing_under`), on two newel posts; under it the shut door to the dining room; on it the dark archway
    to the upper flight and **the hidden panel** (x −4.35…−3.55, 1.85 m high, cut through; its leaf `panel` hinged at
    its left, key `panel`: 180 shut — the wall's own oak — … 255 open; behind it the dark way down, `passage`).
    Points: `back_wall#panel`, `stair_rail#landing`.
  - **the stair** rising to the left from its foot at across 0.98 to the landing: 13 risers (`risers`, copies facing
    its foot) and 12 treads (`treads`, copies) with a crimson runner; people stand on it on `stair` (an unseen `walk`
    plane along the treads' middles: rotation 90, tilt 31.8 — its far edge to the left and up). Its open side is
    `stair_rail` (6.4 m away): the closed string, the turned balusters and the handrail, the spandrel shut with oak
    panels and a cupboard door, and the landing's fascia and balustrade. `stair_rail#stair` — a point on the stair. The
    lib's `STAIR` and `nosing(x)` hold its measures.
  - two old portraits over the stair; **the clock** at the stair's foot (`clock`, across 1.55): its hands are layers
    turned by `hour` (0…24), its pendulum a layer behind the trunk's little window swinging while `clock_going` (it dies
    away over a few seconds when it stops — at midnight); `clock#face`.
  - **the front door** in its stone surround with the fanlight (x 2.1…3.7, cut through; `back_wall#door`): two oak
    leaves, `door_l` (180 shut … 265 open) and `door_r` (180 … 95), opening into the hall; the Canterville arms above.
    Outside: **the porch** (`porch`, level with the floor), the gravel sweep, the lawn, the pond and the park
    (`grounds` 0.5 m lower, `park`), the sky (`sky`, night; its layer `day`), and **the carriage** (`carriage`, side on,
    there while `carriage`; `carriage#door`), seen through the open door, its horses through the window.
  - **the window onto the pond** (x 4.1…5.0, sill 0.75 m; its bars `window`, `back_wall#window`): the pond far off in
    it, and that evening Washington's lantern by it (`lantern`, key `pond_lantern`, its light and halo the light
    `pond_lantern`).
- **The armchair** at the stair's foot (`armchair`, across 0.7, 6.05 m; its seat `armchair#seat` at 0.45 m: sitting in
  it is `mrs_otis_on: [0.7, 5.9, 0.45]`). **The iron candle-ring** hanging over the middle (`chandelier`, its six
  flames' glows and the light `chandelier#ring`). The side walls: oak, a portrait on each. The floor: flagstones, a long
  Turkey rug from the door. The ceiling: beams.
- **Light.** Night (the base light): ambient 0.5 cool; the candle-ring (`chandelier`), three sconces on the far wall
  (`sconce_l` by the clock, `sconce_r` right of the window, `sconce_landing` over the stair's head), all on by
  `candles`; the moon through the window (`moon`, `through` it: its patch on the floor by the rug). Day (the look `day`,
  key `day`): the sun through the open door and the window (`sun`, `through` both), the daylight in at the door
  (`daylight`), the inside 0.6 of the outside's light. In hands: `otis_candle` at `otis#flame` (the cast's `candle_l`
  with `hold_candle`, or `candle`), `lantern_held` at `washington#lantern` (the cast's `lantern`). Everything in the hall
  and its people are `inside`.

## The moments (key `moment`; script.js)

The script lays a moment out at once when `moment` changes, and as the scene opens only if `moment` differs from
`staged` (the moment it last laid out) — so a restored scene keeps what a game changed after. **A game sets `moment`
first, then any detail** (a person moved, `pond_lantern`, a look).

| moment | the scenario | who and where |
|---|---|---|
| `calling` | 4.2: the dinner bell, Virginia missing; Mrs Otis calls up the stair | night, candles, the clock going at 7:30. Mrs Otis at the stair's foot (1.35 / 6.0), in her shawl (`shawl`), looking up at the landing, `afraid` |
| `waiting` | 4.2: Mrs Otis sits in the hall in her shawl and does not get up; in the «смеялась» branch Washington's lantern by the pond in the window | night, 9:15. Mrs Otis in the armchair (`brood`, `sad`, shawl). `pond_lantern` 0 — the game sets 1 for that branch (the showcase shows it) |
| `midnight` (the default) | 4.6: the clock strikes twelve and the house goes still; the panel opens, Virginia on the landing with the little casket | night; the clock at 12, stopped (`clock_going` false); the panel open. Virginia (`virginia_habit`) on the landing (−3.0 / 7.2), `clasped` with the cast's `casket`, `tired`, looking at her father; Mr Otis on the stair below her (−1.85 / 7.2) holding up a candle (`hold_candle`, `candle_l`, its light on); Washington lower on the stair (−0.95 / 7.2); Mrs Otis at the stair's foot by the clock (1.2 / 6.95, `clasped`, shawl); the twins (1.95 / 6.45, 2.55 / 6.95) and Cecil by the door (3.25 / 7.45) — all looking up at her |
| `departure` | «Пятно»: the morning of leaving; Mr Otis in the hall buttoning his coat; the porch, the carriages | day; the door open, the carriage at the porch, the clock at 9. Virginia in her white frock (`virginia_wear`: the cast's `virginia`) and Mr Otis by the stair's foot facing each other; Mrs Otis, Washington and the twins by the door (the twins at the threshold squabbling: `laugh`, `smile`); Mrs Umney (`mrs_umney`) seeing them off, `clasped` |
| `wedding` | «Свеча у стены»: years later, the wedding, by the carriage | day; the door open, the carriage at the porch. The Duchess (`virginia_wear`: `virginia_duchess`) and Mr Otis by the door facing each other, the Duke (`cecil_wear`: `cecil_duke`) in the doorway |

The variants of 4.6 (≤1: Washington runs down first and takes her hands; ≥2: Washington two steps below her, or last
in at the door with his lantern from the pond) are a game's: the people's places are `<id>_a`, `<id>_d` (on the stair
and the landing their floors lift them), Washington's lantern `washington_with: ["lantern"]` with `lantern_held: 1`.

## People (cast: modules/cast)

`virginia` (`virginia_habit` by default; `virginia`, `virginia_duchess` by `_wear`), `otis`, `mrs_otis`, `washington`,
`twin_star`, `twin_stripes`, `cecil` (`cecil_duke` by `_wear`), `mrs_umney`. Added to the cast for this place:
the parts `shawl` (Mrs Otis's cream shawl round her shoulders), `casket` (the little casket held in both hands, with
`clasped`; point `casket`), `lantern` (a hand lantern hanging from the right hand; point `lantern`). Used from the
corridor's: `candle_l`, `hold_candle`.

## Pieces (stage 5)

`lib.js` `film(scene)`, played by `script.js` (modules/beats). A piece lays out its own start (the light, the clock, the
panel, the doors, the carriage, the people) and never sets `moment` — the moments' staging is the showcase's and the
stage-4 picture's; the game's `here`, moods and variants (`shares`, `trap`, `wake`, `plays`, declared as states) are
never set by a piece. Shots are cameras of their own (the eye and what it looks at), as in the library.

| piece | what it shows |
| --- | --- |
| `calling` | supper-time, night: Mrs Otis in her shawl on the stair's foot steps calling up to the landing; the twins run up and down the stair past her (`run`) |
| `midnight` | the family waiting (Mrs Otis in the armchair, Mr Otis with his candle); the twelve strokes (`midnight:stroke` — the game's sound, 1.1 s apart: the piece waits 13.8 s for them), the clock stops, silence held 6 s (the game's line); the panel opens and Virginia steps out on the landing with the casket (she is out of sight till then: the piece takes her away and brings her back as the game has her); `shares` — Washington runs up and takes her hands; else Mr Otis climbs to her and Washington stops two steps below (`trap` warn, defend) or comes in last at the front door with his lantern (watch); she comes down, Mrs Otis gets up and takes her face in her hands |
| `wedding` | years later, by the open door, the carriage waiting: Mr Otis takes the Duchess's hand and lets it go first; the Duke in the doorway |
| `coat` | the morning of leaving: Mr Otis buttons his coat (`button_coat`), Virginia by him |
| `porch` | they go out to the carriage: `shares` — she between the twins; else last, his hand given her (`wake`), turning on the porch to look up at the house — her face to us; `porch:chain` (only when `plays`) — the chain heard |

Not right yet: the strokes and the chain are the game's sound; «she sits between the twins» in the carriage is seen as
going out with them (the carriage's inside is not shown); the façade with the Tapestry Chamber's windows is not
painted: she looks up at the house over the viewer.

## Showcase

The five moments one after another, five seconds each (midnight, calling, waiting with the lantern by the pond,
departure, wedding).

## What is not right yet

- The people stand 6–7.5 m away (the stair and the landing are at the far wall): faces read, but small — the choice
  moments' close faces are stage 5's camera.
- Those who look up at Virginia stand to the right at about her depth so that their faces turn toward the viewer; from
  the front of the hall they would show the backs of their heads.
- The porch moments are seen from inside: the carriage through the open door, the people in the hall and at the
  threshold. «She turns at the bottom of the porch steps to look up at the Tapestry Room's windows» and the chains
  heard from them want the house's front seen from outside — not painted here (no façade); stage 5 or a place of its own.
- `midnight` (after the play test, 2026-10-29): whoever went up the stair (Mr Otis, Washington) comes down after her
  and stands by at the stair's foot — no one left on the stair cut by the frame (it had read as stray legs); Mr Otis
  says «How could you!» from there, his face to us; Mrs Otis takes her face from 0.45 m (her elbows bend; from 0.6 m
  the arms went out straight).
- Mr Otis «buttoning his coat»: he wears his frock coat (the cast has no greatcoat); stage 5's motion.

## Contract for the check

```json
{"beats": {"calling":{"after":[],"tells":["calling:call"],"seconds":9}, "midnight":{"after":[],"tells":["midnight:stroke","midnight:panel","midnight:hold"],"seconds":42}, "wedding":{"after":[],"tells":["wedding:hand","wedding:let"],"seconds":10}, "coat":{"after":[],"tells":["coat:end"],"seconds":6}, "porch":{"after":[],"tells":["porch:board","porch:chain","porch:look"],"seconds":15}}}
```
