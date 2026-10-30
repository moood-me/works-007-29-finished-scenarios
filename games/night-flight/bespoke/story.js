// What a chapter's steps play with: context(b, view, hub, state, j, {forward}) → g. Its state is a working copy — kept
// only once the step is done (game.js). A step left behind (the player went to the map: ☰) does nothing more and never
// ends: whatever it still calls returns a promise that never settles.
// Stage 5 of the game (moood-me/moood docs/writing/game-stages.md), under way: every place on its own scene (PLACES),
// the people the scenario puts there in it — standing or sitting where the scene's spot keys put them —, the mini-games
// real (minigames/). What the scenes' pieces will show is a plate with “Next” (g.plate, g.sheet) till the pieces come
// (the contract: game.md «Stage 5 — pieces»); then a step opens its scene on a piece and says its lines at the piece's
// moments (g.beat, g.told, piece()).
//   g.state — what the play carries: {scales, shown, marks, choices} (game.js); what follows from it: facts(g.state)
//   g.signal — aborts when the step is left
//   g.scene(place, {here, moods, keys, air}, {cut}) — that place of the game (PLACES: the world's scene it is played on,
//     and where it really is when that scene only stands in for it), full-screen: of the game's people only `here` are
//     there — those of them the scene has (`<id>_here`, the engine's key; whom it has not are not seen: voices only) —,
//     their faces as `moods` say ({id: mood}); `keys` — values of the scene's own keys (its scene.json's states) or a
//     person's (`<id>_look`); `air` — the beds of sound under it (sound.js BEDS: {bed: level}), else the place's own as
//     its keys stand (AIR). Always opened anew; `cut` — in one cut, else through black
//   g.air(levels) — the beds under the shown scene from now on (a change within it: the engine warming, the inker
//     falling silent); g.air(null) — the place's own again, as its keys stand now
//   g.sound(name, {loud, far, delay, rate, cut}) — a one-off sound (sound.js ONCE); g.tone(seconds, o) — the key held
//     down, one long note; nothing where the step is unseen or hurried (the page's ⏭)
//   g.here(id, on) — someone of the shown scene comes or goes (in one cut); g.mood(id, mood) — their face (both: only
//     the game's people the scene has; others are let be)
//   g.beat(name, {wait}) — a piece of the shown scene (its key `beat`; world module `beats`); → once it has ended (the
//     scene tells `beat:<name>`), or at once with wait: false; g.scene(place, {beat}) opens the scene on it.
//     g.told(text, ms) — till the scene tells `text` (→ true) or ms pass (→ false). piece(g, name, {moment: fn}) — the
//     piece with the lines said at its moments
//   g.set(key, value, seconds) — one of the shown scene's own keys, or a person's: at once, or moved over seconds;
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
//     timer (its arc of time running down on each mark): nothing chosen so long — `otherwise` (one of the options);
//     touch (the plate's phrase) — a chance: one touch on the one point, no petals, its arc of time running down;
//     not touched in time — `otherwise` (an id of its own: the chance let pass). A mark whose point is out of the
//     frame stands at the frame's edge nearest to it (listen: toward)
//   g.late(choice) — whether the timer of that choice ran out in this step (nothing chosen: `otherwise` was taken —
//     the scenario may play it otherwise than the option picked; a step played unseen has none)
//   g.play(minigame, opts) — a mini-game (a module of minigames/: {title, about, skipped, run(g, b, opts, signal)});
//     the signal aborts when it is skipped (the page's ⏭, where it may be skipped) or the step is left; → its result
//   g.minigame({phrase}) — inside a minigame's run: the language's mini-game begun; g.failed() — a mistake in it (from
//     then on the page's ⏭ may skip it)
//   g.apply(choice) — what the option chosen does, by EFFECTS: the scales, then each mark
//   g.scale(name, delta) — a scale moves; the player sees which way (its slip: the words, the arrows)
//   g.gauge(name) — the scale is shown from now on (on the map, game.js); its one line of what it means said once
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

import { once, tone } from './sound.js';

// The game's places (scenario §4) and the world's scene each is played on — the one map of them. At stage 3 a place
// whose own scene was not made yet stood in one of the ready ones with a label (`where`) saying where it really was;
// since stage 4 every place has its own scene. The steps name places, never folders. (The map has a scene of its own:
// `night`, game.js.)
export const PLACES = {
  office: { folder: 'office' }, // С1 Rivière's office
  bureau: { folder: 'bureau' }, // С2 the bureau
  field: { folder: 'field' }, // С3 the field by the hangar
  cockpit: { folder: 'cockpit' }, // С4 Fabien's cockpit
};

// The scenes' own keys at the scenario's hours. The bureau: its lamps, the office door's glass, the inker, the clock
// (minutes after midnight: clock(22, 5) — five past ten; the scene takes dusk and dawn from it), the map's flags
// (FLAGS — where the night has got to), the hangar in its window (`outside`). Its people's places are its spot keys
// (riviere_spot, robineau_spot, pilot_spot, telegraphist_spot), given by the steps. The field: its floodlights (dark —
// the field black, only the hangar's lamps; lit), the hangar's lamps, Rivière's window upstairs; the plane (PLANE). The
// cockpit: its skies — dusk, the night over the steppe, the storm, over the clouds — and the instrument lamps. The
// office: OFFICE — its lamps, the floodlights below, the rain.
export const clock = (h, m) => h * 60 + m;
export const FLAGS = {
  // the evening: the Patagonian at Río Gallegos, the Chilean over the Andes, the Asunción up the river, the European
  // at the field
  evening: { blue: 'south', west: 'air', north: 'air', red: 'field' },
  // the Patagonian past San Julián (П.2's flag)
  julian: { blue: 'san_julian', west: 'air', north: 'air', red: 'field' },
  // the Chilean in (1.1), the Patagonian by Trelew
  trelew: { blue: 'trelew', west: 'field', north: 'air', red: 'field' },
  // all in but the Patagonian, held by Trelew (2.1's flag on)
  night: { blue: 'trelew', west: 'field', north: 'field', red: 'field' },
  // the blue flag led into the sea, to the bearing (3.6)
  sea: { blue: 'sea', west: 'field', north: 'field', red: 'field' },
  // the night taken down (the dawn's Ф.5)
  down: { blue: 'off', west: 'off', north: 'off', red: 'off' },
};
export const bureau = (time, { tape = 0, lamps = 1, flags = FLAGS.night, outside = 'european' } = {}) => ({ lamps, office: 1, tape, time, ...flags, outside });
export const FIELD = {
  dark: { floods: 0, hangar: 1, office: 1 },
  lit: { floods: 1, hangar: 1, office: 1 },
};
// the plane before the hangar, standing (its engine still or running), or in the air over the field — coming down out of
// the dark to it (the Chilean, 1.1); the pieces fly them
export const PLANE = {
  stand: (plane, engine = 0) => ({ plane, plane_a: 4.2, plane_d: 13.6, plane_h: 0, plane_pitch: 0, engine, plane_lights: 0, chocks: 1 }),
  // (from the right: the plane is a side card, nose left — it comes in nose first moving left; the field's notes)
  coming: plane => ({ plane, plane_a: 110, plane_d: 330, plane_h: 35, plane_pitch: -4, engine: 1, plane_lights: 1, chocks: 0 }),
};
export const SKY = {
  dusk: { storm: 0, rain: 0, above: 0, panel: 0, night: 0 },
  night: { storm: 0, rain: 0, above: 0, panel: 1, night: 1 },
  storm: { storm: 1, rain: 1, above: 0, panel: 1, night: 0 },
  above: { storm: 1, rain: 0, above: 1, panel: 1, night: 0 },
};
// the office at three: its lamps, the floodlights below (out only when the European was stood down), the rain begun;
// below the window — the European standing or gone, Roblet where Ш1 put him, Robineau by the hangar's wall if he went
// out alone (3.7)
export const OFFICE = f => ({
  lamp: 1, floods: f.ending === 'dawn' ? 0 : 1, rain: 0.6, plane: f.ending === 'dawn' ? 'standing' : 'gone',
  yard_roblet: f.roblet === 'keep' ? 'hangar' : f.roblet === 'remove' ? 'chocks' : 'none', yard_robineau: f.robineau === 'silent' ? 1 : 0,
});

// The places' sound (scenario §4: sound is the game's main instrument) — the beds under each place as its keys stand
// (sound.js BEDS: {bed: level}); a step gives its own `air` where the moment differs (the engine warming, the inker
// running, the clock while the minute runs out). Low: the voices are over them. The bureau: its wall clock always;
// the inker while it runs; through the open field door the wind — stronger once the storm is coming (23:20 on), the
// rain from three (the storm at the field), the next evening's crickets at dusk. The field: the wind over it; an engine
// warming by the hangar, or one far off over the dark coming in. The cockpit: the engine and the wind; the storm; over
// the clouds the engine alone, quieter. The office at three: the rain on its window.
export const AIR = {
  bureau: k => {
    const t = k.time ?? 0, a = { clock: 0.12 };
    if (k.tape) a.inker = 0.3;
    if (t >= 180 && t < 330) a.rain = 0.22;
    else if (t >= 330 && t < 480) a.field = 0.05;
    else if (t >= 1110 && t < 1230) a.evening = 0.14;
    else a.field = t >= 1400 || t < 180 ? 0.1 : 0.06;
    return a;
  },
  field: k => ({ field: 0.3, ...(k.engine > 0 && !k.plane_h ? { idle: 0.35 } : {}), ...(k.engine > 0 && k.plane_h > 0 ? { drone: 0.3 } : {}) }),
  cockpit: k => (k.above ? { cockpit: 0.22 } : k.storm ? { storm: 0.45, cockpit: 0.3 } : { cockpit: 0.38 }),
  office: k => ({ rain: 0.3 + 0.2 * (k.rain ?? 0) }),
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
  const late = new Set(); // the choices of this step whose timer ran out
  const waits = new Set();
  const sleep = ms => (gone() ? never : unseen() ? j.sleep(ms) : fast ? Promise.resolve() : new Promise(ok => {
    const w = { ok: () => gone() || ok() };
    w.timer = setTimeout(() => { waits.delete(w); w.ok(); }, ms);
    waits.add(w);
  }));
  const put = (key, value, seconds) => (unseen() ? j.did([key, value]) : b.set(key, value, seconds));
  let people = new Set(), present = new Set(); // the shown scene's people; those of them there now
  let opening = null; // the piece the scene was opened with, till g.beat takes it up: {name, ended}
  let shownPlace = null; // the place shown (its own air: AIR)
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
    if (shown) {
      await alive(b.show(shown.folder, { state: shown.state, captions: false, then, background: shown.air }));
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
    async scene(place, { beat = null, here = [], moods = {}, keys = {}, air = null } = {}, { cut = false } = {}) {
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
      shownPlace = place;
      const background = air ?? AIR[place]?.(st) ?? {};
      if (unseen()) {
        opening = beat ? { name: beat, ended: g.told(`beat:${beat}`, BEAT) } : null;
        j.scene(folder, st, where);
        j.shown.air = background;
        return;
      }
      showing = true;
      try {
        if (fast) await alive(land());
        opening = beat ? { name: beat, ended: g.told(`beat:${beat}`, BEAT) } : null;
        hub.withdraw();
        view.where(null);
        await alive(b.show(folder, { state: st, captions: false, fade: !cut, background }));
        view.where(where);
      } finally { showing = false; }
    },
    set(key, value, seconds) {
      if (gone()) return;
      put(key, value, seconds);
    },
    air(levels) {
      if (gone()) return;
      const to = levels ?? AIR[shownPlace]?.(new Proxy({}, { get: (_, k) => g.get(k) })) ?? {};
      if (unseen()) { if (j.shown) j.shown.air = to; } else b.background(to);
    },
    sound(name, o) {
      if (gone() || unseen() || fast) return;
      once(name, o);
    },
    tone(seconds, o) {
      if (gone() || unseen() || fast) return;
      tone(seconds, o);
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
      if (action.late) late.add(choice);
      return action.id;
    },
    late: choice => late.has(choice),
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
    },
    gauge(name) {
      if (gone()) return;
      if (state.shown[name] !== true) {
        state.shown[name] = true;
        if (!unseen()) view.toast(SCALES[name].rule, 'rule');
      }
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
//     mark for SHOW s is shown how: the ghost finger on each in turn. within (ms) — a timer, its arc of time running
//     down on each mark: nothing chosen so long, {id: otherwise, late: true}; phrase — a chance instead: one touch on the one mark,
//     no petals (the plate says the phrase)
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
  // a chance: one mark, a touch is the action (a mini-game's press, no petals), its arc of time running down; not
  // touched in time — `otherwise`
  function chance(offers, within, otherwise, phrase) {
    const mg = offered = b.minigame.start({ phrase }), [ref] = Object.keys(offers), [action] = offers[ref];
    return new Promise(ok => {
      const mark = mg.mark({ at: toward(ref), time: 1 });
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
      let timer = () => {};
      mg.on('end', () => { clearTimeout(ghost); timer(); });
      return new Promise(ok => {
        const marks = [];
        // (a timer: its arc running down on the marks, on the play's time; nothing chosen in time — `otherwise`)
        if (within != null) {
          const t0 = mg.t;
          timer = mg.on('frame', ({ t }) => {
            const left = Math.max(0, 1 - (t - t0) / (within / 1000));
            for (const m of marks) m.set({ time: left });
            if (left <= 0) { timer(); mg.leave(); if (offered === mg) offered = null; ok({ id: otherwise, late: true }); }
          });
        }
        const chosen = (mark, action) => { timer(); mg.snap({ at: mark }); mg.leave(); offered = null; ok(action); };
        for (const ref of refs) {
          const options = offers[ref], mark = mg.mark({ at: toward(ref), ...(within != null ? { time: 1 } : {}) });
          marks.push(mark);
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
