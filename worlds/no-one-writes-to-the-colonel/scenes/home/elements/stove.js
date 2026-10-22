// The stove (metres from its foot): a hearth of adobe built up waist-high and whitewashed long ago, gone smoky; on
// it three stones round a small fire (the scene's particles; its embers the light "stove"), the blackened pot on the
// stones, the coffee tin open beside it with the knife across it; under it the hollow where the kindling is kept.
// a shelf on legs at the back with two tins and a gourd.
g.fillStyle = '#4a3a2e';
g.fillRect(-0.62, -1.6, 0.05, 0.8);
g.fillRect(0.57, -1.6, 0.05, 0.8);
g.fillRect(-0.66, -1.6, 1.32, 0.05);
g.fillStyle = '#8a8a86';
g.fillRect(-0.45, -1.78, 0.14, 0.18);
g.fillStyle = '#a07a4a';
g.fillRect(-0.25, -1.75, 0.12, 0.15);
g.fillStyle = '#b08848';
g.beginPath();
g.ellipse(0.3, -1.72, 0.09, 0.12, 0, 0, Math.PI * 2);
g.fill();
// the hearth's body
g.fillStyle = '#cfc4b0';
g.beginPath();
g.moveTo(-0.7, 0.02);
g.lineTo(-0.68, -0.8);
g.lineTo(0.68, -0.8);
g.lineTo(0.7, 0.02);
g.closePath();
g.fill();
const smoke = g.createLinearGradient(0, -0.8, 0, -0.2);
smoke.addColorStop(0, 'rgba(60,50,42,0.6)');
smoke.addColorStop(1, 'rgba(60,50,42,0)');
g.fillStyle = smoke;
g.fillRect(-0.7, -0.8, 1.4, 0.6);
for (let i = 0; i < 14; i++) {
  g.fillStyle = 'rgba(160,120,86,0.8)';
  g.beginPath();
  g.ellipse(-0.6 + e.rnd() * 1.2, -0.1 - e.rnd() * 0.6, 0.03 + e.rnd() * 0.06, 0.02 + e.rnd() * 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#b3a690';
g.fillRect(-0.72, -0.84, 1.44, 0.05);
// the hollow under it, the kindling
g.fillStyle = '#2c231c';
g.beginPath();
g.moveTo(-0.4, 0.02);
g.lineTo(-0.4, -0.36);
g.quadraticCurveTo(0, -0.5, 0.4, -0.36);
g.lineTo(0.4, 0.02);
g.closePath();
g.fill();
g.strokeStyle = '#7a5a3c';
g.lineWidth = 0.03;
for (let i = 0; i < 7; i++) {
  const y = -0.04 - i * 0.04;
  g.beginPath();
  g.moveTo(-0.34 + e.rnd() * 0.05, y);
  g.lineTo(0.34 - e.rnd() * 0.05, y - 0.02 + e.rnd() * 0.04);
  g.stroke();
}
// the three stones, the embers between them
g.fillStyle = '#5d5650';
for (const x of [-0.26, -0.12, 0.02]) {
  g.beginPath();
  g.ellipse(x, -0.88, 0.06, 0.05, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#c4501e';
g.beginPath();
g.ellipse(-0.12, -0.86, 0.1, 0.025, 0, 0, Math.PI * 2);
g.fill();
e.light(-0.12, -0.9, 0.18, '#ff8c3a', 0.9, 'embers');
// the pot, blackened
g.fillStyle = '#2a2624';
g.beginPath();
g.moveTo(-0.26, -0.93);
g.lineTo(-0.24, -1.1);
g.lineTo(0.0, -1.1);
g.lineTo(0.02, -0.93);
g.quadraticCurveTo(-0.12, -0.9, -0.26, -0.93);
g.fill();
g.fillStyle = '#3e3936';
g.fillRect(-0.27, -1.12, 0.3, 0.025);
g.fillRect(0.02, -1.08, 0.12, 0.018);
// the coffee tin, open, rust round its rim, the knife across it
g.fillStyle = '#9a6a3c';
g.fillRect(0.22, -1.0, 0.13, 0.16);
g.fillStyle = '#b8b2a6';
g.fillRect(0.22, -0.98, 0.13, 0.08);
g.fillStyle = '#7a4a26';
g.fillRect(0.22, -1.0, 0.13, 0.02);
g.fillStyle = '#c9ccd0';
g.save();
g.translate(0.29, -1.02);
g.rotate(-0.25);
g.fillRect(-0.02, -0.006, 0.17, 0.012);
g.fillStyle = '#4a3020';
g.fillRect(-0.11, -0.01, 0.09, 0.02);
g.restore();
e.at(0.28, -0.95, 'tin');
e.at(-0.12, -1.0, 'pot');
