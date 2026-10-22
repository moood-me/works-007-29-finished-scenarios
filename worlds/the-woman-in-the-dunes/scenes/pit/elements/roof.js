// The roof's front slope (a plane on `house`, from the eave at 2.8 m up to the ridge at 3.6 m), seen from above:
// x −2.78…2.78 along the house, y −1.125 the ridge … 1.125 the eave. Weathered boards running down the slope, and the
// sand: lying thick over the left half (the side the wind heaps it), in tongues and a ridge-line drift on the right,
// a little bare wood showing between.
const r = e.lib.stream(41);
// the boards, ridge to eave
const tones = ["#7d6852", "#735f4a", "#86715a"];
let x = -2.78;
let i = 0;
while (x < 2.78) {
  const w = 0.18 + r() * 0.07;
  g.fillStyle = tones[i % tones.length];
  g.fillRect(x, -1.125, Math.min(w, 2.78 - x), 2.25);
  g.fillStyle = "rgba(52, 42, 33, 0.55)";
  g.fillRect(x, -1.125, 0.016, 2.25);
  x += w;
  i++;
}
// the ridge board
g.fillStyle = "#5c4a39";
g.fillRect(-2.78, -1.125, 5.56, 0.12);

// the sand: the left half buried, its edge an uneven line running down the slope
g.fillStyle = "#dcbb86";
g.beginPath();
g.moveTo(-2.78, -1.125);
g.lineTo(0.3, -1.125);
g.bezierCurveTo(0.1, -0.6, 0.45, -0.2, 0.05, 0.25);
g.bezierCurveTo(-0.2, 0.55, 0.2, 0.85, -0.1, 1.125);
g.lineTo(-2.78, 1.125);
g.closePath();
g.fill();
// tongues of sand down the right half
for (let k = 0; k < 6; k++) {
  const tx = 0.6 + k * 0.36 + r() * 0.15;
  const len = 0.6 + r() * 1.3;
  const w = 0.1 + r() * 0.14;
  g.beginPath();
  g.moveTo(tx - w, -1.125);
  g.quadraticCurveTo(tx - w * 0.6, -1.125 + len * 0.6, tx, -1.125 + len);
  g.quadraticCurveTo(tx + w * 0.6, -1.125 + len * 0.6, tx + w, -1.125);
  g.closePath();
  g.fill();
}
// the drift along the ridge
g.fillRect(-2.78, -1.125, 5.56, 0.2);
// wind ripples on the buried half
g.strokeStyle = "#c5a06b";
g.lineWidth = 0.025;
for (let k = 0; k < 9; k++) {
  const y = -0.95 + k * 0.23 + r() * 0.05;
  g.beginPath();
  g.moveTo(-2.7, y);
  g.quadraticCurveTo(-1.6, y + (r() - 0.5) * 0.12, -0.4 - r() * 0.4, y + 0.03);
  g.stroke();
}
// the eave's edge, where the sand runs off: paler, a little heaped
g.fillStyle = "#e6c995";
g.fillRect(-2.78, 1.02, 3.0, 0.1);
