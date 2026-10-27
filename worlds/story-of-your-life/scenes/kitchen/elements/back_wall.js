// The kitchen's back wall, from its foot (x −3.05…3.05, the ceiling at 2.55 m): cream paint cut round the window
// (x −0.2…1.4, its sill at 1.0 m, its top at 2.15 m); the tiles over the counter, the sage cupboards on the left,
// the clock on the right (twenty to seven).
g.save();
g.beginPath();
g.rect(-3.05, -2.57, 6.1, 2.59);
g.rect(-0.2, -2.15, 1.6, 1.15);
g.clip('evenodd');
g.fillStyle = '#e9dfcb';
g.fillRect(-3.05, -2.57, 6.1, 2.59);
// the tiles behind the counter
g.fillStyle = '#f1ece1';
g.fillRect(-3.05, -1.55, 4.87, 0.63);
g.strokeStyle = '#cfc5b2';
g.lineWidth = 0.008;
for (let x = -3.05; x < 1.82; x += 0.15) {
  g.beginPath();
  g.moveTo(x, -1.55);
  g.lineTo(x, -0.92);
  g.stroke();
}
for (let y = -1.55; y < -0.9; y += 0.15) {
  g.beginPath();
  g.moveTo(-3.05, y);
  g.lineTo(1.82, y);
  g.stroke();
}
g.restore();
// the cupboards: three doors, their knobs, the shadow under them
g.fillStyle = 'rgba(80,70,50,0.18)';
g.fillRect(-3.0, -1.6, 2.55, 0.06);
for (let i = 0; i < 3; i++) {
  const x = -3.0 + i * 0.85;
  g.fillStyle = '#8fa18b';
  g.fillRect(x + 0.02, -2.38, 0.81, 0.78);
  g.strokeStyle = 'rgba(70,86,68,0.6)';
  g.lineWidth = 0.012;
  g.strokeRect(x + 0.09, -2.31, 0.67, 0.64);
  g.fillStyle = '#b89a5e';
  g.beginPath();
  g.arc(x + (i === 1 ? 0.12 : 0.73), -1.72, 0.018, 0, Math.PI * 2);
  g.fill();
}
// the clock
g.fillStyle = '#5c544a';
g.beginPath();
g.arc(2.35, -1.95, 0.17, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f6f2ea';
g.beginPath();
g.arc(2.35, -1.95, 0.145, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#3b3630';
g.lineCap = 'round';
for (let k = 0; k < 12; k++) {
  const a = (k / 12) * Math.PI * 2;
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(2.35 + Math.sin(a) * 0.12, -1.95 - Math.cos(a) * 0.12);
  g.lineTo(2.35 + Math.sin(a) * 0.135, -1.95 - Math.cos(a) * 0.135);
  g.stroke();
}
const hand = (a, l, w) => {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(2.35, -1.95);
  g.lineTo(2.35 + Math.sin(a) * l, -1.95 - Math.cos(a) * l);
  g.stroke();
};
hand(((6 + 40 / 60) / 12) * Math.PI * 2, 0.075, 0.014);
hand((40 / 60) * Math.PI * 2, 0.115, 0.009);
// the skirting where the wall shows
g.fillStyle = '#d9cdb6';
g.fillRect(1.82, -0.1, 1.23, 0.12);
