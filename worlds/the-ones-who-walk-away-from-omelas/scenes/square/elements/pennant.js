// A pennant of the festival garlands: a little triangle of light cloth hanging from the cord, swaying in the wind about
// its top (layer `flag`); each copy's tint gives its colour
e.layer('flag', { pivot: [0, -0.62], wind: { strength: 0.55, gust: 0.6 } }, g => {
  g.fillStyle = '#f7f3ec';
  g.beginPath();
  g.moveTo(-0.22, -0.62);
  g.lineTo(0.22, -0.62);
  g.lineTo(0, 0);
  g.closePath();
  g.fill();
});
