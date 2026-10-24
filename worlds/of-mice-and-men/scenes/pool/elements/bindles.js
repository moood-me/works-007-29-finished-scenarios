// Their bindles, dropped on the sand: two blanket rolls — a grey army wool one and a brown — tied with cord, seen from
// the side, the rolled end of each turned a little toward the viewer
const roll = (x, y, l, r, cloth, shade, end) => {
  // the roll: soft, a little sagging in the middle, rounder toward the top where the low sun is
  const body = g.createLinearGradient(0, y - 2 * r, 0, y);
  body.addColorStop(0, cloth);
  body.addColorStop(1, shade);
  g.fillStyle = body;
  g.beginPath();
  g.moveTo(x - l / 2 + r, y - 2 * r);
  g.quadraticCurveTo(x, y - 2 * r + r * 0.18, x + l / 2 - r, y - 2 * r);
  g.lineTo(x + l / 2 - r, y);
  g.quadraticCurveTo(x, y + r * 0.06, x - l / 2 + r, y);
  g.arc(x - l / 2 + r, y - r, r, Math.PI / 2, Math.PI * 1.5);
  g.fill();
  // the cords, pulling the cloth in a little where they go round it
  g.strokeStyle = '#4e3f2e';
  g.lineWidth = 0.014;
  for (const u of [-0.27, 0.22]) {
    g.beginPath();
    g.moveTo(x + u * l - 0.01, y - 2 * r + r * 0.12);
    g.quadraticCurveTo(x + u * l + 0.012, y - r, x + u * l - 0.01, y);
    g.stroke();
  }
  // the rolled end: the blanket's layers wound round, darker in toward the middle
  g.fillStyle = end;
  g.beginPath();
  g.ellipse(x + l / 2 - r, y - r, r * 0.62, r, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = shade;
  g.lineWidth = 0.008;
  g.beginPath();
  for (let a = 0; a < Math.PI * 6; a += 0.2) {
    const k = 1 - a / (Math.PI * 7);
    g.lineTo(x + l / 2 - r + Math.cos(a) * r * 0.55 * k, y - r + Math.sin(a) * r * 0.9 * k);
  }
  g.stroke();
};
roll(-0.12, 0, 0.72, 0.105, '#8a857b', '#5c5850', '#9c968a');
roll(0.3, -0.03, 0.6, 0.09, '#7a5f45', '#4f3c2b', '#8d7154');
