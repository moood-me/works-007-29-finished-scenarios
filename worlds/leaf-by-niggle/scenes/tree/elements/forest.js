// The forest behind the Tree (a stretch of it 32 m wide, 15 m high, copies stand along): tall trees with soft
// rounded crowns in grey-greens, crown behind crown, their trunks pencil-dark at the foot — the forest as Niggle
// began it on the canvas, now grown.
const tones = ['#71886a', '#7d936f', '#66805f', '#899c78', '#6e8466'];
// back row: taller, paler
for (let i = 0; i < 9; i++) {
  const x = -13 + i * 3.25 + (e.rnd() - 0.5) * 1.2;
  const h = 11 + e.rnd() * 4;
  const r = 2.2 + e.rnd() * 1.2;
  g.fillStyle = '#869a86';
  for (let k = 0; k < 5; k++) {
    g.beginPath();
    g.ellipse(x + (e.rnd() - 0.5) * r, -h + r + e.rnd() * r * 1.4, r * (0.7 + e.rnd() * 0.4), r * (0.8 + e.rnd() * 0.5), 0, 0, Math.PI * 2);
    g.fill();
  }
}
// trunks
g.fillStyle = '#5a5848';
for (let i = 0; i < 14; i++) {
  const x = -14 + e.rnd() * 28;
  g.fillRect(x - 0.15, -5, 0.3, 5.1);
}
// front row: fuller crowns down to the ground's shade
for (let i = 0; i < 12; i++) {
  const x = -13.5 + i * 2.45 + (e.rnd() - 0.5) * 1.0;
  const h = 8 + e.rnd() * 4;
  const r = 1.8 + e.rnd() * 1.1;
  for (let k = 0; k < 6; k++) {
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.beginPath();
    g.ellipse(x + (e.rnd() - 0.5) * r * 1.2, -h + r + e.rnd() * (h - 2 * r), r * (0.6 + e.rnd() * 0.5), r * (0.7 + e.rnd() * 0.5), 0, 0, Math.PI * 2);
    g.fill();
  }
}
// the shade under the trees
const foot = g.createLinearGradient(0, -2.2, 0, 0);
foot.addColorStop(0, 'rgba(70,86,66,0)');
foot.addColorStop(1, 'rgba(70,86,66,0.75)');
g.fillStyle = foot;
g.fillRect(-16, -2.2, 32, 2.3);
