// The big west window (metres from its foot at the sill's height, across from its middle; 2.4 wide, 1.65 high): a
// white frame, two slim mullions — three tall panes, the glass clear onto the field —, the blinds drawn up into a
// bundle at the top on their cords, a deep pale sill.
g.fillStyle = '#f1ece4';
g.fillRect(-1.2, -1.65, 2.4, 0.07);
g.fillRect(-1.2, -0.06, 2.4, 0.06);
g.fillRect(-1.2, -1.65, 0.07, 1.65);
g.fillRect(1.13, -1.65, 0.07, 1.65);
for (const x of [-0.42, 0.37]) g.fillRect(x, -1.65, 0.05, 1.65);
// the blinds, drawn up: a stack of pale slats under the head, the bottom rail, two cords hanging down one side
g.fillStyle = '#ece4d6';
g.fillRect(-1.13, -1.59, 2.26, 0.16);
g.strokeStyle = 'rgba(170,158,140,0.7)';
g.lineWidth = 0.008;
g.beginPath();
for (let y = -1.57; y < -1.43; y += 0.022) {
  g.moveTo(-1.13, y);
  g.lineTo(1.13, y);
}
g.stroke();
g.fillStyle = '#d8cfbf';
g.fillRect(-1.13, -1.44, 2.26, 0.025);
g.strokeStyle = '#cfc6b6';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.98, -1.42);
g.lineTo(0.98, -0.7);
g.moveTo(1.02, -1.42);
g.lineTo(1.02, -0.85);
g.stroke();
// the sill board, proud of the wall
g.fillStyle = '#ebe4d8';
g.fillRect(-1.3, -0.02, 2.6, 0.07);
g.fillStyle = '#cbbfad';
g.fillRect(-1.3, 0.05, 2.6, 0.02);
e.at(0, -0.85, 'window');
