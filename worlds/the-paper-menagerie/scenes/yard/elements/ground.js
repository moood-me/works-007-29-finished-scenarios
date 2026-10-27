// The ground from above (metres, its middle at distance 28, y toward the viewer — distance d is y 28 − d): the yard's
// spring grass, clover and a few dandelions, the trodden path coming from the gate behind us to the porch steps
// (y 28 − 6.4 on), muddy at their foot, and the neighbours' lawns beyond.
g.fillStyle = '#8cab6a';
g.fillRect(-60, -35, 120, 70);
for (let i = 0; i < 1600; i++) {
  const x = -14 + e.rnd() * 22,
    y = 14 + e.rnd() * 21;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(108,138,80,0.5)' : 'rgba(160,184,112,0.5)';
  g.beginPath();
  g.ellipse(x, y, 0.08 + e.rnd() * 0.25, 0.03 + e.rnd() * 0.08, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// clover and dandelions near us
for (let i = 0; i < 140; i++) {
  const x = -6 + e.rnd() * 11,
    y = 19 + e.rnd() * 9;
  g.fillStyle = i % 4 ? 'rgba(122,156,92,0.8)' : '#e9c94a';
  g.beginPath();
  g.arc(x, y, i % 4 ? 0.04 : 0.025, 0, Math.PI * 2);
  g.fill();
}
// the path: from the steps toward us, bare trodden earth, its edges ragged
g.fillStyle = '#a99474';
g.beginPath();
g.moveTo(-1.65, 21.5);
g.bezierCurveTo(-1.6, 24, -1.1, 26, -0.9, 28.5);
g.lineTo(0.4, 28.5);
g.bezierCurveTo(0.1, 26, -0.2, 24, -0.35, 21.5);
g.closePath();
g.fill();
for (let i = 0; i < 90; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(140,122,92,0.7)' : 'rgba(132,160,96,0.7)';
  g.beginPath();
  g.ellipse(-1.6 + e.rnd() * 2.1, 21.5 + e.rnd() * 7, 0.05 + e.rnd() * 0.12, 0.03 + e.rnd() * 0.05, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// wet earth round the puddle
g.fillStyle = 'rgba(112,96,72,0.55)';
g.beginPath();
g.ellipse(-0.55, 22.15, 1.15, 0.62, 0.05, 0, Math.PI * 2);
g.fill();
