// A clump of the tall grass of the field (metres, a metre wide, up to 1.25 m high): its blades and seed heads one
// layer, bending in the wind about its foot, thin enough that the low Sun behind it shines through; it stands in many
// places beyond the fence, parted along the path (the copies).
e.layer('clump', { pivot: [0, 0], wind: { strength: 0.5, gust: 0.5, scale: 2 }, box: [-0.55, -1.35, 0.55, 0.05] }, g => {
  const tones = ['#a59a5c', '#b8aa66', '#c7b874'];
  for (let k = 0; k < 3; k++) {
    g.strokeStyle = tones[k];
    g.lineWidth = 0.02;
    g.beginPath();
    for (let i = 0; i < 70; i++) {
      const x = (e.rnd() - 0.5) * 0.8;
      const top = 0.7 + e.rnd() * 0.5;
      const lean = (e.rnd() - 0.45) * 0.3;
      g.moveTo(x * 0.9, 0);
      g.quadraticCurveTo(x * 0.95 + lean * 0.3, -top * 0.5, x + lean, -top);
    }
    g.stroke();
  }
  g.fillStyle = '#dcc48e';
  for (let i = 0; i < 18; i++) {
    g.beginPath();
    g.ellipse((e.rnd() - 0.5) * 0.9, -0.85 - e.rnd() * 0.35, 0.02, 0.06, 0.15, 0, Math.PI * 2);
    g.fill();
  }
});
