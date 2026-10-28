// The other side of the bay, 380 m off, on the left: the village's beach and its slope — low green hills, white and
// ochre houses under palm thatch and tin, palms, the skiffs drawn up on the sand (the old man's among them), the road
// climbing to the huts — and at dusk its windows (glows `w<k>`, lit with `dusk` in the animate). Metres, the
// waterline at the anchor; 430 m wide.
const L = -230;
const R = 200;
const ends = x => Math.min(1, (x - L) / 40, (R - x) / 60);
// the hills: two folds, the far one paler, highest at the left where the village climbs
g.fillStyle = '#9aa58a';
g.beginPath();
g.moveTo(L, 0);
for (let x = L; x <= R; x += 4) g.lineTo(x, (-26 - 12 * Math.sin(x * 0.02 + 1) - 6 * Math.sin(x * 0.07) - 14 * Math.max(0, -x / 230)) * ends(x));
g.lineTo(R, 0);
g.closePath();
g.fill();
g.fillStyle = '#7f8f68';
g.beginPath();
g.moveTo(L, 0);
for (let x = L; x <= R; x += 3) g.lineTo(x, (-12 - 6 * Math.sin(x * 0.04 + 2) - 3 * Math.sin(x * 0.13) - 6 * Math.max(0, -x / 230)) * ends(x));
g.lineTo(R, 0);
g.closePath();
g.fill();
// the beach strip
g.fillStyle = '#d6c4a0';
g.fillRect(L + 10, -1.6, R - L - 30, 1.65);
// the houses along the water and up the slope
const walls = ['#ece6d8', '#e2cfa4', '#d9b98e', '#f0ebe0', '#c9b9a0', '#b8c4c4'];
const roofs = ['#8f7f5c', '#7e7058', '#a4573f', '#8a8a86'];
for (let i = 0; i < 46; i++) {
  const x = L + 20 + e.rnd() * (R - L - 70);
  const up = e.rnd() < 0.4 ? 3 + e.rnd() * 12 * (1 + Math.max(0, -x / 150)) : 0;
  const w = 3 + e.rnd() * 3.5;
  const h = 2.5 + e.rnd() * 1.3;
  const y = -1.5 - up;
  g.fillStyle = walls[Math.floor(e.rnd() * walls.length)];
  g.fillRect(x, y - h, w, h);
  g.fillStyle = roofs[Math.floor(e.rnd() * roofs.length)];
  g.beginPath();
  g.moveTo(x - 0.5, y - h);
  g.lineTo(x + w / 2, y - h - 1.8);
  g.lineTo(x + w + 0.5, y - h);
  g.closePath();
  g.fill();
  g.fillStyle = '#4a3f36';
  g.fillRect(x + w * 0.3, y - 1.6, 0.7, 1.6);
  if (i % 3 === 0) e.light(x + w * 0.3 + 0.35, y - 1, 2.2, '#ffc47e', 3, `w${i / 3}`);
}
// palms among them
for (let i = 0; i < 40; i++) {
  const x = L + 15 + e.rnd() * (R - L - 50);
  const base = -1.2 - (e.rnd() < 0.4 ? e.rnd() * 12 : 0);
  const h = 7 + e.rnd() * 5;
  g.strokeStyle = '#7d7262';
  g.lineWidth = 0.4;
  g.beginPath();
  g.moveTo(x, base);
  g.quadraticCurveTo(x + 0.8, base - h * 0.5, x + 1.3, base - h);
  g.stroke();
  g.strokeStyle = '#4f6a3e';
  g.lineWidth = 0.45;
  for (let k = 0; k < 7; k++) {
    const a = -0.3 + (k / 6) * (Math.PI + 0.6);
    g.beginPath();
    g.moveTo(x + 1.3, base - h);
    g.quadraticCurveTo(x + 1.3 + Math.cos(a) * 2, base - h - 1.2, x + 1.3 + Math.cos(a) * 3.2, base - h + 0.8 + Math.abs(Math.cos(a)));
    g.stroke();
  }
}
// the skiffs drawn up on the beach
for (let i = 0; i < 14; i++) {
  const x = L + 30 + e.rnd() * (R - L - 90);
  g.fillStyle = e.rnd() < 0.5 ? '#e4e0d4' : '#6f8fa0';
  g.beginPath();
  g.moveTo(x, -1.1);
  g.lineTo(x + 4.6, -1.15);
  g.lineTo(x + 3.9, -0.35);
  g.lineTo(x + 0.5, -0.35);
  g.closePath();
  g.fill();
}
