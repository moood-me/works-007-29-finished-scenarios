// The inner shutter of the window, open against the room at the window's left, standing out from the wall (its hinge
// at x 0, its free edge 0.42 m into the room); on it hangs his shaving mirror, a small square of glass on a nail. Its
// point `mirror`
g.fillStyle = '#6e5440';
g.fillRect(0, -2.0, 0.42, 0.95);
g.fillStyle = '#5c4535';
for (const x of [0.13, 0.27]) g.fillRect(x, -2.0, 0.012, 0.95);
g.fillRect(0, -1.85, 0.42, 0.05);
g.fillRect(0, -1.25, 0.42, 0.05);
// the mirror on its string
g.strokeStyle = '#3a2c20';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.21, -1.78);
g.lineTo(0.15, -1.7);
g.moveTo(0.21, -1.78);
g.lineTo(0.27, -1.7);
g.stroke();
g.fillStyle = '#3a2c20';
g.fillRect(0.13, -1.7, 0.16, 0.18);
const glass = g.createLinearGradient(0.14, -1.69, 0.28, -1.53);
glass.addColorStop(0, '#c9d2d6');
glass.addColorStop(1, '#8a969c');
g.fillStyle = glass;
g.fillRect(0.145, -1.685, 0.13, 0.15);
e.at(0.21, -1.61, 'mirror');
