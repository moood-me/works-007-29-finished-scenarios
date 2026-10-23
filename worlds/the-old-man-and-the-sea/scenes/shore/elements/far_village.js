// The far side of the bay, 260 m off: low green hills, the village along the water — white and ochre houses under
// palm thatch and tin, palms, boats drawn up on its beach, the Terrace standing on its piles over the water at the
// right — and at dusk its windows and the Terrace's lamps (their glows by `dusk`, in the animate). Metres, the
// waterline at the anchor; 140 m wide.
// the hills: two folds, the far one paler
g.fillStyle = '#9aa58a';
g.beginPath();
g.moveTo(-75, 0);
// (each fold falls to the water at the card's two ends)
const ends = x => Math.min(1, (75 - Math.abs(x)) / 22);
for (let x = -75; x <= 75; x += 3) g.lineTo(x, (-22 - 10 * Math.sin(x * 0.03 + 1) - 6 * Math.sin(x * 0.09)) * ends(x));
g.lineTo(75, 0);
g.closePath();
g.fill();
g.fillStyle = '#7f8f68';
g.beginPath();
g.moveTo(-75, 0);
for (let x = -75; x <= 75; x += 2) g.lineTo(x, (-10 - 6 * Math.sin(x * 0.05 + 2) - 3 * Math.sin(x * 0.17) + 4 * Math.max(0, (x - 30) / 45)) * ends(x));
g.lineTo(75, 0);
g.closePath();
g.fill();
// the beach strip
g.fillStyle = '#d6c4a0';
g.fillRect(-72, -1.4, 144, 1.45);
// the houses along the water, and some up the slope
const walls = ['#ece6d8', '#e2cfa4', '#d9b98e', '#f0ebe0', '#c9b9a0', '#b8c4c4'];
const roofs = ['#8f7f5c', '#7e7058', '#a4573f', '#8a8a86'];
for (let i = 0; i < 34; i++) {
  const x = -70 + e.rnd() * 112;
  const up = e.rnd() < 0.35 ? 3 + e.rnd() * 7 : 0;
  const w = 2.5 + e.rnd() * 3;
  const h = 2.2 + e.rnd() * 1.2;
  const y = -1.2 - up;
  g.fillStyle = walls[Math.floor(e.rnd() * walls.length)];
  g.fillRect(x, y - h, w, h);
  g.fillStyle = roofs[Math.floor(e.rnd() * roofs.length)];
  g.beginPath();
  g.moveTo(x - 0.4, y - h);
  g.lineTo(x + w / 2, y - h - 1.6);
  g.lineTo(x + w + 0.4, y - h);
  g.closePath();
  g.fill();
  g.fillStyle = '#4a3f36';
  g.fillRect(x + w * 0.3, y - 1.5, 0.6, 1.5);
  if (i % 3 === 0) e.light(x + w * 0.3 + 0.3, y - 0.9, 1.2, '#ffc47e', 2, `w${i / 3}`);
}
// palms among them
for (let i = 0; i < 26; i++) {
  const x = -72 + e.rnd() * 120;
  const base = -1 - (e.rnd() < 0.4 ? e.rnd() * 9 : 0);
  const h = 6 + e.rnd() * 4;
  g.strokeStyle = '#7d7262';
  g.lineWidth = 0.3;
  g.beginPath();
  g.moveTo(x, base);
  g.quadraticCurveTo(x + 0.6, base - h * 0.5, x + 1, base - h);
  g.stroke();
  g.strokeStyle = '#4f6a3e';
  g.lineWidth = 0.35;
  for (let k = 0; k < 7; k++) {
    const a = -0.3 + (k / 6) * (Math.PI + 0.6);
    g.beginPath();
    g.moveTo(x + 1, base - h);
    g.quadraticCurveTo(x + 1 + Math.cos(a) * 1.6, base - h - 1, x + 1 + Math.cos(a) * 2.6, base - h + 0.6 + Math.abs(Math.cos(a)));
    g.stroke();
  }
}
// boats drawn up on its beach
for (let i = 0; i < 9; i++) {
  const x = -68 + e.rnd() * 100;
  g.fillStyle = e.rnd() < 0.5 ? '#e4e0d4' : '#6f8fa0';
  g.beginPath();
  g.moveTo(x, -0.9);
  g.lineTo(x + 4, -0.95);
  g.lineTo(x + 3.4, -0.3);
  g.lineTo(x + 0.4, -0.3);
  g.closePath();
  g.fill();
}
// the Terrace: a long low roof on posts over the water, its lamps
const TX = 52;
g.fillStyle = '#6c5a44';
for (let x = TX; x <= TX + 14; x += 2.3) g.fillRect(x, -4.2, 0.25, 4.3);
g.fillStyle = '#e9e1cf';
g.fillRect(TX - 1, -4.8, 16.5, 0.8);
g.fillStyle = '#8b7b5a';
g.beginPath();
g.moveTo(TX - 1.6, -4.8);
g.lineTo(TX + 7, -7);
g.lineTo(TX + 16, -4.8);
g.closePath();
g.fill();
g.fillStyle = '#5a4a3a';
g.fillRect(TX, -1.8, 14.5, 0.35);
e.light(TX + 3.5, -3.6, 1.6, '#ffcf8a', 2.5, 'terrace1');
e.light(TX + 10.5, -3.6, 1.6, '#ffcf8a', 2.5, 'terrace2');
