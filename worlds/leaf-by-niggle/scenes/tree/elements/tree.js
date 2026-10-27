// The Tree, alive (metres about the foot of its trunk; 9.6 m high, its crown cut a little by the frame's top): the
// same Tree as on the canvas — a grey-brown trunk flaring into roots, limbs branching again and again, leaves at
// every twig in greys, greens and a little gold, the crown full and soft as a wash. Its crown hangs in four layers
// that the wind moves apart; its long low bough reaches out to the right over the grass, and at its tip hangs the
// first leaf, finished to the last vein, a drop of dew on its edge (point "leaf"; the glint a flickering layer) —
// at 2.05 m, where Niggle's raised hand finds it.
const L = e.lib;
const BARK = '#7b6d5d';
const BARK_DARK = 'rgba(70,60,50,0.55)';
const GREENS = ['#6d8a4c', '#7f9b56', '#5f7c48', '#93a862', '#7a8c6c', '#889a74', '#a7ad66', '#c0a85a'];
const crowns = { crown_l: [], crown_m: [], crown_top: [], crown_r: [] };
// a limb: a tapering wash of bark from (x, y) at angle a (radians, y down: −π/2 straight up), `len` long, `w` wide;
// it forks `depth` times more; each last twig leaves a tip for leaves
const tips = [];
const limb = (path, x, y, a, len, w, depth) => {
  const bend = (e.rnd() - 0.5) * 0.35;
  const ex = x + Math.cos(a + bend) * len;
  const ey = y + Math.sin(a + bend) * len;
  const mx = x + Math.cos(a + bend * 0.3) * len * 0.5;
  const my = y + Math.sin(a + bend * 0.3) * len * 0.5;
  const w2 = w * 0.62;
  const nx = -Math.sin(a);
  const ny = Math.cos(a);
  const wm = (w + w2) / 4;
  path.moveTo(x + (nx * w) / 2, y + (ny * w) / 2);
  path.quadraticCurveTo(mx + nx * wm, my + ny * wm, ex + (nx * w2) / 2, ey + (ny * w2) / 2);
  path.lineTo(ex - (nx * w2) / 2, ey - (ny * w2) / 2);
  path.quadraticCurveTo(mx - nx * wm, my - ny * wm, x - (nx * w) / 2, y - (ny * w) / 2);
  path.closePath();
  if (depth === 0) {
    tips.push([ex, ey]);
    return;
  }
  const n = depth > 2 ? 3 : 2 + (e.rnd() < 0.4 ? 1 : 0);
  for (let k = 0; k < n; k++) {
    const spread = n === 3 ? (k - 1) * 0.55 : (k - 0.5) * 0.8;
    // limbs bend up toward the light, a little
    const up = (-Math.PI / 2 - a) * 0.12;
    limb(path, ex, ey, a + spread + up + (e.rnd() - 0.5) * 0.25, len * (0.66 + e.rnd() * 0.12), w2, depth - 1);
  }
};
// the trunk and the crown's limbs: one bark path
const bark = new Path2D();
// roots flaring into the ground, the trunk rising and narrowing
bark.moveTo(-0.95, 0.1);
bark.quadraticCurveTo(-0.42, -0.1, -0.36, -0.9);
bark.quadraticCurveTo(-0.3, -2.4, -0.26, -3.5);
bark.lineTo(0.24, -3.5);
bark.quadraticCurveTo(0.28, -2.4, 0.36, -0.9);
bark.quadraticCurveTo(0.44, -0.1, 1.05, 0.1);
bark.closePath();
limb(bark, -0.05, -3.3, -2.25, 2.1, 0.38, 4);
limb(bark, 0, -3.4, -1.62, 2.2, 0.4, 4);
limb(bark, 0.05, -3.3, -1.0, 2.0, 0.36, 4);
limb(bark, -0.1, -2.9, -2.75, 2.0, 0.3, 3);
g.fillStyle = BARK;
g.fill(bark);
// the bark's grain: long dark strokes up the trunk
g.strokeStyle = BARK_DARK;
g.lineWidth = 0.025;
for (let i = 0; i < 9; i++) {
  const x = -0.3 + i * 0.07;
  g.beginPath();
  g.moveTo(x * 1.6, 0);
  g.bezierCurveTo(x * 1.1, -0.9, x + (e.rnd() - 0.5) * 0.06, -2.0, x * 0.75, -3.3);
  g.stroke();
}
// the tips sorted into the crown's layers, each about where its limbs part
for (const t of tips) {
  if (t[1] < -6.6) crowns.crown_top.push(t);
  else if (t[0] < -2.2) crowns.crown_l.push(t);
  else if (t[0] < 1.2) crowns.crown_m.push(t);
  else crowns.crown_r.push(t);
}
// a part of the crown: a soft wash of green under the leaves for its body, then the leaves at its tips, sorted by
// colour so each colour is one fill
const foliage = (l, pts, n) => {
  // the body: overlapping soft masses, darker beneath, lighter on top, as washes laid one over another
  for (const [x, y] of pts) {
    l.fillStyle = e.rnd() < 0.5 ? 'rgba(92,118,70,0.85)' : 'rgba(104,128,78,0.85)';
    l.beginPath();
    l.ellipse(x + (e.rnd() - 0.5) * 0.2, y + 0.16, 0.42 + e.rnd() * 0.18, 0.3 + e.rnd() * 0.12, 0, 0, Math.PI * 2);
    l.fill();
  }
  for (const [x, y] of pts) {
    l.fillStyle = e.rnd() < 0.5 ? 'rgba(128,152,94,0.8)' : 'rgba(146,164,104,0.75)';
    l.beginPath();
    l.ellipse(x + (e.rnd() - 0.5) * 0.2, y - 0.06, 0.32 + e.rnd() * 0.14, 0.22 + e.rnd() * 0.1, 0, 0, Math.PI * 2);
    l.fill();
  }
  const byColour = GREENS.map(() => []);
  for (const [x, y] of pts) {
    for (let k = 0; k < n; k++) {
      const r = Math.sqrt(e.rnd()) * 0.58;
      const t = e.rnd() * Math.PI * 2;
      // the gold ones few, the greys and greens many
      const c = e.rnd() < 0.06 ? 7 : Math.floor(e.rnd() * 7);
      byColour[c].push([x + Math.cos(t) * r, y + Math.sin(t) * r * 0.8, 0.11 + e.rnd() * 0.08, e.rnd() * Math.PI * 2]);
    }
  }
  byColour.forEach((leaves, c) => {
    l.fillStyle = GREENS[c];
    l.beginPath();
    for (const [x, y, len, a] of leaves) L.leafPath(l, x, y, len, a);
    l.fill();
  });
};
e.layer('crown_l', { pivot: [-1.2, -3.8], wind: { strength: 0.05, gust: 0.4 } }, l => foliage(l, crowns.crown_l, 12));
e.layer('crown_m', { pivot: [0, -4.4], wind: { strength: 0.04, gust: 0.4 } }, l => foliage(l, crowns.crown_m, 12));
e.layer('crown_r', { pivot: [1.2, -3.8], wind: { strength: 0.05, gust: 0.4 } }, l => foliage(l, crowns.crown_r, 12));
e.layer('crown_top', { pivot: [0, -6.2], wind: { strength: 0.06, gust: 0.5 } }, l => foliage(l, crowns.crown_top, 12));
// the long low bough: out of the trunk at 2.7 m, reaching right over the grass and sagging toward its tip at
// (4.2, −2.3); twigs along it with their leaves; it sways a little as one
e.layer('bough', { pivot: [0.2, -2.7], wind: { strength: 0.035, gust: 0.4 } }, l => {
  const b = new Path2D();
  b.moveTo(0.2, -2.86);
  b.bezierCurveTo(1.4, -3.12, 2.9, -2.86, 4.22, -2.33);
  b.lineTo(4.2, -2.27);
  b.bezierCurveTo(2.9, -2.74, 1.4, -2.92, 0.2, -2.56);
  b.closePath();
  const twigs = [];
  for (let i = 0; i < 7; i++) {
    const u = 0.18 + i * 0.12;
    const x = 0.2 + u * 4.0;
    const y = -2.8 + Math.sin(u * Math.PI) * -0.18 + u * 0.5;
    const a = -Math.PI / 2 + (i % 2 ? 0.7 : -0.5) + (e.rnd() - 0.5) * 0.3;
    const len = 0.5 + e.rnd() * 0.35;
    b.moveTo(x - 0.02, y);
    b.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
    b.lineTo(x + 0.02, y);
    b.closePath();
    twigs.push([x + Math.cos(a) * len, y + Math.sin(a) * len]);
  }
  l.fillStyle = BARK;
  l.fill(b);
  foliage(l, twigs, 12);
});
// the first leaf, hanging from the bough's tip on its stalk: finished to the last vein, washed green going gold at
// its edge; a drop of dew on it
e.layer('first', { pivot: [4.2, -2.3], wind: { strength: 0.12, gust: 0.6 } }, l => {
  l.strokeStyle = BARK;
  l.lineWidth = 0.012;
  l.beginPath();
  l.moveTo(4.2, -2.3);
  l.lineTo(4.18, -2.22);
  l.stroke();
  L.leaf(l, 4.18, -2.22, 0.3, Math.PI * 0.42, '#7d9a46', 'rgba(66,84,40,0.8)');
  l.beginPath();
  L.leafPath(l, 4.18, -2.22, 0.3, Math.PI * 0.42);
  l.lineWidth = 0.014;
  l.strokeStyle = 'rgba(206,176,88,0.9)';
  l.stroke();
});
e.at(4.2, -2.08, 'leaf');
e.layer('dew', { flicker: 0.6, blend: 'add' }, l => {
  const grad = l.createRadialGradient(4.24, -2.02, 0, 4.24, -2.02, 0.04);
  grad.addColorStop(0, 'rgba(255,255,250,0.95)');
  grad.addColorStop(1, 'rgba(255,255,250,0)');
  l.fillStyle = grad;
  l.beginPath();
  l.arc(4.24, -2.02, 0.04, 0, Math.PI * 2);
  l.fill();
});
e.at(0, -5.5);
