// A big clay pot with a small clipped tree in it — the garden on the terrace: the pot painted once, the crown a
// layer swaying a little in the wind
g.fillStyle = '#8d5a40';
g.beginPath();
g.moveTo(-0.32, -0.75);
g.lineTo(0.32, -0.75);
g.quadraticCurveTo(0.36, -0.3, 0.2, 0);
g.lineTo(-0.2, 0);
g.quadraticCurveTo(-0.36, -0.3, -0.32, -0.75);
g.closePath();
g.fill();
g.fillStyle = '#9e6a4e';
g.fillRect(-0.36, -0.82, 0.72, 0.09);
g.fillStyle = '#3a2c22';
g.fillRect(-0.03, -1.4, 0.06, 0.62);
e.layer('crown', { pivot: [0, -0.9], wind: { strength: 0.25, gust: 0.3 }, box: [-0.7, -2.4, 0.7, -1.0] }, (g) => {
  for (let i = 0; i < 60; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd()) * 0.5;
    const x = Math.cos(a) * d;
    const y = -1.7 + Math.sin(a) * d * 1.1;
    g.fillStyle = e.rnd() < 0.5 ? '#3d5240' : '#46604a';
    g.beginPath();
    g.ellipse(x, y, 0.09, 0.06, e.rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
  for (let i = 0; i < 7; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd()) * 0.42;
    g.fillStyle = '#d9b04a';
    g.beginPath();
    g.arc(Math.cos(a) * d, -1.7 + Math.sin(a) * d, 0.045, 0, Math.PI * 2);
    g.fill();
  }
});
