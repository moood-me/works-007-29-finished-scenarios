// The old almond tree in the garden (about 5 m), seen through the little window: a dark crooked trunk, twisted
// branches — and all of it white with blossom tonight, the flowers thick on every twig. Its crown stirs in the wind.
g.fillStyle = '#2e2620';
g.beginPath();
g.moveTo(-0.25, 0);
g.bezierCurveTo(-0.2, -0.9, -0.35, -1.6, -0.1, -2.2);
g.lineTo(0.15, -2.2);
g.bezierCurveTo(0.05, -1.5, 0.25, -0.8, 0.28, 0);
g.closePath();
g.fill();
g.strokeStyle = '#2e2620';
g.lineCap = 'round';
for (const [x, y, w] of [[-2.0, -3.6, 0.12], [1.9, -3.9, 0.12], [-0.6, -4.9, 0.1], [0.8, -4.6, 0.1], [-1.4, -2.7, 0.08]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(0, -2.1);
  g.quadraticCurveTo(x * 0.4, -2.9, x, y);
  g.stroke();
}
e.layer('blossom', { pivot: [0, -2.2], wind: 0.12 }, c => {
  const tones = ['#f4f0ea', '#ece4e4', '#fbf8f2', '#e4d8dc', '#f2e8ea'];
  for (let i = 0; i < 260; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd());
    c.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.beginPath();
    c.arc(Math.cos(a) * d * 2.4, -3.6 + Math.sin(a) * d * 1.6, 0.12 + e.rnd() * 0.22, 0, Math.PI * 2);
    c.fill();
  }
});
e.at(0, -3.6, 'blossom');
