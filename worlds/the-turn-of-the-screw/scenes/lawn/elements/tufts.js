// A tuft of the longer grass at the lawn's edge near, with a buttercup or two (metres: x across, y up); it bends in
// the air.
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.6, gust: 0.6 }, box: [-0.5, -0.5, 0.5, 0.05] }, c => {
  for (let i = 0; i < 22; i++) {
    const x = (e.rnd() - 0.5) * 0.5;
    const h = 0.16 + e.rnd() * 0.28;
    const lean = (e.rnd() - 0.5) * 0.18;
    c.strokeStyle = ['#5d7b39', '#6e8c44', '#7f9a4c', '#53702f'][Math.floor(e.rnd() * 4)];
    c.lineWidth = 0.012;
    c.beginPath();
    c.moveTo(x, 0);
    c.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    c.stroke();
  }
  for (let i = 0; i < 2; i++) {
    const x = (e.rnd() - 0.5) * 0.3;
    const h = 0.3 + e.rnd() * 0.12;
    c.strokeStyle = '#5d7b39';
    c.lineWidth = 0.008;
    c.beginPath();
    c.moveTo(x, 0);
    c.lineTo(x + 0.02, -h);
    c.stroke();
    c.fillStyle = '#e8c33e';
    c.beginPath();
    c.arc(x + 0.02, -h, 0.018, 0, Math.PI * 2);
    c.fill();
  }
});
