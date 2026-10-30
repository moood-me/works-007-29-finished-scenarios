// The Canterville Ghost — after Oscar Wilde. A bespoke game (moood/play/runtime.js) on the world “The Canterville
// Ghost” (engine 3): an old English manor, an American family that does not believe in ghosts and offers theirs oil for
// his chains, and Sir Simon de Canterville, who has not slept for three hundred years. The player is Virginia Otis,
// fifteen: where does she stand — with her laughing family, or beside the old murderer? A prologue, four chapters (the
// fourth in two forms: “The Garden of Death” or “The Last Night”), an epilogue in three finales
// (docs/new-games/kentervilskoe-prividenie/scenario.md), each a row of steps on the world's scenes; the choices, the
// scales (Sir Simon: plays — is tired; Virginia: shares — keeps it to herself) and what is remembered carry from chapter
// to chapter; the wall (3.7) and, after it, the chair (4С.4) decide the finale (story.js facts).
// Stage 5 under way (moood-me/moood docs/writing/game-stages.md): the places on their scenes, the mini-games real
// (minigames/); the scenes' pieces in place of the plates as they come (game.md «Stage 5 — pieces»).
//   The map of the play (moood docs/games/games.md §2): the chapters' trees (map.js) over the world's scene «Canterville
// by Night» (`night`), the view brought to the chapter the play is at, dragged by the player; the scales in its corner
// (scenario §8: seen on the map after each chapter — in the play only their slips as they move). What can be done on it
// is its own drawing — pressed, the language's mark opens there,
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
import { EFFECTS, ENDINGS, SCALES, context, facts, listen } from './story.js';
import { ui } from './ui.js';
import { beds } from './sound.js';
import { trees } from './map.js';
import { jump as unseen } from './jump.js';
import prologue from './chapters/prologue.js';
import one from './chapters/1.js';
import two from './chapters/2.js';
import three from './chapters/3.js';
import four from './chapters/4.js';
import epilogue from './chapters/epilogue.js';

export const CHAPTERS = [prologue, one, two, three, four, epilogue];
const END = CHAPTERS.length; // the play played through: no chapter of the main run
const EPILOGUE = CHAPTERS.length - 1;
const MAP = 'night'; // the map's scene (its folder)
const REVEAL = 6; // s: a chapter's rows growing on its leaf, as it has been played through
// a replay's end asks on its knot once the knot has stood still REST looks REST_STEP ms apart (REST_MAX s at most)
const REST = 3, REST_STEP = 100, REST_MAX = 12;
// every step of the play in order, and where each chapter's first one is among them
const STEPS = CHAPTERS.flatMap(ch => ch.steps);
const FIRST = CHAPTERS.map((_, c) => CHAPTERS.slice(0, c).reduce((n, ch) => n + ch.steps.length, 0));
// “play as…” — whole plays the author goes from (scenario §12): every ending, full and late
export const PLAYS = [
  { label: 'The Almond — her name said in the prayer', choices: { face: 'told', goodnight: 'wish', paints: 'leave', trap: 'warn', hunger: 'bread', wall: 'go', name: 'named' } },
  { label: 'The Almond — for him alone', choices: { face: 'silent', goodnight: 'pass', paints: 'lock', trap: 'defend', hunger: 'killed', wall: 'go', name: 'unnamed' } },
  { label: 'The Candle by the Wall — her name said in the prayer', choices: { face: 'silent', goodnight: 'wish', paints: 'tell', trap: 'watch', hunger: 'killed', wall: 'papa', door: 'pass', name: 'named' } },
  { label: 'The Candle by the Wall — for him alone', choices: { face: 'told', goodnight: 'pass', paints: 'leave', trap: 'warn', hunger: 'bread', wall: 'papa', door: 'pass', name: 'unnamed' } },
  { label: 'The Stain — she stayed at her door', choices: { face: 'silent', goodnight: 'wish', paints: 'leave', trap: 'warn', hunger: 'bread', wall: 'papa', door: 'stay' } },
  { label: 'The Stain — she woke Papa', choices: { face: 'told', goodnight: 'pass', paints: 'lock', trap: 'watch', hunger: 'killed', wall: 'papa', door: 'wake' } },
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
  // the game's background — its beds of sound — as the page sounds it, where the picture changes (sound.js)
  b.onBackground((levels, seconds) => beds(levels, seconds));
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
  let closed = false; // (the play just played through: the map comes out of the black)

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
      if (replay.run.chapter === EPILOGUE) await closing(replay.run);
      after = { reveal: replay.run.chapter };
      continue;
    }
    const done = kept.chapter;
    // (a breath before the map: the slips the chapter's last choice left are read)
    if (done < EPILOGUE) await new Promise(ok => setTimeout(ok, 3000));
    await onward();
    if (kept.chapter === END) {
      ended();
      await closing(kept);
    }
    after = { reveal: done };
  }

  // the play played through (the main run, or a replay of the epilogue: its run): the last shot goes to black, the
  // ending's name over it; the map comes out of the black
  async function closing(r) {
    b.menu(null);
    await b.fade(1, 2);
    await view.title(ENDINGS.find(e => e.id === facts(r).ending).label);
    closed = true;
  }

  // the run being played (the replay, else the main run), step by step to its chapter's end → 'done'; or till ☰ →
  // 'away'
  async function play() {
    for (;;) {
      const r = replay ? replay.run : kept, ch = CHAPTERS[r.chapter];
      if (r.step >= ch.steps.length) return 'done';
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

  // the map, «Canterville by Night»: the view at the chapter the play is at (the replay's, else the main run's), the
  // scales in its corner. What brought the play here: a chapter played through (reveal: its rows grow — its forks
  // offered once they have —, then the view goes on to where the play is now). → what was picked: an option's id, or
  // {jump} — the author's map
  async function map({ reveal = null }) {
    b.menu(null);
    b.hush();
    view.quiet();
    const here = replay ? replay.run.chapter : Math.min(kept.chapter, END);
    await b.show(MAP, { state: { shown: reveal ?? here }, captions: false, background: { night: 0.22, wind: 0.08 } });
    if (closed) { closed = false; b.fade(0, 1.5); }
    view.gauge(replay ? replay.run : kept);
    const drawn = trees(b, sky(), { grow: reveal, seconds: REVEAL, author: !!author });
    const notice = replay?.done && anew() ? view.hint(tr('If you keep it, the chapters after this one will have to be played again.')) : () => {};
    let grown = reveal == null, asked = null; // (an option that would leave the replay: asked again)
    let at = reveal ?? here; // (the chapter the view is at)
    const go = i => { if (i !== at) { at = i; b.set('shown', i); } };
    // (something of a chapter pressed — the view goes to it; pressed on the chapter already shown, wherever the player
    // dragged the view: back to it)
    let come = 0;
    const bring = i => { if (i === at) b.set('come', ++come); else go(i); };
    const touched = ref => { const i = /^(?:knot|fork|go|goreplay|badge):(\d+)/.exec(ref)?.[1]; if (i != null) bring(Number(i)); };
    let pressed = () => {};
    const offer = () => drawn.offer(Object.keys(marks(asked, grown ? null : reveal)), ref => pressed(ref));
    // (the chapter just played grown: its forks offered too, the view on to where the play is)
    const growing = grown ? null : setTimeout(() => { grown = true; offer(); go(here); }, REVEAL * 1000);
    try {
      // (a replay played to its end: its knot's mark opens by itself — keep it or not)
      const asking = replay?.done ? await standing(drawn, `knot:${replay.run.chapter}`) : null;
      for (let again = asking; ;) {
        offer();
        const ref = again ?? await new Promise(ok => { pressed = ok; jumped = ok; });
        pressed = () => {};
        jumped = () => {};
        again = null;
        if (ref.jump) return ref;
        touched(ref);
        const options = marks(asked, grown ? null : reveal)[ref];
        const picked = options ? await hub.ask(drawn.at(ref), options) : null;
        if (!picked) { asked = null; continue; }
        if (picked.id === 'author') { author(); continue; }
        if (replay && !['replay', 'keep', 'drop', 'main'].includes(picked.id) && asked !== picked.id) { asked = picked.id; again = ref; continue; }
        return picked.id;
      }
    } finally {
      clearTimeout(growing);
      jumped = () => {};
      hub.withdraw();
      notice();
      drawn.remove();
      view.gauge(null);
    }
  }
  // a ref of the map's drawing once it has come to rest in the frame (a mark opened on it while the view still moves
  // could go out of sight); none within REST_MAX s — null
  function standing(drawn, ref) {
    return new Promise(ok => {
      let last = null, still = 0, waited = 0;
      const look = setInterval(() => {
        const p = drawn.at(ref)();
        still = p && last && Math.hypot(p.x - last.x, p.y - last.y) < 0.5 ? still + 1 : 0;
        last = p;
        waited += REST_STEP;
        if (still >= REST || waited >= REST_MAX * 1000) { clearInterval(look); ok(still >= REST ? ref : null); }
      }, REST_STEP);
    });
  }
  // what can be done on the map: {ref: options} — `asked`: the option that would leave the replay, now “Drop the
  // replay”
  function marks(asked, growing = null) {
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
      if (i === growing) continue;
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
      // (a fork the chapter's form never reached — 4С's chair on the way of «The Garden of Death» — is no row of it)
      const shown = rows(c, reached ? kept.choices : {}, tried ? re.choices : {}, reached ? kept.marks : {}).filter(r => r.options.some(o => o.state !== 'unseen'));
      const title = c.titleOf ? c.titleOf(re ?? kept) : c.title;
      // (a chapter to come shows its number only — one without a number, its title)
      return { number: c.number || (kind === 'future' ? title : ''), title, kind, rows: i === EPILOGUE && kept.chapter >= END ? ending() : shown,
        go: i === kept.chapter ? (kept.step || kept.chapter ? tr('continue\nthe game') : tr('start\nthe game')) : null, replay: tried && !replay.done, badge: tried };
    }).concat(finale());
  }
  // the epilogue's last row, once the play is played through: how it ended — its endings, the one it came to chosen
  // (at the map's last point, till the play is played through: the finale to come; then how it ended is the
  // epilogue's row — its endings, the one it came to chosen)
  function finale() {
    const title = tr('Finale');
    return kept.chapter < END ? [{ number: title, title, kind: 'future', rows: [], go: null }] : [];
  }
  function ending() {
    const f = facts(kept);
    return [{ title: tr('Finale'), weight: '⚑', options: ENDINGS.map(e => ({ label: e.label, state: e.id === f.ending ? 'chosen' : 'open' })) }];
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
// a chapter's choices as rows: the main run's chosen, a replay's tried (both — the same), could have been, never
// reached; and what came of the main run's choice (scenario §11: the mark it left, as the player was told it)
function rows(ch, mainChoices, triedChoices, marks = {}) {
  return ch.choices.map(c => {
    const m = mainChoices[c.id], t = triedChoices[c.id];
    return { title: c.title, weight: c.weight, came: (m && (marks[`${c.id}:came`] ?? EFFECTS[c.id]?.[m]?.marks?.[0]?.[2])) || null, options: c.options.map(o => ({ label: o.label,
      state: m === o.id && t === o.id ? 'both' : m === o.id ? 'chosen' : t === o.id ? 'tried' : m || t ? 'open' : 'unseen' })) };
  });
}
