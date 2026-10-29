// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 3 of the game (moood-me/moood docs/writing/game-stages.md): the whole play on the world's scenes as they are —
// people stand, the scenes only say who is there, their faces and what they hold (and their own keys: the lamp, the
// candle, the rain on the panes, the lampada). What the scenario's pieces would show is a plate with “Next” (g.plate,
// g.sheet); a mini-game is its stub — a mark to press and a card saying what it will be (minigames/stub.js); a place
// the world has not got yet — the people in one of its scenes and a label saying where it really is (PLACES).
//   g.state — what the play carries: {shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys}, {cut}) — that place of the game (PLACES: the world's scene it is played on,
//     its keys there, and where it really is when that scene only stands in for it), full-screen: of the game's people
//     only `here` are there — those of them the scene has (`<id>_here`, the engine's key; whom it has not are not seen:
//     voices only) —, their faces as `moods` say ({id: mood}); `keys` — values of the scene's own keys (its
//     scene.json's states) or a person's (`<id>_with`…). Always opened anew; `cut` — in one cut, else through black.
//     A scene with a `moment` (its script lays out the scenario's moment) is opened on the moment, the rest set over it
//   g.beat(name, {wait}) — a piece of the shown scene (its key `beat`); → once it has ended (the scene tells
//     `beat:<name>`), or at once with wait: false; g.scene(place, {beat}) opens the scene on it.
//     g.told(text, ms) — till the scene tells `text` (→ true) or ms pass (→ false). piece(g, name, {moment: fn}) — the
//     piece with the lines said at its moments (stage 5)
//   g.here(id, on) — someone of the shown scene comes or goes (in one cut); g.mood(id, mood) — their face (both: only
//     the game's people the scene has; others are let be)
//   g.set(key, value, seconds) — one of the shown scene's own keys (or a person's): at once, or moved over seconds;
//     g.get(key) — what it is now
//   g.wait(ms) — time of the game's own (a pause)
//   g.say(who, text, {at, how}) — someone of the game's people (people.json) says it over `at` (default: over
//     themselves if they are in the scene, else low in the middle, as the narrator), in their voice (how: this line's
//     own manner); → a breath after it is heard. g.think(who, text, {how}) — what they think, not said: their voice, a
//     whisper inside the head, shown low in the middle (the Dreamer's thoughts)
//   g.plate(text) — a plate over the scene: what happens here that the scene does not show; → once “Next” is pressed
//   g.sheet(title, lines) — the same, a list
//   g.choose(choice, {ref: options}, {within, otherwise}) — the player presses one of the points ('id#point' | 'id'),
//     then one of its options ([{id, label}]: petals, one too — the language of mini-games, hub.offer); → the option's
//     id, kept in state.choices[choice] (choice null: not a choice of the chapter's map). within (ms) — a chance, not
//     a question (the scenario's ✦): nothing pressed so long — `otherwise`
//   g.play(minigame, opts) — a mini-game (a module of minigames/: {title, about, skipped, missed, run(g, b, opts,
//     signal)}); the signal aborts when it is skipped (the page's ⏭, where it may be skipped) or the step is left; → its
//     result
//   g.minigame({phrase}) — inside a minigame's run: the language's mini-game begun; g.failed() — a mistake in it (from
//     then on the page's ⏭ may skip it); g.card(title, gesture, text) — a stub's card beside it (→ a function that
//     takes it away; gone with the step)
//   g.apply(choice) — what the option chosen does, by EFFECTS: each mark, the player told what came of it
//   g.mark(key, value, text) — remembered (state.marks[key]); text — what the player is told; null — told nothing
//   g.title(text) — words over the scene, as a title between times; → once they have gone
//   g.done() → once the step's code is through: the page's ⏭ taken back; g.leave() — the step left behind (game.js)
// The page's ⏭ (bespoke.forward) is the step's while it is played ({forward}: whether the player has seen the step —
// game.js): where the step is seen, pressed, the step goes on at once to its next interaction — the next line said,
// plate, choice, minigame, scene or title —, the waits between over at once, the line heard dropped. In a minigame the ⏭
// skips it; while a choice or a plate waits there is none.
// A step may be played up to a minigame unseen, without time (the author's map: a jump — jump.js j), or all through
// (a dry run: game.js, check/run.mjs): then nothing of it is said, shown or heard, a plate goes by at once, and a
// minigame gives its `skipped` (or what the dry run asks: j.result — check/run.mjs plays the misses too).

// The game's places (scenario §4) and the world's scene each is played on — the one map of them: its folder and the
// keys that make it that place at that time (stage 4, `r3/nights-scenes`: every place on its own scene). The embankment
// lays itself out by its `moment` (a scenario step: the light, the rain, who stands where, holding what — its notes.md),
// which the steps give; Grandmother's room by its people's spots (`<id>_spot`), the pin, the door, the hat on the table
// and its `time` (sunday, memory); the mezzanine by its spots and its cups; the room by its `moment` (tea, letter, corner, monday, window) and keys (the letter on the table, the
// cobweb, the window). `where` — a label high on the left, where a scene is not yet quite what the scenario has. The
// steps name places, never folders. (The embankment at night with no one there is also the map's background: game.js.)
export const PLACES = {
  // 1. the canal embankment by the lamp
  evening: { folder: 'embankment', keys: { moment: 'prologue' } }, // the prologue: the evening, the lamp not lit yet
  night: { folder: 'embankment', keys: {} }, // the four nights: the step's `moment`
  rain: { folder: 'embankment', keys: {} }, // Н4 in the rain: the step's `moment`
  day: { folder: 'embankment', keys: { moment: 'day' } }, // Д2
  town: { folder: 'embankment', keys: { moment: 'morning' } }, // «Утро»
  // 2. the Dreamer's room
  room: { folder: 'room', keys: { moment: 'tea', candle: 0, rain: 0, sun: 1, tea: true, letter_table: true, cobweb: 1, window: 0 } }, // Д1
  morning: { folder: 'room', keys: { moment: 'letter', candle: 1, rain: 1, sun: 0, tea: false, letter_table: false, cobweb: 1, window: 0 } }, // «Минута», «Лестница», «Окно»
  sunny: { folder: 'room', keys: { moment: 'letter', candle: 0, rain: 0, sun: 1, tea: false, letter_table: false, cobweb: 1, window: 0 } }, // «Утро»
  // 3. Grandmother's house, and the mezzanine upstairs
  grandmother: { folder: 'grandmother', keys: { lampada: 1, time: 'sunday', hat_table: false } }, // Вс, «Булавка»
  memory: { folder: 'grandmother', keys: { time: 'memory', pin: 'off', door: 'open', nastya_spot: 'door', nastya_with: ['bundle'], nastya_reach: { r: [-1.95, 3.74, 1.0], l: [-1.85, 3.88, 1.0] }, lodger_spot: 'stair', lodger_with: ['books'] } }, // 2.4
  mezzanine: { folder: 'mezzanine', keys: { cold: false } }, // «Мезонин»
  // 4. the acquaintances' door
  door: { folder: 'door', keys: { door: 'shut' } }, // Д3
};
// The embankment at night with no one there: the map's background (game.js)
export const MAP = { folder: 'embankment', state: { nastya_here: false, dreamer_here: false, lamp: 1 } };

// No scales (scenario §8): his deeds she saw and remembers decide. What the player sees of the play as it stands, low
// on the left (ui.js gauge): the letter's branch (A — given to Glasha, C — given back to her, U — “I took it”, U4 — the
// truth in the rain) once the door has been reached, and the marks that decide — Said, Confessed, Left, Glasha — once
// set.
export function standing(state) {
  const f = facts(state), rows = [];
  if ('door' in state.choices) {
    const letter = { A: tr('A — given to Glasha'), C: tr('C — given back to her'), U: tr('U — “I took it”'), U4: tr('U4 — the truth in the rain') }[f.letter];
    rows.push({ name: tr('The letter'), value: f.letter ? letter : tr('in his pocket') });
  }
  const marks = [[f.said, tr('Said')], [f.confessed, tr('Confessed')], [f.left, tr('Left')], [f.glasha, tr('Glasha')]].filter(([on]) => on);
  if (marks.length) rows.push({ name: tr('Marks'), value: marks.map(([, name]) => name).join(' · ') });
  return rows;
}

// What each option of each choice says to the player as it is made, and under its fork on the map (scenario §5, the
// chapters' «Карта»: what he did — what came of it). What a choice leaves is read from the choice itself (facts). What depends on more than the option the chapter
// says itself (its choice's `also`).
const says = text => ({ says: text });
export const EFFECTS = {
  bow: {
    bow: says(tr('You bowed to the house. — The yardman laughed: “Who are you talking to, sir?”')),
    pass: says(tr('You passed it as if you did not know it. — The house stayed alone.')),
  },
  approach: {
    approach: says(tr('You went up to her. — She started and walked quickly away along the railing.')),
    pass: says(tr('You passed by and looked back. — She was already walking along the embankment.')),
  },
  defend: {
    stick: says(tr('You went at him with your stick. — “Pardon…” — and he turned off.')),
    arm: says(tr('You caught her up and offered her your arm. — He saw a couple and fell behind.')),
  },
  promise: {
    promise: says(tr('You promised her not to fall in love. — She shook your hand, like a comrade.')),
    joke: says(tr('You joked: how can one promise such a thing? — “Then don’t come… No, come.”')),
    silent: says(tr('You said nothing and bowed. — She took your silence for a yes.')),
  },
  story: {
    plain: says(tr('You told her the truth about yourself. — She laid her palm on your sleeve. You moved away.')),
    type: says(tr('You told her about yourself as a “type”. — “You talk like a book!”')),
    venice: says(tr('You made up a story: Venice, a duel, a countess. — She played along; the name stuck to you.')),
  },
  judge: {
    reason: says(tr('You said he must have a reason. — “You are kind. Truly kind.”')),
    unworthy: says(tr('You said he may not be worth her. — “Don’t you dare!”')),
    silent: says(tr('You were silent, looking at the water. — She answered herself: “He’ll come.”')),
  },
  already: {
    tap: says(tr('You interrupted her: “I already have.” — She froze and stepped back to the railing.')),
    missed: says(tr('You did not interrupt her. — She called you a friend.')),
  },
  door: {
    give: says(tr('You gave her letter into strangers’ hands. — Glasha stuffed it into her apron.')),
    keep: says(tr('You carried her letter away again. — It is in your pocket, by your heart.')),
  },
  told: {
    brought: says(tr('You told her “I took it.” — She waited at ten, and you stood behind her.')),
    tomorrow: says(tr('You told her: he will get it tomorrow. — She waited for ten all the same.')),
  },
  answer: {
    brought: says(tr('You told her “I took it.” — She waited at ten, and you stood behind her.')),
    here: says(tr('You gave her back her letter and the choice. — She tore it up herself.')),
  },
  why: {
    love: says(tr('You told her why: because you love her. — She looked at the letter, not at you.')),
    couldnt: says(tr('You said: I couldn’t. — “Every day,” she said, to the water.')),
  },
  guessed: {
    yes: says(tr('You said: yes, I love you. — “So be it. He’ll come now, and you’ll see what he is like.”')),
    joke: says(tr('You turned it into a joke: in love with everyone. — She laughed and looked at you a long time.')),
    silent: says(tr('You were silent. — She talked about him: his books, “Ivanhoe” three times.')),
  },
  still: {
    yes: says(tr('“Still?” — “Yes.” — She took your arm tighter.')),
    silent: says(tr('You were silent. — She let go of your arm and talked about him.')),
  },
  after: {
    stay: says(tr('You stayed beside her. — “You are like a brother to me. Truly.”')),
    leave: says(tr('You left: “I must go.” — She watched you go and did not call you back.')),
    glasha: says(tr('You told her: he will get it tomorrow, he asks every day. — You gave your rival her hope.')),
  },
  rain: {
    love: says(tr('You told her “I love you” while she cried.')),
    will_come: says(tr('You told her: he will come. — She cried harder.')),
    embrace: says(tr('You put your arm round her shoulders and said nothing. — She grew quiet.')),
    not_brought: says(tr('You told her: “I didn’t take it.” — She took the letter with two fingers and went without a word.')),
  },
  free: {
    love: says(tr('You told her “I love you” when she asked for nothing. — At ten she turned away from the corner.')),
    will_come: says(tr('You comforted her with the other one. — At ten she watched the corner.')),
    silent: says(tr('You gave her a night of nothing. — At ten she watched the corner.')),
  },
  hand: {
    let_go: says(tr('You let go of her hand. — She went to him.')),
    hold: says(tr('You held her hand. — She pulled it free herself.')),
    reach: says(tr('You reached after her: “Nastenka!” — She stopped halfway.')),
  },
  sunday: {
    hand: says(tr('You took her hand. — She decided with your hand in hers.')),
    out: says(tr('You went out onto the stairs. — You heard her choice in the steps.')),
    stay: says(tr('You stayed by the door, your hat in your hands.')),
  },
  table: {
    put: says(tr('You laid the letter on the table: “I didn’t take it.” — She went with him without a word to you.')),
    missed: says(tr('You kept silent. — Glasha had told him: some gentleman brought a letter and changed his mind.')),
  },
  cobweb: {
    sweep: says(tr('“Take the cobweb down at last.” — The empty corner looked strangely bare.')),
    leave: says(tr('“Leave it.” — She seemed to have grown old, and the room with her.')),
  },
  call: {
    reach: says(tr('You reached out to her at the window. — “What?” — “Nothing. The tea is getting cold.”')),
    still: says(tr('You did not stir. — She stood at the window till the last stroke.')),
  },
};
export const ENDINGS = [
  { id: 'minute', label: tr('The Minute') }, { id: 'stairs', label: tr('The Minute: the Stairs') },
  { id: 'morning', label: tr('The Morning') }, { id: 'mezzanine', label: tr('The Mezzanine') },
  { id: 'pin', label: tr('The Pin') }, { id: 'window', label: tr('The Window') },
];

// What follows from the play so far — all a step reads of it besides g.state. A choice not made (its step gone to by
// the author's map past it) gives its first option.
export function facts(state) {
  const c = state.choices, m = state.marks;
  const f = {
    bow: c.bow ?? 'bow', approach: c.approach ?? 'approach', defend: c.defend ?? 'stick', promise: c.promise ?? 'promise',
    story: c.story ?? 'plain', judge: c.judge ?? 'reason', already: c.already ?? 'tap', door: c.door ?? 'give',
  };
  f.bowed = f.bow === 'bow'; // «Поклон»
  f.approached = f.approach === 'approach'; // «Подошёл»
  f.stick = f.defend === 'stick'; // «Палка» (else «Под руку»)
  f.hem = m.hem === true; // «Подол» (М2 missed)
  f.stain = m.stain === true; // «Пятно» (М3 missed)
  // the letter's branch (§3): A — given at the door; else, at night, U — “I took it”, C — “No. Here it is”; U4 — the
  // truth told in the rain (Н4)
  f.letter = f.door === 'give' ? 'A' : !('answer' in c) ? null : c.answer === 'here' ? 'C' : c.rain === 'not_brought' ? 'U4' : 'U';
  // «Сказал» (before the fourth night: Ш1, В7а, В8) and «Признался» (В10 «Я люблю вас»)
  f.said = c.already === 'tap' || c.why === 'love' || c.guessed === 'yes';
  f.confessed = c.rain === 'love' || c.free === 'love';
  f.knows = f.said || f.confessed; // she knows he loves her
  f.couldnt = c.why === 'couldnt'; // «Не смог»
  f.joked = c.guessed === 'joke'; // «Отшутился»
  f.left = c.after === 'leave'; // «Ушёл»
  f.glasha = c.told === 'tomorrow' || c.after === 'glasha'; // «Глаша»
  f.hand = c.hand ?? 'let_go'; // «Отпустил» / «Держал» / «Тянулся» (М5, A)
  f.sunday = c.sunday ?? 'hand'; // «Взял» / «Вышел» / «Остался» (В11, C)
  f.table = c.table ?? 'put'; // ✦ the letter on the table (U, Sunday)
  // the finale (§9): one row of the rule for every state
  f.ending = f.letter === 'U4' ? 'window'
    : f.letter === 'U' ? (f.table === 'put' ? 'window' : 'pin')
      : f.letter === 'C' ? (f.confessed ? 'mezzanine' : 'stairs')
        : f.said ? 'morning' : 'minute';
  // how he is called by the name his story gave him (В4): «переписчик», «тип», «венецианец»
  return f;
}

// Her answer to his first confession, wherever it is (Ш1, В7а, В8, В10 — scenario §8, «строка уговора»): what he
// promised at her corner, said back to him; never twice
export async function agreement(g) {
  if (g.state.marks.agreed) return;
  g.mark('agreed', true, null);
  const f = facts(g.state);
  if (f.promise === 'promise') await g.say('nastya', 'But you promised', { how: 'quickly, half a reproach, half a laugh' });
  else if (f.promise === 'joke') await g.say('nastya', 'There, you see. I told you so');
  else await g.say('nastya', 'But you said nothing then…', { how: 'and she breaks off' });
}

// piece(g, name, {moment: fn}, open) — the piece `name` of the shown scene (its key `beat`; the scene tells
// `<name>:<moment>` at its moments and `beat:<name>` as it ends), each moment's fn (the lines said there) run as it is
// told, in order; open — the scene opened on it (g.scene with `beat`), its moments listened for first; → once the piece
// has ended and its moments' lines are said
export async function piece(g, name, at = {}, open = null) {
  const moments = Object.entries(at).map(([m, fn]) => [g.told(`${name}:${m}`, BEAT), fn]);
  if (open) await open();
  const ended = g.beat(name);
  for (const [heard, fn] of moments) if (await heard) await fn();
  await ended;
}

const BEAT = 180000; // a piece longer than this has not ended: the scene lacks it
const SKIPPABLE = 20000; // ms in a minigame of a step not seen yet before the ⏭ may skip it

export function context(b, view, hub, state, j = null, { forward = null } = {}) {
  const left = new AbortController(); // the step is left behind (game.js)
  const gone = () => left.signal.aborted;
  const never = new Promise(() => {});
  const alive = p => p.then(v => (gone() ? never : v));
  const unseen = () => j?.on;
  // the ⏭ pressed (fast: the step going on at once to its next interaction — land() there); the game's own waits going
  let fast = false, waiting = false, showing = false;
  const waits = new Set();
  const sleep = ms => (gone() ? never : unseen() ? j.sleep(ms) : fast ? Promise.resolve() : new Promise(ok => {
    const w = { ok: () => gone() || ok() };
    w.timer = setTimeout(() => { waits.delete(w); w.ok(); }, ms);
    waits.add(w);
  }));
  const put = (key, value, seconds) => (unseen() ? j.did([key, value]) : b.set(key, value, seconds));
  let people = new Set(), present = new Set(); // the shown scene's people; those of them there now
  let opening = null; // the piece the scene was opened with, till g.beat takes it up: {name, ended}
  let playing = null; // the minigame played now: {signal, end, skippable}
  // the page's ⏭ as the step stands now: none while a choice or a plate waits or the step is still unseen; in a
  // minigame — its skip, where it may be skipped; else, where the step is seen, on to the next interaction
  const ahead = () => {
    if (forward == null || gone()) return;
    b.forward(waiting || unseen() ? null : playing ? (playing.skippable ? skip : null) : forward ? hurry : null);
  };
  const skip = () => { if (playing && !b.minigame.skip()) playing.end(); };
  function hurry() {
    if (gone() || fast || showing || playing || waiting || unseen()) return;
    fast = true;
    b.hush();
    b.instant(true);
    for (const w of waits) { clearTimeout(w.timer); w.ok(); }
    waits.clear();
  }
  // the next interaction reached: the scene as it is then, in one cut
  async function land() {
    if (!fast) return;
    fast = false;
    await b.instant(false);
  }
  // a jump at its minigame: the scene where the step has got to — and the step on from there, seen
  let seeing = null;
  const seen = () => (seeing ??= (async () => {
    const { shown, then } = j;
    for (const h of j.seen()) hub.told(h.text, h.ms).then(h.ok);
    view.gauge(state);
    if (shown) {
      await alive(b.show(shown.folder, { state: shown.state, captions: false, then }));
      view.where(shown.where);
    }
    ahead();
  })());
  // (waiting for the player: a choice, a plate — no ⏭ meanwhile)
  async function wait(p) {
    if (fast) await alive(land());
    waiting = true;
    ahead();
    try { return await alive(p()); } finally { waiting = false; ahead(); }
  }
  const after = ({ heard, text }) => sleep(heard ? 500 : 300 + text.length * 60);
  const g = {
    state,
    signal: left.signal,
    async scene(place, { beat = null, here = [], moods = {}, keys = {} } = {}, { cut = false } = {}) {
      if (gone()) return never;
      const at = PLACES[place];
      if (!at) throw new Error(`no place “${place}”`);
      const { folder, where = null, keys: own = {} } = at;
      const spec = await alive(unseen() ? j.real(b.specOf(folder)) : b.specOf(folder));
      people = new Set((spec.objects ?? []).filter(o => o.person).map(o => o.id));
      // (of the game's people the scene has: those here; the others are voices only)
      present = new Set(here.filter(id => people.has(id)));
      const st = {};
      for (const id of people) st[`${id}_here`] = present.has(id);
      for (const [id, mood] of Object.entries(moods)) if (people.has(id)) st[`${id}_mood`] = mood;
      Object.assign(st, own, keys);
      // (a scene laid out by its `moment` — its script stages the moment's place and people as it opens: the moment
      // first, everything else over it, as the scene's notes ask — bespoke.show's `then`. `then` is a jump: all the
      // scene does meanwhile ends at once and tells nothing — so a piece the scene opens on is set after it is shown,
      // never in `then`; a scene with no moment takes its piece with the rest of its state)
      const staged = 'moment' in st;
      if (beat && !staged) st.beat = beat;
      const first = staged ? { moment: st.moment } : st;
      const then = staged ? Object.entries(st).filter(([k]) => k !== 'moment') : [];
      if (unseen()) {
        opening = beat ? { name: beat, ended: g.told(`beat:${beat}`, BEAT) } : null;
        j.scene(folder, first, where);
        for (const change of then) j.did(change);
        if (beat && staged) j.did(['beat', beat]);
        return;
      }
      showing = true;
      try {
        if (fast) await alive(land());
        opening = beat ? { name: beat, ended: g.told(`beat:${beat}`, BEAT) } : null;
        hub.withdraw();
        view.where(null);
        await alive(b.show(folder, { state: first, ...(then.length ? { then } : {}), captions: false, fade: !cut }));
        if (beat && staged) put('beat', beat);
        view.where(where);
      } finally { showing = false; }
    },
    set(key, value, seconds) {
      if (gone()) return;
      put(key, value, seconds);
    },
    async beat(name, { wait = true } = {}) {
      if (gone()) return never;
      // (the piece the scene was opened with: playing already)
      const opened = opening?.name === name ? opening : null;
      opening = null;
      if (!opened && fast) await alive(land());
      const ended = opened ? opened.ended : wait ? g.told(`beat:${name}`, BEAT) : null;
      if (!opened) {
        put('beat', null); // (the same piece again is a change too)
        put('beat', name);
      }
      if (wait && !(await ended)) b.trouble(tr('the piece “{name}” did not end', { name }));
    },
    told(text, ms = 60000) {
      return gone() ? never : unseen() ? j.heard(text, ms) : alive(hub.told(text, ms));
    },
    get: key => (unseen() ? j.values[key] : b.get(key)),
    // a mistake made in the mini-game (beside its mg.error): from the first one on the page's ⏭ may skip it
    failed() {
      if (!playing || playing.skippable) return;
      playing.skippable = true;
      ahead();
    },
    here(id, on) {
      if (gone() || !people.has(id)) return;
      if (on) present.add(id); else present.delete(id);
      put(`${id}_here`, on);
    },
    mood(id, mood) {
      if (gone() || !people.has(id)) return;
      put(`${id}_mood`, mood);
    },
    wait: sleep,
    async say(who, text, { at = present.has(who) ? who : 'narrator', how } = {}) {
      if (gone()) return never;
      if (unseen()) return sleep(300 + text.length * 60);
      if (fast) await alive(land());
      return alive(b.say(who, text, how ? { at, how } : { at })).then(after);
    },
    async think(who, text, { how } = {}) {
      if (gone()) return never;
      if (unseen()) return sleep(300 + text.length * 60);
      if (fast) await alive(land());
      return alive(b.think(who, text, how ? { how } : {})).then(after);
    },
    async plate(text) {
      if (gone()) return never;
      if (unseen()) return;
      return wait(() => view.plate(text, { signal: left.signal }));
    },
    async sheet(title, lines) {
      if (gone()) return never;
      if (unseen()) return;
      return wait(() => view.sheet(title, lines, { signal: left.signal }));
    },
    async choose(choice, offers, { within = null, otherwise = null } = {}) {
      if (gone()) return never;
      // unseen: as the play chose it, or as the plan says (j.plan: the author's “play as…”, the branch check — never in
      // the state, so that what the step reads of the state before its choice is as it would be) — else the first
      // offered; one it chose that isn't here: offered once seen
      let action;
      if (unseen()) {
        const all = Object.values(offers).flat(), was = choice && (state.choices[choice] ?? j.plan[choice]);
        action = !was ? all[0] : was === otherwise ? { id: otherwise } : all.find(o => o.id === was) ?? (await new Promise(ok => j.later(() => wait(() => hub.offer(offers, within, otherwise)).then(ok))));
      } else action = await wait(() => hub.offer(offers, within, otherwise));
      if (choice) state.choices[choice] = action.id;
      return action.id;
    },
    async play(minigame, opts = {}) {
      if (gone()) return never;
      if (unseen()) {
        j.plays.push(minigame);
        if (j.plays.length <= j.target) return j.result?.(minigame) ?? minigame.skipped;
        await seen();
      } else if (fast) await alive(land());
      const stop = new AbortController();
      const end = () => stop.abort();
      left.signal.addEventListener('abort', end);
      const p = playing = { signal: stop.signal, end, skippable: !!forward };
      const may = forward ? 0 : setTimeout(() => { p.skippable = true; if (playing === p) ahead(); }, SKIPPABLE);
      ahead();
      const skipped = new Promise(ok => stop.signal.addEventListener('abort', () => ok(minigame.skipped)));
      try {
        return await alive(Promise.race([minigame.run(g, b, opts, stop.signal), skipped]));
      } finally {
        left.signal.removeEventListener('abort', end);
        clearTimeout(may);
        stop.abort();
        playing = null;
        ahead();
      }
    },
    minigame(o = {}) {
      if (!playing) throw new Error('g.minigame: only inside a minigame (g.play)');
      const mg = b.minigame.start({ ...o, signal: playing.signal });
      mg.on('skip', playing.end);
      return mg;
    },
    apply(choice) {
      if (gone()) return;
      const fx = EFFECTS[choice]?.[state.choices[choice]];
      if (!fx || unseen()) return;
      view.toast(fx.says, 'mark');
      view.gauge(state);
    },
    mark(key, value, text) {
      if (gone()) return;
      state.marks[key] = value;
      if (unseen()) return;
      if (text) view.toast(text, 'mark');
      view.gauge(state);
    },
    card(title, gesture, text) {
      if (gone() || unseen()) return () => {};
      const off = view.card(title, gesture, text);
      left.signal.addEventListener('abort', off);
      return off;
    },
    async title(text) {
      if (gone()) return never;
      if (fast) await alive(land());
      return unseen() ? sleep(9000) : alive(view.title(text, { signal: left.signal }));
    },
    async done() {
      await land();
      if (forward != null) b.forward(null);
    },
    // the step is left behind (game.js): nothing it offered or still had to say stays
    leave() {
      if (forward != null) b.forward(null);
      if (fast) { fast = false; b.instant(false); }
      left.abort();
      hub.withdraw();
      b.hush();
      view.where(null);
    },
  };
  if (j && j.target < Infinity) j.idle.then(seen);
  ahead();
  return g;
}

// The player's choices, listened to once for the whole play — game.js owns it: whatever is being chosen now gets the
// action.
//   hub.offer({ref: options}, within, otherwise) → the action once the player has chosen it: a plain choice of the
//     language of mini-games — a mark on each point; a touch opens its options as petals, one too; one who touches no
//     mark for SHOW s is shown how: the ghost finger on each in turn. within (ms) — a chance: nothing chosen so long,
//     {id: otherwise}
//   hub.ask(at, options) → the action chosen, or null: a mark born open where the game's own drawing was pressed (at:
//     fn → {x, y} page px — map.js), its options out as petals at once; a touch off them folds it — null
//   hub.withdraw() — nothing offered
const SHOW = 8; // s: nothing pressed so long — the ghost shows how

export function listen(b) {
  const waiting = new Set(); // what the scene is waited to tell: {text, ok, timer}
  const told = (text, ms) => new Promise(ok => {
    const w = { text, ok };
    w.timer = setTimeout(() => { if (waiting.delete(w)) ok(false); }, ms);
    waiting.add(w);
  });
  b.on('tell', text => {
    for (const w of waiting) if (w.text === text) { waiting.delete(w); clearTimeout(w.timer); w.ok(true); }
  });
  let offered = null; // the plain choice going on: the language's mini-game
  // where a choice's mark stands (the language's own drawing: a page point, games are full-screen — the scene's canvas
  // is the page's): on its point while the frame has it; out of it (the one who chooses left at the frame's edge, or
  // behind the eye) at the frame's edge nearest to them, else in its middle — a person off the frame never leaves the
  // play waiting on a mark nobody sees (the language hides a mark whose point is out of the frame)
  const toward = ref => {
    const at = ref.includes('#') ? ref : `${ref}@`;
    return () => {
      const f = b.frame(), p = b.where(at), m = 0.12 * f.h;
      if (!p) return { x: f.x + f.w / 2, y: f.y + f.h / 2 };
      return { x: Math.min(f.x + f.w - m, Math.max(f.x + m, p.x)), y: Math.min(f.y + f.h - m, Math.max(f.y + m, p.y)) };
    };
  };
  return {
    offer(offers, within = null, otherwise = null) {
      offered?.leave();
      const mg = offered = b.minigame.start({ plate: false }), refs = Object.keys(offers), presses = [];
      if (refs.length === 1) mg.glow(refs[0].split('#')[0]);
      const ghost = setTimeout(() => mg.show({ gestures: presses }), SHOW * 1000);
      let gone = 0;
      mg.on('end', () => { clearTimeout(ghost); clearTimeout(gone); });
      return new Promise(ok => {
        // (a chance: nothing chosen in time — it has passed)
        if (within != null) gone = setTimeout(() => { mg.leave(); if (offered === mg) offered = null; ok({ id: otherwise }); }, within);
        const chosen = (mark, action) => { clearTimeout(gone); mg.snap({ at: mark }); mg.leave(); offered = null; ok(action); };
        for (const ref of refs) {
          const options = offers[ref], mark = mg.mark({ at: toward(ref) });
          const press = mg.press({ on: mark, petals: options });
          press.on('down', () => clearTimeout(ghost));
          press.on('choose', ({ id }) => chosen(mark, options.find(o => o.id === id)));
          presses.push(press);
        }
      });
    },
    ask(at, options) {
      offered?.leave();
      const mg = offered = b.minigame.start({ plate: false });
      return new Promise(ok => {
        const over = action => { ok(action); mg.leave(); if (offered === mg) offered = null; };
        const mark = mg.mark({ at });
        if (!mark.pos) { over(null); return; }
        const press = mg.press({ on: mark, petals: options, open: true });
        press.on('choose', ({ id }) => { mg.snap({ at: mark }); over(options.find(o => o.id === id)); });
        press.on('fold', () => over(null));
      });
    },
    withdraw() { offered?.leave(); offered = null; },
    told,
  };
}
