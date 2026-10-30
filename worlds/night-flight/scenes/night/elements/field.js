// The great field seen from above (metres; origin its middle, 1.5 km ahead, so a point `d` metres ahead is y = 1500 − d;
// y toward the viewer): short grass in daylight colours (the night is the scene's light), patches of it lighter and
// darker, and the long worn landing strip running straight away from the hangar's side to the far edge — between the
// two rows of its lamps (`strip_lamps`, at 20 and 60 m across) — its wheel tracks, and the tracks curving in from it
// to the apron.
const Y = d => 1500 - d;
g.fillStyle = '#82926c';
g.fillRect(-5000, -1500, 10000, 3000);
// patches of grass a shade off: broad and soft, over the near kilometre and a half
for (let i = 0; i < 360; i++) {
  const x = -700 + 1500 * e.rnd();
  const y = Y(1500 * e.rnd());
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(98,114,80,0.5)' : 'rgba(146,154,110,0.4)';
  g.beginPath();
  g.ellipse(x, y, 8 + 30 * e.rnd(), 4 + 14 * e.rnd(), e.rnd() * Math.PI, 0, Math.PI * 2);
  g.fill();
}
// the landing strip: a long band of worn, paler grass between its lamps
g.fillStyle = 'rgba(178,176,136,0.7)';
g.fillRect(24, Y(2900), 32, 2900 - 60);
// wheel tracks along it, and curving in toward the apron and the hangar
g.strokeStyle = 'rgba(120,112,86,0.6)';
g.lineWidth = 0.5;
for (const k of [-1, 1]) {
  g.beginPath();
  g.moveTo(38 + k * 1.6, Y(2600));
  g.lineTo(38 + k * 1.6, Y(70));
  g.bezierCurveTo(36 + k * 1.6, Y(60), 0 + k * 1.6, Y(58), -14 + k * 1.6, Y(58));
  g.stroke();
}
