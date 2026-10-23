// A stretch of the festival garlands: four little triangles of light cloth hanging from the cord, 0.6 m apart, in four
// colours, swaying together in the wind about the cord (layer `flags`); each copy is a stretch along a cord, its tint
// varying the colours a little
const COLORS = ['#e7a39a', '#f0d68e', '#a9c6dc', '#f6f2ea'];
e.layer('flags', { pivot: [0, -0.62], wind: { strength: 0.5, gust: 0.6 } }, g => {
  COLORS.forEach((c, i) => {
    const x = -0.9 + i * 0.6;
    g.fillStyle = c;
    g.beginPath();
    g.moveTo(x - 0.22, -0.62);
    g.lineTo(x + 0.22, -0.62);
    g.lineTo(x, 0);
    g.closePath();
    g.fill();
  });
});
