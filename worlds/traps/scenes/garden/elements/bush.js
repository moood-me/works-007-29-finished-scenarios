// A rose bush by the path: a round green mass dotted with pink and white roses.
g.fillStyle = '#3f5c31';
g.beginPath();
g.ellipse(0, -0.5, 0.7, 0.55, 0, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 90; i++) {
  const t = e.rnd() * Math.PI * 2;
  const r = Math.sqrt(e.rnd());
  g.fillStyle = e.rnd() < 0.5 ? '#4f6f3a' : '#5f8044';
  g.beginPath();
  g.arc(Math.cos(t) * r * 0.62, -0.5 + Math.sin(t) * r * 0.48, 0.06 + e.rnd() * 0.05, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 22; i++) {
  const t = e.rnd() * Math.PI * 2;
  const r = Math.sqrt(e.rnd());
  g.fillStyle = e.rnd() < 0.7 ? '#dc7d93' : '#f1e9e0';
  g.beginPath();
  g.arc(Math.cos(t) * r * 0.6, -0.55 + Math.sin(t) * r * 0.42, 0.045, 0, Math.PI * 2);
  g.fill();
}
