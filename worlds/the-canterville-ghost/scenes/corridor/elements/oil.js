// The smashed bottle on the floor, from above (1 m by 0.8 m), when `bottle` is "smashed": a dark splash of oil soaked
// into the boards, shards of brown glass, the paper label torn.
if (e.state.bottle === 'smashed') {
  g.fillStyle = 'rgba(30,22,10,0.72)';
  g.beginPath();
  g.moveTo(-0.3, -0.05);
  g.bezierCurveTo(-0.28, -0.25, 0.05, -0.28, 0.16, -0.16);
  g.bezierCurveTo(0.34, -0.2, 0.42, 0.02, 0.28, 0.12);
  g.bezierCurveTo(0.2, 0.26, -0.08, 0.24, -0.16, 0.14);
  g.bezierCurveTo(-0.36, 0.16, -0.38, 0.04, -0.3, -0.05);
  g.closePath();
  g.fill();
  g.fillStyle = '#6a3a14';
  for (let i = 0; i < 14; i++) {
    const x = -0.4 + e.rnd() * 0.8;
    const y = -0.3 + e.rnd() * 0.6;
    const r = 0.012 + e.rnd() * 0.03;
    g.beginPath();
    g.moveTo(x, y - r);
    g.lineTo(x + r * 0.9, y + r * 0.4);
    g.lineTo(x - r * 0.6, y + r * 0.7);
    g.closePath();
    g.fill();
  }
  g.fillStyle = '#cfc29a';
  g.fillRect(0.08, 0.02, 0.06, 0.04);
}
