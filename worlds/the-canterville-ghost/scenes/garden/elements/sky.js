// The night over the Garden of Death: deep blue going black overhead, paler low over the pine woods, a scatter of
// small stars, and the moon — big, cold, crystal — high on the left, a wide pale halo round it in the thin air.
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#05080f');
sky.addColorStop(0.3, '#0d1528');
sky.addColorStop(0.5, '#1e2c48');
sky.addColorStop(0.6, '#33456a');
sky.addColorStop(1, '#2a3858');
g.fillStyle = sky;
g.fillRect(-0.4, -0.4, e.aspect + 0.8, 1.7);
// the stars: fewer and fainter toward the moon and down near the woods
const mx = e.aspect * 0.24;
const my = 0.19;
for (let i = 0; i < 260; i++) {
  const x = -0.4 + e.rnd() * (e.aspect + 0.8);
  const y = -0.35 + e.rnd() * 0.85;
  const near = Math.hypot(x - mx, y - my);
  const a = Math.min(1, near / 0.5) * (1 - Math.max(0, (y - 0.3) / 0.25)) * (0.35 + e.rnd() * 0.65);
  if (a <= 0.02) continue;
  g.fillStyle = `rgba(226,234,255,${a.toFixed(3)})`;
  g.beginPath();
  g.arc(x, y, 0.0012 + e.rnd() * 0.0022, 0, Math.PI * 2);
  g.fill();
}
// the halo, then the disc: a cold white with the faint grey seas on it
const halo = g.createRadialGradient(mx, my, 0, mx, my, 0.42);
halo.addColorStop(0, 'rgba(200,214,240,0.5)');
halo.addColorStop(0.18, 'rgba(150,170,210,0.22)');
halo.addColorStop(1, 'rgba(90,110,160,0)');
g.fillStyle = halo;
g.fillRect(mx - 0.45, my - 0.45, 0.9, 0.9);
const R = 0.062;
const disc = g.createRadialGradient(mx - R * 0.25, my - R * 0.25, 0, mx, my, R);
disc.addColorStop(0, '#fbfcff');
disc.addColorStop(0.8, '#e6ecf6');
disc.addColorStop(1, '#cdd6e6');
g.fillStyle = disc;
g.beginPath();
g.arc(mx, my, R, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(160,172,196,0.16)';
for (const [dx, dy, r] of [[-0.018, -0.012, 0.016], [0.012, 0.01, 0.022], [0.024, -0.02, 0.01], [-0.008, 0.026, 0.012]]) {
  g.beginPath();
  g.arc(mx + dx, my + dy, r, 0, Math.PI * 2);
  g.fill();
}
e.light(mx, my, R * 2.2, '#dfe8ff', 0.8);
e.at(mx, my, 'disc');
