# The Library

Stage 2 of the game (the look): the library of Canterville Chase past midnight — the place, its light and three of
its people standing. Stage 5 (2026-10-29): the game's pieces of this room and what it got for them (below).

- **Where things are.** Camera `picture`, horizon 0.4 (more floor than ceiling). A long low room 8 m wide, 3.4 m high, from 0.95 m to its far
  wall at 10 m: the floor and the beamed ceiling (a card laid face down, `tilt` −90, its foot at the far wall), oak
  everywhere (the lib's `oak`: linenfold dado, panels, frieze) and bookcases (the lib's `bookcase`).
- **The far wall** (`back_wall`): the great window in the middle — three lights over three, stone mullions and transom
  (x −1.45…1.05, 0.95–3.05 m), its lights cut through; the painted glass behind them is `window` (glows: moonlit
  quarries, the Canterville arms, the prophecy in black letters on amber glass along the foot — six `tr` lines).
- **The right wall** (`right_wall`, +x toward the viewer, anchor at 6.6 m): the stone fireplace (Tudor arch, andirons
  and logs, the arms over the mantel, two candles — their lights `right_wall#candle_far`, `#candle_near`); the fire
  is `flames` and `embers` (key `fire`) and the light `fire`; the hearthstone `hearth`; the bloodstain `stain`
  before it. **The left wall**: books. Mr Otis's desk (`desk`) with its oil lamp (`desk_lamp`, its light `lamp`, key
  `lamp`) at the front left; the rug in the middle; a wing chair at the far end of the fire.
- **People** (cast: modules/cast), 3.3–4.9 m from the viewer. Sir Simon front right in his own pale light (the light
  `ghost` just before him), looming with both arms up (`loom`), the chain hanging between his raised wrists, scowling
  at the viewer; Virginia in the middle, hands clasped, looking at him with pity; Mr Otis beyond his desk, its lamp on
  his face, holding out the bottle of oil for the chains (`offer`, `otis_with: ["bottle"]`), smiling politely at him.
  Each faces between the viewer and the one they look at, so every face reads.
- **Light.** Cold moonlight through the window (`moon`, `through` the window: its beam on the floor round Virginia,
  `shafts` in the haze, `motes` in it), the warm fire, the candles, the desk lamp, the ghost's pale light.

## Stage 5: what the room got for its pieces

- **The doors** (`door_l`, `door_r`: two leaves in the left wall, 6.8–8.0 m away, 2.4 m high, opening out by `doors`
  0…1 — the script turns them, `door_l_f`, `door_r_f`), and beyond them **the passage** (`passage`: its far wall with a
  sconce's candle, the light `passage`; `passage_floor`). Whoever is not in the room waits there unseen (hidden by the
  wall from the room's picture) and walks in through the doors.
- **The breakfast table** by the window (`breakfast_top`: a plane at 0.75 m, the cloth and the breakfast; `breakfast`:
  its front, the cloth hanging, the legs) and **the chairs** (`chairs`, copies): four on its far side (the twins,
  Washington, Mrs Otis — facing the room), Mr Otis at its left end with his `newspaper`, Virginia at its right end;
  one more behind the desk. Seats (the hips, 0.46 m up): the far side −2.65 / −2.15 / −1.65 / −1.15 at 9.15, turn 180;
  Mr Otis −3.3 / 8.3, turn 90; Virginia −0.7 / 8.3, turn 270; the desk −3.62 / 5.28, turn 120. The wing chair by the
  fire: 3.02 / 8.5, turn 250, 0.45 m.
- **The window seat** (`sill`: its panelled front, point `sill#sill`; `sill_top`: the cushion seen from above, and on it
  by the keys her paint-box `paints`, her study of the almond `sketch` once `sketch_on`, her drawing `drawing` "sill").
  Sitting on it: Virginia 0.4 / 9.8, Washington beside her −0.3 / 9.8, 0.5 m up, facing the room (`sit_sill`).
- **The window's weather**: `day` (the look `day` — daylight, the moon out; the light `sun` through the glass; the
  glass's warm layer), `rain` (drops running down the glass: `rain_glass`), `flash` (the lightning: `lightning`, a white
  layer over the six lights, and the light `lightning` through them), `face` (the old face with coal eyes in the glass,
  behind the family: `face`, a layer and its eyes' glow). `ghost_light` — Sir Simon's light, 0 when he is not here.
- **The stain** (`stain`: none, dull, vermilion, purple, scarlet, emerald, half, brown), **the rug** over it (`rug`:
  `hearth_rug`), **her drawing** propped by the inkstand on the desk (`drawing` "inkstand"; point `desk#drawing`).
- **М10 «Портрет»**: the insert `sketchbook` (`sketchbook_open`) — her page by the lamp; `portrait` 0…1 draws his
  profile down the line from `sketchbook#start` (the brow) to `sketchbook#end` (the chin), the pencil at its end, then
  his eye, ear, hair and collar; `askew` — the nose too long and askew. Its line is the lib's `PORTRAIT`.
- **People**: Virginia, Sir Simon, Mr Otis as before, and Mrs Otis, Washington, the twins, Mrs Umney, Cecil
  (`_here` false by default); each walks by `<id>_a`, `<id>_d`. Washington's candle lights by `washington_candle`.

## Pieces

`lib.js` `film(scene)`, played by `script.js` (modules/beats). Where each begins (its `from`), unless it goes on from the
one before (`after`); the game's `here`, moods and variant keys are never set by a piece.

| piece | what it shows |
| --- | --- |
| `arrive` | the storm evening (rain on the glass, the fire, the lamp, the stain dull): the family walk in from the passage one by one to their places; Mrs Umney by the wing chair curtseys (`bow_deep`); the camera pushes in slowly |
| `stain` | Mrs Otis goes to the hearth and points at the stain (`point`); all look at it; the shot on the stain |
| `rub` | Washington kneels and rubs (`kneel_rub`, medium on him); the stain goes; the lightning (wide); Mrs Umney sinks into the wing chair (`faint_sit`, then `doze`); the twins cheer (`wave_hands`) |
| `window_face` | the twins laugh (`laugh_bend`) over Mrs Umney; Virginia turns to the window; the camera comes up behind her toward the glass, the family between — М1's pose |
| `face_told` | all turn to the window; the camera back; the twins laugh at her; Mr Otis comes to her and lays his hand on her shoulder (medium on her) |
| `face_silent` | a cut to her face from the window's side; Mrs Umney comes to (`brood`, tired) |
| `wagers` | the morning at breakfast (the game's `stain`): the twins bang the table (`shake_chain`), Mr Otis behind his newspaper (`read_paper`) |
| `box_morning` | the paint-box open on the window seat, the stain scarlet: Virginia walks to the box, looks in, turns to the stain |
| `clean_floor` | the floor clean: Virginia looking at it (medium) |
| `half_stain` | half a stain, close |
| `breakfast_green` | the emerald stain: the twins get up laughing; close on Virginia; she gets up and walks out through the doors |
| `breakfast_clean` | the floor clean, the table (a slow push) |
| `breakfast_peas` | the stain half: twin Stripes stands and shows the shooting (`offer`); Washington smiles at him |
| `cecil_in` | Cecil comes in at the doors to Virginia by the window and bows (`bow_deep`); a two-shot |
| `sleepless` | night: Mr Otis writing at the desk (`write`); Virginia in her nightgown at the doors walks to the window seat and sits (`sit_sill`, her `sketchbook`) — М10's pose |
| `question` | he lays down the pen (`sit_table`), close on him |
| `wash_door` | Washington in the doorway with a candle (`hold_candle`, his light) |
| `drawing` | Mr Otis gets up, goes to her, takes the drawing; the sketchbook close up (the insert, `portrait` 1); back at the desk he stands it by the inkstand; Mrs Otis in the doorway |
| `pocket` | night: he takes the drawing from the inkstand, gets up and walks out |
| `fireside` | the evening by the fire (Mrs Otis in the wing chair, the twins on the floor, Washington at the mantel, Virginia on the window seat): Mr Otis walks to her; if she does not share (`shares` false) he lays his hand on her brow |
| `london` | Washington goes and sits by her on the window seat |
| `brown` | the brown stain: Washington rubs, gives up (`sit_ground`); wide; he gets up, and the rug lies over it (`rug`); Virginia in the doorway |
| `breakfast_funeral` | the morning at the table, the stain under the rug; if she shares (`shares`), Mrs Otis takes her hand and Washington gets up and goes out |
| `letters` | night: Mr Otis writes, then puts the drawing away in the drawer (`drawing` "drawer") |
| `departure` | the morning of leaving: `plays` — the stain scarlet, Washington with his bottle; else the floor clean (Mrs Umney at the doors, if here); Virginia lays her study on the window seat (`sketch_on`), close |

The hall's pieces (`calling`, `midnight`, `wedding`, `coat`, `porch`) belong to the hall's scene.

Who walks in during a piece (Washington in `wash_door`, Mrs Otis in `drawing`, Cecil in `cecil_in`, the family in
`arrive`) waits unseen in the passage from the piece's start: the game names them in `here` from the step's start.

## What is not right yet (stage 5)

- Sitting down onto the window seat has no motion of its own: she goes over from standing to the seated loop in a third
  of a second (`on` + the loop); getting up is `stand_up`.
- «The twins slap the table» is `shake_chain` (both hands up and down) seated; Washington's wink is his smile (no wink
  on the storybook face); «turning his stick» (london) is not shown — no stick.
- The table, the chairs, the window seat are flat paintings like the rest of the room: seen from the side they are
  thin.

## Contract for the check

```json
{"beats": {"arrive":{"after":[],"tells":["arrive:in","arrive:curtsey"],"seconds":10}, "stain":{"after":["arrive"],"tells":["stain:point"],"seconds":6}, "rub":{"after":["stain"],"tells":["rub:kneel","rub:gone","rub:thunder","rub:cheer"],"seconds":11}, "window_face":{"after":["rub"],"tells":["window_face:ready"],"seconds":4}, "face_told":{"after":["window_face"],"tells":["face_told:turn","face_told:hand"],"seconds":8}, "face_silent":{"after":["window_face"],"tells":["face_silent:end"],"seconds":6}, "wagers":{"after":[],"tells":["wagers:bet","wagers:paper"],"seconds":12}, "box_morning":{"after":[],"tells":["box_morning:end"],"seconds":8}, "clean_floor":{"after":[],"tells":["clean_floor:end"],"seconds":5}, "half_stain":{"after":[],"tells":["half_stain:end"],"seconds":4}, "breakfast_green":{"after":[],"tells":["breakfast_green:laugh","breakfast_green:out"],"seconds":12}, "breakfast_clean":{"after":[],"tells":["breakfast_clean:say"],"seconds":6}, "breakfast_peas":{"after":[],"tells":["breakfast_peas:show","breakfast_peas:wink"],"seconds":8}, "cecil_in":{"after":[],"tells":["cecil_in:bow"],"seconds":8}, "sleepless":{"after":[],"tells":["sleepless:door","sleepless:sat"],"seconds":12}, "question":{"after":["sleepless"],"tells":["question:pen"],"seconds":6}, "wash_door":{"after":["question"],"tells":["wash_door:in"],"seconds":5}, "drawing":{"after":["wash_door"],"tells":["drawing:look","drawing:mother"],"seconds":15}, "pocket":{"after":[],"tells":["pocket:say","pocket:out"],"seconds":9}, "fireside":{"after":[],"tells":["fireside:touch"],"seconds":10}, "london":{"after":[],"tells":["london:say","london:sat"],"seconds":8}, "brown":{"after":[],"tells":["brown:rubbed","brown:rug"],"seconds":14}, "breakfast_funeral":{"after":[],"tells":["breakfast_funeral:say","breakfast_funeral:end"],"seconds":10}, "letters":{"after":[],"tells":["letters:drawer"],"seconds":8}, "departure":{"after":[],"tells":["departure:stain","departure:sketch"],"seconds":12}}}
```
