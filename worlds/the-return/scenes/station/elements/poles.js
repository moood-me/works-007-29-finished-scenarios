// A telegraph pole along the line, beyond the second track, and its wires to the next one 20 m on (the copies stand
// every 20 m): a weathered pole, a crossbar, white insulators, three wires sagging.
g.fillStyle = "#6e6253";
g.beginPath();
g.moveTo(-0.12, 0);
g.lineTo(-0.08, -7);
g.lineTo(0.08, -7);
g.lineTo(0.12, 0);
g.closePath();
g.fill();
g.fillStyle = "#675b4d";
g.fillRect(-0.62, -6.66, 1.24, 0.1);
g.fillStyle = "#e8e6df";
for (const x of [-0.5, 0.5]) g.fillRect(x - 0.035, -6.8, 0.07, 0.14);
g.fillRect(0.05, -6.18, 0.14, 0.07);
g.strokeStyle = "#5a554f";
g.lineWidth = 0.025;
for (const [x, y] of [[-0.5, -6.76], [0.5, -6.76], [0.15, -6.16]]) {
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + 10, y + 0.7, x + 20, y);
  g.stroke();
}
