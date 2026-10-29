// Lina's father's handcart, there when `cart` says (1.7: he loads it with charcoal to take down): two big wheels, a
// plank bed heaped with sacks of charcoal, its shafts resting on the ground. Its point: `bed`
if (e.state.cart) {
  g.strokeStyle = "#5e4a36";
  g.lineCap = "round";
  g.lineWidth = 0.07;
  g.beginPath();
  g.moveTo(-0.9, -0.82);
  g.lineTo(-1.85, 0.02);
  g.stroke();
  g.fillStyle = "#7a634a";
  g.fillRect(-1.0, -0.92, 2.1, 0.12);
  g.fillStyle = "#6a5440";
  g.fillRect(-1.0, -1.18, 2.1, 0.08);
  g.fillRect(-1.0, -1.18, 0.07, 0.36);
  g.fillRect(1.03, -1.18, 0.07, 0.36);
  // sacks of charcoal, black dust on them
  const SACK = ["#5a524a", "#4d463f", "#625950"];
  for (const [x, y, w, h] of [[-0.75, -1.3, 0.55, 0.42], [-0.2, -1.32, 0.58, 0.46], [0.42, -1.28, 0.55, 0.4], [-0.45, -1.62, 0.55, 0.38], [0.15, -1.6, 0.55, 0.36]]) {
    g.fillStyle = SACK[Math.floor(e.rnd() * SACK.length)];
    g.beginPath();
    g.ellipse(x + w / 2, y, w / 2, h / 2, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "#2c2824";
    g.beginPath();
    g.ellipse(x + w / 2, y - h * 0.38, w * 0.18, h * 0.1, 0, 0, Math.PI * 2);
    g.fill();
  }
  // the wheel: a rim, spokes, a hub
  g.strokeStyle = "#4f3e2e";
  g.lineWidth = 0.07;
  g.beginPath();
  g.arc(0.05, -0.5, 0.48, 0, Math.PI * 2);
  g.stroke();
  g.lineWidth = 0.035;
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI;
    g.beginPath();
    g.moveTo(0.05 + Math.cos(a) * 0.46, -0.5 + Math.sin(a) * 0.46);
    g.lineTo(0.05 - Math.cos(a) * 0.46, -0.5 - Math.sin(a) * 0.46);
    g.stroke();
  }
  g.fillStyle = "#3a2e24";
  g.beginPath();
  g.arc(0.05, -0.5, 0.08, 0, Math.PI * 2);
  g.fill();
  e.at(0, -1.2, "bed");
}
