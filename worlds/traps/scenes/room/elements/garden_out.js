// The garden at night beyond the window: the far hills a shade darker than the sky, the chestnut's crown black over
// the lawn, the lanterns on their cord gone out, the hedge.
g.fillStyle = '#26304e';
g.beginPath();
g.moveTo(-3.6, -1.4);
for (let x = -3.6; x <= 3.6; x += 0.3) g.lineTo(x, -1.55 - Math.sin(x * 0.9 + 1) * 0.22 - Math.sin(x * 2.3) * 0.07);
g.lineTo(3.6, 0.1);
g.lineTo(-3.6, 0.1);
g.closePath();
g.fill();
g.fillStyle = '#26332e';
g.fillRect(-3.6, -0.8, 7.2, 0.9);
g.fillStyle = '#18221c';
g.beginPath();
g.moveTo(-3.6, -0.5);
for (let x = -3.6; x <= 3.6; x += 0.2) g.lineTo(x, -1.05 - e.rnd() * 0.05);
g.lineTo(3.6, -0.5);
g.closePath();
g.fill();
// the chestnut: trunk and crown, one dark mass with a lighter edge where the moon catches it
g.fillStyle = '#141814';
g.fillRect(-2.9, -2.4, 0.3, 1.9);
g.beginPath();
for (let i = 0; i < 30; i++) {
  const t = e.rnd() * Math.PI * 2;
  const r = Math.sqrt(e.rnd());
  const x = -3.0 + Math.cos(t) * r * 2.2;
  const y = -3.4 + Math.sin(t) * r * 1.3;
  const w = 0.5 + e.rnd() * 0.4;
  g.moveTo(x + w, y);
  g.ellipse(x, y, w, w * 0.75, 0, 0, Math.PI * 2);
}
g.fill();
g.fillStyle = 'rgba(120, 140, 170, 0.25)';
for (let i = 0; i < 12; i++) {
  const t = -Math.PI * (0.15 + e.rnd() * 0.7);
  const x = -3.0 + Math.cos(t) * 2.0;
  const y = -3.4 + Math.sin(t) * 1.25;
  g.beginPath();
  g.ellipse(x, y, 0.22, 0.1, t, 0, Math.PI * 2);
  g.fill();
}
// the dead lanterns on their cord
g.strokeStyle = '#0e100e';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-2.4, -2.3);
g.quadraticCurveTo(0, -1.9, 2.6, -2.35);
g.stroke();
g.fillStyle = '#2a2a30';
for (let i = 0; i < 5; i++) {
  const x = -1.9 + i * 1.0;
  const t = (x + 2.4) / 5.0;
  const y = (1 - t) * (1 - t) * -2.3 + 2 * t * (1 - t) * -1.9 + t * t * -2.35 + 0.17;
  g.beginPath();
  g.ellipse(x, y, 0.09, 0.12, 0, 0, Math.PI * 2);
  g.fill();
}
