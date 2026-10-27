// The office clock over the map: a dark wooden case, a white face with its hour marks, the hands at the scene's
// `time` (minutes after midnight); the second hand its own layer, ticking (animate).
const C = [0, -3.0];
const R = 0.21;
g.fillStyle = '#3a2a1e';
g.beginPath();
g.arc(C[0], C[1], R + 0.06, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#efeadc';
g.beginPath();
g.arc(C[0], C[1], R, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#26221e';
for (let k = 0; k < 60; k++) {
  const a = (k / 60) * Math.PI * 2;
  const big = k % 5 === 0;
  const r0 = R * (big ? 0.78 : 0.88);
  g.save();
  g.translate(C[0] + Math.sin(a) * r0, C[1] - Math.cos(a) * r0);
  g.rotate(a);
  g.fillRect(-(big ? 0.008 : 0.003), 0, big ? 0.016 : 0.006, R * (big ? 0.16 : 0.07));
  g.restore();
}
const t = ((e.state.time % 720) + 720) % 720;
const hand = (a, len, w) => {
  g.save();
  g.translate(C[0], C[1]);
  g.rotate(a);
  g.beginPath();
  g.moveTo(-w, 0.03);
  g.lineTo(w, 0.03);
  g.lineTo(w * 0.4, -len);
  g.lineTo(-w * 0.4, -len);
  g.closePath();
  g.fill();
  g.restore();
};
g.fillStyle = '#1c1915';
hand((t / 720) * Math.PI * 2, R * 0.52, 0.013);
hand(((t % 60) / 60) * Math.PI * 2, R * 0.78, 0.009);
e.layer('second', { pivot: C }, c => {
  c.fillStyle = '#9a2a22';
  c.fillRect(C[0] - 0.003, C[1] - R * 0.86, 0.006, R * 1.0);
  c.beginPath();
  c.arc(C[0], C[1], 0.012, 0, Math.PI * 2);
  c.fill();
});
e.at(C[0], C[1], 'face');
