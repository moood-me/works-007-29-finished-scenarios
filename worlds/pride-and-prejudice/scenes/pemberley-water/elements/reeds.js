// A clump of reeds at the water's edge: tall blades, a little bowed, some with brown heads; it sways about its foot
// (its copies stand along the bank's left end, each swaying in its own time)
const r = e.kit.brush.rand(71);
e.layer('reeds', { wind: { strength: 0.12, gust: 0.5, scale: 3 }, pivot: [0, 0.05] }, g2 => {
  const blades = new Path2D(), heads = new Path2D();
  for (let i = 0; i < 16; i++) {
    const x = (r() - 0.5) * 0.7, h = 0.75 + 0.6 * r(), lean = (r() - 0.3) * 0.25;
    blades.moveTo(x, 0.05);
    blades.quadraticCurveTo(x + lean * 0.2, -h * 0.6, x + lean, -h);
    if (r() < 0.35) {
      heads.moveTo(x + lean + 0.025, -h + 0.08);
      heads.ellipse(x + lean, -h + 0.08, 0.025, 0.09, lean, 0, Math.PI * 2);
    }
  }
  g2.strokeStyle = '#8c9a64';
  g2.lineWidth = 0.014;
  g2.lineCap = 'round';
  g2.stroke(blades);
  g2.fillStyle = '#8a6e4c';
  g2.fill(heads);
});
