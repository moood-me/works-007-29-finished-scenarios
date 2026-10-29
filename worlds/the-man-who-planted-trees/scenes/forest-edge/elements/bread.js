// The flat stone by the path where it goes into the wood — the stone they sit on in the first chapter (its point
// `seat`) — and on it, while `bread`, a loaf in a knotted linen cloth, another cloth under it, yesterday's, untouched
// (its point `loaf`)
g.fillStyle = "#8f897d";
g.beginPath();
g.moveTo(-0.42, 0);
g.lineTo(-0.38, -0.2);
g.lineTo(-0.1, -0.27);
g.lineTo(0.3, -0.25);
g.lineTo(0.44, -0.14);
g.lineTo(0.46, 0);
g.closePath();
g.fill();
g.fillStyle = "#aaa395";
g.beginPath();
g.moveTo(-0.38, -0.2);
g.lineTo(-0.1, -0.27);
g.lineTo(0.3, -0.25);
g.lineTo(0.18, -0.22);
g.lineTo(-0.3, -0.18);
g.closePath();
g.fill();
if (e.state.bread) {
  g.fillStyle = "#d6cdb9";
  g.beginPath();
  g.moveTo(-0.3, -0.25);
  g.lineTo(-0.24, -0.34);
  g.lineTo(0.2, -0.35);
  g.lineTo(0.3, -0.25);
  g.closePath();
  g.fill();
  g.fillStyle = "#ece6d6";
  g.beginPath();
  g.moveTo(-0.22, -0.33);
  g.quadraticCurveTo(-0.2, -0.5, 0.02, -0.52);
  g.quadraticCurveTo(0.22, -0.5, 0.22, -0.33);
  g.closePath();
  g.fill();
  g.fillStyle = "#b08552";
  g.beginPath();
  g.ellipse(0.1, -0.4, 0.08, 0.05, -0.3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#ece6d6";
  g.beginPath();
  g.moveTo(-0.04, -0.52);
  g.lineTo(-0.1, -0.6);
  g.lineTo(0.0, -0.57);
  g.lineTo(0.08, -0.62);
  g.lineTo(0.06, -0.51);
  g.closePath();
  g.fill();
}
e.at(0, -0.45, "loaf");
e.at(0.05, -0.25, "seat");
