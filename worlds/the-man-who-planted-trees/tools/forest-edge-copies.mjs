// Lays out where the many alike things of scenes/forest-edge stand — the grown oaks along the forest's edge and in
// rows behind it, the far stretches of the forest up the hill, the willows, the rushes by the water, the tall grass in
// the meadow — and writes them as the copies of their elements in its scene.json. The stream's line and the forest's
// edge are the scene's own (lib.js), read here as the scene reads them. Run: node tools/forest-edge-copies.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const folder = new URL('../scenes/forest-edge/', import.meta.url);
const clamp = (v) => Math.min(1, Math.max(0, v));
const anim = { span: (v, a, b) => clamp((v - a) / (b - a)), ease: { smooth: (u) => u * u * (3 - 2 * u) } };
const lib = new Function('anim', 'kit', readFileSync(new URL('lib.js', folder), 'utf8'))(anim, {});
// a steady random stream (mulberry32)
let seed = 11;
const rnd = () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const r2 = (v) => Math.round(v * 100) / 100;
const pick = (list) => list[Math.floor(rnd() * list.length)];
const TINTS = ['#ffffff', '#f2f4ea', '#e8ecdf', '#f6f1e4'];
// the people and the stone, kept clear of what stands at their feet; the path's line near
const PEOPLE = [[0.4, 5.6], [2.5, 6.4], [-1.2, 7.6], [0.3, 16.2]];
const clear = (a, d, r) => PEOPLE.every(([pa, pd]) => Math.hypot(a - pa, d - pd) > r);
const offStream = (a, d, gap) => Math.abs(a - lib.streamX(d)) > lib.streamW(d) / 2 + gap;
// the left edge of what the view can see at d (a little past the frame's 21:9 edge)
const leftmost = (d) => -1.05 * d - 10;

const copies = { oak_a: [], oak_b: [], oak_c: [], wood_far: [], willow: [], sedge: [], grass: [] };
const oak = (a, d, s) => {
  const kind = rnd(), id = kind < 0.42 ? 'oak_a' : kind < 0.8 ? 'oak_b' : 'oak_c';
  copies[id].push({ across: r2(a), distance: r2(d), scale: r2(s * (0.88 + rnd() * 0.24)), flip: rnd() < 0.5, tint: pick(TINTS) });
};
// the edge: a row of oaks along it, a little in from the line, the open side's trees grown a little bigger
for (let d = 5; d <= 96; d += 3.2 + rnd() * 1.2) {
  const a = lib.edgeA(d) - 0.8 - rnd() * 0.8;
  if (d < 36 && !offStream(a, d, 1.3)) continue;
  oak(a, d, 1.05);
}
// behind it, in rows across the hill, a little out of line as anything planted by hand
for (let k = 0, d0 = 6; d0 <= 80; k++, d0 += 4.4) {
  for (let a0 = leftmost(d0) + (k % 2) * 2; a0 <= lib.edgeA(d0) - 4; a0 += 4.2) {
    const a = a0 + (rnd() - 0.5) * 1.4, d = d0 + (rnd() - 0.5) * 1.4;
    if (a > lib.edgeA(d) - 3.2 || (d < 40 && !offStream(a, d, 1.4))) continue;
    oak(a, d, 1);
  }
}
// farther in and up the hill, stretches of eight
for (let d0 = 84; d0 <= 430; d0 += 12) {
  for (let a0 = leftmost(d0) - 10 + rnd() * 10; a0 <= lib.edgeA(d0) - 14; a0 += 30) {
    const a = a0 + (rnd() - 0.5) * 4, d = d0 + (rnd() - 0.5) * 4;
    copies.wood_far.push({ across: r2(a), distance: r2(d), scale: r2(1 + rnd() * 0.2), flip: rnd() < 0.5, tint: pick(TINTS) });
  }
}
// willows by the water: two on the far bank under the oaks, one on the near bank where the path goes into the wood
for (const [d, side, s] of [[19.5, 1, 0.9]]) {
  const a = lib.streamX(d) + side * (lib.streamW(d) / 2 + 1.0);
  copies.willow.push({ across: r2(a), distance: d, scale: s, flip: side > 0 });
}
// rushes along both banks
for (let d = 1; d < 28; d += 0.45 + rnd() * 0.6) {
  const side = rnd() < 0.55 ? 1 : -1, a = lib.streamX(d) + side * (lib.streamW(d) / 2 + 0.3 + rnd() * 1.0);
  if (clear(a, d, 0.7)) copies.sedge.push({ across: r2(a), distance: r2(d), scale: r2(0.7 + rnd() * 0.5), flip: rnd() < 0.5 });
}
// tall grass over the meadow, thicker away from the path
while (copies.grass.length < 60) {
  const d = 3 + Math.pow(rnd(), 1.2) * 22, a = lib.edgeA(d) + 1 + rnd() * (lib.browA(d) + 0.5 - lib.edgeA(d));
  if (offStream(a, d, 1.2) && clear(a, d, 1.5)) copies.grass.push({ across: r2(a), distance: r2(d), scale: r2(0.8 + rnd() * 0.5), flip: rnd() < 0.5 });
}

const path = new URL('scene.json', folder), spec = JSON.parse(readFileSync(path, 'utf8'));
for (const o of spec.objects) if (copies[o.id]) o.copies = copies[o.id];
writeFileSync(path, `${JSON.stringify(spec, null, 2)}\n`);
console.log(Object.entries(copies).map(([k, v]) => `${k} ${v.length}`).join(', '));
