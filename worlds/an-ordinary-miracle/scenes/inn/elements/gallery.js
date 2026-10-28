// The gallery along the back wall over the counter (its floor 2.45 m up, from the chimney to the right wall): a heavy
// oak beam for its front, a row of turned balusters and a handrail, a striped blanket thrown over the rail to air,
// bunches of dried herbs and strings of red peppers hanging under the beam.
const L = e.lib, X0 = -3.35, X1 = 3.35;
L.timber(g, 351, X0, -0.12, X1, -0.12, 0.26);
for (let x = X0 + 0.1; x < X1; x += 0.2) {
  g.fillStyle = '#6a4428';
  g.fillRect(x - 0.025, -1.0, 0.05, 0.75);
  g.fillStyle = '#86603a';
  for (const y of [-0.85, -0.45]) {
    g.beginPath();
    g.ellipse(x, y, 0.04, 0.06, 0, 0, Math.PI * 2);
    g.fill();
  }
}
L.timber(g, 352, X0, -1.04, X1, -1.04, 0.1);
// the blanket over the rail
g.save();
g.beginPath();
g.moveTo(-1.1, -1.08);
g.lineTo(-0.15, -1.08);
g.lineTo(-0.2, -0.45);
g.quadraticCurveTo(-0.65, -0.4, -1.08, -0.5);
g.closePath();
g.clip();
const st = ['#a8382c', '#efe4cc', '#3f5f9c', '#e2b048', '#efe4cc', '#a8382c'];
for (let i = 0; i < 14; i++) {
  g.fillStyle = st[i % st.length];
  g.fillRect(-1.2, -1.1 + i * 0.05, 1.2, 0.05);
}
g.restore();
// herbs and peppers under the beam
for (const [x, len, c] of [[-2.6, 0.45, '#7a8a4a'], [-2.3, 0.35, '#8a7a4a'], [2.6, 0.5, '#b5342e'], [2.85, 0.4, '#c0392b']]) {
  g.strokeStyle = '#6a5a3a';
  g.lineWidth = 0.01;
  g.beginPath();
  g.moveTo(x, 0.01);
  g.lineTo(x, 0.01 + len);
  g.stroke();
  L.dabs(g, 353 + Math.round(x * 10), x - 0.07, 0.04, 0.14, len, [c, '#5a4a2a'], 14, 0.035, 1.3, 0.95, true);
}
