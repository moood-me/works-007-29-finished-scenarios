// What passes in the dark behind the wall (`shapes`): shadows and great soft wings in a dim violet grey that keeps its
// own colour (glows) — painted once, each a layer its animate carries slowly about and fades in as `shapes` rises.
const wing = (l, x, y, s, flip) => {
  l.fillStyle = '#3a3448';
  l.beginPath();
  l.moveTo(x, y);
  l.quadraticCurveTo(x + flip * 0.35 * s, y - 0.32 * s, x + flip * 0.9 * s, y - 0.12 * s);
  l.quadraticCurveTo(x + flip * 0.62 * s, y - 0.02 * s, x + flip * 0.78 * s, y + 0.1 * s);
  l.quadraticCurveTo(x + flip * 0.45 * s, y + 0.02 * s, x + flip * 0.5 * s, y + 0.2 * s);
  l.quadraticCurveTo(x + flip * 0.25 * s, y + 0.05 * s, x, y);
  l.fill();
};
const shade = (l, x, y, rx, ry) => {
  const r = l.createRadialGradient(x, y, 0, x, y, rx);
  r.addColorStop(0, 'rgba(46,40,60,0.85)');
  r.addColorStop(1, 'rgba(46,40,60,0)');
  l.fillStyle = r;
  l.beginPath();
  l.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  l.fill();
};
e.layer('w1', { pivot: [-0.6, -2.0] }, l => {
  wing(l, -0.6, -2.0, 1, 1);
  wing(l, -0.6, -2.0, 1, -1);
});
e.layer('w2', { pivot: [0.7, -1.4] }, l => {
  wing(l, 0.7, -1.4, 0.7, 1);
  wing(l, 0.7, -1.4, 0.7, -1);
});
e.layer('s1', {}, l => shade(l, -0.9, -1.2, 0.6, 1.0));
e.layer('s2', {}, l => shade(l, 0.8, -1.6, 0.5, 0.9));
e.layer('s3', {}, l => shade(l, 0.1, -2.3, 0.9, 0.4));
