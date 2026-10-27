// The window's frame (its opening x −0.8…0.8, from the sill up 1.15 m; the frame is set a little lower, from 0.94 m):
// white-painted wood, the sash bars, the sill board, and a geranium in a clay pot on the sill.
const F = '#f3efe6';
g.fillStyle = F;
g.fillRect(-0.86, -1.24, 0.1, 1.2);
g.fillRect(0.76, -1.24, 0.1, 1.2);
g.fillRect(-0.86, -1.24, 1.72, 0.1);
g.fillRect(-0.8, -0.71, 1.6, 0.06);
g.fillRect(-0.025, -1.18, 0.05, 1.14);
g.fillStyle = 'rgba(120,108,90,0.25)';
g.fillRect(-0.76, -1.14, 0.03, 1.08);
// the sill board
g.fillStyle = '#ebe5d8';
g.fillRect(-0.92, -0.06, 1.84, 0.08);
g.fillStyle = 'rgba(90,80,60,0.25)';
g.fillRect(-0.92, 0.0, 1.84, 0.02);
// the geranium
g.fillStyle = '#b4674a';
g.beginPath();
g.moveTo(-0.62, -0.06);
g.lineTo(-0.6, -0.22);
g.lineTo(-0.4, -0.22);
g.lineTo(-0.42, -0.06);
g.closePath();
g.fill();
g.fillStyle = '#a65c40';
g.fillRect(-0.63, -0.25, 0.26, 0.04);
e.layer('plant', { pivot: [-0.5, -0.24], wind: 0.05, box: [-0.78, -0.62, -0.22, -0.2] }, c => {
  for (let i = 0; i < 14; i++) {
    c.fillStyle = e.rnd() < 0.5 ? '#5f7d45' : '#728f50';
    c.beginPath();
    c.arc(-0.5 + (e.rnd() - 0.5) * 0.4, -0.3 - e.rnd() * 0.18, 0.04 + e.rnd() * 0.03, 0, Math.PI * 2);
    c.fill();
  }
  for (const [x, y] of [[-0.6, -0.52], [-0.44, -0.56], [-0.36, -0.46]]) {
    c.fillStyle = '#c4473c';
    for (let k = 0; k < 6; k++) {
      c.beginPath();
      c.arc(x + Math.cos(k) * 0.025, y + Math.sin(k) * 0.025, 0.022, 0, Math.PI * 2);
      c.fill();
    }
  }
});
