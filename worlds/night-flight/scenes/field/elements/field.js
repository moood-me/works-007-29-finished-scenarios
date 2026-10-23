// The airfield seen from above (metres; origin its middle, 1.5 km ahead, so a point `d` metres ahead is y = 1500 − d;
// y toward the viewer): short grass in daylight colours (the night is the scene's light), patches of it lighter and
// darker, the long worn landing strip running away past the hangar's side, its wheel tracks.
const Y = d => 1500 - d;
g.fillStyle = '#82926c';
g.fillRect(-3000, -1500, 6000, 3000);
// patches of grass a shade off: broad and soft, over the near kilometre
for (let i = 0; i < 300; i++) {
  const x = -600 + 1200 * e.rnd();
  const y = Y(1000 * e.rnd());
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(98,114,80,0.5)' : 'rgba(146,154,110,0.4)';
  g.beginPath();
  g.ellipse(x, y, 8 + 30 * e.rnd(), 4 + 14 * e.rnd(), e.rnd() * Math.PI, 0, Math.PI * 2);
  g.fill();
}
// the landing strip: a long band of worn, paler grass from near the apron out past the fence
g.fillStyle = 'rgba(160,160,120,0.55)';
g.beginPath();
g.moveTo(-34, Y(8));
g.lineTo(-8, Y(8));
g.lineTo(40, Y(1200));
g.lineTo(-40, Y(1200));
g.closePath();
g.fill();
// wheel tracks along it, and curving in toward the hangar
g.strokeStyle = 'rgba(120,112,86,0.6)';
g.lineWidth = 0.5;
for (const k of [-1, 1]) {
  g.beginPath();
  g.moveTo(-18 + k * 1.6, Y(8));
  g.bezierCurveTo(-16 + k * 1.6, Y(100), -6 + k * 1.6, Y(300), 2 + k * 1.6, Y(800));
  g.stroke();
  g.beginPath();
  g.moveTo(4 + k * 1.4, Y(8));
  g.bezierCurveTo(-4 + k * 1.4, Y(20), -14 + k * 1.6, Y(40), -17 + k * 1.6, Y(70));
  g.stroke();
}
