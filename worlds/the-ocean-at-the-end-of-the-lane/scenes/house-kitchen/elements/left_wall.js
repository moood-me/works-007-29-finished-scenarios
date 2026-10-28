// The left wall (x -2.7 at the front ... 2.7 at the back wall): the same flowered paper, a calendar from the garage
// over the table, the light switch by the doorway.
g.fillStyle = '#cfcfaa';
g.fillRect(-2.75, -2.42, 5.5, 2.44);
for (let r = 0, y = -2.35; y < 0; r++, y += 0.16) {
  for (let x = -2.75 + (r % 2) * 0.09; x < 2.75; x += 0.18) {
    g.fillStyle = r % 2 ? 'rgba(176, 108, 58, 0.55)' : 'rgba(130, 96, 62, 0.45)';
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + 0.4;
      g.beginPath();
      g.ellipse(x + Math.cos(a) * 0.022, y + Math.sin(a) * 0.022, 0.018, 0.011, a, 0, Math.PI * 2);
      g.fill();
    }
  }
}
g.fillStyle = '#e4ddc8';
g.fillRect(-2.75, -0.1, 5.5, 0.1);
// the calendar: a picture of a red car, the month's grid
g.fillStyle = '#f2eee2';
g.fillRect(0.5, -1.75, 0.34, 0.5);
g.fillStyle = '#7d98b8';
g.fillRect(0.53, -1.72, 0.28, 0.2);
g.fillStyle = '#b5443a';
g.beginPath();
g.roundRect(0.58, -1.6, 0.18, 0.06, 0.02);
g.fill();
g.fillStyle = 'rgba(60, 60, 70, 0.55)';
for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) g.fillRect(0.54 + c * 0.039, -1.47 + r * 0.04, 0.025, 0.02);
// the switch
g.fillStyle = '#efeadc';
g.fillRect(2.35, -1.42, 0.08, 0.08);
g.fillStyle = '#b9b2a0';
g.fillRect(2.38, -1.4, 0.02, 0.04);
