// A tuft of alfa grass between the stones — pale straw blades bending in the wind (metres, from its root). Painted once;
// it stands in many places (copies) and sways (its layer's wind).
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.6, gust: 0.6, scale: 1 } }, c => {
  c.lineCap = 'round';
  for (let i = 0; i < 28; i++) {
    const a = -0.55 + e.rnd() * 1.1;
    const h = 0.24 + e.rnd() * 0.28;
    c.strokeStyle = e.rnd() < 0.5 ? '#b7a072' : '#9f8a60';
    c.lineWidth = 0.008 + e.rnd() * 0.008;
    c.beginPath();
    c.moveTo(a * 0.08, 0);
    c.quadraticCurveTo(a * 0.12, -h * 0.6, a * 0.34 + (e.rnd() - 0.5) * 0.1, -h);
    c.stroke();
  }
});
// the earth round its root
g.fillStyle = '#9b8f7a';
g.beginPath();
g.ellipse(0, 0, 0.13, 0.03, 0, 0, Math.PI * 2);
g.fill();
