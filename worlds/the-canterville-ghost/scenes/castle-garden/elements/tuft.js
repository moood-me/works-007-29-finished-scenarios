// A clump of long grass left uncut along the railing and round the almond's foot (about 0.6 m): blades from one
// root bending over, a few white heads of cow parsley among them in summer, gone to straw in autumn; the clump a layer
// swaying in the wind.
const fall = (e.state.autumn ?? 0) > 0.5;
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.3, gust: 0.4 } }, c => {
  const tones = fall ? ['#7a7a4a', '#8a7a48', '#6a6a40', '#9a8a54'] : ['#4e7a3a', '#5e8a44', '#6a924a', '#46703a', '#7a9a54'];
  c.lineCap = 'round';
  for (let i = 0; i < 46; i++) {
    const x = (e.rnd() - 0.5) * 0.36;
    const h = 0.35 + e.rnd() * 0.3;
    const lean = (e.rnd() - 0.5) * 0.5;
    c.strokeStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.lineWidth = 0.008 + e.rnd() * 0.008;
    c.beginPath();
    c.moveTo(x, 0.02);
    c.quadraticCurveTo(x + lean * 0.3, -h * 0.7, x + lean, -h + Math.abs(lean) * 0.3);
    c.stroke();
  }
  for (let k = 0; k < 3; k++) {
    const x = (e.rnd() - 0.5) * 0.3;
    const h = 0.55 + e.rnd() * 0.15;
    c.strokeStyle = fall ? '#8a7a50' : '#5a7a40';
    c.lineWidth = 0.008;
    c.beginPath();
    c.moveTo(x, 0);
    c.lineTo(x + 0.03, -h);
    c.stroke();
    c.fillStyle = fall ? '#a8946a' : '#f2f0e6';
    for (let j = 0; j < 9; j++) {
      c.beginPath();
      c.arc(x + 0.03 + (e.rnd() - 0.5) * 0.12, -h - e.rnd() * 0.03, 0.012, 0, Math.PI * 2);
      c.fill();
    }
  }
});
