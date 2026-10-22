// The judge's villa at the top of the garden, seen from the table: an old two-storey house in warm ochre plaster, a
// hipped roof of red tiles with two chimneys, green shutters folded back, the door open on the steps, a balcony over
// it, wild vine climbing its left corner. Its lit windows are villa_lit's.
const W = 6.6;
// the plaster, the plinth, the quoins at the corners
g.fillStyle = '#d9b67f';
g.fillRect(-W, -7.4, W * 2, 7.4);
g.fillStyle = '#a99d89';
g.fillRect(-W, -0.75, W * 2, 0.75);
g.fillStyle = '#e8d3a9';
for (const sx of [-1, 1]) {
  for (let k = 0; k < 10; k++) {
    const w = k % 2 ? 0.38 : 0.6;
    g.fillRect(sx > 0 ? W - w : -W, -0.8 - (k + 1) * 0.66, w, 0.6);
  }
}
// the band between the floors and the cornice
g.fillStyle = '#e9dcc0';
g.fillRect(-W, -3.75, W * 2, 0.18);
g.fillRect(-W - 0.25, -7.7, W * 2 + 0.5, 0.32);
// the roof
g.fillStyle = '#a8553a';
g.beginPath();
g.moveTo(-W - 0.55, -7.65);
g.lineTo(W + 0.55, -7.65);
g.lineTo(W - 2.7, -11.2);
g.lineTo(-W + 2.7, -11.2);
g.closePath();
g.fill();
g.strokeStyle = '#8c4430';
g.lineWidth = 0.05;
for (let y = -7.9; y > -11.1; y -= 0.34) {
  const u = (-7.65 - y) / 3.55;
  const half = W + 0.55 - u * 3.25;
  g.beginPath();
  g.moveTo(-half, y);
  g.lineTo(half, y);
  g.stroke();
}
// the chimneys
for (const x of [-3.2, 2.6]) {
  g.fillStyle = '#c3ad92';
  g.fillRect(x - 0.35, -12.3, 0.7, 2.4);
  g.fillStyle = '#8f7c69';
  g.fillRect(x - 0.45, -12.45, 0.9, 0.2);
}
// a window: its frame, dark panes with their bars, the shutters folded back
const windowAt = (x, y0, h) => {
  const w = 1.05;
  for (const sx of [-1, 1]) {
    g.fillStyle = '#5c7a55';
    g.fillRect(x + sx * (w / 2 + 0.03) - (sx < 0 ? 0.55 : 0), y0 - h, 0.55, h);
    g.strokeStyle = '#47613f';
    g.lineWidth = 0.035;
    for (let s = y0 - h + 0.12; s < y0 - 0.05; s += 0.13) {
      g.beginPath();
      g.moveTo(x + sx * (w / 2 + 0.08), s);
      g.lineTo(x + sx * (w / 2 + 0.53), s);
      g.stroke();
    }
  }
  g.fillStyle = '#efe8da';
  g.fillRect(x - w / 2 - 0.08, y0 - h - 0.08, w + 0.16, h + 0.16);
  g.fillStyle = '#3d424a';
  g.fillRect(x - w / 2, y0 - h, w, h);
  g.strokeStyle = '#efe8da';
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(x, y0 - h);
  g.lineTo(x, y0);
  for (let r = 1; r < 3; r++) {
    g.moveTo(x - w / 2, y0 - h + (h * r) / 3);
    g.lineTo(x + w / 2, y0 - h + (h * r) / 3);
  }
  g.stroke();
  g.fillStyle = '#e4d7bb';
  g.fillRect(x - w / 2 - 0.15, y0, w + 0.3, 0.1);
};
for (const x of [-4.9, -2.7, 2.7, 4.9]) windowAt(x, -1.15, 1.85);
for (const x of [-4.9, -2.7, 0, 2.7, 4.9]) windowAt(x, -4.45, 1.75);
// the door, open: its arch, the dark hall, the leaves folded in
g.fillStyle = '#efe8da';
g.beginPath();
g.moveTo(-0.85, -0.75);
g.lineTo(-0.85, -2.95);
g.arc(0, -2.95, 0.85, Math.PI, 0);
g.lineTo(0.85, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#4a3a2e';
g.beginPath();
g.moveTo(-0.7, -0.75);
g.lineTo(-0.7, -2.95);
g.arc(0, -2.95, 0.7, Math.PI, 0);
g.lineTo(0.7, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#4e6a48';
g.fillRect(-0.7, -2.9, 0.22, 2.15);
g.fillRect(0.48, -2.9, 0.22, 2.15);
// the steps
g.fillStyle = '#c4b8a4';
for (let s = 0; s < 3; s++) g.fillRect(-1.05 - s * 0.18, -0.75 + s * 0.25, 2.1 + s * 0.36, 0.25);
// the balcony over the door: its slab, its iron railing
g.fillStyle = '#d8ccb4';
g.fillRect(-1.1, -4.45, 2.2, 0.16);
g.strokeStyle = '#2f2c2b';
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-1.05, -5.25);
g.lineTo(1.05, -5.25);
for (let x = -1.0; x <= 1.0; x += 0.16) {
  g.moveTo(x, -4.45);
  g.lineTo(x, -5.25);
}
g.stroke();
// the wild vine over the left corner
const vine = ['#4d6a34', '#5f7c3c', '#728f45'];
for (let i = 0; i < 260; i++) {
  const t = e.rnd();
  const x = -W + e.rnd() * 3.2 * (1 - t * 0.5);
  const y = -0.8 - t * 5.6 - e.rnd() * 0.6;
  g.fillStyle = vine[Math.floor(e.rnd() * 3)];
  g.beginPath();
  g.ellipse(x, y, 0.16 + e.rnd() * 0.12, 0.12 + e.rnd() * 0.08, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
