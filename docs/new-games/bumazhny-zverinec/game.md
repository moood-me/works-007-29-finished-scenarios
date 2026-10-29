# Бумажный зверинец — игра в терминах кода

Стадия 3 (`moood-me/moood:docs/writing/game-stages.md`): вся игра от пролога до трёх финалов на сценах мира, люди
стоят; где по сценарию действие сцены — плашка с «Дальше»; мини-игры — заглушки (кружок, карточка и два лепестка:
«Сыграно» / «Промах: …»); места, которых ещё нет, — в чужой сцене с подписью. Сценарий — `scenario.md`.

- **Игра:** `games/the-paper-menagerie` (bespoke; английский — исходный язык кода и текстов, русский — перевод в
  `bespoke/lang/ru/strings.json`). Мир — `worlds/the-paper-menagerie` (`game.json` `world`).
- **Каркас** — «Кентервильского привидения» стадии 3 (`r3/canterville`, `805e2d1`) с его правками после проверки
  (`534f811`: финал в чёрное с названием, строка финала на листке последней главы, под выбором — что из него вышло;
  `1760d04`: знак выбора не теряется за краем кадра): `bespoke/game.js` (главы, карта, переигровки, карта автора,
  сохранение), `story.js` (`context`, `PLACES`, `SCALES`, `EFFECTS`, `ENDINGS`, `facts`), `ui.js`/`ui.css` (плашки,
  тосты, шкалы, подпись места, субтитры, карточка заглушки, карта автора), `map.js` (карта — ряд листков над пустой
  кухней), `jump.js`, `chapters/` (`prologue`, `1`, `2`, `3`), `letter.js` (письмо), `minigames/` (`stub.js`,
  `all.js`), `check/run.mjs`.

## Свои отличия от каркаса

- **Её китайский** (§1) — на `{spoken}` движка (ветка moood `engine3-test-all`): где Джек понимает, реплика — её смысл
  на языке игры (показан, переведён), голос говорит `spoken` — китайский, как написан (`g.say('mom', 'Hold it.
  Quiet.', {spoken: '拿着。别出声。'})`). Где не понимает («Язык дома» 0, главы 2–3: её слова Лаоху, ночная
  скороговорка, песня, гид) — реплика сам китайский, без `spoken`: виден и слышен как есть, смысла нет. Своего слоя
  субтитров у игры больше нет.
- **Шкалы** (§8) задаются одним выбором и больше не двигаются: «Язык дома» (1.3: english 0, run 1, chinese 2),
  «Зверинец» (1.6: attic 0, laohu 1, all 2). Видны слева внизу с момента выбора — название и три значения, текущее
  выделено; при выборе — тост со значением и (впервые) строка, что шкала значит.
- **Реестры** (§12) видны тостами: «Джек знает» (`g.know` — правила зверей, Цинмин, «на один раз», письмо), «Обещание»
  (`g.promise` — «Потом расскажу», «Вечером сожжём», «Вернусь в пятницу», «Отнеси Лаоху домой», «Тигра потом отнесу») и
  «Обещание» с исполнением (`g.kept`). Предметы — в плашках и ключах сцен (`laohu_ear`, `crane`, письмо из рук в руки).
- **Мини-игры** (стадия 5) — настоящие, на языке мини-игр (`minigames/`, `hands.js` как у «Кентервиля»); каждая
  возвращает `{missed}` — след провала (ухо, шов, кривой слиток, кривой знак, загнутый край). Пропуск (⏭) — «сыграно».
- **Куски сцен** (стадия 5): каждый шаг открывает сцену на куске (`g.scene(place, {beat})`, `piece()`), реплики — на его
  моментах. Плашек нет; рассказчика нет: время — вторая строка названия главы, внутреннее — тосты «Джек знает».
- **Карта** после глав 1, 2, 3 (§10; после главы 3 — уже после финала, на её листке строка «Финал»). Пролог без выборов —
  после него сразу глава 1. Под выбором на карте — строка §10 «что сделал — что вышло» (`came` у варианта в главе).
- **Таймер** только в 1.3: 8 с, дуга на знаке; не выбрал — «Убежать» (`within`/`otherwise`).
- **Голос в чужом теле:** `jack_grown` говорит из `jack` сцены (`story.js BODY`) — в палате и на площади `jack` взрослый.

## Места — одна карта

`story.js PLACES`: место сценария → папка сцены мира. Все места — свои сцены (стадия 5): `kitchen` С2, `room` С3
(`jack-room`, моменты по ключу `moment`), `yard` С1, `stop` (двор в сторону улицы: `view` street — его открывает кусок
`stop`), `ward` С5, `hallway` (палата, `view` corridor), `house` (кухня через год), `bare` (комната через год),
`attic` С4, `square` С6, `porch` (двор через год). Год спустя и Джек пяти лет — ключи сцен `year`, `young` (их ставят
куски). Подписей «на самом деле» больше нет.

## Люди и голоса

`bespoke/people.json` (голоса Gemini, выбраны без согласования, могут повторять голоса других игр): `jack` (Zephyr —
мальчик 5–10), `jack_grown` (Iapetus), `mom` (Vindemiatrix; и китайский, и медленный английский с акцентом), `dad`
(Algieba), `mark` (Fenrir), `mark_grown` (Umbriel), `kids` (Puck — мальчишки на остановке), `nurse` (Sulafat),
`translator` (Gacrux; китайский северный и язык игры с лёгким акцентом), `guide` (Alnilam). Озвучено студией по всем
репликам (`check` → `make_missing`), оба языка.

В кадре — те, кто есть в сцене: кухня `mom`, `jack`, `dad`; двор `mom`, `jack`, `mark`, `dad`; палата `mom`, `jack`,
`dad` (возраст — сцены); площадь `jack`, `translator`, `guide`, `tourist_cap`, `tourist_hat`, `tourist_coat`. Без тела
пока: Джек пяти лет (в прологе стоит десятилетний; плашка говорит «ему пять»), медсестра, мальчишки на остановке,
взрослый Марк (голоса).

## Главы и шаги

| Глава | Шаги | Выборы |
| --- | --- | --- |
| Пролог «Лаоху» | робот; ладони (М1); зверинец; «потом» | — |
| 1 «Мусор» | слитки (М2); рыцарь (М3); двор; сумерки; скотч (М4); вопрос; коробка; калитка | `yard` english / chinese / run (8 с → run) → «Язык дома»; `asked` asked / silent; `box` attic / laohu / all → «Зверинец» |
| 2 «Хороший день» | у двери палаты; палата; о чём; поезд; ночь / поезд; рука (М5) | `talk` grandma / forty / hand; ⚑ `train` stay / go |
| 3 «Цинмин» | коробки; Лаоху (М6); площадь; письмо (М7); отец; иероглиф (М8); Лаоху; финал (финальная мини-игра); последнее слово | `father` all / apple / later; ⚑ `laohu` fold / letter / smoke |

Письмо (3.3) — `letter.js`: абзацы по id, каждый написан целиком для каждого чтеца: `translator` (по-китайски, с
субтитром), `mom` (её голос, по-китайски, с субтитром), `en` (переводчица переводит вслух на язык игры). Кто читает —
«Язык дома»: 2 — переводчица два первых абзаца, дальше мамин голос; 1 — переводчица, последняя строка — мама; 0 —
переводчица переводит, мамин голос — только «爱».

## Финал и метки

- `facts`: `ending` — по `laohu`: fold → «Тигр», letter → «Письмо», smoke → «Дым»; форма — по `train`; детали — `lang`,
  `zoo`, `father`, метки `ear` (М3), `seam` (М4), `crooked` (М8), `ingot` (М2).
- Метки-тосты — короткие фразы при выборе; на карте под выбором — строка §10.

## Проверка

- `node games/the-paper-menagerie/bespoke/check/run.mjs` — все 972 пути (по 324 на финал): места и сцены, люди, ключи
  сцен и людей, точки выборов и заглушек (точки частей каста — `jack#letter`, `translator#letter` — из
  `modules/cast.js`), кто говорит, один финал на путь и тот, что по правилу §11, на каждом пути сделаны все семь
  выборов, шкалы заданы; `PLAYS` (шесть путей автора) кончаются как подписаны — и ещё раз со всеми мини-играми
  проваленными (метки `ear`, `seam`, `crooked`, `ingot` ставятся).
- `moood-check` (`packages/check/cli.js`) и `check` студии — тексты и русский.

## Стадия 5 — сделано

Места — свои сцены; шаги — на кусках (`r3/menagerie-pieces-a`: кухня, двор, комната, чердак; `-b`: палата, площадь,
люди и ключи); мини-игры — настоящие. Тексты, выборы, шкалы, финалы стадии 3 — те же; плашки ушли.

---

## Stage 5 — pieces

The contract between the game (`games/`, the game's author) and the scenes (`worlds/`, the pieces' author). Written
2026-10-29 at the end of stage 3, before either side codes stage 5; a change to it is agreed and written here first.
The way pieces work is Canterville's (`r3/canterville`: `docs/new-games/kentervilskoe-prividenie/game.md`, «Stage 5 —
pieces»; the world module `beats` of «Летняя книга»): the key `beat` names a piece, it plays from its `from` (or on from
the one before, `after`); the scene tells `<piece>:<moment>` at its moments and `beat:<piece>` at its end; it ends in
a living pose. The game opens a scene on a piece (`g.scene(place, {beat, here, moods, keys})`), says the lines at the
moments named, then plays choices and mini-games in the pose the piece ends in. `here` and `moods` are the game's;
every other starting value is the piece's. Each scene's `notes.md` gets a «Contract for the check» block (pieces with
`after`, `tells`, `seconds`; points; keys) — the game's `check/run.mjs` reads it. Faces must read: lit, bold.

### Asks of the world

1. **A year on, by a key** (kitchen, yard — as Jack's room's `moment: packed` already does): `year` 0/1 — 1 dresses the scene's people as chapter 3 has them
   (`jack` → the cast's `jack_grown` without the suit bag, `dad` → `dad_grey` without the book, `mom_here` false), done
   by the scene's script (`scene.kit.cast`), as the showcases do now. Without it a game cannot show chapter 3 at home
   (the game sets keys, it cannot name a look).
2. **Jack at five** (prologue): the cast's `jack_five`, and the kitchen's and Jack's room's key `young` (bool) dressing
   `jack` so.
3. **People without a body yet:** `mark_grown` (Mark at twenty-two, a car and a bag; 3.4, across the street — the yard
   seen toward the street, see 4), `nurse` (2.1, the corridor), `boy_a`, `boy_b` (1.7, the bus stop).
4. **The yard toward the street** (1.7 the bus stop and the bus; 3.4 Mark's house, his car; the gate): a second view
   of the yard (`view`: `house` — the present picture — / `street`), or the camera turned by the pieces.
5. **The hospital corridor** (2.1, the payphone in 2.3а): a view of the ward's own (`view: corridor`) or a small scene;
   people `jack`, `dad`, `nurse`.
6. **Keys for the things** (the game sets them per step):
   - kitchen: `wrapping` (bool: the torn Christmas paper on the table, П.1–П.3), `robot` (bool: the broken wind-up
     robot), `ingots` (0..1: the yellow paper and the folded ingots on the table, 1.1), `scraps` (bool: Laohu's red
     scraps on the oilcloth, 1.5), `tape` (bool: the roll), `laohu` (`none` / `alive` / `taped`: the tiger on the
     table, whole or taped), `laohu_ear`, `laohu_seam` (bool: the «Ухо» and «Шов» marks — one ear; a crooked seam, he
     lists);
   - yard: `ingot_named` (bool: his ingot in the fire, 1.4, seen), `plate_step` (bool: the plate of buns left on the
     step), `knight` (`lit` / `wet`: the sword lit; dripping, out), `laohu_yard` (`none` / `porch` / `gate`: Laohu on
     the porch in 1.2, limping to the gate in 1.7), `window_animals` (bool: goats and the buffalo in Jack's window,
     1.7, «Зверинец» 2), `letter` already the cast's part;
   - ward: `laohu_here` (bool: the tiger on the nightstand — gone after 2.3а «Остался», in 2.4), `menu_house` (bool:
     the paper house on the nightstand, 2.4 «Уехал»), `menu` (`none` / `flat` / `half`: the hospital menu on the
     blanket, 2.3б), `suit_on_chair` (bool: the suit bag on the chair's back, 2.3–2.4 «Остался»), `lamp` (is);
   - Jack's room (С3): `animals` (`shelf` / `box` / `bed`: where the menagerie is, 1.6), `mark_light` (bool: the light
     across the street), `laohu_room` (`pillow` / `under_hand` / `box` / `shelf`), `bare` (chapter 3), `shoebox`;
   - attic (С4): `box_stir` (0..1: the shoebox trembling), `light` (the dusty window light);
   - square: as it is (the letter by `_with`; the guide's flag).
7. **Laohu himself** — an element (layers and their animation), not a person (§2): asleep (paper), awake (breathing,
   walking a few steps, limping — worse with `laohu_seam`; one ear with `laohu_ear`), torn (scraps), **unfolding** —
   the crooked fold at the tail first, then the others one by one (3.2: a key `unfold` 0..1 on Jack's lap), **the sheet**
   — flat, warm, trembling along its folds (`tremble` 0..1), her columns, the old tape, the overlapped tear and its
   clear strip (`tear`: `taped` / `open` / `curled`), **folding back** into the tiger (finale «Тигр»: `fold` 0..1),
   **burning** (finale «Дым»: in the bucket, `fire`; a striped shape passing in the smoke: `stripes` 0..1). The other
   animals: goats, deer, buffalo, shark, cranes, frogs — awake (walking) / asleep (paper): `menagerie_sleep` 0..1 (3.6:
   they lie down one by one).

### New motions (Kimodo; a loop unless «once»)

| name | prompt | s |
| --- | --- | --- |
| `squat_comfort` | A man squats beside a small child and pats the child's back | 5 |
| `cry_child` | A small child stands crying, rubbing the eyes with both fists | 5 |
| `hold_palms` | A child holds both cupped hands out in front of the chest, very still, looking down into them | 6 |
| `tear_paper` (once) | An angry boy grabs something from the ground and tears it apart with both hands, twice | 3 |
| `throw_down` (once) | A person throws something down onto the ground in front of them | 2 |
| `run_off` | A child runs away fast | 3 |
| `sit_step` | A person sits on a low step, forearms on the knees | 6 |
| `drop_in_fire` | A person standing drops small things one by one into a bucket in front of them | 6 |
| `knock` (once) | A person knocks on a door in front of them three times | 3 |
| `hold_down` | A seated person holds something flat on the table in front of them with both hands | 6 |
| `write_palm` (once) | A person takes another's hand and traces a sign on the palm with a finger | 4 |
| `hammer` | A man kneels and hammers at a board in front of him | 4 |
| `carry_box` | A person carries a box in both arms, walking | 4 |
| `wave` (once) | A person waves a hand at someone across the street | 2 |
| `phone_call` | A person stands at a wall phone, the receiver at the ear, head bowed | 6 |
| `doze_chair` | A tired man sleeps sitting on a chair, the head dropped forward | 6 |
| `hold_hand_bed` | A seated person holds the hand of someone lying in bed with both hands | 6 |
| `tape_box` | A person tapes a cardboard box shut, pulling tape across the top | 4 |
| `sit_floor` | A person sits on the floor, legs crossed, something in the lap | 6 |
| `stroke` | A seated person slowly strokes a small animal in the lap | 5 |
| `take_down` (once) | A person reaches up above the head and lifts down a box with both hands | 3 |
| `peel` | A seated person slowly peels a strip of tape off a sheet of paper | 5 |
| `write_step` | A person sits on a step writing on a sheet on the knee | 6 |
| `fold_sheet` | A person sitting folds a sheet of paper carefully with both hands | 6 |
| `smooth_sheet` | A person sitting smooths a sheet of paper on the step beside them with the palm | 5 |
| `hold_over_fire` | A person holds a sheet of paper over a bucket at arm's length, then lets it go | 5 |
| `palm_on_tree` | A man stands with his palm flat on the trunk of a tree, head down | 6 |
| `handshake` (once) | Two people shake hands | 3 |
| `hum_carry` | A person walks slowly, cradling a small animal in the crook of the arm | 5 |

Existing (cast.md): `stand`, `walk`, `folding`, `hands_in_pockets`, `sitting_on_bed`, `reading_seated`,
`showing_suit`, `holding_toy`, `crouch_scraps`, `offer_hand`. The pieces' author may take a nearer existing one where
Kimodo fails, and says so in cast.md.

### Pieces

Each: **id** · scene · from · who moves · what happens · seconds · shot · lines (the game says them at the moment
named) · tells. «M» — the mini-game is played after the piece, in its end pose.

**Prologue**

- `robot` · kitchen · evening, `wrapping`, `robot`, `young`; Jack at the table `cry_child`, Dad `squat_comfort` by him,
  Mom behind the table · Mom picks a red sheet, `folding` without looking · 10 · wide → medium on her hands · at
  `robot:dad`: Dad «We’ll buy another one tomorrow» · `robot:dad`, `robot:fold`
- `palms` · kitchen · after `robot` · Mom puts the tiger in Jack's palms (`write_palm`-like hand-over), Jack `hold_palms`
  · 5 · close on the palms · at `palms:give`: Mom «拿着。别出声。» · `palms:give`; then **M1** (`laohu` alive at its end)
- `menagerie` · kitchen · after M1 · Laohu jumps on the paper; Jack reaches for a fold, Mom takes his fingers; Mom sings,
  Laohu walks in time; the insert: goats on the sill, the deer, the buffalo, the shark; Dad in the armchair snoring,
  Laohu growls · 30 · medium → the inserts → wide · at `menagerie:name`: Mom «老虎。», Jack «老虎！»; at
  `menagerie:dad`: Dad «How she does it…»; at `menagerie:fold`: Mom / Jack / Mom (unfold); at `menagerie:song`: the song
  · `menagerie:name`, `menagerie:dad`, `menagerie:fold`, `menagerie:song`, `menagerie:snore`
- `bedtime` · room · night, `young`; Jack in bed, Laohu under his hand, Mom on the edge · she straightens the blanket ·
  14 · close on the two · at `bedtime:ask`: the three lines; at `bedtime:blanket`: «很远。以后再告诉你。» ·
  `bedtime:ask`, `bedtime:blanket`

**Chapter 1**

- `ingots` · kitchen · morning (`lamp` 0), `ingots` 1; Mom and Jack sitting at the table (`fold_sheet`) · 10 · medium on
  the table · at `ingots:say`: Mom «今天是清明…» · `ingots:say`; then **M2**; then `ingot_name` · Jack writes on his
  ingot; Mom laughs (`laugh`); Laohu bats at the paper · 8 · close · at `ingot_name:write`: Jack's line; at
  `ingot_name:call`: Mark «Jack! Come out!», Mom «去吧…» · `ingot_name:write`, `ingot_name:call`
- `knight` · yard · morning, `knight` lit, `laohu_yard` porch, `scraps` false; Jack and Mark on the grass · Laohu pounces,
  the knight into the puddle (`knight` wet); Mark `tear_paper`, `throw_down`; `scraps` true, the wind carries them;
  Jack `crouch_scraps` · 14 · wide → medium on Mark → wide · at `knight:show`: «My dad sent me this»; at `knight:tear`:
  «It’s trash…» · `knight:show`, `knight:tear`, `knight:wind`; then **M3**
- `plate` · yard · the 1.3 default (as the scene is now) · Mom comes down the steps with the plate, squats, holds out
  her hand · 8 · wide → close on her face at the end · at `plate:hand`: Mom «给我。我来修…»; then Mark's two lines ·
  `plate:hand`, `plate:face`; then the choice (8 s)
- `yard_english` · yard · after `plate` · Mom freezes, puts the plate on the step (`plate_step`), palm open; Jack puts
  the scraps in it; Jack and Mark walk out through the gate · 12 · close on Mom → wide, Mom alone on the step · at
  `yard_english:freeze`: «Okay. Eat, please»; at `yard_english:go`: Mark «Come over to mine…» · `yard_english:freeze`,
  `yard_english:go`
- `yard_chinese` · yard · after `plate` · Jack gives her the scraps; Mark mimics (a mocking motion), walks off; Mom
  `sit_step` by Jack, a bun · 12 · medium · at `yard_chinese:give`: Jack «妈妈，你修好它。»; at `yard_chinese:go`: Mark
  «Fine, sit there…» · `yard_chinese:give`, `yard_chinese:go`
- `yard_run` · yard · after `plate` · Jack `run_off` into the house, the door bangs; Mark goes; Mom stands, puts the plate
  down · 10 · wide · at `yard_run:door`: Mark «Psycho» · `yard_run:door`, `yard_run:plate`
- `fire` · yard · dusk (`dusk` 1, `porch_lamp` 1, `house_lights` 1, `fire` 1, `ingot_named`); Mom at the bucket
  `drop_in_fire`; english: Jack through the gate, past, turns at the porch; chinese: Jack beside her `drop_in_fire`;
  run: Jack in his window (`jack_a` −4.4, `jack_d` 8.85), Mom looks up · 12 · wide → close on the ingot in the fire ·
  english at `fire:pass`: «Dinner soon»; chinese at `fire:speak`: Mom «外公外婆…», Jack «你们好。» · `fire:pass` /
  `fire:speak` / `fire:window`, `fire:ingot`
- `dad_home` · yard · after `fire` · Dad walks in, stands by her, `dad_reach` her back; then (english, chinese) to Jack
  on the porch · 10 · wide → medium on Dad and Jack · at `dad_home:talk`: his line · `dad_home:back`, `dad_home:talk`
- `knock` · room · night; Jack on the bed; Dad behind the door (unseen) · a knock, then a plate set by the door · 8 ·
  medium on Jack · at `knock:knock`: «What happened?»; at `knock:plate`: «Okay. Whenever…» · `knock:knock`,
  `knock:plate`
- `tape` · kitchen · evening, `scraps`, `tape`; Mom sitting, laying the scraps · Jack sits; `hold_down` · 8 · medium on
  the table · at `tape:now`: Mom's two lines · `tape:now`; then **M4**; then `breathe` · Mom breathes, Laohu stands
  (`laohu` taped), limps (`laohu_seam`) · 6 · close on the tiger · `breathe:up`; then `palm` · Mom's words (by the
  yard), `write_palm` · 12 · close on the hands → her face · at `palm:say`: her lines; at `palm:sign`: «爱。» ·
  `palm:say`, `palm:sign`
- `question` · kitchen · after `palm`; Dad in the doorway taking off his jacket · 4 · medium on the three · — ·
  `question:door`; then the choice
- `asked` · kitchen · after `question` · Mom's hand stops; she looks at Dad; Dad's line; he goes; a hammer from the porch
  (sound); Jack's question; her «later»; Jack's crooked smile · 16 · close on Mom → Dad in the door → close on Jack ·
  at `asked:look`: Mom's answer; at `asked:dad`: Dad «She chose…»; at `asked:hammer`: Jack's question, her answer ·
  `asked:look`, `asked:dad`, `asked:hammer`
- `silent` · kitchen · after `question` · she waits; he strokes Laohu; she hums; Dad comes to the table, sits; Laohu
  limps to him · 12 · medium · at `silent:dad`: «So, is the tiger alive?» · `silent:dad`
- `box_night` · room · night, `mark_light`, `laohu_room` pillow (`laohu_seam`: he keels over) · 6 · medium on the bed ·
  — · `box_night:end`; then the choice; then by it `box_attic` (Jack carries the box to the hatch; the box scratches,
  then still — 8), `box_laohu` (the others into the box; Laohu asleep under his hand — 8), `box_all` (the animals on
  the shelf and the sill; goats on the blanket; Laohu under the covers — 8)
- `stop` · yard toward the street (ask 4) · Monday morning; the bus stop: Mark, `boy_a`, `boy_b`; Mom on the porch ·
  by the yard: english — Mark waves, Jack sits with them laughing; chinese — the boys mock, Jack apart, alone on the
  bus; run — they jeer, the bus comes · with `laohu_yard` gate (Zoo 1–2): Laohu limps to the gate, falls (`laohu_seam`),
  back to Mom at her «老虎。»; Zoo 2: `window_animals` · 20 · wide → medium on Jack · the lines at `stop:mark`,
  `stop:laohu`, `stop:window` · `stop:mark`, `stop:laohu`, `stop:window`, `stop:bus`

**Chapter 2**

- `door` · ward, view corridor (ask 5) · Dad with oranges, Jack with the bag (`showing_suit`) and the ticket; the nurse
  passes · 20 · medium on the two, the nurse crossing · the lines at `door:dad`, `door:nurse`, `door:ticket`,
  `door:book`, `door:tiger` · the same tells
- `ward_in` · ward · evening (`lamp` 1), `laohu_ear`, `crane` by Zoo; Dad to his chair · 6 · wide · then the greeting at
  `ward_in:greet`; then `once` · Jack takes the tiger, his finger on the crooked fold; Mom lifts his fingers off; she
  puts it back; «Suit? Show me» — the sleeve · 14 · close on the tiger and the hands → her face · at `once:touch`:
  «别碰。这个——只能一次。»; at `once:suit`: her two lines · `ward_in:greet`, `once:touch`, `once:suit`
- `talk_grandma` / `talk_forty` / `talk_hand` · ward · after `once` · (grandma) she looks at Laohu, falls silent,
  coughs, Dad looks up — 12; (forty) she laughs, surprised at herself — 10; (hand) Jack sits, `hold_hand_bed`, she
  reaches for the tiger, can't — 14 · close on her · lines at `talk_*:say` · `talk_*:say`, `talk_*:end`
- `coat` · ward · darkening (`lamp` 0.6); Dad `walk`s to the door putting his coat on · 6 · wide · at `coat:dad`: «Let’s
  go…»; at `coat:mom`: her «Go…» · `coat:dad`, `coat:mom`; then the choice
- `stay` · ward · after `coat` · Jack hangs the bag on the chair (`suit_on_chair`), sits on the bed, takes her hand; Dad
  nods, goes; she takes her hand away, turns to the window · 14 · medium → close on her back · at `stay:say`: «I’ll stay,
  Dad»; at `stay:turn`: «傻孩子。» / «好吧。» · `stay:say`, `stay:turn`
- `go` · ward · after `coat` · Jack squeezes her hand, walks to the door, looks back; she looks at the window · 10 ·
  medium → wide from the door · at `go:hand`: «I’ll be back on Friday», «去吧。» · `go:hand`, `go:door`
- `night` · ward · 3 a.m. (`lamp` 0.3) · she wakes, looks at the bag; Jack rehangs it; she looks at the tiger, then at
  him; she falls asleep (`eyes_closed`) · 40 · close on her face, the bag, the tiger · lines at `night:bag`,
  `night:tiger`, `night:talk`, `night:last` · the same tells
- `phone` · ward, view corridor · morning; Jack `phone_call`; Dad comes down the corridor with oranges · 14 · medium ·
  at `phone:dad`: «Gave it away?» … · `phone:dad`, `phone:pocket`
- `menu` · ward · night, Jack and Dad gone; Mom at the window, folds the menu in half (`menu` half) · 8 · medium · at
  `menu:door`: Dad (off) «I’ll take the tiger…» · `menu:door`
- `friday` · ward · night, `lamp` 0.3, `laohu_here` false; `menu_house` (went) / `suit_on_chair` (stayed); Dad
  `doze_chair`, Mom asleep · Jack in with his bag (went), sits · 12 · wide → close on the nightstand · lines at
  `friday:back`, `friday:house` · the same tells; then **M5**; then `silence` (the lamp lower, 6)

**Chapter 3**

- `boxes` · kitchen · `year` 1, `packed`, `day` 1, `suit_bag` (stayed), `menagerie` sill (Zoo 2); Dad `tape_box` · 16 ·
  medium · lines at `boxes:dad`, `boxes:suit`, `boxes:sill` · the same tells
- `wake_attic` (Zoo 0) · attic · `box_stir` 1; Jack `take_down` at the hatch · 6 · medium · `wake_attic:box`; then
  `wake_room` · room · `bare`, Jack `sit_floor`, the box opens, the dusty animals out · 8 · `wake_room:out`
- `wake_shelf` (Zoo 1) · room · `bare`, Laohu stretching on the shelf; a rustle above · 6 · `wake_shelf:stretch`
- `wake_house` (Zoo 2) · room · `bare`; then the kitchen `menagerie` awake, Dad in the doorway with a frog
  (`dad_with` frog, `offer_hand`) · 10 · at `wake_house:call`: «Jack!..» · `wake_house:call`, `wake_house:frog`
- `unfold` · room · Jack `sit_floor`, Laohu comes, rubs (`laohu_ear`, `laohu_seam`) · 4 · close · then **M6** (`stroke`);
  then `open` · Laohu lies in his lap and unfolds (`unfold` 0→1: the tail fold first), the sheet trembling · 12 · close
  on the lap → the sheet (her columns, the tape, the tear) · `open:tail`, `open:flat`
- `her_hand` · kitchen · `year` 1, `packed`; Jack walks through with the sheet; Dad · 6 · medium · at `her_hand:dad`:
  «That’s her hand», «I’ll find someone…» · `her_hand:dad`
- `bench` · square · Jack with the letter (`jack_with` letter), the woman on the bench looks at her watch; the guide
  calls · Jack's line(s); she takes the letter (`translator_with`), surprised · 14 · wide → close on her face · lines
  at `bench:ask`, `bench:warm`, `bench:wind` · the same tells
- `reading` · square · after `bench` · close on her face reading · 6 (the game reads the letter's first half over it,
  as long as the voices) · · `reading:start`
- `tear` · square · after `reading` · she stops at the tear, the insert of the sheet's back opens (`letter_close` 1,
  `tear` the game's) · 4 · close · `tear:open`; then **M7** there; then the letter's second half (changed 2026-10-29
  with r3/menagerie-pieces-b: the tear is its own piece)
- `reading_end` · square · after `tear` · the insert shut; Jack takes the sheet back, flat; the guide calls; she walks
  to the coach · 22 · · `reading_end:back`, `reading_end:guide`, `reading_end:gone`
- `mark` · yard toward the street · `year` 1, `dusk` 1, `sold`; Mark grown at his car · english: he crosses, pats Jack's
  shoulder; chinese: looks past, gets in; run: a nod · 10 · wide · at `mark:say` · `mark:say`
- `step` · yard · `year` 1, `dusk` 1, `sold`, `shoebox` 1|2, `menu_house` (went); Dad on the top step (`dad_on`,
  `sitting_on_bed`), the last box · Jack with the letter · 6 · medium · at `step:ask`: «What does she write?» ·
  `step:ask`; then the choice; then `father_all` (Dad to the apple tree, `palm_on_tree` — 12), `father_apple` (he
  smiles — 8), `father_later` (`carry_box` into the house — 8)
- `sign` · yard · Jack `write_step` on the step · 4 · close on the sheet · then **M8** (an insert: her 爱, his under it)
- `sunset` · yard · `dusk` 1 → deeper; `menagerie_sleep` 0→1 (the goat lies down, the deer); the sheet `tremble`;
  the bucket · 14 · close on the shoebox → the sheet → the bucket · `sunset:goat`, `sunset:fold`; then the choice
- `tiger` · yard · Jack `fold_sheet` · **M fold** · then `fold` 0→1, Laohu stands on the step, shakes, purrs; Jack
  `hum_carry` · 14 · close → medium · at `tiger:hum` (Language 2) · `tiger:up`, `tiger:hum`
- `letter_end` · yard · the porch lamp; **M smooth**; the sheet lies flat, `tremble` 0 · 10 · close on the sheet ·
  `letter_end:flat`
- `smoke` · yard · `fire` 1 at the bucket; Jack `hold_over_fire` · **M flame** · the sheet burns; `stripes` in the
  smoke · 12 · medium → up through the apple tree · at `smoke:say`: Jack's words to her · `smoke:say`, `smoke:stripes`
- `dad_end` · yard · by `father` and the finale (scenario §9): all — at the tree / beside him on the step with the
  phrasebook / his hand on Jack's back; apple — waves from the porch / gives the phrasebook / «That’s how she did it»;
  later — locks the door, a handshake at the gate / carries the box to the car / opens the window · 12 · wide · at
  `dad_end:say` · `dad_end:say`; then Jack's two last lines over the last shot (`dad_end:last`)

### Mini-games (each in the pose its piece ended in; the game sets the keys named)

The game side is written (`minigames/*.js`, on the language of mini-games, `hands.js` as Canterville's); these are
the points and keys each needs of its scene — the branch check lists what a scene lacks as «waited for».

| id | § | scene, after | gesture | marks on (points) | keys the game drives | s | a miss leaves |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `palms` | М1 | kitchen, `palms` | hold | `jack#hands` | `laohu_breath` 0..1 (the tiger warms, its sides rise; 1 — it stands) | 8 | the tiger rolls off, stands up all the same |
| `ingot` | М2 | kitchen, `ingots` | fold along the line | an element `ingot` (the yellow square on the oilcloth, close) with points `ingot#start`, `ingot#end` | `ingot_fold` 0..1 | 6 | a crooked ingot; her «给外婆，这样也很好。» (mark `ingot`) |
| `scraps` | М3 | yard, `knight` | tap ×5 | the yard's `scraps` element's points `scraps#s1` … `scraps#s5` | `scraps_left` 5..0 (that many still on the grass) | 8 | the ear into the drain: mark `ear` (`laohu_ear` everywhere after) |
| `tape` | М4 | kitchen, `tape` | hold | `laohu` (the element) | `tape_laid` 0..1 (her strip along the seam) | 6 | a crooked seam: mark `seam` (`laohu_seam`) |
| `hand` | М5 | ward, `friday` | hold, then let go | `mom#hand_r` | `jack_reach`, `dad_reach` (persons') | 10 + 8 | Dad's palm on top, they let go together |
| `stroke` | М6 | jack-room, `unfold` | lead slowly | `laohu` (the element) | `laohu_purr` 0..1 | 5 | he grumbles, lies down all the same |
| `peel` | М7 | square, `tear` | lead slowly | `translator#letter` | `tear` `taped` / `open` / `curled` (the clear strip over the overlapped tear) | 5 | the edge stays curled: «看不清。大概是——“一个人”。» |
| `sign` | М8 | yard, `sign` | trace | an element `hanzi` (the bottom of her sheet, close: her 爱, room under it) with points `hanzi#start`, `hanzi#end` | `hanzi` 0..1 (his sign drawn), `hanzi_crooked` bool | 10 | crooked, and so it stays (mark `crooked`; the finales show it) |
| `fold` | final | yard, `tiger` | fold (four slow pulls) | `jack#letter` | `fold` 0..1 (the sheet folding back into the tiger) | 8 | the folds find themselves |
| `smooth` | final | yard, `letter_end` | lead slowly | `jack#letter` | `tremble` 1..0 | 8 | the sheet lies flat by itself |
| `flame` | final | yard, `smoke` | hold, then let go | `jack#letter` | `fire` 0..1 (is), `jack_reach` (to `apple#fire`) | 8 | the flame takes it by itself |
