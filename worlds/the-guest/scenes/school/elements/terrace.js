// The terrace before the classroom's door seen from above (metres, x along the wall, y toward its front edge at y 1.2):
// flags of grey limestone, the snow swept off its middle to the edges, trodden grey before the door (at x −2.6).
g.fillStyle = '#b8b1a3';
g.fillRect(-4.2, -1.2, 8.4, 2.4);
g.strokeStyle = '#9d968a';
g.lineWidth = 0.03;
for (let y = -1.2; y < 1.2; y += 0.6) {
  let x = -4.2 + e.rnd() * 0.4;
  while (x < 4.2) {
    const w = 0.5 + e.rnd() * 0.5;
    g.strokeRect(x, y, w, 0.6);
    x += w;
  }
}
// the snow swept to the edges, lying thick along the front and at the ends
g.fillStyle = '#eceff2';
g.fillRect(-4.2, 0.85, 8.4, 0.35);
g.fillRect(-4.2, -1.2, 0.5, 2.4);
g.fillRect(3.6, -1.2, 0.6, 2.4);
for (let i = 0; i < 30; i++) {
  g.globalAlpha = 0.5 + 0.4 * e.rnd();
  g.beginPath();
  g.ellipse(-4 + e.rnd() * 8, 0.6 + e.rnd() * 0.4, 0.1 + e.rnd() * 0.3, 0.05 + e.rnd() * 0.12, 0, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// trodden snow before the door
g.fillStyle = 'rgba(205,207,205,0.8)';
g.beginPath();
g.ellipse(-2.6, -0.4, 0.8, 0.5, 0, 0, Math.PI * 2);
g.fill();
