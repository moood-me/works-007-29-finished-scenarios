// What the square's buildings share.
// wash(g, e, x0, x1, h, paint, base): a limewashed wall over x0…x1, h metres high (metres from its foot, up
// negative) — the wash in `paint` gone patchy and grey with the rains, a band of `base` colour to 0.9 m, the damp
// rising into it and flaking it off to the adobe, stains running down from the roof. The caller clips its openings.
function wash(g, e, x0, x1, h, paint, base) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -h - 0.02, w, h + 0.04);
  g.clip();
  g.fillStyle = paint;
  g.fillRect(x0, -h - 0.02, w, h + 0.04);
  for (let i = 0; i < w * 10; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,140,120,0.18)' : 'rgba(250,246,236,0.22)';
    g.fillRect(x0 + e.rnd() * w, -h + e.rnd() * h, 0.3 + e.rnd() * 0.8, 0.05 + e.rnd() * 0.14);
  }
  for (let i = 0; i < w * 1.4; i++) {
    const x = x0 + e.rnd() * w;
    const len = 0.5 + e.rnd() * 1.6;
    const gr = g.createLinearGradient(0, -h, 0, -h + len);
    gr.addColorStop(0, 'rgba(110,104,92,0.42)');
    gr.addColorStop(1, 'rgba(110,104,92,0)');
    g.fillStyle = gr;
    g.beginPath();
    g.moveTo(x - 0.14, -h);
    g.quadraticCurveTo(x - 0.05, -h + len * 0.6, x, -h + len);
    g.quadraticCurveTo(x + 0.06, -h + len * 0.6, x + 0.1 + e.rnd() * 0.12, -h);
    g.fill();
  }
  g.fillStyle = base;
  g.beginPath();
  g.moveTo(x0, 0.02);
  g.lineTo(x0, -0.9);
  for (let x = x0; x <= x1 + 0.05; x += 0.05) g.lineTo(x, -0.9 - (e.rnd() < 0.12 ? e.rnd() * 0.04 : 0));
  g.lineTo(x1, 0.02);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(40,36,32,0.18)';
  g.fillRect(x0, -0.92, w, 0.03);
  for (let i = 0; i < w * 2.5; i++) {
    g.fillStyle = 'rgba(170,138,104,0.8)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -0.1 - e.rnd() * 0.7, 0.04 + e.rnd() * 0.12, 0.02 + e.rnd() * 0.06, e.rnd() - 0.5, 0, Math.PI * 2);
    g.fill();
  }
  // the rain's splash darkening the wall's foot
  const damp = g.createLinearGradient(0, 0, 0, -0.6);
  damp.addColorStop(0, 'rgba(60,52,44,0.5)');
  damp.addColorStop(1, 'rgba(60,52,44,0)');
  g.fillStyle = damp;
  g.fillRect(x0, -0.6, w, 0.62);
  g.restore();
}
// tiles(g, e, x0, x1, y0, y1): a roof of old clay tiles seen from the front between y0 (its eave) and y1 (its ridge),
// the ridge narrowing to x0 + inset…x1 − inset (a hipped roof) — rows of half-round tiles, wet and dark, moss.
function tiles(g, e, x0, x1, y0, y1, inset) {
  g.save();
  g.beginPath();
  g.moveTo(x0, y0);
  g.lineTo(x1, y0);
  g.lineTo(x1 - inset, y1);
  g.lineTo(x0 + inset, y1);
  g.closePath();
  g.clip();
  g.fillStyle = '#7a4a36';
  g.fillRect(x0, y1, x1 - x0, y0 - y1);
  for (let y = y0; y > y1; y -= 0.16) {
    for (let x = x0 + (Math.round((y0 - y) / 0.16) % 2) * 0.09; x < x1; x += 0.18) {
      g.fillStyle = e.rnd() < 0.3 ? '#8a5640' : e.rnd() < 0.5 ? '#6e4232' : '#7f4e3a';
      g.beginPath();
      g.ellipse(x, y - 0.08, 0.085, 0.09, 0, Math.PI, 0);
      g.fill();
      g.fillStyle = 'rgba(40,24,18,0.45)';
      g.fillRect(x - 0.085, y - 0.01, 0.17, 0.02);
    }
  }
  for (let i = 0; i < (x1 - x0) * 3; i++) {
    g.fillStyle = 'rgba(86,98,58,0.5)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * (x1 - x0), y0 - e.rnd() * (y0 - y1), 0.06 + e.rnd() * 0.15, 0.03 + e.rnd() * 0.05, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
}
return { wash, tiles };
