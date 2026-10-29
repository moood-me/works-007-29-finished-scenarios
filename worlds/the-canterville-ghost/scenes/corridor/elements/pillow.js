// The twins' pillow flung at Sir Simon from their door (1.2), from before (0.55 by 0.38 m): white linen, a little
// crumpled, its seam and two dents; it flies along `pillow_a`, `pillow_d`, `pillow_e` and turns by `pillow_spin`
// (the element's place). Only while `pillow` is true.
if (e.state.pillow) {
  g.fillStyle = '#ece6da';
  g.beginPath();
  g.moveTo(-0.27, -0.06);
  g.quadraticCurveTo(-0.3, -0.36, -0.22, -0.38);
  g.quadraticCurveTo(0, -0.33, 0.22, -0.38);
  g.quadraticCurveTo(0.3, -0.36, 0.27, -0.06);
  g.quadraticCurveTo(0.29, 0.0, 0.22, 0.0);
  g.quadraticCurveTo(0, -0.04, -0.22, 0.0);
  g.quadraticCurveTo(-0.29, 0.0, -0.27, -0.06);
  g.closePath();
  g.fill();
  g.strokeStyle = '#c4bcac';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(-0.24, -0.33);
  g.quadraticCurveTo(0, -0.29, 0.24, -0.33);
  g.stroke();
  g.fillStyle = 'rgba(160,150,135,0.35)';
  for (const x of [-0.08, 0.1]) {
    g.beginPath();
    g.ellipse(x, -0.18, 0.06, 0.035, 0.3, 0, Math.PI * 2);
    g.fill();
  }
}
