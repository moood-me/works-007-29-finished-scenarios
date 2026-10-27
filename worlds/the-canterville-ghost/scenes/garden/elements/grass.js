// A tuft of the garden's long grass (about 0.9 m): blades from one root, bending over at their tips, dark green and
// sage with a few straw-pale ones — the whole tuft a layer swaying in the wind.
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.35, gust: 0.4 } }, c => {
  const tones = ['#4a5e3c', '#5a6c44', '#66704a', '#3e5034', '#7a7a54', '#56684a'];
  c.lineCap = 'round';
  for (let i = 0; i < 70; i++) {
    const x = (e.rnd() - 0.5) * 0.4;
    const h = 0.55 + e.rnd() * 0.45;
    const lean = (e.rnd() - 0.5) * 0.7;
    c.strokeStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.lineWidth = 0.008 + e.rnd() * 0.01;
    c.beginPath();
    c.moveTo(x, 0.02);
    c.quadraticCurveTo(x + lean * 0.3, -h * 0.7, x + lean, -h + Math.abs(lean) * 0.35);
    c.stroke();
  }
});
