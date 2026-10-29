// A wooden pail set down on the ground (`pail`): heaped with acorns soaking for the day's planting ("acorns" — the first
// chapter), or with seeds wrapped in leaves torn from the Traveller's notebook ("leaves" — the final «Two Rods»); none
// ("none"). Its point `top`
const p = e.state.pail;
if (p !== "acorns" && p !== "leaves") return;
g.fillStyle = "#7a5a3c";
g.beginPath();
g.moveTo(-0.2, -0.36);
g.lineTo(0.2, -0.36);
g.lineTo(0.16, 0);
g.lineTo(-0.16, 0);
g.closePath();
g.fill();
g.fillStyle = "#5a4130";
g.fillRect(-0.2, -0.3, 0.4, 0.035);
g.fillRect(-0.18, -0.09, 0.36, 0.035);
if (p === "acorns") {
  g.fillStyle = "#8a5a2c";
  for (let i = 0; i < 9; i++) {
    g.beginPath();
    g.ellipse(-0.15 + i * 0.037, -0.38 - Math.sin(i * 0.4) * 0.03, 0.025, 0.02, 0, 0, Math.PI * 2);
    g.fill();
  }
} else {
  for (let i = 0; i < 6; i++) {
    const x = -0.14 + i * 0.056;
    g.fillStyle = i % 2 ? "#ece6d6" : "#ddd5c2";
    g.beginPath();
    g.moveTo(x - 0.035, -0.36);
    g.lineTo(x - 0.02, -0.44 - (i % 3) * 0.02);
    g.lineTo(x + 0.03, -0.43 - (i % 2) * 0.02);
    g.lineTo(x + 0.035, -0.36);
    g.closePath();
    g.fill();
    g.strokeStyle = "#8f8a80";
    g.lineWidth = 0.004;
    g.beginPath();
    g.moveTo(x - 0.018, -0.41);
    g.lineTo(x + 0.02, -0.405);
    g.stroke();
  }
}
e.at(0, -0.38, "top");
