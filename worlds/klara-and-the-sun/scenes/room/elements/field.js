// The field from above (metres, its middle 205 m ahead; y toward the viewer — its near edge, y 200, under the
// window): waist-high summer grass gone gold, lighter and darker drifts of it, a trodden path from the house's side
// out toward the barn.
g.fillStyle = '#b6a565';
g.fillRect(-250, -200, 500, 400);
const tones = ['rgba(150,140,80,0.45)', 'rgba(205,190,120,0.45)', 'rgba(140,150,90,0.4)', 'rgba(190,170,100,0.4)'];
for (let i = 0; i < 160; i++) {
  g.fillStyle = tones[i % 4];
  g.beginPath();
  g.ellipse(-250 + e.rnd() * 500, -200 + e.rnd() * 400, 6 + e.rnd() * 30, 3 + e.rnd() * 14, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: a pale trodden line, wandering from near the gate (across 3) out to the barn (across −14, 170 m on)
g.strokeStyle = 'rgba(214,196,150,0.8)';
g.lineWidth = 0.7;
g.beginPath();
g.moveTo(3, 190);
g.bezierCurveTo(2, 150, -10, 120, -9, 80);
g.bezierCurveTo(-8, 50, -15, 20, -14, -30);
g.stroke();
