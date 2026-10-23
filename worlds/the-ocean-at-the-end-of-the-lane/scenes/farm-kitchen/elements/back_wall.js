// The back wall, limewashed and a little uneven, the deep window cut through it (x −1.5…0.1, 0.95–2.05 m), a dark
// skirting of tarred stone, copper pans on hooks and a plain clock to the right of the window.
const hole = new Path2D();
hole.rect(-3.45, -2.72, 6.9, 2.74);
hole.rect(-1.5, -2.05, 1.6, 1.1);
g.fillStyle = '#e8dfca';
g.fill(hole, 'evenodd');
g.save();
g.clip(hole, 'evenodd');
// the limewash's mottling: soft patches a shade warmer and a shade greyer
for (let k = 0; k < 70; k++) {
  const x = -3.4 + 6.8 * e.rnd(), y = -2.7 + 2.6 * e.rnd(), r = 0.15 + 0.4 * e.rnd();
  const p = g.createRadialGradient(x, y, 0, x, y, r);
  p.addColorStop(0, e.rnd() < 0.5 ? 'rgba(214, 196, 160, 0.35)' : 'rgba(196, 190, 176, 0.3)');
  p.addColorStop(1, 'rgba(214, 196, 160, 0)');
  g.fillStyle = p;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
// smoke-darkened under the ceiling
const soot = g.createLinearGradient(0, -2.72, 0, -2.2);
soot.addColorStop(0, 'rgba(120, 100, 80, 0.35)');
soot.addColorStop(1, 'rgba(120, 100, 80, 0)');
g.fillStyle = soot;
g.fillRect(-3.45, -2.72, 6.9, 0.52);
g.restore();
// the skirting
g.fillStyle = '#4a4038';
g.fillRect(-3.45, -0.14, 6.9, 0.16);
// a rail of hooks and three copper pans, round bottoms toward the room
g.fillStyle = '#5b4330';
g.fillRect(1.05, -1.86, 1.55, 0.05);
for (const [x, r] of [[1.3, 0.13], [1.78, 0.17], [2.3, 0.12]]) {
  g.strokeStyle = '#3d2c20';
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(x, -1.81);
  g.lineTo(x, -1.72);
  g.stroke();
  g.fillStyle = '#b06a3c';
  g.beginPath();
  g.arc(x, -1.72 + r, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#d08d58';
  g.beginPath();
  g.arc(x - r * 0.3, -1.72 + r * 0.7, r * 0.35, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#7a4a2a';
  g.fillRect(x - 0.015, -1.72 + 2 * r, 0.03, 0.22);
}
// the clock: a plain white face in a dark wooden ring, its hands at twenty to ten
g.fillStyle = '#4a3422';
g.beginPath();
g.arc(1.85, -2.28, 0.19, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f2ecdc';
g.beginPath();
g.arc(1.85, -2.28, 0.155, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2b2520';
for (let h = 0; h < 12; h++) {
  const a = (h / 12) * Math.PI * 2;
  g.beginPath();
  g.arc(1.85 + Math.sin(a) * 0.13, -2.28 - Math.cos(a) * 0.13, 0.008, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#2b2520';
g.lineCap = 'round';
for (const [a, l, w] of [[(Math.PI * 2 * (9 + 40 / 60)) / 12, 0.075, 0.016], [Math.PI * 2 * (40 / 60), 0.115, 0.01]]) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(1.85, -2.28);
  g.lineTo(1.85 + Math.sin(a) * l, -2.28 - Math.cos(a) * l);
  g.stroke();
}
