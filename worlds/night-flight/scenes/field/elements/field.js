// The airfield seen from above (metres; origin its middle, 400 m ahead; y toward the viewer): short grass in daylight
// colours (the night is the scene's light), patches of it lighter and darker, the long worn landing strip running
// away from the hangar's side, its wheel tracks.
g.fillStyle = '#6c7c58';
g.fillRect(-800, -400, 1600, 800);
// patches of grass a shade off: broad and soft
for (let i = 0; i < 260; i++) {
  const x = -800 + 1600 * e.rnd();
  const y = -400 + 800 * e.rnd();
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(92,108,74,0.5)' : 'rgba(132,140,98,0.4)';
  g.beginPath();
  g.ellipse(x, y, 8 + 30 * e.rnd(), 4 + 14 * e.rnd(), e.rnd() * Math.PI, 0, Math.PI * 2);
  g.fill();
}
// the landing strip: a long band of worn, paler grass from near the apron out to the far fence
g.fillStyle = 'rgba(150,152,112,0.55)';
g.beginPath();
g.moveTo(-34, 392);
g.lineTo(-8, 392);
g.lineTo(30, -400);
g.lineTo(-30, -400);
g.closePath();
g.fill();
// wheel tracks along it, and curving in toward the hangar
g.strokeStyle = 'rgba(120,112,86,0.6)';
g.lineWidth = 0.5;
for (const k of [-1, 1]) {
  g.beginPath();
  g.moveTo(-18 + k * 1.6, 392);
  g.bezierCurveTo(-16 + k * 1.6, 300, -6 + k * 1.6, 100, 2 + k * 1.6, -400);
  g.stroke();
  g.beginPath();
  g.moveTo(4 + k * 1.4, 392);
  g.bezierCurveTo(-4 + k * 1.4, 380, -14 + k * 1.6, 360, -17 + k * 1.6, 330);
  g.stroke();
}
