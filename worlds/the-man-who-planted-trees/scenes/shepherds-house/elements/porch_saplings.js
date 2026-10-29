// A seedling he has just planted by the door (`porch_saplings`: the epilogue on Silence — old, he plants at his own
// porch), the earth dark round it. Its point `hole`
if (!e.state.porch_saplings || e.state.hut) return;
const h = 0.22 + e.rnd() * 0.06;
g.fillStyle = "#6e5d47";
g.beginPath();
g.ellipse(0, 0, 0.14, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#6b5b46";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0.01, -h);
g.stroke();
for (let k = 0; k < 4; k++) {
  g.fillStyle = k % 2 ? "#7c9450" : "#68803f";
  g.beginPath();
  g.ellipse(k % 2 ? 0.03 : -0.03, -h * (0.55 + k * 0.13), 0.032, 0.016, k % 2 ? 0.5 : -0.5, 0, Math.PI * 2);
  g.fill();
}
e.at(0, -0.05, "hole");
