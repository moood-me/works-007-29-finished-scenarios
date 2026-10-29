// A window of the corridor, in the left wall's opening (1.2 m wide, from 0.9 m to 3.0 m, under its arch): a stone
// mullion and a transom making four lights, each glazed with small diamond quarries of clear old glass in lead — the
// night seen through them. Its anchor is the middle of the opening's foot; the same window stands in all three.
g.fillStyle = e.lib.STONE;
g.fillRect(-0.035, -3.0, 0.07, 2.1);
g.fillRect(-0.6, -2.32, 1.2, 0.06);
g.save();
e.lib.arch(g, -0.6, 0.6, -3.0, -0.9, 0.3);
g.clip();
g.strokeStyle = 'rgba(40,38,40,0.75)';
g.lineWidth = 0.008;
for (let k = -2.4; k < 2.4; k += 0.16) {
  g.beginPath();
  g.moveTo(-0.6 + k, -0.9);
  g.lineTo(-0.6 + k + 2.1, -3.0);
  g.moveTo(0.6 - k, -0.9);
  g.lineTo(0.6 - k - 2.1, -3.0);
  g.stroke();
}
g.restore();
