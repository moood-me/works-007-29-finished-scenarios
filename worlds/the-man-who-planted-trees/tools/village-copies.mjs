// Lays out where the many alike things of scenes/village stand — the oaks of the forest's lower edge over the village
// and the stumps left if it is cut, the oaks in rows behind it, the far stretches of the forest up the slope, the
// fruit trees by the gardens, the grass tufts round the square — and writes them as the copies of their elements in
// its scene.json. The land's shape (the stream's line, the plateau's edge) is the scene's own (lib.js), read here as
// the scene reads it. Run: node tools/village-copies.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const folder = new URL('../scenes/village/', import.meta.url);
const clamp = (v) => Math.min(1, Math.max(0, v));
const anim = { span: (v, a, b) => clamp((v - a) / (b - a)), ease: { smooth: (u) => u * u * (3 - 2 * u) } };
const lib = new Function('anim', 'kit', readFileSync(new URL('lib.js', folder), 'utf8'))(anim, {});
// a steady random stream (mulberry32)
let seed = 23;
const rnd = () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const r2 = (v) => Math.round(v * 100) / 100;
const pick = (list) => list[Math.floor(rnd() * list.length)];
const TINTS = ['#ffffff', '#f2f4ea', '#e8ecdf', '#f6f1e4'];
// the left edge of what the view can see at d (a little past the frame's 21:9 edge); the wood's right end, short of
// the plateau's edge
const leftmost = (d) => -1.2 * d - 10;
const woodRight = (d) => lib.edgeA(d) - 28;
// the path up the slope, and the stream coming down it: kept clear of trees
const pathA = (d) => -0.6 - 0.04 * (d - 40);
const clearOfWays = (a, d) => Math.abs(a - pathA(d)) > 1.8 && Math.abs(a - lib.streamX(d)) > lib.streamW(d) / 2 + 1.4;

const copies = { edge_oak: [], edge_stump: [], oak: [], wood_far: [], fruit: [], grass: [] };
// the forest's lower edge over the village: three rows from its line up to 56 m; a stump where each oak stands (shown
// only when the edge is cut) and more between, as a cutting leaves them
for (const [k, d0] of [[0, 47], [1, 50.5], [2, 54]]) {
  for (let a0 = leftmost(d0) + (k % 2) * 1.9; a0 <= woodRight(d0); a0 += 3.8) {
    const a = a0 + (rnd() - 0.5) * 1.2, d = d0 + (rnd() - 0.5) * 1.2;
    if (!clearOfWays(a, d)) continue;
    copies.edge_oak.push({ across: r2(a), distance: r2(d), scale: r2(0.9 + rnd() * 0.25), flip: rnd() < 0.5, tint: pick(TINTS) });
    copies.edge_stump.push({ across: r2(a + 0.15), distance: r2(d), scale: r2(0.9 + rnd() * 0.3), flip: rnd() < 0.5 });
    const b = a + 1.9 + (rnd() - 0.5) * 0.6, e = d + (rnd() - 0.5) * 1.4;
    if (b <= woodRight(e) && clearOfWays(b, e)) copies.edge_stump.push({ across: r2(b), distance: r2(e), scale: r2(0.8 + rnd() * 0.3), flip: rnd() < 0.5 });
  }
}
// behind it, rows of single oaks up the slope, a little out of line as anything planted by hand
for (let k = 0, d0 = 58; d0 <= 74; k++, d0 += 4.2) {
  for (let a0 = leftmost(d0) + (k % 2) * 2; a0 <= woodRight(d0); a0 += 4.2) {
    const a = a0 + (rnd() - 0.5) * 1.4, d = d0 + (rnd() - 0.5) * 1.4;
    if (!clearOfWays(a, d)) continue;
    copies.oak.push({ across: r2(a), distance: r2(d), scale: r2(0.88 + rnd() * 0.24), flip: rnd() < 0.5, tint: pick(TINTS) });
  }
}
// farther up, stretches of eight
for (let d0 = 79; d0 <= 470; d0 += 16) {
  for (let a0 = leftmost(d0) - 10 + rnd() * 10; a0 <= woodRight(d0) - 14; a0 += 32) {
    const a = a0 + (rnd() - 0.5) * 4, d = d0 + (rnd() - 0.5) * 4;
    copies.wood_far.push({ across: r2(a), distance: r2(d), scale: r2(1 + rnd() * 0.2), flip: rnd() < 0.5, tint: pick(TINTS) });
  }
}
// fruit trees by the gardens and the houses
for (const [a, d] of [[-14.6, 29.2], [-10.6, 30.6], [12.9, 26.4], [9.4, 27.4], [17.8, 30.5], [-8.6, 21.4], [2.4, 33.6]]) {
  copies.fruit.push({ across: a, distance: d, scale: r2(0.9 + rnd() * 0.25), flip: rnd() < 0.5 });
}
// grass tufts round the square's edges and near the viewer, clear of what stands there and of where people stand
const KEEP = [
  [0.4, 8.2, 1.3], [-3.4, 12.6, 1.9], [4.6, 11.8, 1.4], [-6.0, 9.6, 2.2], [-6.4, 18.6, 1.5],
  [-0.8, 7.6, 0.9], [1.8, 7.5, 0.9], [-5.0, 10.3, 0.9], [8.0, 12.4, 0.9], [1.7, 9.3, 0.9], [-1.6, 9.1, 0.9],
  [-2.4, 11.0, 0.9], [-4.4, 11.2, 0.9], [-9.6, 13, 4.2], [9.4, 11.5, 4.0], [-4, 24.5, 4.2], [6.8, 26.5, 4.0],
];
const clear = (a, d) => KEEP.every(([ka, kd, r]) => Math.hypot(a - ka, d - kd) > r);
for (let tries = 0; copies.grass.length < 44 && tries < 4000; tries++) {
  const ang = rnd() * Math.PI * 2, rr = 0.88 + rnd() * 0.4, a = 0.3 + Math.cos(ang) * 13.5 * rr, d = 13 + Math.sin(ang) * 9 * rr;
  const near = rnd() < 0.3, na = (rnd() - 0.5) * 16, nd = 2.2 + rnd() * 3.5;
  const [x, z] = near ? [na, nd] : [a, d];
  if (z < 2 || Math.abs(x) < 2.2 && z < 6 || !clear(x, z)) continue;
  if (Math.abs(x - lib.streamX(z)) < lib.streamW(z) / 2 + 0.6) continue;
  copies.grass.push({ across: r2(x), distance: r2(z), scale: r2(0.8 + rnd() * 0.5), flip: rnd() < 0.5 });
}

const path = new URL('scene.json', folder);
const scene = JSON.parse(readFileSync(path, 'utf8'));
for (const o of scene.objects) if (copies[o.id]) o.copies = copies[o.id];
writeFileSync(path, JSON.stringify(scene, null, 2) + '\n');
console.log(Object.entries(copies).map(([k, v]) => `${k} ${v.length}`).join(', '));
