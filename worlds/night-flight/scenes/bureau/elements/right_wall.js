// The right wall, seen from the room (its +x runs toward the viewer): the same distemper and green dado; a board of
// the three lines' timetables — three columns of pinned sheets; a cast-iron radiator under it.
g.fillStyle = '#bcb69e';
g.fillRect(-3.5, -3.55, 7, 3.6);
g.fillStyle = '#485948';
g.fillRect(-3.5, -1.1, 7, 1.1);
g.fillStyle = '#364335';
g.fillRect(-3.5, -1.14, 7, 0.06);
g.fillStyle = '#2e2620';
g.fillRect(-3.5, -0.14, 7, 0.14);
// the timetable board
g.fillStyle = '#5a4532';
g.fillRect(-1.6, -2.55, 1.9, 1.05);
g.fillStyle = '#8a6e52';
g.fillRect(-1.54, -2.49, 1.78, 0.93);
for (let c = 0; c < 3; c++) {
  for (let r = 0; r < 2; r++) {
    const x = -1.46 + c * 0.58;
    const y = -2.42 + r * 0.44;
    g.fillStyle = r === 0 ? '#ebe6d8' : '#e2dccb';
    g.fillRect(x, y, 0.46, 0.38);
    g.fillStyle = 'rgba(60,55,50,0.6)';
    for (let l = 0; l < 6; l++) g.fillRect(x + 0.05, y + 0.06 + l * 0.05, 0.36 - (l % 3) * 0.06, 0.012);
    g.fillStyle = c === 0 ? '#3b5d9a' : c === 1 ? '#7a8a3a' : '#a63a30';
    g.beginPath();
    g.arc(x + 0.23, y + 0.02, 0.018, 0, Math.PI * 2);
    g.fill();
  }
}
// the radiator: upright sections, a pipe
g.fillStyle = '#5c5f5c';
for (let k = 0; k < 9; k++) g.fillRect(-1.3 + k * 0.13, -0.85, 0.09, 0.72);
g.fillRect(-1.32, -0.86, 1.2, 0.04);
g.fillRect(-1.32, -0.2, 1.2, 0.04);
