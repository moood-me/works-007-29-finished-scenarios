// The bloodstain, from above (`stain`): a blot soaked into the boards, a splash at its edge — dull and old the first
// evening; each morning back in another colour (he takes Virginia's paints: vermilion, purple, scarlet, then emerald);
// only half of it when the paints are locked away; brown at the last, and it will not come off. None: the boards clean.
const C = { dull: ['#4a1414', '#5a1a18'], vermilion: ['#c8381e', '#e04a26'], purple: ['#5a1e5e', '#742a78'],
  scarlet: ['#8e1018', '#b0161e'], emerald: ['#1a7a4a', '#22a060'], half: ['#7a1216', '#96181c'], brown: ['#4a2a14', '#5e361a'] };
const c = C[e.state.stain];
if (c) {
  g.save();
  if (e.state.stain === 'half') {
    g.beginPath();
    g.rect(-0.5, -0.4, 0.5, 0.8);
    g.clip();
  }
  g.fillStyle = c[0];
  g.beginPath();
  g.moveTo(-0.3, -0.12);
  g.bezierCurveTo(-0.28, -0.3, 0.02, -0.32, 0.12, -0.2);
  g.bezierCurveTo(0.24, -0.26, 0.4, -0.1, 0.3, 0.04);
  g.bezierCurveTo(0.36, 0.2, 0.12, 0.3, -0.02, 0.2);
  g.bezierCurveTo(-0.16, 0.3, -0.38, 0.18, -0.3, -0.12);
  g.closePath();
  g.fill();
  g.fillStyle = c[1];
  g.beginPath();
  g.ellipse(-0.02, -0.04, 0.17, 0.12, 0.3, 0, Math.PI * 2);
  g.fill();
  for (const [x, y, r] of [[0.38, -0.2, 0.035], [0.42, 0.12, 0.025], [-0.38, 0.22, 0.03], [0.2, 0.3, 0.02]]) {
    g.fillStyle = c[0];
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
}
