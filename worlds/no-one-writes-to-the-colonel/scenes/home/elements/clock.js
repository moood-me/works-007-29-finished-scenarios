// The wall clock (metres from the bottom of its case): a tall case of dark wood with a carved top, a white face — its
// hands at twenty to six — and a glass door below where the brass pendulum swings (a layer the animate swings).
g.fillStyle = '#3e2a1e';
g.fillRect(-0.15, -0.6, 0.3, 0.6);
g.beginPath();
g.moveTo(-0.17, -0.6);
g.lineTo(0, -0.7);
g.lineTo(0.17, -0.6);
g.closePath();
g.fill();
g.fillStyle = '#5a3e2c';
g.fillRect(-0.17, -0.03, 0.34, 0.03);
// the face
g.fillStyle = '#ebe4d2';
g.beginPath();
g.arc(0, -0.47, 0.105, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#a58a4a';
g.lineWidth = 0.008;
g.stroke();
g.fillStyle = '#2a2420';
for (let i = 0; i < 12; i++) {
  const a = (i / 12) * Math.PI * 2;
  g.fillRect(Math.sin(a) * 0.085 - 0.004, -0.47 - Math.cos(a) * 0.085 - 0.004, 0.008, 0.008);
}
g.strokeStyle = '#1e1a18';
g.lineCap = 'round';
g.lineWidth = 0.012;
const hour = ((5 + 40 / 60) / 12) * Math.PI * 2;
g.beginPath();
g.moveTo(0, -0.47);
g.lineTo(Math.sin(hour) * 0.05, -0.47 - Math.cos(hour) * 0.05);
g.stroke();
g.lineWidth = 0.008;
const min = (40 / 60) * Math.PI * 2;
g.beginPath();
g.moveTo(0, -0.47);
g.lineTo(Math.sin(min) * 0.08, -0.47 - Math.cos(min) * 0.08);
g.stroke();
// the glass door: dark behind, a little gleam
g.fillStyle = '#21170f';
g.fillRect(-0.1, -0.33, 0.2, 0.27);
e.layer('pendulum', { pivot: [0, -0.34] }, c => {
  c.strokeStyle = '#a8894a';
  c.lineWidth = 0.008;
  c.beginPath();
  c.moveTo(0, -0.34);
  c.lineTo(0, -0.12);
  c.stroke();
  c.fillStyle = '#c9a75a';
  c.beginPath();
  c.arc(0, -0.1, 0.035, 0, Math.PI * 2);
  c.fill();
});
g.fillStyle = 'rgba(220,226,230,0.12)';
g.fillRect(-0.1, -0.33, 0.06, 0.27);
e.at(0, -0.47, 'face');
