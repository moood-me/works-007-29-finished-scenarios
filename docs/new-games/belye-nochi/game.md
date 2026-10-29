# Белые ночи — игра в терминах кода

Стадия 3 (`moood-me/moood:docs/writing/game-stages.md`): вся игра на трёх сценах мира, люди стоят; где по сценарию
кусок сцены — плашка с «Дальше»; мини-игры — заглушки (кружок и карточка); места, которых ещё нет, — в готовой сцене с
подписью «На самом деле: …». Сценарий — `scenario.md`.

- **Игра:** `games/white-nights` (bespoke; английский — исходный язык кода и текстов, русский — перевод в
  `bespoke/lang/ru/strings.json`; русские реплики и плашки — слово в слово из сценария, где он их даёт). Мир —
  `worlds/white-nights` (`game.json` `world`).
- **Каркас** — «Человека, который сажал деревья» (`r3/trees`, `979c6d5`), он же — «Кентервильского привидения»:
  `bespoke/game.js` (главы, карта, переигровки, карта автора, сохранение), `story.js` (`context`, `PLACES`, `standing`,
  `EFFECTS`, `ENDINGS`, `facts`, `agreement`), `ui.js`/`ui.css` (плашки, тосты, «как стоит игра», подпись места,
  карточка заглушки, карта автора), `map.js` (карта — ряд листков над ночной набережной без людей), `jump.js`,
  `chapters/`, `minigames/` (`stub.js`, `all.js`), `check/run.mjs`.
- **Своё против каркаса:** шкал нет (§8) — вместо них слева внизу «как стоит игра»: ветка письма (А, С, У, У4) и метки
  Сказал, Признался, Ушёл, Глаша (`standing`); почти всё, что оставил выбор, читается из самих выборов (`facts`);
  у главы `onward` может быть функцией (Н4 на А и У4 идёт прямо в финал), у главы есть `skip` (воскресенье на А и У4
  не проходится — на карте только имя); выбор может предлагать часть своих вариантов (по ветке), карта рисует только
  развилки, до которых дошла игра; мысли Мечтателя — `g.think` (шёпот в голове, `bespoke.think`); прерывание ✦ — шанс
  `g.choose(…, {within: 3000, otherwise})`; «выбор жестом» (М5 «Рука», М8 «Оклик») — на стадии 3 карточка мини-игры
  рядом с обычным выбором; строка уговора — `agreement(g)` (её ответ на первое признание, один раз); выборы, которые
  «знает» автор (`PLAYS`) и проверка веток, передаются шагу планом (`jump(…, plan)`), а не в состоянии — чтобы шаг,
  читающий состояние до своего выбора, видел его таким, как в игре.

## Места

`story.js PLACES`: место игры → папка сцены мира, её ключи и, где сцена только стоит вместо места, подпись `where`.
Шаги называют только места.

| Место | Шаги | Сейчас (стадия 3) | Подпись |
| --- | --- | --- | --- |
| `evening` М1 | пролог | `embankment`, `lamp` 0 (→ 1 в конце) | — |
| `night` М1 | Н1–Н4 | `embankment`, `lamp` 1 | — |
| `rain` М1 | Н4 4.2–4.4 | `embankment` | «та же набережная под дождём» |
| `day` М1 | Д2 | `embankment`, `lamp` 0 | «набережная днём» |
| `town` М1 | финал «Утро» | `embankment`, `lamp` 0 | «днём; город вернулся с дач; нянька с ребёнком» |
| `room` М2 | Д1 | `room`, `candle` 0, `rain` 0 | — |
| `morning` М2 | финалы «Минута», «Лестница», «Окно» | `room`, `candle` 1, `rain` 1 | — |
| `sunny` М2 | финал «Утро» | `room`, без дождя | — |
| `grandmother` М3 | воскресенье, «Булавка» | `grandmother`, `lampada` 1 | — |
| `memory` М3 | 2.4 | `grandmother` | «год назад, в утреннем свете…» |
| `mezzanine` М3 | финал «Мезонин» | `grandmother` | «мезонин наверху, вечером…» |
| `door` М4 | Д3 | `grandmother`, никого, кроме него | «дверь знакомых — узкая площадка…» |

Когда стадия 4 (`r3/nights-scenes`) даст своё место или вариант, строка `PLACES` становится `{ folder, keys }` без
подписи — больше ничего не меняется.

## Люди

`bespoke/people.json` (id = id людей в сценах): `dreamer` (Enceladus), `nastya` (Leda), `lodger` (Schedar),
`babushka` (Gacrux), `matryona` (Kore), `glasha` (Pulcherrima), `fyokla` (Callirrhoe), `yardman` (Algenib),
`gentleman` (Sadachbia), `passerby` (Zubenelgenubi). В сценах сейчас есть `dreamer`, `nastya` (набережная, бабушка),
`babushka`, `matryona`; жилец, Глаша, Фёкла, дворник, господин, прохожий — голос, их действия на плашках. Все реплики
(203 на язык, en и ru) озвучены `voice_line` студии по списку `moood-check --json`.

## Главы и шаги

| Глава | Шаги | Выборы |
| --- | --- | --- |
| Пролог «Пустой город» (`onward`) | жёлтый дом | `bow`: bow / pass |
| Ночь первая «Перила» | перила; господин; вдоль воды; её угол | `approach`: approach / pass; `defend`: stick / arm (М1); `promise`: promise / joke / silent |
| Ночь вторая «Булавка» | с девяти; его история; булавка (М2); её история; друг; письмо | `story`: plain / type / venice; `judge`: reason / unworthy / silent; ⚑ ✦ `already`: tap / missed |
| День «Дверь» | Матрёна; ветер (М3); дверь | ⚑ `door`: give / keep |
| Ночь третья «Десять» | четыре дня; отнесли?; почему (С); угадала (А, У); десять; после десяти (А, У) | А `told`: brought / tomorrow; ⚑ `answer`: brought (У) / here (С); С `why`: love / couldnt; А, У `guessed`: yes / joke / silent или (сказал) `still`: yes / silent; А, У `after`: stay / leave / glasha (А, «Отнёс») |
| Ночь четвёртая «Дождь» (`onward` на А и У4) | не придёт; её ответ; под руку (М4); под фонарём (А) | А, У ⚑ `rain`: love / will_come (А) / embrace / not_brought (У → У4); С ⚑ `free`: love / will_come / silent; А ⚑ `hand` (М5): let_go / hold / reach |
| Воскресенье «Мезонин» (`skip` на А и У4, `onward`) | после обедни; стук; двое по краям; её решение (С) | С `sunday`: hand (М6) / out / stay; У ⚑ ✦ `table`: put / missed |
| Финал | утро после; последний кадр | «Минута», «Лестница» `cobweb`: sweep / leave; «Мезонин» `call` (М8): reach / still; «Булавка» М9; «Окно» М7 |

Название главы — `g.title` в начале («Белые ночи», «Ночь первая»… «Воскресенье»).

## Ветки, метки, финал

- `facts`: ветка `letter` (А — отдал у двери; С — «Нет. Вот оно»; У — «Отнёс»; У4 — «Я не отнёс» в Н4), `said`
  (Ш1 тап, В7а «люблю», В8 «Да»), `confessed` (В10 / В10-С «Я люблю вас»), `knows`, `couldnt`, `joked`, `left`,
  `glasha`, `hand`, `sunday`, `table`; метки мини-игр `hem` (М2 провал), `stain` (М3 провал); `agreed` — строка
  уговора сказана; `ending`.
- Финал (§9): У4 → «Окно»; У → «Окно», если положил письмо на стол, иначе «Булавка»; С → «Мезонин», если признался в
  дождь, иначе «Минута: лестница»; А → «Утро», если сказал до четвёртой ночи, иначе «Минута». Письмо в «Минуте» и
  «Утре» — по таблице §9 (начало, строка руки, строка уговора, подпись).
- Тосты выбора и строки карты — «что ты сделал — что из этого вышло» (карты глав §5; для вариантов, которых в
  сценарии нет, — в том же духе); у `rain` на У ещё строка «Ты промолчал о письме в её слёзы…».

## Проверка

- `node games/white-nights/bespoke/check/run.mjs` — 2622 пути, «nothing to fix». Все сочетания выборов, которые решают
  (письмо, слово, рука, воскресенье, финал); мелкие выборы, которые только красят (`bow`, `approach`, `defend`,
  `promise`, `story`, `judge`), — шесть проходов, k-й берёт k-й вариант каждого (каждый вариант встречает каждый путь
  остального, пары 2×3 — все), в нечётных все мини-игры проиграны. На каждом пути: места, сцены и ключи, люди, точки,
  кто говорит; ровно один финал, по `facts` и по правилу §9, сказанному отдельно; выборы своей ветки и только они;
  строка уговора — ровно тогда, когда он признался, и один раз; `PLAYS` (13 путей автора) кончаются как подписаны.
- `moood-check` (`moood-me/moood` `packages/check`) — «all right», русский весь; `check` студии — в истории.

## Что меняет стадия 5

Только заглушки: строки `PLACES` (сцены стадии 4), `here` — люди, которых теперь видно; заглушки `all.js` — на
настоящие мини-игры (имена те же, `missed` — тот же след); плашки, где кусок сцены, — на куски (ниже); М5 и М8 —
выбор жестом (мини-игра возвращает вариант, игра кладёт его в `choices.hand` / `choices.call`). Тексты, выборы,
ветки, финалы — как есть.

## Stage 5 — pieces

What the game asks of the scenes at stage 5 — the single truth for the scenes' and pieces' authors; written at stage 3
so that stage 4 builds toward it. A change is written here first, agreed by both sides.

### How a piece works (as in «Кентервильское привидение» and «Человек, который сажал деревья»)

- The world gets the module `beats` (`works-006-four-scenarios-selected/worlds/the-summer-book/modules/beats.js`,
  `beats.md`; the copy in `worlds/the-man-who-planted-trees/modules/` on `r3/trees`); a scene with pieces: its `FILM` in
  `lib.js`, `script.js` `scene.kit.beats.play(scene, scene.lib.FILM)`. The key `beat` names a piece; it plays from its
  `from` (or on from the one before, if `after` it); the scene tells `<piece>:<moment>` at its moments and
  `beat:<piece>` at its end, and ends in a living pose.
- The game opens a scene on a piece (`g.scene(place, {beat, here, moods, keys})`), says its lines at the moments named
  (`piece(g, name, {moment: fn})`), then plays choices and mini-games in the pose the piece ends in. `here`, `moods`
  and the place's keys are the game's; everything else is the piece's `from`. A scene laid out by `moment` is opened on
  it and the piece set after the show (never in `then`: that is a jump, the piece would never tell its end).
- Shots: `wide` — the picture camera; `medium` / `close` — `camera_target` + `camera_shot`; faces must read (white
  nights: nothing dark). For a two-shot target an `unseen` element ~1.7 m tall between the people. The scenario's
  close-ups (§4): her «Это видно» (1.3); her face when he interrupts her (2.5); her face over «Вот оно» (3.1); his face
  at ten (3.3, A and U); her turn to the lamp (4.4); her turn at the corner (4.3-С); her turn to him on the Lodger's
  words about the gentleman (Sunday, U); the last shot of every finale.
- Each scene's notes.md gets a «Contract for the check» block (```json {"beats": {"<piece>": {"after"?, "tells":
  ["<piece>:<moment>", …], "seconds"}}, "points": […], "keys": […]}```); the game's `check/run.mjs` reads it: a piece
  or a moment the game uses that the contract lacks is an error; a scene with no contract yet is «waited for».
- A silence ⏸ is inside its piece (its seconds as the scenario gives them), not a wait of the game.

### People (element ids = the game's people.json keys)

`dreamer`, `nastya` wherever the scenario has them; `lodger` (the embankment in 4.4, Grandmother's room on Sunday and
in the memory — hat at his chest: the cast's `_wear: {hat: "none"}` and `hat_hand`), `babushka`, `matryona`. New:
`glasha` (the door: a pert housemaid with keys, an apron), `fyokla` (Grandmother's: deaf old servant), `yardman`
(prologue: a broom), `gentleman` (Н1: a tailcoat, tipsy), `passerby`, a nanny with a child, a boy (finales, no lines
but `passerby`'s «Пардон»). Parts: `cane`, `letter` (in the hand; on the table; with the stain — a look key
`stained`), `book`, the hats; new — the pin on his sleeve (Н2, as Grandmother's `pin` element), a bundle (memory),
two cups (mezzanine), a long brush (Matryona), a bagel (the child).

### Asks of the world (stage 4: `r3/nights-scenes`)

1. **The door** (place 4): a narrow landing, a door with a bell-pull, a few steps of a stair going down; `glasha` at
   the door. Keys: `door` shut / open.
2. **The mezzanine** (place 3 upstairs): a sloping ceiling, a little table, two cups (`cups` 0…2, one `cold`), a small
   window onto the canal — Nastenka leaning there is the first night quoted.
3. **The embankment**: `rain` 0…1 (falling, puddles, wet granite; the awning keeps the two dry), by day (`time`: night
   / day — people walking, carts in the prologue), the bell (`bell` — the strokes counted, a sound), scraps of paper on
   the water (`scraps`), the gentleman's side street.
4. **The room**: `window` shut / open (rain onto the sill and the table), the cobweb `cobweb` there / swept, the letter on
   the table (`letter_table`), his frock coat by the stove (U4).
5. **Grandmother's room**: the memory in morning light (`time`: sunday / memory — the Lodger at the stair with books,
   Nastenka with her bundle by the door), the pin's state (`pin`: pinned / taut / off / him — pinned to the Dreamer's
   coat in «Булавка»), the door to the stairs open (`door`), the hat on the table (`hat_table`).

### Motions (Kimodo; a loop unless «once»)

| name | prompt | s |
| --- | --- | --- |
| `cry_railing` | A young woman leans on a stone railing with both forearms, crying silently, her shoulders shaking | 6 |
| `bow_house` (once) | A man bows politely from the waist to something in front of him, holding his hat | 2 |
| `laugh_broom` | A man leans on a broom and laughs loudly | 3 |
| `walk_cane` | A man walks along tapping the ground with a walking stick in his right hand | 2 |
| `walk_raised` | A man walks fast with a stick raised in his right hand, ready to strike | 2 |
| `stagger` | A tipsy man walks unsteadily, quickening his step | 2 |
| `arm_in_arm` | A man and a woman walk slowly arm in arm (fallback: side by side in step, her hand on his elbow as a pose) | 2 |
| `pace` | A man walks a few steps, turns, walks back, hands behind his back | 6 |
| `sit_edge` | A man sits on the very edge of a bench, upright, hands on his knees | 6 |
| `sit_tucked` | A young woman sits on a bench with one foot tucked under her, turned to the side | 6 |
| `gesture_talk` | A seated man talks eagerly with both hands | 6 |
| `pin_sleeve` (once) | A seated woman pins something to the sleeve of the man beside her | 3 |
| `head_shoulder` | A seated woman rests her head on the shoulder of the man beside her | 6 |
| `tear_letter` (once) | A woman tears a sheet of paper into pieces over water and lets them fall | 4 |
| `embrace_shoulders` | A man stands with his arm round a woman's shoulders, both looking ahead | 6 |
| `give_letter` (once) | A person holds out a letter to someone in front of them | 2 |
| `hug_kiss` (once) | A woman runs to a man, embraces him quickly and kisses his cheek, then steps back | 4 |
| `pull_free` (once) | A woman pulls her hand out of a man's grip | 3 |
| `palm_cheek` (once) | A woman touches a man's cheek with her palm | 3 |
| `bell_pull` (once) | A man pulls a bell cord beside a door | 2 |
| `knock` (once) | A man knocks on a door | 2 |
| `unpin` (once) | A seated woman unpins a pin from her dress and stands up | 3 |
| `search_hands` | A blind old woman sitting in an armchair searches the air with both hands | 4 |
| `sweep_high` (once) | An old woman sweeps a cobweb from a ceiling corner with a long brush | 4 |
| `open_window` (once) | A man opens a window casement inward with both hands | 3 |
| `lean_window` | A young woman stands leaning on a windowsill with both forearms, looking out | 6 |
| `hat_on` (once) | A man puts on a top hat | 2 |

### Pieces

Each: **id** · place · what happens · moments (where the game says its lines) · then (a choice or a mini-game in the
pose it ends in).

**Prologue**

- `canal` · evening · the empty city, carts far off; the Dreamer walks along the canal (`walk_cane`), stops before the
  yellow house · `canal:think` → «Восемь лет в Петербурге…»; `canal:house` → «Тебя выкрасили…» · then ⚑ `bow`
- `bow` · he bows to the house (`bow_house`); the yardman with a broom laughs (`laugh_broom`); the Dreamer blushes and
  laughs · `bow:laugh` → yardman «Барин, вы с кем это?»
- `pass_house` · he walks on; looks back once at the house · `pass_house:look` → thought «Неловко…»
- `lamp_lit` · the dusk whitens, the lamp is lit (`lamp` 0 → 1)

**The first night**

- `crying` · night · Nastenka at the railing (`cry_railing`), he on the far side of the street · then ⚑ `approach`
- `approach` · he crosses, stops two steps off, opens his mouth; she starts and walks quickly away along the railing ·
  `approach:mouth` → «Я… ничего»
- `look_back` · he passes; at the corner he looks back: she walks along the embankment
- `gentleman` · the gentleman (`stagger`) from the side street after her, quickening; she almost runs · then ⚑ `defend`
- `stick_off` (after М1 stick) · the gentleman sees the stick · `stick_off:pardon` → «Пардон… я, собственно…» — he turns
  off; `stick_clatter` (М1 missed) · the stick on the cobbles, he runs, she laughs through tears
- `arm_on` (after М1 arm) · her hand on his elbow, the gentleman falls behind; `arm_herself` (missed) · she takes his
  arm · `arm_herself:take` → «Ну что вы, давайте же»
- `water` · arm in arm along the water (`arm_in_arm`) · `water:tremble` → «Вы дрожите», his «Я никогда не говорил…»,
  her «Это видно» (close); `water:house` → past the yellow house (his nod if he bowed, «Вы с кем?»…); the ⏸ (15–20 s)
  inside it
- `corner` · her corner; she lets go of his arm · `corner:say` → «Приходите завтра…» · then ⚑ `promise`
- `handshake` (promise) · she gives him her hand like a man; `squint` (joke) · she narrows her eyes; `bow_silent`
  (silent) · he bows

**The second night**

- `waiting` · from nine, he paces (`pace`) · `waiting:think` → «Целый час…»; `waiting:corner` → she comes round the
  corner (by the marks: «А где ваша дубина?» — his empty hands behind his back; or she takes his arm)
- `bench` · they sit (`sit_tucked`, `sit_edge`) · `bench:sit` → «Расскажите вашу историю» · then ⚑ `story`
- `palm` (plain) · her palm on his sleeve; he moves away; `type_talk` (type, `gesture_talk`); `venice` (venice) · she
  laughs, he tangles
- `pin_on` · she takes the pin from her collar, pins her hem to his sleeve (`pin_sleeve`) · `pin_on:sleeve` → «Вот так
  она меня — дайте рукав» · then **М2**
- `pin_off` (М2 passed) · she unpins it herself; `hem_torn` (missed) · the rip, she laughs
- `memory` · Grandmother's room a year ago (`time` memory): the Lodger at the stair with books; «Севильский цирюльник»;
  Nastenka at the door with her bundle; the Lodger · `memory:bundle` → «Я беден…»; `memory:left`
- `not_come` · back on the bench; her line, close · `not_come:say` → «Нынче год…» · then ⚑ `judge`
- `to_railing` (unworthy) · she goes to the railing, then quieter
- `stand_up` · she stands · `stand_up:all` → «Как хорошо, что вы в меня не влюбились…» — the ✦ starts on «как все» (the
  game's chance, 3 s); `freeze` (tap) · she freezes (close), a step back to the railing; `friend` (missed) · she nods
- `letter` · she takes out the envelope, holds it out (`give_letter`), it passes to his hand (`nastya_with` →
  `dreamer_with` `letter`), she goes quickly · `letter:give` → «Отнесите его знакомым…»; then ⏸ 15 s alone, the
  rustle of paper

**The day**

- `tea` · room, morning; the letter on the table; Matryona brings tea · `tea:ask` → «От барышни, что ли?», «Матрёна,
  паутину бы…», «Сниму, батюшка»; `tea:pocket` → he hides the letter in his inside pocket
- `numbers` · the embankment by day; he checks the numbers; wind off the canal · then **М3**; `stain` (missed) · the
  envelope in a puddle, he snatches it out
- `bell` · the door; ⏸ 12 s his hand on the bell-pull (steps below, a cough); he pulls (`bell_pull`); Glasha opens ·
  `bell:open` → Glasha's line (and «Ишь, заляпали» on `stain`) · then ⚑ `door`
- `apron` (give) · Glasha stuffs it into her apron, the door closes; `wrong_door` (keep) · he backs off, she watches him
  turn on the stairs

**The third night**

- `four_days` · she comes round the corner · moments for her lines (`four_days:say`)
- `tug` (A, brought) · she pulls him along the railing, almost running; `slow_walk` (tomorrow) · she stops, then walks
  slower on his arm; `here_it_is` (C) · the letter back in her hands, her face close
- `guessed` · waiting for ten, she chatters · `guessed:say` → «Я ведь угадала…» / «А я весь день…» · then ⚑
- `ten` · the bell strikes ten (`bell` 0 → 10, a stroke a moment `ten:1`…`ten:10`); she at the railing facing the
  corner, he behind; the camera on his face (A brought: lips part and close; Glasha: he watches her wait; U: his hand
  on his pocket)
- `tear` (C) · on the tenth stroke she tears the letter (`tear_letter`), scraps on the water · `tear:torn` → «Если бы
  хотел…»; `tear:go` → over her shoulder; she goes; ⏸ the scraps float
- `bench_silent` · she sits on the bench · then ⚑ `after`; `shoulder` (stay, `head_shoulder`) · `shoulder:brother` →
  «Вы мне как брат»; `go_off` (leave) · he goes; `raise_head` (glasha)

**The fourth night**

- `crying_again` · as the first night · moments for her lines · then ⚑ `rain` / (C) `nothing` · she at the railing, no
  tears; arm as a brother's or a step ahead · then ⚑ `free`
- `confess` · his «Я люблю вас» (A, U, C) — moments for the agreement line and her answer
- `embrace` · his arm round her shoulders (`embrace_shoulders`)
- `not_brought` (U4) · he holds out the letter; she takes it with two fingers, goes round the corner; the rain begins;
  ⏸ alone, empty hands
- `rain_walk` (A, U) · rain (`rain` 0 → 1), arm in arm · then **М4**; (U) at the corner her invitation, ⏸ under the
  awning, the envelope
- `awning` (C) · rain, under the awning; ten strikes; she turns to the corner at the first, away from it (to him) on
  the tenth if he confessed · then **М4**; her invitation; ⏸
- `lodger_lamp` (A) · the Lodger under the lamp, hat at his chest, her envelope · `lodger_lamp:name` → «Настенька»; her
  turn (close); her hand into his palm · then **М5**
- `let_go` · she runs to him, back, embraces and kisses the Dreamer (`hug_kiss`), goes (on «Ушёл»: she only waves);
  `torn_free` (hold, `pull_free`); `reach` · «Настенька!», she stops halfway; comes back, palm to his cheek
  (`palm_cheek`) — not on «Ушёл»
- `lodger_goes` · the Lodger's two lines (`lodger_goes:post`, `lodger_goes:hands`), his hat on (`hat_on`); they go;
  ⏸ 15 s alone in the rain

**Sunday**

- `after_mass` · Grandmother's room; the pin glints; the Dreamer by the door · moments for the lines (Grandmother,
  Fyokla, the hem, «Из Вене… С Песков»); ⏸ 12 s Nastenka reads aloud, the clock; (U) his fingers at the envelope
- `knock` · a knock (`knock`), he opens; the Lodger in; a glance; to the armchair · `knock:say` → «Сударыня. Я обещал
  через год…»
- (C) then ⚑ `sunday`: **М6** `take_hand`; `stairs_out` · his hat on the table, he goes out, the door ajar; `stay_door`
- (U) `stand_pin` · she stands, the pin taut · `stand_pin:ask` → «Вы… получили моё письмо?» — the ✦ (3 s); `table`
  (put) · he lays the letter on the table; the Lodger takes it, pockets it unopened; she unpins and goes; `turn` (missed)
  · the Lodger's line; her slow turn to the Dreamer (close)
- (C) `talk` · the conversation (moments for each line); `refuse` · «Ступайте», the Lodger's hat on in the room (with
  his hand / the hat on the stairs and «Чай будете пить?» / alone); `unpin_go` · she unpins herself (`unpin`),
  Grandmother's hands (`search_hands`), she goes (with each of his three choices' farewell)

**The finale**

- `letter_morning` · room, rain; Matryona brings the letter · then her letter read (the game's lines) · then ⚑ `cobweb`
- `swept` / `left_cobweb` · Matryona sweeps it (`sweep_high`) / nods; his last line; the last shot
- `carts` («Утро») · carts outside; «Сниму, батюшка, сни…» — he puts on his hat and goes; `town` · the embankment by
  day, the passer-by «Пардон», the nanny and the child with the bagel at her place
- `stairs_morning` · no letter; «Нет, Матрёна. Ничего»; (out) the boy brings his hat
- `mezzanine` · two cups; «Настенька, ты здесь?» from below; she comes up with tea · moments for her lines; `window_ten` ·
  ten strikes, she leans at the little window (`lean_window`) · then **М8**; `turn_what` (reach) · «Что?» — «Ничего. Чай
  стынет»; the last shot: two cups, one cold
- `pinned` · she unpins herself and goes; Grandmother's hands find his coat, she pins it · then **М9**; `rustle` · he
  reads to her; «Что это у вас там шуршит?»; the last shot: the pin
- `monday` · (U4) Matryona hangs his coat by the stove, her lines; (U) «Матрёна, не было ли…» · then **М7**;
  `window_open` · the rain on the sill and the table; the last shot: his hand on the wet sill

### Mini-games (each in the pose its piece ended in)

The single truth for the scenes' authors: the points every mark stands on and the keys the game drives. A point a
scene lacks now is «waited for» by the branch check; a piece only needs to end with the people there.

| id | § | place, after | gesture | marks on | keys the game drives | s | a miss leaves |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `stick` | М1 | night, after `gentleman` | keep the balance (the tilt, or a point kept in a band with the finger; iOS asks for the tilt on the same tap that starts it) | `dreamer#hand_r` (the cane) | `dreamer_do` `walk_raised` while it lasts | 10 | `{clatter}` → `stick_clatter` |
| `arm` | М1 | night, after `gentleman` | pull slowly: her hand to his elbow; a jerk — she shies | `nastya#hand_r` → `dreamer#hand_l` | `nastya_reach` {r: `dreamer#hand_l`} at the end | 8 | `{herself}` → `arm_herself` |
| `pin` | М2 | night, after `pin_on` | touch nothing, 10 s (a quiet mark on the pin; a touch is the miss) | `dreamer#hand_l` (the pinned sleeve) | `hem` pinned → torn on a touch | 10 | `{torn}`: marks.hem |
| `letter` | М3 | day, after `numbers` | keep the balance (as М1) | `dreamer#letter` | `wind` 0…1 rising | 10 | `{stain}` → `stain`; marks.stain (the envelope `stained` after) |
| `arm_rain` | М4 | rain, `rain_walk` / `awning` | hold, 15 s; no miss — let go and held are both answers | `nastya#hand_r` (on his elbow) | `rain` up while held | 15 | `{loose}`: «Куда вы?» |
| (`hand`) | М5 | rain, after `lodger_lamp` | a choice by gesture: lift the finger — let go; hold 3 s against her pull — hold; lead the finger after her hand — reach | `nastya#hand_r` in his palm; reach toward `lodger` | `nastya_reach` → `lodger`; `dreamer_reach` | ≤10 | — (`choices.hand`) |
| `hand_grandmother` | М6 | grandmother, after `knock` (C, take her hand) | pull slowly | `dreamer#hand_r` → `nastya#hand_r` | `dreamer_reach` {r: `nastya#hand_r`} | 8 | `{abrupt}`: she starts |
| `open_window` | М7 | morning (room), after `monday` | pull slowly | `window#latch` | `window` shut → open | 6 | `{matryona}`: Matryona opens it |
| (`call`) | М8 | mezzanine, after `window_ten` | a choice by gesture: pull toward her — reach; touch nothing through the ten strokes — still | `nastya#head` | `bell` | 10 | — (`choices.call`) |
| `pinned` | М9 | grandmother, after `pinned` | touch nothing, 10 s | `pin` (the element, pinned to his coat) | — | 10 | `{again}`: «Сиди», pinned again |

On a phone vibration is only an addition (none on an iPhone): the figure's pose and the sound carry each gesture.
