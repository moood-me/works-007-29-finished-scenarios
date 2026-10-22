// The tiled stove against the left wall: a tall white-glazed tower of two tiers on iron feet, a brass fire door (its
// small window glows with the fire — the layer `fire`, shown as much as `stove` by its animate; its light `fire` is the
// scene's light "stove"), a cornice on top, and on it the mantel clock in gilt (the point `clock`).
const TILE = '#e9e4da';
const SEAM = '#cfc6b6';
// the body: lower tier wider, the upper narrower, cornices between
g.fillStyle = TILE;
g.fillRect(-0.42, -1.2, 0.84, 1.08);
g.fillRect(-0.34, -2.05, 0.68, 0.82);
g.strokeStyle = SEAM;
g.lineWidth = 0.012;
for (let y = -1.2; y < -0.12; y += 0.18) {
  g.beginPath();
  g.moveTo(-0.42, y);
  g.lineTo(0.42, y);
  g.stroke();
}
for (let y = -2.05; y < -1.22; y += 0.18) {
  g.beginPath();
  g.moveTo(-0.34, y);
  g.lineTo(0.34, y);
  g.stroke();
}
for (const x of [-0.21, 0, 0.21]) {
  g.beginPath();
  g.moveTo(x, -1.2);
  g.lineTo(x, -0.12);
  g.stroke();
}
for (const x of [-0.17, 0, 0.17]) {
  g.beginPath();
  g.moveTo(x, -2.05);
  g.lineTo(x, -1.22);
  g.stroke();
}
g.fillStyle = '#ddd5c6';
g.fillRect(-0.47, -1.26, 0.94, 0.07);
g.fillRect(-0.39, -2.13, 0.78, 0.09);
g.fillRect(-0.46, -0.16, 0.92, 0.05);
// the feet
g.fillStyle = '#2b2725';
for (const x of [-0.38, 0.32]) g.fillRect(x, -0.11, 0.06, 0.11);
// the fire door: brass, a small mica window
g.fillStyle = '#9c7a3e';
g.fillRect(-0.15, -0.78, 0.3, 0.32);
g.fillStyle = '#2a2220';
g.fillRect(-0.1, -0.72, 0.2, 0.14);
e.layer('fire', { flicker: 0.5 }, c => {
  const r = c.createRadialGradient(0, -0.64, 0.01, 0, -0.65, 0.12);
  r.addColorStop(0, '#ffd88a');
  r.addColorStop(0.6, '#ff8f3e');
  r.addColorStop(1, '#a8401c');
  c.fillStyle = r;
  c.fillRect(-0.1, -0.72, 0.2, 0.14);
});
e.light(0, -0.62, 0.12, '#ff9a52', 0.8, 'fire');
// the mantel clock on the top: gilt case, white face
g.fillStyle = '#b8924a';
g.beginPath();
g.moveTo(-0.16, -2.13);
g.lineTo(0.16, -2.13);
g.lineTo(0.12, -2.3);
g.quadraticCurveTo(0, -2.46, -0.12, -2.3);
g.closePath();
g.fill();
g.fillStyle = '#f2ecdf';
g.beginPath();
g.arc(0, -2.27, 0.065, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#2a2420';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0, -2.27);
g.lineTo(0, -2.32);
g.moveTo(0, -2.27);
g.lineTo(0.035, -2.27);
g.stroke();
e.at(0, -2.27, 'clock');
