// The field from above (metres, its middle 205 m ahead; y toward the viewer — its near edge, y 200, under the
// house's west wall, a little past the room's): waist-high summer grass gone gold, lighter and darker drifts of it, a trodden path from the gate out toward
// the barn; this side of the fence (y 191…200) the mown lawn under the window.
g.fillStyle = '#b6a565';
g.fillRect(-250, -200, 500, 400);
const tones = ['rgba(150,140,80,0.45)', 'rgba(205,190,120,0.45)', 'rgba(140,150,90,0.4)', 'rgba(190,170,100,0.4)'];
for (let i = 0; i < 160; i++) {
  g.fillStyle = tones[i % 4];
  g.beginPath();
  g.ellipse(-250 + e.rnd() * 500, -200 + e.rnd() * 400, 6 + e.rnd() * 30, 3 + e.rnd() * 14, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the lawn between the house and the fence: short green-gold grass, mown in strips running out to the fence, a few
// worn patches
g.fillStyle = '#9a9a5e';
g.fillRect(-250, 191, 500, 9);
for (let x = -30; x < 30; x += 1.2) {
  g.fillStyle = (Math.round(x / 1.2) % 2) ? 'rgba(170,168,104,0.55)' : 'rgba(128,134,82,0.45)';
  g.fillRect(x, 191, 1.2, 9);
}
for (let i = 0; i < 260; i++) {
  g.fillStyle = ['rgba(112,120,70,0.5)', 'rgba(184,176,112,0.5)', 'rgba(150,150,88,0.5)'][i % 3];
  g.beginPath();
  g.ellipse(-30 + e.rnd() * 60, 191 + e.rnd() * 9, 0.1 + e.rnd() * 0.5, 0.04 + e.rnd() * 0.15, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// the path: a pale trodden line, wandering from near the gate (across 3) out to the barn (across −14, 170 m on)
g.strokeStyle = 'rgba(214,196,150,0.8)';
g.lineWidth = 0.7;
g.beginPath();
g.moveTo(5.9, 191);
g.bezierCurveTo(4, 150, -10, 120, -9, 80);
g.bezierCurveTo(-8, 50, -15, 20, -14, -30);
g.stroke();
