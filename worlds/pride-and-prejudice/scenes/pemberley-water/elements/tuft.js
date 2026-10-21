// A tuft of uncut grass at the lawn's edge nearest the eye, with a buttercup or two: blades in three greens; it bends
// in the wind about its foot (its copies along the foreground, never in step)
const r = e.kit.brush.rand(73);
e.layer('blades', { wind: { strength: 0.06, gust: 0.5, scale: 2 }, pivot: [0, 0.02] }, g2 => {
  const greens = ['#5f7748', '#7d9358', '#a0b26f'];
  for (let t = 0; t < 3; t++) {
    const p = new Path2D();
    for (let i = 0; i < 22; i++) {
      const x = (r() - 0.5) * 0.5, h = 0.18 + 0.26 * r() * (1 - Math.abs(x)), lean = (r() - 0.5) * 0.16;
      p.moveTo(x, 0.02);
      p.quadraticCurveTo(x + lean * 0.2, -h * 0.55, x + lean, -h);
    }
    g2.strokeStyle = greens[t];
    g2.lineWidth = 0.008;
    g2.lineCap = 'round';
    g2.stroke(p);
  }
  const stems = new Path2D(), cups = new Path2D();
  for (let i = 0; i < 2; i++) {
    const x = (r() - 0.5) * 0.3, h = 0.3 + 0.12 * r();
    stems.moveTo(x, 0.02);
    stems.quadraticCurveTo(x + 0.02, -h * 0.5, x + 0.03, -h);
    cups.moveTo(x + 0.044, -h);
    cups.arc(x + 0.03, -h, 0.014, 0, Math.PI * 2);
  }
  g2.strokeStyle = '#6f8650';
  g2.lineWidth = 0.004;
  g2.stroke(stems);
  g2.fillStyle = '#e6c95a';
  g2.fill(cups);
});
