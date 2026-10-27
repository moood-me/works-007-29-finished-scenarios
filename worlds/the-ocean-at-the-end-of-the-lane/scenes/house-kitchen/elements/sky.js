// The sky over the garden at dusk, seen through the window: deep blue overhead, going violet, apricot low along the
// hedge where the sun has gone; a first star (screen heights; the horizon at 0.47).
const top = -0.35, bottom = 1.25, w = e.aspect, low = 0.47;
const sky = g.createLinearGradient(0, top, 0, low);
sky.addColorStop(0, '#24335a');
sky.addColorStop(0.45, '#4d5788');
sky.addColorStop(0.8, '#a88aa0');
sky.addColorStop(1, '#e6b394');
g.fillStyle = sky;
g.fillRect(-0.3, top, w + 0.6, low - top);
g.fillStyle = '#c99c88';
g.fillRect(-0.3, low, w + 0.6, bottom - low);
// long thin clouds low down, lit from under by the gone sun
for (let c = 0; c < 5; c++) {
  const cx = -0.2 + (w + 0.4) * e.rnd(), cy = 0.3 + 0.12 * e.rnd(), l = 0.12 + 0.2 * e.rnd();
  const band = g.createLinearGradient(cx - l, 0, cx + l, 0);
  band.addColorStop(0, 'rgba(232, 160, 140, 0)');
  band.addColorStop(0.5, 'rgba(232, 160, 140, 0.45)');
  band.addColorStop(1, 'rgba(232, 160, 140, 0)');
  g.fillStyle = band;
  g.beginPath();
  g.ellipse(cx, cy, l, 0.008 + 0.006 * e.rnd(), 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#f4ecd8';
g.beginPath();
g.arc(w * 0.47, 0.12, 0.0025, 0, Math.PI * 2);
g.fill();
