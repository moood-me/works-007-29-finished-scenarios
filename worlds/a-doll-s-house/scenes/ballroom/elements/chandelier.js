// The crystal chandelier hanging from the ceiling's rose over the middle of the room (its foot, the finial, 1.95 m up;
// the chain to the ceiling at y −1.45): a gilt hoop seen a little from below, twelve candles on its arms, festoons and
// drops of crystal. Its layers: `body` (the gilt and the crystal), `flames` (flickering, shown as much as `candles` by
// its animate), `glints` (the crystal catching the flames, shown with them); its light `glow` is the scene's light
// "chandelier".
const GILT = '#c9a75c';
const CRYSTAL = '#e6eef2';
// the candles round the hoop: x, y on the painting, and whether before the hoop (larger) or behind it
const ring = [];
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2 + Math.PI / 12;
  ring.push([Math.cos(a) * 0.68, -0.66 + Math.sin(a) * 0.12, Math.sin(a) > 0]);
}
e.layer('body', {}, c => {
  // the chain and the crown
  c.strokeStyle = GILT;
  c.lineWidth = 0.02;
  c.beginPath();
  c.moveTo(0, -1.45);
  c.lineTo(0, -1.1);
  c.stroke();
  c.fillStyle = GILT;
  c.beginPath();
  c.ellipse(0, -1.08, 0.2, 0.05, 0, 0, Math.PI * 2);
  c.fill();
  // the crystal festoons from the crown to the hoop, behind first
  c.strokeStyle = CRYSTAL;
  c.lineWidth = 0.012;
  for (let i = 0; i < 12; i++) {
    const [x, y] = ring[i];
    c.beginPath();
    c.moveTo(x * 0.28, -1.06);
    c.quadraticCurveTo(x * 0.75, -0.8, x, y - 0.02);
    c.stroke();
  }
  // the back half of the hoop, the shaft, the bowl of drops under it, the front half of the hoop
  c.lineWidth = 0.035;
  c.strokeStyle = GILT;
  c.beginPath();
  c.ellipse(0, -0.66, 0.68, 0.12, 0, Math.PI, Math.PI * 2);
  c.stroke();
  c.fillStyle = GILT;
  c.fillRect(-0.03, -1.06, 0.06, 0.95);
  c.fillStyle = CRYSTAL;
  for (let k = 0; k < 5; k++) {
    c.beginPath();
    c.ellipse(0, -0.45 + k * 0.1, 0.24 - k * 0.045, 0.05, 0, 0, Math.PI);
    c.fill();
  }
  c.fillStyle = GILT;
  c.beginPath();
  c.moveTo(-0.05, -0.08);
  c.lineTo(0.05, -0.08);
  c.lineTo(0, 0);
  c.closePath();
  c.fill();
  c.strokeStyle = GILT;
  c.beginPath();
  c.ellipse(0, -0.66, 0.68, 0.12, 0, 0, Math.PI);
  c.stroke();
  // the candles in their cups, the drops hanging under the hoop
  for (const [x, y, front] of ring) {
    const k = front ? 1 : 0.8;
    c.fillStyle = GILT;
    c.beginPath();
    c.ellipse(x, y, 0.04 * k, 0.015 * k, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#f4efe2';
    c.fillRect(x - 0.013 * k, y - 0.13 * k, 0.026 * k, 0.13 * k);
    c.fillStyle = CRYSTAL;
    c.beginPath();
    c.ellipse(x, y + 0.08, 0.016, 0.035, 0, 0, Math.PI * 2);
    c.fill();
  }
});
e.layer('flames', { flicker: 0.3 }, c => {
  for (const [x, y, front] of ring) {
    const k = front ? 1 : 0.8;
    c.fillStyle = '#ffcf7a';
    c.beginPath();
    c.ellipse(x, y - 0.16 * k, 0.016 * k, 0.034 * k, 0, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#fff6dc';
    c.beginPath();
    c.ellipse(x, y - 0.155 * k, 0.007 * k, 0.016 * k, 0, 0, Math.PI * 2);
    c.fill();
  }
});
e.layer('glints', { flicker: 0.8, blend: 'add' }, c => {
  c.fillStyle = '#fff4dc';
  for (let i = 0; i < 40; i++) {
    const a = e.rnd() * Math.PI * 2;
    const r = 0.1 + e.rnd() * 0.6;
    c.beginPath();
    c.arc(Math.cos(a) * r, -0.66 + Math.sin(a) * 0.12 + 0.05 + e.rnd() * 0.35 * (1 - r), 0.008, 0, Math.PI * 2);
    c.fill();
  }
});
e.light(0, -0.75, 0.8, '#ffdca0', 1, 'glow');
e.at(0, -0.66);
