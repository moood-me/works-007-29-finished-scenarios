# Jack's Room

The scenario's С3: Jack's room upstairs and the hall outside its door with the attic hatch in its ceiling (stage 4;
`r3/menagerie-rooms`). Camera `picture`; the room on the left (the bed along the left wall, the shelf of paper animals
over it, the bedside cupboard and lamp, the desk and chair under the window onto the street — Mark's house across it),
the partition with Jack's door (`door`, 270 shut … 180 open) at across 0.61, the hall on the right (0.7…2.4) with the
stool under the hatch (`hatch`, `ceiling_hall#hatch`) and the hall's bulb (`hall`).

## Moments

The key `moment` (bedtime, night, hatch, ran, call, packed) with `menagerie` (shelf, attic, laohu, house) sets every key
of the room and its people at once — lib.js `moment`, the table of what each shows is in its comment and in `states`.
The script stages it when `moment` changes, and as the scene opens with no piece named; `menagerie` and `young` re-stage
only while no piece has been played (a game playing pieces names `menagerie` as their variant). `young` — the
prologue's Jack at five (the cast's `jack_five`).

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it). Each piece starts from a moment's keys (`lib.moment`) with its
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

## Contract for the check

```json
{"beats": {"bedtime":{"after":[],"tells":["bedtime:ask","bedtime:blanket"],"seconds":14}, "knock":{"after":[],"tells":["knock:knock","knock:plate"],"seconds":9}, "box_night":{"after":[],"tells":["box_night:end"],"seconds":7}, "box_attic":{"after":["box_night"],"tells":["box_attic:shut","box_attic:hatch"],"seconds":14}, "box_laohu":{"after":["box_night"],"tells":["box_laohu:asleep"],"seconds":9}, "box_all":{"after":["box_night"],"tells":["box_all:goats"],"seconds":9}, "wake_room":{"after":[],"tells":["wake_room:out"],"seconds":9}, "wake_shelf":{"after":[],"tells":["wake_shelf:stretch"],"seconds":7}, "wake_house":{"after":[],"tells":["wake_house:call","wake_house:frog"],"seconds":11}, "unfold":{"after":["wake_room","wake_shelf","wake_house"],"tells":["unfold:rub"],"seconds":9}, "open":{"after":["unfold"],"tells":["open:tail","open:flat"],"seconds":14}}}
```
