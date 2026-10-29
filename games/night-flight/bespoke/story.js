// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 3 of the game (moood-me/moood docs/writing/game-stages.md): the whole play on the world's three scenes as they
// are — people stand, the scenes only say who is there, their faces and where they look, and the scenes' own keys (the
// bureau's clock and inker, the field's floodlights, the cockpit's skies). What the scenario's film would show is a
// plate with “Next” (g.plate, g.sheet); a mini-game is its stub — a mark to press and a card saying what it will be
// (minigames/stub.js); a place the world has not got yet — the people in one of its scenes and a label saying where it
// really is (PLACES).
//   g.state — what the play carries: {scales, shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys}, {cut}) — that place of the game (PLACES: the world's scene it is played on, and
//     where it really is when that scene only stands in for it), full-screen: of the game's people only `here` are
//     there — those of them the scene has (`<id>_here`, the engine's key; whom it has not are not seen: voices only) —,
//     their faces as `moods` say ({id: mood}); `keys` — values of the scene's own keys (its scene.json's states) or a
//     person's (`<id>_look`). Always opened anew; `cut` — in one cut, else through black
//   g.here(id, on) — someone of the shown scene comes or goes (in one cut); g.mood(id, mood) — their face (both: only
//     the game's people the scene has; others are let be)
//   g.set(key, value) — one of the shown scene's own keys, or a person's (in one cut)
//   g.wait(ms) — time of the game's own (a pause)
//   g.say(who, text, {at, how}) — someone of the game's people (people.json) says it over `at` (default: over
//     themselves if they are in the scene, else low in the middle, as the narrator), in their voice (how: this line's
//     own manner); → a breath after it is heard
//   g.plate(text) — a plate over the scene: what happens here that the scene does not show; → once “Next” is pressed
//   g.sheet(title, lines) — the same, a list
//   g.choose(choice, {ref: options}, {within, otherwise}) — the player presses one of the points ('id#point' | 'id'),
//     then one of its options ([{id, label}]: petals, one too — the language of mini-games, hub.offer); → the option's
//     id, kept in state.choices[choice] (choice null: not a choice of the chapter's map). within (ms) — a chance or a
//     timer: nothing chosen so long — `otherwise` (one of the options, or an id of its own: the chance let pass)
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
// where it really is. When the place's own scene comes (stage 4), its line here becomes `{ folder: '<its folder>' }`
// — nothing else changes: the steps name places, never folders. (The bureau is also the map's background, game.js.)
export const PLACES = {
  office: { folder: 'bureau', where: tr('In truth: Rivière’s office upstairs — a desk with a lamp and the log, a telephone, the visitor’s chair, a big window onto the field.') }, // С1
  bureau: { folder: 'bureau' }, // С2 the bureau
  field: { folder: 'field' }, // С3 the field by the hangar
  cockpit: { folder: 'cockpit' }, // С4 Fabien's cockpit
};

// The scenes' own keys at the scenario's hours. The bureau: its lamps, the office door's glass, the inker, the clock
// (minutes after midnight: clock(22, 5) — five past ten). The field: its floodlights (dark — the field black, only the
// hangar's lamps; lit), the hangar's lamps, Rivière's window upstairs. The cockpit: its three skies — dusk, the storm,
// over the clouds — and the instrument lamps.
export const clock = (h, m) => h * 60 + m;
export const bureau = (time, { tape = 0, lamps = 1 } = {}) => ({ lamps, office: 1, tape, time });
export const FIELD = {
  dark: { floods: 0, hangar: 1, office: 1 },
  lit: { floods: 1, hangar: 1, office: 1 },
};
export const SKY = {
  dusk: { storm: 0, rain: 0, above: 0, panel: 0 },
  night: { storm: 0, rain: 0, above: 0, panel: 1 },
  storm: { storm: 1, rain: 1, above: 0, panel: 1 },
  above: { storm: 1, rain: 0, above: 1, panel: 1 },
};

// The scales (scenario §8), each with two sides: where they start, their bounds, its name in the gauge, its two ends
// (`sides`: the left one, the right one), the side the player reads when it moves (up: delta > 0, down: delta < 0),
// and the one line that says what it means. Neither has a right side. “What she knows” is two lines: what she was told
// on the telephone (the scale `told`) and what is left her of the last minute (the mark `minute`, MINUTE — the gauge
// writes it under the scale once it is there).
export const SCALES = {
  exceptions: { start: 0, min: 0, max: 3, name: tr('Exceptions'), sides: [tr('not one'), tr('the rule bends')],
    up: tr('The rule bent before everyone'), down: '',
    rule: tr('Exceptions: how many times tonight the rule has bent before everyone. Nought — not one; one; two or three — the rule bends.') },
  told: { start: 0, min: 0, max: 1, name: tr('What she was told'), sides: [tr('the wind'), tr('the storm')],
    up: tr('She was told: the storm'), down: '',
    rule: tr('What she knows: what she was told on the telephone — the wind or the storm; and, later, what is left her of the last minute.') },
};
export const ORDER = ['exceptions', 'told'];
export const MINUTE = {
  name: tr('Of the last minute'),
  place: tr('the place'), word: tr('his word'), begun: tr('“To her —”, without an end'),
};

// What each option of each choice does (scenario §8): the scales, then the marks ([key, value, text | null] — the text
// the player is told). What depends on more than the option the chapter does itself.
export const EFFECTS = {
  touch: {
    tap: { marks: [['touched', true, tr('You touched his shoulder. Pellerin turned round.')]] },
    pass: { marks: [['touched', false, null]] },
  },
  fine: {
    robineau: { marks: [['fine', 'robineau', tr('Robineau signed the fine and put it in his pocket. He is taking it to supper.')]] },
    self: { marks: [['fine', 'self', tr('You signed the fine yourself. “Thank you, sir.”')]] },
    tear: { exceptions: 1, marks: [['fine', 'tear', tr('You tore up the fine before the mechanics. They looked at one another.')]] },
  },
  roblet: {
    fire: { marks: [['roblet', 'fired', tr('Roblet is dismissed. He went across the field with his box.')]] },
    keep: { exceptions: 1, marks: [['roblet', 'engines', tr('Roblet stays on the engines. “Twice.”')]] },
    remove: { marks: [['roblet', 'field', tr('Roblet is taken off the engines: the chocks, the store. “Better you had fired me.”')]] },
  },
  phone: {
    wind: { marks: [['phone', 'wind', tr('You told her: the wind.')]] },
    storm: { told: 1, marks: [['phone', 'storm', null]] },
    robineau: { marks: [['phone', 'robineau', tr('You gave the receiver to Robineau. He told her: the wind — and did not raise his eyes.')]] },
  },
  minute: {
    bearing: { marks: [['bearing', true, tr('The minute went to the bearing. Nobody will read his last words.')], ['minute', 'place', null]] },
    hers: { exceptions: 1, marks: [['bearing', false, tr('Her words went down the service line. There will be no bearing.')], ['minute', 'word', null]] },
    own: { exceptions: 1, marks: [['bearing', false, tr('You signed your name. The director never signs.')], ['minute', 'begun', null]] },
  },
  robineau: {
    work: { marks: [['robineau', 'working', tr('“Get to work, Robineau.” He sat down to his report.')]] },
    sit: { marks: [['robineau', 'remembers', tr('Robineau will remember.')]] },
    silent: { marks: [['robineau', 'alone', tr('Robineau went out onto the field alone, without his coat.')]] },
  },
  european: {
    fly: { marks: [['european', 'fly', tr('You raised your hand. The lights went north.')]] },
    ground: { marks: [['european', 'ground', tr('You said “stand down”. The floodlights went out.')]] },
    silent: { marks: [['european', 'silent', tr('You said nothing. “Since you say nothing — by the timetable.”')]] },
  },
};
export const ENDINGS = [
  { id: 'victory', label: tr('The Heavy Victory') }, { id: 'silence', label: tr('Without an Order') }, { id: 'dawn', label: tr('Dawn') },
];

// What follows from the play so far — all a step reads of it besides g.state. A choice not made (its step gone to by
// the author's map past it) gives its first option.
export function facts(state) {
  const c = state.choices, s = state.scales;
  const f = {
    touch: c.touch ?? 'tap', fine: c.fine ?? 'robineau', roblet: c.roblet ?? 'fire', phone: c.phone ?? 'wind',
    minute: c.minute ?? 'bearing', robineau: c.robineau ?? 'work', european: c.european ?? 'fly',
    exceptions: s.exceptions, told: s.told,
  };
  f.touched = f.touch === 'tap';
  // she was told the storm (1) — or the wind (0), by him or by Robineau
  f.storm = f.told === 1;
  f.bearing = f.minute === 'bearing';
  // the exceptions read (scenario §8): 0 — not one, 1 — one, 2–3 — the rule bends
  f.bends = f.exceptions >= 2 ? 'bends' : f.exceptions === 1 ? 'one' : 'none';
  // the finale (scenario §11): the European mail decides — flown: “The Heavy Victory”, said nothing: “Without an
  // Order”, stood down till dawn: “Dawn”
  f.ending = f.european === 'fly' ? 'victory' : f.european === 'silent' ? 'silence' : 'dawn';
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
