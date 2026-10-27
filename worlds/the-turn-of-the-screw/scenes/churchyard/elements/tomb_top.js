// The table tomb's lid seen from above: one thick slab, its inscription worn to a few faint lines, gold lichen spread
// over it, a few fallen lime leaves (x across, y toward us; the near edge at +1.1).
g.fillStyle = '#b0a996';
g.fillRect(-0.52, -1.1, 1.04, 2.2);
g.strokeStyle = 'rgba(80,76,64,0.4)';
g.lineWidth = 0.012;
g.beginPath();
for (let k = 0; k < 7; k++) {
  const y = -0.6 + k * 0.12;
  const half = 0.2 + e.rnd() * 0.15;
  g.moveTo(-half, y);
  g.lineTo(half, y);
}
g.stroke();
for (let i = 0; i < 40; i++) {
  g.fillStyle = e.rnd() < 0.6 ? 'rgba(200,184,100,0.6)' : 'rgba(110,118,80,0.5)';
  g.beginPath();
  g.ellipse(-0.5 + e.rnd() * 1.0, -1.08 + e.rnd() * 2.16, 0.02 + e.rnd() * 0.08, 0.02 + e.rnd() * 0.06, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 6; i++) {
  g.fillStyle = ['#c9a640', '#b58b34', '#d8bb58'][Math.floor(e.rnd() * 3)];
  g.beginPath();
  g.ellipse(-0.45 + e.rnd() * 0.9, -1 + e.rnd() * 2, 0.04, 0.03, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
e.at(-0.36, 0.95, 'corner');
