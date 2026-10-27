// The back wall behind Martin's counter, on the left: grey boards up to the roof, two shelves — rum and cane spirit
// in bottles amber and green, tins of milk and beer stacked, glasses upside down — and, pinned by the end of the
// wall, a page of newspaper gone yellow with a ballplayer at bat (point `clipping`). Metres along the wall: it faces
// the room (90), x 0 is 6.5 m ahead, + farther toward the water.
g.fillStyle = '#9a8466';
g.fillRect(-3.8, -3.15, 7.6, 3.2);
g.strokeStyle = 'rgba(70,56,42,0.45)';
g.lineWidth = 0.02;
for (let x = -3.8 + 0.2; x < 3.8; x += 0.2 + 0.04 * e.rnd()) {
  g.beginPath();
  g.moveTo(x, -3.15);
  g.lineTo(x, 0.05);
  g.stroke();
}
// the shelves, on brackets
for (const y of [-1.45, -1.95]) {
  g.fillStyle = '#5e4b38';
  g.fillRect(-0.9, y, 3.2, 0.05);
  g.fillStyle = '#4c3c2d';
  for (const x of [-0.7, 0.8, 2.1]) g.fillRect(x, y + 0.05, 0.04, 0.14);
}
// what stands on them
const bottle = (x, y, h, c) => {
  g.fillStyle = c;
  g.fillRect(x - 0.035, y - h * 0.7, 0.07, h * 0.7);
  g.beginPath();
  g.moveTo(x - 0.035, y - h * 0.7);
  g.quadraticCurveTo(x - 0.015, y - h * 0.82, x - 0.012, y - h);
  g.lineTo(x + 0.012, y - h);
  g.quadraticCurveTo(x + 0.015, y - h * 0.82, x + 0.035, y - h * 0.7);
  g.fill();
  g.fillStyle = 'rgba(255,240,210,0.35)';
  g.fillRect(x - 0.022, y - h * 0.65, 0.012, h * 0.5);
};
const tin = (x, y, w, h, c, band) => {
  g.fillStyle = c;
  g.fillRect(x - w / 2, y - h, w, h);
  g.fillStyle = band;
  g.fillRect(x - w / 2, y - h * 0.7, w, h * 0.35);
};
const ambers = ['#9a5a26', '#7a4a20', '#5d6f3a', '#b07a36'];
for (let i = 0; i < 9; i++) bottle(-0.75 + i * 0.13 + 0.03 * e.rnd(), -1.95, 0.26 + 0.06 * e.rnd(), ambers[i % 4]);
for (let i = 0; i < 6; i++) tin(0.6 + i * 0.1, -1.95, 0.08, 0.12, '#b8b2a4', i % 2 ? '#a24a3a' : '#c9b46a');
for (let i = 0; i < 4; i++) tin(1.3 + i * 0.1, -2.07, 0.08, 0.12, '#b8b2a4', '#a24a3a');
for (let i = 0; i < 7; i++) tin(-0.7 + i * 0.1, -1.45, 0.08, 0.12, '#b8b2a4', '#a24a3a');
for (let i = 0; i < 5; i++) tin(-0.7 + i * 0.1, -1.57, 0.08, 0.12, '#b8b2a4', '#a24a3a');
g.fillStyle = 'rgba(220,226,222,0.75)';
for (let i = 0; i < 6; i++) {
  const x = 0.3 + i * 0.12;
  g.beginPath();
  g.moveTo(x - 0.035, -1.45);
  g.lineTo(x + 0.035, -1.45);
  g.lineTo(x + 0.028, -1.55);
  g.lineTo(x - 0.028, -1.55);
  g.closePath();
  g.fill();
}
for (let i = 0; i < 4; i++) bottle(1.3 + i * 0.16, -1.45, 0.3, ambers[(i + 1) % 4]);
// the newspaper page with the ballplayer
g.fillStyle = '#e2d6b2';
g.fillRect(2.6, -1.85, 0.5, 0.62);
g.fillStyle = 'rgba(90,84,76,0.6)';
for (let y = -1.8; y < -1.3; y += 0.035) g.fillRect(2.64, y, 0.18, 0.012);
g.fillStyle = '#7d766a';
g.fillRect(2.86, -1.78, 0.2, 0.26);
g.fillStyle = '#3e3a34';
g.beginPath();
g.ellipse(2.95, -1.7, 0.02, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(2.935, -1.675, 0.03, 0.09);
g.strokeStyle = '#3e3a34';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(2.95, -1.66);
g.lineTo(3.03, -1.74);
g.stroke();
e.at(2.85, -1.55, 'clipping');
