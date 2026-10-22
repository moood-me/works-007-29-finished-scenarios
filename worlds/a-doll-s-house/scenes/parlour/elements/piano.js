// The upright piano against the back wall: rosewood, a fretwork front over green silk, the keyboard open, a sheet of
// music on its rest, two brass candle arms with unlit candles; its stool before it. The point `keys` is the keyboard.
const WOOD = '#4b2b1f';
const DARK = '#3a2118';
g.fillStyle = WOOD;
g.fillRect(-0.74, -1.36, 1.48, 1.36);
g.fillStyle = DARK;
g.fillRect(-0.77, -1.4, 1.54, 0.06);
// the upper front: fretwork over green silk
g.fillStyle = '#3e5a46';
g.fillRect(-0.55, -1.26, 1.1, 0.34);
g.strokeStyle = WOOD;
g.lineWidth = 0.025;
for (let x = -0.5; x < 0.55; x += 0.11) {
  g.beginPath();
  g.ellipse(x + 0.05, -1.09, 0.045, 0.13, 0, 0, Math.PI * 2);
  g.stroke();
}
// the music on its rest
g.fillStyle = '#ede5d2';
g.fillRect(-0.2, -1.12, 0.38, 0.27);
g.fillStyle = '#8a8070';
for (let i = 0; i < 5; i++) g.fillRect(-0.17, -1.07 + i * 0.045, 0.32, 0.004);
// the keyboard and its cheeks
g.fillStyle = DARK;
g.fillRect(-0.74, -0.8, 1.48, 0.08);
g.fillStyle = '#efe9db';
g.fillRect(-0.66, -0.75, 1.32, 0.05);
g.fillStyle = '#1d1715';
for (let i = 0; i < 26; i++) if (![2, 6, 9, 13, 16, 20, 23].includes(i)) g.fillRect(-0.645 + i * 0.05, -0.75, 0.025, 0.03);
e.at(0, -0.74, 'keys');
// the lower front, two panels, the lyre and pedals
g.strokeStyle = '#5c3828';
g.lineWidth = 0.02;
g.strokeRect(-0.6, -0.6, 0.55, 0.42);
g.strokeRect(0.05, -0.6, 0.55, 0.42);
g.fillStyle = '#b8924a';
g.fillRect(-0.08, -0.06, 0.05, 0.03);
g.fillRect(0.03, -0.06, 0.05, 0.03);
// the candle arms and their candles
for (const s of [-1, 1]) {
  g.strokeStyle = '#b8924a';
  g.lineWidth = 0.015;
  g.beginPath();
  g.moveTo(s * 0.62, -1.02);
  g.quadraticCurveTo(s * 0.8, -1.02, s * 0.82, -1.12);
  g.stroke();
  g.fillStyle = '#f1ead8';
  g.fillRect(s * 0.82 - 0.012, -1.26, 0.024, 0.14);
}
// the stool
g.fillStyle = '#3a2118';
g.fillRect(-0.24, -0.48, 0.48, 0.06);
g.fillStyle = '#6b2a24';
g.fillRect(-0.22, -0.52, 0.44, 0.05);
g.fillStyle = '#3a2118';
for (const x of [-0.2, 0.17]) g.fillRect(x, -0.42, 0.03, 0.42);
