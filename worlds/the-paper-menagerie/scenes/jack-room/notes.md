# Jack's Room

Stage 4 of the game (all its places), the scenario's С3: Jack's room and, beside it through the open side of the house,
the hall with the attic hatch in its ceiling — the place of П.4, 1.4 and 1.5 (after «Убежать»), 1.6 and 3.2. Each moment
is a value of the key `moment`; what the menagerie's choice (1.6) left is the key `menagerie`. People sit, stand and
look; the animals breathe and stir; no motion of people, no camera moves. In the style of the kitchen, the ward and the
yard: the same paper animals, the same cast, the same light words.

- **Where things are.** Camera `picture`, horizon 0.36: the house cut open like a doll's house, laid a little right of
  the viewer's line so that the bed stands within every screen's frame. The room on the left (across −2.35…1.05), the
  hall on the right (1.17…2.95), the partition between them seen almost edge on and
  cut open from 2.85 m toward us (`partition`, its cut end `partition_edge`); floor (`floor`: oak boards, the braided rug, the hall's runner) at 0 from
  distance 2.05 to the back wall at 4.2; ceilings at 2.5 (`ceiling_room` with the stick-on stars; `ceiling_hall` with
  the hall's bulb and the hatch). Walls: `back_wall` (Jack's wallpaper — lib's `wallpaper`; the hall's paint — lib's
  `hall`; his crayon tiger over the shelf, a rocket poster, a photo in the hall), `left_wall` (the pennant, his school
  bag), `right_wall` (the hall's coat pegs). The floor is seen from 2.66 m on: nearer is below the frame.
- **The room.** The bed along the left wall, head at the back (`bed_head`, `bed_top` — the patchwork quilt, `pillow` —
  a form, `bed_side`, `bed_foot`; the mattress top at 0.48, the seats on its edge at across −1.55; seated, people face the room — turn 70…130 —, their
  feet on the floor). Over its head the
  `shelf` (1.25 m): books, the goats, the deer, the buffalo, the wind-up robot from the prologue's Christmas; its right
  end (across −1.1) is Laohu's place. The bedside cupboard (`nightstand`, `nightstand_top`) and `lamp` (key `lamp`,
  light "lamp"; the alarm clock). The window onto the street (`window`, the curtains, the hanging crane; `sill` — the
  scraps, the buffalo's pot) and under it the `desk` (`desk_top`, `frogs`) and `chair`.
- **The hall.** Jack's `door` (key `door`: 270 shut, 180 open flat into the hall), the attic hatch in its ceiling
  (key `hatch`: shut — its panel and `hatch_cord`; open — the hole with `hatch_well`, `hatch_side`, `attic_dark` up in
  it and `hatch_lid` hanging), Dad's step `stool` under it (its top at 0.45 — where the shoe box is put), the hall's
  bulb (key `hall`, light "hall").
- **Outside** (the house stands 0.6 m over the yard): the front yard and the street (`yard`), the picket `fence` with
  the gate, Mark's house across the street with the school bus stop and a street lamp (`street`, 26 m; Mark's window lit
  but by day; the lamp at night), the `sky` (dusk; `night`; `day`).
- **The menagerie.** `shelf` (animals / deer / empty / bare), `goats` (out on the sill or the quilt; place keys
  `goats_a/d/e`), `zoo` (cranes on the curtains, the buffalo's pot on the sill, frogs on the desk), `scraps` (torn
  Laohu on the sill), `shoebox` + `shoebox_top` (key `box`: none / empty / shut / opened — opened is the dusty box down
  from the attic with the dusty animals round it; place keys `box_a/d/e`; `stir` — it starts now and then), `cartons`
  and `carton_tops` (packed). Laohu (`laohu`): place keys `laohu_a/d/e`; `laohu_out`, `laohu_tape`, `laohu_fold` (her
  crooked extra fold at the tail, chapter 3), `laohu_dust`, `laohu_asleep`, and the game's marks `laohu_ear` («Ухо»)
  and `laohu_seam` («Шов»: he leans). Points: `laohu` (his head), `laohu#back` (where a hand strokes him — М6),
  `shoebox#box`, `shelf#goats`, `shelf#deer`, `shelf#buffalo`, `shelf#robot`, `goats`, `sill#scraps`, `sill#buffalo`,
  `frogs`, `window#pane`, `window#crane`, `window#cranes`, `ceiling_hall#hatch`, `door#door`, `partition#doorway`,
  `bed_top#quilt`, `back_wall#drawing`, `stool#top`, `street#mark_window`, `street#bus_stop`, `fence#gate`.
- **Light.** The base is the kitchen's spring dusk (the window's daylight "dusk", the `afterglow` far and low); the
  look `night` (key 0…1: navy and stars, the lamp the room's light — ambient kept at 0.6 so faces read); the look `day`
  (key 0…1: a spring afternoon, the `sun` through the window across the floor, its shafts, the dust `motes`).

## Moments (`moment`) and the menagerie (`menagerie`)

The table is lib.js `moment(which, menagerie)` → `{keys, here, moods}`. The scene's script (`script.js`) sets its
`keys` by a cut (a new shot: people are put where the moment has them, not walked there) as the scene opens and
whenever either key changes: the room's keys and its people's places, turns, seats,
motions, looks, what they hold and wear (Jack and Dad grown in `packed`: `jack_wear` / `dad_wear` — the cast's
`jack_grown` / `dad_grey` without the suit bag and the book; Mom's sheet left out everywhere). Who is here and their
moods (`<id>_here`, `<id>_mood`) are the game's and are not set by the script; `here` and `moods` are the scenario's
for them (the showcase sets them so). A game sets `moment` and `menagerie`, then whatever it wants over them. (The
script stages at every opening: keys a game set over a moment are to be given again with the opening state.)
`menagerie` is the game's «Зверинец»: `shelf` — not chosen yet; `attic` — 0; `laohu` — 1; `house` — 2.

| moment | scenario | light | who and where | the menagerie |
| --- | --- | --- | --- | --- |
| `bedtime` | П.4 | night, lamp, the hall's light low | Jack sitting on the bed's edge toward its foot, turned to Mom; Mom sitting nearer the pillow, looking at him (`sitting_on_bed`) | on the shelf; Laohu on the quilt between them, no tape |
| `night` (default) | 1.6 | night, lamp, the hall's light low | Jack sitting on the bed's edge over the empty shoe box on the floor | shelf: as before; attic: box shut and stirring, shelf empty, Laohu in it; laohu: box shut, shelf empty, Laohu asleep on the pillow; house: the goats on the quilt, the buffalo on the sill, cranes, frogs, the deer on the shelf |
| `hatch` | 1.6 (0, 1) | night, lamp, hall | Jack (ten) in the hall under the open hatch, looking up; the shut box on the stool; the door open | attic: Laohu in the box (it stirs); laohu: Laohu asleep on the pillow |
| `ran` | 1.4 «Убежать» | dusk, hall | Jack at the window looking down into the yard; Dad in the hall by the shut door, the plate of buns on his left hand, his right raised to knock (`offer_hand`, part `plate`) | the scraps on the sill |
| `call` | 1.5 «Убежать» | evening (night 0.5), lamp, hall | Mom in the hall by the open door, looking at him; Jack by the window, the scraps in his hands (`holding_toy`, part `scraps`) | — |
| `packed` | 3.2 | day | Jack grown (`jack_grown`, no suit bag); the room emptied, cartons | attic (and shelf): the box opened on the floor, the dusty animals out, Laohu dusty on the floor by it, the hatch open; laohu: Laohu alone on the bare shelf; house: the same, and Dad (`dad_grey`, no phrasebook) in the hall by the open door with a paper frog on his hands (`holding_toy`, `dad_frog`) |

The showcase plays these one after another (5 s each).

## What is not right yet

- Jack in the prologue (П.4) is five; the cast has him at ten only, so `bedtime` shows the ten-year-old. A `jack_small`
  in the cast would serve the kitchen's prologue too.
- Nobody lies in bed: П.4 and 1.6 want Jack in bed under the quilt, Laohu under his hand; here (stage 4) he sits on its
  edge. A lying motion is stage 5's.
- In `ran` Jack faces the window, his back to us (the moment is his looking down at Mom by the bucket; the yard's
  scene shows his face in the window).
- Carrying the box to the hatch (1.6) has no part for a box in the hands: the box stands on the stool. Stage 5 needs a
  cast part `shoebox` (or the box element following his hands) and a carrying motion.
- The paper frog in Dad's hands is an element whose animate carries it to `dad#hands` each frame, drawn in front of
  him.
- The partition is cut open just before the doorway (2.85 m), so the hall is seen; whoever stands in the hall stands
  right of it (across 1.45 and on) and keeps their hands out of the wall (cards do not stop them).
- 3.2 says «внизу, на кухне» of the animals in the kitchen; the yard paints the house one-storey, so the kitchen is
  across the hall, not below.

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it). Each piece starts from a moment's keys (`lib.moment(...).keys`, cut to by the script first) with its
own over them; never the game's: `<id>_here`, `<id>_mood`, `menagerie`, `laohu_ear`, `laohu_seam`. Laohu is the world
module `paper`'s (the same in the kitchen and the yard): he walks in hops (held, then a quick snap — paper, a little
angular), turns at once (`laohu_dir`), shakes (`laohu_shake`), purrs (`laohu_purr`, the mini-game «Погладить»),
unfolds by himself — the crooked tail fold first, then the others one by one (`laohu_unfold`). New: the plate of buns by
the door (`plate_door`), her letter close (the insert `letter`, `letter_close`; it trembles along the tiger's folds by
`tremble`).

| piece | after | what |
| --- | --- | --- |
| bedtime | — | (П.4, `young`) Jack sitting up in bed, his hand on Laohu, Mom on the edge; his three questions; she straightens the blanket; his eyes close |
| knock | — | (1.4 «Убежал») Jack on the bed; Dad, unseen behind the shut door, knocks, then sets the plate down by it |
| box_night | — | (1.6) Laohu limps along the pillow (keels over with «Шов»); Jack over the empty box; then the choice |
| box_attic | box_night | the animals into the box, the lid on, it scratches, then still; Jack carries it out to the hatch |
| box_laohu | box_night | the others into the box; Laohu falls asleep under his hand |
| box_all | box_night | the goats walk the blanket; Laohu creeps under the covers |
| wake_room | — | (3.2, «Зверинец» 0, after the attic) Jack, grown, on the floor; the box down from the attic stirs and opens; Laohu out |
| wake_shelf | — | («Зверинец» 1) Laohu stretches on the bare shelf; a rustle overhead |
| wake_house | — | («Зверинец» 2) Laohu stretches; Dad calls and comes into the doorway with a paper frog on his palm |
| unfold | wake_room, wake_shelf, wake_house | Laohu comes to Jack on the floor, rubs against him, into his lap; then М6 on `laohu` (`laohu_purr`) |
| open | unfold | he lies down and unfolds, the tail's fold first; the sheet in Jack's hands; close on it (the insert) |

Not right yet:
- Laohu «under the covers» (box_all) is Laohu gone from sight under the quilt: the quilt is a plane, nothing shows under it.
- The street's `mark_light` asked for in 1.6 is the night's own: at night Mark's window across the street is lit.
- Nobody lies in bed (П.4, 1.6): Jack sits on its edge, as the moments have him — a lying-down motion and a quilt over
  someone are not made.
- The box carried to the hatch is the cast's part `shoebox` in his hands (box_attic).

## Contract for the check

```json
{"beats": {"bedtime":{"after":[],"tells":["bedtime:ask","bedtime:blanket"],"seconds":14}, "knock":{"after":[],"tells":["knock:knock","knock:plate"],"seconds":9}, "box_night":{"after":[],"tells":["box_night:end"],"seconds":8}, "box_attic":{"after":["box_night"],"tells":["box_attic:shut","box_attic:hatch"],"seconds":15}, "box_laohu":{"after":["box_night"],"tells":["box_laohu:asleep"],"seconds":9}, "box_all":{"after":["box_night"],"tells":["box_all:goats"],"seconds":9}, "wake_room":{"after":[],"tells":["wake_room:out"],"seconds":9}, "wake_shelf":{"after":[],"tells":["wake_shelf:stretch"],"seconds":7}, "wake_house":{"after":[],"tells":["wake_house:call","wake_house:frog"],"seconds":11}, "unfold":{"after":["wake_room","wake_shelf","wake_house"],"tells":["unfold:rub"],"seconds":9}, "open":{"after":["unfold"],"tells":["open:tail","open:flat"],"seconds":14}}}
```
