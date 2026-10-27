// The bed's head (facing into the bed; x −0.45…0.45 along it, from the room's front to the back wall): white-enamelled
// steel tubes — two posts, a top rail bent down at the ends, three bars between.
g.strokeStyle = '#f1f1ec';
g.lineCap = 'round';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.44, 0);
g.lineTo(-0.44, -0.95);
g.quadraticCurveTo(-0.44, -1.03, -0.36, -1.03);
g.lineTo(0.36, -1.03);
g.quadraticCurveTo(0.44, -1.03, 0.44, -0.95);
g.lineTo(0.44, 0);
g.stroke();
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.44, -0.62);
g.lineTo(0.44, -0.62);
for (const x of [-0.2, 0, 0.2]) {
  g.moveTo(x, -0.62);
  g.lineTo(x, -1.03);
}
g.stroke();
