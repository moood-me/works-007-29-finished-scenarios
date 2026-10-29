// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 3 of the game (moood-me/moood docs/writing/game-stages.md): the whole play on the world's three scenes as they
// are — people stand, the scenes only say who is there and their faces (and their own keys: the house's lamp, the
// stream's mist, the bread on the stone and the village's smoke at the forest edge). What the scenario's pieces would
// show is a plate with “Next” (g.plate, g.sheet); a mini-game, and a guiding (a light gesture with no miss), is its stub
// — a mark to press and a card saying what it will be (minigames/stub.js); a place the world has not got yet, or not in
// that year — the people in one of its scenes and a label saying where and when it really is (PLACES).
//   g.state — what the play carries: {scales, shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys}, {cut}) — that place of the game in its year (PLACES: the world's scene it is
//     played on, its keys there, and where it really is when that scene only stands in for it), full-screen: of the
//     game's people only `here` are there — those of them the scene has (`<id>_here`, the engine's key; whom it has
//     not are not seen: voices only) —, their faces as `moods` say ({id: mood}); `keys` — values of the scene's own
//     keys (its scene.json's states) or a person's (`<id>_look`…). Always opened anew; `cut` — in one cut, else
//     through black
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
//   g.minigame({phrase}) — inside a minigame's run: the language's mini-game begun; g.card(title, gesture, text,
//     guiding) — the stub's card beside it, gone with the minigame (→ a function that takes it away sooner)
//   g.apply(choice) — what the option chosen does, by EFFECTS: the scales, then each mark
//   g.scale(name, delta) — a scale moves; the player sees which way (the gauge, the words)
//   g.gauge(name) — the scale is shown from now on; its one line of what it means said once
//   g.mark(key, value, text) — remembered (state.marks[key]); text — what the player is told; null — told nothing
//   g.title(text) — words over the scene, as a title between times; → once they have gone
//   g.done() → once the step's code is through: the page's ⏭ taken back; g.leave() — the step left behind (game.js)
// The page's ⏭ (bespoke.forward) is the step's while it is played ({forward}: whether the player has seen the step —
// game.js): where the step is seen, pressed, the step goes on at once to its next interaction — the next line said,
// plate, choice, minigame, scene or title —, the waits between over at once, the line heard dropped. In a minigame the ⏭
// skips it; while a choice or a plate waits there is none.
// A step may be played up to a minigame unseen, without time (the author's map: a jump — jump.js j), or all through
// (a dry run: game.js, check/run.mjs): then nothing of it is said, shown or heard, a plate goes by at once, and a
// minigame gives its `skipped`.

// The game's places in their years (scenario §4: each place changes — the prologue and chapter I, +6, +20, +30 years
// from the beginning) and the world's scene each is played on — the one map of them. A place the world has not drawn
// (Elzéard's hut beyond the ridge; the far slopes), or not in that year, stands in a ready scene that has
// the step's people, and `where` says (a label high on the left) where and when it really is. When its own scene, or
// its year of it, comes (stage 4: `r3/trees-village`, `r3/trees-years`), its line here becomes `{ folder, keys }` —
// nothing else changes: the steps name places, never folders. `keys` — the scene's own keys that make it that place in
// that year. (The house at dusk, no one there, is also the map's background: game.js.)
export const PLACES = {
  // the prologue and chapter I — the dead plateau
  village0: { folder: 'village', keys: { time: 'prologue', coal: 1, fountain: 0, dawn: 0 } }, // М1
  house0: { folder: 'shepherds-house' }, // М2
  slope0: { folder: 'shepherds-house', keys: { lamp: 0 }, where: tr('In truth: the gentle slope above the village — bare earth and wind; below it, the dry bed of a stream.') }, // М3
  // chapter II — six years on
  village6: { folder: 'village', keys: { time: 'chapter2', coal: 0, fountain: 0 } }, // М1
  stream6: { folder: 'stream' }, // М4
  slope6: { folder: 'stream' }, // М3: up the stream, the young oaks and the hives
  far6: { folder: 'stream', keys: { mist: 0 }, where: tr('In truth: the far edge of the slope — rows of dry sticks, the maples; beside them, rows of tiny beeches.') }, // М3
  house6: { folder: 'shepherds-house', where: tr('In truth: six years on — beehives instead of sheep; Elzéard is sixty-one, the Traveller twenty-six, in a soldier’s greatcoat.') }, // М2
  // chapter III — fourteen years more
  edge20: { folder: 'forest-edge', keys: { smoke: 1 } }, // М3: the forest edge above the village, by the stream
  house20: { folder: 'shepherds-house', where: tr('In truth: fourteen years later — hives by the house; Elzéard is seventy-five, the Traveller forty.') }, // М2
  stumps20: { folder: 'forest-edge', keys: { smoke: 1, bread: false }, where: tr('In truth: the lower edge of the forest above the village — stumps, fresh or a year old; the wood has been carted away.') }, // М3
  // the epilogue — ten years more
  village30: { folder: 'village', keys: { time: 'epilogue', coal: 0, fountain: 1, dawn: 0, smoke_home: 1, smoke_edge: 1, smoke_b1: 1, smoke_b2: 1, smoke_l2: 1, smoke_r1: 1 }, where: tr('In truth: Lina is forty-seven here, the Traveller fifty.') }, // М1
  house30: { folder: 'shepherds-house', where: tr('In truth: ten years on — the same house, the hives; on the porch, bread nobody has touched. Elzéard is eighty-five.') }, // М2
  hut30: { folder: 'shepherds-house', keys: { lamp: 0 }, where: tr('In truth: a hut beyond the ridge, three hours’ walk away: behind it a slope of young trees waist-high — his ten years; ahead, on the bare ground, a new edge of tiny seedlings. Elzéard is eighty-five.') }, // М2 beyond the ridge
  edge30: { folder: 'forest-edge', keys: { smoke: 1, bread: false }, where: tr('In truth: the forest edge, ten years on — the forest under guard.') }, // М3
  beeches30: { folder: 'forest-edge', keys: { smoke: 1, bread: false }, where: tr('In truth: the slope across the stream — the Traveller’s beeches, taller than a man.') }, // М3
};
// The house at dusk with no one there: the map's background (game.js)
export const MAP = { folder: 'shepherds-house', state: { elzeard_here: false, traveller_here: false, lina_here: false, lamp: 1 } };

// The scales (scenario §8), each with two sides: where they start, their bounds, its name in the gauge, its two ends
// (`sides`: the left one, the right one), the side the player reads when it moves (up: delta > 0, down: delta < 0),
// and the one line that says what it means. Neither has a right side. Each is decided by its hinge (±3); the small
// choices before it only lean it: after the hinge its sign is the hinge's (§8).
export const SCALES = {
  path: { start: 0, min: -3, max: 5, name: tr('His life'), sides: [tr('the Road'), tr('the Slope')],
    up: tr('Toward the Slope'), down: tr('Toward the Road'),
    rule: tr('The Road — the Slope: where the Traveller’s life will be — going his way and coming back once a year, or staying here, beside the work.') },
  word: { start: 0, min: -4, max: 5, name: tr('The forest'), sides: [tr('Silence'), tr('the Name')],
    up: tr('Toward the Name'), down: tr('Toward Silence'),
    rule: tr('Silence — the Name: who will know whose forest this is — everyone, by his name, or no one.') },
};
export const ORDER = ['path', 'word'];

// What each option of each choice does (scenario §8, §9): the scales, then the marks ([key, value, text | null] — the
// text the player is told: the scenario's map of choices, §11, what he did and what came of it). What depends on more
// than the option the chapter does itself; the promises (§9) are marks too: given, then kept.
export const EFFECTS = {
  drink: {
    drink: { marks: [['drink', 'drink', tr('You drank the water she carried to the stump. — The stump stayed dry.')]] },
    silent: { marks: [['drink', 'silent', tr('You watched her water the stump. — She showed you the way.')]] },
  },
  ask: {
    ask: { marks: [['ask', 'ask', tr('You asked him about his family. — He went out to the dog.')]] },
    silent: { marks: [['ask', 'silent', tr('You kept silent. — He gave you the pail to hold.')]] },
  },
  rod: {
    take: { path: 1, marks: [['rod', 'take', tr('You took the rod without asking. — He planted on, as if that was how it should be.')]] },
    wait: { marks: [['rod', 'wait', tr('You counted. — He lost count.')]] },
  },
  farewell: {
    back: { path: 1, marks: [['farewell', 'back', tr('You said “I’ll be back.” — He said: “The slope is here.”')], ['back', 'given', null]] },
    hand: { marks: [['farewell', 'hand', tr('You raised your hand without a word. — He nodded and went to the sheep.')]] },
  },
  tell: {
    oaks: { word: 1, marks: [['tell', 'oaks', tr('You told Lina about the oaks. — She laughed, and looked up the hill.')]] },
    sheep: { marks: [['tell', 'sheep', tr('You said he grazes sheep. — She watered the stump.')]] },
  },
  lina: {
    told: { word: 1, marks: [['lina', 'told', tr('You took Lina up there. — He said: “Shouldn’t have.”')]] },
    rested: { word: -1, marks: [['lina', 'rested', tr('You said the land had rested. — She wrote to her aunts.')]] },
    silent: { marks: [['lina', 'silent', tr('You kept silent. — “Don’t want to — don’t tell me.”')]] },
  },
  stay: {
    stay: { path: 3, marks: [['stay', 'stay', tr('You stayed. — He gave you the slope across the stream.')]] },
    go: { path: -3, marks: [['stay', 'go', tr('You went. — He said the acorns would be the same.')], ['year', 'given', null]] },
  },
  name: {
    name: { word: 3, marks: [['name', 'name', tr('You said his name. — The forest was named after him. He went beyond the ridge.')]] },
    grew: { word: -3, marks: [['name', 'grew', tr('You told Jan it grew by itself. — Jan wrote what he saw. The edge of the forest was cut.')]] },
    silent: { word: -3, marks: [['name', 'silent', tr('You kept silent. — Jan wrote what he saw. The edge of the forest was cut.')]] },
  },
};
// What Lina did with the name (scenario §11, chapter III: the second line of the hinge's row) — by the hinge and by
// what she knew
export function linaAfter(f) {
  if (!f.named) return tr('She stood on the path in front of them. The edge was cut all the same.');
  if (f.knows) return tr('She said: now everyone will come.');
  if (f.lied) return tr('She said your “the land rested” back to you, and turned away.');
  return tr('She said: you knew.');
}
export const ENDINGS = [
  { id: 'story', label: tr('The Story') }, { id: 'plaque', label: tr('The Plaque') },
  { id: 'rods', label: tr('Two Rods') }, { id: 'pupil', label: tr('The Pupil') },
];

// What follows from the play so far — all a step reads of it besides g.state. A choice not made (its step gone to by
// the author's map past it) gives its first option.
export function facts(state) {
  const c = state.choices, s = state.scales;
  const f = {
    drink: c.drink ?? 'drink', ask: c.ask ?? 'ask', rod: c.rod ?? 'take', farewell: c.farewell ?? 'back', tell: c.tell ?? 'oaks',
    lina: c.lina ?? 'told', stay: c.stay ?? 'stay', name: c.name ?? 'name',
    path: s.path, word: s.word,
  };
  f.drank = f.drink === 'drink'; // «Выпил воду липы»
  f.asked = f.ask === 'ask'; // «Спросил о сыне»
  f.own = f.rod === 'take'; // «Свой дуб»
  f.promised = f.farewell === 'back'; // «Вернусь»
  f.heard = f.tell === 'oaks'; // «Лина слышала»
  f.knows = f.lina === 'told'; // «Лина знает» (from 2.4)
  f.lied = f.lina === 'rested'; // «Солгал Лине»
  // the hinges (§3): the Slope or the Road (Ш1); the Name or Silence (Ш2)
  f.slope = f.stay === 'stay';
  f.named = f.name === 'name';
  f.grew = f.name === 'grew';
  // how Lina knows by the epilogue (§5 Э.1, §13): told in chapter II; from Jan (the Name); saw it herself (Silence, 3.5)
  f.learned = f.knows ? 'told' : f.named ? 'jan' : 'saw';
  // the finale (§10): the side of each hinge
  f.ending = f.slope ? (f.named ? 'pupil' : 'rods') : (f.named ? 'plaque' : 'story');
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
      const { folder, where = null, keys: own = {} } = at;
      const spec = await alive(unseen() ? j.real(b.specOf(folder)) : b.specOf(folder));
      people = new Set((spec.objects ?? []).filter(o => o.person).map(o => o.id));
      // (of the game's people the scene has: those here; the others are voices only)
      present = new Set(here.filter(id => people.has(id)));
      const st = {};
      for (const id of people) st[`${id}_here`] = present.has(id);
      for (const [id, mood] of Object.entries(moods)) if (people.has(id)) st[`${id}_mood`] = mood;
      Object.assign(st, own, keys);
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
    card(title, gesture, text, guiding = false) {
      if (!playing) throw new Error('g.card: only inside a minigame (g.play)');
      const off = view.card(title, gesture, text, guiding);
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
  };
}
