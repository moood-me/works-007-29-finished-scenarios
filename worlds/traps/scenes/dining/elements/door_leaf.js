// The door to the hall standing open, hinged at its right post and swung into the hall: walnut, four panels, a
// brass knob. Painted from its hinge to the left.
g.fillStyle = '#4e3528';
g.fillRect(-0.98, -2.43, 0.98, 2.43);
g.strokeStyle = '#3a271d';
g.lineWidth = 0.03;
for (const [y, h] of [[-2.3, 0.9], [-1.2, 1.05]]) {
  g.strokeRect(-0.88, y, 0.36, h);
  g.strokeRect(-0.46, y, 0.36, h);
}
g.fillStyle = '#c9a050';
g.beginPath();
g.arc(-0.88, -1.0, 0.03, 0, Math.PI * 2);
g.fill();
