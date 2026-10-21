// The evening sky over the sea, clear: soft blue overhead going down through lilac and rose to a warm gold band on
// the horizon, warmest to the right where the sun hangs low (`sun`: where the light "sun" comes from); long thin
// clouds lit from below; the night a layer of its own over it (its alpha the state's `night`, in animate)
const W = e.aspect, sx = W * 0.8, sy = 0.355;
const grd = g.createLinearGradient(0, -0.35, 0, 1.25);
grd.addColorStop(0, '#7f97bb');
grd.addColorStop(0.18, '#a8b4cc');
grd.addColorStop(0.3, '#d2c3cf');
grd.addColorStop(0.38, '#f0cfba');
grd.addColorStop(0.42, '#f6d8b0');
grd.addColorStop(0.6, '#e9cdb2');
grd.addColorStop(1, '#d9c2b0');
g.fillStyle = grd;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
// the warmth round the sun, wide and low
g.save();
g.translate(sx, sy);
g.scale(2.4, 1);
const warm = g.createRadialGradient(0, 0, 0, 0, 0, 0.5);
warm.addColorStop(0, 'rgba(255,214,150,0.75)');
warm.addColorStop(0.3, 'rgba(250,200,150,0.35)');
warm.addColorStop(1, 'rgba(245,190,160,0)');
g.fillStyle = warm;
g.fillRect(-0.5, -0.5, 1, 1);
g.restore();
// long thin clouds, their undersides lit rose and gold
e.layer('clouds', { drift: [0.0015, 0], box: [-0.3, -0.35, W + 0.3, 0.45] }, g => {
  const r = e.lib.rnd(7), bw = W + 0.6;
  for (let i = 0; i < 16; i++) {
    const x = -0.3 + r() * bw, y = 0.08 + r() * 0.26, len = 0.25 + r() * 0.5, th = 0.006 + r() * 0.012;
    const lit = 0.4 + 0.6 * (1 - Math.abs(x - sx) / W);
    for (const dx of [-bw, 0, bw]) {
      g.fillStyle = `rgba(${Math.round(196 + 50 * lit)},${Math.round(160 + 40 * lit)},${Math.round(160 + 10 * lit)},${0.35 + 0.25 * r()})`;
      g.beginPath();
      g.ellipse(x + dx, y, len / 2, th, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
});
// the sun, low over the sea
e.layer('sun', {}, g => {
  const glow = g.createRadialGradient(sx, sy, 0, sx, sy, 0.12);
  glow.addColorStop(0, 'rgba(255,240,205,0.95)');
  glow.addColorStop(0.3, 'rgba(255,220,160,0.45)');
  glow.addColorStop(1, 'rgba(255,205,150,0)');
  g.fillStyle = glow;
  g.fillRect(sx - 0.12, sy - 0.12, 0.24, 0.24);
  g.fillStyle = '#fff4dc';
  g.beginPath();
  g.arc(sx, sy, 0.022, 0, Math.PI * 2);
  g.fill();
  e.light(sx, sy, 0.05, '#ffe2b0', 0.8, 'glow');
  e.at(sx, sy, 'sun');
});
// the night: deep blue, a last grey light low over the sea
e.layer('night', {}, g => {
  const n = g.createLinearGradient(0, -0.35, 0, 1.25);
  n.addColorStop(0, '#141c33');
  n.addColorStop(0.28, '#26324f');
  n.addColorStop(0.4, '#4a5671');
  n.addColorStop(0.43, '#56617a');
  n.addColorStop(1, '#2f3647');
  g.fillStyle = n;
  g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
});
// the stars, coming out late in the dusk
e.layer('stars', { box: [-0.3, -0.35, W + 0.3, 0.4] }, g => {
  const r = e.lib.rnd(11);
  for (let i = 0; i < 260; i++) {
    const x = -0.3 + r() * (W + 0.6), y = -0.35 + Math.pow(r(), 1.3) * 0.72, s = 0.0012 + r() * r() * 0.003;
    g.fillStyle = `rgba(235,238,255,${0.35 + 0.6 * r()})`;
    g.beginPath();
    g.arc(x, y, s, 0, Math.PI * 2);
    g.fill();
  }
});
