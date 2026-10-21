// Two zinc buckets set down on the sand near the house's corner, full — the boy's morning water: solid grey metal,
// darker toward their sides (a cylinder, its shade painted in its colour, the light the scene's), three hoops, a rim
// with the water dark in it, the wire handle standing up.
const bucket = (x) => {
  const side = g.createLinearGradient(x - 0.15, 0, x + 0.15, 0);
  side.addColorStop(0, "#5f6462");
  side.addColorStop(0.35, "#8d9290");
  side.addColorStop(0.6, "#7c817f");
  side.addColorStop(1, "#555a58");
  g.fillStyle = side;
  g.beginPath();
  g.moveTo(x - 0.15, -0.3);
  g.lineTo(x + 0.15, -0.3);
  g.lineTo(x + 0.12, 0);
  g.lineTo(x - 0.12, 0);
  g.closePath();
  g.fill();
  g.fillStyle = "#4c504e";
  for (const y of [-0.27, -0.13, -0.025]) g.fillRect(x - 0.15 + (y + 0.3) * 0.1, y, 0.3 - (y + 0.3) * 0.2, 0.02);
  g.fillStyle = "#9a9f9c";
  g.beginPath();
  g.ellipse(x, -0.3, 0.15, 0.045, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#4e5d63";
  g.beginPath();
  g.ellipse(x, -0.297, 0.128, 0.034, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#3e413f";
  g.lineWidth = 0.014;
  g.beginPath();
  g.ellipse(x, -0.3, 0.15, 0.2, 0, Math.PI * 1.05, Math.PI * 1.95);
  g.stroke();
};
bucket(-0.18);
bucket(0.2);
e.at(0, -0.3, "buckets");
