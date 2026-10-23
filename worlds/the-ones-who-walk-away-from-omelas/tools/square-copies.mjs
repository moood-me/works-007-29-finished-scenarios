// Lays out the copies of scenes/square: the lower city's houses, rows, towers and groves going down to the bay, the
// boats on it, and the pennants and lanterns along the garland cords — written into scene.json's elements' "copies".
// Run: node tools/square-copies.mjs (from the world's root). Steady: the same layout every run.
import { readFileSync, writeFileSync } from 'node:fs';

const file = 'scenes/square/scene.json';
const spec = JSON.parse(readFileSync(file, 'utf8'));
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const r2 = v => Math.round(v * 100) / 100;
const TINTS = ['#ffffff', '#fff1dc', '#ffe6dc', '#f2f2ff', '#fff6e6', '#ffe9c8', '#eef6ff'];
const copies = { house: [], block: [], tower: [], grove: [], boat: [], pennant: [], lantern: [] };
// the lower city: rows of houses down the slope; near ones single, far ones in rows of four; groves between
const rows = [44, 56, 70, 86, 104, 126, 152, 182, 216, 256, 300, 350, 405, 465, 530, 590];
for (const d of rows) {
  const half = 0.95 * d + 30, near = d < 160, step = near ? 12 : 46;
  for (let x = -half + rnd() * step; x < half; x += step * (0.85 + 0.4 * rnd())) {
    const dd = r2(d + (rnd() - 0.5) * (near ? 6 : 18)), u = rnd();
    if (u < 0.2) copies.grove.push({ across: r2(x), distance: dd, scale: r2(0.8 + 0.6 * rnd()), flip: rnd() < 0.5 });
    else if (near) copies.house.push({ across: r2(x), distance: dd, scale: r2(0.85 + 0.35 * rnd()), flip: rnd() < 0.5, tint: TINTS[Math.floor(rnd() * TINTS.length)] });
    else copies.block.push({ across: r2(x), distance: dd, scale: r2(0.9 + 0.3 * rnd()), flip: rnd() < 0.5, tint: TINTS[Math.floor(rnd() * TINTS.length)] });
  }
}
// the bright towers, here and there
for (const [x, d] of [[-60, 95], [38, 140], [-150, 230], [110, 290], [-20, 380], [230, 420], [-280, 470], [70, 560]]) {
  copies.tower.push({ across: x, distance: d, scale: r2(0.9 + 0.3 * rnd()) });
}
// boats on the bay
for (const [x, d] of [[-260, 1400], [120, 2100], [520, 1700], [-700, 2600], [300, 3400]]) copies.boat.push({ across: x, distance: d, flip: rnd() < 0.5 });
// the garland cords: sagging from 6.6 m at the walls to 5.7 m in the middle; pennants every 0.6 m, a lantern every 2.4 m
const sag = x => 6.6 - 0.9 * (1 - ((x - 0.75) / 6.75) ** 2);
const FLAGS = ['#e7a39a', '#f0d68e', '#a9c6dc', '#f6f2ea', '#c7d9a6', '#e3b8d2'];
let n = 0;
for (const d of [11, 17, 24]) {
  for (let x = -5.7; x < 7.3; x += 0.6) {
    if (Math.abs(((x + 5.7) / 0.6) % 4 - 2) < 0.01) copies.lantern.push({ across: r2(x), distance: d, elevation: r2(sag(x) - 0.62) });
    else copies.pennant.push({ across: r2(x), distance: d, elevation: r2(sag(x) - 0.62), tint: FLAGS[n++ % FLAGS.length] });
  }
}
for (const el of spec.objects) if (copies[el.id]) el.copies = copies[el.id];
writeFileSync(file, `${JSON.stringify(spec, null, 2)}\n`);
console.log(Object.entries(copies).map(([k, v]) => `${k} ${v.length}`).join(', '));
