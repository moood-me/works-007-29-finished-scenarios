// The park far beyond the avenue (90 m off, 240 m wide): a low band of woods in the autumn haze, rust and gold, the
// churchyard's old yew a dark lump among them.
g.fillStyle = '#9a7a4c';
g.beginPath();
g.moveTo(-120, 0);
for (let x = -120; x <= 120; x += 4) g.lineTo(x, -12 - 6 * Math.abs(Math.sin(x * 0.07)) - 4 * e.rnd());
g.lineTo(120, 0);
g.closePath();
g.fill();
g.fillStyle = '#7a5a36';
g.beginPath();
g.moveTo(-120, 0);
for (let x = -120; x <= 120; x += 3) g.lineTo(x, -6 - 4 * Math.abs(Math.sin(x * 0.11 + 1)) - 2 * e.rnd());
g.lineTo(120, 0);
g.closePath();
g.fill();
g.fillStyle = '#2f3a2c';
g.beginPath();
g.ellipse(26, -9, 7, 9, 0, 0, Math.PI * 2);
g.fill();
