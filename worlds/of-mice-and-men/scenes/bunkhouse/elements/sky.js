// The sky after sundown, seen only through the window and the open door: the deep blue of the evening over the
// ranch, paler and greener toward the hills, a last rose band low in the west; the evening star. Screen heights (the
// horizon at 0.4).
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.42);
sky.addColorStop(0, '#1b2246');
sky.addColorStop(0.45, '#2c3a6c');
sky.addColorStop(0.78, '#5b6f98');
sky.addColorStop(0.93, '#9a9aa8');
sky.addColorStop(1, '#c79a86');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
g.fillStyle = '#c79a86';
g.fillRect(-0.3, 0.42, A + 0.6, 0.9);
// a few long thin clouds, dark against the blue
for (let i = 0; i < 6; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = 0.2 + e.rnd() * 0.14,
    w = 0.1 + e.rnd() * 0.25;
  g.fillStyle = 'rgba(70,72,110,0.45)';
  g.beginPath();
  g.ellipse(x, y, w, 0.005 + e.rnd() * 0.006, 0, 0, Math.PI * 2);
  g.fill();
}
// the evening star and a few first ones
g.fillStyle = 'rgba(255,250,232,0.95)';
g.beginPath();
g.arc(A * 0.66, 0.12, 0.0026, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 24; i++) {
  g.fillStyle = `rgba(230,235,255,${0.3 + e.rnd() * 0.4})`;
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (A + 0.6), -0.3 + e.rnd() * 0.4, 0.0012, 0, Math.PI * 2);
  g.fill();
}
