// The dawn sky over the mountains: cool lilac-grey overhead going down to a pale rose and then a warm band low on
// the horizon, warmest to the right where the sun has just come up (`sun`: where the light "sun" comes from); long
// thin clouds lit from below
const W = e.aspect, sx = W * 0.9, sy = 0.17;
const grd = g.createLinearGradient(0, -0.35, 0, 1.25);
grd.addColorStop(0, '#8d97b2');
grd.addColorStop(0.15, '#adb1c6');
grd.addColorStop(0.27, '#d6c8d0');
grd.addColorStop(0.34, '#efd6c8');
grd.addColorStop(0.4, '#f4dcc2');
grd.addColorStop(0.6, '#e6d3c6');
grd.addColorStop(1, '#d9cbc4');
g.fillStyle = grd;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
// the warmth round the sun, wide and low
g.save();
g.translate(sx, sy + 0.05);
g.scale(2.2, 1);
const warm = g.createRadialGradient(0, 0, 0, 0, 0, 0.45);
warm.addColorStop(0, 'rgba(255,222,176,0.7)');
warm.addColorStop(0.35, 'rgba(250,206,170,0.3)');
warm.addColorStop(1, 'rgba(245,196,176,0)');
g.fillStyle = warm;
g.fillRect(-0.45, -0.45, 0.9, 0.9);
g.restore();
// long thin clouds, their undersides lit rose
e.layer('clouds', { drift: [0.001, 0], box: [-0.3, -0.35, W + 0.3, 0.4] }, g => {
  const r = e.lib.rnd(5), bw = W + 0.6;
  for (let i = 0; i < 14; i++) {
    const x = -0.3 + r() * bw, y = 0.02 + r() * 0.24, len = 0.25 + r() * 0.5, th = 0.006 + r() * 0.012;
    const lit = 0.4 + 0.6 * (1 - Math.abs(x - sx) / W);
    for (const dx of [-bw, 0, bw]) {
      g.fillStyle = `rgba(${Math.round(196 + 52 * lit)},${Math.round(168 + 36 * lit)},${Math.round(176 + 6 * lit)},${0.35 + 0.25 * r()})`;
      g.beginPath();
      g.ellipse(x + dx, y, len / 2, th, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
});
// the sun, just up
const glow = g.createRadialGradient(sx, sy, 0, sx, sy, 0.1);
glow.addColorStop(0, 'rgba(255,242,214,0.95)');
glow.addColorStop(0.3, 'rgba(255,224,176,0.45)');
glow.addColorStop(1, 'rgba(255,210,170,0)');
g.fillStyle = glow;
g.fillRect(sx - 0.1, sy - 0.1, 0.2, 0.2);
g.fillStyle = '#fff3de';
g.beginPath();
g.arc(sx, sy, 0.02, 0, Math.PI * 2);
g.fill();
e.light(sx, sy, 0.05, '#ffe4bc', 0.7);
e.at(sx, sy, 'sun');
