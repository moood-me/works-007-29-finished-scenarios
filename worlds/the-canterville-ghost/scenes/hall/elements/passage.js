// Behind the hidden panel on the landing: the narrow way in the wall going down to the secret chamber — rough stone
// sides and a low stone vault going back into the dark (seen only through the panel's opening, when it stands open;
// from the hall below, the eye under the landing's floor, the steps going down are out of sight).
g.fillStyle = '#16120f';
g.fillRect(-0.5, -1.95, 1.0, 1.97);
const near = g.createLinearGradient(0, -1.95, 0, 0);
near.addColorStop(0, 'rgba(92,84,74,0.75)');
near.addColorStop(0.5, 'rgba(60,54,48,0.45)');
near.addColorStop(1, 'rgba(24,20,17,0.2)');
g.fillStyle = near;
g.beginPath();
g.moveTo(-0.5, 0.02);
g.lineTo(-0.5, -1.95);
g.lineTo(0.5, -1.95);
g.lineTo(0.5, 0.02);
g.lineTo(0.22, 0.02);
g.lineTo(0.22, -1.25);
g.quadraticCurveTo(0, -1.45, -0.22, -1.25);
g.lineTo(-0.22, 0.02);
g.closePath();
g.fill();
// the stone courses of its sides and vault
g.strokeStyle = 'rgba(30,26,22,0.8)';
g.lineWidth = 0.014;
for (let y = -0.25; y > -1.9; y -= 0.26) {
  g.beginPath();
  g.moveTo(-0.5, y);
  g.lineTo(-0.24, y + 0.06);
  g.moveTo(0.5, y);
  g.lineTo(0.24, y + 0.06);
  g.stroke();
}
