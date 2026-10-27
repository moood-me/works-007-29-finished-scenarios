// The morning sky over the street (screen heights): seen only above the houses — on a screen held upright, or one
// that looks up: a clear pale blue going warm and hazy toward the roofs, the Sun's glow off to the right behind the
// viewer, a few small high clouds.
const A = e.aspect;
const sky = g.createLinearGradient(0, -3, 0, 0.5);
sky.addColorStop(0, '#7fa5c9');
sky.addColorStop(0.6, '#a9c3d6');
sky.addColorStop(0.9, '#dfd9c8');
sky.addColorStop(1, '#f1dcb6');
g.fillStyle = sky;
g.fillRect(-0.3, -3, A + 0.6, 4.25);
const glow = g.createRadialGradient(A + 0.5, -0.4, 0, A + 0.5, -0.4, 1.6);
glow.addColorStop(0, 'rgba(255,238,205,0.8)');
glow.addColorStop(1, 'rgba(255,230,190,0)');
g.fillStyle = glow;
g.fillRect(-0.3, -3, A + 0.6, 4.25);
for (let i = 0; i < 7; i++) {
  const x = -0.2 + e.rnd() * (A + 0.4);
  const y = -2.4 + e.rnd() * 2.0;
  const w = 0.1 + e.rnd() * 0.22;
  g.fillStyle = `rgba(255,248,236,${0.3 + e.rnd() * 0.3})`;
  g.beginPath();
  g.ellipse(x, y, w, w * 0.18, 0, 0, Math.PI * 2);
  g.fill();
}
