// The field from above (metres, its middle 1507 m ahead; y toward the viewer — its near edge, y 1500, along the fence;
// it runs on 3 km to the far land under the horizon):
// waist-high summer grass gone gold, lighter and darker drifts of it, a trodden path from the gate (across 0.9) out
// through the grass to Mr McBain's barn (across −3.5, 100 m ahead: y 1407) and on past it.
g.fillStyle = '#b6a565';
g.fillRect(-2000, -1500, 4000, 3000);
const tones = ['rgba(150,140,80,0.45)', 'rgba(205,190,120,0.45)', 'rgba(140,150,90,0.4)', 'rgba(190,170,100,0.4)'];
// near the fence small drifts, farther off larger
for (let i = 0; i < 160; i++) {
  g.fillStyle = tones[i % 4];
  g.beginPath();
  g.ellipse(-300 + e.rnd() * 600, 1100 + e.rnd() * 400, 4 + e.rnd() * 26, 2 + e.rnd() * 12, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 120; i++) {
  g.fillStyle = tones[i % 4];
  g.beginPath();
  g.ellipse(-2000 + e.rnd() * 4000, -1500 + e.rnd() * 2600, 40 + e.rnd() * 200, 20 + e.rnd() * 90, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: a pale trodden line through the grass, wandering a little
g.strokeStyle = 'rgba(206,188,140,0.9)';
g.lineWidth = 0.8;
g.beginPath();
g.moveTo(0.9, 1500);
g.bezierCurveTo(0.2, 1475, -2.5, 1440, -3.5, 1407);
g.lineTo(-3.5, 1387);
g.bezierCurveTo(-3.6, 1360, -8, 1320, -6, 1240);
g.stroke();
