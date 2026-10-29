// Lays out where the many alike things of scenes/forest-edge stand — the grown oaks along the forest's edge and in
// rows behind it (the near edge's apart: `edge_*`, the oaks the village may fell), the far stretches of the forest up
// the hill, the willows, the rushes by the water, the tall grass in the meadow, the hives at the edge's foot across
// the stream, the sheep of the first chapter, the Traveller's beeches on the Slope — and writes them as the copies of
// their elements in its scene.json (and where the loaf on a stump lies: `stump_bread`). The stream's line, the
// forest's edge and the path are the scene's own (lib.js), read here as the scene reads them.
// Run: node tools/forest-edge-copies.mjs
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
const PEOPLE = [[0.2, 6.2], [2.3, 6.4], [-1.2, 7.4], [0.3, 16.2]];
const clear = (a, d, r) => PEOPLE.every(([pa, pd]) => Math.hypot(a - pa, d - pd) > r);
const offStream = (a, d, gap) => Math.abs(a - lib.streamX(d)) > lib.streamW(d) / 2 + gap;
// the left edge of what the view can see at d (a little past the frame's 21:9 edge)
const leftmost = (d) => -1.05 * d - 10;
// the forest's near (lower) edge, over the path down to the village: the oaks the village may fell
const nearEdge = (a, d) => d < 30 && a > lib.edgeA(d) - 12;
// the hives at the edge's foot, across the stream from the path
const HIVES = [9.6, 10.7, 11.8, 12.9, 14.0].map((d) => [r2(lib.streamX(d) - lib.streamW(d) / 2 - 1.9), d]);

const copies = {
  oak_a: [], oak_b: [], oak_c: [], edge_a: [], edge_b: [], edge_c: [], edge_first: [], wood_far: [], willow: [],
  sedge: [], grass: [], valley_trees: [], hives: [], sheep: [], beech_slope: [],
};
const oak = (a, d, s, row) => {
  const kind = rnd(), k = kind < 0.42 ? 'a' : kind < 0.8 ? 'b' : 'c';
  const id = row && d >= 8 && d <= 15.5 ? 'edge_first' : nearEdge(a, d) ? `edge_${k}` : `oak_${k}`;
  copies[id].push({ across: r2(a), distance: r2(d), scale: r2(s * (0.88 + rnd() * 0.24)), flip: rnd() < 0.5, tint: pick(TINTS) });
};
// the edge: a row of oaks along it, a little in from the line, the open side's trees grown a little bigger
for (let d = 5; d <= 96; d += 3.2 + rnd() * 1.2) {
  const a = lib.edgeA(d) - 0.8 - rnd() * 0.8;
  if (d < 36 && !offStream(a, d, 1.3)) continue;
  oak(a, d, 1.05, true);
}
// behind it, in rows across the hill, a little out of line as anything planted by hand
for (let k = 0, d0 = 6; d0 <= 80; k++, d0 += 4.4) {
  for (let a0 = leftmost(d0) + (k % 2) * 2; a0 <= lib.edgeA(d0) - 4; a0 += 4.2) {
    const a = a0 + (rnd() - 0.5) * 1.4, d = d0 + (rnd() - 0.5) * 1.4;
    if (a > lib.edgeA(d) - 3.2 || (d < 40 && !offStream(a, d, 1.4))) continue;
    oak(a, d, 1, false);
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
  if (clear(a, d, 0.7) && HIVES.every(([ha, hd]) => Math.hypot(a - ha, d - hd) > 0.6)) {
    copies.sedge.push({ across: r2(a), distance: r2(d), scale: r2(0.7 + rnd() * 0.5), flip: rnd() < 0.5 });
  }
}
// tall grass over the meadow, thicker away from the path
while (copies.grass.length < 44) {
  const d = 4.5 + Math.pow(rnd(), 1.2) * 20, a = lib.edgeA(d) + 1 + rnd() * (lib.browA(d) + 0.5 - lib.edgeA(d));
  const toVillage = Math.atan2(a, d) > 0.3 && Math.atan2(a, d) < 0.6 && d < 16;
  if (offStream(a, d, 1.2) && clear(a, d, 1.5) && !toVillage) copies.grass.push({ across: r2(a), distance: r2(d), scale: r2(0.55 + rnd() * 0.6), flip: rnd() < 0.5 });
}
// clumps of trees along the valley's hedges: a dozen wandering lines over its floor, away from the village
for (let k = 0; k < 12; k++) {
  let a = 40 + rnd() * 500, d = 90 + rnd() * 520;
  const t = rnd() * Math.PI;
  for (let i = 0; i < 7; i++) {
    a += Math.cos(t) * (16 + rnd() * 10);
    d += Math.sin(t) * (16 + rnd() * 10);
    if (a - lib.browA(d) < 20 || Math.hypot(a - 120, d - 235) < 40) continue;
    copies.valley_trees.push({ across: r2(a), distance: r2(d), scale: r2(0.8 + rnd() * 0.4), flip: rnd() < 0.5, tint: pick(TINTS) });
  }
}
// the hives in a line at the edge's foot across the stream (or their empty stones)
for (const [a, d] of HIVES) copies.hives.push({ across: a, distance: d, flip: rnd() < 0.5 });
// the sheep grazing the bare meadow in the first chapter, right of the path
for (const [a, d] of [[2.6, 13.2], [3.6, 14.4], [2.2, 15.6], [3.4, 16.9], [4.2, 18.6]]) {
  copies.sheep.push({ across: r2(a + (rnd() - 0.5) * 0.4), distance: r2(d + (rnd() - 0.5) * 0.4), flip: rnd() < 0.5, scale: r2(0.92 + rnd() * 0.16) });
}
// the Traveller's beeches on the Slope: rows over the meadow right of the path, from the stone toward the brow
const GAPS = [...PEOPLE, [2.4, 12], [1.1, 10.6], [-0.6, 13.6]];
for (let k = 0, d0 = 9.6; d0 <= 21.6; k++, d0 += 2) {
  for (let a0 = lib.pathX(d0) + 1.3 + (k % 2) * 0.7; a0 <= lib.browA(d0) - 0.4; a0 += 1.5) {
    const a = a0 + (rnd() - 0.5) * 0.3, d = d0 + (rnd() - 0.5) * 0.3;
    if (GAPS.every(([pa, pd]) => Math.hypot(a - pa, d - pd) > 1.1)) {
      copies.beech_slope.push({ across: r2(a), distance: r2(d), scale: r2(0.8 + rnd() * 0.35), flip: rnd() < 0.5, tint: pick(TINTS) });
    }
  }
}

const path = new URL('scene.json', folder), spec = JSON.parse(readFileSync(path, 'utf8'));
for (const o of spec.objects) if (copies[o.id]) o.copies = copies[o.id];
// the loaf Lina lays on a stump: on the near edge's oak nearest the stream, among those well in the frame
const near = [...copies.edge_a, ...copies.edge_b, ...copies.edge_c].filter((c) => c.across > -0.6 * c.distance).sort((p, q) => Math.hypot(p.across + 6, p.distance - 12) - Math.hypot(q.across + 6, q.distance - 12))[0];
const loaf = spec.objects.find((o) => o.id === 'stump_bread');
if (loaf) Object.assign(loaf, { across: near.across, distance: near.distance });
writeFileSync(path, `${JSON.stringify(spec, null, 2)}\n`);
console.log(Object.entries(copies).map(([k, v]) => `${k} ${v.length}`).join(', '), '| the loaf on', near.across, near.distance);
