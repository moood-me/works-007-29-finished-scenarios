// The threads of Ersilia (scenes/ersilia): white, black and grey, strung between what is left of the town — the
// house's posts, the lamp post, the bench, the stakes, the water tower, a telegraph pole. Each thread is an upright
// sheet of its own turned to run from one end to the other, its face toward the viewer's side, and painted by the
// scene's lib (thread). This writes them: their elements in scene.json (ids thread_NN, after the others) and their
// paintings, elements/thread_NN.js. Run it after changing the list: node tools/ersilia-threads.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'scenes', 'ersilia');
const COLORS = { white: '#ece7dc', black: '#2a2522', grey: '#8f8a84' };

// the points the threads are tied to: [across, distance, height] metres
const P = {
  frontL: (h) => [4.68, 11.5, h], door: (h) => [6.16, 11.5, h], frontR: (h) => [9.72, 11.5, h],
  backL: (h) => [4.68, 16, h], backR: (h) => [9.72, 16, h],
  lamp: (h) => [1.6, 9.6, h],
  benchL: [2.45, 8.95, 0.85], benchR: [3.75, 8.95, 0.85],
  s1: [6.2, 7.2, 1.2], s2: [8.6, 8.0, 1.2], s3: [11.5, 9.5, 1.2], s4: [5.0, 18.5, 1.2], s5: [0.9, 13.5, 1.2], s6: [2.8, 14.5, 1.2],
  s7: [4.2, 6.2, 1.2], s8: [7.0, 5.6, 1.2], s9: [12.5, 12.5, 1.2],
  tank: [-7.2, 28, 6.0], base: [-7.6, 28, 3.5],
  pole: (h) => [-3.6, 14, h],
};
const THREADS = [
  [P.lamp(3.5), P.frontL(2.7), 'white'], [P.lamp(2.6), P.frontL(1.6), 'grey'], [P.lamp(1.7), P.benchL, 'grey'],
  [P.lamp(3.5), P.frontR(2.7), 'black'], [P.lamp(2.6), P.s3, 'white'], [P.frontL(2.7), P.s1, 'black'],
  [P.frontL(1.6), P.s2, 'white'], [P.door(2.1), P.s1, 'grey'], [P.frontR(2.7), P.s2, 'grey'],
  [P.frontR(1.4), P.s3, 'white'], [P.frontL(2.7), P.s5, 'white'], [P.lamp(3.5), P.s5, 'black'],
  [P.lamp(2.6), P.s6, 'grey'], [P.s6, P.frontL(0.9), 'black'], [P.backL(2.7), P.s6, 'white'],
  [P.backL(2.7), P.s4, 'grey'], [P.backR(2.7), P.s4, 'black'], [P.backR(2.7), P.s3, 'white'],
  [P.base, P.lamp(3.5), 'white'], [P.tank, P.lamp(3.5), 'grey'], [P.tank, P.pole(6.4), 'black'],
  [P.pole(4.0), P.lamp(2.6), 'white'], [P.pole(6.4), P.frontL(2.7), 'grey'], [P.pole(4.0), P.s6, 'black'],
  [P.base, P.pole(4.0), 'white'], [P.benchR, P.s1, 'white'], [P.benchL, P.frontL(0.9), 'grey'],
  [P.s1, P.s2, 'black'], [P.s2, P.s3, 'grey'], [P.door(2.1), P.backR(2.7), 'white'],
  [P.frontL(0.9), P.backL(2.7), 'black'], [P.s5, P.s6, 'white'], [P.frontL(2.7), P.frontR(1.4), 'white'],
  [P.frontL(1.6), P.frontR(2.7), 'black'], [P.s2, P.backR(2.7), 'grey'], [P.s4, P.s6, 'white'],
  [P.lamp(3.5), P.door(2.1), 'grey'], [P.benchR, P.s2, 'black'], [P.s3, P.backR(1.4), 'white'],
  [P.door(2.1), P.s2, 'white'], [P.tank, P.frontL(2.7), 'white'],
  [P.benchR, P.s7, 'grey'], [P.s7, P.s1, 'white'], [P.s7, P.frontL(1.6), 'black'], [P.s8, P.s1, 'grey'],
  [P.s8, P.s2, 'white'], [P.s8, P.frontR(1.4), 'grey'], [P.s7, P.lamp(1.7), 'white'], [P.frontL(0.9), P.s1, 'grey'],
  [P.door(1.0), P.s7, 'white'], [P.frontR(0.8), P.s8, 'black'], [P.backL(1.4), P.s5, 'white'], [P.s9, P.frontR(2.7), 'grey'],
  [P.s9, P.s3, 'black'], [P.s9, P.backR(1.4), 'white'], [P.s6, P.s1, 'grey'], [P.s4, P.backL(1.4), 'white'],
  [P.benchL, P.s6, 'white'], [P.benchR, P.frontL(2.7), 'grey'], [P.s7, P.s8, 'white'], [P.lamp(1.7), P.frontL(0.9), 'white'],
];

const r3 = (v) => Math.round(v * 1000) / 1000;
const scenePath = path.join(dir, 'scene.json');
const scene = JSON.parse(fs.readFileSync(scenePath, 'utf8'));
for (const f of fs.readdirSync(path.join(dir, 'elements'))) if (/^thread_\d+\.js$/.test(f)) fs.unlinkSync(path.join(dir, 'elements', f));
scene.objects = scene.objects.filter((o) => !/^thread_\d+$/.test(o.id));
THREADS.forEach(([a, b, color], k) => {
  // the sheet runs from its left end (anchor) to its right: its face then looks toward the viewer's side
  if (b[0] < a[0]) [a, b] = [b, a];
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const length = Math.hypot(dx, dz);
  // a card facing f has its +x along (−cos f, sin f) in (across, distance)
  const facing = ((Math.atan2(dz / length, -dx / length) * 180) / Math.PI + 360) % 360;
  const sag = 0.02 + 0.012 * length;
  const id = `thread_${String(k + 1).padStart(2, '0')}`;
  const top = Math.max(a[2], b[2]);
  const low = Math.min(a[2], b[2]);
  scene.objects.push({
    id, name: `A ${color} thread`, across: r3(a[0]), distance: r3(a[1]), facing: r3(facing), height: r3(top + 0.05),
    box: [-0.05, r3(-top - 0.05), r3(length + 0.05), r3(-low + 2 * sag + 0.05)],
  });
  fs.writeFileSync(path.join(dir, 'elements', `${id}.js`),
    `// a ${color} thread, ${length.toFixed(1)} m (tools/ersilia-threads.js writes it)\n` +
    `e.lib.thread(g, ${r3(length)}, ${r3(a[2])}, ${r3(b[2])}, '${COLORS[color]}');\n`);
});
fs.writeFileSync(scenePath, `${JSON.stringify(scene, null, 2)}\n`);
console.log(`${THREADS.length} threads`);
