// What Dad brought (its anchor the table's top): four oranges in a red string bag, slumped, and a glass of water
// beside them with a bent straw.
const orange = (x, y, r) => {
  g.fillStyle = '#e8862e';
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = 'rgba(255,214,150,0.45)';
  g.beginPath();
  g.arc(x - r * 0.35, y - r * 0.35, r * 0.35, 0, Math.PI * 2);
  g.fill();
};
orange(-0.07, -0.035, 0.035);
orange(0.0, -0.034, 0.034);
orange(-0.035, -0.088, 0.034);
orange(0.045, -0.05, 0.03);
g.strokeStyle = 'rgba(190,50,40,0.85)';
g.lineWidth = 0.003;
for (let i = -6; i <= 6; i++) {
  g.beginPath();
  g.moveTo(-0.1 + (i + 6) * 0.013, -0.005);
  g.lineTo(-0.04 + i * 0.006, -0.13);
  g.stroke();
}
g.beginPath();
g.moveTo(-0.04, -0.13);
g.lineTo(-0.02, -0.155);
g.stroke();
// the glass of water
g.fillStyle = 'rgba(214,228,232,0.55)';
g.fillRect(0.08, -0.11, 0.05, 0.11);
g.fillStyle = 'rgba(170,196,210,0.45)';
g.fillRect(0.082, -0.07, 0.046, 0.068);
g.strokeStyle = '#d9d2c6';
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(0.11, -0.03);
g.lineTo(0.12, -0.13);
g.lineTo(0.135, -0.145);
g.stroke();
