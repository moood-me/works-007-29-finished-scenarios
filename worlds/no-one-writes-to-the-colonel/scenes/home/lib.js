// What the house's walls and the yard share.
// limewash(g, e, x0, x1, h): a wall of the house over x0…x1, h metres high (metres from its foot, up negative) — old
// limewash gone grey-white over adobe, a faded sea-green band to a metre up, flaking where the damp rises, water stains
// running down from the roof. The caller clips its openings itself.
function limewash(g, e, x0, x1, h) {
  const w = x1 - x0;
  g.fillStyle = '#e4dfd2';
  g.fillRect(x0, -h - 0.02, w, h + 0.04);
  // the wash laid on unevenly: broad paler and greyer strokes
  for (let i = 0; i < w * 9; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(205,198,182,0.35)' : 'rgba(246,243,234,0.4)';
    g.fillRect(x0 + e.rnd() * w, -h + e.rnd() * h, 0.3 + e.rnd() * 0.7, 0.05 + e.rnd() * 0.12);
  }
  // the stains running down from the roof
  for (let i = 0; i < w * 1.2; i++) {
    const x = x0 + e.rnd() * w;
    const len = 0.4 + e.rnd() * 1.1;
    const gr = g.createLinearGradient(0, -h, 0, -h + len);
    gr.addColorStop(0, 'rgba(150,132,104,0.38)');
    gr.addColorStop(1, 'rgba(150,132,104,0)');
    g.fillStyle = gr;
    g.beginPath();
    g.moveTo(x - 0.12, -h);
    g.quadraticCurveTo(x - 0.05, -h + len * 0.6, x, -h + len);
    g.quadraticCurveTo(x + 0.06, -h + len * 0.6, x + 0.1 + e.rnd() * 0.1, -h);
    g.fill();
  }
  // the sea-green band and its ragged top
  g.fillStyle = '#7fa79b';
  g.beginPath();
  g.moveTo(x0, 0.02);
  g.lineTo(x0, -0.98);
  for (let x = x0; x <= x1 + 0.05; x += 0.05) g.lineTo(x, -0.98 - (e.rnd() < 0.15 ? e.rnd() * 0.04 : 0));
  g.lineTo(x1, 0.02);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(70,110,100,0.25)';
  g.fillRect(x0, -1.0, w, 0.03);
  // the damp rising and the paint flaked off to the adobe
  for (let i = 0; i < w * 2.5; i++) {
    const x = x0 + e.rnd() * w;
    const y = -0.1 - e.rnd() * 0.75;
    g.fillStyle = 'rgba(176,140,104,0.85)';
    g.beginPath();
    g.ellipse(x, y, 0.04 + e.rnd() * 0.12, 0.02 + e.rnd() * 0.06, e.rnd() - 0.5, 0, Math.PI * 2);
    g.fill();
  }
  const damp = g.createLinearGradient(0, 0, 0, -0.5);
  damp.addColorStop(0, 'rgba(84,72,58,0.45)');
  damp.addColorStop(1, 'rgba(84,72,58,0)');
  g.fillStyle = damp;
  g.fillRect(x0, -0.5, w, 0.52);
}
// mud(g, e, x0, y0, x1, y1): the yard's ground from above — wet dark earth, puddles holding the grey sky, tufts of
// grass, fallen leaves.
function mud(g, e, x0, y0, x1, y1) {
  const w = x1 - x0;
  const d = y1 - y0;
  g.fillStyle = '#5a4a3a';
  g.fillRect(x0, y0, w, d);
  for (let i = 0; i < w * d * 0.8; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(74,60,46,0.6)' : 'rgba(110,92,70,0.4)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, y0 + e.rnd() * d, 0.3 + e.rnd() * 1.2, 0.2 + e.rnd() * 0.6, e.rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < w * d * 0.05; i++) {
    g.fillStyle = 'rgba(168,176,178,0.8)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, y0 + e.rnd() * d, 0.3 + e.rnd() * 0.9, 0.12 + e.rnd() * 0.3, e.rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < w * d * 0.6; i++) {
    const x = x0 + e.rnd() * w;
    const y = y0 + e.rnd() * d;
    g.fillStyle = e.rnd() < 0.5 ? '#4f6a32' : '#5f7a3a';
    g.beginPath();
    g.ellipse(x, y, 0.12 + e.rnd() * 0.25, 0.08 + e.rnd() * 0.12, 0, 0, Math.PI * 2);
    g.fill();
  }
}
return { limewash, mud };
