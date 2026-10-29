# Кентервильское привидение — игра в терминах кода

Стадия 3 (`moood-me/moood:docs/writing/game-stages.md`): вся игра на трёх сценах мира, люди стоят; где по сценарию
кусок сцены — плашка с «Дальше»; мини-игры — заглушки (кружок и карточка); места, которых ещё нет, — в чужой сцене с
подписью. Сценарий — `scenario.md`.

- **Игра:** `games/the-canterville-ghost` (bespoke; английский — исходный язык кода и текстов, русский — перевод в
  `bespoke/lang/ru/strings.json`). Мир — `worlds/the-canterville-ghost` (`game.json` `world`).
- **Каркас** — «Летней книги» стадии 3 (works-006, `176a0fe`/`7de43f9`): `bespoke/game.js` (главы, карта, переигровки,
  карта автора, сохранение), `story.js` (`context`, `PLACES`, `SCALES`, `EFFECTS`, `ENDINGS`, `facts`), `ui.js`/`ui.css`
  (плашки, тосты, шкалы, подпись места, карточка заглушки, карта автора), `map.js` (карта — ряд листков над пустой
  библиотекой), `jump.js`, `chapters/`, `minigames/` (`stub.js`, `all.js`), `check/run.mjs`.

## Места — одна карта

`story.js PLACES`: место сценария → папка сцены мира и, если сцена чужая, `where` — подпись «На самом деле: …».
Шаги называют только места, никогда папки.

| Место | Сейчас | На стадии 5 |
| --- | --- | --- |
| `library` С1 | `library` | — |
| `corridor` С2 | `library` + подпись | `{ folder: '<коридор>' }` |
| `tapestry` С3 | `tapestry` | — |
| `dark` (тьма за стеной) | `tapestry` + подпись | своя сцена или вставка — решить |
| `death` С4 | `garden` | — |
| `chamber` С5 | `garden` + подпись (Вирджиния на коленях) | `{ folder: '<каморка>' }` |
| `grounds` С6 | `garden` + подпись | `{ folder: '<сад у замка>' }` |
| `hall` С7 | `library` + подпись | `{ folder: '<холл>' }` |

Ключи библиотеки (`fire`, `lamp`) — `LIBRARY.evening|morning|night`, только где место — сама библиотека; `otis_with: []`
(без бутылочки масла, которая у него в руке в сцене) — везде, кроме 1.2.

## Люди

`bespoke/people.json`: `narrator` (Charon), `virginia` (Leda), `simon` (Algenib), `otis` (Schedar), `washington`
(Puck), `mrs_otis` (Kore), `twin_a` (Fenrir), `twin_b` (Zephyr), `umney` (Gacrux), `voices` (Enceladus — голоса во
тьме), `cecil` (Achird). Голоса делает студия, когда страница говорит реплику (`speak {text, voice, how}`); у
некоторых реплик свой `how`.

`g.scene(place, {here, moods, keys})`: из людей игры в кадре те, кто есть в сцене (`virginia`, `simon`, `otis` —
id в сценах мира те же); остальных (Вашингтон, миссис Отис, близнецы, миссис Амни, Сесил) в сценах мира нет — у них
только голос и плашки. **Для стадий 4–5:** людям в новых сценах лучше дать те же id (`washington`, `mrs_otis`,
`twin_a`, `twin_b`, `umney`, `cecil`); `here` шагов сейчас называет только тех, кого можно показать, — на стадии 5
дописать туда остальных, где они есть по сценарию. В касте мира их пока нет (`modules/cast.md`: Вирджиния, сэр Саймон,
мистер Отис) — это дело мира.

## Главы и шаги

| Глава | Шаги | Выборы |
| --- | --- | --- |
| Пролог «Чемпион Пинкертона» | гроза и пятно; лицо в окне | `face`: told / silent |
| I «Масло для цепей» | цепи, смазка, Гобеленовая, ставки, миндаль, краски | `goodnight`: wish / pass (шанс 5 с); `paints`: leave / lock / tell |
| II «Призрак Отисов» | утро, Сесил, роль, репа, ловушка, слёг, не спится | `trap`: warn / watch / defend |
| III «Гобеленовая комната» | листья, «прилично», олень, «голодом», сад, пророчество, стена | `hunger`: bread / killed; ⚑ `wall`: go / papa |
| IV «Сад Смерти» / «Последняя ночь» | шесть шагов, каждый — шаг одного вида главы и шаг другого | ⚑ `door`: pass / stay / wake (только «папа»); `name`: named / unnamed (в Саду) |
| Эпилог | финал, часть первая; часть вторая | — |

Глава IV одна на карте, её название — по `wall` (`titleOf`); на «Пятне» её шаги 4–5 пусты.

«Доброй ночи» (1.2) — прерывание: метка на нём 5 с (по сценарию 3 с; на стадии 3 нужно два касания — кружок и
лепесток), не нажато — `pass`.

## Шкалы, метки, финал

- `SCALES`: `simon` «Сэр Саймон: играет — устал» 0–4, старт 2 (≤2 играет); `virginia` «Вирджиния: делится — держит в
  себе» 0–4, старт 2 (≤1 делится). Сдвиги — `EFFECTS` (§8). Шкалы видны всю игру, эпилог тоже.
- Метки — выборы (`face`, `goodnight`, `paints`, `trap`, `hunger`, `wall`, `name`, `door`) и обещание отцу `word`
  (given → kept / broken). Тосты — фразы карты §11.
- `facts`: `ending` — `wall` go → «Миндаль»; papa и `door` pass → «Свеча у стены»; иначе «Пятно». `plays`, `shares`,
  `wished`, `warned`, `named`.

## Заглушки мини-игр (`minigames/all.js`)

М1 `glass`, М2 `door`, М3 `sketch`, М4 `candle`, М10 `portrait`, М5 `nightingale`, М6 `hand`, М7 `release`, М9 `word`,
М8 `tiptoe`, М8в `threshold`, М8б `shoulder` — кружок на человеке и карточка (жест, что делают руки, что чувствуется,
след провала). Провалы на стадии 3 не играются (кружок — всегда «чисто»); следы провалов (§7) — стадия 5.

## Проверка

- `node games/the-canterville-ghost/bespoke/check/run.mjs` — все 432 пути (по 144 на финал): места и сцены, люди,
  ключи, точки выборов и заглушек, реплики (кто говорит), один финал на путь и тот, что по правилу §12, выборы — те,
  что у пути, шкалы в границах, `PLAYS` (шесть путей автора) кончаются как подписаны.
- `moood-check` (npm `@moood/check`) и `check` студии — тексты и русский.

## Что меняет стадия 5

Только заглушки: строки `PLACES` (С2, С5, С6, С7 — на свои сцены), `here` — люди, которых теперь видно; мини-игры
`all.js` — на настоящие (имена те же); плашки, где кусок сцены, — на куски; «Доброй ночи» — одно касание за 3 с.
Тексты, выборы, шкалы, финалы — как есть.

## Stage 5 — pieces

The contract between the game (`games/`, the game's author) and the scenes (`worlds/`, the pieces' author, branch
`r3/canterville-pieces`). Written 2026-10-29 before either side codes; a change to it is agreed and written here first.

### How a piece works (as in «Летняя книга», world module `beats`)

- The world gets the module `beats` (copy `works-006-four-scenarios-selected/worlds/the-summer-book/modules/beats.js`
  and `beats.md`); each scene with pieces: its `FILM` in `lib.js`, `script.js` `scene.kit.beats.play(scene,
  scene.lib.FILM)`. The key `beat`: the game names a piece, it plays from its `from` (or on from the one before, if it
  is `after` it); the scene tells `<piece>:<moment>` at its moments and `beat:<piece>` at its end; it ends in a living
  pose (values held, people breathe).
- The game opens a scene on a piece (`g.scene(place, {beat, here, moods, keys})`), says the lines **at the moments**
  the rows name (a voice takes as long as it takes: a piece never waits for a line, the game waits for both), then
  plays choices and mini-games in the pose the piece ends in.
- `here` and `moods` are the game's; every other starting value is the piece's `from`. Keys the game sets besides
  (variants of a piece) are named in its row (**keys:**). Person ids are the scenes' elements (below).
- Seconds are the piece's own, without lines. Shots: `wide` — the scene's picture camera; `medium` / `close` —
  `camera_target` + `camera_shot`; the exact framing is the pieces' author's; faces must read (readable, not dark).
- Each scene's notes.md gets a «Contract for the check» block as the summer book's (beats with `after`, `tells`,
  `seconds`; points; keys); the game's `check/run.mjs` reads it.

### People in the scenes (element ids = the game's people.json keys)

`virginia`, `simon`, `otis`, `mrs_otis`, `washington`, `twin_star`, `twin_stripes`, `mrs_umney`, `cecil`; looks by
`<id>_wear` (`virginia_habit`, `virginia_night`, `virginia_duchess`, `simon_garden`, `otis_gown`, `cecil_duke`).

**Asks of the world:**

1. castle-garden's element `umney` → `mrs_umney` (the game names her so everywhere).
2. The library gets `mrs_otis`, `washington`, `twin_star`, `twin_stripes`, `mrs_umney`, `cecil` (`_here` false by
   default); a breakfast table by the window (`breakfast`, chairs round it); an armchair Mrs Umney sinks into
   (`armchair`); the window-sill by the doors (`sill`, point `sill#sill`); keys `stain` (none / dull / vermilion /
   purple / scarlet / emerald / half / brown), `flash` (0..1 the lightning in the painted window), `face` (0..1 the old
   face in the glass behind the family), `rug` (bool: a rug over the floor before the hearth), `drawing` (none / sill /
   inkstand / drawer), `paints` (bool: her open paint-box on the sill), `sketch` (none / clean / blot: her study of the
   almond on the sill).
3. The tapestry gets `otis`, `washington` (`_here` false) and keys `wall` (0 shut … 1 open: the wall behind the
   tapestry parts, darkness beyond), `stir` (0..1 the hunters stirring), `dark` (0..1 the room gone to darkness but
   his light), `shapes` (0..1 shadows and wings in the dark), `vision` (0..1 the tapestries darken, the window shows
   moonlit grass instead of the avenue), `stub` (none / sill / hand: her candle-end), `turnip` (bool: the hollow
   turnip with its placard by the seat), `lantern` (bool: a lantern on the floor), `candle_floor` (bool).
   **«The dark behind the wall»** (4.1, 4С.5 — the game's place `dark`) is this room with `wall` 1, `dark` 1, the
   camera in the opening: it continues `into_wall` in the same room.
4. The garden (Death) gets keys `nightingale` (0 silent … 1 sings: the bird's lift; the song is the game's sound),
   `parcel` (bool: her parcel on the grass), `simon_fade` (0..1: gone into the earth), point `hands` (where their
   hands meet).
5. Parts (cast): `parcel` (a little paper parcel in the hand), `casket` (a small old casket in the hand), `lantern`
   (in the right hand), `newspaper` (held open in both hands, seated), `sketchbook` (on the knees, seated), `stub` (a
   candle-end in the fingers). The pillow flying is the corridor's own prop.
6. The hall (С7): its author's people ids as above; the rows below say what each moment needs.

### New motions (Kimodo; a loop unless «once»)

| name | prompt | s |
| --- | --- | --- |
| `kneel_rub` | A person kneeling on the floor is scrubbing the floor in front of them with their right hand at a steady pace | 6 |
| `faint_sit` (once) | A tired person sits down heavily into a chair behind them and leans back | 4 |
| `laugh_bend` | A person is laughing hard, bending forward and holding their stomach with both hands | 5 |
| `point` (once) | A person points at the floor in front of them with their right hand | 3 |
| `sit_table` | A seated person sits upright at a table with both forearms resting on the table | 6 |
| `read_paper` | A seated person holds a newspaper open in front of them with both hands, reading | 6 |
| `read_seated` | A seated person holds an open book on their lap with both hands, reading | 6 |
| `write` | A seated person is writing on the table in front of them with their right hand at a steady pace | 6 |
| `sit_sill` | A seated person sits sideways on a low ledge, drawing in a small book on their knees with their right hand | 6 |
| `smash` (once) | A person snatches a small object from a table with their right hand and throws it down hard onto the floor | 4 |
| `recoil` (once) | A scared person raises both hands in front of them and backs away quickly | 3 |
| `run` | A person runs forward at a steady pace | 4 |
| `bow_deep` (once) | A person makes a long, deep, old-fashioned bow, the right arm sweeping across the body | 4 |
| `rub_sleeve` | A seated person rubs their left sleeve with their right hand at a steady pace | 5 |
| `listen_wall` | A person stands leaning sideways with their ear pressed against the wall beside them | 5 |
| `shake_chain` | A seated person shakes something held in both hands up and down repeatedly | 4 |
| `stamp` (once) | An angry person stamps their right foot on the floor once | 2 |
| `knock_wall` (once) | A person knocks on the wall in front of them three times with the knuckles of their right hand | 3 |
| `pound_wall` | An angry person pounds on the wall in front of them with their right fist repeatedly | 4 |
| `weep` | A person kneeling on the floor covers their face with both hands and cries | 5 |
| `lie_down` (once) | An old person lies down slowly on their back on the ground | 6 |
| `lay_down` (once) | A person bends forward and lays a long object down on a table in front of them with both hands | 4 |
| `tiptoe` | A stealthy person walks forward slowly on tiptoe | 4 |
| `stand_up` (once) | A seated person stands up from a chair | 3 |
| `button_coat` | A person buttons their coat with both hands at chest height | 4 |
| `wave_hands` | An excited child jumps and waves both hands overhead | 4 |

Existing (cast.md): `stand`, `walk`, `clasped`, `loom`, `offer`, `upright`, `brood`, `sit_ground`, `pray`, `doze`,
`hold_candle`. The pieces' author may take a nearer existing one where Kimodo fails, and says so in cast.md.

### Pieces

Each: **id** · scene · from · who moves (motions) · what happens · seconds · shot · lines (the game says them at the
moment named) · tells.

**Prologue**

- `arrive` · library · evening (`fire` 1, `lamp` 1, `flash` 0), the family at the door, Mrs Umney inside · all
  `walk` in, Mrs Umney curtseys (`bow_deep`) · 10 · wide, a slow push in · after `arrive:in`: narrator «When Mr
  Hiram B. Otis…», Mr Otis «I will take the furniture…» · `arrive:in`, `arrive:curtsey`
- `stain` · library · after `arrive`, `stain` dull · Mrs Otis `point` · 5 · medium on the hearth · at `stain:point`:
  Mrs Otis «I am afraid…»; after: Mrs Umney's two lines · `stain:point`
- `rub` · library · after `stain` · Washington walks to the hearth, `kneel_rub`; `stain` none at `rub:gone`; `flash`
  1 (lightning); Mrs Umney `faint_sit` into `armchair`; twins `wave_hands` · 10 · medium on Washington, wide at the
  thunder · at `rub:kneel`: Washington «Pinkerton’s…»; at `rub:cheer`: the twins «Hurrah!» · `rub:kneel`,
  `rub:gone`, `rub:thunder`, `rub:cheer`
- `window_face` · library · after `rub`; the twins `laugh_bend`, Virginia looking at the window · the camera behind
  her toward the window, the family in the frame · 4 · medium over her shoulder · — · `window_face:ready`; then **M1**
- `face_told` · library · after M1 · all turn to the window (looks), `face` 0; twins `laugh_bend`; Mr Otis walks to
  her, `_reach` her shoulder · 8 · wide → medium on her · at `face_told:turn`: Washington «A reflection…»; at
  `face_told:hand`: Mr Otis «It is only the storm…» · `face_told:turn`, `face_told:hand`
- `face_silent` · library · after M1 · `face` 0; Mrs Umney opens her eyes; Virginia stays looking · 6 · close on
  Virginia · — · `face_silent:end`

**Chapter I**

- `chains` · corridor · night, the 1.2 default but Mr Otis `_here` false, `door_parents` 90, `door_virginia` 270,
  Virginia unseen behind it; Sir Simon far (0 / 12.4) · he `walk`s slowly toward her door · 8 · on her door, his light
  coming · — · `chains:near`; then **M2**
- `oil` · corridor · the 1.2 places; `door_virginia` as M2 left it · Mr Otis opens his door (`door_parents` → 0),
  `offer`, walks to the `table`, `bottle` table, `otis_with` [candle_l], back, door shut, `otis_here` false · 14 ·
  medium on Mr Otis, then wide · at `oil:speak`: Mr Otis «My dear sir…» · `oil:speak`, `oil:set`, `oil:shut`
- `smash` · corridor · after `oil` · Sir Simon `smash` (`bottle` smashed), howls; `door_twins` ~320, a pillow flies past
  his head; he backs along the right wall and stops at her door's crack (1.2 / 6.6) · 12 · wide; close on him at the
  crack · — · `smash:howl`, `smash:pillow`, `smash:crack`; then «Доброй ночи» (a touch on `simon#chest`, 3 s)
- `wish_stop` · corridor · after `smash` · he stops dead, looks into the crack, `ghost_light` 1 → 0.5, mood sad;
  walks into the right wall (`ghost_light` 0, `simon_here` false at the end) · 8 · close on his face, then medium ·
  her «Good night, sir» before it · `wish_stop:look`, `wish_stop:gone`
- `pass_by` · corridor · after `smash` · he walks past the crack into the wall · 6 · medium · — · `pass_by:gone`
- `creak_look` · corridor · after `smash`, when M2 creaked and no «Good night» · he turns to the crack, stares with
  burning eyes, walks past into the wall · 7 · close on him · — · `creak_look:stare`, `creak_look:gone`
- `pacing` · corridor · night, her door shut, Sir Simon walking up and down before it in the dark (5…8 m), then gone ·
  10 · wide from her door · — · `pacing:clink` (twice), `pacing:gone`
- `peas_night` · corridor · night, empty · — · 6 · wide · at `peas_night:cry`: twin_star «For Ginny’s paints!» ·
  `peas_night:cry`, `peas_night:groan`
- `insulted` · tapestry · night, Virginia `_here` false; Sir Simon on the seat `rub_sleeve`, stands to the wall
  `listen_wall`, back to the seat (`brood`) · 14 · medium · after `insulted:ear`: narrator «Never…», his lines ·
  `insulted:ear`, `insulted:seat`
- `wagers` · library · morning (`fire` 0.5, `lamp` 0); **keys:** `stain` (the colour); all at the `breakfast` table
  (`sit_table`; Mr Otis `read_paper`) · the twins slap the table · 12 · wide on the table and the stain · at
  `wagers:bet`: the twins' bets; at `wagers:paper`: Mr Otis «The laws of Nature…» · `wagers:bet`, `wagers:paper`
- `paint` · castle-garden · the 1.5 default · Virginia paints (`offer`, brush); Mrs Umney walks the path, stops by the
  almond, looks · 10 · medium on Virginia at the easel → wide · at `paint:umney`: Mrs Umney «It does not flower…» ·
  `paint:umney`, `paint:box` (**M3** before this piece, in the same pose)
- `look_house` · castle-garden · after `paint` · Virginia turns to look back at the house (toward the viewer) · 4 ·
  close on her face · — · `look_house:end`; then the choice «Краски»
- `box_morning` · library · morning, `paints` true, `stain` scarlet · Virginia walks to the sill, looks into the box · 8
  · medium on the box, then the stain · — · `box_morning:end`
- `clean_floor` · library · morning, `stain` none · Virginia looks at the clean floor · 5 · medium · — ·
  `clean_floor:end`
- `half_stain` · library · morning, `stain` half · — · 4 · close on the stain · — · `half_stain:end`

**Chapter II**

- `breakfast_green` · library · morning at the table, `stain` emerald · twins `laugh_bend`, take the money; Virginia
  `stand_up`, walks out · 12 · wide; close on her face before she goes · — · `breakfast_green:laugh`,
  `breakfast_green:out`
- `breakfast_clean` · library · `stain` none · — · 6 · wide on the table · at `breakfast_clean:say`: twin_star
  «Boring», Mr Otis «Our guest…» · `breakfast_clean:say`
- `breakfast_peas` · library · `stain` half · twin_stripes stands and shows the shooting (`offer`); Washington winks
  · 8 · medium on the twins · at `breakfast_peas:show`: «Right in the knee!» · `breakfast_peas:show`,
  `breakfast_peas:wink`
- `cecil_in` · library · morning, Cecil at the door, Virginia by the window · Cecil walks in, `bow_deep`; she turns
  to him · 8 · wide → medium on the two · after: the narrator, Cecil, Virginia · `cecil_in:bow`
- `rehearse` · tapestry · evening; Sir Simon before the mirror, `loom`, then `bow_deep` to the mirror · 12 · medium
  on him and the empty mirror · at `rehearse:loom`: «Reckless Rupert…» · `rehearse:loom`, `rehearse:bow`
- `turnip` · corridor · the 2.4 row of the notes, `spook` making; Virginia walks to her spot · 12 · wide → close on
  the placard (`spook#placard`) → medium on the boys · at `turnip:stop`: twin_star «Ginny, not a word…», Washington
  «Come and watch…» · `turnip:placard`, `turnip:stop`
- `candle_walk` · corridor · night, `spook` standing, Virginia (`virginia_night`, `candle_l`, `hold_candle`) at her
  door · she walks to the far door, driven by **M4** (`virginia_d` 6.3 → 13.4, `virginia_candle`) · — · medium behind
  her · — · `candle_walk:door`
- `candle_room` · tapestry · night, Sir Simon `_here` false; **keys:** `virginia_with` [] and the room dark but the
  window when M4 put the candle out · Virginia comes in, walks to the window, whispers, sets the candle-end on the sill
  (`stub` sill) · 12 · medium · her whisper before `candle_room:sill`; after it his line from the wall ·
  `candle_room:whisper`, `candle_room:sill`
- `route` · corridor · midnight (the 2.5 row), `spook` standing · Sir Simon walks to the corner, looks the turnip over,
  `_reach`es the placard, snorts, walks past to the far door; `door_twins` a crack · 14 · medium on him at the turnip ·
  — · `route:stop`, `route:snort`, `route:gone`
- `fright` · corridor · the same · he comes round the corner, `recoil`, `run`s to the far door; Virginia and the
  boys behind the twins' door (`door_twins` ~300; the twins `laugh_bend`) · 10 · wide; close on his face at the
  shriek · — · `fright:shriek`, `fright:gone`, `fright:laugh`
- `defend` · corridor · evening, the boys at the corner (2.4 places), Virginia facing them · she holds out a hand
  (`offer`), then walks to her door and in · 10 · medium on the four · at `defend:say`: her line, the twin's,
  Washington's, hers · `defend:say`, `defend:go`
- `gallop` · corridor · morning (`evening` 0), the twins `run` past toward the far door · 6 · wide · at `gallop:run`:
  twin_stripes «Ginny’s on the ghost’s side!…» · `gallop:run`
- `stub_sleeve` · tapestry · day; Sir Simon on the seat, `stub` hand; he turns it, hides it in his sleeve (`stub` none)
  · 10 · close · at `stub_sleeve:turn`: «Warned. Me…» · `stub_sleeve:turn`, `stub_sleeve:hidden`
- `turnip_shake` · tapestry · day; `turnip` true; Sir Simon on the seat before it, `shake_chain` · 8 · medium · — ·
  `turnip_shake:shake`
- `easel_idle` · castle-garden · the 2.6 row · — · 8 · medium on the two · at `easel_idle:ask`: Cecil «Shall we
  ride?», Virginia «Let’s» · `easel_idle:ask`
- `sleepless` · library · night (`lamp` 1, `fire` 0.3), Mr Otis at his desk `write`; Virginia (`virginia_night`) in
  the doorway · she walks to the sill, `sit_sill` · 12 · wide → medium · at `sleepless:door`: Mr Otis «Can’t sleep?…»
  · `sleepless:door`, `sleepless:sat`; then **M10**
- `question` · library · after M10 · Mr Otis lays down the pen (`sit_table`), thinks · 6 · close on him · her question
  before; at `question:pen`: his answer · `question:pen`
- `wash_door` · library · after `question` · Washington in the doorway with a candle (`candle_l`) · 5 · medium · his
  lines after · `wash_door:in`
- `drawing` · library · after `wash_door` · Mr Otis takes the drawing, looks, stands it by the inkstand (`drawing`
  inkstand); Mrs Otis in the doorway · 10 · close on the drawing → medium · at `drawing:look`: «It is like me…»; at
  `drawing:mother`: Mrs Otis, then Mr Otis · `drawing:look`, `drawing:mother`

**Chapter III** (tapestry, the autumn afternoon of the default)

- `leaves` · tapestry · the default, Virginia `_here` false · the door opens, Virginia (`virginia_habit`) comes in to
  her place · 10 · wide, leaves falling · — · `leaves:door`
- `reuben` · tapestry · after `leaves` · Sir Simon `stand_up`, `loom`, sits back (`brood`) · 10 · medium on him · at
  `reuben:up`: «I am Red Reuben…» · `reuben:up`, `reuben:down`
- `talk` · tapestry · after `leaves` or `reuben` · Virginia walks nearer (1.6 m from him) · 6 · a two-shot, both
  faces · the talk's lines after · `talk:near`
- `sandwich` · tapestry · after `talk` · Virginia `offer` with `parcel`; he takes it (`_reach`; the parcel to his hand)
  · 8 · close on the hands · his thanks after · `sandwich:taken`
- `stamp` · tapestry · after `talk` or `sandwich` · Virginia `stamp` · 3 · medium on her · her lines after ·
  `stamp:stamp`
- `wall_parts` · tapestry · after **M5** (`vision` back to 0) · `stir` 0 → 1, `wall` 0 → 1; Sir Simon stands, `offer`
  his hand to her · 12 · wide → medium on his hand · at `wall_parts:supper`: Washington «Ginny! Supper!»; at
  `wall_parts:hand`: «I shall not ask a second time» · `wall_parts:supper`, `wall_parts:open`, `wall_parts:hand`
- `into_wall` · tapestry · after `wall_parts` · she walks to him, hand in hand (`_reach` each other's hands), they walk
  into the opening; `wall` 1 → 0, `stir` sways, both `_here` false · 12 · medium → wide · at `into_wall:hand`:
  Washington «Ginny!» (nearer) · `into_wall:hand`, `into_wall:shut`
- `hand_down` · tapestry · after `wall_parts`; **keys:** `plays` (bool) · he lowers his hand; plays: `bow_deep`; tired:
  sits back (`brood`); `wall` 1 → 0 slowly; Virginia backs to the door and `run`s out · 14 · medium on him, then her
  · at `hand_down:bow` (plays): «Call him…»; at `hand_down:whisper`: voices «Virginia…» · `hand_down:bow`,
  `hand_down:whisper`, `hand_down:gone`

**Chapter IV**

- `dark` · tapestry (`wall` 1, `dark` 1, `shapes` 1) · the camera inside the opening; the two stand hand in hand in his
  light; shapes and wings pass · 8 · medium on the two faces · at `dark:voices`: voices «Go back…», Sir Simon «Do
  not listen» · `dark:voices`; then **M6**
- `calling` · hall · supper-time, Mrs Otis on the stairs calling, the twins `run` up and down · 8 · wide · at
  `calling:call`: Mrs Otis «Virginia! Ginny!» · `calling:call`
- `lantern` · tapestry · evening, empty; **keys:** `trap` (warn / watch / defend), `shares` (bool) · Washington opens
  the door with a lantern; shares: `pound_wall`, then sits under the tapestry (`sit_ground`, `lantern` true); else
  warn / defend: sets the lantern down, sits; watch: looks round and walks out · 12 · medium · at `lantern:pound`:
  «Give her back!» · `lantern:pound`, `lantern:end`
- `pocket` · library · night, Mr Otis at the desk · he takes the drawing (`drawing` none: into his pocket) and walks
  out · 8 · medium · at `pocket:say`: «The gypsies…» · `pocket:say`, `pocket:out`
- `fireside` · library · evening, the family by the fire, Virginia on the sill · Mr Otis walks to her; **keys:**
  `shares` (bool: if not, he `_reach`es her forehead) · 10 · wide → medium · lines after her line · `fireside:touch`
- `knock_evening` · tapestry · evening, empty; Mr Otis comes in with a candle (`candle_l`), walks to the tapestry,
  `knock_wall` · 8 · medium · at `knock_evening:knock`: «Sir?» · `knock_evening:knock`
- `london` · library · the family by the fire, Mr Otis back · Washington sits by her on the sill (`sit_sill`), turning
  his stick · 8 · medium · at `london:say`: «We are going to London…», the twin's «And the ghost?» · `london:say`,
  `london:sat`
- `word` · corridor · the 4С.2 row (`armchair` true) · Mr Otis `offer`s his hand · 4 · two-shot · «Promise me…» before
  · `word:hand`; then **M9**
- `chair_sit` · corridor · after M9 · Mr Otis sits in the armchair with the book (`read_seated`, `book`) · 6 · medium ·
  at `chair_sit:sat`: «I’ll sit here…» · `chair_sit:sat`
- `garden_come` · garden · the two walk in through the grass from behind and sit at their default places (his
  `sit_ground`, her `pray`); **keys:** `parcel` (bool: he lays it on the grass at `garden_come:parcel`) · 10 · wide →
  medium · at `garden_come:sat`: his question (killed); then «Pray with me…» · `garden_come:sat`, `garden_come:parcel`
- `farewell` · corridor · the 4С.3 row; **keys:** `plays` (bool: full array, the chains in his hand; else the look
  `simon_garden`, `ghost_light` 0.4) · Mr Otis asleep (`doze`); Sir Simon walks from the far end to her door, silent;
  she opens the door (`door_virginia` 330); he `bow_deep`s · 16 · wide → medium on him at her door · at `farewell:far`
  (plays): narrator «For the first time…»; at `farewell:bow`: his lines · `farewell:far`, `farewell:door`,
  `farewell:bow`
- `farewell_go` · corridor · after `farewell` · he turns and walks away toward the far door · 6 · from her doorway · —
  · `farewell_go:end`; then the choice «Мимо кресла»
- `pass_chair` · corridor · after **M8** (she went past the chair) · she walks on to the far door where he waits; he
  turns · 8 · medium on the two · the four lines after · `pass_chair:met`
- `stay_door` · corridor · after **M8в** · he walks on to the far door and fades into the wall (`ghost_light` → 0);
  she shuts her door (`door_virginia` 270) · 10 · from her doorway · at `stay_door:stop` (wished): her whisper, his
  answer · `stay_door:stop`, `stay_door:gone`, `stay_door:shut`
- `wake_papa` · corridor · after **M8б** · Mr Otis wakes, `stand_up`, faces the far end; **keys:** `plays` (bool:
  Simon `bow_deep`, else a nod) · he fades into the wall; Mr Otis takes her hand (`_reach`) · 14 · medium · at
  `wake_papa:up`: «Sir. My daughter stays»; at `wake_papa:bow` (wished): «Good night, Miss Virginia» · `wake_papa:up`,
  `wake_papa:bow`, `wake_papa:gone`, `wake_papa:hand`
- `named` · garden · after the choice = named · Sir Simon gets up, walks to the edge of the grass, stands half turned
  from her; `nightingale` → 0 · 10 · medium on him · at `named:stand` (plays): «Madam, I said…» · `named:stand`
- `named_back` · garden · after `named` · he looks at the soft earth, then walks back and sits further off · 10 · close
  on his face → wide · at `named_back:name`: «Eleanore» (plays: «There…») · `named_back:name`, `named_back:sat`
- `unnamed` · garden · he repeats, looks at her; `nightingale` 1 · 6 · close on him · — · `unnamed:look`
- `tears` · garden · Virginia `weep`; **keys:** `named` (bool: she `_reach`es his hand); he takes the casket from his
  sleeve, lays it in her palm (`virginia_with` [casket]) · 12 · close on the two · — · `tears:weep`, `tears:casket`;
  then **M7**
- `sleep` · garden · after M7 · he `lie_down`s under the yew, `simon_fade` 0 → 1; **keys:** `nightingale` · 10 · wide
  · at `sleep:lie`: «Good night, Miss Virginia» / «Farewell» · `sleep:lie`, `sleep:gone`
- `midnight` · hall · night, the family back (Mr Otis, Cecil from the ride), Mrs Otis in her shawl; **keys:** `shares`
  (bool), `trap` · the clock strikes (`midnight:stroke` — the game plays the twelve strokes), silence; the panel on the
  landing opens, Virginia (`virginia_habit`) with the casket; shares: Washington runs down and seizes her hands; else
  she waits, Mr Otis climbs to her; Washington stops two steps below (warn / defend) or runs in from the front door
  with a lantern last (watch); Mrs Otis takes her face in her hands · 22 · wide → medium on the landing · at
  `midnight:hold`: «How could you!» and her lines · `midnight:stroke`, `midnight:panel`, `midnight:hold`
- `chamber_family` · chamber · `moment` family · the family comes in from the panel, Virginia kneels; the camera goes
  to the window: the almond whole · 16 · wide → close on the window · at `chamber_family:almond`: twin_star «The
  almond!…» · `chamber_family:kneel`, `chamber_family:almond`
- `casket` · chamber · after either chamber piece; **keys:** `stub` (bool: her candle-end on the jewels) · close on the
  casket open in her hands · 5 · close · — · `casket:open`
- `woken` · corridor · night, the armchair, Mr Otis asleep, `door_virginia` open, her room empty · he wakes,
  `stand_up`, looks into the room, takes the chair's candle, walks to the far door · 12 · medium · — · `woken:up`,
  `woken:gone`
- `wait_wall` · tapestry · night, empty; Mr Otis (`otis_gown`) with the candle · walks to the tapestry, `knock_wall`,
  sets the candle down (`candle_floor` true), sits facing it (`sit_ground`); `wall` 0 → 1: Virginia (`virginia_night`)
  steps out with the casket · 18 · medium on him → on her · at `wait_wall:knock`: «Sir. Ginny»; at `wait_wall:out`:
  «You promised» / «Yes» / «Show me» · `wait_wall:knock`, `wait_wall:sat`, `wait_wall:out`
- `chamber_father` · chamber · `moment` father · she kneels; he stands in the passage's mouth; the camera to the window:
  the almond · 14 · wide → the window · — · `chamber_father:almond`

**Epilogue**

- `chair_night` · corridor · night, `armchair` true · Mr Otis sits with the book by her door; she goes in and shuts it
  · 8 · wide · after: narrator «Mr Otis had slept badly…» · `chair_night:sat`
- `funeral` · castle-garden · the funeral row; **keys:** `with_family` (bool: the family beside her, else a step
  behind), `father_apart` (bool: «Свеча» — Mr Otis apart with the candle), `nightingale` (0 / 1) · Virginia walks to
  the coffin and lays the cross (`lay_down`, `cross` true); the moon comes out (`clouds` 1 → 0) · 16 · wide → medium
  on her at the coffin · — · `funeral:cross`, `funeral:moon`
- `brown` · library · morning, `stain` brown · Washington `kneel_rub`, gives up (sits on his heels), puts the stick
  away; the rug unrolled (`rug` true); Virginia in the doorway · 14 · medium on Washington → wide · at `brown:rug`: Mrs
  Otis «Put a rug over it» · `brown:rubbed`, `brown:rug`
- `years` · castle-garden · the years-later row · Virginia and Cecil walk slowly to the yew and stop · 10 · medium on
  the two · their lines after · `years:stop`
- `almond_last` · castle-garden · the last shot of «Миндаль»; **keys:** `nightingale` · the camera slowly on the
  blossoming almond over the mound · 10 · wide → medium · — · `almond_last:end`
- `breakfast_funeral` · library · morning at the table, the family; **keys:** `shares` (bool: Mrs Otis takes her hand,
  Washington gets up and goes out; else they sit) · 10 · wide · lines at `breakfast_funeral:say` ·
  `breakfast_funeral:say`, `breakfast_funeral:end`
- `no_chair` · corridor · night, no armchair, nobody; Virginia opens her door, looks · 6 · from her door · — ·
  `no_chair:end`
- `letters` · library · night, Mr Otis `write`s, then puts the drawing into the drawer (`drawing` drawer) · 8 · medium
  · — · `letters:drawer`
- `wedding` · hall · day by the front door: Cecil (`cecil_duke`), Virginia (`virginia_duchess`), Mr Otis · he takes
  her hand and lets it go first (`_reach`, then none) · 10 · medium · lines at `wedding:hand` · `wedding:hand`,
  `wedding:let`
- `candle_last` · tapestry · night, empty; Mr Otis with a candle comes in and sits on the floor facing the tapestry
  (`candle_floor` true, `sit_ground`); nothing stirs · 14 · wide, slow · — · `candle_last:sat`
- `departure` · library · the morning of leaving; **keys:** `plays` (bool: `stain` scarlet, Washington takes out his
  bottle; else `stain` none and Mrs Umney at the doors), `paints` (bool), `sketch` (clean / blot) · Virginia lays the
  sketch on the sill · 12 · wide → close on the sill · at `departure:stain`: Mr Otis «Leave it…» or Mrs Umney «It has
  gone quiet…» · `departure:stain`, `departure:sketch`
- `coat` · hall · morning, Mr Otis `button_coat`, Virginia by him · 6 · medium · his line after · `coat:end`
- `porch` · hall · morning, the carriages at the porch; **keys:** `wake` (bool: he gives her his hand), `shares` (bool:
  she sits between the twins; else she comes down last and looks up at the Tapestry Chamber's windows), `plays`
  (bool: `porch:chain`) · 14 · wide → medium · — · `porch:board`, `porch:chain`, `porch:look`
- `coaches` · castle-garden · the last row of «Пятно» · `coach_d` 9 → 56 · 14 · wide · — · `coaches:end`

### Mini-games (each in the pose its piece ended in; the game sets the keys named)

| id | § | scene, after | gesture | marks on | keys the game drives | s | a miss leaves |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glass` | М1 | library, `window_face` | touch nothing | — (hands off) | `flash`, `face` | 6 | touched: `flash` out sooner; her line «There was someone… I think» |
| `door` | М2 | corridor, `chains` | pull slowly | `door_virginia#handle` (a point to add) | `door_virginia` 270 → 292 | 6 | a creak: `creak_look` instead of `pass_by` (when no «Good night») |
| `sketch` | М3 | castle-garden, before `paint` | trace | `board#root` → `board#fork` (the insert `board`: the sheet close, a line up the trunk) | `board_open` 0..1, `sketch_line` 0..1, `blot` | 10 | a blot: the sketch keeps it (`departure` `sketch` blot) |
| `candle` | М4 | corridor, `candle_walk` | balance (lead) | — (anywhere) | `virginia_d`, `virginia_candle` | 8 | out: `candle_room` dark, the whisper from the dark |
| `portrait` | М10 | library, `sleepless` | trace | `sketchbook#start` → `sketchbook#end` (an insert `sketchbook`) | `sketchbook_open`, `portrait` 0..1, `askew` | 8 | askew: Mr Otis «My nose is longer, I believe» and a laugh |
| `nightingale` | М5 | tapestry, his «Far away…» | touch nothing | — | `vision` 0..1 | 10 | touched: «You are not listening» and a shorter line |
| `hand` | М6 | tapestry, `dark` | hold | `virginia#hand_r` (their joined hands) | `shapes` (grow when let go), `virginia_reach` | 12 | let go: her hand gropes (`virginia_reach` null), his finds it |
| `release` | М7 | garden, `tears` | hold, then let go | `hands` (garden point) | `simon_reach` | 5 | held too long: his hand slips out by itself |
| `word` | М9 | corridor, `word` | hold | `otis#hand_r` | `virginia_reach` → `otis#hand_r` | 5 | let go first: he holds a moment longer |
| `tiptoe` | М8 | corridor, `farewell_go` | balance (lead) | — | `virginia_a`, `virginia_d` along x ≈ 0.6 past the chair | 8 | a creak: Mr Otis mutters «Ginny?..», sleeps on |
| `threshold` | М8в | corridor, `farewell_go` | touch nothing | — | `simon_d`, `ghost_d`, `ghost_light` | 6 | touched: half a step out (`virginia_d` + 0.3); he does not turn |
| `shoulder` | М8б | corridor, `farewell_go` | pull slowly | `otis#chest` | `virginia_reach` → `otis#chest` | 5 | too sharp: he starts up, the book falls (`otis_with` []) |

«Доброй ночи» (1.2): one touch on `simon#chest` within 3 s right after `smash:crack` (a press with no petals).
Person points the language needs (`#chest`, `#hand_r`) are the engine's; scene points to add: `door_virginia#handle`,
`board#root`, `board#fork`, `sketchbook#start`, `sketchbook#end`, the garden's `hands`.
