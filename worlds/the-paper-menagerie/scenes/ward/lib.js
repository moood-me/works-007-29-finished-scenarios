// What the ward's walls share: hospital paint in two tones — a pale mint-cream above, a sage-green gloss below a
// grey-green rail at 1.2 m — and a darker skirting, over x0…x1 of a wall 2.7 m high (metres from its foot, y up
// negative). The caller cuts its own openings (clip) before calling.
function wall(g, x0, x1) {
  const w = x1 - x0;
  g.fillStyle = '#e4e8d6';
  g.fillRect(x0, -2.72, w, 2.74);
  g.fillStyle = '#a9bca4';
  g.fillRect(x0, -1.2, w, 1.22);
  g.fillStyle = 'rgba(255,255,255,0.08)';
  for (let x = x0; x < x1 - 0.3; x += 0.9) g.fillRect(x, -1.18, 0.3, 1.0);
  g.fillStyle = '#8fa48f';
  g.fillRect(x0, -1.25, w, 0.06);
  g.fillStyle = '#c9d3c0';
  g.fillRect(x0, -1.27, w, 0.015);
  g.fillStyle = '#6f7f6e';
  g.fillRect(x0, -0.1, w, 0.12);
  g.fillStyle = '#eef0e4';
  g.fillRect(x0, -2.72, w, 0.06);
}
// The town's blocks (town and town_windows paint the same ones): [x, width, height] in the town's metres — a far row of
// taller ones, a near row of lower ones before them.
const far = Array.from({ length: 30 }, (_, i) => [
  -145 + i * 10 + anim.hash(i, 1) * 5,
  9 + anim.hash(i, 2) * 9,
  16 + anim.hash(i, 3) * 16,
]);
const near = Array.from({ length: 26 }, (_, i) => [
  -148 + i * 12 + anim.hash(i, 4) * 6,
  10 + anim.hash(i, 5) * 8,
  6 + anim.hash(i, 6) * 12,
]);
return { wall, town: { far, near } };
