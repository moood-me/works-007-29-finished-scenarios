// The big west window (metres from its foot at the sill's height, across from its middle; 2.4 wide, 1.65 high): a
// white frame, two slim mullions — three tall panes, the glass clear onto the field —, the blinds let down over its top,
// their slats open, a deep pale sill.
g.fillStyle = '#f1ece4';
g.fillRect(-1.2, -1.65, 2.4, 0.07);
g.fillRect(-1.2, -0.06, 2.4, 0.06);
g.fillRect(-1.2, -1.65, 0.07, 1.65);
g.fillRect(1.13, -1.65, 0.07, 1.65);
for (const x of [-0.42, 0.37]) g.fillRect(x, -1.65, 0.05, 1.65);
// the blinds, let down over the top of the window, their slats turned open: pale slats with the sky between them
// (the Sun comes in through them in stripes), the bottom rail, two cords hanging down one side
g.fillStyle = '#ece4d6';
for (let y = -1.58; y < -1.16; y += 0.07) g.fillRect(-1.13, y, 2.26, 0.04);
g.fillStyle = '#d8cfbf';
g.fillRect(-1.13, -1.16, 2.26, 0.03);
g.strokeStyle = '#cfc6b6';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.98, -1.13);
g.lineTo(0.98, -0.5);
g.moveTo(1.02, -1.13);
g.lineTo(1.02, -0.62);
g.stroke();
// the sill board, proud of the wall
g.fillStyle = '#ebe4d8';
g.fillRect(-1.3, -0.02, 2.6, 0.07);
g.fillStyle = '#cbbfad';
g.fillRect(-1.3, 0.05, 2.6, 0.02);
e.at(0, -0.85, 'window');
