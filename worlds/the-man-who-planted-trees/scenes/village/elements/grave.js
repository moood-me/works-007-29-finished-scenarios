// Lina's father's grave at the village's edge, by `time`: none in the prologue; in the second chapter a fresh mound of
// dark earth and a cross of two branches tied with cord; grassed over in the third, its cross grey; wildflowers on it
// in the epilogue. Its points: `mound`, `cross`
const t = e.lib.T(e);
if (t > 0) {
  g.fillStyle = t === 1 ? "#5e4a37" : "#6f8248";
  g.beginPath();
  g.moveTo(-1.05, 0.02);
  g.quadraticCurveTo(-0.85, -0.38, 0, -0.4);
  g.quadraticCurveTo(0.85, -0.38, 1.05, 0.02);
  g.closePath();
  g.fill();
  if (t === 1) {
    g.fillStyle = "#6f5a44";
    for (let i = 0; i < 12; i++) {
      g.beginPath();
      g.ellipse(-0.8 + e.rnd() * 1.6, -0.06 - e.rnd() * 0.26, 0.06, 0.035, 0, 0, Math.PI * 2);
      g.fill();
    }
  } else {
    g.strokeStyle = "#86995a";
    g.lineWidth = 0.02;
    for (let i = 0; i < 24; i++) {
      const x = -0.9 + e.rnd() * 1.8, y = -0.36 * (1 - Math.pow(x / 1.05, 2));
      g.beginPath();
      g.moveTo(x, y + 0.02);
      g.lineTo(x + (e.rnd() - 0.5) * 0.08, y - 0.1);
      g.stroke();
    }
    if (t === 3) {
      for (let i = 0; i < 14; i++) {
        const x = -0.85 + e.rnd() * 1.7, y = -0.34 * (1 - Math.pow(x / 1.05, 2)) - 0.08;
        g.fillStyle = ["#f1ede0", "#e8d98a", "#b9a3c4"][i % 3];
        g.beginPath();
        g.arc(x, y, 0.03, 0, Math.PI * 2);
        g.fill();
      }
    }
  }
  // the cross at its head: two branches, tied
  g.strokeStyle = t === 1 ? "#6a5240" : "#8a8276";
  g.lineCap = "round";
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(0.85, 0);
  g.lineTo(0.88, -1.0);
  g.moveTo(0.64, -0.72);
  g.lineTo(1.1, -0.74);
  g.stroke();
  g.strokeStyle = "#cfc6ad";
  g.lineWidth = 0.02;
  g.beginPath();
  g.moveTo(0.82, -0.78);
  g.lineTo(0.93, -0.68);
  g.moveTo(0.82, -0.68);
  g.lineTo(0.93, -0.78);
  g.stroke();
  e.at(0, -0.3, "mound");
  e.at(0.87, -0.8, "cross");
}
