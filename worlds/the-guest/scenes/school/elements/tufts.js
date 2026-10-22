// A tuft of dry grass through the snow — the plateau's alfa, pale straw blades bending in the wind (metres, from its
// root). Painted once; it stands in many places (copies) and sways (its layer's wind).
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.55, gust: 0.6, scale: 1 } }, c => {
  c.lineCap = 'round';
  for (let i = 0; i < 26; i++) {
    const a = -0.55 + e.rnd() * 1.1;
    const h = 0.22 + e.rnd() * 0.26;
    c.strokeStyle = e.rnd() < 0.5 ? '#b9a173' : '#a58e63';
    c.lineWidth = 0.008 + e.rnd() * 0.008;
    c.beginPath();
    c.moveTo(a * 0.08, 0);
    c.quadraticCurveTo(a * 0.12, -h * 0.6, a * 0.32 + (e.rnd() - 0.5) * 0.1, -h);
    c.stroke();
  }
});
// snow round its root
g.fillStyle = '#eceff2';
g.beginPath();
g.ellipse(0, 0, 0.14, 0.035, 0, 0, Math.PI * 2);
g.fill();
