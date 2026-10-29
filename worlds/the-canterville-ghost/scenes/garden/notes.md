# The Garden of Death

Stage 2 of the game (the look), the third scene: the Garden of Death out of time (chapter 4, 4.3–4.4) — the same two
people in a third light: no house, no fire, no sun, only the cold crystal moon over long grass, hemlock and the old
yew. Sir Simon without his irons, simpler and older, sits in the grass; Virginia kneels before him and prays. People
sit, kneel and breathe; no motion of people, no camera moves.

- **Where things are.** Camera `picture`, horizon 0.45. Outside, flat land (no relief). The sky (`sky`): night blue
  going black overhead, small stars, the big moon high on the left with a wide halo (its point `sky#disc`). Far off
  the pine woods (`pines`, 70 m: a ragged band of pointed crowns), the garden's old wall with ivy (`wall`, 16 m) and a
  thin drifting mist under it (`mist`). The ground is one plane of long grass (`ground`); on it tufts of long grass
  (`grass`: copies, each a layer in the wind; big ones at the frame's foot, low ones round the two people) and hemlock
  in flower (`hemlock`: copies, the white flat umbels nodding).
- **The yew** (`yew`, 7.2 m, right of the middle): a short enormous fluted trunk, two giant arms spreading low to either
  side, the needles in drooping tiers over them (layers `far` and `near`, stirring a little), sky between. On its left
  arm the nightingale (layer `bird`, its point `yew#nightingale`; its animate lifts it now and then as it sings). Under
  it, right of Sir Simon, the soft open earth (`earth`: a plane, a long low heap of turned loam).
- **People** (cast: modules/cast). Sir Simon (`simon_garden`: his look without manacles, chain and leg irons) sits in
  the grass before the yew (`sit_ground`: knees up, arms loose on them), `tired`, looking at the open earth, his pale
  light (`ghost`) just before him. Virginia (`virginia`, her white frock) kneels a step from him (`pray`: hands together
  at her chin), looking at him (`sad`); his light is on her face and hands.
- **Light.** The moon from behind and to the left (`moon`, `from: "sky#disc"`): its shafts in the haze, the grass's
  long shadows toward the viewer, the yew's shadow; low cold ambient; his own pale light. Cold, silver-blue, still.

## Stage 5: the pieces

The module `beats` (lib.js `film`; script.js plays it). What the scene got for them:

- **Keys.** `nightingale` (0 silent … 1 sings: the bird's lift on the yew, its animate; the song is the game's sound);
  `parcel` (her paper parcel on the grass by him, `parcel#parcel`; in `garden_come` the game's: he has it and lays it
  down); `simon_fade` (0…1: he sinks under the turned loam — the script lowers his place's elevation `simon_e` to
  −0.6 m, the grass plane hides him — and his light goes); `named` (the game's: in `tears` she reaches for his hand);
  the people's place keys; his light kept before him by the script (`ghost_a`, `ghost_d`, `ghost_light`).
- No `hands` point: М7 «Let Go» marks `simon#hand_r` (the contract as changed).

| piece | after | what |
| --- | --- | --- |
| garden_come | — | the two walk in through the grass from the far side and sit/kneel at their places; he lays the parcel down (`parcel`) |
| named | — | he gets up, walks to the edge of the grass by the yew, stands half turned from her; the nightingale falls silent |
| named_back | named | he looks at the earth («Eleanore»), walks back and sits further off |
| unnamed | — | he says it again, looks at her; the nightingale sings |
| tears | garden_come, named_back, unnamed | she weeps (`named`: reaches for his hand); he takes the casket from his sleeve, lays it in her hand — the pose for М7 |
| sleep | tears | he lies down on the turned earth under the yew and sinks into it; his light goes |

## What is not right yet

- Virginia's skirt kneeling is a lump (the engine's skirt does not fold over knees); low grass round her hides only its
  foot.
- Her hands in `pray` are pressed together at the chin with the wrists crossed, more than palm to palm: Kimodo's takes
  for "palms pressed together" bowed her face into her hands or ended standing.
- Seen close, the operator goes round them and shows the backs of their heads (as in the library); the scene has no
  close shots yet — it is for the scenario's stage.
- The tall grass is tufts on a flat painted ground: from the starting view it reads as long grass, but there is no
  grass that parts round them.
- The nightingale is a small painted bird that lifts a little; it does not sing in the picture (its song is sound,
  the game's).

## Contract for the check

```json
{"beats": {"garden_come":{"after":[],"tells":["garden_come:sat","garden_come:parcel"],"seconds":10}, "named":{"after":[],"tells":["named:stand"],"seconds":10}, "named_back":{"after":["named"],"tells":["named_back:name","named_back:sat"],"seconds":10}, "unnamed":{"after":[],"tells":["unnamed:look"],"seconds":6}, "tears":{"after":["garden_come","named_back","unnamed"],"tells":["tears:weep","tears:casket"],"seconds":12}, "sleep":{"after":["tears"],"tells":["sleep:lie","sleep:gone"],"seconds":10}}}
```
- Sitting down in the grass and kneeling are loops: in `garden_come` the two go from standing to sitting/kneeling in a
  third of a second (no motion of sitting down on the ground), and he gets up the same way in `named`.
- Going into the earth is his figure sinking under the grass plane (no person fades in the engine): seen from the
  start it reads as sinking into the long grass.
