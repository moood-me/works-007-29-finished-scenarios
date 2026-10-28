// A tuft of dry steppe grass: thin blades, straw and ochre, bending in the wind (a layer; copies over the steppe)
e.layer('blades', { pivot: [0, 0], wind: { strength: 0.5, gust: 0.5, scale: 6 }, box: [-0.45, -0.62, 0.45, 0.02] }, (g) => {
  g.lineCap = 'round';
  for (let i = 0; i < 28; i++) {
    const x = (e.rnd() - 0.5) * 0.3;
    const h = 0.25 + e.rnd() * 0.32;
    const lean = (e.rnd() - 0.5) * 0.5;
    g.strokeStyle = ['#b9a06c', '#a48a58', '#c8b07c', '#8f7a50'][Math.floor(e.rnd() * 4)];
    g.lineWidth = 0.008 + e.rnd() * 0.006;
    g.beginPath();
    g.moveTo(x, 0);
    g.quadraticCurveTo(x + lean * 0.3, -h * 0.6, x + lean, -h);
    g.stroke();
  }
});
