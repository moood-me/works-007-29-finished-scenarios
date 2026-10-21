// The land, seen from above (draped over the relief): the meadow round the house in late-summer green, the yard's
// trampled grass and bare earth by the porch and the well, the path from the gate, the road through the gate going
// off into the meadow and bending right up the slope, wild flowers near. Its centre is 110 m ahead: a point (across,
// distance) of the world is (across, 110 − distance) here.
const L = e.lib, Y = d => 110 - d;
g.fillStyle = '#86a752';
g.fillRect(-300, -120, 600, 240);
// the far slope a little yellower in the low sun, the near yard a little deeper
const far = g.createLinearGradient(0, Y(230), 0, Y(15));
far.addColorStop(0, '#a6bd62');
far.addColorStop(1, 'rgba(134, 167, 82, 0)');
g.fillStyle = far;
g.fillRect(-300, -120, 600, 215);
L.dabs(g, 31, -300, -120, 600, 210, ['#7a9c4a', '#96b45c', '#a9bf68', '#6f9145'], 900, 3.2, 0.5, 0.45);
L.dabs(g, 33, -30, Y(30), 60, 30, ['#7a9c4a', '#96b45c', '#6f9145', '#a2bb63'], 900, 0.6, 0.55, 0.5);
// the yard: trampled grass and bare earth before the house and round the well
g.fillStyle = '#a9a46a';
g.globalAlpha = 0.8;
g.beginPath();
g.ellipse(-2.5, Y(5.4), 4.2, 1.6, 0.1, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(2.6, Y(5.6), 1.4, 1.0, 0, 0, Math.PI * 2);
g.fill();
g.globalAlpha = 1;
L.dabs(g, 35, -6.5, Y(7), 10, 3.5, ['#b8a678', '#9aa264', '#c1ad7e'], 260, 0.22, 0.6, 0.55);
// the path from the porch to the gate, and to the well
const path = (pts, w, col) => {
  g.strokeStyle = col;
  g.lineWidth = w;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.beginPath();
  pts.forEach(([a, d], i) => (i ? g.lineTo(a, Y(d)) : g.moveTo(a, Y(d))));
  g.stroke();
};
path([[-3, 5.5], [-1.6, 6.8], [0.2, 9], [1.4, 11.5], [1.5, 12.5]], 1.1, '#c4ae80');
path([[-1.6, 6.6], [0.8, 6.1], [1.8, 5.6]], 0.7, '#c4ae80');
// the road from the gate: off into the meadow, bending right up the slope
const road = [[1.5, 12], [1.7, 20], [3, 32], [7, 48], [15, 68], [22, 90], [24, 120], [30, 160], [44, 225]];
path(road, 3.2, '#b9a670');
path(road, 2.4, '#d3bf8a');
L.dabs(g, 37, -1, Y(40), 14, 28, ['#c9b582', '#e0cd9a'], 80, 0.25, 0.5, 0.4);
// wild flowers in the near grass: daisies, buttercups, cornflowers (not on the yard's earth)
const FLOWERS = ['#f7f3ea', '#f4d34a', '#6a86d6', '#f7f3ea', '#e9a3b8'];
for (let i = 0; i < 700; i++) {
  const a = -14 + 28 * L.rnd(i, 41), d = 1.2 + 16 * L.rnd(i, 42) ** 1.3;
  const inYard = ((a + 2.5) / 4.6) ** 2 + ((d - 5.4) / 1.9) ** 2 < 1 || ((a - 2.6) / 1.6) ** 2 + ((d - 5.6) / 1.2) ** 2 < 1;
  if (inYard || Math.abs(a - 1.4 - (d - 12) * 0.02) < 0.9 && d > 9) continue;
  g.fillStyle = FLOWERS[i % FLOWERS.length];
  g.beginPath();
  g.arc(a, Y(d), 0.035 + 0.03 * L.rnd(i, 43), 0, Math.PI * 2);
  g.fill();
}
