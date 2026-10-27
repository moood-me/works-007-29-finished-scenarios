// A block of limestone breaking through the hilltop (metres, from its foot): pale grey, flat-topped, pitted, its edges
// worn round; wet and darker toward its foot, a last rim of snow on its top's far side. Painted once; it stands in a few
// places (copies).
g.fillStyle = '#a7a194';
g.beginPath();
g.moveTo(-0.95, 0.06);
g.lineTo(-0.9, -0.3);
g.quadraticCurveTo(-0.8, -0.52, -0.5, -0.56);
g.lineTo(0.3, -0.6);
g.quadraticCurveTo(0.75, -0.55, 0.9, -0.28);
g.lineTo(0.98, 0.06);
g.closePath();
g.fill();
// its top, catching the light
g.fillStyle = '#c4beb0';
g.beginPath();
g.moveTo(-0.8, -0.46);
g.quadraticCurveTo(-0.7, -0.56, -0.5, -0.56);
g.lineTo(0.3, -0.6);
g.quadraticCurveTo(0.7, -0.56, 0.8, -0.42);
g.quadraticCurveTo(0, -0.38, -0.8, -0.46);
g.closePath();
g.fill();
// wet toward its foot
const wet = g.createLinearGradient(0, -0.3, 0, 0.06);
wet.addColorStop(0, 'rgba(120,114,104,0)');
wet.addColorStop(1, 'rgba(120,114,104,0.65)');
g.fillStyle = wet;
g.fillRect(-1, -0.3, 2, 0.36);
// pits and cracks
for (let i = 0; i < 22; i++) {
  g.fillStyle = 'rgba(112,106,96,0.65)';
  g.beginPath();
  g.arc(-0.75 + e.rnd() * 1.55, -0.48 + e.rnd() * 0.4, 0.008 + e.rnd() * 0.022, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(105,99,90,0.7)';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.2, -0.57);
g.lineTo(-0.12, -0.3);
g.lineTo(-0.2, -0.05);
g.moveTo(0.5, -0.58);
g.lineTo(0.56, -0.35);
g.stroke();
// the snow's last rim along its top
g.fillStyle = '#eef1f4';
g.beginPath();
g.moveTo(-0.45, -0.57);
g.quadraticCurveTo(0, -0.66, 0.42, -0.6);
g.quadraticCurveTo(0.1, -0.57, -0.45, -0.57);
g.closePath();
g.fill();
