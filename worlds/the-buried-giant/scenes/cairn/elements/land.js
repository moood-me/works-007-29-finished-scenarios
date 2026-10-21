// The land of the pass, seen from above, laid over the relief: the plane's centre is 110 m ahead, so a place `d`
// metres ahead and `a` across is at (a, 110 - d). Grass and heather, the path from the viewer past the cairn and on up
// the saddle, stones, the trodden ground before the shelter
const r = e.lib.rnd(3), P = (a, d) => [a, 110 - d];
g.fillStyle = '#868a69';
g.fillRect(-130, -120, 260, 240);
// broad patches: heather, pale dry grass, darker turf — small near, big far
const colors = ['#8a7d76', '#a3a07d', '#7a805f', '#949570', '#857a72'];
for (let i = 0; i < 420; i++) {
  const d = -6 + Math.pow(r(), 1.7) * 230, a = (r() - 0.5) * (30 + d * 1.6), s = 0.4 + d * 0.06;
  const [x, y] = P(a, d);
  g.fillStyle = colors[Math.floor(r() * colors.length)];
  g.beginPath();
  g.ellipse(x, y, s * (1 + r() * 2), s * (0.6 + r()), r() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: worn earth from under the viewer's feet, past the cairn on its left, on up the saddle
const way = [P(0.6, -8), P(0.3, 2), P(-0.2, 6), P(-0.6, 9.5), P(-0.4, 14), P(0.6, 22), P(-1.4, 34), P(-4, 52), P(-3, 75), P(-6, 110), P(-4, 160)];
const trace = (wide, color) => {
  g.strokeStyle = color;
  g.lineWidth = wide;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.beginPath();
  g.moveTo(way[0][0], way[0][1]);
  for (let i = 1; i < way.length - 1; i++) g.quadraticCurveTo(way[i][0], way[i][1], (way[i][0] + way[i + 1][0]) / 2, (way[i][1] + way[i + 1][1]) / 2);
  g.lineTo(way[way.length - 1][0], way[way.length - 1][1]);
  g.stroke();
};
trace(1.5, '#958a73');
trace(0.9, '#a89c84');
// the trodden ground before the shepherd's shelter (−7.2 across, 12.5 ahead)
g.fillStyle = '#93887a';
const [hx, hy] = P(-6.8, 10.6);
g.beginPath();
g.ellipse(hx, hy, 2.6, 1.6, 0.2, 0, Math.PI * 2);
g.fill();
// stones: pebbles along the path, stones spilled round the cairn's foot, scattered far
g.fillStyle = '#8f8c83';
for (let i = 0; i < 160; i++) {
  const d = 1 + r() * 24, a = (r() - 0.5) * 16, [x, y] = P(a, d);
  e.lib.stone(g, x, y, 0.06 + r() * 0.12, 0.04 + r() * 0.08, r() * 3, r);
}
for (let i = 0; i < 70; i++) {
  const t = r() * Math.PI * 2, rad = 2.6 + r() * 0.9, [x, y] = P(2.6 + Math.cos(t) * rad, 9.5 + Math.sin(t) * rad);
  g.fillStyle = r() < 0.5 ? '#8c897f' : '#77746b';
  e.lib.stone(g, x, y, 0.1 + r() * 0.18, 0.08 + r() * 0.12, r() * 3, r);
}
