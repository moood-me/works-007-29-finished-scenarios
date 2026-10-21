// The rock seen from above, metres (x across from its middle at across 4, y toward the viewer from distance 24.5),
// in its daylight colours: grey stone, dry and pale on its back, dark and wet toward the water, a band of weed at the
// waterline (the land's height read where each cell lies: e.ground); cracks and lichen. Under the water nothing.
const A0 = 4;
const D0 = 24.5;
g.fillStyle = '#727477';
g.fillRect(-20, -21.5, 40, 43);
const C = 0.6;
for (let x = -20; x < 20; x += C) {
  for (let y = -21.5; y < 21.5; y += C) {
    const h = e.ground(A0 + x + C / 2, D0 - y - C / 2);
    if (h < -1.3) continue;
    if (h < -0.95) g.fillStyle = '#4c4b39';
    else if (h < -0.45) g.fillStyle = '#4a4f53';
    else if (h < -0.1) g.fillStyle = '#5f6367';
    else g.fillStyle = e.rnd() < 0.5 ? '#76787b' : '#717376';
    g.fillRect(x, y, C + 0.02, C + 0.02);
  }
}
// cracks across the stone
g.strokeStyle = '#4b4d51';
g.lineCap = 'round';
for (let i = 0; i < 90; i++) {
  let x = -20 + e.rnd() * 40;
  let y = -21.5 + e.rnd() * 43;
  let a = e.rnd() * Math.PI * 2;
  g.lineWidth = 0.03 + e.rnd() * 0.05;
  g.beginPath();
  g.moveTo(x, y);
  for (let k = 0; k < 5; k++) {
    a += (e.rnd() - 0.5) * 1.2;
    x += Math.cos(a) * (0.3 + e.rnd() * 0.8);
    y += Math.sin(a) * (0.3 + e.rnd() * 0.8);
    g.lineTo(x, y);
  }
  g.stroke();
}
// lichen on the dry stone
for (let i = 0; i < 140; i++) {
  const x = -20 + e.rnd() * 40;
  const y = -21.5 + e.rnd() * 43;
  if (e.ground(A0 + x, D0 - y) < 0) continue;
  g.fillStyle = e.rnd() < 0.6 ? '#9d9a7c' : '#a98f62';
  g.beginPath();
  g.ellipse(x, y, 0.04 + e.rnd() * 0.08, 0.03 + e.rnd() * 0.06, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
