// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 5 of the game (moood-me/moood docs/writing/game-stages.md), under way: the places on their own scenes where the
// world has them (PLACES), the mini-games real (minigames/, on the language of mini-games); the scenes' pieces as they
// come (the contract: game.md «Stage 5 — pieces») — till then what a piece will show is a plate with “Next” (g.plate,
// g.sheet).
//   g.state — what the play carries: {scales, shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys}, {cut}) — that place of the game (PLACES: the world's scene it is played on, and
//     where it really is when that scene only stands in for it), full-screen: of the game's people only `here` are
//     there — those of them the scene has (`<id>_here`, the engine's key; whom it has not are not seen: voices only) —,
//     their faces as `moods` say ({id: mood}); `keys` — values of the scene's own keys (its scene.json's states) or a
//     person's (`<id>_with`, `<id>_wear`). Always opened anew; `cut` — in one cut, else through black
//   g.here(id, on) — someone of the shown scene comes or goes (in one cut); g.mood(id, mood) — their face (both: only
//     the game's people the scene has; others are let be)
//   g.beat(name, {wait}) — a piece of the shown scene (its key `beat`; world module `beats`); → once it has ended (the
//     scene tells `beat:<name>`), or at once with wait: false; g.scene(place, {beat}) opens the scene on it.
//     g.told(text, ms) — till the scene tells `text` (→ true) or ms pass (→ false). piece(g, name, {moment: fn}, open)
//     — the piece with the lines said at its moments
//   g.set(key, value, seconds) — one of the shown scene's own keys (or a person's): at once, or moved over seconds;
//     g.get(key) — what it is now
//   g.wait(ms) — time of the game's own (a pause)
//   g.say(who, text, {at, how, sub}) — someone of the game's people (people.json) says it over `at` (default: over
//     their body in the scene if it is here — BODY: Jack grown is the scene's `jack` —, else low in the middle, as the
//     narrator), in their voice (how: this line's own manner); sub — a subtitle under it in the play's language: a
//     line said in Chinese (scenario §1) is written in Chinese — heard and shown so in every language — and, where
//     Jack understands it, its meaning under it; → a breath after it is heard
//   g.plate(text) — a plate over the scene: what happens here that the scene does not show; → once “Next” is pressed
//   g.sheet(title, lines) — the same, a list
//   g.choose(choice, {ref: options}, {within, otherwise}) — the player presses one of the points ('id#point' | 'id'),
//     then one of its options ([{id, label}]: petals — the language of mini-games, hub.offer); → the option's id, kept
//     in state.choices[choice] (choice null: not a choice of the chapter's map). within (ms) — the time to choose, its
//     arc on the marks: nothing pressed so long — `otherwise` (scenario 1.3: eight seconds, else “Run away”)
//   g.play(minigame, opts) — a mini-game (a module of minigames/: {title, about, skipped, missed, run(g, b, opts,
//     signal)}); the signal aborts when it is skipped (the page's ⏭, where it may be skipped) or the step is left; → its
//     result ({missed}: the miss its trace in the story, scenario §7)
//   g.minigame({phrase}) — inside a minigame's run: the language's mini-game begun; g.failed() — a mistake in it (from
//     then on the page's ⏭ may skip it)
//   g.apply(choice) — what the option chosen does, by EFFECTS: a scale set, then each mark
//   g.scale(name, value) — a scale set (scenario §8: each is set by one choice and never moves after); the player sees
//     it (the gauge, the words)
//   g.mark(key, value, text) — remembered (state.marks[key]); text — what the player is told; null — told nothing
//   g.know(text) — what Jack has come to know (scenario §12, the register of knowledge), told the player as it comes
//   g.promise(text), g.kept(text) — a promise given (§12, promises), and kept — or what came of it — told the player
//   g.title(text) — words over the scene, as a title; → once they have gone
//   g.done() → once the step's code is through: the page's ⏭ taken back; g.leave() — the step left behind (game.js)
// The page's ⏭ (bespoke.forward) is the step's while it is played ({forward}: whether the player has seen the step —
// game.js): where the step is seen, pressed, the step goes on at once to its next interaction — the next line said,
// plate, choice, minigame, scene or title —, the waits between over at once, the line heard dropped. In a minigame the ⏭
// skips it; while a choice or a plate waits there is none.
// A step may be played up to a minigame unseen, without time (the author's map: a jump — jump.js j), or all through
// (a dry run: game.js, check/run.mjs): then nothing of it is said, shown or heard, a plate goes by at once, and a
// minigame gives its `skipped` (or its `missed`, where the dry run asks for misses: j.miss).

// The game's places (scenario §4) and the world's scene each is played on — the one map of them: a place whose own
// scene is not made yet stands in one of the ready ones, its people there, and `where` says (a label high on the left)
// where it really is. When the place's own scene comes (stage 4), its line here becomes `{ folder: '<its folder>' }`
// — nothing else changes: the steps name places, never folders. The world's scenes have the people of their own
// years: the kitchen and the yard — Jack at ten, Mom, Dad, Mark (the yard); the ward — Jack at twenty-one, Mom ill, Dad
// grey; the square — Jack grown, the woman, the guide, the tourists. The kitchen and the yard dress their people a year
// on by their key `year` (Jack grown, Dad grey, Mom not here), Jack at five by `young` (the kitchen, Jack's room). Jack's room and the attic are their own scenes: the room's moments (its
// key `moment`) dress it and its people, a year on too. (The kitchen is also the map's background, game.js.)
export const PLACES = {
  kitchen: { folder: 'kitchen' }, // С2 the kitchen
  room: { folder: 'jack-room' }, // С3 Jack's room (its key `moment`: ROOM)
  yard: { folder: 'yard' }, // С1 the yard
  dusk: { folder: 'yard' }, // С1 at dusk, the fire (the yard's keys: DUSK)
  stop: { folder: 'yard' }, // С1 toward the street: the bus stop (the yard's key `view` street)
  ward: { folder: 'ward' }, // С5 the ward
  hallway: { folder: 'ward', where: tr('In truth: the hospital corridor outside the ward door — and, down it, a payphone.') }, // С5, the corridor
  house: { folder: 'kitchen' }, // С2 in chapter 3 (its keys `year` 1, `packed`, `day`: HOUSE)
  bare: { folder: 'jack-room' }, // С3 in chapter 3 (its `moment` packed: the room emptied, Jack grown)
  attic: { folder: 'attic' }, // С4 the attic
  square: { folder: 'square' }, // С6 the square
  porch: { folder: 'yard' }, // С1 in chapter 3 (its keys `year` 1, `dusk`, `sold`: PORCH)
};
// The kitchen's hours (its lamp over the table) and the ward's (the bedside lamp)
export const KITCHEN = { evening: { lamp: 1 }, morning: { lamp: 0 }, night: { lamp: 0.35 } };
export const WARD = { evening: { lamp: 1 }, night: { lamp: 0.6 }, dark: { lamp: 0.3 } };
// Jack's room's moments (its key `moment` sets the light, what stands where and who is here — the steps' `here` name
// the same people): П.4 bedtime (Mom and Jack); 1.4 «Run away» ran (Jack at the window, Dad at the door); 1.5 «Run away»
// call (Mom at the door); 1.6 night (Jack on the bed), hatch (the box under the attic hatch); 3.2 packed (Jack grown;
// Dad with a frog on «the whole house»). `menagerie` — the menagerie as the room shows it (MENAGERIE: by the scale).
export const ROOM = {
  bedtime: { moment: 'bedtime' }, ran: { moment: 'ran' }, call: { moment: 'call' }, night: { moment: 'night', menagerie: 'shelf' },
};
export const MENAGERIE = ['attic', 'laohu', 'house'];
// The yard at dusk, the fire in the bucket (1.4) — its keys and where its people stand, as the yard's notes have them:
// Mom and Jack at the bucket, Dad (not here till he comes) by her, his hand on her back; Jack up in his window, Mom
// looking up at it (UP, «Run away»)
export const DUSK = {
  dusk: 1, porch_lamp: 1, house_lights: 1, fire: 1, scraps: false,
  mom_a: 3.35, mom_d: 5.9, mom_turn: 150, mom_do: 'stand', mom_wear: { parts: [] }, mom_reach: null, mom_look: 'apple#fire',
  jack_a: 2.8, jack_d: 5.3, jack_turn: 120, jack_do: 'stand', jack_with: [], jack_look: 'apple#fire',
  dad_a: 3.85, dad_d: 6.25, dad_turn: 215, dad_reach: { r: 'mom#back' }, dad_look: 'mom',
};
export const UP = { jack_a: -4.4, jack_d: 8.85, jack_turn: 180, jack_look: 'mom', mom_look: 'house#jack_window' };
// The yard's people as they are when the step has none of the scene's things in their hands — no plate, no scraps —,
// standing (the scene's own pose is 1.3's: Jack squatting with the scraps, Mom holding out her hand)
export const EMPTY = { mom_wear: { parts: [] }, mom_do: 'stand', mom_reach: null, jack_with: [], jack_do: 'stand' };
// Chapter 3 at home: the kitchen packed, by day (HOUSE); the yard at dusk, the house sold (PORCH: Dad on the top step,
// Jack before him with the letter, as the yard's notes have them; `shoebox` and `menu_house` by the play, given by the
// steps)
export const HOUSE = { year: 1, packed: true, day: 1, lamp: 0 };
export const PORCH = {
  year: 1, dusk: 1, sold: true, porch_lamp: 1, house_lights: 0, fire: 0, scraps: false, view: 'house',
  dad_on: [-1.25, 6.86, 0.42], dad_do: 'sitting_on_bed', dad_look: 'jack',
  jack_with: ['letter'], jack_a: -0.15, jack_d: 5.6, jack_turn: 200, jack_do: 'stand', jack_look: 'jack#letter',
};
// whose body a voice is in the scenes: Jack grown speaks from the scene's `jack` (the ward's is twenty-one)
export const BODY = { jack_grown: 'jack' };

// The scales (scenario §8): each set by one choice, once, and never moved after — the state of the house the player
// sees the whole way: its name, its three values (the one it has bold), and the one line that says what it means.
export const SCALES = {
  language: { name: tr('The language at home'), values: [tr('English'), tr('two languages'), tr.c('the language at home: hers', 'Mom’s')],
    rule: tr('The language at home: English — two languages (she speaks Chinese, he answers in English) — Mom’s. How her voice will sound to the end: whether grown-up Jack still understands her.') },
  menagerie: { name: tr('The menagerie'), values: [tr('in the attic'), tr('Laohu'), tr('the whole house')],
    rule: tr('The menagerie: in the attic — Laohu — the whole house. Where her animals live from now on, and who sees them.') },
};
export const ORDER = ['language', 'menagerie'];

// What each option of each choice does (scenario §8): a scale set ({name: value}), then the marks ([key, value, text |
// null] — the text the player is told). What depends on more than the option the chapter does itself.
export const EFFECTS = {
  yard: {
    english: { language: 0, marks: [['yard', 'english', tr('You told her in front of Mark: in English.')]] },
    chinese: { language: 2, marks: [['yard', 'chinese', tr('You answered her in her language, in front of Mark.')]] },
    run: { language: 1, marks: [['yard', 'run', tr('You ran away and answered her in no language.')]] },
  },
  asked: {
    asked: { marks: [['asked', true, tr('You asked whether Dad bought her. Dad heard.')]] },
    silent: { marks: [['asked', false, tr('You did not ask. She waited.')]] },
  },
  box: {
    attic: { menagerie: 0, marks: [] },
    laohu: { menagerie: 1, marks: [] },
    all: { menagerie: 2, marks: [] },
  },
  talk: {
    grandma: { marks: [['talk', 'grandma', tr('You asked about her mother. “I’ll finish later.”')]] },
    forty: { marks: [['talk', 'forty', tr('You told her about the forty floors. She had washed windows on the third.')]] },
    hand: { marks: [['talk', 'hand', tr('You took her hand. She sang about the two tigers.')]] },
  },
  train: {
    stay: { marks: [['train', 'stay', tr('You stayed, though she said “Go”.')]] },
    go: { marks: [['train', 'go', tr('You went, as she asked.')]] },
  },
  father: {
    all: { marks: [['father', 'all', tr('You told Dad everything.')]] },
    apple: { marks: [['father', 'apple', tr('You told Dad about the village and the apple tree.')]] },
    later: { marks: [['father', 'later', tr('You told Dad: later.')]] },
  },
  laohu: {
    fold: { marks: [] },
    letter: { marks: [] },
    smoke: { marks: [] },
  },
};
export const ENDINGS = [
  { id: 'tiger', label: tr('The Tiger') }, { id: 'letter', label: tr('The Letter') }, { id: 'smoke', label: tr('The Smoke') },
];

// What follows from the play so far — all a step reads of it besides g.state. A choice not made (its step gone to by
// the author's map past it) gives its first option.
export function facts(state) {
  const c = state.choices, m = state.marks;
  const f = {
    yard: c.yard ?? 'english', asked: (c.asked ?? 'asked') === 'asked', box: c.box ?? 'attic', talk: c.talk ?? 'grandma',
    train: c.train ?? 'stay', father: c.father ?? 'all', laohu: c.laohu ?? 'fold',
    // the miss marks (scenario §8): the ear blown away (М3), the seam crooked (М4), the sign crooked (М8)
    ear: !!m.ear, seam: !!m.seam, crooked: !!m.crooked,
  };
  // the scales (scenario §8): the language at home by the yard, the menagerie by the box
  f.lang = { english: 0, run: 1, chinese: 2 }[f.yard];
  f.zoo = { attic: 0, laohu: 1, all: 2 }[f.box];
  f.stayed = f.train === 'stay';
  // the finale (scenario §9, §11): its image by the hinge «Laohu», its form by «The train»
  f.ending = { fold: 'tiger', letter: 'letter', smoke: 'smoke' }[f.laohu];
  return f;
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
    view.sub(null);
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
  const toast = (text, kind) => { if (!gone() && !unseen()) view.toast(text, kind); };
  const g = {
    state,
    signal: left.signal,
    async scene(place, { beat = null, here = [], moods = {}, keys = {} } = {}, { cut = false } = {}) {
      if (gone()) return never;
      const at = PLACES[place];
      if (!at) throw new Error(`no place “${place}”`);
      const { folder, where = null } = at;
      const spec = await alive(unseen() ? j.real(b.specOf(folder)) : b.specOf(folder));
      people = new Set((spec.objects ?? []).filter(o => o.person).map(o => o.id));
      // (of the game's people the scene has: those here; the others are voices only)
      present = new Set(here.filter(id => people.has(id)));
      const st = {};
      for (const id of people) st[`${id}_here`] = present.has(id);
      for (const [id, mood] of Object.entries(moods)) if (people.has(id)) st[`${id}_mood`] = mood;
      Object.assign(st, keys);
      if (beat) st.beat = beat;
      if (unseen()) {
        opening = beat ? { name: beat, ended: g.told(`beat:${beat}`, BEAT) } : null;
        j.scene(folder, st, where);
        return;
      }
      showing = true;
      try {
        if (fast) await alive(land());
        opening = beat ? { name: beat, ended: g.told(`beat:${beat}`, BEAT) } : null;
        hub.withdraw();
        view.where(null);
        await alive(b.show(folder, { state: st, captions: false, fade: !cut }));
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
      if (wait && !(await ended)) b.trouble(`the piece “${name}” did not end`);
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
    async say(who, text, { at = present.has(BODY[who] ?? who) ? BODY[who] ?? who : 'narrator', how, sub = null } = {}) {
      if (gone()) return never;
      if (unseen()) return sleep(300 + text.length * 60);
      if (fast) await alive(land());
      view.sub(sub);
      try {
        return await alive(b.say(who, text, how ? { at, how } : { at })).then(after);
      } finally { if (!gone()) view.sub(null); }
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
      // unseen: as the play chose it — else the first offered; one it chose that isn't here: offered once seen
      let action;
      if (unseen()) {
        const all = Object.values(offers).flat(), was = choice && state.choices[choice];
        action = !was ? all[0] : was === otherwise ? { id: otherwise } : all.find(o => o.id === was) ?? (await new Promise(ok => j.later(() => wait(() => hub.offer(offers, within, otherwise)).then(ok))));
      } else action = await wait(() => hub.offer(offers, within, otherwise));
      if (choice) state.choices[choice] = action.id;
      return action.id;
    },
    async play(minigame, opts = {}) {
      if (gone()) return never;
      if (unseen()) {
        j.plays.push(minigame);
        if (j.plays.length <= j.target) return j.miss ? minigame.missed : minigame.skipped;
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
      if (!fx) return;
      for (const name of ORDER) if (name in fx) g.scale(name, fx[name]);
      for (const [key, value, text] of fx.marks ?? []) g.mark(key, value, text);
    },
    scale(name, value) {
      if (gone()) return;
      const S = SCALES[name];
      state.scales[name] = value;
      if (unseen()) return;
      if (state.shown[name] !== true) {
        state.shown[name] = true;
        view.toast(S.rule, 'rule');
      }
      view.toast(`${S.name}: ${S.values[value]}`, 'scale');
      view.gauge(state);
    },
    mark(key, value, text) {
      if (gone()) return;
      state.marks[key] = value;
      if (text) toast(text, 'mark');
    },
    know(text) { toast(text, 'know'); },
    promise(text) { toast(text, 'promise'); },
    kept(text) { toast(text, 'kept'); },
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
      view.sub(null);
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
//     mark for SHOW s is shown how: the ghost finger on each in turn. within (ms) — the time to choose, running down on
//     the marks' arcs: nothing chosen so long, {id: otherwise}
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
      const mg = offered = b.minigame.start({ plate: false }), refs = Object.keys(offers), presses = [], marks = [];
      if (refs.length === 1) mg.glow(refs[0].split('#')[0]);
      const ghost = setTimeout(() => mg.show({ gestures: presses }), SHOW * 1000);
      return new Promise(ok => {
        let over = false;
        const done = action => { if (over) return; over = true; clearTimeout(ghost); mg.leave(); if (offered === mg) offered = null; ok(action); };
        // (the time to choose: the marks' arcs run down; out — it is `otherwise`)
        if (within != null) {
          const t0 = mg.t;
          mg.on('frame', ({ t }) => {
            const rest = 1 - (t - t0) / (within / 1000);
            for (const mark of marks) mark.set({ time: Math.max(0, rest) });
            if (rest <= 0) done({ id: otherwise });
          });
        }
        for (const ref of refs) {
          const options = offers[ref], mark = mg.mark({ at: toward(ref), ...(within != null ? { time: 1 } : {}) });
          marks.push(mark);
          const press = mg.press({ on: mark, petals: options });
          press.on('down', () => clearTimeout(ghost));
          press.on('choose', ({ id }) => { mg.snap({ at: mark }); done(options.find(o => o.id === id)); });
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
