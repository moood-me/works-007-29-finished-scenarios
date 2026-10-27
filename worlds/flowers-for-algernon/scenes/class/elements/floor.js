// The classroom floor from above (metres, its middle at distance 3.85, y toward the viewer): narrow maple boards
// running across the room, honey-coloured and oiled, their joints staggered, worn paler in the aisle between the
// rows and before the blackboard.
g.fillStyle = '#9c7449';
g.fillRect(-3.3, -2.85, 6.6, 5.7);
g.strokeStyle = '#7d5a37';
g.lineWidth = 0.008;
let row = 0;
for (let y = -2.85; y < 2.85; y += 0.09, row++) {
  g.beginPath();
  g.moveTo(-3.3, y);
  g.lineTo(3.3, y);
  g.stroke();
  for (let x = -3.3 + ((row * 0.73) % 1.4); x < 3.3; x += 1.4) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y + 0.09);
    g.stroke();
  }
  g.fillStyle = `rgba(${row % 3 ? 120 : 160},${row % 3 ? 86 : 118},52,0.12)`;
  g.fillRect(-3.3, y, 6.6, 0.09);
}
g.fillStyle = 'rgba(215,190,150,0.16)';
g.beginPath();
g.ellipse(-0.05, 0, 0.45, 2.7, 0, 0, Math.PI * 2);
g.ellipse(-2.4, -0.6, 0.7, 1.8, 0, 0, Math.PI * 2);
g.fill();
