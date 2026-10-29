# The Stream — notes

The scenario's М4, the stream's bed below Elzéard's slope, across the years (stage 4 of the game stages: people stand,
no motions, no camera, no mini-games). Its stage-2 look was the second chapter's morning (2.2–2.5); the same place now
shows the dry bed of the first chapter and the meadow of the third, and — at the slope's far edge, right of the path before the hives — the
dead maples and the new beeches of 2.6 (the scenario puts them on М3, the slope; this view of the slope from below is
where they read near and clear).

- Camera `picture`, horizon 0.55; the frame is as tall as its distance (a 53° lens). The viewer on the valley floor
  below the slope, the stream coming in from the lower left and curving up into the wood.
- The land is one draped plane (`land`) over `relief.js`; the stream's line, the slope and the channel are in `lib.js`
  (`streamX`, `streamW`, `slope`, `channel`, `ground`), with the trees (`oak` — young, `grownOak`, `oakOf`, `beech`).
  The water is a mirroring plane at `WATER` (−0.32 m), painted only where the stream is. All the copies are laid out by
  `node tools/stream-copies.mjs`.
- Light: early morning, the sun low on the left behind the viewer (`sun`); `mist` two drifting bands low over the
  valley (0…1).

## The years (`year`: 0, 6, 20) and `stream`

- 0 — the prologue and the first chapter: the slope bare (no oaks), the bed dry and white with stones (`stream`
  false: `water`, `sedge`, the green banks gone), no willows, dry tufts.
- 6 — the stage-2 look: the young oaks (3–4 m), the first willows, the water running for the first time, the mist; the
  far edge's rows (right of the path) of dead maple sticks (`maple_sticks`) and tiny beeches (`beech_young`).
- 20 — the third chapter: the valley floor a meadow with flowers, the wood grown (11–12 m oaks), the willows big, the
  far edge's beeches 5 m (the maples gone).

## The moments (key `moment`; script.js)

Laid out at once when `moment` changes, and as the scene opens only if `moment` differs from `staged`. **A game sets
`moment` first, then any detail.** The default state is `water` laid out.

| moment | scenario | the place | who (standing) |
|---|---|---|---|
| `dry` | prologue / first chapter (the way up, the empty flask) | year 0 | the Traveller (20) by the dry bed |
| `water` | 2.2–2.4 | year 6, mist, the hives | Lina (23) at the water, the Traveller (26), Elzéard (61) far up by the hives (the game may set `elzeard_here` false) |
| `far_edge` | 2.6 | year 6, a little mist | Elzéard (61) and the Traveller (26) before the dead maples, right of the path |
| `meadow` | the third chapter | year 20 | Lina (37) at the water, the Traveller (40) |
| `delegation` | 3.2 | year 20 | Lina (37) leading; Jan (40), the chief, the ranger on the path |

`hives` (boolean): the hives at the wood's edge (the second chapter; in the third while Lina does not know — the game).

## Points the game presses

`hives:0…4`, `oak_a|b|c:k#bark`, `beech_young:k`, `maple_sticks:k`, the people's own points (`lina#pail` — МИ3, the
hands in the water: the water's edge before Lina, `stones:k`).

## People (cast: modules/cast)

`elzeard` (`elzeard_61`), `traveller` (`traveller_26`; `traveller`, `traveller_40` by `_wear`), `lina` (`lina_23`;
`lina_37`), `jan` (`jan_40`), `chief`, `ranger`.

## Not right yet

- 3.2's delegation walks up the path away from the viewer (the village is behind); standing, they are turned to Lina
  ahead of them so the faces read in profile — the walk is stage 5's.
- The grown wood (year 20) is many big crowns over the slope; measured once (notes of the render in the history note).

## Pieces (stage 5)

`lib.js` `film(scene)`, played by `script.js` (modules/beats). `from` sets the people and the camera, never `_here`,
`_mood`, `_wear` or the year's keys.

| piece | place | what it shows (tells) |
|---|---|---|
| `water` | stream6 | the Traveller comes down to the stream; Lina knows him (`meet`) |
| `palms` | stream6, after `water` | both kneel at the water (`kneel`) — then МИ3 (`traveller#hand_r`) |
| `letter` | stream6 | Lina writes her letter (`write`), looks up the slope (`look`) — then the choice |
| `letter_pocket` | after `letter` | the letter into her pocket, they go up (`go`) |
| `letter_write` | after `letter` | she writes on, looks once more at the slope (`look`) |
| `maples` | far6 | Elzéard points at the dead maples (`point`), then at the beeches (`beeches`) |

New motions (cast): `kneel_water`, `write_standing`, `point`; the cast's part `letter`.

## Contract for the check

```json
{"beats":{"water":{"after":[],"tells":["water:meet"],"seconds":12},"palms":{"after":["water"],"tells":["palms:kneel"],"seconds":9},"letter":{"after":[],"tells":["letter:write","letter:look"],"seconds":14},"letter_pocket":{"after":["letter"],"tells":["letter_pocket:go"],"seconds":10},"letter_write":{"after":["letter"],"tells":["letter_write:look"],"seconds":9},"maples":{"after":[],"tells":["maples:point","maples:beeches"],"seconds":12}},"points":["traveller#hand_r","lina#letter","maple_sticks:8","beech_young:4","hives:0"],"keys":["moment","beat","beat_next","hives"]}
```
