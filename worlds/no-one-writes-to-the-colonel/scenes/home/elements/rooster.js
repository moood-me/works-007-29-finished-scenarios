// The rooster (metres from his feet, facing left — toward the room's middle): a fighting cock, lean and tall,
// his comb and wattles cut close for the pit; rust-red and gold hackles, dark green-black tail sickles, yellow legs,
// the white string tied round his right leg. His head and his tail are layers the animate moves.
// the legs
g.strokeStyle = '#d3a64a';
g.lineCap = 'round';
g.lineWidth = 0.022;
for (const [x0, x1] of [[0.02, -0.03], [0.09, 0.11]]) {
  g.beginPath();
  g.moveTo(x0 + 0.02, -0.26);
  g.lineTo(x1, -0.02);
  g.stroke();
  g.lineWidth = 0.01;
  g.beginPath();
  g.moveTo(x1 - 0.06, 0);
  g.lineTo(x1 + 0.04, 0);
  g.stroke();
  g.lineWidth = 0.022;
}
g.strokeStyle = '#e4dccb';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.1, -0.06);
g.lineTo(0.13, -0.05);
g.stroke();
// the tail
e.layer('tail', { pivot: [0.17, -0.36] }, c => {
  const sickle = (a, b, col, w) => {
    c.strokeStyle = col;
    c.lineWidth = w;
    c.beginPath();
    c.moveTo(0.15, -0.36);
    c.quadraticCurveTo(0.3 + a, -0.62 - b, 0.36 + a, -0.3 - b * 0.4);
    c.stroke();
  };
  sickle(0.02, 0.05, '#1f2a24', 0.05);
  sickle(0.06, 0.0, '#24382e', 0.045);
  sickle(-0.02, 0.1, '#16201c', 0.04);
  sickle(0.1, -0.06, '#2e4a3a', 0.03);
});
// the body
g.fillStyle = '#7a2e1c';
g.beginPath();
g.moveTo(-0.08, -0.42);
g.bezierCurveTo(-0.14, -0.3, -0.04, -0.2, 0.08, -0.22);
g.bezierCurveTo(0.2, -0.24, 0.24, -0.34, 0.18, -0.42);
g.bezierCurveTo(0.1, -0.46, 0.0, -0.46, -0.08, -0.42);
g.fill();
g.fillStyle = '#3a2a22';
g.beginPath();
g.ellipse(0.06, -0.27, 0.11, 0.04, -0.2, 0, Math.PI * 2);
g.fill();
// the wing
g.fillStyle = '#9a3e22';
g.beginPath();
g.moveTo(-0.02, -0.38);
g.bezierCurveTo(0.06, -0.4, 0.18, -0.36, 0.2, -0.3);
g.bezierCurveTo(0.1, -0.27, 0.02, -0.29, -0.02, -0.38);
g.fill();
// the head and the neck's hackles
e.layer('head', { pivot: [-0.06, -0.42] }, c => {
  c.fillStyle = '#c9822e';
  c.beginPath();
  c.moveTo(-0.1, -0.36);
  c.bezierCurveTo(-0.13, -0.46, -0.11, -0.54, -0.08, -0.56);
  c.lineTo(-0.03, -0.55);
  c.bezierCurveTo(0.0, -0.5, 0.02, -0.42, 0.02, -0.36);
  c.closePath();
  c.fill();
  c.strokeStyle = '#e0a848';
  c.lineWidth = 0.006;
  for (let i = 0; i < 6; i++) {
    c.beginPath();
    c.moveTo(-0.09 + i * 0.016, -0.53);
    c.lineTo(-0.1 + i * 0.02, -0.38);
    c.stroke();
  }
  c.fillStyle = '#a8432a';
  c.beginPath();
  c.ellipse(-0.08, -0.575, 0.04, 0.032, 0, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#b8302a';
  c.fillRect(-0.105, -0.615, 0.05, 0.018);
  c.beginPath();
  c.ellipse(-0.115, -0.545, 0.012, 0.016, 0, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#d9b860';
  c.beginPath();
  c.moveTo(-0.115, -0.59);
  c.lineTo(-0.155, -0.575);
  c.lineTo(-0.115, -0.565);
  c.closePath();
  c.fill();
  c.fillStyle = '#e8b030';
  c.beginPath();
  c.arc(-0.09, -0.585, 0.007, 0, Math.PI * 2);
  c.fill();
});
