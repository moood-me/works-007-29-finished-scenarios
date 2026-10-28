// The wall clock over the door's side of the window: a white face in a black rim, its marks, the hour hand painted at
// a little past ten; the minute and second hands are layers its animate turns as the scene's seconds go.
const R = 0.17;
g.fillStyle = '#2a2a2a';
g.beginPath();
g.arc(0, -R, R, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f6f5ef';
g.beginPath();
g.arc(0, -R, R * 0.88, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2a2a2a';
for (let i = 0; i < 60; i++) {
  const a = (i / 60) * Math.PI * 2, l = i % 5 ? 0.012 : 0.03, w = i % 5 ? 0.004 : 0.009;
  g.save();
  g.translate(0, -R);
  g.rotate(a);
  g.fillRect(-w / 2, -R * 0.84, w, l);
  g.restore();
}
g.save();
g.translate(0, -R);
g.rotate((10.33 / 12) * Math.PI * 2);
g.fillRect(-0.007, -0.085, 0.014, 0.095);
g.restore();
e.layer('minute', { pivot: [0, -R] }, c => {
  c.fillStyle = '#2a2a2a';
  c.fillRect(-0.005, -R - 0.13, 0.01, 0.145);
});
e.layer('second', { pivot: [0, -R] }, c => {
  c.fillStyle = '#b23a2e';
  c.fillRect(-0.002, -R - 0.14, 0.004, 0.17);
  c.beginPath();
  c.arc(0, -R, 0.01, 0, Math.PI * 2);
  c.fill();
});
