// A new edge of tiny saplings on the bare ground before the hut (`hut`): three oak seedlings a hand and a half high
// in a row, a few leaves each — what he plants last. Its point `row` (the middle one)
if (!e.state.hut) return;
for (let i = 0; i < 3; i++) {
  const x = -0.5 + i * 0.5, h = 0.18 + e.rnd() * 0.08;
  g.fillStyle = "#7d6a4e";
  g.beginPath();
  g.ellipse(x, 0, 0.09, 0.02, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#6b5b46";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -h);
  g.stroke();
  for (let k = 0; k < 4; k++) {
    g.fillStyle = k % 2 ? "#7c9450" : "#68803f";
    g.beginPath();
    g.ellipse(x + (k % 2 ? 0.025 : -0.025), -h * (0.55 + k * 0.13), 0.028, 0.014, k % 2 ? 0.5 : -0.5, 0, Math.PI * 2);
    g.fill();
  }
}
e.at(0, -0.1, "row");
