// The field from above (metres, its middle 207 m ahead; y toward the viewer — its near edge, y 200, along the fence):
// waist-high summer grass gone gold, lighter and darker drifts of it, a trodden path from the gate (across 0.9) out
// through the grass to Mr McBain's barn (across −3.5, 100 m ahead: y 107) and on past it.
g.fillStyle = '#b6a565';
g.fillRect(-300, -200, 600, 400);
const tones = ['rgba(150,140,80,0.45)', 'rgba(205,190,120,0.45)', 'rgba(140,150,90,0.4)', 'rgba(190,170,100,0.4)'];
for (let i = 0; i < 180; i++) {
  g.fillStyle = tones[i % 4];
  g.beginPath();
  g.ellipse(-300 + e.rnd() * 600, -200 + e.rnd() * 400, 4 + e.rnd() * 26, 2 + e.rnd() * 12, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: a pale trodden line through the grass, wandering a little
g.strokeStyle = 'rgba(206,188,140,0.9)';
g.lineWidth = 0.8;
g.beginPath();
g.moveTo(0.9, 200);
g.bezierCurveTo(0.2, 175, -2.5, 140, -3.5, 107);
g.lineTo(-3.5, 87);
g.bezierCurveTo(-3.6, 60, -8, 20, -6, -60);
g.stroke();
