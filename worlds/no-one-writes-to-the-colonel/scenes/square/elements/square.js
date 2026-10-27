// The square from above (metres; its middle 6.5 m ahead, y toward the viewer — the embankment's edge is y −8): beaten
// sandy earth soaked dark by the rain, ruts of the carts going down to the landing stage, the paler worn way along
// the houses, the big leaves of the almond trees fallen red and yellow, grass in the corners. The puddles are a
// mirror of their own (puddles).
g.fillStyle = '#857560';
g.fillRect(-30, -8, 60, 16);
for (let i = 0; i < 520; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(98,84,66,0.24)' : 'rgba(150,134,108,0.22)';
  g.beginPath();
  g.ellipse(-30 + e.rnd() * 60, -8 + e.rnd() * 16, 0.3 + e.rnd() * 1.4, 0.15 + e.rnd() * 0.6, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the worn way along the post office and the barracks
g.fillStyle = 'rgba(160,144,116,0.3)';
g.beginPath();
g.ellipse(-4, -0.2, 6, 1.4, -0.12, 0, Math.PI * 2);
g.fill();
// the carts' ruts down to the landing stage
g.strokeStyle = 'rgba(70,58,44,0.55)';
g.lineWidth = 0.09;
for (const off of [-0.7, 0.7]) {
  g.beginPath();
  g.moveTo(-14 + off, 5);
  g.bezierCurveTo(-5 + off, 2, 1 + off, -2, 3.4 + off * 0.8, -8);
  g.stroke();
}
// footprints, bare and shod, going in to the post office
g.fillStyle = 'rgba(64,52,40,0.22)';
for (let i = 0; i < 40; i++) {
  const t = e.rnd();
  const x = -1 - t * 4 + (i % 2) * 0.18;
  const y = 3 - t * 3.5;
  g.beginPath();
  g.ellipse(x, y, 0.05, 0.12, -0.6, 0, Math.PI * 2);
  g.fill();
}
// the stone kerb along the embankment
g.fillStyle = '#8e8676';
g.fillRect(-30, -8, 60, 0.22);
g.fillStyle = 'rgba(50,44,36,0.4)';
for (let x = -30; x < 30; x += 0.6 + e.rnd() * 0.4) g.fillRect(x, -8, 0.03, 0.22);
// grass in the corners and along the walls
for (let i = 0; i < 260; i++) {
  const side = e.rnd() < 0.5 ? -1 : 1;
  const x = side * (9 + e.rnd() * 21);
  const y = -8 + e.rnd() * 16;
  g.fillStyle = e.rnd() < 0.5 ? '#5a6e36' : '#6c7e40';
  g.beginPath();
  g.ellipse(x, y, 0.12 + e.rnd() * 0.3, 0.06 + e.rnd() * 0.12, 0, 0, Math.PI * 2);
  g.fill();
}
// the almond trees' fallen leaves under them
const leafCols = ['#b0442c', '#c8862e', '#8e5a2a', '#a8a038', '#c45a30'];
for (const [tx, ty, n] of [[-1.6, -6.9, 70], [-10.5, -6.1, 60], [14, -7.3, 60], [2, -2, 30], [-6, 2, 20]]) {
  for (let i = 0; i < n; i++) {
    const a = e.rnd() * 6.28;
    const r = Math.sqrt(e.rnd()) * 4;
    g.save();
    g.translate(tx + Math.cos(a) * r, ty + Math.sin(a) * r * 0.8);
    g.rotate(e.rnd() * 6.28);
    g.fillStyle = leafCols[Math.floor(e.rnd() * leafCols.length)];
    g.beginPath();
    g.ellipse(0, 0, 0.13, 0.07, 0, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
}
