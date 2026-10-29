// The check of the game's branches: node bespoke/check/run.mjs [a clone of the world — by default the world game.json
// names]. No browser, no engine, nothing drawn. Every step of every chapter is played unseen, the way the author's map
// plays it (jump.js: a dry run, story.js context(…, j)), on a page that knows only the scenes' specs (their scene.json
// files in the clone): no time passes, a plate goes by at once, a minigame gives its `skipped`.
// Walked: every path — the play goes step by step from its beginning, and wherever a step makes a choice it is played
// again for each of the choice's options (the chapter's `choices`), so every combination of the choices is played to
// its end, each step on the state the steps before left.
// Checked on every path, as it is played: the places the steps open are the game's (story.js PLACES), on scenes of the
// world; the people a step names are the game's (people.json); the keys a step gives a scene (g.scene keys, g.set) are
// in its scene.json's states, with a value they allow, or a person's of that scene; a choice's points and a minigame's
// point are of the scene shown then — an element (a named point: named in that element's code) or a person there now
// ('id', 'id#chest'); every line is said by one of people.json — over the narrator's place (`at`) when its sayer is a
// person of the shown scene the step has not brought in; a choice offered is one of the chapter's list with the same
// options (a chance: those offered and the one it passes to); nothing breaks. At each path's end: exactly one finale was
// played (its title), and it is the one facts gives — by the rule of the scenario (§11: «Laohu» decides it); every
// path makes all seven choices; each scale is set, to one of its values; the game's PLAYS end as their labels say — and
// are played once more with every minigame missed (the traces misses leave: the ear, the seam, the crooked sign…).
// A voice in another's body (story.js BODY: Jack grown speaks from the scene's `jack`) counts as that body.
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
const { ENDINGS, SCALES, PLACES, BODY, facts, context } = await load('story.js');
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
  SCENES.set(folder, { spec, objects: new Map((spec.objects ?? []).map(o => [o.id, o])), states: spec.states ?? {}, code });
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
// a point ('id', 'id#name') of a scene: a person there now ('id', 'id#chest'), or its element and its name in the
// element's code
function point(folder, ref, where, present) {
  const s = SCENES.get(folder), [id, name] = ref.split('#');
  if (!s) return;
  if (s.objects.get(id)?.person) {
    if (!present.has(id)) miss(`${where}: the point “${ref}” — “${id}” is not there now`);
    else if (name && name !== 'chest' && !PARTS.has(name)) miss(`${where}: the point “${ref}” — a person's point is their head, “#chest” or a point of a part of the cast (modules/cast.js F.point)`);
  } else if (!s.objects.has(id)) miss(`${where}: the point “${ref}” — no element “${id}” in the scene “${folder}”`);
  else if (name && !new RegExp(`['"\`]${name}['"\`]`).test(s.code(id))) miss(`${where}: the point “${ref}” — the element's code names no “${name}”`);
}

// the points the cast's parts name (a person's point by a part they have: `jack#letter`)
const PARTS = new Set();
const CAST = join(world, 'modules', 'cast.js');
if (existsSync(CAST)) for (const [, n] of readFileSync(CAST, 'utf8').matchAll(/F\.point\('(\w+)'/g)) PARTS.add(n);
const lines = new Map(); // `${who}\n${text}` → {who, text}
// a step played unseen on `state` (its choices made as they say, the first offered where they say nothing) → {state,
// made: the choice it made, titles: the titles it showed}
async function step(c, s, state, where, missed = false) {
  const j = jump(Infinity, { miss: missed });
  const g = context(b, view, hub, structuredClone(state), j);
  let folder = null, present = new Set();
  const made = [], titles = [];
  const { scene, say: speak, choose, play, title, here, set } = g;
  // a key of the shown scene's own: in its states, its value allowed — or a person's of the scene (`<id>_with`…)
  const PERSON = /^(.+)_(do|turn|look|reach|with|wear|gait|steps|on|here|still|mood|a|d)$/;
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
    const at = PLACES[place];
    if (!at) miss(`${where}: no place “${place}”`);
    else if (!SCENES.has(at.folder)) miss(`${where}: the place “${place}” — the world has no scene “${at.folder}”`);
    folder = at?.folder;
    const people = SCENES.get(folder)?.objects ?? new Map();
    // (one who never speaks — the tourists on the square — is a person of the scene only)
    for (const id of [...(o.here ?? []), ...Object.keys(o.moods ?? {})]) if ((!PEOPLE[id] && !people.get(id)?.person) || id === 'narrator') miss(`${where}: “${id}” is neither one of the game's people nor a person of the scene`);
    present = new Set((o.here ?? []).filter(id => people.get(id)?.person));
    for (const [k, v] of Object.entries(o.keys ?? {})) key(k, v);
    return scene(place, o, x);
  };
  g.here = (id, on) => {
    if (!PEOPLE[id] && !SCENES.get(folder)?.objects.get(id)?.person) miss(`${where}: “${id}” is neither one of the game's people nor a person of the scene`);
    if (SCENES.get(folder)?.objects.get(id)?.person) { if (on) present.add(id); else present.delete(id); }
    return here(id, on);
  };
  g.set = (k, v) => { key(k, v); return set(k, v); };
  g.say = (who, text, opts) => {
    const at = opts?.at;
    if (!PEOPLE[who]) miss(`${where}: “${text}” — said by “${who}”, no one of people.json`);
    else if (at === undefined && SCENES.get(folder)?.objects.get(BODY[who] ?? who)?.person && !present.has(BODY[who] ?? who)) miss(`${where}: “${text}” — said as the narrator by “${who}”, of the scene “${folder}” but not here for the step (give at)`);
    lines.set(`${who}\n${text}`, { who, text });
    return speak(who, text, opts);
  };
  g.choose = (choice, offers, chance) => {
    const def = CHAPTERS[c].choices.find(x => x.id === choice);
    const offered = [...new Set([...Object.values(offers).flat().map(o => o.id), ...(chance?.otherwise ? [chance.otherwise] : [])])];
    if (choice && !def) miss(`${where}: the choice “${choice}” is not in the chapter's choices`);
    else if (def && offered.join() !== def.options.map(o => o.id).join()) miss(`${where}: the choice “${choice}” offers ${offered.join(', ')}, the chapter lists ${def.options.map(o => o.id).join(', ')}`);
    for (const ref of Object.keys(offers)) point(folder, ref, where, present);
    if (choice) made.push(choice);
    return choose(choice, offers, chance);
  };
  g.play = (m, o) => { point(folder, atOf(m), where, present); return play(m, o); };
  g.title = text => { titles.push(text); return title(text); };
  let broke = null;
  await Promise.race([CHAPTERS[c].steps[s](g).catch(e => { broke = e; }), j.idle]);
  if (broke) miss(`${where}: the step broke: ${broke.message}`);
  return { state: g.state, made, titles };
}
// (a stub's point: as stub.js was given it)
const POINTS = new Map();
const stubs = await load('minigames/all.js');
for (const [name, m] of Object.entries(stubs)) {
  const src = readFileSync(join(game, 'minigames/all.js'), 'utf8');
  const at = new RegExp(`export const ${name} = stub\\(\\{[^]*?at: '([^']+)'`).exec(src)?.[1];
  if (!at) miss(`minigames/all.js: “${name}” has no point`);
  POINTS.set(m, at ?? '');
}
const atOf = m => POINTS.get(m) ?? '';

// --- every path: depth first, a step played again for each option of the choice it makes
const STEPS = CHAPTERS.flatMap((ch, c) => ch.steps.map((_, s) => [c, s]));
const ends = new Map(); // `${ending} ${form}` → paths
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
function finish(state, picked) {
  paths++;
  const f = facts(state);
  const finales = picked.titles.filter(t => ENDINGS.some(e => e.label === t));
  if (finales.length !== 1) miss(`a path with ${finales.length} finales played: ${JSON.stringify(state.choices)}`);
  else if (finales[0] !== ENDINGS.find(e => e.id === f.ending).label) miss(`a path played “${finales[0]}”, facts give “${f.ending}”: ${JSON.stringify(state.choices)}`);
  // the rule (scenario §11) said once more, apart from facts: «Laohu» decides the finale
  const c = state.choices;
  const rule = { fold: 'tiger', letter: 'letter', smoke: 'smoke' }[c.laohu];
  if (f.ending !== rule) miss(`facts give ${f.ending}, the rule ${rule}: ${JSON.stringify(c)}`);
  // every path makes all the choices of every chapter
  const all = CHAPTERS.flatMap(ch => ch.choices.map(x => x.id));
  if (all.some(id => !(id in c)) || Object.keys(c).length !== all.length) miss(`the choices made are not all the game's: ${JSON.stringify(c)}`);
  for (const [name, v] of Object.entries(state.scales)) if (!Number.isInteger(v) || !(v in SCALES[name].values)) miss(`the scale “${name}” is ${v}`);
  ends.set(f.ending, (ends.get(f.ending) ?? 0) + 1);
}
await walk(0, fresh(), { titles: [] });

// the author's plays end as their labels say
for (const p of PLAYS) {
  let state = fresh();
  for (const [c, s] of STEPS) state = (await step(c, s, { ...state, choices: { ...p.choices, ...state.choices } }, p.label)).state;
  const f = facts(state), named = ENDINGS.find(e => p.label.startsWith(`${e.label} —`))?.id;
  if (named !== f.ending) miss(`PLAYS “${p.label}” ends in “${f.ending}”`);
}
// the same plays with every minigame missed: their traces read on, nothing breaks
const traces = new Set();
for (const p of PLAYS) {
  let state = fresh();
  for (const [c, s] of STEPS) state = (await step(c, s, { ...state, choices: { ...p.choices, ...state.choices } }, `${p.label} (missed)`, true)).state;
  for (const k of ['ear', 'seam', 'crooked', 'ingot']) if (state.marks[k]) traces.add(k);
}
for (const k of ['ear', 'seam', 'crooked', 'ingot']) if (!traces.has(k)) miss(`missed minigames leave no mark “${k}”`);

const out = [];
out.push(`paths: ${paths}`);
for (const [k, n] of [...ends].sort()) out.push(`  ${k}: ${n}`);
out.push('', misses.size ? 'DOES NOT MATCH:' : 'nothing to fix');
for (const [text, n] of misses) out.push(`  ${text} (paths: ${n})`);
out.push('', `lines said (${lines.size}):`);
for (const { who, text } of lines.values()) out.push(`  ${who} | ${text}`);
console.log(out.join('\n'));
process.exit(misses.size ? 1 : 0);
