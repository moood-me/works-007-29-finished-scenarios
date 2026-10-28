// The left wall (its face toward the room; x runs from the back of the room, +1.8, to the front, −1.8): the two-tone
// paint (lib's wall); the clock — twenty to seven —; nearer, the washbasin with its mirror and a towel on the rail.
e.lib.wall(g, -1.82, 1.82);
// the clock
g.fillStyle = '#2f3436';
g.beginPath();
g.arc(0.55, -2.1, 0.17, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#f4f2ea';
g.beginPath();
g.arc(0.55, -2.1, 0.15, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2f3436';
for (let i = 0; i < 12; i++) {
  const a = (i * Math.PI) / 6;
  g.fillRect(0.55 + Math.sin(a) * 0.125 - 0.004, -2.1 - Math.cos(a) * 0.125 - 0.004, 0.008, 0.008);
}
g.strokeStyle = '#2f3436';
g.lineCap = 'round';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.55, -2.1);
g.lineTo(0.55 + Math.sin(3.4) * 0.07, -2.1 - Math.cos(3.4) * 0.07);
g.moveTo(0.55, -2.1);
g.lineTo(0.55 + Math.sin(4.19) * 0.11, -2.1 - Math.cos(4.19) * 0.11);
g.stroke();
// the washbasin, its mirror, the towel
g.fillStyle = '#c4cbcc';
g.fillRect(-1.0, -1.85, 0.42, 0.52);
g.fillStyle = '#9fb0b6';
g.fillRect(-0.98, -1.83, 0.38, 0.48);
g.fillStyle = 'rgba(255,255,255,0.25)';
g.fillRect(-0.95, -1.8, 0.08, 0.42);
g.fillStyle = '#f1f1ec';
g.beginPath();
g.moveTo(-1.08, -0.86);
g.lineTo(-0.5, -0.86);
g.quadraticCurveTo(-0.52, -0.66, -0.79, -0.64);
g.quadraticCurveTo(-1.06, -0.66, -1.08, -0.86);
g.fill();
g.fillStyle = '#b9bdbd';
g.fillRect(-0.81, -0.98, 0.04, 0.12);
g.fillRect(-0.85, -0.66, 0.08, 0.5);
g.fillStyle = '#9ea2a2';
g.fillRect(-0.32, -1.22, 0.4, 0.02);
g.fillStyle = '#f0e6cf';
g.fillRect(-0.28, -1.2, 0.3, 0.38);
g.fillStyle = '#c96a5a';
g.fillRect(-0.28, -0.92, 0.3, 0.03);
