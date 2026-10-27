// A birch by the water: a slim white trunk marked with black, gone a little crooked, a light crown of yellow leaf
// thinning already (metres: x across from the trunk, y up); it moves in the least air.
g.fillStyle = '#e8e3d8';
g.beginPath();
g.moveTo(-0.17, 0);
g.quadraticCurveTo(-0.05, -5, 0.25, -10);
g.lineTo(0.35, -10);
g.quadraticCurveTo(0.08, -5, 0.17, 0);
g.closePath();
g.fill();
g.fillStyle = '#2c2a28';
for (let i = 0; i < 26; i++) {
  const y = -0.4 - e.rnd() * 9;
  const x = -0.1 + (-y / 10) * 0.32 + (e.rnd() - 0.5) * 0.08;
  g.fillRect(x - 0.08, y, 0.06 + e.rnd() * 0.12, 0.04 + e.rnd() * 0.05);
}
e.layer('crown', { pivot: [0.2, -5], wind: { strength: 0.3, gust: 0.6 }, box: [-3.5, -13.5, 4, -3.5] }, c => {
  e.lib.crown(c, e.rnd, 'birch', 0.3, -8.6, 2.6, 4.2, 170, 0.36);
  // the crown thinning: sky through it here and there
  c.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 14; i++) {
    c.beginPath();
    c.arc(0.3 + (e.rnd() - 0.5) * 4.4, -8.6 + (e.rnd() - 0.5) * 7, 0.15 + e.rnd() * 0.25, 0, Math.PI * 2);
    c.fill();
  }
  c.globalCompositeOperation = 'source-over';
});
