// Night Flight — after Antoine de Saint-Exupéry. A bespoke game (moood/play/runtime.js) on the world “Night Flight”
// (engine 3): one night in the office of the night mail at the edge of a great field. Three mail planes are coming in
// from the south, the west and the north; when all three are down, the European mail goes north. The player is
// Rivière, the director, who forgives no one — neither men nor the weather; tonight Fabien's Patagonian mail flies into
// a storm and does not come back. Whom to forgive, what to tell the wife, whom to give the last minute of the line, and
// whether to let the next plane go. A prologue and four chapters, the fourth ending in one of three finales and the
// epilogue (docs/new-games/nochnoj-polyot/scenario.md), each a row of steps on the world's scenes; the choices, the
// scales (Exceptions; What she knows) and what is remembered carry from chapter to chapter; the European mail (4.2)
// decides the finale (story.js facts).
// Stage 3 (moood-me/moood docs/writing/game-stages.md): the play whole on the world's three scenes, people standing;
// what the film would show — plates with “Next”; the mini-games — stubs (minigames/stub.js); places not drawn yet —
// the people in a scene of the world and a label saying where it really is (story.js PLACES).
//   The map of the play (moood docs/games/games.md §2), at stage 3 a row of leaves over the bureau (map.js) — the
// world has no map's scene yet. What can be done on it is its own drawing — pressed, the language's mark opens there,
// born open (story.js hub.ask): the main run's pointer — “Start”, “Continue” (from the beginning of the step it stopped
// in); a chapter played — “Replay the chapter”; each fork the main run reached in it — “Replay from here”. The play
// begins on the map, comes to it after each chapter, by ☰ (the step going on is left — played again from its
// beginning), and whenever it is opened again. Its author has one more sign: his map of the chapters and their steps
// (ui.js author) — straight to any step, or a minigame of one, as one of PLAYS has it by then: a replay from there.
//
// The play is one — its main run. A replay (begun on the map) goes on its own and is never kept: closed, it is gone.
// On the map: the plate “Replay” on its leaf (“Continue the replay”, “Drop the replay”), its pointer “Continue the
// replay” or “Back to the main run”; whatever would leave it asks first — “Drop the replay”. Played to its chapter's
// end, the player keeps it — “Keep”: the main run from the next chapter on — or not, “Undo”.
//
// What is kept of the play (bespoke.keep), after every step: the main run — { chapter, step, scales, shown, marks,
// choices } —, steps: {chapter: [the main run as each of its steps began, and as it ended]}, seen: {chapter: how many
// of its steps the player has ever played through} — never lessened. The page's ⏭ (bespoke.forward, story.js) is the
// player's only where they have been. Where the play is and how it ended — bespoke.at, bespoke.ended.
import { ENDINGS, SCALES, PLACES, bureau, clock, context, facts, listen } from './story.js';
import { ui } from './ui.js';
import { trees } from './map.js';
import { jump as unseen } from './jump.js';
import prologue from './chapters/prologue.js';
import one from './chapters/1.js';
import two from './chapters/2.js';
import three from './chapters/3.js';
import four from './chapters/4.js';

// (the finale and the epilogue are chapter 4's last steps: the scenario goes on from the European mail straight into
// the office, and the map of chapter 4 comes only after the epilogue — scenario §5, §10)
export const CHAPTERS = [prologue, one, two, three, four];
const END = CHAPTERS.length; // the play played through: no chapter of the main run
// a replay's end asks on its knot once the map has stood a moment
const SETTLE = 600;
// every step of the play in order, and where each chapter's first one is among them
const STEPS = CHAPTERS.flatMap(ch => ch.steps);
const FIRST = CHAPTERS.map((_, c) => CHAPTERS.slice(0, c).reduce((n, ch) => n + ch.steps.length, 0));
// “play as…” — whole plays the author goes from (scenario §11): every finale, each two ways
export const PLAYS = [
  { label: 'The Heavy Victory — the bearing, the rule kept', choices: { touch: 'pass', fine: 'robineau', roblet: 'fire', phone: 'wind', minute: 'bearing', robineau: 'work', european: 'fly' } },
  { label: 'The Heavy Victory — his own words, the rule bent', choices: { touch: 'tap', fine: 'tear', roblet: 'keep', phone: 'storm', minute: 'own', robineau: 'sit', european: 'fly' } },
  { label: 'Without an Order — her words', choices: { touch: 'tap', fine: 'self', roblet: 'remove', phone: 'storm', minute: 'hers', robineau: 'silent', european: 'silent' } },
  { label: 'Without an Order — the bearing, Robineau on the phone', choices: { touch: 'pass', fine: 'robineau', roblet: 'keep', phone: 'robineau', minute: 'bearing', robineau: 'sit', european: 'silent' } },
  { label: 'Dawn — the rule kept till the last', choices: { touch: 'pass', fine: 'self', roblet: 'fire', phone: 'wind', minute: 'bearing', robineau: 'silent', european: 'ground' } },
  { label: 'Dawn — the rule bent all night', choices: { touch: 'tap', fine: 'tear', roblet: 'keep', phone: 'storm', minute: 'hers', robineau: 'work', european: 'ground' } },
];
export const fresh = () => ({
  chapter: 0, step: 0, scales: Object.fromEntries(Object.entries(SCALES).map(([k, s]) => [k, s.start])),
  shown: {}, marks: {}, choices: {},
});

export default async function (b) {
  await b.css('ui.css');
  b.minigame.style({
    font: 'Georgia, "Times New Roman", serif',
    colors: { mark: '#f4ead2', fill: '#f4ead2', good: '#ffe08a', danger: '#c8553d', fork: '#c9d2e4', ghost: '#f4ead2' },
  });
  const hub = listen(b);
  const view = ui(b.layer);
  // PLAYS[as] played unseen: its n-th step of all (STEPS) from where the steps before leave it → {state: the play
  // after it, games: the minigames it played}
  const dry = new Map();
  const ran = (as, n) => {
    const k = `${as}:${n}`;
    if (!dry.has(k)) dry.set(k, (async () => {
      const came = n ? (await ran(as, n - 1)).state : fresh();
      const j = unseen(Infinity);
      const g = context(b, view, hub, { ...structuredClone(came), choices: Object.assign(Object.create(PLAYS[as].choices), came.choices) }, j);
      await Promise.race([STEPS[n](g).catch(() => {}), j.idle]);
      return { state: { ...g.state, choices: { ...g.state.choices } }, games: j.plays.map(m => m.title) };
    })());
    return dry.get(k);
  };
  const coming = async (as, chapter, step) => {
    const n = FIRST[chapter] + step;
    return { ...(n ? (await ran(as, n - 1)).state : fresh()), chapter, step };
  };
  let kept = load(b.saved);
  // the replay going on, never kept: {run, steps: its chapter's states as its steps began, done: played to its end}
  let replay = null;
  const keep = next => { kept = next; return b.keep(kept); };
  let jumped = () => {};
  const author = b.game.mine ? view.author({
    chapters: CHAPTERS, plays: PLAYS.map(p => p.label), at: () => replay?.run ?? kept,
    games: (as, chapter, step) => ran(as, FIRST[chapter] + step).then(r => r.games),
    go: async (as, chapter, step, game) => {
      const state = await coming(as, chapter, step);
      jumped({ jump: game == null ? state : { ...state, play: game, choices: (await ran(as, FIRST[chapter] + step)).state.choices } });
    },
  }) : null;
  const away = () => new Promise(ok => b.menu(() => ok('away')));
  const ended = () => b.ended({ ending: facts(kept).ending });

  for (let after = {}; ;) {
    const to = await map(after);
    after = {};
    if (to === 'drop') { replay = null; continue; }
    if (to === 'keep') { await keepReplay(); if (kept.chapter === END) ended(); continue; }
    if (to === 'main' || to === 'back') replay = null;
    else if (to !== 'replay') replay = replayFrom(to);
    if ((await play()) === 'away') continue;
    if (replay) {
      replay.done = true;
      after = { reveal: replay.run.chapter };
      continue;
    }
    const done = kept.chapter;
    await onward();
    if (kept.chapter === END) ended();
    after = { reveal: done };
  }

  // the run being played (the replay, else the main run), step by step to its chapter's end → 'done'; or till ☰ →
  // 'away'
  async function play() {
    for (;;) {
      const r = replay ? replay.run : kept, ch = CHAPTERS[r.chapter];
      if (r.step >= ch.steps.length) return 'done';
      view.gauge(r); // (the scales stay in sight to the end: the epilogue reads them too)
      const g = context(b, view, hub, structuredClone(run(r)), r.play != null ? unseen(r.play) : null,
        { forward: r.step < (kept.seen[r.chapter] ?? 0) });
      b.at({ chapter: r.chapter, step: r.step, replay: !!replay });
      const how = await Promise.race([
        ch.steps[r.step](g).then(() => 'done', e => { b.trouble(`the step broke: ${e.message || e}`); return 'broke'; }),
        away(),
      ]);
      if (how === 'done') await g.done();
      else g.leave();
      if (how === 'away') return 'away';
      // (a step that broke: passed with nothing of it kept)
      const next = { ...run(how === 'broke' ? r : g.state), step: r.step + 1 };
      const seen = { ...kept.seen, [r.chapter]: Math.max(kept.seen[r.chapter] ?? 0, next.step) };
      if (replay) {
        replay.run = next;
        replay.steps[next.step] = next;
        keep({ ...kept, seen });
      } else keep({ ...kept, ...next, seen, steps: { ...kept.steps, [r.chapter]: Object.assign([...(kept.steps[r.chapter] ?? [])], { [next.step]: next }) } });
    }
  }
  function onward() {
    const on = { ...run(kept), chapter: kept.chapter + 1, step: 0 };
    return keep({ ...kept, ...on, steps: { ...kept.steps, [on.chapter]: [on] } });
  }
  // a replay begun on the map: a chapter from its beginning (`chapter:i`) or from a fork's step (`fork:i:s`) — as the
  // main run was then —, or where the author's map went ({jump})
  function replayFrom(to) {
    if (to.jump) {
      const { chapter, step, play } = to.jump, at = kept.steps[chapter];
      if (at?.[step]) {
        return { run: { ...structuredClone(at[step]), ...(play != null ? { play } : {}) }, steps: structuredClone(at.slice(0, step + 1)), done: false };
      }
      return { run: structuredClone(to.jump), steps: Object.assign([], { [step]: run(to.jump) }), done: false };
    }
    const [, i, s = 0] = to.split(':').map(Number), at = kept.steps[i];
    return { run: structuredClone(at[s]), steps: structuredClone(at.slice(0, s + 1)), done: false };
  }
  function keepReplay() {
    const i = replay.run.chapter, on = { ...run(replay.run), chapter: i + 1, step: 0 }, steps = replay.steps;
    replay = null;
    return keep({ ...on, steps: { ...pick(kept.steps, j => j < i), [i]: steps, [i + 1]: [on] }, seen: kept.seen });
  }

  // the map, over the bureau at night, no one there. What brought the play here: a chapter played through (reveal: its rows come one
  // by one). → what was picked: an option's id, or {jump} — the author's map
  async function map({ reveal = null }) {
    b.menu(null);
    b.hush();
    view.quiet();
    view.gauge(null);
    await b.show(PLACES.bureau.folder, { state: { ...bureau(clock(1, 0)), madame_here: false, riviere_here: false, pilot_here: false, telegraphist_here: false, robineau_here: false, asuncion_here: false }, captions: false });
    const drawn = trees(b, sky(), { grow: reveal, author: !!author });
    const notice = replay?.done && anew() ? view.hint(tr('If you keep it, the chapters after this one will have to be played again.')) : () => {};
    let asked = null; // (an option that would leave the replay: asked again)
    let pressed = () => {};
    const offer = () => drawn.offer(Object.keys(marks(asked)), ref => pressed(ref));
    try {
      // (a replay played to its end: its knot's mark opens by itself — keep it or not)
      const asking = replay?.done ? await new Promise(ok => setTimeout(() => ok(`knot:${replay.run.chapter}`), SETTLE)) : null;
      for (let again = asking; ;) {
        offer();
        const ref = again ?? await new Promise(ok => { pressed = ok; jumped = ok; });
        pressed = () => {};
        jumped = () => {};
        again = null;
        if (ref.jump) return ref;
        const options = marks(asked)[ref];
        const picked = options ? await hub.ask(drawn.at(ref), options) : null;
        if (!picked) { asked = null; continue; }
        if (picked.id === 'author') { author(); continue; }
        if (replay && !['replay', 'keep', 'drop', 'main'].includes(picked.id) && asked !== picked.id) { asked = picked.id; again = ref; continue; }
        return picked.id;
      }
    } finally {
      jumped = () => {};
      hub.withdraw();
      notice();
      drawn.remove();
    }
  }
  // what can be done on the map: {ref: options} — `asked`: the option that would leave the replay, now “Drop the
  // replay”
  function marks(asked) {
    const offers = {};
    const add = (ref, id, label) => { (offers[ref] ??= []).push({ id, label: id === asked ? tr('Drop the replay') : label }); };
    if (replay) {
      const c = replay.run.chapter;
      if (replay.done) for (const at of [`knot:${c}`, `badge:${c}`]) { add(at, 'keep', tr('Keep')); add(at, 'drop', tr('Undo')); }
      else {
        add(`goreplay:${c}`, 'replay', tr('Continue the replay')); add(`goreplay:${c}`, 'back', tr('Back to the main run'));
        add(`badge:${c}`, 'replay', tr('Continue the replay')); add(`badge:${c}`, 'drop', tr('Drop the replay'));
        add(`knot:${c}`, 'drop', tr('Drop the replay'));
      }
    }
    if (kept.chapter < END) add(`go:${kept.chapter}`, 'main', replay ? tr('Drop the replay') : kept.step || kept.chapter ? tr('Continue') : tr('Start'));
    for (let i = 0; i < Math.min(kept.chapter, END); i++) {
      if (kept.steps[i]?.[0]) add(`knot:${i}`, `chapter:${i}`, tr('Replay the chapter'));
      CHAPTERS[i].choices.forEach((c, k) => {
        const s = fork(i, c.id);
        if (s != null) add(`fork:${i}:${k}`, `fork:${i}:${s}`, tr('Replay from here'));
      });
    }
    if (author) add('author', 'author', tr('The author’s map'));
    return offers;
  }
  // the step of chapter i in which the main run made the choice `id`
  function fork(i, id) {
    const at = kept.steps[i] ?? [];
    for (let s = 0; s + 1 < at.length; s++) if (at[s] && at[s + 1] && !(id in at[s].choices) && id in at[s + 1].choices) return s;
    return null;
  }
  function anew() {
    return kept.chapter > replay.run.chapter + 1 || (kept.chapter === replay.run.chapter + 1 && kept.step > 0);
  }
  // the chapters as the map draws them (map.js)
  function sky() {
    const re = replay?.run;
    return CHAPTERS.map((c, i) => {
      const reached = i <= kept.chapter;
      const tried = re?.chapter === i;
      const kind = i === (re ? re.chapter : kept.chapter) ? 'here' : i < kept.chapter ? 'played' : i === kept.chapter ? 'next' : 'future';
      const all = rows(c, reached ? kept.choices : {}, tried ? re.choices : {});
      return { number: c.number, title: c.titleOf ? c.titleOf(re ?? kept) : c.title, kind, rows: i < kept.chapter && !tried ? all : all.filter(r => r.options.some(o => o.state !== 'unseen')),
        go: i === kept.chapter ? (kept.step || kept.chapter ? tr('continue\nthe game') : tr('start\nthe game')) : null, replay: tried && !replay.done, badge: tried };
    }).concat(finale());
  }
  // after the epilogue: how the play ended — its endings, the one it came to chosen
  function finale() {
    const title = tr('Finale');
    if (kept.chapter < END) return { number: title, title, kind: 'future', rows: [], go: null };
    const f = facts(kept);
    return { number: '', title, kind: 'end', rows: [{ title: tr('how it ended'), weight: '⚑',
      options: ENDINGS.map(e => ({ label: e.label, state: e.id === f.ending ? 'chosen' : 'open' })) }], go: null };
  }
}

// the play as it was kept: the main run as it is (a chapter it played through — the next one begun), the states known
// at its steps' beginnings, how far each chapter has been seen
function load(saved) {
  let main = run({ ...fresh(), ...saved });
  const steps = saved.steps ?? {};
  const seen = saved.seen ?? {};
  if (main.chapter < END && main.step >= CHAPTERS[main.chapter].steps.length) {
    main = { ...main, chapter: main.chapter + 1, step: 0 };
    steps[main.chapter] = [run(main)];
  }
  (steps[main.chapter] ??= [])[main.step] ??= run(main);
  (steps[0] ??= [])[0] ??= run(fresh());
  return { ...main, steps, seen };
}
// a run's own fields, apart from what the play keeps of its chapters (a minigame gone to by the author's map: `play`)
const run = p => structuredClone({ chapter: p.chapter, step: p.step, scales: p.scales, shown: p.shown, marks: p.marks, choices: p.choices });
const pick = (o, keep) => Object.fromEntries(Object.entries(o).filter(([j]) => keep(Number(j))));
// a chapter's choices as rows: the main run's chosen, a replay's tried (both — the same), could have been, never reached
function rows(ch, mainChoices, triedChoices) {
  return ch.choices.map(c => {
    const m = mainChoices[c.id], t = triedChoices[c.id];
    return { title: c.title, weight: c.weight, options: c.options.map(o => ({ label: o.label,
      state: m === o.id && t === o.id ? 'both' : m === o.id ? 'chosen' : t === o.id ? 'tried' : m || t ? 'open' : 'unseen' })) };
  });
}
