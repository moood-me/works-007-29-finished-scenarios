// The park rising beyond the water to the house and on up to the woods, seen from above (x across, y toward the
// viewer; the near edge at y 120 is the far shore): grass in greens laid unevenly, paler and warmer down by the water,
// the lawn before the house a lighter sweep, the shade of the tree clumps softly under them
const L = e.lib, r = L.rand(29);
const all = new Path2D();
all.rect(-350, -120, 700, 240);
const base = g.createLinearGradient(0, -120, 0, 120);
base.addColorStop(0, '#8fa57a');
base.addColorStop(0.6, '#a2b583');
base.addColorStop(1, '#b4c08d');
g.fillStyle = base;
g.fill(all);
for (let i = 0; i < 14; i++) {
  const x = -350 + 700 * r(), y = -120 + 240 * r(), rad = 30 + 60 * r();
  const gr = g.createRadialGradient(x, y, 0, x, y, rad), c = r() < 0.5 ? '120,146,100' : '190,200,150';
  gr.addColorStop(0, `rgba(${c},0.35)`);
  gr.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = gr;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}
// the lawn sweeping down from the terrace to the water (the house stands at y −30, across −2)
const lawn = new Path2D();
lawn.ellipse(-2, -2, 46, 34, 0, 0, Math.PI * 2);
const lg = g.createRadialGradient(-2, -6, 4, -2, -2, 46);
lg.addColorStop(0, 'rgba(198,206,150,0.55)');
lg.addColorStop(1, 'rgba(198,206,150,0)');
g.fillStyle = lg;
g.fill(lawn);
// the shore: a pale strip of trodden grass and gravel along the water's edge
const shore = g.createLinearGradient(0, 108, 0, 120);
shore.addColorStop(0, 'rgba(206,200,160,0)');
shore.addColorStop(1, 'rgba(206,200,160,0.7)');
g.fillStyle = shore;
g.fillRect(-350, 108, 700, 12);
