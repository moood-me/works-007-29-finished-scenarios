// The Mountains, far beyond everything (metres about their foot, 8 km off): ridge behind ridge in blue-greys, the
// highest crowned with snow that takes the light — at `glow` the snow burns rose-gold.
const k = e.state.glow ?? 0;
const snow = k > 0.5 ? '#fbe2cc' : k > 0.15 ? '#fbf0e4' : '#f8f9f8';
// a ridge: its foot at y 0, its line through the peaks (x, height)
const ridge = (pts, fill) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(pts[0][0], 0.5);
  for (const [x, h] of pts) g.lineTo(x, -h);
  g.lineTo(pts[pts.length - 1][0], 0.5);
  g.closePath();
  g.fill();
};
// a range of peaks along x0…x1: its line, jagged, the peaks where `peaks` says
const range = (x0, x1, base, peaks, rough) => {
  const pts = [];
  for (let x = x0; x <= x1; x += 90) {
    let h = base;
    for (const [px, ph, pw] of peaks) h = Math.max(h, ph * Math.max(0, 1 - Math.abs(x - px) / pw));
    h += (e.rnd() - 0.5) * rough;
    pts.push([x, Math.max(0, h)]);
  }
  return pts;
};
// the farthest, palest range
const far = range(-9000, 9000, 700, [[-3800, 1500, 2600], [900, 1800, 2400], [4200, 1650, 2000], [7600, 1400, 2200]], 60);
ridge(far, '#aebccb');
// its snow: the upper part of each peak, clipped to the ridge
g.save();
g.beginPath();
g.moveTo(far[0][0], 0.5);
for (const [x, h] of far) g.lineTo(x, -h);
g.lineTo(far[far.length - 1][0], 0.5);
g.closePath();
g.clip();
g.fillStyle = snow;
g.beginPath();
g.moveTo(-9000, -1150);
for (let x = -9000; x <= 9000; x += 120) g.lineTo(x, -1150 + Math.sin(x * 0.011) * 70 + (e.rnd() - 0.5) * 90);
g.lineTo(9000, -2000);
g.lineTo(-9000, -2000);
g.closePath();
g.fill();
// the snow's shaded sides: soft grey-blue streaks down from the peaks
g.fillStyle = 'rgba(150,166,186,0.45)';
for (const [px, ph] of [[-3800, 1500], [900, 1800], [4200, 1650], [7600, 1400]]) {
  g.beginPath();
  g.moveTo(px, -ph);
  g.lineTo(px + 380, -ph + 420);
  g.lineTo(px + 120, -ph + 470);
  g.closePath();
  g.fill();
}
g.restore();
// a nearer, darker range below it, snow only in its gullies
const near = range(-9000, 9000, 380, [[-1600, 900, 1700], [2600, 1020, 1500], [6000, 820, 1600]], 50);
ridge(near, '#8c9db0');
g.strokeStyle = 'rgba(240,244,246,0.55)';
g.lineWidth = 22;
for (const [px, ph] of [[-1600, 900], [2600, 1020], [6000, 820]]) {
  for (let j = 0; j < 4; j++) {
    const x = px + (j - 1.5) * 120;
    g.beginPath();
    g.moveTo(x, -ph + 60 + j * 20);
    g.lineTo(x + (e.rnd() - 0.5) * 120, -ph + 260 + e.rnd() * 120);
    g.stroke();
  }
}
