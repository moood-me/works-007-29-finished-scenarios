// An oak of the park round the lake in October: a short grey-brown trunk and boughs, a broad crown of russet leaf, its
// clumps lit on top (metres: x across from the trunk, y up from the ground); the crown stirs in the air. Copies of it,
// tinted, are the oaks and chestnuts along the near shore and beyond.
g.fillStyle = '#5e5246';
g.beginPath();
g.moveTo(-0.55, 0);
g.lineTo(-0.35, -4);
g.lineTo(0.35, -4);
g.lineTo(0.6, 0);
g.closePath();
g.fill();
g.strokeStyle = '#5e5246';
g.lineCap = 'round';
for (const [x2, y2, w] of [[-3.2, -7.5, 0.3], [2.8, -8, 0.3], [-1, -10, 0.22], [1.2, -10.5, 0.2]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(0, -3.8);
  g.lineTo(x2, y2);
  g.stroke();
}
e.layer('crown', { pivot: [0, -4], wind: { strength: 0.12, gust: 0.5 }, box: [-7.5, -15.5, 7.5, -3] }, c => {
  e.lib.crown(c, e.rnd, 'oak', 0, -9.2, 6.6, 5.2, 320, 0.55);
});
