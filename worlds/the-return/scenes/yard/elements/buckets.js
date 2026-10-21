// Two zinc buckets set down on the sand by the porch side, water in them catching the sky, and the wooden yoke they
// were carried on leaning across them — the boy's morning water.
const bucket = (x) => {
  g.fillStyle = "#8e918f";
  g.beginPath();
  g.moveTo(x - 0.15, -0.3);
  g.lineTo(x + 0.15, -0.3);
  g.lineTo(x + 0.12, 0);
  g.lineTo(x - 0.12, 0);
  g.closePath();
  g.fill();
  g.fillStyle = "#a9aca8";
  g.fillRect(x - 0.06, -0.29, 0.05, 0.28);
  g.fillStyle = "#6f7371";
  for (const y of [-0.27, -0.12, -0.02]) g.fillRect(x - 0.15 + (y + 0.3) * 0.1, y, 0.3 - (y + 0.3) * 0.2, 0.018);
  g.fillStyle = "#7b7f7d";
  g.beginPath();
  g.ellipse(x, -0.3, 0.15, 0.045, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#8fa2ab";
  g.beginPath();
  g.ellipse(x, -0.29, 0.13, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "#4f524f";
  g.lineWidth = 0.008;
  g.beginPath();
  g.ellipse(x, -0.3, 0.15, 0.2, 0, Math.PI * 1.05, Math.PI * 1.95);
  g.stroke();
};
bucket(-0.22);
bucket(0.2);
// the yoke: a long curved pole of pale wood leaning from the ground on the left over both buckets, its hooks hanging
g.strokeStyle = "#a88a5e";
g.lineWidth = 0.04;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.62, -0.02);
g.quadraticCurveTo(-0.05, -0.62, 0.58, -0.36);
g.stroke();
g.strokeStyle = "#4f4a42";
g.lineWidth = 0.012;
for (const [x, y] of [[-0.48, -0.17], [0.46, -0.4]]) {
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + 0.01, y + 0.1);
  g.stroke();
}
e.at(0, -0.3, "buckets");
