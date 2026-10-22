// A garden chair of white-painted iron seen from before: a back of curled bars, a round seat, four thin legs. Copies
// stand behind the table and one pulled out before it.
g.strokeStyle = '#ece6d8';
g.fillStyle = '#ece6d8';
g.lineCap = 'round';
g.lineWidth = 0.025;
g.beginPath();
for (const x of [-0.2, 0.2]) {
  g.moveTo(x, 0);
  g.lineTo(x * 1.05, -0.46);
  g.moveTo(x * 0.9, -0.02);
  g.lineTo(x * 0.95, -0.46);
}
g.moveTo(-0.21, -0.46);
g.lineTo(-0.2, -0.95);
g.moveTo(0.21, -0.46);
g.lineTo(0.2, -0.95);
g.moveTo(-0.2, -0.95);
g.quadraticCurveTo(0, -1.02, 0.2, -0.95);
g.stroke();
g.beginPath();
g.ellipse(0, -0.46, 0.23, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.lineWidth = 0.014;
g.beginPath();
for (const x of [-0.1, 0, 0.1]) {
  g.moveTo(x, -0.48);
  g.lineTo(x, -0.95);
}
for (const s of [-1, 1]) {
  g.moveTo(s * 0.02, -0.78);
  g.arc(s * 0.07, -0.78, 0.05, Math.PI, Math.PI * 3);
}
g.stroke();
