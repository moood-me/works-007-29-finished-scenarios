# Человек, который сажал деревья — игра в терминах кода

Стадия 3 (`moood-me/moood:docs/writing/game-stages.md`): вся игра на трёх сценах мира, люди стоят; где по сценарию
кусок сцены — плашка с «Дальше»; мини-игры и ведения — заглушки (кружок и карточка); места и годы, которых ещё нет, —
в готовой сцене с подписью. Сценарий — `scenario.md`.

- **Игра:** `games/the-man-who-planted-trees` (bespoke; английский — исходный язык кода и текстов, русский — перевод
  в `bespoke/lang/ru/strings.json`, русские реплики и плашки — слово в слово из сценария). Мир —
  `worlds/the-man-who-planted-trees` (`game.json` `world`).
- **Каркас** — «Кентервильского привидения» стадии 3 (`r3/canterville-game`, `805e2d1`) с его поздними правками
  (`r3/canterville`: финал уходит в чёрное с именем финала; строки карты — с тем, что вышло из выбора; метка выбора не
  теряется за краем кадра): `bespoke/game.js` (главы, карта, переигровки, карта автора, сохранение), `story.js`
  (`context`, `PLACES`, `SCALES`, `EFFECTS`, `ENDINGS`, `facts`, `linaAfter`), `ui.js`/`ui.css` (плашки, тосты,
  шкалы, подпись места, карточка заглушки, карта автора), `map.js` (карта — ряд листков над домом пастуха в сумерках,
  никого нет), `jump.js`, `chapters/`, `minigames/` (`stub.js`, `all.js`), `check/run.mjs`.

## Места — одна карта, по годам

`story.js PLACES`: место сценария в своём году → папка сцены мира и её ключи: у деревни — `time`, у дома, опушки и
ручья — `moment` (скрипт сцены раскладывает момент сценария: год, кто есть, где стоит, в каком облике — notes.md
сцен; `g.scene` открывает сцену на моменте, а `here`, лица и ключи шага кладёт поверх — `bespoke.show` с `then`).
Шаги называют только места, никогда папки; ключи шага могут назвать другой момент того же места. Годы — от начала
игры: 0 (пролог, гл. 1), 6 (гл. 2), 20 (гл. 3), 30 (эпилог). С 2026-10-29 все места на своих сценах
(`r3/trees-village`, `r3/trees-years` влиты); подпись `where` осталась одна — у деревни эпилога (см. ниже).

| Место | Шаги | Сцена, ключи |
| --- | --- | --- |
| `village0` М1 | П.1–П.2, 1.7 | `village` `time` prologue (`home_door` 120 → 180, `mug`, кружка у Лины уходит — `lina_wear {parts: []}`, `wet`; 1.7 `cart`, отец, Лина у колодца) |
| `house0` М2 | П.3; 1.6 | `shepherds-house` `moment` arrival; 1.6 — leaving |
| `inside0` М2 inside | П.4–П.5; 1.5 | `house-inside` `moment` arrival; 1.5 — button |
| `slope0` М3 | 1.1–1.4 | `forest-edge` `moment` planting (1.4: `rod_ground`, прут из рук Эльзеара — точка выбора `rod`) |
| `village6` М1 | 2.1, начало 2.2 | `village` `time` chapter2, `dawn` |
| `stream6` М4 | 2.2–2.4 | `stream` `moment` water |
| `slope6` М3 | 2.5 | `forest-edge` `moment` grove (`own_oak` по «Свой дуб»; Лина — если знает) |
| `far6` М3 | 2.6 | `stream` `moment` far_edge |
| `inside6` М2 inside | 2.7 | `house-inside` `moment` night |
| `edge20` М3 | 3.1; 3.2–3.3 | `forest-edge` `moment` edge; delegation — по пути: `bread`, `hives` stands / hives, `stumps` none / begun, `beeches` slope / row (`beech_row` 13 → 14), мужик с топором |
| `inside20` М2 inside | 3.4 | `house-inside` `moment` evening (`bread_step`) |
| `house20` М2 | 3.5 (Имя) | `shepherds-house` `moment` ranger; empty (приезжие; `door` shut → propped) |
| `stumps20` М3 | 3.5 (Тишина) | `forest-edge` `moment` stumps (`stump_bread`, когда Лина знает) |
| `village30` М1 | Э.1, финал «Рассказ» | `village` `time` epilogue (`stump` dug → planted, `edge` whole / regrown, соседи, дети; «Рассказ» — `rod`) + подпись |
| `house30` М2 | Э.2 (Тишина) | `shepherds-house` `moment` last_silence |
| `hut30` | Э.2 (Имя) | `shepherds-house` `moment` hut |
| `board30`, `pupil30`, `beeches30` М3 | финалы «Табличка», «Ученик», «Два прута» | `forest-edge` `moment` board (`stumps` begun_old, если Лина не знала), pupil, two_rods |

Облики людей по годам — дело сцен (их скрипты по `moment` и, в деревне, по `time`); игра обликов не ставит. Внутри дома (стол, лампа,
сто желудей) — своя сцена `house-inside` (с 2026-10-29).

**Куски (стадия 5).** Шаги в доме, доме внутри, на опушке и у ручья идут на кусках сцен (`piece(g, name, {момент:
реплики})`, контракты — notes.md сцен); плашки, где кусок показывает действие, сняты; оставлены те, что говорят то,
чего сцена не показывает (годы, текст письма и страницы Яна, мысли). Деревня — тоже на своих кусках (с 2026-10-29;
облики людей по `time` — сцена сама; в «Рассказе» страницы тетради — её вставка `pages`, куски `story`, `story_wind`).
«Листы тетради в ведре» («Два прута», опушка) — плашка: вставки страниц у опушки нет; жёлудь в руке (МИ2) — метка
языка мини-игр под пальцем.

## Люди

`bespoke/people.json`: `narrator` (Sadaltager — старый Путник), `traveller` (Achird), `elzeard` (Algenib), `lina`
(Autonoe), `jan` (Alnilam), `father` (Fenrir — отец Лины), `chief` (Puck — Начальник), `ranger` (Orus — егерь),
`axeman` (Rasalgethi — мужик с топором), `visitor_a` (Pulcherrima) и `visitor_b` (Erinome) — приезжие, `boy` (Leda); соседи и дети деревни (`neighbour_a`,
`neighbour_b`, `child_a`, `child_b`) — без реплик. Голоса делает студия, когда страница
говорит реплику (`speak {text, voice, how}`); все реплики (по 147 на язык) озвучены заранее `voice_line` по списку
`moood-check --json`. У некоторых реплик свой `how`.

Люди сцен (id = ключи `people.json`): дом — `elzeard`, `traveller`, `lina`, `ranger`, `visitor_a`, `visitor_b`;
опушка — они же и `jan`, `chief`, `axeman`, `boy`; ручей — `elzeard`, `traveller`, `lina`, `jan`, `chief`, `ranger`;
деревня — `lina`, `traveller`, `father`, `jan`, `neighbour_a`, `neighbour_b`, `child_a`, `child_b`. Из людей игры в
кадре те, кого шаг называет в `here` (остальные моменты сцены — `_here: false`).

## Главы и шаги

| Глава | Шаги | Выборы |
| --- | --- | --- |
| Пролог «Сухо» | пень; лампа | `drink`: drink / silent; `ask`: ask / silent |
| I «Сто желудей» | прут; на камне; прут в земле; пуговица; у двери; спуск через деревню | `rod`: take / wait; `farewell`: back / hand; `tell`: oaks / sheep |
| II «Вода» | опять у двери; ручей; ладони в воде; откуда вода; дубы; клёны; сто, опять | `lina` (полушарнир): told / rested / silent; ⚑ `stay`: stay / go |
| III «Естественный лес» | опушка; делегация; вдоль ряда; сто, медленнее; потом | ⚑ `name`: name / grew / silent |
| Эпилог «Липа» | липа; прут; финал | — |

Пролог и глава I — одна карта (§11): после пролога игра идёт в главу I без карты (`onward` у главы), карта после
главы I раскрывает строки обеих. Названия глав — `g.title` в начале главы («Человек, который сажал деревья», «Сто
желудей», «Шесть лет спустя», «Четырнадцать лет спустя», «Десять лет спустя»).

## Шкалы, метки, финал

- `SCALES`: `path` «Его жизнь: Дорога — Склон», −3…5, старт 0; `word` «Лес: Тишина — Имя», −4…5, старт 0. Сдвиги —
  `EFFECTS` (§8): 1.4 взять прут +1, 1.6 «вернусь» +1, Ш1 ±3; 1.7 «дубы» +1, 2.4 +1 / −1 / 0, Ш2 ±3. Знак шкалы после
  шарнира — всегда его (проверка смотрит). Шкала видна с первого выбора, который её касается (1.4, 1.7), и до конца.
- Метки — выборы (`drink`, `ask`, `rod`, `farewell`, `tell`, `lina`, `stay`, `name`), их тосты — строки карты §11
  («что ты сделал — что из этого вышло»); на карте под каждой развилкой основной линии — эта строка, у Ш2 ещё строка
  Лины (`linaAfter`). Обещания (§9) — метки: `back` (дано 1.6, сдержано 2.5), `year` (дано Ш1 «уйти», сдержано 3.1 —
  тринадцать буков), `tell` (Лина, дано 2.5, сдержано 3.1 — хлеб на камне), `write` (Ян, 3.3). `after` — что Лина
  сделала с именем; `saw` — Лина увидела сама (3.5, Тишина); `ending` — какой финал сыгран.
- `facts`: `drank`, `asked`, `own`, `promised`, `heard`, `knows`, `lied`, `slope`, `named`, `grew`, `learned` (как
  Лина знает к эпилогу: told / jan / saw), `ending` — Склон/Дорога × Имя/Тишина: «Ученик», «Два прута», «Табличка»,
  «Рассказ».
- Финал — последний шаг эпилога; после него последний кадр уходит в чёрное, по нему — название финала, карта выходит
  из чёрного; на карте в эпилоге последняя строка — «Финал» с четырьмя финалами, сыгранный выделен.

## Мини-игры и ведения (`minigames/`, стадия 5)

На языке мини-игр (`hands.js` — «Кентервильского», с двумя своими для ведений: `along`, `taps`). Мини-игры §7: МИ1
`acorns`, МИ2 `hand_in`, МИ3 `stream`, МИ4 `beech`, МИ5 `linden`, МИ6 `hand` — каждая со следом неудачи (`missed`),
и главы его читают: Эльзеар досортировывает сам (плашка), берёт ведро сам (плашка), Лина «Холодной боишься?», Путник
«И так вырастет» (Склон) / выпрямляет бук (Дорога, плашка), Лина «Ну», Эльзеар «Держи» / сам убирает руку (плашка).
Ведения (`guidings.js`, без неудачи): `trunks`, `count`, `row`, `door`, `stumps`. Точки и ключи — таблица в «Stage 5 —
pieces» внизу; она — единственная правда для авторов сцен.

## Проверка

- `node games/the-man-who-planted-trees/bespoke/check/run.mjs` — все 576 путей («story» 192, «rods» 192,
  «plaque» 96, «pupil» 96): места, сцены и их ключи, люди, точки выборов и заглушек, реплики (кто говорит), выборы — те,
  что у главы; на каждом пути все восемь выборов, ровно один финал и тот, что по правилу §10; знак каждой шкалы — её
  шарнира; обещания сдержаны там, где даны; Лина к эпилогу знает на каждом пути; `PLAYS` (восемь путей автора)
  кончаются как подписаны.
- `moood-check` (`moood-me/moood` `packages/check`) — «all right», русский весь; `check` студии.

## Что меняет стадия 5

Только заглушки: строки `PLACES` (на сцены и годы стадии 4), `here` — люди, которых теперь видно; заглушки `all.js`
— на настоящие мини-игры (имена те же); плашки, где кусок сцены, — на куски (ниже). Тексты, выборы, шкалы, финалы —
как есть.

## Stage 5 — pieces

What the game will ask of the scenes at stage 5 — written at stage 3 so that stage 4 builds toward it (the places in
their years, the people, the keys); the pieces and their moments are agreed with the pieces' author before either side
codes, and a change is written here first. Every plate of stage 3 that shows action becomes a piece or a narrator's
line; the lines stay the game's (said at the pieces' moments).

### How a piece works (as in «Летняя книга» and «Кентервильское привидение»)

- The world gets the module `beats` (`works-006-four-scenarios-selected/worlds/the-summer-book/modules/beats.js`,
  `beats.md`); a scene with pieces: its `FILM` in `lib.js`, `script.js` `scene.kit.beats.play(scene, scene.lib.FILM)`.
  The key `beat` names a piece; it plays from its `from` (or on from the one before, if `after` it); the scene tells
  `<piece>:<moment>` at its moments and `beat:<piece>` at its end, and ends in a living pose.
- The game opens a scene on a piece (`g.scene(place, {beat, here, moods, keys})`), says the lines at the moments named,
  then plays choices and mini-games in the pose the piece ends in. `here`, `moods` and the place's year keys are the
  game's; everything else is the piece's `from`.
- Shots: `wide` — the picture camera; `medium` / `close` — `camera_target` + `camera_shot`; faces must read. The
  scenario's close-ups (§4): Elzéard on «Зря» (2.5), «Хорошо»/«Сам» (3.4), «Посажу» (3.4); Jan at Ш2; Lina on «Ты
  знал» (3.3), on the path before the Chief (3.3, Silence), at the stumps (3.5), at the linden.
- Each scene's notes.md gets a «Contract for the check» block (beats with `after`, `tells`, `seconds`; points; keys);
  the game's `check/run.mjs` reads it.

### People (element ids = the game's people.json keys)

`elzeard`, `traveller`, `lina`, `jan` in every scene where the scenario has them, in their year's look (the cast's
`elzeard_61`, `traveller_26`… and the older ages the cast still lacks: Elzéard 75 and 85, the Traveller 50, Lina 47,
Jan 26 — `modules/cast.md`). New: `father` (М1, years 0: a charcoal burner, his cart), `chief`, `ranger` (М3 year 20;
the ranger at М2 year 20 too), `axeman` (М3 year 20), `visitor` (two or three strangers: М2 year 20, М3 year 30),
`boy` (М3 year 30), `neighbours` (two or three, М1 year 30); the dog, the sheep, the bees — elements, no people's
motions.

### Asks of the world (stage 4)

Written before stage 4; `r3/trees-village` and `r3/trees-years` have since made most of it (the scenes' `time` and
`moment`, their notes.md). Still open: the house's inside (the table, the lamp, the acorns), the village people's
looks by `time`, the Traveller's beech planted as a piece (the hole and the sapling).

1. **М1 the village** (`r3/trees-village` — made; what is still asked:) the people's looks by `time` (Lina 23/47, the
   Traveller 26/50 — the scene shows Lina 17 and the Traveller 20 in every time), and, as first asked, years 0, 6, 30: the square with the stump (`square`: stump | mug — the mug
   upside down on it | planting — a hole and a linden sapling | linden), the well (`well`: dry | fountain), charcoal
   heaps and the father's cart (year 0), the empty house at the edge whose doorway they slept in (2.1, year 6), the
   fresh mound (year 6), new roofs, smoke, children (year 30); the slope above it seen (bare | haze of leaves | forest,
   its lower edge `stumps`: none | stumps | stumps with young oaks).
2. **М2 the house** in years 0, 6, 20, 30: sheep (0) → hives (6, 20, 30); `bread` on the threshold (none | bread |
   bread and socks); `door` (shut | open | propped with a stick). **Inside** — the table under the lamp (soup, a heap of
   acorns, acorns in tens, the pail of water; the notebook and the city's letter in 2.7), the window with the slope (in
   2.7 under the moon), Elzéard at the window shaving, sewing a button (1.5) — the house has no interior yet: a room of
   its own (an insert or a second scene `house-inside`), else the table at the door outside.
3. **М3 the slope / forest edge** in years 0 (bare earth, mist, the rod in the earth by a stone), 6 (oaks taller than
   a man, hives at the wood's edge; the far edge: dry maple sticks and tiny beeches), 20 (`edge20` as now; the
   Traveller's row of beeches at the edge — `beeches` 0…14 —, his own slope across the stream; empty hive stands;
   `stumps` at the lower edge; the axeman's bundle), 30 (the board «Лес Эльзеара»; the Traveller's beeches taller than
   a man; old stumps overgrown).
4. **The hut beyond the ridge** (year 30, the Name): a hut, behind it young trees waist-high, ahead a bare slope with
   a new edge of tiny seedlings — a new scene or a variant of М2's plateau.
5. Parts (cast): `rod` (as now), `acorn` (in the fingers), `pail` (Elzéard's, of acorns), `notebook` (the Traveller's;
   Jan's — exists), `letter` (Lina's, 2.4), `mug` (exists), `spade` (Э.1), `axe` and a bundle of wood (3.1), `basket`
   (visitors), a sapling (beech 3.1, linden Э.1).

### Motions (Kimodo; a loop unless «once»)

| name | prompt | s |
| --- | --- | --- |
| `plant_rod` (once) | A person drives an iron rod into the ground with both hands, pulls it out, drops something into the hole and presses the earth with one foot | 5 |
| `shake_flask` (once) | A person lifts a flask to their ear and shakes it, then lowers it, disappointed | 3 |
| `pour` (once) | A person tips a mug in their right hand and pours water onto the ground in front of them | 3 |
| `drink` (once) | A person drinks from a mug held in their right hand, head tipped back | 3 |
| `offer` (once) | A person holds out something in their right hand to someone in front of them | 3 |
| `sit_stone` | A person sits on a low stone, forearms on the knees, looking ahead | 6 |
| `sit_table` | A seated person sits upright at a table with both forearms resting on it | 6 |
| `count_table` | A seated person moves small things on the table in front of them with the right hand, one by one | 6 |
| `shave` | A person stands at a window shaving slowly with a razor in the right hand | 6 |
| `sew` | A seated person sews with a needle, the left hand holding the cloth on the knee | 6 |
| `raise_hand` (once) | A person raises the right hand in farewell and holds it a moment | 3 |
| `nod` (once) | A person nods slowly once | 2 |
| `kneel_water` | A person kneels by a stream with one hand in the water | 6 |
| `write_standing` | A standing person writes in a small notebook held in the left hand | 6 |
| `touch_bark` | A person stands with the right palm laid on a tree trunk at shoulder height | 6 |
| `laugh_short` (once) | A person laughs briefly, once, the shoulders shaking | 2 |
| `embrace` (once) | Two men embrace briefly and step apart (fallback: a hand on the other's shoulder, `_reach`) | 3 |
| `spade` (once) | A person drives a spade into the ground with one foot and leans on it | 4 |
| `carry_pail_walk` | A person walks carrying a pail in the right hand | 2 |

### Pieces

Each: **id** · place · what happens · moments (where the game says its lines) · then (a choice or a mini-game in the
pose it ends in).

**Prologue**

- `flask` · village0 · wind, dry grass; the Traveller comes up the road, `shake_flask` · `flask:shake` → narrator «Мне
  было двадцать…»
- `stump` · village0 · Lina by the stump with her mug; a shout behind a wall, a door slams; she raises the mug ·
  `stump:shout` → father «Мой мешок!» · then the choice «Дай попить»
- `drink` · village0 · she holds out the mug, he `drink`s; she sets the mug upside down on the stump (`square` mug) ·
  `drink:look` → «Пей. Ей всё равно»
- `pour` · village0 · she `pour`s on the stump, looks at his flask · `pour:end` → «Смешно, да?…», «Мать посадила…»
- `point_up` · village0 · she points up the slope · `point_up:point` → «Наверху пастух…»
- `climb` · house0 · dusk, the lamp; the Traveller comes up the path; Elzéard at the door; the dog lifts its head;
  Elzéard `offer`s the gourd · `climb:gourd` → narrator «Он не спросил, кто я»
- `table` · house inside · soup, the lamp; Elzéard pours the acorns on the table · then **МИ1**
- `hundred` · house inside · after МИ1, `count_table`; the acorns into the pail · `hundred:end` → «Сто» · then the
  choice «Ты здесь один?»
- `out_to_dog` · house · he gets up, goes out to the dog (`elzeard_here` false at the end) · after «Был сын…»
- `silence` · house inside · he pushes the pail over; both sit · `silence:sit` → narrator «Мы молчали до ночи»

**Chapter I**

- `rod_mist` · slope0 · morning mist; Elzéard with the rod and the pail, `plant_rod` ×3; the dull blow · `rod_mist:blow`
  → narrator «Он сажал дубы» · then **МИ2**
- `stone` · slope0 · both `sit_stone`; his lines and the Traveller's at `stone:sit`, «Тебе пятьдесят пять…» with the
  Traveller counting on his fingers
- `rod_left` · slope0 · Elzéard leaves the rod in the earth and walks off to the sheep · then the choice (on `rod`)
- `took_rod` · slope0 · the Traveller `plant_rod`, clumsy; Elzéard comes back, looks at the hole, plants on ·
  `took_rod:back`
- `counting` · slope0 · Elzéard plants on; the Traveller counts · `counting:count` → «Сорок один…», «Не считай…»
- `button` · house inside · evening; `shave` at the window, then `sew` · `button:sew` → narrator «Пуговицы…»
- `dawn_door` · house0 · dawn; the Traveller on the threshold, Elzéard at the door · then the choice
- `farewell_back` / `farewell_hand` · house0 · `nod`; (hand) `raise_hand`, Elzéard turns to the sheep
- `coal_cart` · village0 · the father loads charcoal on the cart; Lina at the well · `coal_cart:lina` → «Внизу кричат…»
  · then the choice «Что делает пастух?»
- `oaks_laugh` · village0 · Lina laughs (`laugh_short`), the father does not turn; she looks up the slope · `oaks_laugh:father`
  → «Дурак он»
- `pour_again` · village0 · she pours the water on the stump

**Chapter II**

- `by_door` · village6 · dawn in the empty house; the Traveller asleep by the door, Jan in the corner tying his bag; on
  the threshold Jan pats his pocket and goes down the road · moments for his lines
- `haze` · village6 → stream6 · the empty village, the mound; the haze over the plateau · then `water`
- `water` · stream6 · the sound of water; the Traveller comes to the stream; Lina by it (her greeting by the marks)
- `palms` · stream6 · both `kneel_water` · then **МИ3**, then «Первый раз в жизни…»
- `letter` · stream6 · Lina writes (her letter, `write_standing`), looks up the slope · then the choice «Откуда вода»;
  `letter_pocket` (told: the letter into the pocket, they go up), `letter_write` (rested / silent)
- `oaks` · slope6 · among the oaks; birds; then **ведение** `trunks`; Elzéard by the hives (Lina at the wood's edge when
  she knows: `touch_bark`, then she goes down almost running; his «Зря» close)
- `own_oak` · slope6 · Elzéard leads him to a crooked oak by the stone
- `maples` · far6 · the dry sticks, the tiny beeches; Elzéard points
- `hundred_night` · house inside, year 6 · night, the lamp, the acorns; the notebook and the letter on the table, the
  moon on the empty slope across the stream in the window · **ведение** `count` → «Сто» · then ⚑ Ш1
- `stay_laugh` / `go_write` · house inside · the acorns into the pail; (stay) the Traveller laughs at himself, shuts the
  notebook; (go) opens it and writes by the lamp

**Chapter III**

- `edge` · edge20 · the tall forest; (Road) the Traveller plants his beech at the end of his row of thirteen; (Slope) he
  crosses to his own slope; (Lina knows) bread on the stone, empty hive stands, Lina with her pail by the stream
- `axe` · edge20 · (Lina does not know) the hives, fresh stumps; the axeman; Lina steps onto the path between him and
  the forest; «Не ничей!» — the Traveller's loud line; the axeman goes off with his bundle · moments for each line
- `beech` · edge20 / his slope · then **МИ4**
- `delegation` · edge20 · up the path: the Chief, the ranger, Jan, led by Lina; the Chief laughs; Jan recognizes the
  Traveller, `embrace` · moments for the lines
- `the_row` · edge20 · **ведение** `row` along the row; Jan `touch_bark`; the notebook opened, a blank page · then ⚑ Ш2
  (Jan close)
- `named` · edge20 · Jan writes slowly; goes to the Chief and reads; (Lina) her line close, she turns and walks ahead
- `unnamed` · edge20 · Jan writes and shows the page (grew) or grips his shoulder (silent); the Chief reads; Lina puts
  down her pail and stands on the path before him (close); the Chief walks round her and goes down
- `hundred_slow` · house inside, year 20 · (Lina knows) bread and socks on the threshold, he steps over; the lamp, the
  acorns, slower · **ведение** `count` · his close-ups on «Хорошо» / «Сам» / «Посажу»
- `ranger` · house20 · morning; the ranger at the door; Elzéard nods, the ranger goes; Elzéard `laugh_short`
- `empty_house` · house20 · a month / a year on: a trodden path, strangers at the door, the house empty, no hives, the
  door open · **ведение** `door`
- `stumps` · stumps20 · the stumps; Jan counting them, his palm on a cut; he goes down; Elzéard comes down with the rod
  among the stumps · **ведение** `stumps`; Lina at the stumps (bread on a stump / the pail into the hole) — close

**Epilogue**

- `alive` · village30 · the fountain, children, new roofs; (Silence) the stumps and young oaks above; Lina and the
  neighbours at the hole on the square · then her lines, **МИ5** (Lina close at the linden)
- `last_house` · house30 · (Silence) the hives, bread on the porch; Elzéard planting by the porch, slowly
- `hut` · hut30 · (Name) the hut, the young trees behind, the seedlings ahead; Elzéard finishes the row, straightens up
- `rod_held` · house30 / hut30 · he holds out the rod · then **МИ6**; narrator «Через год его не стало…»
- `story` · village30 · the Traveller on the rim of the fountain, the rod beside him, the notebook (a close insert of
  its pages: «Был»; the name written), the wind turning the pages back
- `plaque` · edge30 · the board, visitors reading aloud; the Traveller `plant_rod` under the board; he goes
- `two_rods` · beeches30 · his beeches; he plants with his own rod, Elzéard's rod standing in the earth beside him; the
  pail with seeds wrapped in notebook pages (insert); below, the stumps and young oaks
- `pupil` · edge30 · the visitors round him; «Это вы — Эльзеар?» — «Нет»; the boy with the rod, the Traveller sets his
  hands; across the stream his beeches in uncut grass

### Mini-games and guidings (each in the pose its piece ended in) — as coded (`minigames/`)

The single truth for the scenes' authors: the points every mark stands on (a person's — the engine's `#hands`,
`#hand_r`, `#chest`, the cast's `#rod`; a scene's — an element or a named point) and the keys the game drives. All the
points exist in the scenes now (the branch check finds them); a piece only needs to end with the people there.

| id | § | place, moment | gesture | marks on | keys the game drives | s | a miss leaves |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `acorns` | МИ1 | inside0 `arrival`, after `table` | the table close (`close` 1): tap the 10 cracked ones out (dashed marks); the good heap (a quiet spot) not to be tapped | `table_close#cracked_0…9`, `table_close#heap` | `close`, `acorns` heap → sorted, `cracked_out` (a bit each) | 12 | `{self}`: he finishes the sorting himself (a plate) |
| `hand_in` | МИ2 | slope0 `planting` | pull, ×5: an acorn from `pail#top` to `plant_spot` | `pail#top` → `plant_spot` | — | 12 | `{took}` (3 dropped): he takes the pail himself (a plate) |
| `stream` | МИ3 | stream6 `water` | hold 6 s (keep) | `traveller#hand_r` | — | 7 | `{pulled}`: Lina «Холодной боишься?» |
| `beech` | МИ4 | edge20 `edge`, after `beech` | hold till full (the rod in), then pull slowly ×2 (the earth) | `traveller#rod`, then `new_beech#top` | `new_beech` none → straight (crooked on a jerk); the chapter on the Road: `beech_row` 14, `new_beech` none | 10 | `{crooked}`: Slope — «И так вырастет»; Road — straightened again (a plate) |
| `linden` | МИ5 | village30, after `alive` | hold till full (2 s); let go early twice — missed | `traveller#spade` | — (the chapter plays `planted` after it) | 8 | `{lina}`: Lina «Ну» |
| `hand` | МИ6 | house30 `last_silence` / hut30 `hut` | hold till full, then let go within 15 s | `elzeard#rod` (Elzéard holds the rod) | `traveller_reach` {r: `elzeard#rod`} → null | 10 | `{early}`: «Держи»; `{long}`: he takes his hand away (a plate) |
| `trunks` | guiding | slope6 `grove`, before `oaks` | pull slowly ×4 | `traveller#hand_r` | — | 40 | — |
| `count` | guiding | inside6 after `hundred_night`, inside20 after `count_slow` | the table close (`close` 1, `acorns` counting): 10 taps | `table_close#next` | `close`, `acorns`, `counted` 0 → 10 | 8 | — |
| `row` | guiding | edge20 `delegation`, before `the_row` | pull slowly ×3 | `traveller#chest` | — | 10 | — |
| `door` | guiding | house20 `empty`, after `empty_house` | pull slowly ×2 | `door_glow#handle` | `door` open → shut (the chapter then: propped) | 5 | — |
| `stumps` | guiding | stumps20 `stumps` | hold till full, ×3 | `traveller#rod` | — | 8 | — |

A piece before a mini-game ends with its people as the moment has them (the marks stand on them): Elzéard with the rod
in his hand in `hut`/`last_silence` (`elzeard#rod`), the Traveller with his own rod in `edge` and `stumps`
(`traveller#rod`).
