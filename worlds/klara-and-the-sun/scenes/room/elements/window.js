// The big west window (metres from its foot at the sill's height, across from its middle; 2.68 wide, 1.7 high): a
// white frame, two slim mullions — three tall panes, the glass clear onto the field —, the blinds drawn up into a
// bundle at the top on their cords, a deep pale sill.
g.fillStyle = '#f1ece4';
g.fillRect(-1.34, -1.7, 2.68, 0.07);
g.fillRect(-1.34, -0.06, 2.68, 0.06);
g.fillRect(-1.34, -1.7, 0.07, 1.7);
g.fillRect(1.27, -1.7, 0.07, 1.7);
for (const x of [-0.47, 0.42]) g.fillRect(x, -1.7, 0.05, 1.7);
// the blinds, drawn up: a stack of pale slats under the head, the bottom rail, two cords hanging down one side
g.fillStyle = '#ece4d6';
g.fillRect(-1.3, -1.64, 2.6, 0.16);
g.strokeStyle = 'rgba(170,158,140,0.7)';
g.lineWidth = 0.008;
g.beginPath();
for (let y = -1.62; y < -1.48; y += 0.022) {
  g.moveTo(-1.3, y);
  g.lineTo(1.3, y);
}
g.stroke();
g.fillStyle = '#d8cfbf';
g.fillRect(-1.3, -1.49, 2.6, 0.025);
g.strokeStyle = '#cfc6b6';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(1.12, -1.47);
g.lineTo(1.12, -0.75);
g.moveTo(1.16, -1.47);
g.lineTo(1.16, -0.9);
g.stroke();
// the sill board, proud of the wall
g.fillStyle = '#ebe4d8';
g.fillRect(-1.44, -0.02, 2.88, 0.07);
g.fillStyle = '#cbbfad';
g.fillRect(-1.44, 0.05, 2.88, 0.02);
e.at(0, -0.85, 'window');
