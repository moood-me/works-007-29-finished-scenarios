// The skeleton (a thing, seen from before, 0.18 m out from the far wall): a gigantic man's bones sitting slumped
// against the wall under the iron ring, the knees drawn up, the skull fallen forward on the breast; a rusted chain
// from the ring to an iron band round the waist; the right arm stretched out along the floor to the left, its long
// fingers reaching toward the trencher and the ewer that stand just beyond them. Its points: skeleton#skull,
// skeleton#hand (the fingers' ends), skeleton#chain.
const BONE = '#d9d1bd';
const DARK = '#3a342c';
const IRON = '#3e3730';
g.lineCap = 'round';
g.lineJoin = 'round';
const bone = (pts, w) => {
  g.strokeStyle = BONE;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (const p of pts.slice(1)) g.lineTo(p[0], p[1]);
  g.stroke();
  // a knob at each end, as bones have
  g.fillStyle = BONE;
  for (const p of [pts[0], pts[pts.length - 1]]) {
    g.beginPath();
    g.arc(p[0], p[1], w * 0.75, 0, Math.PI * 2);
    g.fill();
  }
};
// the chain from the ring down to the band, sagging a little: links turned alternately
const ring = [0, -0.9];
const band = [0.12, -0.24];
for (let i = 0; i <= 12; i++) {
  const u = i / 12;
  const x = ring[0] + (band[0] - ring[0]) * u - 0.06 * Math.sin(Math.PI * u);
  const y = ring[1] + (band[1] - ring[1]) * u;
  g.strokeStyle = IRON;
  g.lineWidth = 0.02;
  g.beginPath();
  if (i % 2) g.ellipse(x, y, 0.016, 0.035, 0, 0, Math.PI * 2);
  else g.ellipse(x, y, 0.034, 0.024, 0, 0, Math.PI * 2);
  g.stroke();
}
e.at(-0.03, -0.6, 'chain');
// the legs: thigh bones up to the knees, shin bones down to the feet on the floor
bone([[0.08, -0.12], [0.5, -0.46]], 0.07);
bone([[0.22, -0.1], [0.66, -0.4]], 0.07);
bone([[0.5, -0.46], [0.78, 0.0]], 0.055);
bone([[0.66, -0.4], [0.94, 0.02]], 0.055);
// the feet: little bones fanned on the floor
for (const [fx, fy] of [[0.78, 0.0], [0.94, 0.02]]) {
  for (let k = -2; k <= 2; k++) bone([[fx, fy], [fx + 0.1 + k * 0.004, fy + 0.01 + k * 0.012]], 0.016);
}
// the pelvis: a broad basin
g.fillStyle = BONE;
g.beginPath();
g.ellipse(0.15, -0.16, 0.17, 0.09, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = DARK;
for (const sx of [-1, 1]) {
  g.beginPath();
  g.ellipse(0.15 + sx * 0.07, -0.15, 0.035, 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
// the spine, leaning back against the wall and curved
g.strokeStyle = BONE;
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(0.13, -0.22);
g.quadraticCurveTo(0.16, -0.45, 0.06, -0.62);
g.stroke();
// the iron band round the waist
g.fillStyle = IRON;
g.fillRect(0.0, -0.28, 0.27, 0.06);
// the ribs: arcs round the breast
g.strokeStyle = BONE;
g.lineWidth = 0.022;
for (let i = 0; i < 6; i++) {
  const y = -0.36 - i * 0.045;
  const w = 0.14 + 0.02 * Math.sin((i / 5) * Math.PI);
  g.beginPath();
  g.ellipse(0.09, y, w, 0.05, -0.08, Math.PI * 0.05, Math.PI * 0.95);
  g.stroke();
}
// the collarbones
bone([[-0.14, -0.6], [0.06, -0.62], [0.27, -0.58]], 0.025);
// the left arm (on the viewer's right): hanging from the shoulder, the forearm laid over the knee
bone([[0.27, -0.58], [0.38, -0.3]], 0.045);
bone([[0.38, -0.3], [0.58, -0.44]], 0.035);
for (let k = -2; k <= 2; k++) bone([[0.58, -0.44], [0.62 + k * 0.01, -0.38 + Math.abs(k) * 0.01]], 0.013);
// the right arm (on the viewer's left): down from the shoulder to the elbow on the floor, the forearm along the
// floor to the left, the long fingers reaching
bone([[-0.14, -0.6], [-0.34, -0.06]], 0.045);
bone([[-0.34, -0.06], [-0.98, -0.02]], 0.035);
bone([[-0.34, -0.03], [-0.97, 0.01]], 0.025);
for (let k = -2; k <= 2; k++) bone([[-0.98, -0.01], [-1.14 - (2 - Math.abs(k)) * 0.025, k * 0.012]], 0.013);
e.at(-1.18, -0.02, 'hand');
// the skull, fallen forward on the breast and a little to the side: the brow, the sockets, the nose, the teeth
const sx = -0.06;
const sy = -0.72;
g.fillStyle = BONE;
g.beginPath();
g.ellipse(sx, sy, 0.115, 0.125, -0.25, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(sx + 0.03, sy + 0.1, 0.07, 0.05, -0.25, 0, Math.PI * 2);
g.fill();
g.fillStyle = DARK;
for (const [ex, ey] of [[-0.045, -0.015], [0.04, -0.035]]) {
  g.beginPath();
  g.ellipse(sx + ex, sy + ey, 0.03, 0.034, -0.25, 0, Math.PI * 2);
  g.fill();
}
g.beginPath();
g.moveTo(sx + 0.005, sy + 0.025);
g.lineTo(sx - 0.012, sy + 0.06);
g.lineTo(sx + 0.022, sy + 0.055);
g.closePath();
g.fill();
g.strokeStyle = DARK;
g.lineWidth = 0.006;
for (let k = -3; k <= 3; k++) {
  g.beginPath();
  g.moveTo(sx + 0.03 + k * 0.012, sy + 0.08);
  g.lineTo(sx + 0.035 + k * 0.012, sy + 0.105);
  g.stroke();
}
e.at(sx, sy, 'skull');
