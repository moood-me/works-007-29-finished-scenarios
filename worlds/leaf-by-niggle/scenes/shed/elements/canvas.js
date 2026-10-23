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
// the far mountains, top right: blue-grey ridges, snow on the peaks
g.fillStyle = 'rgba(150,164,182,0.8)';
g.beginPath();
g.moveTo(0.1, -2.75);
g.lineTo(0.45, -3.05);
g.lineTo(0.7, -2.95);
g.lineTo(1.05, -3.35);
g.lineTo(1.35, -3.1);
g.lineTo(1.6, -3.25);
g.lineTo(2.0, -2.9);
g.lineTo(2.0, -2.7);
g.closePath();
g.fill();
g.fillStyle = '#f6f4ee';
g.beginPath();
g.moveTo(0.92, -3.2);
g.lineTo(1.05, -3.35);
g.lineTo(1.2, -3.22);
g.lineTo(1.1, -3.24);
g.lineTo(1.02, -3.18);
g.closePath();
g.moveTo(1.5, -3.18);
g.lineTo(1.6, -3.25);
g.lineTo(1.72, -3.15);
g.lineTo(1.62, -3.17);
g.closePath();
g.fill();
// the forest behind the tree, only begun: soft grey-green masses at the right, pencil hints at the left
for (let i = 0; i < 26; i++) {
  const x = 0.2 + e.rnd() * 1.8;
  const y = -2.75 + e.rnd() * 0.75;
  g.fillStyle = `rgba(${110 + e.rnd() * 30},${130 + e.rnd() * 25},${105 + e.rnd() * 20},0.45)`;
  g.beginPath();
  g.ellipse(x, y, 0.08 + e.rnd() * 0.12, 0.12 + e.rnd() * 0.15, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(110,104,92,0.5)';
g.lineWidth = 0.008;
for (let i = 0; i < 9; i++) {
  const x = -1.9 + e.rnd() * 1.2;
  g.beginPath();
  g.moveTo(x, -2.0);
  g.lineTo(x + 0.07, -2.45 - e.rnd() * 0.2);
  g.lineTo(x + 0.14, -2.0);
  g.stroke();
}
// grey patches
for (let i = 0; i < 10; i++) {
  g.fillStyle = 'rgba(130,128,122,0.2)';
  g.beginPath();
  g.ellipse(X0 + 0.3 + e.rnd() * 3.4, Y0 + 0.4 + e.rnd() * 2.4, 0.12 + e.rnd() * 0.25, 0.08 + e.rnd() * 0.2, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the trunk: a wash of grey-brown up its lower half, the pencil contour all the way into the branches
g.fillStyle = 'rgba(128,112,92,0.55)';
g.beginPath();
g.moveTo(-0.55, Y1);
g.bezierCurveTo(-0.38, -1.0, -0.3, -1.3, -0.22, -1.7);
g.lineTo(0.0, -1.72);
g.bezierCurveTo(0.02, -1.3, 0.1, -0.9, 0.32, Y1);
g.closePath();
g.fill();
const branches = [
  [-0.12, -1.7, -0.9, -2.4, -1.6, -2.75],
  [-0.12, -1.7, -0.6, -2.7, -0.9, -3.3],
  [-0.1, -1.75, -0.1, -2.6, 0.05, -3.4],
  [-0.08, -1.7, 0.5, -2.4, 1.0, -2.9],
  [-0.06, -1.65, 0.7, -1.9, 1.55, -2.1],
  [-0.15, -1.6, -0.8, -1.7, -1.5, -1.6],
];
g.strokeStyle = 'rgba(92,86,76,0.85)';
g.lineCap = 'round';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.55, Y1);
g.bezierCurveTo(-0.38, -1.0, -0.3, -1.3, -0.22, -1.7);
g.moveTo(0.32, Y1);
g.bezierCurveTo(0.1, -0.9, 0.02, -1.3, 0.0, -1.72);
for (const [x0, y0, cx, cy, x1, y1] of branches) {
  g.moveTo(x0, y0);
  g.quadraticCurveTo(cx, cy, x1, y1);
  g.moveTo(x0 + 0.06, y0 + 0.02);
  g.quadraticCurveTo(cx + 0.05, cy + 0.06, x1 + 0.01, y1 + 0.02);
}
g.stroke();
// the leaves: clusters at the branches' ends and along them — most a pencil outline, some washed in
const greens = ['rgba(112,138,90,0.85)', 'rgba(142,160,107,0.85)', 'rgba(167,168,110,0.85)', 'rgba(181,154,92,0.8)', 'rgba(150,120,80,0.75)'];
for (const [x0, y0, cx, cy, x1, y1] of branches) {
  for (let k = 0; k < 26; k++) {
    const u = 0.35 + e.rnd() * 0.7;
    const bx = (1 - u) * (1 - u) * x0 + 2 * (1 - u) * u * cx + u * u * x1 + (e.rnd() - 0.5) * 0.5;
    const by = (1 - u) * (1 - u) * y0 + 2 * (1 - u) * u * cy + u * u * y1 + (e.rnd() - 0.5) * 0.45;
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
