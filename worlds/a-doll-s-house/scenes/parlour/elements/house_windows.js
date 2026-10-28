// The lit windows of the houses across the street, over their dark panes (houses): warm lamplight behind curtains,
// a glow each upper one (`w0`…`w7`), shown as the day goes (the layer `lit` and the glows, by its animate). The
// houses' metres.
const ROWS = [-2.9, -5.3];
e.layer('lit', {}, c => {
  let n = 0;
  for (let i = 0; i < 4; i++) {
    for (const y of ROWS) {
      for (const dx of [0.55, 1.85]) {
        const x = -6 + i * 3 + dx;
        c.fillStyle = (i + n) % 3 ? '#f0bf72' : '#d9a35e';
        c.fillRect(x, y - 1.5, 0.6, 1.5);
        c.fillStyle = 'rgba(160,90,60,0.5)';
        c.fillRect(x, y - 1.5, 0.12, 1.5);
        c.fillRect(x + 0.48, y - 1.5, 0.12, 1.5);
        if (y === ROWS[1]) {
          e.light(x + 0.3, y - 0.75, 0.6, '#ffc77e', 0.4, `w${n}`);
          n += 1;
        }
      }
    }
  }
});
