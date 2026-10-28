// Tules at the water's edge: a sheaf of green-gold blades, bending in the wind (layer `blades`)
const A = e.anim;
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.45, gust: 0.5, scale: 0.5 } }, g => {
  g.lineCap = 'round';
  for (let i = 0; i < 34; i++) {
    const x = (A.hash(i, 1) - 0.5) * 2.2, h = 0.7 + 0.7 * A.hash(i, 2), lean = (A.hash(i, 3) - 0.5) * 0.5;
    g.strokeStyle = A.hash(i, 4) < 0.3 ? '#a59a5a' : A.hash(i, 4) < 0.7 ? '#7d8645' : '#66713b';
    g.lineWidth = 0.035;
    g.beginPath();
    g.moveTo(x, 0.05);
    g.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    g.stroke();
  }
});
