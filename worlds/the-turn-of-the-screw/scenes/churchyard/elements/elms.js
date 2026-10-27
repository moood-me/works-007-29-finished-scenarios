// An old elm beyond the churchyard: a tall grey trunk forking, its crown a high billowing mass gone yellow-brown with
// October (metres: x across from the trunk, y up from the ground); the crown stirs in the air.
g.fillStyle = '#5c544a';
g.beginPath();
g.moveTo(-0.5, 0.3);
g.quadraticCurveTo(-0.35, -4, -0.3, -7);
g.lineTo(0.3, -7);
g.quadraticCurveTo(0.35, -4, 0.55, 0.3);
g.closePath();
g.fill();
g.strokeStyle = '#5c544a';
g.lineCap = 'round';
for (const [x2, y2, w] of [[-3, -11, 0.3], [2.5, -12, 0.3], [0.2, -14, 0.25]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(0, -6.5);
  g.quadraticCurveTo(x2 * 0.3, (y2 - 6.5) / 2, x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [0, -7], wind: { strength: 0.12, gust: 0.5 }, box: [-7.5, -18.5, 7.5, -4] }, c => {
  e.lib.crown(c, e.rnd, 'elm', -1.6, -13.4, 4.2, 3.6, 160, 0.55);
  e.lib.crown(c, e.rnd, 'elm', 2.2, -11.4, 4.4, 3.8, 170, 0.55);
  e.lib.crown(c, e.rnd, 'elm', 0.2, -9.0, 5.2, 3.2, 180, 0.55);
});
