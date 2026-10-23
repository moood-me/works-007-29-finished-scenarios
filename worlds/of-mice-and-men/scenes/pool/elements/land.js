// The land, seen from above and laid over the relief: the near bank of pale sand (the path down from the road crossing
// it from the left), wet and dark at the water's edge, the pool's bed under the water, the far bank of mud and then
// dry grass to the fields. Metres: x across, y toward the viewer — a place `d` metres ahead is at y = 62 − d.
const A = e.anim, Y = d => 62 - d, X0 = -120, W = 240;
const band = (d0, d1, color) => {
  g.fillStyle = color;
  g.fillRect(X0, Y(d1), W, d1 - d0);
};
band(-5, 129, '#bfa57a');
band(-5, 8.7, '#d2b98f');
band(8.7, 9.6, '#a99070');
band(9.6, 26, '#6e6a52');
band(26, 28.5, '#8c7c5c');
band(28.5, 129, '#b89a62');
// the far bank's grass: greener by the water, dry and gold beyond, in patches
for (let i = 0; i < 260; i++) {
  const x = X0 + A.hash(i, 1) * W, d = 28 + A.hash(i, 2) ** 1.5 * 100, r = 0.6 + 2.2 * A.hash(i, 3);
  g.fillStyle = d < 34 ? (A.hash(i, 4) < 0.5 ? '#7f8150' : '#8d8a56') : A.hash(i, 4) < 0.5 ? '#a98c55' : '#c7a86c';
  g.beginPath();
  g.ellipse(x, Y(d), r * 1.8, r, 0, 0, Math.PI * 2);
  g.fill();
}
// the left: grass on the cut bank under the willows
g.fillStyle = '#a49a62';
g.beginPath();
g.moveTo(X0, Y(-5));
g.lineTo(-9, Y(-5));
g.bezierCurveTo(-7, Y(2), -6.5, Y(6), -7.5, Y(9));
g.lineTo(X0, Y(9.4));
g.closePath();
g.fill();
// the path down from the road: trodden sand, lighter, from the left to the fire
g.strokeStyle = '#ddc8a0';
g.lineCap = 'round';
g.lineWidth = 1.1;
g.beginPath();
g.moveTo(-26, Y(10));
g.bezierCurveTo(-14, Y(6), -7, Y(5.5), -2.5, Y(3.8));
g.stroke();
// on the sand: the sycamore's crisp leaves, curled, a few twigs, pebbles; more toward the tree on the right
for (let i = 0; i < 380; i++) {
  const right = A.hash(i, 5) < 0.55, x = right ? 1 + A.hash(i, 6) * 9 : -9 + A.hash(i, 6) * 19, d = -3 + A.hash(i, 7) * 12.2;
  const k = A.hash(i, 8);
  if (k < 0.6) {
    g.fillStyle = k < 0.2 ? '#8e6a3c' : k < 0.4 ? '#a7834c' : '#b49460';
    g.beginPath();
    g.ellipse(x, Y(d), 0.05 + 0.04 * A.hash(i, 9), 0.035, A.hash(i, 10) * 3, 0, Math.PI * 2);
    g.fill();
  } else if (k < 0.75) {
    g.strokeStyle = '#7b6448';
    g.lineWidth = 0.025;
    const a = A.hash(i, 11) * 6.28, l = 0.2 + 0.4 * A.hash(i, 12);
    g.beginPath();
    g.moveTo(x, Y(d));
    g.lineTo(x + Math.cos(a) * l, Y(d) + Math.sin(a) * l);
    g.stroke();
  } else {
    g.fillStyle = A.hash(i, 13) < 0.5 ? '#a49a8b' : '#bdb2a0';
    g.beginPath();
    g.ellipse(x, Y(d), 0.05 + 0.05 * A.hash(i, 14), 0.04, 0, 0, Math.PI * 2);
    g.fill();
  }
}
// ripples of wind on the dry sand
g.strokeStyle = '#c8ae84';
g.lineWidth = 0.05;
for (let i = 0; i < 90; i++) {
  const x = -10 + A.hash(i, 15) * 20, d = -2 + A.hash(i, 16) * 10, l = 0.8 + A.hash(i, 17) * 1.6;
  g.beginPath();
  g.moveTo(x, Y(d));
  g.quadraticCurveTo(x + l / 2, Y(d) - 0.12, x + l, Y(d));
  g.stroke();
}
