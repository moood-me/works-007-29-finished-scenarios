// The meadow of that country from above (its middle 700 m ahead; y toward us, so a point `d` metres ahead is at
// y = 700 − d): fresh green going grey-green and blue far off, patches of lighter and darker grass, small flowers
// near, and a trodden path that leaves the foreground on the right and winds away toward the Mountains.
const Y = d => 700 - d;
g.fillStyle = '#8ea866';
g.fillRect(-1400, -700, 2800, 1400);
// the far meadow cooler and paler
const far = g.createLinearGradient(0, Y(1400), 0, Y(120));
far.addColorStop(0, '#9fb0a4');
far.addColorStop(1, 'rgba(142,168,102,0)');
g.fillStyle = far;
g.fillRect(-1400, -700, 2800, Y(120) + 700);
// broad patches far and middling
for (let i = 0; i < 160; i++) {
  const x = -600 + e.rnd() * 1200;
  const d = 30 + e.rnd() * e.rnd() * 900;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,146,84,0.35)' : 'rgba(176,186,112,0.3)';
  g.beginPath();
  g.ellipse(x, Y(d), 4 + d * 0.05, 1.5 + d * 0.02, 0, 0, Math.PI * 2);
  g.fill();
}
// near patches and tussocks
for (let i = 0; i < 420; i++) {
  const x = -30 + e.rnd() * 60;
  const d = 3 + e.rnd() * 40;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(108,138,76,0.4)' : 'rgba(170,184,108,0.35)';
  g.beginPath();
  g.ellipse(x, Y(d), 0.2 + e.rnd() * 0.9, 0.12 + e.rnd() * 0.4, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: a ribbon of trodden earth and pale grass along its middle line, narrowing as it goes
const way = [[5.0, 2], [5.3, 8], [5.6, 14], [6.6, 22], [9.5, 36], [16, 70], [30, 150], [60, 320], [100, 600]];
const half = d => 0.55 / (1 + d * 0.012);
g.fillStyle = '#b4a888';
g.beginPath();
way.forEach(([x, d], i) => (i ? g.lineTo(x - half(d), Y(d)) : g.moveTo(x - half(d), Y(d))));
for (let i = way.length - 1; i >= 0; i--) g.lineTo(way[i][0] + half(way[i][1]), Y(way[i][1]));
g.closePath();
g.fill();
// grass along its middle, between the two trodden tracks
g.strokeStyle = 'rgba(132,156,92,0.8)';
g.lineWidth = 0.14;
g.beginPath();
way.forEach(([x, d], i) => (i ? g.lineTo(x, Y(d)) : g.moveTo(x, Y(d))));
g.stroke();
// small flowers in the near grass: white, cream, pale blue, a few yellow
const petals = ['#f4f2ea', '#eee6c4', '#c4d0e4', '#e8d470'];
for (let i = 0; i < 900; i++) {
  const x = -24 + e.rnd() * 48;
  const d = 3 + e.rnd() * 30;
  g.fillStyle = petals[Math.floor(e.rnd() * petals.length)];
  g.beginPath();
  g.arc(x, Y(d), 0.025 + e.rnd() * 0.03, 0, Math.PI * 2);
  g.fill();
}
