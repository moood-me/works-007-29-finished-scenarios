# Ночной полёт — игра в терминах кода

Стадия 3 (`moood-me/moood:docs/writing/game-stages.md`): вся игра на трёх сценах мира, люди стоят; где по сценарию
кусок сцены — плашка с «Дальше»; мини-игры — заглушки (кружок и карточка); места, которого ещё нет, — в чужой сцене
с подписью. Сценарий — `scenario.md`.

- **Игра:** `games/night-flight` (bespoke; английский — исходный язык кода и текстов, русский — перевод в
  `bespoke/lang/ru/strings.json`). Мир — `worlds/night-flight` (`game.json` `world`).
- **Каркас** — «Кентервильского привидения» стадии 3 (ветка `r3/canterville-game`, он — «Летней книги»):
  `bespoke/game.js` (главы, карта, переигровки, карта автора, сохранение), `story.js` (`context`, `PLACES`, ключи
  сцен, `SCALES`, `EFFECTS`, `ENDINGS`, `facts`), `ui.js`/`ui.css` (плашки, тосты, шкалы, подпись места, карточка
  заглушки, карта автора), `map.js` (карта — деревья глав над сценой мира `night`, см. «Карта игры»), `jump.js`, `chapters/`, `minigames/`
  (`stub.js`, `all.js`), `check/run.mjs`.

## Места — одна карта

`story.js PLACES`: место сценария → папка сцены мира. Шаги называют только места, никогда папки. С стадии 4 у
каждого места своя сцена (на стадии 3 кабинет стоял в бюро с подписью `where`).

| Место | Сцена |
| --- | --- |
| `office` С1 кабинет Ривьера | `office` (стадия 4) |
| `bureau` С2 бюро | `bureau` |
| `field` С3 поле у ангара | `field` |
| `cockpit` С4 кабина Фабьена | `cockpit` |

Ключи сцен — в `story.js`: `bureau(clock(ч, м), {tape, lamps, flags, outside})` (лампы, стекло двери кабинета,
аппарат, часы — минуты после полуночи: 22:05 → 1325; сумерки и рассвет сцена берёт из часов; флажки карты —
`FLAGS.evening|julian|trelew|night|sea|down`; ангар в окне — `outside`: european, empty, rolled, landing, idle),
`FIELD.dark|lit` (прожекторы, лампы ангара, окно кабинета), `PLANE.stand|coming|away` (самолёт у ангара, садится из
темноты, ушёл на север), `SKY.dusk|night|storm|above` (небо кабины: закат, ночь над степью с огнями Трелью, буря —
`gap` разрыв со звёздами, над облаками), `OFFICE(facts)` (кабинет в три: лампы, прожекторы внизу, дождь, европейская
стоит или ушла, Робле и Робино внизу в окне). Где люди стоят и сидят — ключи мест сцен (`<id>_spot`: бюро —
`riviere_spot` map/desk/bench, `robineau_spot` desk/writing/bench, `pilot_spot` standing/bench, `telegraphist_spot`
table/bench; поле — `roblet_spot` front/engine/chocks; кабинет — `riviere_spot` room/window/desk, `madame_spot`
window/door/chair). Взгляды людей — `<id>_look` в ключах шагов, что в руках — `<id>_with` (ящик, ключ).

## Люди

`bespoke/people.json`: `narrator` (Iapetus), `riviere` (Alnilam), `fabien` (Umbriel), `madame` (Achernar), `robineau`
(Enceladus), `pellerin` (Fenrir), `roblet` (Algenib), `radioman` (Achird), `telegraphist` (Schedar), `pilot` (Orus —
пилот европейской), `asuncion` (Rasalgethi — пилот асунсьонской), `mechanic` (Puck). Записки в воздухе — голосом
того, кто пишет (Фабьен, радист), с `how` «a note written in the air…»; лента 3.2 — голосом радиста; лента 3.5 и
сводки — телеграфист; телефон мадам — её голос над рассказчиком (`at: 'narrator'`, её нет в кадре).

`g.scene(place, {here, moods, keys})`: в кадре те из `here`, кто есть в сцене. С стадии 4 в сценах все, кого сценарий
ставит туда: бюро — Ривьер, мадам Фабьен, Робино, пилот европейской, пилот асунсьонской, телеграфист; поле — Ривьер,
Робино, Робле, Пеллерен, пилот европейской, три механика (`mechanic` — молодой, `mechanic_b`, `mechanic_c`; двое
последних в `people.json` без реплик); кабинет — Ривьер, мадам Фабьен, Робино (в дверях); кабина — Фабьен, радист.
Голосом без тела — только мадам по телефону и записки/ленты.

## Главы и шаги

| Глава | Шаги | Выборы |
| --- | --- | --- |
| Пролог «Сумерки» | П.1 кабина, П.2 флажок, П.3 бумаги | — |
| I «Анды» | 1.1 посадка, 1.2 штраф, 1.3 Робле, 1.4 Ш1, 1.5 Трелью | `touch`: tap / pass (шанс 5 с); `fine`: robineau / self / tear; `roblet`: fire / keep / remove |
| II «Буря» | 2.1 асунсьонская, 2.2 буря, 2.3 Робино, 2.4 телефон | `phone`: wind / storm / robineau |
| III «Звёзды» | 3.1 она, 3.2 лента, 3.3 Ш2, 3.4 звёзды, 3.5 последняя лента, 3.6 тишина, 3.7 Робино | `minute`: bearing / hers / own (таймер 10 с → bearing); `robineau`: work / sit / silent |
| IV «Европейская» | 4.1 поле, 4.2 Ш3, Ф.1–Ф.2 кабинет, Ф.3–Ф.4 журнал, Ф.5 бюро, эпилог Э.1–Э.3 | ⚑ `european`: fly / ground / silent (таймер 10 с → silent) |

Финал и эпилог — шаги главы IV: по сценарию от европейской сразу в кабинет, карта главы 4 — только после эпилога
(§5, §10). Название финала — титр в начале Ф.1. Подписи вариантов на карте — строки §10 («Ты тронул его за плечо —
Пеллерен обернулся»); на лепестках — короткие.

«Тронуть за плечо» (1.1) — шанс: метка 5 с (по сценарию 3 с; на стадии 3 нужно два касания — кружок и лепесток), не
нажато — `pass`. Таймеры Ш2 и Ш3 — `within: 10000` (кольца вокруг вариантов пока нет — плашка перед выбором говорит
про десять секунд).

## Шкалы, метки, финал

- `SCALES`: `exceptions` «Исключения» 0–3, старт 0 (0 ни одного, 1 одно, 2–3 правило гнётся; +1 — 1.2 «Порвать», Ш1
  «Оставить на моторах», Ш2 «Её слова»/«Своё»), видна с 1.2; `told` «Что ей сказали» 0–1 (ветер — буря), видна с 2.4.
  Вторая строка «Что она знает» — `marks.minute` (`MINUTE`: место / его слово / «Ей —», без конца), шкала пишет её
  под `told` после Ш2. Шкалы видны только на карте (§8); в игре — тосты их сдвигов.
- Метки — `touched`, `fine`, `roblet` (fired / engines / field), `phone`, `bearing`, `minute`, `robineau`
  (working / remembers / alone), `european`. Тосты — фразы метки.
- `facts`: `ending` — `european` fly → «Тяжёлая победа» (`victory`), silent → «Без приказа» (`silence`), ground →
  «Рассвет» (`dawn`); `storm` (сказали «буря»), `bearing`, `bends` (none / one / bends), `touched`.

## Мини-игры (`minigames/`, стадия 5)

Девятнадцать на языке мини-игр (имена — те же, что у заглушек стадии 3; `all.js` — оглавление): М1 «Флажок» —
`flag.js` (`lead` — вести по линии карты: `flag`, `flag_north`, `flag_sea`, `flag_red`, `flag_blue`, `flag_late`,
`flag_down` в ящик под картой; `hold` — держать у Трелью: `flag_hold`), М2 «Перо» — `pen.js` (`pen` на вставке
`paper` поля, `log` на вставке `log_page` кабинета), М3 `box`, М4 `spanner`, М5 `stick` (равновесие: крен `roll`),
М6 `climb`, М7 `chocks`, М8 «Свет» — `light.js` (`light`, `light_european` — вверх, `light_off` — вниз: `lever`,
`floods`), М9 `tape`. `hands.js` — «Кентервильского привидения» («Летней книги» + `line`) и своё: рывок, после которого
остальное идёт само (`slowly`: `jerk` → true — механик дотягивает рубильник, лента выходит сама, Фабьен вытягивает
рывком), и слишком быстрая линия (`line`: `fast` — флажок съезжает, клякса). У каждой `skipped` (чисто) и `missed` —
след провала (§7); главы читают его там, где он меняет дальнейшее: клякса (Робино промокает / Ривьер сам), ключ на
верстаке, машину клало на крыло (вода внизу), лента вышла сама (читает телеграфист), пилот тронулся сам по знаку
механика. «Тронуть за плечо» — одно касание по Пеллерену (`pellerin#chest`) за 3 с (шанс без лепестков, дуга
времени). Таймеры Ш2/Ш3 — дуга времени на метках выбора (10 с). Точки и ключи, которых в сценах ещё нет, — контракт
кусков («Stage 5 — pieces»); проверка ветвей перечисляет их отдельно («WAITED FOR»).

## Проверка

- `node games/night-flight/bespoke/check/run.mjs` — все 1458 путей (по 486 на финал; пути `PLAYS` — ещё раз со всеми
  проваленными мини-играми; куски и их моменты — по «Contract for the check» сцен): места и сцены, люди, ключи,
  точки выборов и заглушек, реплики (кто говорит), один финал на путь и тот, что по правилу §11, все выборы сделаны,
  «Исключения» = порванный штраф + Робле на моторах + слова на Ш2, «Что ей сказали» — по телефону, `PLAYS` (шесть путей
  автора) кончаются как подписаны.
- `moood-check` (`moood-me/moood` `packages/check`) и `check` студии — тексты и русский; голоса всех реплик (en, ru)
  сделаны `voice_line`.

## Стадия 4: места, которых нет, и что каждой сцене нужно

Сделано 2026-10-29 (ветка `r3/night-flight-s4`; история — `docs/history/2026-10-29-nochnoj-polyot-stage4.md`).
Что сделано и что осталось — в конце раздела, «Итог стадии 4». Список ниже — как он был задан.

- **С1 кабинет Ривьера — новая сцена** (`office`). Стол с лампой и журналом (М2 «Перо» в финале), телефон, стул для
  посетителя (мадам садится на него в «Рассвете»), большое окно на поле: в окне — поле с прожекторами (зажжены /
  погашены — по Ш3), ангар, Робле или его пустой верстак под лампой, Робино у стены ангара под дождём; ночью дождь по
  стеклу (с 03:00, ключ), дверь (Робино в дверях — Ф.4). Люди: Ривьер, мадам Фабьен (у окна / у двери / на стуле),
  Робино (в дверях). Свет — лампа стола; лица крупно (Ф.1–Ф.2 — главный разговор финала).
- **Бюро (С2):** нет **Робино** (стол Робино есть — нужен он сам, с папкой; сидит за рапортом в 3.7 и «Рассвете»), нет
  **пилота асунсьонской** (2.1). Нужны: пилот европейской **сидя на лавке** со шлемом на коленях (2.3–3.1), Ривьер и
  Робино **сидя на лавке** (3.7 «Сядьте»), телеграфист **дремлет на лавке** (Ф.5 «Рассвета» — сейчас `eyes_closed` за
  столом); флажки карты как ключи (синий: на юге / Сан-Хулиан / Трелью / в море; северный и западный — в пути / на
  поле; красный — на поле / на север / снят) — для М1; окно бюро **на рассвете** (Ф.5 «Рассвета»: серо, европейскую
  закатывают в ангар) и **в сумерках следующего вечера** (эпилог; в «Тяжёлой победе» за окном садится чилийская, в
  «Рассвете» — прожекторы не зажжены, у ангара Пеллерен курит); часы уже ключ `time`.
- **Поле (С3):** нет **Пеллерена** (1.1: выходит из-за крыла, шлем, перчатки, руки в карманы; в эпилоге «Рассвета» —
  в окне бюро), **механиков** (1.1–1.4, 4.1–4.2: у моторов, грузят мешки, выдёргивают колодки; молодой механик у мотора
  — 4.1 «уволен»), **пилота европейской** (4.1–4.2: у крыла, шлем, рука на борту). Нужны: два самолёта по ходу ночи —
  чилийская садится из темноты на свет (1.1), европейская под лампами с прогретым мотором, разбег и уход на север (Ш3
  «Лететь», «Промолчать»), её откатывают в ангар (только в окне бюро); колодки, ящик Робле (уходит с ним / из рук в руки),
  ключ Робле, пустой верстак под лампой; силуэт мадам в светлом окне кабинета над полем (4.1–4.2) — ключ к `office`;
  рубильник уже точка `hangar_front#switch`, прожекторы — ключ `floods` (гаснут по одному на «Отставить» — стадия 5).
- **Кабина (С4):** ночное небо над степью с огнями Трелью (1.5, 23:00 — сейчас закат с зажжённой приборной лампой);
  разрыв в тучах со звёздами внутри бури (3.4, до подъёма); записка из рук в руки вперёд-назад (П.1, 1.5, 2.2, 3.4);
  машину кладёт на крыло (провал М5 — `tilt`, сцена отмечает это как неиспробованное).
- **Плашки, которые стадия 5 заменит кусками:** посадка чилийской (1.1), Робле уходит через поле (Ш1), записки в
  кабине, подъём над облаками (3.4), лента тянется / обрывается (3.2, 3.5), пилот выходит на поле (3.6), европейская
  уходит / прожекторы гаснут (Ш3), её уход из кабинета (Ф.2).

### Итог стадии 4

- **Сделано:** сцена `office` (С1) — стол, лампа, журнал (`desk_top#log`), телефон, стул посетителя, дверь на
  площадку, большое окно на поле (прожекторы, дождь по стеклу и над полем, ангар, верстак под лампой, европейская
  стоит или ушла, Робле и Робино маленькими фигурами по ключам); бюро — Робино, пилот асунсьонской, сидящие на лавке,
  дремлющий телеграфист, флажки ключами, рассвет и сумерки следующего дня, ангар в окне по часам; поле — Пеллерен,
  пилот, механики, самолёт по ключам (садится, стоит, уходит), колодки, ящик, верстак, мешки, силуэт мадам в окне
  кабинета; кабина — ночь над степью с огнями Трелью, разрыв в тучах. Шаги игры ставят всех и все ключи; плашки те же.
- **Не сделано (стадия 5):** движения (записка из рук в руки, руки на ключе, письмо в журнале, голова дремлющего,
  пилот выходит, Робле уходит через поле); самолёт откатывают в ангар — только в окне бюро; прожекторы гаснут по
  одному; машину кладёт на крыло (`tilt` якоря кабины не пробован).

## Карта игры

Своя сцена мира `night` — «Поле ночью» (`worlds/night-flight/scenes/night/notes.md`): большое поле в синей ночи из окна
Ривьера наверху — полоса с огнями уходит вдаль, прожекторы, ангар светится, перед ним стоит европейская; на юге буря с
немыми молниями, на западе низкие облака под луной, на севере зарево города; по трём линиям время от времени заходит к
полю огонёк почтового самолёта. Точки глав `c0…c4`, автора — `author`; ключи `shown`/`come` (как у «Кентервильского
привидения», ветка `r3/polish-canterville`). Деревья глав — `map.js` (модуль «Парадизо» через «Кентервиль»), каждая
глава — телеграфный бланк; под строкой выбора — что из него вышло (машинописью, как на ленте). После главы: 3 с паузы
(дочитать тосты последнего выбора), карта с видом на сыгранную главу, её строки растут 6 с, потом вид идёт к текущей.
Шкалы — на листке в углу карты (`ui.js gauge`): «Исключения» — полоской из трёх делений и словами (ни одного / одно /
правило гнётся) и одной строкой, что считают; «Что она знает» — двумя строками (что ей сказали; что у неё от
последней минуты). Фон звука карты — `background: { field: 0.2 }` (подложки — `sound.js` ветки
`r3/polish-night-flight`).

## Что меняет стадия 5

Только заглушки (места и люди — уже на стадии 4): мини-игры `all.js` — на настоящие (имена те же); плашки, где кусок сцены, — на куски;
«Тронуть за плечо» — одно касание за 3 с; кольцо таймера Ш2/Ш3. Тексты, выборы, шкалы, финалы — как есть.

Сделано на стороне игры (ветка `r3/night-flight-s5`): мини-игры, «Тронуть за плечо», кольцо таймера, проводка кусков
(`g.scene(place, {beat})`, `g.beat`, `g.told`, `piece()` в `story.js`), конец игры и карта как у «Кентервильского
привидения» после правок (последний кадр уходит в чёрное, название финала, карта выходит из чёрного; строка «Финал» —
на листе главы IV; под выбором — что из него вышло). Шаги кабины, бюро и кабинета — на кусках (`piece(g, name,
{moment: fn}, open)`: сцена открывается на куске, реплики — на его моментах; плашки, которые кусок показывает, ушли,
паузы — `g.wait`); ключи игры, которые куски читают: `riviere_spot` flags (флажок асунсьонской), `robineau` и `roblet`
в бюро главы IV, `tape_mark`, `leave_turn`/`leave_look`, `madame_spot` и ключи `OFFICE`. Поле — тоже на кусках
(`2ef22b9`): игра ставит `robineau`, `roblet`, `bends` с 4.1, `roblet_spot` и `workbench` в начале шага, чилийская
заходит справа (`PLANE.coming` — как у поля).

## Stage 5 — pieces

The contract between the game (`games/night-flight`, the game's author, branch `r3/night-flight-s5`) and the scenes
(`worlds/night-flight`, the pieces' author). Written 2026-10-29 before either side codes; a change to it is agreed and
written here first.

### How a piece works (as in «Летняя книга» and «Кентервильское привидение», world module `beats`)

- The world gets the module `beats` (copy `worlds/the-canterville-ghost/modules/beats.js` and `beats.md` of branch
  `r3/canterville`); each scene with pieces: its `FILM` in `lib.js`, `script.js` `scene.kit.beats.play(scene,
  scene.lib.FILM)`. The key `beat`: the game names a piece, it plays from its `from` (or on from the one before, if it
  is `after` it); the scene tells `<piece>:<moment>` at its moments and `beat:<piece>` at its end; it ends in a living
  pose (values held, people breathe).
- The game opens a scene on a piece (`g.scene(place, {beat, here, moods, keys})`), says the lines **at the moments**
  the rows name (a voice takes as long as it takes: a piece never waits for a line, the game waits for both), then
  plays choices and mini-games in the pose the piece ends in.
- `here` and `moods` are the game's; every other starting value is the piece's `from`. Keys the game sets besides
  (variants of a piece) are named in its row (**keys:**) — they become the scene's states. People coming in during a
  piece wait unseen (behind a door, behind the wing) from the step's start; the game names them in `here`.
- Seconds are the piece's own, without lines. Shots: `wide` — the scene's picture camera; `medium` / `close` —
  `camera_target` + `camera_shot`, or a camera of the piece's own where the operator cannot frame it (the bureau and
  the office are rooms seen from their open side). The scenes' notes say it: in the wide shot of the bureau faces are
  small — **every line said to someone is in a medium or close shot**; faces lit and readable (the scenario §4: faces
  close in 1.1, 2.4, 3.1, 3.4, 3.5, 4.1 and the finale).
- Each scene's notes.md gets a «Contract for the check» block, as the Canterville scenes have it (a ```json block
  `{"beats": {name: {after, tells, seconds}}}`); the game's `check/run.mjs` reads it.
- What a piece shows replaces its plate; what no piece shows stays a plate or the narrator's. The plates stay in the
  game until the scene's pieces are merged (the check lists what is still waited for).
- Sounds (the key's and the inker's tapping, the drone, the switch's clack, the telephone, the typewriter) are not the
  scenes'; a scene shows what makes them.

### People in the scenes (element ids = the game's people.json keys)

Bureau: `riviere`, `robineau`, `telegraphist`, `madame`, `pilot`, `asuncion`. Field: `riviere`, `robineau`, `roblet`,
`pellerin`, `pilot`, `mechanic`, `mechanic_b`, `mechanic_c`. Cockpit: `fabien`, `radioman`. Office: `riviere`,
`madame`, `robineau`. The spot keys of stage 4 stay (`<id>_spot`); a piece may move people from them and leaves them
where it ends.

**Asks of the world:**

1. **Bureau.** `riviere_spot` gets `inker` (standing at the telegraph table, the tape in his hands); `madame_spot`
   (new: `door` — by the field door, as now; `inker` — behind the telegraphist's chair, reading over his shoulder). The
   map: one flag led at a time — `flag_hand` (none / blue / north / red: the flag in Rivière's hand), `flag_to` (where
   it is led: one of that flag's values — `san_julian`, `sea`, `field`, `north`, `off`), `flag_u` (0..1, smooth: how
   far along its way; the game sets the flag's own key to `flag_to` once it is there and `flag_hand` none),
   `flag_slip` (0..1: the flag sliding off its line, askew — a miss); Rivière's right hand on the flag while it is
   led. Points: `map#san_julian`, `map#sea`, `map#north_end` (the north line's end, where the red goes), with
   `map#blue`, `map#north`, `map#red`, `map#field` as now. Under the map a small table with a drawer (`map_drawer`,
   point `map_drawer#drawer`, key `drawer` 0/1): the dawn's red flag goes into it (`flag_to` `off`). The inker:
   `tape_pull` (0..1: the tape drawn out of the inker hand over hand, its words coming), `tape_mark` (words / line /
   cut: what the last tape shows — words, one long line, words breaking off).
2. **Field.** The switch: `lever` (0..1, smooth: its handle on `hangar_front#switch`, down … up); the floodlights come
   on **one by one** as `floods` passes ⅓, ⅔, 1 (each mast at once, with its snap; going down, out the same way). The
   insert `paper` (the order on the box, the pen — opened by `paper_open` 0..1; `ink` 0..1 the signature written from
   `paper#from` to `paper#to`; `blot` 0/1). The insert `folder` (the board's paper «On suspending the night flights»
   close in Robineau's open folder — `folder_open` 0..1). `cowling` (0/1: the European's engine cover open). The
   plane's landing and run: the pieces move `plane_*`, `engine`, `plane_lights` as they are.
3. **Cockpit.** `roll` (−70..70 degrees, smooth: the plane on a wing — the anchor tilted with the seated people;
   untried at stage 4), `water` (0..1: the sea glimpsed below in a flash), `climb` (0..1, smooth: the nose up, the
   cloud tops sinking past, the gap's light growing — at 1 the piece `above` begins), `house` (0/1: the lone house's
   window below lit). Notes from hand to hand: the cast's `note` in `fabien_with` / `radioman_with`.
4. **Office.** The insert `log_page` (the log's page close: `log_open` 0..1; `ink` 0..1 the line written from
   `log_page#from` to `log_page#to`; `blot` 0/1; `log_line` bearing / unknown — which words are written); her going
   out: the piece `leaves` (keys below).
5. **Cast parts.** `tape` (a strip of paper tape in both hands), `form` (a sheet of paper in the right hand),
   `receiver` (a telephone receiver, in the left hand), `gloves` (a pair of gloves in the left hand), `notebook` (a
   little notebook and pencil). Existing: `note`, `toolbox_held`, `spanner`, `sack`, `helmet_held`, `folder`,
   `cap_held`.

### New motions (Kimodo; a loop unless «once»)

| name | prompt | s | who |
| --- | --- | --- | --- |
| `pass_back` (once) | A seated person passes a small piece of paper back over their right shoulder to someone sitting behind them | 3 | Fabien |
| `pass_forward` (once) | A seated person leans forward and hands a small piece of paper to someone sitting in front of them with the right hand | 3 | radioman |
| `write_knee` | A seated person writes on a small pad resting on their knee with the right hand at a steady pace | 4 | Fabien, radioman |
| `tap_key` | A seated person taps quickly with the fingers of the right hand on a small key on the table in front of them | 4 | telegraphist, radioman |
| `side_ache` (once) | A standing person presses the right hand to the left side under the ribs for a moment, then takes it away | 3 | Rivière (П.2) |
| `switch_up` (once) | A person grips a lever on the wall in front of them with the right hand and pushes it up slowly | 4 | Rivière (М8) |
| `switch_down` (once) | A person grips a lever on the wall in front of them with the right hand and pulls it down slowly | 5 | Rivière (М8 «Отставить») |
| `helmet_off` (once) | A person pulls a leather helmet off their head with both hands | 3 | Pellerin, the pilot |
| `helmet_on` (once) | A person puts a leather flying helmet on their head with both hands and buckles it under the chin | 4 | the pilot |
| `show_hands` | A person tells a story excitedly, showing something with both hands held flat above their head | 4 | Pellerin |
| `gloves_pockets` (once) | A person pulls off their gloves and pushes both hands deep into their coat pockets | 4 | Pellerin |
| `laugh` | A standing person laughs, the shoulders shaking, leaning back a little | 3 | mechanics |
| `shoulder_touch` (once) | A person lays the right hand on the shoulder of someone standing in front of them for a moment and takes it away | 3 | Rivière |
| `sign_paper` (once) | A standing person signs a paper held flat on a folder in the left hand | 4 | Robineau, Rivière |
| `tear_paper` (once) | A person tears a sheet of paper in half and in half again with both hands | 3 | Rivière |
| `put_pocket` (once) | A person folds a paper and puts it into the inside pocket of their jacket | 3 | Robineau |
| `engine_work` | A person standing works on an engine at chest height with both hands | 4 | mechanics |
| `cap_on` (once) | A person puts a cap on their head with both hands | 2 | Roblet |
| `lift_box` (once) | A person bends down and lifts a heavy box from the ground by its handle | 3 | Rivière, Roblet |
| `walk_carry` | A person walks slowly carrying a heavy box by its handle in the right hand, the shoulders bent | 4 | Roblet leaving |
| `give_box` (once) | A person holds a heavy box out in front of them with both hands to someone | 3 | Rivière (М3) |
| `palm_out` | A person holds the right hand out flat, palm up, waiting for something to be put in it | 4 | Rivière (М4) |
| `pick_chocks` (once) | A person bends down and picks up two wooden blocks from the ground | 4 | Roblet |
| `wipe_hands` | A person wipes their hands on a rag | 4 | Roblet |
| `load_sack` | A person lifts a heavy sack from the ground and swings it onto their shoulder | 4 | mechanics |
| `phone_listen` | A standing person holds a telephone receiver to the left ear and listens | 4 | Rivière, Robineau |
| `hand_receiver` (once) | A person holds a telephone receiver out to someone beside them with the left hand | 3 | Rivière |
| `pull_tape` | A standing person pulls a narrow paper tape hand over hand from a machine on a table, reading it | 4 | Rivière (М9) |
| `tear_tape` (once) | A person tears off a strip of paper tape and holds it out to someone | 3 | Rivière |
| `hold_tape` | A person holds a strip of paper close to the chest with both hands | 4 | Madame Fabien |
| `sit_down` (once) | A person sits down on a bench behind them | 3 | pilot, Rivière, Robineau |
| `stand_up` (once) | A person seated on a bench stands up | 3 | pilot, Madame Fabien |
| `doze_drop` | A person sitting on a bench dozes, the head slowly dropping forward onto the chest and jerking up | 6 | telegraphist (dawn) |
| `shoulders_shake` | A person standing with the head bowed cries silently, the shoulders shaking | 4 | Robineau (3.7) |
| `hand_hover` (once) | A person raises the right hand over the shoulder of someone seated before them and lowers it without touching | 3 | Rivière |
| `coat_off` (once) | A person takes off their overcoat | 4 | Robineau (2.3) |
| `raise_hand` (once) | A person raises the right arm high above the head and holds it there | 3 | Rivière (Ш3) |
| `pull_chocks` (once) | A crouching person pulls two wooden chocks away from a wheel with both hands | 3 | mechanic, Roblet |
| `look_under` (once) | A person bends forward to look under a raised engine cover at chest height | 3 | the pilot (4.1) |
| `hand_on_side` | A person stands with the right hand resting on the side of something at shoulder height beside them | 4 | the pilot |
| `write_desk` | A seated person writes in a big book on the table in front of them with the right hand, leaning over it | 5 | Rivière (Ф.3) |
| `lay_paper` (once) | A person bends a little and lays a paper on a table in front of them | 3 | the Asunción pilot, Robineau |
| `gloves_on` (once) | A person pulls gloves on, one hand after the other | 4 | Madame Fabien |
| `fold_tape` (once) | A person folds a strip of paper and tucks it into a glove held in the left hand | 3 | Madame Fabien |
| `nod` (once) | A person nods once, slowly | 2 | Madame Fabien |
| `write_note` (once) | A standing person writes something short in a small notebook | 3 | Robineau (Ш3) |
| `cough` (once) | A person coughs into their fist | 2 | Robineau (epilogue) |

Existing (cast.md): `stand`, `walk`, `hands_behind`, `hold_waist`, `hold_low`, `coat_clutch`, `stand_easy`,
`desk_lean`, `fly_seated`, `write_seated`. The pieces' author may take a nearer existing one where Kimodo fails, and
says so in cast.md.

### Pieces

Each: **id** · scene · from · who moves (motions) · what happens · seconds · shot · lines (the game says them at the
moment named) · tells. Times are the bureau's `time`; «the stage-4 keys» — the step's keys as the game sets them now.

**Prologue**

- `dusk` · cockpit · `SKY.dusk`, `house` 0 · the plane flies on; below, the lone house's window lights (`house` 1) ·
  8 · wide, a slow push in to medium on Fabien · at `dusk:window`: the narrator «Below, the windows…» · `dusk:window`
- `note_back` · cockpit · after `dusk` · Fabien `write_knee`, `pass_back` (`fabien_with` note → `radioman_with` note);
  the radioman reads, `tap_key` on his key · 8 · medium on the two · at `note_back:read`: Fabien «San Julián. Sky
  clear» · `note_back:read`, `note_back:tap`
- `inker` · bureau · 19:50, `FLAGS.evening`, `tape` 1, Rivière at the map, the telegraphist at the inker `tap_key` ·
  the inker's tape, the telegraphist, then Rivière at the map · 6 · close → medium · at `inker:read`: the
  telegraphist «Patagonian: passed San Julián…» · `inker:read`, `inker:map`; then **M1 `flag`**
- `ache` · bureau · after `inker` · Rivière `side_ache` · 4 · close on Rivière · at `ache:say`: Rivière «Three in the
  air» · `ache:say`, `ache:hand`
- `papers` · bureau · 22:05, `FLAGS.julian`, dark outside · Robineau walks from his desk to Rivière at the map with
  his folder (`hold_waist`) · 6 · medium on the two · their lines after · `papers:near`
- `out` · bureau · after `papers` · Rivière walks out by the field door (`riviere_here` false at the end) · 6 · wide ·
  — · `out:door`

**Chapter I**

- `dark_drone` · field · `FIELD.dark`, the Chilean's lamp far in the dark (`PLANE.coming`), the mechanics by the gate
  looking up · Rivière walks to the switch · 6 · wide → medium on Rivière at the switch · — · `dark_drone:switch`;
  then **M8 `light`**
- `landing` · field · after M8 (`floods` 1) · the Chilean comes down out of the dark onto the lit field and rolls up
  to the hangar (`PLANE.coming` → `PLANE.stand`), the engine dies; Pellerin from behind the wing, `helmet_off`; the
  mechanics walk up · 14 · wide → medium on Pellerin · — · `landing:down`, `landing:stop`, `landing:pellerin`
- `breeze` · field · after `landing` · Pellerin to the mechanics; they `laugh`; Pellerin `show_hands` · 10 · medium on
  Pellerin and the mechanics · at `breeze:say`: Pellerin «Fine. A bit of a breeze»; at `breeze:hands`: «The ridge like
  a wall…» · `breeze:say`, `breeze:laugh`, `breeze:hands`
- `gloves` · field · after `breeze` · Pellerin `gloves_pockets` (his hands shake); Rivière in the shadow by the hangar
  · 6 · close on his hands, then on Rivière · — · `gloves:pockets`, `gloves:riviere`; then the chance «Тронуть за
  плечо» (one touch on `pellerin#chest`, 3 s)
- `touch` · field · after `gloves` · Rivière walks to him, `shoulder_touch`; Pellerin turns, surprised · 6 · medium on
  the two · at `touch:turn`: Rivière «Report to Robineau» · `touch:hand`, `touch:turn`
- `pass` · field · after `gloves` · Rivière walks past him toward the hangar · 5 · medium · at `pass:by`: Rivière
  «Report to Robineau» · `pass:by`
- `fine` · field · `FIELD.lit`, the Chilean standing; Robineau at the workbench, the form in his hand (`robineau_with`
  form); Rivière comes to him · 6 · medium on the two · their lines after · `fine:near`
- `fine_robineau` · field · after `fine` · Robineau `sign_paper` (long), `put_pocket` · 8 · medium on Robineau · — ·
  `fine_robineau:pocket`
- `fine_self` · field · after `fine` · Rivière takes the form, `sign_paper`, gives it back; Robineau `put_pocket` · 8 ·
  medium · at `fine_self:give`: «Give it to him from me», «Thank you, sir» · `fine_self:give`, `fine_self:pocket`
- `fine_tear` · field · after `fine` · Rivière takes the form and `tear_paper` before the mechanics; they look at one
  another · 6 · medium → wide · at `fine_tear:torn`: Robineau «You… but you never…», Rivière «Go to your supper» ·
  `fine_tear:torn`, `fine_tear:look`
- `roblet` · field · the stage-4 keys of 1.3 (Roblet `front`, the box at his feet) · the mechanics `engine_work`,
  slowing, turning to listen; the camera comes in to Roblet's hands on his cap · 10 · wide → close on his hands · at
  `roblet:say`: Robineau's and Roblet's lines; at `roblet:hands`: the narrator «Rivière looked at his hands…» ·
  `roblet:say`, `roblet:hands`
- `order` · field · after `roblet` · Rivière lays the order on the box (`lay_paper`) · 4 · medium · — · `order:laid`;
  then **M2 `pen`**
- `roblet_go` · field · after M2 · Roblet `cap_on`, `lift_box`, walks across the lit field to the gate with it
  (`walk_carry`, `roblet_with` toolbox_held) and out of the light; the mechanics keep their heads down · 16 · medium →
  wide · at `roblet_go:cap`: Rivière «I am not dismissing you…», Roblet «I understand» · `roblet_go:cap`,
  `roblet_go:gate`
- `box_lift` · field · after `roblet` · Rivière `lift_box` (`riviere_with` toolbox_held), `give_box` to Roblet · 4 ·
  medium on the two · — · `box_lift:held`; then **M3 `box`**
- `box_given` · field · after M3 · Roblet holds his box; the mechanics look at Rivière · 5 · medium → wide · at
  `box_given:look`: «Sir… you?» · `box_given:look`
- `palm` · field · after `roblet` (`roblet_with` spanner) · Rivière `palm_out` toward the spanner · 3 · close on the
  two hands · — · `palm:out`; then **M4 `spanner`**
- `chocks_pick` · field · after M4 · Roblet `pick_chocks`, walks to the plane's wheel · 8 · medium → wide · at
  `chocks_pick:say`: «Better you had fired me» · `chocks_pick:say`, `chocks_pick:gone`
- `trelew` · cockpit · `SKY.night` · the lights of Trelew pass under the wing; far sheet lightning; the radioman
  `pass_forward` a note, Fabien reads, `write_knee`, `pass_back`; he looks down at the lights till they go under the
  wing · 14 · medium on the two → close on Fabien · at `trelew:note`: the radioman «Trelew: land?»; at
  `trelew:answer`: Fabien «No. We’ll outrun it» · `trelew:note`, `trelew:answer`, `trelew:under`

**Chapter II**

- `asuncion_in` · bureau · 23:20, `FLAGS.trelew` · the Asunción pilot comes in by the field door, `lay_paper` on
  Robineau's desk, turns to Rivière · 8 · wide → medium on him · his lines after (by Ш1) · `asuncion_in:report`;
  **M1 `flag_north`** before this piece, in the step's opening shot (the stage-4 keys of 2.1)
- `storm_south` · bureau · after `asuncion_in` · `tape` 1; Rivière turns from the map to the telegraphist · 6 · close
  on the telegraphist reading, then Rivière · at `storm_south:read`: the telegraphist's two reports; at
  `storm_south:order`: Rivière «All stations…» · `storm_south:read`, `storm_south:order`
- `storm` · cockpit · `SKY.storm` · thrown about (`bob`, a little `roll`); the radioman `pass_forward`; Fabien
  `write_knee` with one hand, `pass_back` · 12 · medium on the two in the lightning · at `storm:note`: the radioman
  «Trelew closed…»; at `storm:answer`: Fabien «I don’t know» · `storm:note`, `storm:answer`; then **M5 `stick`**
- `back` · bureau · 00:30 · Robineau comes in by the field door to his desk · 6 · medium on him · his lines after (by
  1.2) · `back:desk`
- `folder_shift` · bureau · after `back` · Robineau opens his folder and shifts the papers in it · 4 · close · — ·
  `folder_shift:end`
- `to_map` · bureau · after `back` · Rivière walks to the map (his back to the room) · 4 · medium · — · `to_map:end`
- `coat_off` · bureau · after `back` · Robineau sees «Fabien» on the tape, falls silent, `coat_off` · 5 · medium · — ·
  `coat_off:end`
- `pilot_in` · bureau · after `coat_off` · the European pilot comes in by the field door, his helmet in his hand,
  looks at the map, `sit_down` on the bench, the helmet on his knees · 10 · wide → medium on him · — ·
  `pilot_in:look`, `pilot_in:sat`
- `phone` · bureau · 01:35, the stage-4 keys of 2.4 · the telephone rings; Rivière takes the receiver
  (`phone_listen`, `riviere_with` receiver) · 5 · close on Rivière's face · her line and his after · `phone:receiver`
- `phone_robineau` · bureau · after `phone` · Rivière `hand_receiver` to Robineau; Robineau `phone_listen`, then hangs
  up and does not raise his eyes · 9 · medium on Robineau · at `phone_robineau:talk`: Robineau «The wind, madame…» ·
  `phone_robineau:talk`, `phone_robineau:down`
- `phone_down` · bureau · after `phone` · Rivière hangs up · 3 · close · — · `phone_down:end`

**Chapter III**

- `she` · bureau · **keys:** `time` (01:45 told the storm / 02:10 the wind) · Madame Fabien comes in at the field door
  and stops (`coat_clutch`); Rivière turns to her; the pilot `stand_up` · 8 · wide → close on her face · her lines
  after · `she:in`, `she:up`
- `she_robineau` · bureau · after `she` · Robineau moves away to his desk · 4 · medium · — · `she_robineau:end`
- `tape` · bureau · 02:15 · the inker comes to life (`tape` 1); Rivière walks to it (`riviere_spot` inker) · 5 · medium
  on the inker and Rivière · — · `tape:at`; then **M9 `tape`**
- `comodoro` · bureau · after M9 · the telegraphist reads off the tape, raises his eyes to Rivière; she looks at the
  inker, the pilot at the tape · 8 · close on the telegraphist, then her, then the pilot · at `comodoro:read`: his
  line · `comodoro:read`, `comodoro:eyes`
- `minute` · bureau · 02:16 · the telegraphist's hand over the key (`telegraphist_reach` the key); the clock's second
  hand close; it holds while the timer runs · 4 · close on the hand and the clock · — · `minute:ready`; then the choice
- `bearing_sent` · bureau · after `minute` · the telegraphist `tap_key`, then takes his hand off; she looks at the
  silent inker · 6 · close on her · — · `bearing_sent:off`
- `hers_asked` · bureau · after `minute` · Rivière turns to her; she, not understanding at once · 6 · medium on the two
  · at `hers_asked:ask`: «What shall we send?», then hers, the telegraphist's, «Send it» · `hers_asked:ask`
- `own_sent` · bureau · after `minute` · the telegraphist `tap_key` as Rivière dictates, then raises his eyes; she in
  the doorway · 8 · close on the telegraphist, then her · at `own_sent:dictate`: Rivière's words · `own_sent:dictate`,
  `own_sent:eyes`
- `gap` · cockpit · `SKY.storm`, `gap` 0 → 1 · the gap opens overhead; the radioman writes and `pass_forward` · 8 ·
  medium on the two, the gap above · at `gap:note`: the radioman's note (by Ш2) · `gap:note`
- `key_held` · cockpit · after `gap` · the radioman presses the key and holds it (`radioman_reach`); Fabien looks at
  the fuel gauge · 6 · close on Fabien · — · `key_held:end`
- `lamp_note` · cockpit · after `gap` · Fabien holds the note to the instrument lamp a long time, looks at the light in
  the gap, `write_knee`, `pass_back`; the radioman `tap_key` · 14 · close on Fabien's face · at `lamp_note:write`:
  Fabien «To her: I see a light» · `lamp_note:write`, `lamp_note:tap`
- `laugh_note` · cockpit · after `gap` · Fabien laughs briefly at the signature (the game's mood), looks long,
  `write_knee`, `pass_back`; the radioman `tap_key`; the gap closes (`gap` → 0) mid-word · 12 · close on Fabien · at
  `laugh_note:write`: Fabien «To Rivière: understood. To her —» · `laugh_note:write`, `laugh_note:closed`; after any
  of the three, **M6 `climb`**
- `above` · cockpit · after M6 (`climb` 1) · the plane comes out over the clouds: the moon, the white sea of cloud, the
  stars (`above` 1, `rain` 0, `gap` 0); Fabien's face in the moonlight; the radioman `pass_forward`; Fabien
  `write_knee`, `pass_back`; the radioman `tap_key` · 18 · wide → close on Fabien · at `above:face`: the narrator «He
  knew…»; at `above:note`: the radioman «Beautiful» · `above:face`, `above:note`, `above:last`
- `last_tape` · bureau · 02:25, `tape` 1; **keys:** `tape_mark` (line / words / cut) · all look at the inker · 8 · close
  on the tape, then her face · at `last_tape:read`: the telegraphist's reading · `last_tape:read`
- `tape_torn` · bureau · after `last_tape` · Rivière `tear_tape`, gives it to her; she `hold_tape` (`madame_with` tape) ·
  6 · close on her hands and face · — · `tape_torn:held`
- `over_shoulder` · bureau · after `last_tape` · she walks to the telegraph table and reads over his shoulder
  (`madame_spot` inker) · 6 · medium · — · `over_shoulder:end`
- `scraps` · bureau · after `last_tape` · a few scraps of tapping; the inker stops (`tape` 0) · 6 · medium on the
  telegraphist · at `scraps:read`: «He is sending something…» · `scraps:read`, `scraps:stop`
- `silence` · bureau · 02:45 · Rivière at the map; the telegraphist looks at the clock, counting · 6 · close on the
  clock and the telegraphist · — · `silence:count`; then **M1 `flag_sea`** or **`flag_hold`**
- `pilot_out` · bureau · after M1 · the pilot `stand_up`, `helmet_on`, walks out by the field door · 10 · medium → wide
  · — · `pilot_out:helmet`, `pilot_out:door`
- `to_office` · bureau · after `pilot_out` · Robineau leads her out by the office door (both `_here` false at the end)
  · 8 · wide · — · `to_office:door`
- `shoulders` · bureau · 02:48 · Robineau comes back by the office door, stands at his desk, `shoulders_shake` · 8 ·
  medium on him · — · `shoulders:stand`; then the choice
- `work` · bureau · after `shoulders` · Robineau sits to his report (`robineau_spot` writing); Rivière's `hand_hover`
  over his shoulder · 8 · close · — · `work:hand`
- `sit` · bureau · after `shoulders` · Rivière `sit_down` on the bench; Robineau, slowly, beside him; the telegraphist
  looks at them and turns back to the inker · 12 · wide → medium on the bench · — · `sit:sat`, `sit:turn`
- `alone` · bureau · after `shoulders` · Rivière turns to the map; Robineau stands, takes his folder, walks out by the
  field door without his coat · 12 · medium → wide · — · `alone:folder`, `alone:door`

**Chapter IV**

- `european` · field · `FIELD.dark`, the European under the lamps, `engine` 0.4 (warming), the mechanics `load_sack`,
  the pilot by the wing; **keys:** `roblet_spot`, `workbench`, who is here (the game's) · Rivière walks to the switch ·
  10 · wide → medium on Rivière · — · `european:switch`; then **M8 `light_european`**
- `twice` · field · after M8 · Roblet closes the cowling (`cowling` 1 → 0), `wipe_hands`; the pilot looks at Roblet,
  then at Rivière · 8 · medium · at `twice:wipe`: «Checked it twice» · `twice:wipe`, `twice:look`
- `at_chocks` · field · after M8 · close on Roblet at the wheels with the chocks, not looking at the engine · 4 · close
  · — · `at_chocks:end`
- `who_checked` · field · after M8 · the pilot to the young mechanic; then `look_under` the cowling (`cowling` 1); the
  camera to Roblet's empty workbench under its lamp · 12 · medium → close on the bench · at `who_checked:ask`: «Who
  checked it?», «I did…» · `who_checked:ask`, `who_checked:under`, `who_checked:bench`
- `robineau_out` · field · after M8 · Robineau walks in from the office's side, buttoned up, the folder and the report
  under his arm · 8 · medium · — · `robineau_out:near`
- `window` · field · after M8 · the camera up to the lit window upstairs: her silhouette (`madame_window` 0 → 1); back
  to the pilot · 8 · medium on the window → medium on the pilot · at `window:pilot`: the pilot's two lines ·
  `window:her`, `window:pilot`
- `folder` · field · after `window` · Robineau looks up at the window, then opens his folder: the board's paper close
  (`folder_open`), shuts it · 8 · close → the insert · at `folder:look`: «One more… this same night…» ·
  `folder:look`, `folder:paper`, `folder:shut`
- `ready` · field · after `folder`; **keys:** `bends` (none / one / bends) · none: the pilot `helmet_on`, waits, does
  not look at the window; one: he turns to Rivière; bends: the mechanics by the bags talk low, the pilot buckles his
  helmet and `hand_on_side` · 8 · medium on the pilot · at `ready:say`: «Ready, sir» / «Ready. Ready a long time» ·
  `ready:say`
- `runup` · field · the stage-4 keys of 4.2 · the engine runs up (`engine` → 1); the pilot looks at Rivière; close on
  Rivière while the timer runs · 4 · close · — · `runup:look`; then the choice
- `hand_up` · field · after `runup` · Rivière `raise_hand` and holds it · 3 · medium · — · `hand_up:up`; then **M7
  `chocks`**
- `takeoff` · field · after M7; **keys:** `roblet` (remove: Roblet `pull_chocks`; else a mechanic), `robineau` (sit /
  work / silent: beside him looking at the window / writing the time in his `notebook` / by the wall looking after the
  lights) · the pilot behind the wing (`pilot_here` false); the plane runs across the lit field and goes north, its
  lights melting (`PLANE.stand` → `PLANE.away` and on); her silhouette still · 16 · wide → medium on Rivière and
  Robineau · at `takeoff:gone`: Robineau «Two fifty-two» (work) · `takeoff:chocks`, `takeoff:off`, `takeoff:gone`
- `stand_down` · field · after `runup`; **keys:** `bends` (none: the mechanics freeze; else the pilot `helmet_off`
  slowly, looks at the plane) · 8 · medium on the pilot · at `stand_down:pilot`: «Stand down? You?» / «Till dawn,
  sir»; at `stand_down:robineau`: «To the board… shall I write?», «I will myself» · `stand_down:pilot`,
  `stand_down:robineau`; then **M8 `light_off`**
- `dark_field` · field · after M8 · the engine dies; the pilot stays by the wing (`hand_on_side`); Rivière walks toward
  the office · 10 · wide · at `dark_field:still`: Roblet «Because of me?», «No» (keep) · `dark_field:still`,
  `dark_field:walk`
- `waits` · field · after `runup` · Rivière does not move; the pilot looks at him, at the window, at him again · 8 ·
  close on Rivière, then the pilot · at `waits:say`: «He won’t come now», «Since you say nothing — by the timetable» ·
  `waits:say`
- `timetable` · field · after `waits`; **keys:** `robineau` · the pilot behind the wing; a mechanic, looking at the
  wing and at Rivière, `pull_chocks`; the plane runs and goes; Rivière's `raise_hand` when the lights are in the sky;
  he stands till the drone dies · 18 · wide → medium on Rivière · at `timetable:gone`: Robineau «Gone» (sit) ·
  `timetable:chocks`, `timetable:gone`, `timetable:hand`

**The finale and the epilogue** (chapter IV's steps)

- `office` · office · three o'clock, the stage-4 keys of Ф.1 (by the ending: her spot, the floods and the plane below)
  · Rivière comes in by the door to his spot; she turns to him (silence) · 8 · wide → medium on her · — · `office:in`
- `rises` · office · after `office` (dawn) · she `stand_up` from the visitor's chair, walks toward the door · 5 ·
  medium · — · `rises:up`
- `gloves_on` · office · after `office` · she `gloves_on` · 4 · close on her hands · — · `gloves_on:end`
- `tape_glove` · office · after `office` · she `fold_tape` into her glove · 4 · close on her hands · at
  `tape_glove:end`: «I will be at home» · `tape_glove:end`
- `leaves` · office · after `office`; **keys:** `leave_turn` (nod / none / look / wait / past — to him, Ф.2),
  `leave_look` (none / sky / field — to the window, Ф.2) · she walks to the door; at the door what the keys say; out
  (`madame_here` false) · 10 · medium → wide · — · `leaves:door`, `leaves:look`, `leaves:gone`
- `log` · office · Rivière sits at the desk (`riviere_spot` desk), opens the log (`log_open`) · 5 · medium → the insert
  · — · `log:open`; then **M2 `log`**
- `log_done` · office · after M2 · the insert closes; Rivière looks out at the window; the camera through the glass
  down to the yard (Roblet, the bench, Robineau — the stage-4 keys `yard_*`) · 8 · medium → through the window · — ·
  `log_done:window`
- `doorway` · office · after `log_done` · Robineau appears in the doorway · 4 · medium on him · at `doorway:in`: «I am
  here, sir» · `doorway:in`
- `victory_map` · bureau · 03:10, `outside` empty · Rivière comes out of the office door to the map · 6 · medium · — ·
  `victory_map:at`; then **M1 `flag_red`**
- `silence_map` · bureau · 03:10 · Rivière comes out to the map; looks at the red flag at the field and does not touch
  it · 8 · close on the flag, then his face · — · `silence_map:look`
- `dawn` · bureau · dawn (06:00), `outside` rolled; the telegraphist `doze_drop` on the bench; **keys:** `roblet` (keep:
  he pushes the wing — in the window; fired: the workbench empty) · Rivière at the map · 8 · wide → toward the window ·
  — · `dawn:window`; then **M1 `flag_down`**
- `flags_down` · bureau · after M1; **keys:** `robineau` (sit: he takes them down with him; work: at his desk, eyes
  down; silent: not there) · Rivière takes the other flags down one by one into the drawer · 10 · medium · — ·
  `flags_down:end`
- `next_evening` · bureau · 19:40, the next dusk; **keys:** `outside` by the ending, the flags · 6 · wide → medium on
  Robineau · the news after · `next_evening:in`
- `bench_again` · bureau · after `next_evening` · Robineau `sit_down` on the bench without asking, catches Rivière's
  eye, `stand_up`; Rivière walks to the map · 8 · medium · at `bench_again:up`: «Forgive me» · `bench_again:up`
- `report` · bureau · after `next_evening` · Robineau `lay_paper` (the report) on the desk · 4 · medium · at
  `report:laid`: «All by the clock, sir», «Good» · `report:laid`
- `cough` · bureau · after `next_evening` · Robineau `cough` · 3 · close · at `cough:end`: «I seem to have caught a
  cold…», «Get to work» · `cough:end`
- `montevideo` · bureau · after `next_evening` · `tape` 1; the telegraphist reads · 6 · close on the tape and him · at
  `montevideo:read`: «European: passed Montevideo…», then «Patagonian: passed San Julián…» · `montevideo:read`; then
  **M1 `flag_blue`**
- `chilean_lands` · bureau · after M1 (`outside` landing) · the camera to the window: the Chilean comes down under the
  floodlight · 6 · toward the window · — · `chilean_lands:end`
- `release` · bureau · after `next_evening` · Rivière looks at the map a long time · 6 · close on him · at
  `release:ask`: «Release the Patagonian?»; at `release:say`: «Release» · `release:ask`, `release:say`; then **M1
  `flag_late`**
- `telegram` · bureau · after `next_evening` (`outside` idle) · Robineau `lay_paper` (the telegram); Rivière walks to
  the window; outside the field dark, Pellerin smoking by his plane · 12 · medium → Rivière at the window, the field
  beyond · at `telegram:read`: the telegram; at `telegram:window`: the narrator «The mail went by day…» ·
  `telegram:read`, `telegram:window`

### Mini-games (each in the pose its piece ended in; the game sets the keys named)

| id | § | scene, after | gesture | marks on | keys the game drives | s | a miss leaves |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `flag` | М1 | bureau, `inker` | lead slowly (a trace) | `map#blue` → `map#san_julian` | `flag_hand` blue, `flag_to`, `flag_u`, `flag_slip`; then `blue` | 5 | too quick or off the line: the flag slides off (`flag_slip`), Rivière sets it by hand |
| `flag_north` | М1 | bureau, 2.1's opening | lead slowly | `map#north` → `map#field` | the same, north | 5 | the same |
| `flag_sea` | М1 | bureau, `silence` (the bearing) | lead slowly | `map#blue` → `map#sea` | the same, blue | 5 | the same; she watches where he puts it |
| `flag_hold` | М1 | bureau, `silence` (no bearing) | hold, by the count | `map#blue` (Rivière's finger on it) | `flag_hand` blue, `flag_slip` | 5 | let go too soon: the flag rocks and stays by Trelew |
| `flag_red` | М1 | bureau, `victory_map` | lead slowly | `map#red` → `map#north_end` | the same, red | 5 | the same |
| `flag_blue` | М1 | bureau, `montevideo` | lead slowly | `map#blue` → `map#san_julian` | the same, blue | 5 | the same |
| `flag_late` | М1 | bureau, `release` | lead slowly | `map#red` → `map#north_end` | the same, red | 5 | the same |
| `flag_down` | М1 | bureau, `dawn` | lead slowly | `map#red` → `map_drawer#drawer` | the same, red to `off`; `drawer` 1 | 5 | too quick: it falls; Rivière picks it up and puts it in the drawer |
| `pen` | М2 | field, `order` | lead slowly (a trace) | `paper#from` → `paper#to` | `paper_open`, `ink`, `blot` | 5 | too quick: a blot; Robineau blots it, it is signed |
| `log` | М2 | office, `log` | lead slowly (a trace) | `log_page#from` → `log_page#to` | `log_open`, `ink`, `blot`, `log_line` | 5 | too quick: a blot; Rivière blots it himself |
| `box` | М3 | field, `box_lift` | hold, then let go | `riviere#hand_r` | `riviere_with`, `roblet_with`, `roblet_reach` | 4 | held too long: Roblet takes the box himself |
| `spanner` | М4 | field, `palm` | hold, then let go | `riviere#hand_r` | `roblet_reach`, `roblet_with`, `riviere_with` | 4 | the palm taken back too soon: Roblet lays the spanner on the workbench himself |
| `stick` | М5 | cockpit, `storm` | balance | `fabien#hands` | `roll`, `water`, `flash` | 10 | lost: the plane on a wing (`roll` ~60), Fabien rights it; the sea below in the lightning |
| `climb` | М6 | cockpit, `key_held` / `lamp_note` / `laugh_note` | pull slowly | `fabien#hands` | `climb` | 8 | too sharp: Fabien drags it up himself, with a jerk |
| `chocks` | М7 | field, `hand_up` | hold, then let go | `riviere#hand_r` (raised) | `engine` | 5 | held too long: the pilot moves off by himself at the mechanic's sign |
| `light` | М8 | field, `dark_drone` | pull slowly (up) | `hangar_front#switch` | `lever` 0 → 1, `floods` 0 → 1 | 4 | too quick: a mechanic finishes pulling it |
| `light_european` | М8 | field, `european` | pull slowly (up) | `hangar_front#switch` | the same | 4 | the same |
| `light_off` | М8 | field, `stand_down` | pull slowly (down) | `hangar_front#switch` | `lever` 1 → 0, `floods` 1 → 0 | 6 | too quick: Robineau finishes pulling it |
| `tape` | М9 | bureau, `tape` | pull slowly | `tel_inker#ink` | `tape_pull` | 5 | too quick: the tape runs out by itself, the telegraphist reads |

«Тронуть за плечо» (1.1): one touch on `pellerin#chest` within 3 s right after `gloves` (a press with no petals, its
arc of time running down). The timers of Ш2 and Ш3 (10 s): the arc of time on the choice's mark. Person points the
game uses: `#chest`, `#hand_r`, `#hands` (the engine's). Scene points to add: `map#san_julian`, `map#sea`,
`map#north_end`, `map_drawer#drawer`, `paper#from`, `paper#to`, `log_page#from`, `log_page#to`.
