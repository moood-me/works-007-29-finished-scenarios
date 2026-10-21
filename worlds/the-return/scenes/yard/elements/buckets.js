// Two zinc buckets set down on the sand by the porch side, full, the water in them catching the sky — the boy's morning
// water (the yoke they were carried on lies on the ground before them: `yoke`).
const L = e.lib;
const bucket = (x) => {
  g.fillStyle = "#8e918f";
  g.beginPath();
  g.moveTo(x - 0.15, -0.3);
  g.lineTo(x + 0.15, -0.3);
  g.lineTo(x + 0.12, 0);
  g.lineTo(x - 0.12, 0);
  g.closePath();
  g.fill();
  g.fillStyle = "#adb0ac";
  g.fillRect(x - 0.06, -0.29, 0.05, 0.28);
  g.fillStyle = "#6f7371";
  for (const y of [-0.27, -0.12, -0.02]) g.fillRect(x - 0.15 + (y + 0.3) * 0.1, y, 0.3 - (y + 0.3) * 0.2, 0.018);
  g.fillStyle = "#7b7f7d";
  g.beginPath();
  g.ellipse(x, -0.3, 0.15, 0.045, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#a3b4bb";
  g.beginPath();
  g.ellipse(x, -0.29, 0.13, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#4f524f";
  g.lineWidth = 0.01;
  g.beginPath();
  g.ellipse(x, -0.3, 0.15, 0.2, 0, Math.PI * 1.05, Math.PI * 1.95);
  g.stroke();
};
bucket(-0.18);
bucket(0.2);
L.paper(g, -0.4, -0.52, 0.8, 0.54, 0.8);
e.at(0, -0.3, "buckets");
