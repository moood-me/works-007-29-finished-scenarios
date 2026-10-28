// Feather grass: a few tall stems, each ending in a long silvery plume that catches the low light, swaying more than
// the grass round it (a layer; copies)
e.layer('plumes', { pivot: [0, 0], wind: { strength: 0.8, gust: 0.6, scale: 6 }, box: [-0.6, -0.95, 0.6, 0.02] }, (g) => {
  g.lineCap = 'round';
  for (let i = 0; i < 9; i++) {
    const x = (e.rnd() - 0.5) * 0.18;
    const h = 0.45 + e.rnd() * 0.25;
    const lean = 0.06 + e.rnd() * 0.14;
    const side = e.rnd() < 0.5 ? -1 : 1;
    const tx = x + lean * side;
    g.strokeStyle = '#9e8a5c';
    g.lineWidth = 0.006;
    g.beginPath();
    g.moveTo(x, 0);
    g.quadraticCurveTo(x, -h * 0.7, tx, -h);
    g.stroke();
    // the plume: a long soft feather drooping from the stem's tip, a pale haze about a thinner core
    const px = tx + side * 0.3;
    const py = -h + 0.12;
    g.strokeStyle = 'rgba(238, 230, 214, 0.3)';
    g.lineWidth = 0.035;
    g.beginPath();
    g.moveTo(tx, -h);
    g.quadraticCurveTo(tx + side * 0.18, -h - 0.06, px, py);
    g.stroke();
    g.strokeStyle = 'rgba(244, 238, 226, 0.8)';
    g.lineWidth = 0.008;
    g.beginPath();
    g.moveTo(tx, -h);
    g.quadraticCurveTo(tx + side * 0.18, -h - 0.06, px, py);
    g.stroke();
  }
});
