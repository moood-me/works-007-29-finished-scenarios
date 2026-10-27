// A tuft of the longer grass by the stones, a dock leaf or two gone rusty in it (metres: x across, y up); it bends in
// the air.
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.5, gust: 0.6 }, box: [-0.5, -0.55, 0.5, 0.05] }, c => {
  for (let i = 0; i < 24; i++) {
    const x = (e.rnd() - 0.5) * 0.55;
    const h = 0.16 + e.rnd() * 0.32;
    const lean = (e.rnd() - 0.5) * 0.2;
    c.strokeStyle = ['#5f7238', '#71813f', '#8a8a4c', '#56682f', '#9a8f55'][Math.floor(e.rnd() * 5)];
    c.lineWidth = 0.012;
    c.beginPath();
    c.moveTo(x, 0);
    c.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    c.stroke();
  }
  for (let i = 0; i < 2; i++) {
    const x = (e.rnd() - 0.5) * 0.3;
    const s = e.rnd() < 0.5 ? -1 : 1;
    c.fillStyle = i ? '#7a6a3a' : '#66682f';
    c.beginPath();
    c.moveTo(x, 0);
    c.quadraticCurveTo(x + s * 0.12, -0.12, x + s * 0.1, -0.3);
    c.quadraticCurveTo(x + s * 0.02, -0.14, x, 0);
    c.fill();
  }
});
