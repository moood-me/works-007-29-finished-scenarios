// The check of the game's branches: node bespoke/check/run.mjs [a clone of the world — by default the world game.json
// names]. No browser, no engine, nothing drawn. Every step of every chapter is played unseen, the way the author's map
// plays it (jump.js: a dry run, story.js context(…, j)), on a page that knows only the scenes' specs (their scene.json
// files in the clone): no time passes, a plate goes by at once, a minigame gives its `skipped`.
// Walked: every path — the play goes step by step from its beginning, and wherever a step makes a choice it is played
// again for each of the choice's options (the chapter's `choices`), so every combination of the choices is played to
// its end, each step on the state the steps before left.
// Checked on every path, as it is played: the places the steps open are the game's (story.js PLACES), on scenes of the
// world; the people a step names are the game's (people.json); the keys a step gives a scene (a place's own keys, g.scene
// keys, g.set) are in its scene.json's states, with a value they allow, or a person's of that scene; a choice's points
// and a minigame's point are of the scene shown then — an element (a named point: named in that element's code) or a
// person there now ('id', 'id#chest'); every line is said by one of people.json — over the narrator's place (`at`) when
// its sayer is a person of the shown scene the step has not brought in; a choice offered is one of the chapter's list
// with the same options; nothing breaks. At each path's end: exactly one finale was played (the epilogue's last step
// remembers it, marks.ending), and it is the one facts gives — by the rule of the scenario (§10: the side of each
// hinge); all eight choices were made; each scale's sign is its hinge's (§8: the Slope above zero exactly when he
// stayed, the Name exactly when he named him); the promises were kept where given (§9: “I’ll be back”, “in a year”,
// Lina's “I’ll tell everyone”); Lina knows by the epilogue on every path (§13); the scales are whole numbers within
// their bounds; the game's PLAYS end as their labels say.
// Printed: what does not match (with how many paths it was met on); how many paths end in each finale; every line said,
// once (who | text) — the voices are made from it.
// Exit code: 0 — nothing to fix, 1 — something does not match.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const game = fileURLToPath(new URL('..', import.meta.url));
const world = process.argv[2] ?? join(game, '..', JSON.parse(readFileSync(join(game, '..', 'game.json'), 'utf8')).world);
if (!existsSync(join(world, 'scenes'))) {
  console.error('node bespoke/check/run.mjs [a clone of the world]');
  process.exit(2);
}
const load = file => import(pathToFileURL(join(game, file)).href);
// the game's texts as written (the source language): tr as the page gives it, without the translations
const fill = (t, p = {}) => t.replace(/\{(\w+)\}/g, (_, k) => String(p[k]));
globalThis.tr = Object.assign(fill, { n: (n, one, other, p) => fill(n === 1 ? one : other, { n, ...p }), c: (c, t, p) => fill(t, p) });
const PEOPLE = JSON.parse(readFileSync(join(game, 'people.json'), 'utf8'));
const { ENDINGS, SCALES, PLACES, facts, context } = await load('story.js');
const { jump } = await load('jump.js');
const { CHAPTERS, PLAYS, fresh } = await load('game.js');

// --- what does not match: text → the number of paths it was met on
const misses = new Map();
const miss = text => misses.set(text, (misses.get(text) ?? 0) + 1);
for (const ch of CHAPTERS) if (ch.titles.length !== ch.steps.length) miss(`${ch.title}: titles ${ch.titles.length}, steps ${ch.steps.length}`);

// --- the world: each scene's spec, its elements, the points its elements' code names
const SCENES = new Map();
for (const folder of readdirSync(join(world, 'scenes'))) {
  const file = join(world, 'scenes', folder, 'scene.json');
  if (!existsSync(file)) continue;
  const spec = JSON.parse(readFileSync(file, 'utf8'));
  const code = id => { const f = join(world, 'scenes', folder, 'elements', `${id}.js`); return existsSync(f) ? readFileSync(f, 'utf8') : ''; };
  // its pieces, as its notes.md's «Contract for the check» says them (none yet: what the game asks of them waits)
  const notes = join(world, 'scenes', folder, 'notes.md');
  const block = existsSync(notes) && /## Contract for the check\s*```json\s*([^]*?)```/.exec(readFileSync(notes, 'utf8'))?.[1];
  const contract = block ? JSON.parse(block) : null;
  SCENES.set(folder, { spec, objects: new Map((spec.objects ?? []).map(o => [o.id, o])), states: spec.states ?? {}, code, beats: contract?.beats ?? null });
}
const b = {
  specOf: async folder => {
    if (!SCENES.has(folder)) throw new Error(`the world has no scene “${folder}”`);
    return SCENES.get(folder).spec;
  },
};
const nothing = () => {};
const view = new Proxy({}, { get: () => nothing });
const hub = { offer: () => new Promise(nothing), ask: async () => null, withdraw: nothing };
// a point ('id', 'id#name') of a scene: a person there now ('id', 'id#chest'…), or its element and its name in the
// element's code. (A person's points: the engine's — people/player.js POINTS — and the cast's parts' — modules/cast.md:
// `rod`, `mug`, `bag`, `flask`, `pail`, `notebook`, `spade`.) What the scene lacks yet that the pieces' contract asks of
// it (game.md «Stage 5 — pieces»): `wait` — said apart, as waited for, not as wrong
const BODY = new Set(['head', 'hand_r', 'hand_l', 'hands', 'chest', 'hips', 'foot_r', 'foot_l', 'feet', 'rod', 'mug', 'bag', 'flask', 'pail', 'notebook', 'spade']);
function point(folder, ref, where, present, wait = null) {
  const s = SCENES.get(folder), [id, name] = ref.split('#');
  if (!s) return;
  const no = wait ?? miss;
  if (s.objects.get(id)?.person) {
    if (!present.has(id)) miss(`${where}: the point “${ref}” — “${id}” is not there now`);
    else if (name && !BODY.has(name)) miss(`${where}: the point “${ref}” — a person has no point “${name}”`);
  } else if (!s.objects.has(id)) no(`${where}: the point “${ref}” — no element “${id}” in the scene “${folder}”`);
  // (a name made in a loop — `cracked_${k}` — is named by its stem)
  else if (name && !new RegExp(`['"\`]${name}['"\`]`).test(s.code(id)) && !(/_\d+$/.test(name) && s.code(id).includes(`\`${name.replace(/\d+$/, '')}\${`))) no(`${where}: the point “${ref}” — the element's code names no “${name}”`);
}
// the keys a mini-game moves: the scene's (its states) or a person's of it
function moves(folder, k, where, wait) {
  const s = SCENES.get(folder);
  if (!s || s.states[k]) return;
  const person = /^(.+)_(do|turn|look|reach|with|wear|gait|steps|on|here|still|mood|a|d)$/.exec(k)?.[1];
  if (person && s.objects.get(person)?.person) return;
  wait(`${where}: the key “${k}” — not in the states of the scene “${folder}”`);
}
const waits = new Map();
const pending = text => waits.set(text, (waits.get(text) ?? 0) + 1);

const lines = new Map(); // `${who}\n${text}` → {who, text}
// a step played unseen on `state` (its choices made as they say, the first offered where they say nothing) → {state,
// made: the choice it made, titles: the titles it showed}
async function step(c, s, state, where, result = null) {
  const j = jump(Infinity);
  j.result = result;
  const g = context(b, view, hub, structuredClone(state), j);
  let folder = null, present = new Set();
  const made = [], titles = [];
  const { scene, say: speak, choose, play, title, here, set, beat, told } = g;
  // a piece of the shown scene, and a moment of it: in its contract — or waited for while the scene has none
  const piece = name => {
    const beats = SCENES.get(folder)?.beats;
    if (!beats) pending(`the piece “${name}” — the scene “${folder}” has no contract of its pieces yet`);
    else if (!beats[name]) miss(`${where}: the piece “${name}” — not in the contract of the scene “${folder}”`);
  };
  g.beat = (name, o) => { piece(name); return beat(name, o); };
  g.told = (text, ms) => {
    // (a piece's moments are listened for before its scene is opened: checked once it is)
    queueMicrotask(() => know(text));
    return told(text, ms);
  };
  const know = text => {
    const [name, moment] = text.split(':');
    if (name === 'beat') piece(moment);
    else {
      piece(name);
      const beats = SCENES.get(folder)?.beats;
      if (beats?.[name] && !beats[name].tells?.includes(text)) miss(`${where}: “${text}” — the piece does not tell it`);
    }
  };
  // a key of the shown scene's own: in its states, its value allowed — or a person's of the scene (`<id>_with`…)
  const PERSON = /^(.+)_(do|turn|look|reach|with|wear|gait|steps|on|here|still|mood)$/;
  const key = (k, v) => {
    const def = SCENES.get(folder)?.states[k];
    if (!SCENES.has(folder)) return;
    const person = PERSON.exec(k)?.[1];
    if (!def && person && SCENES.get(folder).objects.get(person)?.person) return;
    if (!def) miss(`${where}: the key “${k}” is not in the states of the scene “${folder}”`);
    else if (def.values ? !def.values.includes(v) : def.range ? typeof v !== 'number' || v < def.range[0] || v > def.range[1] : def.type ? typeof v !== def.type : false)
      miss(`${where}: the key “${k}” of the scene “${folder}” cannot be ${JSON.stringify(v)}`);
  };
  g.scene = (place, o = {}, x) => {
    if (o.beat) queueMicrotask(() => piece(o.beat));
    const at = PLACES[place];
    if (!at) miss(`${where}: no place “${place}”`);
    else if (!SCENES.has(at.folder)) miss(`${where}: the place “${place}” — the world has no scene “${at.folder}”`);
    folder = at?.folder;
    for (const [k, v] of Object.entries(at?.keys ?? {})) key(k, v);
    const people = SCENES.get(folder)?.objects ?? new Map();
    for (const id of [...(o.here ?? []), ...Object.keys(o.moods ?? {})]) if (!PEOPLE[id] || id === 'narrator') miss(`${where}: “${id}” is not one of the game's people`);
    present = new Set((o.here ?? []).filter(id => people.get(id)?.person));
    for (const [k, v] of Object.entries(o.keys ?? {})) key(k, v);
    return scene(place, o, x);
  };
  g.here = (id, on) => {
    if (!PEOPLE[id]) miss(`${where}: “${id}” is not one of the game's people`);
    if (SCENES.get(folder)?.objects.get(id)?.person) { if (on) present.add(id); else present.delete(id); }
    return here(id, on);
  };
  g.set = (k, v) => { key(k, v); return set(k, v); };
  g.say = (who, text, opts) => {
    const at = opts?.at;
    if (!PEOPLE[who]) miss(`${where}: “${text}” — said by “${who}”, no one of people.json`);
    else if (at === undefined && SCENES.get(folder)?.objects.get(who)?.person && !present.has(who)) miss(`${where}: “${text}” — said as the narrator by “${who}”, of the scene “${folder}” but not here for the step (give at)`);
    lines.set(`${who}\n${text}`, { who, text });
    return speak(who, text, opts);
  };
  g.choose = (choice, offers, chance) => {
    const def = CHAPTERS[c].choices.find(x => x.id === choice);
    const offered = [...Object.values(offers).flat().map(o => o.id), ...(chance?.otherwise ? [chance.otherwise] : [])];
    if (choice && !def) miss(`${where}: the choice “${choice}” is not in the chapter's choices`);
    else if (def && offered.join() !== def.options.map(o => o.id).join()) miss(`${where}: the choice “${choice}” offers ${offered.join(', ')}, the chapter lists ${def.options.map(o => o.id).join(', ')}`);
    for (const ref of Object.keys(offers)) point(folder, ref, where, present);
    if (choice) made.push(choice);
    return choose(choice, offers, chance);
  };
  g.play = (m, o) => {
    for (const ref of m.points ?? []) point(folder, ref, `${where} · ${m.title}`, present, pending);
    for (const k of m.keys ?? []) moves(folder, k, `${where} · ${m.title}`, pending);
    return play(m, o);
  };
  g.title = text => { titles.push(text); return title(text); };
  let broke = null;
  await Promise.race([CHAPTERS[c].steps[s](g).catch(e => { broke = e; }), j.idle]);
  if (broke) miss(`${where}: the step broke: ${broke.message}`);
  return { state: g.state, made, titles };
}
// --- every path: depth first, a step played again for each option of the choice it makes
const STEPS = CHAPTERS.flatMap((ch, c) => ch.steps.map((_, s) => [c, s]));
const ends = new Map(); // ending → paths
let paths = 0;
async function walk(n, state, picked) {
  if (n === STEPS.length) return finish(state, picked);
  const [c, s] = STEPS[n], where = `${CHAPTERS[c].title} · ${CHAPTERS[c].titles[s]}`;
  const first = await step(c, s, state, where);
  if (!first.made.length) return walk(n + 1, { ...first.state }, { ...picked, titles: [...picked.titles, ...first.titles] });
  if (first.made.length > 1) miss(`${where}: makes more than one choice (${first.made.join(', ')})`);
  const id = first.made[0], def = CHAPTERS[c].choices.find(x => x.id === id);
  for (const o of def?.options ?? []) {
    const r = await step(c, s, { ...state, choices: { ...state.choices, [id]: o.id } }, where);
    await walk(n + 1, r.state, { ...picked, titles: [...picked.titles, ...r.titles] });
  }
}
function finish(state) {
  paths++;
  const f = facts(state), c = state.choices, m = state.marks;
  if (m.ending !== f.ending) miss(`a path played the finale “${m.ending}”, facts give “${f.ending}”: ${JSON.stringify(c)}`);
  // the rule (scenario §10) said once more, apart from facts: the Slope or the Road, then the Name or Silence
  const rule = c.stay === 'stay' ? (c.name === 'name' ? 'pupil' : 'rods') : (c.name === 'name' ? 'plaque' : 'story');
  if (f.ending !== rule) miss(`facts give ${f.ending}, the rule ${rule}: ${JSON.stringify(c)}`);
  const all = ['drink', 'ask', 'rod', 'farewell', 'tell', 'lina', 'stay', 'name'];
  if (all.some(id => !(id in c))) miss(`a path without all its choices: ${JSON.stringify(c)}`);
  // each scale's sign is its hinge's (§8)
  if ((state.scales.path > 0) !== (c.stay === 'stay')) miss(`the Road — the Slope is ${state.scales.path} after “${c.stay}”: ${JSON.stringify(c)}`);
  if ((state.scales.word > 0) !== (c.name === 'name')) miss(`Silence — the Name is ${state.scales.word} after “${c.name}”: ${JSON.stringify(c)}`);
  // the promises kept where given (§9)
  if ((c.farewell === 'back') !== (m.back === 'kept')) miss(`“I’ll be back”: ${m.back}: ${JSON.stringify(c)}`);
  if ((c.stay === 'go') !== (m.year === 'kept')) miss(`“I’ll come back in a year”: ${m.year}: ${JSON.stringify(c)}`);
  if ((c.lina === 'told') !== (m.tell === 'kept')) miss(`Lina's “I’ll tell everyone”: ${m.tell}: ${JSON.stringify(c)}`);
  // Lina knows by the epilogue (§13): told in chapter II, from Jan (the Name), or saw it herself (Silence)
  if (c.lina !== 'told' && c.name !== 'name' && m.saw !== 'saw') miss(`Lina never learns: ${JSON.stringify(c)}`);
  for (const [name, v] of Object.entries(state.scales)) if (!Number.isInteger(v) || v < SCALES[name].min || v > SCALES[name].max) miss(`the scale “${name}” is ${v}`);
  ends.set(f.ending, (ends.get(f.ending) ?? 0) + 1);
}
await walk(0, fresh(), { titles: [] });

// the author's plays end as their labels say
for (const p of PLAYS) {
  let state = fresh();
  for (const [c, s] of STEPS) state = (await step(c, s, { ...state, choices: { ...p.choices, ...state.choices } }, p.label)).state;
  const f = facts(state), named = ENDINGS.find(e => p.label.startsWith(`${e.label} —`))?.id;
  if (named !== f.ending) miss(`PLAYS “${p.label}” ends in “${f.ending}”`);
  // and once more with every mini-game missed (its `missed`: the trace a miss leaves, scenario §7)
  let missed = fresh();
  for (const [c, s] of STEPS) missed = (await step(c, s, { ...missed, choices: { ...p.choices, ...missed.choices } }, `${p.label} (missed)`, m => m.missed)).state;
}
// every mini-game has the trace of a miss
for (const [name, m] of Object.entries(await load('minigames/all.js'))) if (!m.missed) miss(`minigames: “${name}” has no “missed”`);

const out = [];
out.push(`paths: ${paths}`);
for (const [k, n] of [...ends].sort()) out.push(`  ${k}: ${n}`);
out.push('', misses.size ? 'DOES NOT MATCH:' : 'nothing to fix');
for (const [text, n] of misses) out.push(`  ${text} (paths: ${n})`);
out.push('', waits.size ? 'WAITED FOR (the pieces’ contract, game.md):' : 'nothing waited for');
for (const [text, n] of waits) out.push(`  ${text} (paths: ${n})`);
out.push('', `lines said (${lines.size}):`);
for (const { who, text } of lines.values()) out.push(`  ${who} | ${text}`);
console.log(out.join('\n'));
process.exit(misses.size ? 1 : 0);
