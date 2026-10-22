// A branch of a tree standing off to the left, hanging into the top of the view near the viewer: a dark bough and
// sprays of leaves, each spray a layer swaying in the wind
g.strokeStyle = '#241f1c';
g.lineCap = 'round';
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-1.5, -4.6);
g.quadraticCurveTo(0.2, -4.1, 1.6, -3.9);
g.quadraticCurveTo(2.4, -3.8, 3.0, -3.55);
g.stroke();
g.lineWidth = 0.06;
g.beginPath();
g.moveTo(0.4, -4.1);
g.quadraticCurveTo(0.8, -3.6, 0.9, -3.2);
g.moveTo(1.9, -3.85);
g.quadraticCurveTo(2.1, -3.4, 2.1, -3.0);
g.stroke();
const sprays = [['s1', -0.6, -4.3, 0.7], ['s2', 0.9, -3.3, 0.6], ['s3', 2.1, -3.1, 0.55], ['s4', 2.9, -3.45, 0.45], ['s5', 0.2, -4.4, 0.6]];
for (const [name, cx, cy, r] of sprays) {
  e.layer(name, { pivot: [cx, cy - r * 0.8], wind: { strength: 0.55, gust: 0.5 }, box: [cx - r * 1.6, cy - r * 1.4, cx + r * 1.6, cy + r * 1.4] }, (g) => {
    for (let i = 0; i < 22; i++) {
      const x = cx + (e.rnd() - 0.5) * r * 2.2;
      const y = cy + (e.rnd() - 0.4) * r * 1.6;
      const a = (e.rnd() - 0.5) * 1.6;
      g.fillStyle = e.rnd() < 0.5 ? '#1f2d27' : '#27372f';
      g.beginPath();
      g.ellipse(x, y, 0.13, 0.055, a, 0, Math.PI * 2);
      g.fill();
    }
  });
}
