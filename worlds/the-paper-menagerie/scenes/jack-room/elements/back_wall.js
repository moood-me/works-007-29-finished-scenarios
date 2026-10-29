// The back wall (facing the room; metres from its foot, x 0 at across −0.2): Jack's wallpaper over the room's part
// (x −2.68…0.81), cut for the window (x −0.75…0.35, 0.85–2.0 m up); the hall's paint beyond the partition (x 0.81…2.68)
// with a small framed photograph. On the room's part: Jack's crayon drawing of a red tiger pinned over the shelf, a
// poster of a rocket between the window and the partition — once the room is emptied (`packed`), their pale patches.
const packed = e.state.packed;
g.save();
g.beginPath();
g.rect(-2.7, -2.54, 3.52, 2.58);
g.rect(-0.75, -2.0, 1.1, 1.15);
g.clip('evenodd');
e.lib.wallpaper(g, -2.7, 0.82);
g.restore();
e.lib.hall(g, 0.82, 2.7);
// the photograph in the hall: a narrow dark frame, a summer lawn and three figures, small
g.fillStyle = '#5a4636';
g.fillRect(1.55, -1.75, 0.34, 0.28);
g.fillStyle = '#b8c6a2';
g.fillRect(1.58, -1.72, 0.28, 0.22);
g.fillStyle = '#d9e2e6';
g.fillRect(1.58, -1.72, 0.28, 0.09);
g.fillStyle = '#4c4a52';
for (const [x, h] of [[1.66, 0.09], [1.72, 0.065], [1.77, 0.085]]) g.fillRect(x, -1.5 - h, 0.022, h);
if (packed) {
  e.lib.patch(g, -2.15, -2.22, 0.36, 0.28);
  e.lib.patch(g, 0.36, -2.05, 0.34, 0.5);
} else {
  // Jack's drawing: a red tiger with yellow stripes on lined paper, a drawing pin
  g.fillStyle = '#f6f2e6';
  g.fillRect(-2.15, -2.22, 0.36, 0.28);
  g.fillStyle = 'rgba(120,150,190,0.4)';
  for (let y = -2.18; y < -1.95; y += 0.03) g.fillRect(-2.15, y, 0.36, 0.003);
  g.fillStyle = '#d4483a';
  g.beginPath();
  g.ellipse(-1.97, -2.06, 0.1, 0.05, -0.05, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.arc(-2.07, -2.1, 0.035, 0, Math.PI * 2);
  g.fill();
  g.fillRect(-2.04, -2.02, 0.012, 0.05);
  g.fillRect(-1.92, -2.02, 0.012, 0.05);
  g.fillStyle = '#e9c84a';
  for (const x of [-2.0, -1.96, -1.92]) g.fillRect(x, -2.1, 0.008, 0.06);
  g.fillStyle = '#c23a30';
  g.beginPath();
  g.arc(-1.97, -2.21, 0.008, 0, Math.PI * 2);
  g.fill();
  // the poster: a red-and-white rocket rising over a night-blue ground, its smoke
  g.fillStyle = '#2c3b66';
  g.fillRect(0.36, -2.05, 0.34, 0.5);
  g.fillStyle = 'rgba(255,250,230,0.85)';
  for (let i = 0; i < 14; i++) g.fillRect(0.38 + e.rnd() * 0.3, -2.03 + e.rnd() * 0.3, 0.005, 0.005);
  g.fillStyle = '#e8e6de';
  g.beginPath();
  g.ellipse(0.53, -1.66, 0.09, 0.05, 0, 0, Math.PI * 2);
  g.ellipse(0.6, -1.63, 0.07, 0.04, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#f2f0ea';
  g.beginPath();
  g.moveTo(0.53, -1.98);
  g.lineTo(0.56, -1.92);
  g.lineTo(0.56, -1.74);
  g.lineTo(0.5, -1.74);
  g.lineTo(0.5, -1.92);
  g.closePath();
  g.fill();
  g.fillStyle = '#c9473c';
  g.beginPath();
  g.moveTo(0.53, -1.98);
  g.lineTo(0.56, -1.92);
  g.lineTo(0.5, -1.92);
  g.closePath();
  g.fill();
  g.fillRect(0.47, -1.79, 0.03, 0.06);
  g.fillRect(0.56, -1.79, 0.03, 0.06);
  e.at(-1.97, -2.08, 'drawing');
}
