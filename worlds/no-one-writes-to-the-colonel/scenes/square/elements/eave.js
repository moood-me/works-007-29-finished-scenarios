// The post office's eave seen from below (metres; laid face down from the wall at y 0 out to −1.3): the underside of
// the corrugated zinc, rusted along its ribs, on four rough rafters, the fascia board along its edge.
g.fillStyle = '#8c8a84';
g.fillRect(-3.75, -1.32, 7.5, 1.34);
for (let x = -3.75; x < 3.75; x += 0.076) {
  g.fillStyle = 'rgba(60,58,54,0.35)';
  g.fillRect(x, -1.32, 0.026, 1.34);
}
for (let i = 0; i < 30; i++) {
  g.fillStyle = 'rgba(150,86,50,0.35)';
  g.fillRect(-3.75 + e.rnd() * 7.5, -1.3 + e.rnd() * 1.2, 0.05 + e.rnd() * 0.3, 0.05 + e.rnd() * 0.15);
}
g.fillStyle = '#5c4a3a';
for (const x of [-3.6, -1.2, 1.2, 3.55]) g.fillRect(x - 0.05, -1.3, 0.1, 1.3);
g.fillStyle = '#4e3e30';
g.fillRect(-3.75, -1.32, 7.5, 0.08);
