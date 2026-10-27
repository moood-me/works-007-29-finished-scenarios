// The lit windows of the houses across the street, over their dark panes (houses): warm lamplight behind curtains in
// most of them, late on the night of the ball, a glow each in the upper row (`w0`…). The houses' metres.
const ROWS = [-3.8, -6.6];
let n = 0;
for (let i = 0; i < 6; i++) {
  for (const y of ROWS) {
    for (const dx of [0.55, 1.85]) {
      if ((i * 4 + n) % 5 === 2) {
        n += 1;
        continue;
      }
      const x = -9 + i * 3 + dx;
      g.fillStyle = (i + n) % 3 ? '#f0bf72' : '#d9a35e';
      g.fillRect(x, y - 1.5, 0.6, 1.5);
      g.fillStyle = 'rgba(160,90,60,0.5)';
      g.fillRect(x, y - 1.5, 0.12, 1.5);
      g.fillRect(x + 0.48, y - 1.5, 0.12, 1.5);
      if (y === ROWS[1]) e.light(x + 0.3, y - 0.75, 0.6, '#ffc77e', 0.35, `w${n}`);
      n += 1;
    }
  }
}
