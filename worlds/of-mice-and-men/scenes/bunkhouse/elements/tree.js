// A eucalyptus by the cookhouse, seen through the small window: a tall ragged dark shape against the evening, its
// leaves hanging in long loose clumps (a layer swaying in the evening air). Metres, its foot at the middle.
g.fillStyle = '#2e2a2a';
g.beginPath();
g.moveTo(-0.35, 0);
g.bezierCurveTo(-0.3, -4, -0.6, -8, -0.2, -12);
g.lineTo(0.15, -12);
g.bezierCurveTo(0.2, -8, 0.4, -4, 0.35, 0);
g.closePath();
g.fill();
g.strokeStyle = '#2e2a2a';
g.lineWidth = 0.14;
for (const [x, y, dx, dy] of [[-0.3, -7, -2.6, -2.4], [0.1, -9, 2.4, -2.6], [-0.2, -11, -1.6, -3.4], [0.2, -5.5, 2.2, -1.2]]) {
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + dx * 0.4, y + dy * 0.8, x + dx, y + dy);
  g.stroke();
}
e.layer('crown', { pivot: [0, -6], wind: { strength: 0.25, gust: 0.4 } }, g => {
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * Math.PI * 2, rr = Math.sqrt(e.rnd());
    const x = Math.cos(a) * 3.2 * rr, y = -11 + Math.sin(a) * 3.8 * rr;
    g.fillStyle = e.rnd() < 0.5 ? '#343a36' : '#2a302e';
    g.beginPath();
    g.ellipse(x, y, 0.35 + e.rnd() * 0.3, 0.9 + e.rnd() * 0.6, (e.rnd() - 0.5) * 0.5, 0, Math.PI * 2);
    g.fill();
  }
});
