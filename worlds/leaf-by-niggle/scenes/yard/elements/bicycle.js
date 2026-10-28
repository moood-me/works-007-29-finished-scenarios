// Niggle's bicycle leaning against the shed's front (x across from between its wheels; 0 at the ground): an old black
// roadster, two thin wheels, the frame, the saddle, the handlebars turned a little.
g.strokeStyle = '#2c2a28';
g.lineWidth = 0.025;
for (const cx of [-0.55, 0.55]) {
  g.beginPath();
  g.arc(cx, -0.34, 0.33, 0, Math.PI * 2);
  g.stroke();
  g.lineWidth = 0.006;
  for (let k = 0; k < 12; k++) {
    const a = k / 12 * Math.PI * 2;
    g.beginPath();
    g.moveTo(cx, -0.34);
    g.lineTo(cx + Math.cos(a) * 0.32, -0.34 + Math.sin(a) * 0.32);
    g.stroke();
  }
  g.lineWidth = 0.025;
}
g.lineWidth = 0.035;
g.strokeStyle = '#26282a';
g.beginPath();
g.moveTo(-0.55, -0.34);
g.lineTo(-0.12, -0.36);
g.lineTo(-0.2, -0.78);
g.lineTo(-0.55, -0.34);
g.moveTo(-0.2, -0.78);
g.lineTo(0.42, -0.76);
g.lineTo(-0.12, -0.36);
g.moveTo(0.42, -0.76);
g.lineTo(0.55, -0.34);
g.moveTo(0.42, -0.76);
g.lineTo(0.38, -0.98);
g.moveTo(0.28, -0.98);
g.lineTo(0.5, -0.99);
g.moveTo(-0.2, -0.78);
g.lineTo(-0.23, -0.88);
g.stroke();
g.fillStyle = '#4a3828';
g.beginPath();
g.ellipse(-0.24, -0.9, 0.11, 0.035, 0, 0, Math.PI * 2);
g.fill();
