# The Shepherd's House — notes

The scenario's М2, Elzéard's stone house alone on the bare plateau, across the years (stage 4 of the game stages:
people stand, no motions, no camera, no mini-games). Its stage-2 look was the prologue's dusk; the same place now has
its hours (dusk, dawn, day, night), the sheep giving way to hives, the old man slower, the bread on the step, the house
left empty — and, in the epilogue on the Name, the hut beyond the ridge in its place.

- Camera `picture`, horizon 0.58. The viewer stands on the path; the people 5–7 m ahead, the door 8 m.
- The house is built on the unseen anchor `house` (facing 165): `house_front` (door at the anchor, window to its
  right), `house_side`, `roof`, `chimney` with `smoke` (as much as `hearth`), `door_glow` and `window_glow` (the lit
  room, by `lamp`), `lantern` (dark glass with the lamp out), `door_leaf` (the door shut and propped, `door`
  "propped"). By the door: `bucket` of acorns, `step_gifts` (`bread_step`), `porch_saplings`, the `dog` (`dog`), the
  `rod` in the ground (`rod_ground`). The pen (`pen_wall`, `pen_side`) with `sheep` (`sheep`), or `hives` along its
  front (`hives`). `plateau` paints the path trodden wide while `trodden`.
- The hut (`hut`): `hut_front`, `hut_side`, `hut_roof` on the unseen `hut_at` (where the house stands); the house's
  cards, the pen, the lantern paint nothing; `growth` — the slope behind it waist-high with his last ten years'
  saplings, in rows; `seedlings` — a new edge of tiny seedlings before it on the bare ground.
- Light: `time` (dusk, dawn, day, night) — the sky is painted by it; the script sets the looks `dawn`, `day`, `night`
  from it at once. Dusk: the sun on the mountains (`sun`, from `sky#sun`). Dawn: the sun just up on the right. Day: the
  sun high behind the viewer (`day_sun`). Night: the moon (`moon`, from `sky#moon`), the lamp and the lantern (`lamp`).

## The moments (key `moment`; script.js)

Laid out at once when `moment` changes, and as the scene opens only if `moment` differs from `staged`. **A game sets
`moment` first, then any detail.** The default state is `arrival` laid out.

| moment | scenario | the place | who (standing) |
|---|---|---|---|
| `arrival` | П.3 | dusk, the lamp, the sheep, the dog, the rod in the ground | Elzéard (55) at his door, hands behind; the Traveller (20); Lina placed, not here |
| `leaving` | 1.6 | dawn, the lamp out, the sheep | Elzéard (55) by the door, the Traveller (20) going |
| `night` | 2.7 | night, the moon, the lamp; the hives | Elzéard (61), the Traveller (26) |
| `evening` | 3.4 | dusk, the lamp; the hives | Elzéard (75), the Traveller (40) |
| `ranger` | 3.5 Name, the morning | day; the hives | Elzéard (75) at the door, the young ranger, the Traveller (40) |
| `empty` | 3.5 Name, later | day, the hearth cold, no hives, the door open on the dark room, the path trodden | two visitors at the door, the Traveller (40) |
| `last_silence` | Э.2 Silence | day; the hives, the bread on the step, seedlings by the porch | Elzéard (85), the Traveller (50) |
| `hut` | Э.2 Name | day; the hut beyond the ridge | Elzéard (85) finishing a row of seedlings, the Traveller (50) |

What a branch changes after the moment (the game's): **Lina knows** in 3.4 — `bread_step` true; 3.5 on the Name, the
Traveller shuts the door — `door` "propped"; the Road's 3.5 is a year later (`traveller` the same look).

## Points the game presses

`house#…` none — `door_glow#door` (the doorway's light), `window_glow#pane`, `door_leaf#stick` (3.5: the stick),
`step_gifts#loaf`, `porch_saplings:k#hole`, `seedlings:k#row`, `hut_front#door`, `bucket` (its box), `rod#top`,
`dog#head`, `lantern#flame`, `hives:k`, `chimney#top`; the people's own (`elzeard#rod`, `visitor_a#basket`).

## Not right yet

- The scenario's table scenes — П.4, П.5, 1.5, 2.7, 3.4 (the soup, the hundred acorns, the shaving, the notebook and
  the letter on the table) — are inside the house. This scene is the house from outside; there is no room. The game
  can play them at the door (`night`, `evening`: the lamp lit, the door open), but the room is a place of its own.
- «The old man slower» (3.4) is a motion's (stage 5); standing, Elzéard at 75 is leaner and white-haired.

## Pieces (stage 5)

`lib.js` `film(scene)`, played by `script.js` (modules/beats). `from` sets the people, the door and the camera, never
`_here`, `_mood`, `_wear` or the moment's keys. The pieces inside the house (`table`, `hundred`, `silence`, `button`,
`hundred_night`, `hundred_slow`…) are the scene `house-inside`'s.

| piece | place | what it shows (tells) |
|---|---|---|
| `climb` | house0 | the Traveller comes up the path at dusk; Elzéard holds out a gourd of water (`gourd`) |
| `out_to_dog` | house0 | (asked of his son) he comes out to the dog by the door (`out`) |
| `dawn_door` | house0 (leaving) | the Traveller steps out at dawn (`out`) — then the choice |
| `farewell_back` | after `dawn_door` | Elzéard nods, close (`nod`) |
| `farewell_hand` | after `dawn_door` | the Traveller raises his hand (`hand`); Elzéard nods and goes to the sheep |
| `ranger` | house20 (ranger) | the ranger at the door (`speak`); Elzéard nods (`nod`); the ranger goes; Elzéard laughs, close (`laugh`) |
| `empty_house` | house20 (empty) | the strangers ask (`ask`) and go; the Traveller at the door (`door`) — then the guiding `door` (`door` open → shut → propped, the mark on `door_glow#handle`) |
| `last_house` | house30 | Elzéard, old, plants by the porch (`plant`), turns to the Traveller (`up`) |
| `hut` | hut30 | he finishes the row of seedlings and straightens (`up`) |
| `rod_held` | after `last_house` or `hut` | he holds out the rod (`out`) — then МИ6 on `elzeard#rod` |

New motions (cast): `offer`, `nod`, `raise_hand`, `laugh_short`, `plant_rod`, `walk_old`; the cast's part `gourd`.

## Contract for the check

```json
{"beats":{"climb":{"after":[],"tells":["climb:gourd"],"seconds":16},"out_to_dog":{"after":[],"tells":["out_to_dog:out"],"seconds":9},"dawn_door":{"after":[],"tells":["dawn_door:out"],"seconds":9},"farewell_back":{"after":["dawn_door"],"tells":["farewell_back:nod"],"seconds":5},"farewell_hand":{"after":["dawn_door"],"tells":["farewell_hand:hand"],"seconds":9},"ranger":{"after":[],"tells":["ranger:speak","ranger:nod","ranger:laugh"],"seconds":20},"empty_house":{"after":[],"tells":["empty_house:ask","empty_house:door"],"seconds":18},"last_house":{"after":[],"tells":["last_house:plant","last_house:up"],"seconds":18},"hut":{"after":[],"tells":["hut:up"],"seconds":22},"rod_held":{"after":["last_house","hut"],"tells":["rod_held:out"],"seconds":8}},"points":["door_glow#handle","door_glow#door","door_leaf#handle","door_leaf#stick","step_gifts#loaf","porch_saplings:0#hole","seedlings:0#row","hut_front#door","rod#top","dog#head","elzeard#rod","elzeard#gourd","traveller#hand_r"],"keys":["moment","beat","beat_next","door","bread_step","time","lamp","hut"]}
```
