// The house packed (`packed`): cardboard cartons, their fronts — kraft brown, a strip of brown tape down the middle,
// a marker squiggle; copies, each its own size and tint.
if (e.state.packed) {
  g.fillStyle = '#c4a272';
  g.fillRect(-0.25, -0.42, 0.5, 0.42);
  g.fillStyle = 'rgba(120,90,50,0.25)';
  g.fillRect(-0.25, -0.42, 0.5, 0.02);
  g.fillStyle = '#a8844f';
  g.fillRect(-0.04, -0.42, 0.08, 0.14);
  g.strokeStyle = '#3c3a40';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(-0.17, -0.2);
  g.bezierCurveTo(-0.12, -0.26, -0.08, -0.14, -0.03, -0.21);
  g.bezierCurveTo(0.01, -0.26, 0.05, -0.15, 0.1, -0.2);
  g.stroke();
}
