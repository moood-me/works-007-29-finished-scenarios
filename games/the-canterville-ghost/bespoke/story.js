// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 3 of the game (moood-me/moood docs/writing/game-stages.md): the whole play on the world's three scenes as they
// are — people stand, the scenes only say who is there and their faces (and the library's own fire and lamp). What the
// scenario's film would show is a plate with “Next” (g.plate, g.sheet); a mini-game is its stub — a mark to press and
// a card saying what it will be (minigames/stub.js); a place the world has not got yet — the people in one of its
// scenes and a label saying where it really is (PLACES).
//   g.state — what the play carries: {scales, shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys}, {cut}) — that place of the game (PLACES: the world's scene it is played on, and
//     where it really is when that scene only stands in for it), full-screen: of the game's people only `here` are
//     there — those of them the scene has (`<id>_here`, the engine's key; whom it has not are not seen: voices only) —,
//     their faces as `moods` say ({id: mood}); `keys` — values of the scene's own keys (its scene.json's states) or a
//     person's (`<id>_with`). Always opened anew; `cut` — in one cut, else through black
//   g.here(id, on) — someone of the shown scene comes or goes (in one cut); g.mood(id, mood) — their face (both: only
//     the game's people the scene has; others are let be)
//   g.set(key, value) — one of the shown scene's own keys (in one cut)
//   g.wait(ms) — time of the game's own (a pause)
//   g.say(who, text, {at, how}) — someone of the game's people (people.json) says it over `at` (default: over
//     themselves if they are in the scene, else low in the middle, as the narrator), in their voice (how: this line's
//     own manner); → a breath after it is heard
//   g.plate(text) — a plate over the scene: what happens here that the scene does not show; → once “Next” is pressed
//   g.sheet(title, lines) — the same, a list
//   g.choose(choice, {ref: options}, {within, otherwise}) — the player presses one of the points ('id#point' | 'id'),
//     then one of its options ([{id, label}]: petals, one too — the language of mini-games, hub.offer); → the option's
//     id, kept in state.choices[choice] (choice null: not a choice of the chapter's map). within (ms) — a chance, not
//     a question: nothing pressed so long — `otherwise`
//   g.play(minigame, opts) — a mini-game (a module of minigames/: {title, about, skipped, run(g, b, opts, signal)});
//     the signal aborts when it is skipped (the page's ⏭, where it may be skipped) or the step is left; → its result
//   g.minigame({phrase}) — inside a minigame's run: the language's mini-game begun; g.card(title, gesture, text) — the
//     stub's card beside it, gone with the minigame (→ a function that takes it away sooner)
//   g.apply(choice) — what the option chosen does, by EFFECTS: the scales, then each mark
//   g.scale(name, delta) — a scale moves; the player sees which way (the gauge, the words)
//   g.gauge(name) — the scale is shown from now on; its one line of what it means said once
//   g.mark(key, value, text) — remembered (state.marks[key]); text — what the player is told; null — told nothing
//   g.title(text) — words over the scene, as a film's title; → once they have gone
//   g.done() → once the step's code is through: the page's ⏭ taken back; g.leave() — the step left behind (game.js)
// The page's ⏭ (bespoke.forward) is the step's while it is played ({forward}: whether the player has seen the step —
// game.js): where the step is seen, pressed, the step goes on at once to its next interaction — the next line said,
// plate, choice, minigame, scene or title —, the waits between over at once, the line heard dropped. In a minigame the ⏭
// skips it; while a choice or a plate waits there is none.
// A step may be played up to a minigame unseen, without time (the author's map: a jump — jump.js j), or all through
// (a dry run: game.js, check/run.mjs): then nothing of it is said, shown or heard, a plate goes by at once, and a
// minigame gives its `skipped`.

// The game's places (scenario §4) and the world's scene each is played on — the one map of them: a place whose own
// scene is not made yet stands in one of the ready ones, its people there, and `where` says (a label high on the left)
// where it really is. When the place's own scene comes (stage 5), its line here becomes `{ folder: '<its folder>' }`
// — nothing else changes: the steps name places, never folders. (The library is also the map's background, game.js.)
export const PLACES = {
  library: { folder: 'library' }, // С1 the library
  corridor: { folder: 'library', where: tr('In truth: the corridor upstairs — long, in moonlit windows; a suit of armour on its stand and a little table beside it; the bedroom doors; at its end, the door of the Tapestry Chamber.') }, // С2
  tapestry: { folder: 'tapestry' }, // С3 the Tapestry Chamber
  dark: { folder: 'tapestry', where: tr('In truth: the dark behind the wall — nothing but his pale light, and her face and hands in it.') }, // С3, behind its tapestry
  death: { folder: 'garden' }, // С4 the Garden of Death
  chamber: { folder: 'garden', where: tr('In truth: the secret chamber — low, of stone; an iron ring in the wall, a chain, a skeleton; an old trencher and ewer just out of its reach; the moon through a little window.') }, // С5
  grounds: { folder: 'garden', where: tr('In truth: the garden by the house — the old dry almond tree, the lawn, the avenue to the gates; beyond the railings, the churchyard and its old yew.') }, // С6
  hall: { folder: 'library', where: tr('In truth: the hall — the great staircase and its landing, the clock, an armchair at the foot of the stairs, the window onto the pond, the front door.') }, // С7
};
// The library's own hours (its keys: the fire, Mr Otis's lamp) — given only where the place is the library itself; and
// Mr Otis without the bottle of oil the scene puts in his hand (he holds it out only in 1.2): `otis_with`, a person's key
const BARE = { otis_with: [] };
export const LIBRARY = {
  evening: { fire: 1, lamp: 1, ...BARE },
  morning: { fire: 0.5, lamp: 0, ...BARE },
  night: { fire: 0.3, lamp: 1, ...BARE },
};
export const OTIS = BARE;

// The scales (scenario §8), each with two sides: where they start, their bounds, its name in the gauge, its two ends
// (`sides`: the left one, the right one), the side the player reads when it moves (up: delta > 0, down: delta < 0),
// and the one line that says what it means. Neither has a right side.
export const SCALES = {
  simon: { start: 2, min: 0, max: 4, name: tr('Sir Simon'), sides: [tr('plays'), tr('is tired')],
    up: tr('Sir Simon grows tired'), down: tr('Sir Simon plays on'),
    rule: tr('Sir Simon: plays — is tired. Whether there is still the old actor in him, or only tiredness.') },
  virginia: { start: 2, min: 0, max: 4, name: tr('Virginia'), sides: [tr('shares'), tr('keeps it to herself')],
    up: tr('Virginia keeps it to herself'), down: tr('Virginia shares it with her own'),
    rule: tr('Virginia: shares — keeps it to herself. Whether she brings what she sees and thinks to her family, to their faces, or carries it alone.') },
};
export const ORDER = ['simon', 'virginia'];

// What each option of each choice does (scenario §8, §9): the scales, then the marks ([key, value, text | null] — the
// text the player is told). What depends on more than the option the chapter does itself; the promise to Papa
// (“Never alone”) is a mark too: given, then kept or broken.
export const EFFECTS = {
  face: {
    told: { virginia: -1, marks: [['face', 'told', tr('You told them about the face in the window. They laughed.')]] },
    silent: { virginia: 1, marks: [['face', 'silent', tr('You kept the face in the window to yourself.')]] },
  },
  goodnight: {
    wish: { marks: [['goodnight', 'wish', tr('You wished him good night.')]] },
    pass: { marks: [['goodnight', 'pass', null]] },
  },
  paints: {
    leave: { simon: -1, virginia: 1, marks: [['paints', 'leave', tr('You left him your paints. By morning there was no red left in the box.')]] },
    lock: { simon: 1, marks: [['paints', 'lock', tr('You locked your paints away. All night someone walked up and down by your door.')]] },
    tell: { simon: 1, virginia: -1, marks: [['paints', 'tell', tr('You told Washington. In the night they fired peas in the library.')]] },
  },
  trap: {
    warn: { simon: -1, virginia: 1, marks: [['trap', 'warn', tr('You warned him. Washington looked at you: “Somebody told him.”')]] },
    watch: { simon: 1, virginia: -1, marks: [['trap', 'watch', tr('You watched with your brothers — and laughed out loud.')]] },
    defend: { simon: 1, virginia: -1, marks: [['trap', 'defend', tr('You said “Leave him alone” to your brothers’ faces. He got his fright all the same.')]] },
  },
  hunger: {
    bread: { marks: [['hunger', 'bread', tr('You gave him bread. He called you kind, and your family vulgar.')]] },
    killed: { marks: [['hunger', 'killed', tr('“You killed her. Nothing else matters.” He called it cheap morality.')]] },
  },
  wall: {
    go: { marks: [['wall', 'go', tr('You took his hand. Downstairs they were calling you to supper.')]] },
    papa: { marks: [['wall', 'papa', tr('You said you would call Papa. He did not ask again.')]] },
  },
  name: {
    named: { marks: [['name', 'named', tr('You named her in the prayer. The nightingale sang no more.')]] },
    unnamed: { marks: [['name', 'unnamed', tr('You prayed for him alone. Nobody said her name.')]] },
  },
  door: {
    pass: { marks: [['door', 'pass', tr('You walked past the chair. Your word to Papa is broken.')], ['word', 'broken', null]] },
    stay: { marks: [['door', 'stay', tr('You stayed at the door. He went, and nobody but you knows.')], ['word', 'kept', null]] },
    wake: { marks: [['door', 'wake', tr('You woke Papa. Sir Simon’s farewell was his: “My daughter stays.”')], ['word', 'kept', null]] },
  },
};
export const ENDINGS = [
  { id: 'almond', label: tr('The Almond') }, { id: 'candle', label: tr('The Candle by the Wall') }, { id: 'stain', label: tr('The Stain') },
];

// What follows from the play so far — all a step reads of it besides g.state. A choice not made (its step gone to by
// the author's map past it) gives its first option.
export function facts(state) {
  const c = state.choices, s = state.scales;
  const f = {
    face: c.face ?? 'told', goodnight: c.goodnight ?? 'wish', paints: c.paints ?? 'leave', trap: c.trap ?? 'warn',
    hunger: c.hunger ?? 'bread', wall: c.wall ?? 'go', name: c.name ?? 'named', door: c.door ?? 'pass',
    simon: s.simon, virginia: s.virginia,
  };
  // the scales read (scenario §8): Sir Simon ≤2 plays, ≥3 is tired; Virginia ≤1 shares, ≥2 keeps it to herself
  f.plays = f.simon <= 2;
  f.shares = f.virginia <= 1;
  f.wished = f.goodnight === 'wish';
  f.warned = f.trap === 'warn';
  f.named = f.name === 'named';
  // the path (scenario §12): the wall decides — went with him: “The Almond”; called Papa: past the chair — “The Candle
  // by the Wall”, stayed at the door or woke him — “The Stain”
  f.ending = f.wall === 'go' ? 'almond' : f.door === 'pass' ? 'candle' : 'stain';
  // went to the Garden (on time, or late)
  f.garden = f.ending !== 'stain';
  return f;
}

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
  const put = (key, value) => (unseen() ? j.did([key, value]) : b.set(key, value));
  let people = new Set(), present = new Set(); // the shown scene's people; those of them there now
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
    j.seen();
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
    async scene(place, { here = [], moods = {}, keys = {} } = {}, { cut = false } = {}) {
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
      if (unseen()) { j.scene(folder, st, where); return; }
      showing = true;
      try {
        if (fast) await alive(land());
        hub.withdraw();
        view.where(null);
        await alive(b.show(folder, { state: st, captions: false, fade: !cut }));
        view.where(where);
      } finally { showing = false; }
    },
    set(key, value) {
      if (gone()) return;
      put(key, value);
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
        if (j.plays.length <= j.target) return minigame.skipped;
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
    card(title, gesture, text) {
      if (!playing) throw new Error('g.card: only inside a minigame (g.play)');
      const off = view.card(title, gesture, text);
      playing.signal.addEventListener('abort', off);
      return off;
    },
    apply(choice) {
      if (gone()) return;
      const fx = EFFECTS[choice]?.[state.choices[choice]];
      if (!fx) return;
      for (const name of ORDER) g.scale(name, fx[name] ?? 0);
      for (const [key, value, text] of fx.marks ?? []) g.mark(key, value, text);
    },
    scale(name, delta) {
      if (gone() || !delta) return;
      const S = SCALES[name], was = state.scales[name];
      state.scales[name] = Math.min(S.max, Math.max(S.min, was + delta));
      const moved = state.scales[name] - was;
      g.gauge(name);
      if (unseen() || !moved) return;
      view.toast(moved > 0 ? S.up : S.down, 'scale', (moved > 0 ? '↑' : '↓').repeat(Math.abs(moved)));
      view.gauge(state);
    },
    gauge(name) {
      if (gone()) return;
      if (state.shown[name] !== true) {
        state.shown[name] = true;
        if (!unseen()) view.toast(SCALES[name].rule, 'rule');
      }
      if (!unseen()) view.gauge(state);
    },
    mark(key, value, text) {
      if (gone()) return;
      state.marks[key] = value;
      if (text && !unseen()) view.toast(text, 'mark');
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
  let offered = null; // the plain choice going on: the language's mini-game
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
          const options = offers[ref], mark = mg.mark({ at: ref.includes('#') ? ref : `${ref}@` });
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
  };
}
