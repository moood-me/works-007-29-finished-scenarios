// The field 4.5 m below the office's floor, seen from above (x across, y toward the viewer; its middle 600 m away, so
// y = 600 − distance): dark wet grass, the landing strip running across it paler, the concrete apron before the hangar
// (across −8…26, 45…80 m away) dark with rain and pale where puddles lie.
g.fillStyle = '#25301f';
g.fillRect(-2000, -600, 4000, 1200);
// the grass in long faint swaths
for (let i = 0; i < 40; i++) {
  g.fillStyle = e.rnd() > 0.5 ? 'rgba(52,64,44,0.5)' : 'rgba(28,36,26,0.5)';
  g.fillRect(-2000, -600 + 1200 * e.rnd(), 4000, 4 + 18 * e.rnd());
}
// the landing strip, worn pale by the wheels (110…145 m away)
g.fillStyle = '#3e4a38';
g.fillRect(-900, 455, 1800, 35);
g.fillStyle = 'rgba(120,130,110,0.25)';
g.fillRect(-900, 466, 1800, 3);
g.fillRect(-900, 478, 1800, 3);
// the apron
g.fillStyle = '#4c4f4f';
g.fillRect(-8, 520, 34, 35);
g.fillStyle = '#3e4141';
g.fillRect(-8, 520, 34, 2);
// puddles on it, catching the sky
g.fillStyle = 'rgba(150,160,185,0.35)';
for (const [x, y, w, h] of [[-2, 542, 5, 1.2], [6, 536, 7, 1.6], [15, 546, 4, 1.0], [20, 530, 6, 1.4], [1, 528, 3, 0.8]]) {
  g.beginPath();
  g.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
  g.fill();
}
