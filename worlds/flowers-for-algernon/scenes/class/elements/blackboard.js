// The blackboard on the left wall (metres from its foot at the chalk tray, x −1.6…1.6, running away from the viewer):
// black-green slate in an oak frame, the cloud of the last class wiped off; in chalk, in Miss Kinnian's round hand,
// the evening's lesson — lines of writing too far to read, words underlined, a small house drawn by them; chalk and a
// felt eraser on the tray.
g.fillStyle = '#7a5a3c';
g.fillRect(-1.62, -1.27, 3.24, 1.29);
g.fillStyle = '#2f3b36';
g.fillRect(-1.56, -1.21, 3.12, 1.17);
g.save();
g.beginPath();
g.rect(-1.56, -1.21, 3.12, 1.17);
g.clip();
for (let i = 0; i < 12; i++) {
  g.fillStyle = 'rgba(200,210,204,0.06)';
  g.beginPath();
  g.ellipse(-1.4 + e.rnd() * 2.8, -1.0 + e.rnd() * 0.8, 0.18 + e.rnd() * 0.3, 0.06 + e.rnd() * 0.1, e.rnd(), 0, Math.PI * 2);
  g.fill();
}
g.restore();
g.strokeStyle = 'rgba(236,238,228,0.85)';
g.lineCap = 'round';
g.lineJoin = 'round';
// lines of round handwriting: loops along a line, word by word
g.lineWidth = 0.008;
for (let line = 0; line < 5; line++) {
  const y = -1.05 + line * 0.17;
  let x = -1.4 + (line === 0 ? 0.3 : 0);
  const end = line === 0 ? -0.2 : line === 4 ? 0.2 : 0.75;
  while (x < end) {
    const n = 3 + Math.floor(e.rnd() * 5);
    g.beginPath();
    g.moveTo(x, y);
    for (let i = 0; i < n; i++) {
      const tall = e.rnd() < 0.25 ? 0.07 : 0.035;
      g.quadraticCurveTo(x + i * 0.035 + 0.01, y - tall, x + i * 0.035 + 0.02, y - tall * 0.3);
      g.quadraticCurveTo(x + i * 0.035 + 0.03, y + 0.005, x + (i + 1) * 0.035, y);
    }
    g.stroke();
    if (line > 0 && e.rnd() < 0.15) {
      g.beginPath();
      g.moveTo(x, y + 0.02);
      g.lineTo(x + n * 0.035, y + 0.02);
      g.stroke();
    }
    x += n * 0.035 + 0.06;
  }
}
// the house drawn by the words: walls, a roof, a door, a window, smoke curling from its chimney
g.lineWidth = 0.011;
g.beginPath();
g.rect(1.0, -0.55, 0.32, 0.26);
g.moveTo(0.96, -0.55);
g.lineTo(1.16, -0.75);
g.lineTo(1.36, -0.55);
g.rect(1.12, -0.42, 0.08, 0.13);
g.rect(1.24, -0.5, 0.06, 0.06);
g.moveTo(1.27, -0.66);
g.lineTo(1.27, -0.74);
g.lineTo(1.3, -0.74);
g.lineTo(1.3, -0.63);
g.moveTo(1.29, -0.76);
g.bezierCurveTo(1.25, -0.82, 1.34, -0.86, 1.3, -0.92);
g.stroke();
// the tray, a stick of chalk and the eraser
g.fillStyle = '#6e5034';
g.fillRect(-1.6, -0.04, 3.2, 0.06);
g.fillStyle = '#f2f0e6';
g.fillRect(-0.6, -0.065, 0.08, 0.02);
g.fillStyle = '#3a3a3a';
g.fillRect(0.3, -0.08, 0.14, 0.04);
g.fillStyle = '#c9b48a';
g.fillRect(0.3, -0.09, 0.14, 0.015);
