// Lays out where the many alike things of scenes/stream stand — the young oaks in their rows up the slope, the far
// stretches of the wood, the willows, white stones and new grass along the water, the dry tufts away from it, the
// hives — and writes them as the copies of their elements in its scene.json. The stream's line and the land are the
// scene's own (lib.js), read here as the scene reads them. Run: node tools/stream-copies.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const folder = new URL('../scenes/stream/', import.meta.url);
const clamp = (v) => Math.min(1, Math.max(0, v));
const anim = { span: (v, a, b) => clamp((v - a) / (b - a)), ease: { smooth: (u) => u * u * (3 - 2 * u) } };
const lib = new Function('anim', 'kit', readFileSync(new URL('lib.js', folder), 'utf8'))(anim, {});
// a steady random stream (mulberry32)
let seed = 7;
const rnd = () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const r2 = (v) => Math.round(v * 100) / 100;
const pick = (list) => list[Math.floor(rnd() * list.length)];
const TINTS = ['#ffffff', '#f2f4ea', '#e8ecdf', '#f6f1e4'];
// where the wood begins, across the view; the people, kept clear of what stands at their feet
const edge = (a) => Math.min(60, 19.5 + 0.02 * (a - 3) * (a - 3));
const PEOPLE = [[2.9, 15.6], [2.6, 5.8], [-1.0, 7.6]];
const clear = (a, d, r) => PEOPLE.every(([pa, pd]) => Math.hypot(a - pa, d - pd) > r);
const offStream = (a, d, gap) => Math.abs(a - lib.streamX(d)) > lib.streamW(d) / 2 + gap;

const copies = { oak_a: [], oak_b: [], oak_c: [], wood_far: [], willow: [], stones: [], sedge: [], grass: [], hives: [] };
// the young oaks near, in rows across the slope, a little out of line as anything planted by hand
for (let k = 0, d0 = 18; d0 <= 56; k++, d0 += 4.2) {
  const reach = 1.25 * d0 + 6;
  for (let a0 = -reach + (k % 2) * 1.9; a0 <= reach; a0 += 3.8) {
    const a = a0 + (rnd() - 0.5) * 1.0, d = d0 + (rnd() - 0.5) * 1.2;
    if (d < edge(a) || (d < 50 && !offStream(a, d, 1.6))) continue;
    const kind = rnd(), id = kind < 0.4 ? 'oak_a' : kind < 0.75 ? 'oak_b' : 'oak_c';
    copies[id].push({ across: r2(a), distance: r2(d), scale: r2(0.85 + rnd() * 0.3), flip: rnd() < 0.5, tint: pick(TINTS) });
  }
}
// farther up, stretches of ten
for (let d0 = 60; d0 <= 260; d0 += 12) {
  const reach = 1.25 * d0 + 20;
  for (let a0 = -reach + rnd() * 10; a0 <= reach; a0 += 28) {
    const a = a0 + (rnd() - 0.5) * 4, d = d0 + (rnd() - 0.5) * 4;
    copies.wood_far.push({ across: r2(a), distance: r2(d), scale: r2(1 + rnd() * 0.3), flip: rnd() < 0.5, tint: pick(TINTS) });
  }
}
// the first willows, just off the water
for (const [d, side] of [[11.5, -1], [16.5, -1], [24, 1], [28, -1]]) {
  const a = lib.streamX(d) + side * (lib.streamW(d) / 2 + 1.1);
  copies.willow.push({ across: r2(a), distance: d, scale: r2(0.85 + rnd() * 0.3), flip: side > 0 });
}
// white stones at the water's edges, new grass on the banks
for (let d = 1.6; d < 32; d += 1.1 + rnd() * 1.2) {
  const side = rnd() < 0.5 ? -1 : 1, a = lib.streamX(d) + side * (lib.streamW(d) / 2 + 0.15 + rnd() * 0.45);
  if (clear(a, d, 0.7)) copies.stones.push({ across: r2(a), distance: r2(d), scale: r2(0.35 + rnd() * 0.55), flip: rnd() < 0.5 });
}
for (let d = 2.4; d < 30; d += 0.5 + rnd() * 0.7) {
  const side = rnd() < 0.5 ? -1 : 1, a = lib.streamX(d) + side * (lib.streamW(d) / 2 + 0.4 + rnd() * 1.4);
  if (clear(a, d, 0.7)) copies.sedge.push({ across: r2(a), distance: r2(d), scale: r2(0.6 + rnd() * 0.4), flip: rnd() < 0.5 });
}
// dry tufts away from the water
while (copies.grass.length < 24) {
  const d = 3 + rnd() * 15, a = (rnd() - 0.5) * (8 + d * 2.2);
  if (offStream(a, d, 3.2) && clear(a, d, 0.8)) copies.grass.push({ across: r2(a), distance: r2(d), scale: r2(0.8 + rnd() * 0.35), flip: rnd() < 0.5 });
}
// the hives in a row at the wood's edge
for (const a of [1.2, 2.6, 4.0, 5.4, 6.8]) copies.hives.push({ across: a, distance: r2(18.3 + rnd() * 0.6), flip: rnd() < 0.5 });

const path = new URL('scene.json', folder), spec = JSON.parse(readFileSync(path, 'utf8'));
for (const o of spec.objects) if (copies[o.id]) o.copies = copies[o.id];
writeFileSync(path, `${JSON.stringify(spec, null, 2)}\n`);
console.log(Object.entries(copies).map(([k, v]) => `${k} ${v.length}`).join(', '));
