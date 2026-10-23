// The great canvas on its stretcher (x −2…2, y −3.6…−0.4 over the floor; two posts hold it): the Tree as Niggle has
// it — a pencilled trunk and branches, grey patches, leaves here and there, most only drawn, some washed in autumn
// greens; behind it the beginnings of a forest and, far off at the top, mountains tipped with snow. In the middle one
// leaf finished to the last vein, a drop of dew on its edge (point "leaf"; the drop's glint a layer). Old pictures
// he has stitched on round the edges: a harbour, a hill, an old house.
const X0 = -2.0;
const X1 = 2.0;
const Y0 = -3.6;
const Y1 = -0.4;
const L = e.lib;
// the posts and the stretcher's back bars
g.fillStyle = '#5a4836';
g.fillRect(-1.75, Y1 - 0.1, 0.1, 0.52);
g.fillRect(1.65, Y1 - 0.1, 0.1, 0.52);
g.fillRect(-1.95, -0.08, 0.5, 0.08);
g.fillRect(1.45, -0.08, 0.5, 0.08);
g.fillStyle = '#6e5a44';
g.fillRect(X0 - 0.05, Y0 - 0.05, X1 - X0 + 0.1, Y1 - Y0 + 0.1);
// the ground of the canvas: warm off-white, faint washes
g.fillStyle = '#e8e0cb';
g.fillRect(X0, Y0, X1 - X0, Y1 - Y0);
g.save();
g.beginPath();
g.rect(X0, Y0, X1 - X0, Y1 - Y0);
g.clip();
for (let i = 0; i < 14; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(170,165,150,0.16)' : 'rgba(200,190,160,0.18)';
  g.beginPath();
  g.ellipse(X0 + e.rnd() * 4, Y0 + e.rnd() * 3.2, 0.3 + e.rnd() * 0.6, 0.2 + e.rnd() * 0.4, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the far mountains, top right: two washes of blue-grey, the nearer darker, snow on the peaks
const ridge = (pts, fill) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(pts[0][0], -2.62);
  for (const [x, y] of pts) g.lineTo(x, y);
  g.lineTo(pts[pts.length - 1][0], -2.62);
  g.closePath();
  g.fill();
};
ridge([[0.0, -2.75], [0.35, -2.98], [0.55, -2.92], [0.95, -3.36], [1.18, -3.18], [1.42, -3.3], [1.7, -3.08], [2.0, -3.14]], 'rgba(160,174,194,0.9)');
ridge([[0.15, -2.66], [0.5, -2.86], [0.8, -2.8], [1.1, -3.02], [1.5, -2.84], [2.0, -2.95]], 'rgba(118,132,156,0.75)');
g.fillStyle = 'rgba(250,250,246,0.95)';
g.beginPath();
g.moveTo(0.84, -3.24);
g.lineTo(0.95, -3.36);
g.lineTo(1.07, -3.26);
g.lineTo(1.0, -3.28);
g.lineTo(0.93, -3.22);
g.closePath();
g.moveTo(1.33, -3.24);
g.lineTo(1.42, -3.3);
g.lineTo(1.52, -3.22);
g.lineTo(1.43, -3.24);
g.closePath();
g.fill();
// the forest behind the tree, only begun: at the right, grey-green crowns washed in over pencilled trunks
for (let i = 0; i < 16; i++) {
  const x = 0.35 + e.rnd() * 1.6;
  const y = -2.15 - e.rnd() * 0.25;
  const h = 0.25 + e.rnd() * 0.25;
  g.strokeStyle = 'rgba(100,96,86,0.5)';
  g.lineWidth = 0.007;
  g.beginPath();
  g.moveTo(x, y + 0.2);
  g.lineTo(x, y - h * 0.4);
  g.stroke();
  g.fillStyle = `rgba(${104 + e.rnd() * 30},${124 + e.rnd() * 25},${98 + e.rnd() * 20},0.55)`;
  g.beginPath();
  g.moveTo(x - h * 0.28, y);
  g.quadraticCurveTo(x - h * 0.3, y - h * 0.8, x, y - h);
  g.quadraticCurveTo(x + h * 0.3, y - h * 0.8, x + h * 0.28, y);
  g.quadraticCurveTo(x, y + h * 0.12, x - h * 0.28, y);
  g.fill();
}
// at the left, only pencil: a few far trunks, upright strokes
g.strokeStyle = 'rgba(110,104,92,0.45)';
g.lineWidth = 0.007;
for (let i = 0; i < 7; i++) {
  const x = -1.85 + e.rnd() * 1.1;
  g.beginPath();
  g.moveTo(x, -1.95);
  g.lineTo(x + (e.rnd() - 0.5) * 0.03, -2.35 - e.rnd() * 0.3);
  g.stroke();
}
// grey patches: washes laid in and left, each a ragged blot
for (let i = 0; i < 7; i++) {
  const cx = X0 + 0.4 + e.rnd() * 3.2;
  const cy = Y0 + 0.5 + e.rnd() * 2.2;
  const r = 0.1 + e.rnd() * 0.16;
  g.fillStyle = 'rgba(132,130,124,0.18)';
  g.beginPath();
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2;
    const rr = r * (0.7 + e.rnd() * 0.6);
    const px = cx + Math.cos(a) * rr * 1.4;
    const py = cy + Math.sin(a) * rr;
    if (k === 0) g.moveTo(px, py);
    else g.lineTo(px, py);
  }
  g.closePath();
  g.fill();
}
// the trunk: a wash of grey-brown up its lower part, flaring into roots; the pencil contour all the way up and out
// into the branches and their twigs
g.fillStyle = 'rgba(128,112,92,0.5)';
g.beginPath();
g.moveTo(-0.62, Y1);
g.quadraticCurveTo(-0.3, -0.55, -0.26, -0.9);
g.bezierCurveTo(-0.22, -1.25, -0.24, -1.5, -0.2, -1.72);
g.lineTo(0.0, -1.72);
g.bezierCurveTo(0.02, -1.45, 0.0, -1.2, 0.04, -0.9);
g.quadraticCurveTo(0.08, -0.55, 0.42, Y1);
g.closePath();
g.fill();
const branches = [
  [-0.12, -1.7, -0.75, -2.15, -1.55, -2.55],
  [-0.14, -1.72, -0.35, -2.55, -0.95, -3.25],
  [-0.1, -1.75, -0.18, -2.6, 0.08, -3.4],
  [-0.08, -1.7, 0.35, -2.25, 0.95, -2.95],
  [-0.06, -1.66, 0.6, -1.75, 1.45, -2.2],
  [-0.16, -1.62, -0.7, -1.62, -1.45, -1.85],
];
const at = (b, u) => [
  (1 - u) * (1 - u) * b[0] + 2 * (1 - u) * u * b[2] + u * u * b[4],
  (1 - u) * (1 - u) * b[1] + 2 * (1 - u) * u * b[3] + u * u * b[5],
];
g.strokeStyle = 'rgba(92,86,76,0.85)';
g.lineCap = 'round';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.62, Y1);
g.quadraticCurveTo(-0.3, -0.55, -0.26, -0.9);
g.bezierCurveTo(-0.22, -1.25, -0.24, -1.5, -0.2, -1.72);
g.moveTo(0.42, Y1);
g.quadraticCurveTo(0.08, -0.55, 0.04, -0.9);
g.bezierCurveTo(0.0, -1.2, 0.02, -1.45, 0.0, -1.72);
for (const b of branches) {
  g.moveTo(b[0], b[1]);
  g.quadraticCurveTo(b[2], b[3], b[4], b[5]);
  g.moveTo(b[0] + 0.05, b[1] + 0.02);
  g.quadraticCurveTo(b[2] + 0.04, b[3] + 0.05, b[4] + 0.01, b[5] + 0.02);
}
g.stroke();
g.lineWidth = 0.007;
g.beginPath();
for (const b of branches) {
  for (const u of [0.45, 0.65, 0.85]) {
    const [x, y] = at(b, u);
    const a = Math.atan2(b[5] - b[1], b[4] - b[0]) + (e.rnd() < 0.5 ? -0.7 : 0.7);
    const l = 0.18 + e.rnd() * 0.22;
    g.moveTo(x, y);
    g.quadraticCurveTo(x + Math.cos(a) * l * 0.6, y + Math.sin(a) * l * 0.4, x + Math.cos(a) * l, y + Math.sin(a) * l - 0.05);
  }
}
g.stroke();
// the leaves: clusters at the branches' ends and along them — most a pencil outline, some washed in
const greens = ['rgba(112,138,90,0.85)', 'rgba(142,160,107,0.85)', 'rgba(167,168,110,0.85)', 'rgba(181,154,92,0.8)', 'rgba(150,120,80,0.75)'];
for (const b of branches) {
  for (let k = 0; k < 30; k++) {
    const [px, py] = at(b, 0.35 + e.rnd() * 0.7);
    const bx = px + (e.rnd() - 0.5) * 0.5;
    const by = py + (e.rnd() - 0.5) * 0.45;
    const len = 0.07 + e.rnd() * 0.06;
    const a = e.rnd() * Math.PI * 2;
    if (e.rnd() < 0.4) L.leaf(g, bx, by, len, a, greens[Math.floor(e.rnd() * greens.length)], 'rgba(70,80,55,0.5)');
    else {
      g.save();
      g.translate(bx, by);
      g.rotate(a);
      g.strokeStyle = 'rgba(100,94,84,0.6)';
      g.lineWidth = 0.006;
      g.beginPath();
      g.moveTo(0, 0);
      g.bezierCurveTo(len * 0.3, -len * 0.32, len * 0.75, -len * 0.22, len, 0);
      g.bezierCurveTo(len * 0.75, len * 0.22, len * 0.3, len * 0.32, 0, 0);
      g.stroke();
      g.restore();
    }
  }
}
// THE leaf: finished, glowing green-gold, every vein; the drop at its tip
g.save();
g.translate(0.08, -2.02);
g.rotate(-0.45);
const len = 0.46;
const grad = g.createLinearGradient(0, -0.12, 0, 0.12);
grad.addColorStop(0, '#9fb453');
grad.addColorStop(0.5, '#6f9440');
grad.addColorStop(1, '#4f7434');
g.fillStyle = grad;
g.beginPath();
g.moveTo(0, 0);
g.bezierCurveTo(len * 0.25, -len * 0.36, len * 0.72, -len * 0.26, len, 0);
g.bezierCurveTo(len * 0.72, len * 0.26, len * 0.25, len * 0.36, 0, 0);
g.fill();
g.fillStyle = 'rgba(214,190,90,0.55)';
g.beginPath();
g.moveTo(len * 0.55, -len * 0.18);
g.bezierCurveTo(len * 0.75, -len * 0.18, len * 0.9, -len * 0.08, len, 0);
g.bezierCurveTo(len * 0.85, -len * 0.04, len * 0.7, -len * 0.06, len * 0.55, -len * 0.18);
g.fill();
g.strokeStyle = 'rgba(230,226,170,0.8)';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.06, 0.01);
g.lineTo(len * 0.97, 0);
for (let v = 0.12; v < 0.85; v += 0.1) {
  g.moveTo(len * v, 0);
  g.quadraticCurveTo(len * (v + 0.06), -len * 0.1, len * (v + 0.13), -len * (0.22 - v * 0.15));
  g.moveTo(len * v, 0);
  g.quadraticCurveTo(len * (v + 0.06), len * 0.1, len * (v + 0.13), len * (0.22 - v * 0.15));
}
g.stroke();
g.strokeStyle = 'rgba(52,72,34,0.8)';
g.lineWidth = 0.007;
g.beginPath();
g.moveTo(0, 0);
g.bezierCurveTo(len * 0.25, -len * 0.36, len * 0.72, -len * 0.26, len, 0);
g.bezierCurveTo(len * 0.72, len * 0.26, len * 0.25, len * 0.36, 0, 0);
g.stroke();
// the drop on the edge near the tip
g.fillStyle = 'rgba(200,226,220,0.8)';
g.beginPath();
g.ellipse(len * 0.86, len * 0.1, 0.018, 0.022, 0, 0, Math.PI * 2);
g.fill();
g.restore();
e.at(0.08 + Math.cos(-0.45) * 0.23, -2.02 + Math.sin(-0.45) * 0.23, 'leaf');
g.restore();
// its glint: a tiny bright highlight on the drop, a layer that trembles
const dx = 0.08 + Math.cos(-0.45) * len * 0.86 - Math.sin(-0.45) * len * 0.1;
const dy = -2.02 + Math.sin(-0.45) * len * 0.86 + Math.cos(-0.45) * len * 0.1;
e.layer('dew', { flicker: 0.5, blend: 'add', box: [dx - 0.04, dy - 0.04, dx + 0.04, dy + 0.04] }, l => {
  l.fillStyle = 'rgba(255,255,240,0.9)';
  l.beginPath();
  l.arc(dx - 0.006, dy - 0.008, 0.007, 0, Math.PI * 2);
  l.fill();
});
e.at(dx, dy, 'dew');
// the old pictures stitched on round the edges, each with its stitches
const stitched = (x, y, w, h, a, paint) => {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = 'rgba(50,40,30,0.25)';
  g.fillRect(0.015, 0.015, w, h);
  g.fillStyle = '#d9cfb6';
  g.fillRect(0, 0, w, h);
  g.save();
  g.beginPath();
  g.rect(0.03, 0.03, w - 0.06, h - 0.06);
  g.clip();
  paint(w, h);
  g.restore();
  g.strokeStyle = 'rgba(70,60,50,0.8)';
  g.lineWidth = 0.008;
  g.beginPath();
  for (let s = 0.03; s < w; s += 0.06) {
    g.moveTo(s, -0.012);
    g.lineTo(s + 0.02, 0.012);
    g.moveTo(s, h - 0.012);
    g.lineTo(s + 0.02, h + 0.012);
  }
  for (let s = 0.03; s < h; s += 0.06) {
    g.moveTo(-0.012, s);
    g.lineTo(0.012, s + 0.02);
    g.moveTo(w - 0.012, s);
    g.lineTo(w + 0.012, s + 0.02);
  }
  g.stroke();
  g.restore();
};
// a harbour: blue water, a pale quay, two boats with sails
stitched(-2.3, -1.35, 0.8, 0.6, -0.04, (w, h) => {
  g.fillStyle = '#c9d4d8';
  g.fillRect(0, 0, w, h * 0.5);
  g.fillStyle = '#5f86a0';
  g.fillRect(0, h * 0.5, w, h * 0.5);
  g.fillStyle = '#b8a98c';
  g.fillRect(0, h * 0.42, w * 0.45, h * 0.12);
  g.fillStyle = '#e9e2d0';
  for (const bx of [0.5, 0.65]) {
    g.beginPath();
    g.moveTo(bx, h * 0.55);
    g.lineTo(bx + 0.05, h * 0.3);
    g.lineTo(bx + 0.1, h * 0.55);
    g.fill();
  }
  g.fillStyle = '#6d4f3a';
  g.fillRect(0.48, h * 0.55, 0.14, 0.03);
  g.fillRect(0.63, h * 0.55, 0.14, 0.03);
});
// a hill: green slopes under a pale sky
stitched(1.5, -1.95, 0.75, 0.62, 0.05, (w, h) => {
  g.fillStyle = '#d6dcd6';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#7e9a62';
  g.beginPath();
  g.moveTo(0, h);
  g.quadraticCurveTo(w * 0.4, h * 0.15, w, h * 0.6);
  g.lineTo(w, h);
  g.closePath();
  g.fill();
  g.fillStyle = '#5f7a4c';
  g.beginPath();
  g.moveTo(0, h);
  g.quadraticCurveTo(w * 0.7, h * 0.55, w, h * 0.85);
  g.lineTo(w, h);
  g.closePath();
  g.fill();
});
// an old house: a white wall, a red-brown roof, a dark door
stitched(-2.2, -3.72, 0.72, 0.6, 0.03, (w, h) => {
  g.fillStyle = '#d5d9d2';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#ece6d6';
  g.fillRect(w * 0.2, h * 0.45, w * 0.6, h * 0.45);
  g.fillStyle = '#9a5a42';
  g.beginPath();
  g.moveTo(w * 0.12, h * 0.47);
  g.lineTo(w * 0.5, h * 0.18);
  g.lineTo(w * 0.88, h * 0.47);
  g.fill();
  g.fillStyle = '#4b3f36';
  g.fillRect(w * 0.45, h * 0.65, w * 0.1, h * 0.25);
  g.fillStyle = '#7f9468';
  g.fillRect(0, h * 0.9, w, h * 0.1);
});
