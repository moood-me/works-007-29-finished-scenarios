// A block of limestone standing out of the snow (metres, from its foot): pale grey, pitted, flat-topped with a cap of
// snow, darker toward its foot. Painted once; it stands in a few places (copies).
g.fillStyle = '#9e998e';
g.beginPath();
g.moveTo(-0.75, 0.05);
g.lineTo(-0.7, -0.35);
g.lineTo(-0.5, -0.58);
g.lineTo(0.1, -0.66);
g.lineTo(0.55, -0.55);
g.lineTo(0.78, -0.25);
g.lineTo(0.8, 0.05);
g.closePath();
g.fill();
g.fillStyle = '#b3aea2';
g.beginPath();
g.moveTo(-0.6, -0.45);
g.lineTo(-0.48, -0.58);
g.lineTo(0.1, -0.66);
g.lineTo(0.55, -0.55);
g.lineTo(0.62, -0.4);
g.lineTo(0.0, -0.38);
g.closePath();
g.fill();
for (let i = 0; i < 18; i++) {
  g.fillStyle = 'rgba(110,105,96,0.6)';
  g.beginPath();
  g.arc(-0.6 + e.rnd() * 1.3, -0.5 + e.rnd() * 0.45, 0.01 + e.rnd() * 0.025, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#eef1f4';
g.beginPath();
g.moveTo(-0.55, -0.55);
g.quadraticCurveTo(-0.1, -0.78, 0.55, -0.6);
g.quadraticCurveTo(0.2, -0.52, -0.55, -0.5);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-0.85, 0.06);
g.quadraticCurveTo(0, -0.12, 0.9, 0.06);
g.closePath();
g.fill();
