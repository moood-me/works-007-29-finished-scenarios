// The back wall, limewashed and a little uneven, the deep window cut through it (x -2.4...-0.9, 0.75-2.05 m), a dark
// skirting of tarred stone; right of the window a rail of copper pans, the clock higher up, and the chimney's alcove of
// old brick (x 1.05...2.65) the range stands in, a mantel beam over it with candlesticks, a tea tin and brass.
const hole = new Path2D();
hole.rect(-2.95, -2.52, 5.9, 2.54);
hole.rect(-2.4, -2.05, 1.5, 1.3);
g.fillStyle = '#ece2cc';
g.fill(hole, 'evenodd');
g.save();
g.clip(hole, 'evenodd');
// the limewash's mottling: soft patches a shade warmer and a shade greyer
for (let k = 0; k < 60; k++) {
  const x = -2.9 + 5.8 * e.rnd(), y = -2.5 + 2.4 * e.rnd(), r = 0.15 + 0.4 * e.rnd();
  const p = g.createRadialGradient(x, y, 0, x, y, r);
  p.addColorStop(0, e.rnd() < 0.5 ? 'rgba(222, 204, 166, 0.35)' : 'rgba(204, 196, 180, 0.3)');
  p.addColorStop(1, 'rgba(222, 204, 166, 0)');
  g.fillStyle = p;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.restore();
g.fillStyle = '#4a4038';
g.fillRect(-2.95, -0.14, 5.9, 0.16);
// the alcove: brick, darkening with soot toward its top
const a0 = 1.05, a1 = 2.65, top = -1.62;
g.fillStyle = '#86523b';
g.fillRect(a0, top, a1 - a0, -top + 0.02);
g.strokeStyle = 'rgba(70, 44, 32, 0.5)';
g.lineWidth = 0.01;
for (let r = 0, y = -0.14; y > top; r++, y -= 0.075) {
  g.beginPath();
  g.moveTo(a0, y);
  g.lineTo(a1, y);
  g.stroke();
  for (let x = a0 + (r % 2) * 0.11; x < a1; x += 0.22) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - 0.075);
    g.stroke();
  }
}
const soot = g.createLinearGradient(0, top, 0, -0.8);
soot.addColorStop(0, 'rgba(34, 24, 20, 0.85)');
soot.addColorStop(1, 'rgba(34, 24, 20, 0)');
g.fillStyle = soot;
g.fillRect(a0, top, a1 - a0, -0.8 - top);
// the mantel beam and what stands on it
g.fillStyle = '#4b321f';
g.fillRect(a0 - 0.12, top - 0.16, a1 - a0 + 0.24, 0.16);
g.fillStyle = '#5e4129';
g.fillRect(a0 - 0.16, top - 0.2, a1 - a0 + 0.32, 0.05);
const shelf = top - 0.2;
for (const x of [a0 + 0.1, a1 - 0.1]) {
  g.fillStyle = '#b8913e';
  g.fillRect(x - 0.05, shelf - 0.02, 0.1, 0.02);
  g.fillRect(x - 0.015, shelf - 0.2, 0.03, 0.2);
  g.fillStyle = '#efe9da';
  g.fillRect(x - 0.012, shelf - 0.36, 0.024, 0.16);
}
g.fillStyle = '#2f5a4a';
g.fillRect(1.45, shelf - 0.2, 0.16, 0.2);
g.fillStyle = '#c9a24c';
for (const [x, s] of [[1.95, 0.05], [2.06, 0.04], [2.15, 0.03]]) g.fillRect(x - s / 2, shelf - s * 1.4, s, s * 1.4);
// a rail of hooks and three copper pans, round bottoms toward the room
g.fillStyle = '#5b4330';
g.fillRect(-0.72, -1.96, 0.78, 0.05);
for (const [x, r] of [[-0.55, 0.11], [-0.27, 0.14], [-0.02, 0.1]]) {
  g.strokeStyle = '#3d2c20';
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(x, -1.91);
  g.lineTo(x, -1.83);
  g.stroke();
  g.fillStyle = '#b06a3c';
  g.beginPath();
  g.arc(x, -1.83 + r, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#d08d58';
  g.beginPath();
  g.arc(x - r * 0.3, -1.83 + r * 0.7, r * 0.35, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#7a4a2a';
  g.fillRect(x - 0.015, -1.83 + 2 * r, 0.03, 0.2);
}
// the clock: a plain white face in a dark wooden ring, its hands at twenty to ten
const cx = 0.62, cy = -2.08;
g.fillStyle = '#4a3422';
g.beginPath();
g.arc(cx, cy, 0.17, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f2ecdc';
g.beginPath();
g.arc(cx, cy, 0.14, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2b2520';
for (let h = 0; h < 12; h++) {
  const a = (h / 12) * Math.PI * 2;
  g.beginPath();
  g.arc(cx + Math.sin(a) * 0.115, cy - Math.cos(a) * 0.115, 0.008, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#2b2520';
g.lineCap = 'round';
for (const [a, l, w] of [[(Math.PI * 2 * (9 + 40 / 60)) / 12, 0.065, 0.015], [Math.PI * 2 * (40 / 60), 0.1, 0.009]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(cx, cy);
  g.lineTo(cx + Math.sin(a) * l, cy - Math.cos(a) * l);
  g.stroke();
}
