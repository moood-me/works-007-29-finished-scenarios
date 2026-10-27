// The churchyard's great yew: older than the church, its trunk short, broad and fluted, red-brown; its crown spreading
// low and wide, near black-green, dense (metres: x across from the trunk, y up from the ground).
g.fillStyle = '#6a4636';
g.beginPath();
g.moveTo(-1.2, 0.3);
g.quadraticCurveTo(-0.8, -1.2, -0.9, -2.6);
g.lineTo(0.9, -2.6);
g.quadraticCurveTo(0.8, -1.2, 1.3, 0.3);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(48,30,22,0.55)';
g.lineWidth = 0.08;
for (let i = 0; i < 9; i++) {
  const x = -0.9 + e.rnd() * 1.9;
  g.beginPath();
  g.moveTo(x * 1.2, 0.2);
  g.quadraticCurveTo(x + (e.rnd() - 0.5) * 0.3, -1.3, x * 0.9, -2.6);
  g.stroke();
}
e.layer('crown', { pivot: [0, -2.4], wind: { strength: 0.04, gust: 0.4 }, box: [-6.5, -11.5, 6.5, -0.8] }, c => {
  e.lib.crown(c, e.rnd, 'yew', -2.2, -4.6, 3.8, 3.2, 170, 0.45);
  e.lib.crown(c, e.rnd, 'yew', 2.4, -4.4, 3.6, 3.0, 160, 0.45);
  e.lib.crown(c, e.rnd, 'yew', 0, -7.4, 4.4, 3.4, 200, 0.45);
});
