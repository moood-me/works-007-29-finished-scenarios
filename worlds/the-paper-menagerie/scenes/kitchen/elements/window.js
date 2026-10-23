// The window over the sink: a white-painted frame, two casements with a cross of glazing bars each, the glass clear
// (the yard and the dusk beyond), short café curtains in white with a red-check hem gathered to the sides, the sill.
// (Its face is the opening x −0.65…0.65, from its foot at 1.0 m up 1.1 m.)
g.fillStyle = '#f3efe6';
g.fillRect(-0.68, -1.12, 1.36, 0.07);
g.fillRect(-0.68, -0.07, 1.36, 0.07);
g.fillRect(-0.68, -1.12, 0.07, 1.12);
g.fillRect(0.61, -1.12, 0.07, 1.12);
g.fillRect(-0.025, -1.12, 0.05, 1.12);
g.fillStyle = '#ece6da';
for (const cx of [-0.32, 0.32]) {
  g.fillRect(cx - 0.012, -1.06, 0.024, 1.0);
  g.fillRect(cx - 0.3, -0.58, 0.6, 0.022);
}
// the sill, a little proud of the wall
g.fillStyle = '#f6f2ea';
g.fillRect(-0.72, -0.02, 1.44, 0.05);
// the café curtains on their rod: gathered to each side, the hem a red check
g.fillStyle = '#b9a184';
g.fillRect(-0.7, -1.02, 1.4, 0.02);
for (const sgn of [-1, 1]) {
  g.save();
  g.scale(sgn, 1);
  g.fillStyle = 'rgba(250,246,238,0.9)';
  g.beginPath();
  g.moveTo(-0.7, -1.0);
  g.lineTo(-0.38, -1.0);
  g.bezierCurveTo(-0.4, -0.75, -0.46, -0.6, -0.44, -0.42);
  g.lineTo(-0.7, -0.42);
  g.closePath();
  g.fill();
  for (let x = -0.7; x < -0.44; x += 0.03) {
    g.fillStyle = Math.round(x / 0.03) % 2 ? '#d0574d' : '#f2d6cf';
    g.fillRect(x, -0.47, 0.03, 0.05);
  }
  g.fillStyle = 'rgba(200,186,166,0.4)';
  for (let x = -0.68; x < -0.42; x += 0.05) g.fillRect(x, -0.98, 0.006, 0.5);
  g.restore();
}
e.at(0, -0.6, 'pane');
