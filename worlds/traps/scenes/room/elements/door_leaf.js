// The door to the corridor standing open, hinged at its right post and swung out into the corridor: plain painted
// pine, four panels, a brass knob. Painted from its hinge to the left.
g.fillStyle = '#d4cbb4';
g.fillRect(-0.98, -2.13, 0.98, 2.13);
g.strokeStyle = '#b4a888';
g.lineWidth = 0.025;
for (const [y, h] of [[-2.0, 0.8], [-1.05, 0.9]]) {
  g.strokeRect(-0.88, y, 0.36, h);
  g.strokeRect(-0.46, y, 0.36, h);
}
g.fillStyle = '#c9a050';
g.beginPath();
g.arc(-0.88, -0.98, 0.028, 0, Math.PI * 2);
g.fill();
