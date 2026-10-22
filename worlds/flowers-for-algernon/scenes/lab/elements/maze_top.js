// The table's top from above (metres, its middle at distance 3.0, y toward the viewer): grey-green linoleum in an oak
// edge. The maze stands on its left two thirds (`maze`); on the right end the morning's tests — the stack of ink-blot
// cards and two laid out, a clipboard of record sheets, a pencil, a stopwatch.
g.fillStyle = '#b39470';
g.fillRect(-1.05, -0.46, 2.1, 0.92);
g.fillStyle = '#9fa89a';
g.fillRect(-1.01, -0.42, 2.02, 0.84);
// the ink-blot cards: white, each blot the same on either side of its fold
const blot = (cx, cy, s, seed) => {
  g.fillStyle = '#f4f2ea';
  g.fillRect(cx - 0.085 * s, cy - 0.11 * s, 0.17 * s, 0.22 * s);
  g.fillStyle = '#26252a';
  for (let i = 0; i < 9; i++) {
    const x = e.anim.hash(i, seed) * 0.055 * s, y = (e.anim.hash(i + 20, seed) - 0.5) * 0.16 * s, r = (0.006 + e.anim.hash(i + 40, seed) * 0.02) * s;
    for (const sx of [-1, 1]) {
      g.beginPath();
      g.ellipse(cx + sx * x, cy + y, r * 1.3, r, sx * 0.4, 0, Math.PI * 2);
      g.fill();
    }
  }
};
g.fillStyle = '#d9d5c9';
g.fillRect(0.55, -0.32, 0.17, 0.22);
blot(0.64, -0.22, 1, 3);
blot(0.86, -0.18, 1, 7);
blot(0.84, 0.12, 1, 11);
// the clipboard, its sheet ruled, a few marks of pencil on it
g.fillStyle = '#8a6a4a';
g.fillRect(0.5, 0.0, 0.23, 0.32);
g.fillStyle = '#f2efe6';
g.fillRect(0.52, 0.04, 0.19, 0.26);
g.fillStyle = '#a9a9a4';
g.fillRect(0.57, 0.01, 0.09, 0.03);
g.strokeStyle = 'rgba(120,130,150,0.5)';
g.lineWidth = 0.003;
for (let y = 0.08; y < 0.29; y += 0.022) {
  g.beginPath();
  g.moveTo(0.53, y);
  g.lineTo(0.7, y);
  g.stroke();
}
g.strokeStyle = 'rgba(60,60,64,0.7)';
g.lineWidth = 0.003;
for (let y = 0.085; y < 0.26; y += 0.022) {
  g.beginPath();
  g.moveTo(0.54, y - 0.004);
  g.lineTo(0.54 + 0.03 + e.rnd() * 0.1, y - 0.004);
  g.stroke();
}
// the pencil and the stopwatch
g.save();
g.translate(0.8, 0.3);
g.rotate(-0.5);
g.fillStyle = '#e1b542';
g.fillRect(-0.08, -0.005, 0.16, 0.01);
g.fillStyle = '#e6caa0';
g.fillRect(0.08, -0.005, 0.015, 0.01);
g.restore();
g.fillStyle = '#c9cccd';
g.beginPath();
g.arc(0.93, 0.04, 0.04, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f5f4ee';
g.beginPath();
g.arc(0.93, 0.04, 0.032, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#c9cccd';
g.fillRect(0.925, -0.01, 0.01, 0.015);
