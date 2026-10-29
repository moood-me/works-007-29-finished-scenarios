// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 5 of the game (moood-me/moood docs/writing/game-stages.md), under way: the places on their own scenes (PLACES;
// the hall still in the library), the people where the scenes have them, the mini-games real (minigames/); what the
// scenes' pieces will show is a plate with “Next” (g.plate, g.sheet) till the pieces come (the contract: game.md
// «Stage 5 — pieces»).
//   g.state — what the play carries: {scales, shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys}, {cut}) — that place of the game (PLACES: the world's scene it is played on, and
//     where it really is when that scene only stands in for it), full-screen: of the game's people only `here` are
//     there — those of them the scene has (`<id>_here`, the engine's key; whom it has not are not seen: voices only) —,
//     their faces as `moods` say ({id: mood}); `keys` — values of the scene's own keys (its scene.json's states) or a
//     person's (`<id>_with`). Always opened anew; `cut` — in one cut, else through black
//   g.beat(name, {wait}) — a piece of the shown scene (its key `beat`; world module `beats`); → once it has ended (the
//     scene tells `beat:<name>`), or at once with wait: false; g.scene(place, {beat}) opens the scene on it.
//     g.told(text, ms) — till the scene tells `text` (→ true) or ms pass (→ false). piece(g, name, {moment: fn}) — the
//     piece with the lines said at its moments
//   g.here(id, on) — someone of the shown scene comes or goes (in one cut); g.mood(id, mood) — their face (both: only
//     the game's people the scene has; others are let be)
//   g.set(key, value, seconds) — one of the shown scene's own keys (or a person's): at once, or moved over seconds;
//     g.get(key) — what it is now
//   g.wait(ms) — time of the game's own (a pause)
//   g.say(who, text, {at, how}) — someone of the game's people (people.json) says it over `at` (default: over
//     themselves if they are in the scene, else low in the middle, as the narrator), in their voice (how: this line's
//     own manner); → a breath after it is heard
//   g.plate(text) — a plate over the scene: what happens here that the scene does not show; → once “Next” is pressed
//   g.sheet(title, lines) — the same, a list
//   g.choose(choice, {ref: options}, {within, otherwise, touch}) — the player presses one of the points ('id#point' |
//     'id'), then one of its options ([{id, label}]: petals, one too — the language of mini-games, hub.offer); → the
//     option's id, kept in state.choices[choice] (choice null: not a choice of the chapter's map). within (ms) — a
//     chance, not a question: nothing pressed so long — `otherwise`; touch (the plate's phrase) — the chance is one
//     touch on the one point (its arc of time running down), no petals
//   g.play(minigame, opts) — a mini-game (a module of minigames/: {title, about, skipped, run(g, b, opts, signal)});
//     the signal aborts when it is skipped (the page's ⏭, where it may be skipped) or the step is left; → its result
//   g.minigame({phrase}) — inside a minigame's run: the language's mini-game begun; g.failed() — a mistake in it (from
//     then on the page's ⏭ may skip it)
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
// minigame gives its `skipped` (or what the dry run asks: j.result — check/run.mjs plays the misses too).

// The game's places (scenario §4) and the world's scene each is played on — the one map of them: a place whose own
// scene is not made yet stands in one of the ready ones, its people there, and `where` says (a label high on the left)
// where it really is. When the place's own scene comes, its line here becomes `{ folder: '<its folder>' }` — nothing
// else changes: the steps name places, never folders. (The library is also the map's background, game.js.)
export const PLACES = {
  library: { folder: 'library' }, // С1 the library
  corridor: { folder: 'corridor' }, // С2 the corridor
  tapestry: { folder: 'tapestry' }, // С3 the Tapestry Chamber
  // «the dark behind the wall» (4.1, 4С.5): the Tapestry Chamber with its wall open, the camera in the opening (its
  // keys `wall`, `dark`, `shapes` — the pieces' contract, game.md)
  dark: { folder: 'tapestry' },
  death: { folder: 'garden' }, // С4 the Garden of Death
  chamber: { folder: 'chamber' }, // С5 the secret chamber
  grounds: { folder: 'castle-garden' }, // С6 the garden by the castle
  hall: { folder: 'hall' }, // С7 the hall
};

// The library's own hours (its keys: the fire, Mr Otis's lamp) — given only where the place is the library itself; and
// Mr Otis without the bottle of oil the scene puts in his hand (he holds it out only in 1.2): `otis_with`, a person's key
const BARE = { otis_with: [] };
export const LIBRARY = {
  evening: { fire: 1, lamp: 1, day: 0, ...BARE },
  morning: { fire: 0.5, lamp: 0, day: 1, ...BARE },
  night: { fire: 0.3, lamp: 1, day: 0, ...BARE },
};
export const OTIS = BARE;

// The places' moments (each scene's notes.md: its rows of the scenario's moments) — the keys that put the scene there
// (with `here`, the people the step names). Only the scene's own keys and its people's.
// the corridor at night: Sir Simon far at its end (his light kept 0.6 m before him: ghost_d = simon_d − 0.6)
const FAR = { simon_a: 0, simon_d: 12.4, ghost_d: 11.8, ghost_light: 1 };
export const CORRIDOR = {
  // 1.1: one at night, her door shut, he far down the corridor
  chains: { ...FAR, door_virginia: 270, door_parents: 90 },
  // 1.2: the default (one at night: he in the middle, Mr Otis in his doorway with the bottle and a candle, she at her door ajar)
  oil: {},
  // 1.6 «заперла»: he walking by her shut door in the dark
  pacing: { simon_a: 0.6, simon_d: 6.6, ghost_d: 6, door_virginia: 270, door_parents: 90 },
  // 1.6 «сказала»: the corridor at night, everyone in their rooms
  night: { door_virginia: 270, door_parents: 90, ghost_light: 0 },
  // 2.4: the evening, the boys making the turnip ghost at the corner, Virginia level with them across the corridor
  evening: { evening: 1, sconces: 1, spook: 'making', ghost_light: 0, door_parents: 90,
    twin_star_a: -1.5, twin_star_d: 7.2, washington_a: -1.25, washington_d: 8.9, twin_stripes_a: -0.45, twin_stripes_d: 8.3,
    virginia_a: 0.9, virginia_d: 7.6, virginia_with: [], virginia_candle: 0 },
  // 2.5: midnight, the turnip ghost at the corner, Sir Simon out of the corner looking at it, the boys behind the twins' door
  midnight: { spook: 'standing', simon_a: -1.7, simon_d: 9.4, ghost_d: 8.8, ghost_light: 1, door_twins: 300, door_parents: 90, simon_look: 'spook#turnip' },
  // 2.5 «warn»: a quarter to midnight, the turnip ghost at the corner, she at her door with a candle
  candle: { spook: 'standing', ghost_light: 0, door_parents: 90, door_virginia: 330, virginia_a: 1.8, virginia_d: 6.3, virginia_with: ['candle_l'], virginia_candle: 1 },
  // the next morning
  morning: { evening: 1, sconces: 0, ghost_light: 0, door_parents: 90, twin_star_a: -0.3, twin_star_d: 9, twin_stripes_a: 0.4, twin_stripes_d: 10.5 },
  // 4С.2: the evening, the armchair at her door, Mr Otis by it, she in her doorway
  word: { evening: 1, sconces: 1, armchair: true, ghost_light: 0, otis_a: 1.2, otis_d: 6, otis_with: [], otis_candle: 0, virginia_a: 1.8, virginia_d: 6.3, virginia_with: [], virginia_candle: 0, door_virginia: 330, door_parents: 90 },
  // 4С.3–4С.4: night, Mr Otis asleep in the armchair, Sir Simon at the far end, she at her open door
  farewell: { ...FAR, armchair: true, otis_on: [1.4, 7.32, 0.45], otis_do: 'doze', otis_with: ['book'], otis_candle: 0, virginia_a: 1.7, virginia_d: 6.2, virginia_with: [], virginia_candle: 0, door_virginia: 330, door_parents: 90 },
  // 4С.5: the silence wakes him — the armchair, her door open, nobody
  woken: { armchair: true, otis_on: [1.4, 7.32, 0.45], otis_do: 'doze', otis_with: ['book'], otis_candle: 0, door_virginia: 360, door_parents: 90, ghost_light: 0 },
  // the epilogue's nights: the armchair at her door («Миндаль»), or none («Свеча»)
  chair: { armchair: true, otis_on: [1.4, 7.32, 0.45], otis_do: 'doze', otis_with: ['book'], otis_candle: 0, virginia_a: 1.7, virginia_d: 6.2, virginia_with: [], virginia_candle: 0, door_virginia: 300, door_parents: 90, ghost_light: 0 },
  empty: { door_virginia: 330, door_parents: 90, ghost_light: 0, virginia_a: 1.7, virginia_d: 6.2, virginia_with: [], virginia_candle: 0 },
};
// the garden by the castle
const AUTUMN_NIGHT = { night: 1, autumn: 1, almond: 'blossom', easel: false };
export const GROUNDS = {
  paint: {}, // 1.5: the default — a summer morning, Virginia at her easel, Mrs Umney passing
  idle: { virginia_on: [3.35, 6.35, 0.45], virginia_do: 'brood', virginia_with: null }, // 2.6, Cecil on the grass by her
  // the funeral («Миндаль», «Свеча»): night, autumn, the almond in blossom, the coffin, the torches, the clouds over the moon
  funeral: { ...AUTUMN_NIGHT, funeral: true, grave: 'open', torches: 1, clouds: 1, virginia_a: 0.25, virginia_d: 7.2,
    virginia_do: 'clasped', virginia_with: ['almond_cross'], virginia_look: 'coffin#lid', washington_with: ['torch'], torch_held: 1 },
  // «Свеча»: Mr Otis apart with a candle
  apart: { otis_with: ['candle'], candle: 1, otis_do: 'offer' },
  years: { night: 0, autumn: 1, almond: 'blossom', easel: false, grave: 'mound', cross: true },
  last: { ...AUTUMN_NIGHT, grave: 'mound', cross: true },
  coaches: { autumn: 1, easel: false, coaches: true, coach_d: 30 },
};
// the hall: its key `moment` (its script lays the people out) — 4.2 calling, waiting; 4.6 midnight; the finales' departure, wedding
export const HALL = Object.fromEntries(['calling', 'waiting', 'midnight', 'departure', 'wedding'].map(m => [m, { moment: m }]));
// the secret chamber: its key `moment` (its script places the people)
export const CHAMBER = { family: { moment: 'family' }, father: { moment: 'father' } };

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
    async choose(choice, offers, { within = null, otherwise = null, touch = null } = {}) {
      if (gone()) return never;
      // unseen: as the play chose it — else the first offered; one it chose that isn't here: offered once seen
      let action;
      if (unseen()) {
        const all = Object.values(offers).flat(), was = choice && state.choices[choice];
        action = !was ? all[0] : was === otherwise ? { id: otherwise } : all.find(o => o.id === was) ?? (await new Promise(ok => j.later(() => wait(() => hub.offer(offers, within, otherwise, touch)).then(ok))));
      } else action = await wait(() => hub.offer(offers, within, otherwise, touch));
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
  // a chance: one mark, a touch is the action (a mini-game's press, no petals), its arc of time running down; not
  // touched in time — `otherwise`
  function chance(offers, within, otherwise, phrase) {
    const mg = offered = b.minigame.start({ phrase }), [ref] = Object.keys(offers), [action] = offers[ref];
    return new Promise(ok => {
      const mark = mg.mark({ at: ref.includes('#') ? ref : `${ref}@`, time: 1 });
      const press = mg.press({ on: mark });
      const t0 = mg.t;
      let over = false;
      const end = (as, what) => { if (over) return; over = true; offs.forEach(f => f()); mg.end({ as }).then(() => { if (offered === mg) offered = null; }); ok(what); };
      const offs = [
        press.on('press', () => { mg.snap({ at: mark }); end('clean', action); }),
        mg.on('frame', ({ t }) => { const left = 1 - (t - t0) / (within / 1000); mark.set({ time: Math.max(0, left) }); if (left <= 0) end('neutral', { id: otherwise }); }),
      ];
    });
  }
  return {
    offer(offers, within = null, otherwise = null, phrase = null) {
      offered?.leave();
      if (phrase != null) return chance(offers, within, otherwise, phrase);
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
    told,
  };
}
