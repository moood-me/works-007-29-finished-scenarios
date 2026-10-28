// His supper on the mat (2.85 m ahead): a low wooden tray with a bowl of rice, a small dish and the chopsticks across
// it; beside it, lying on its side where she put it down, the oiled-paper umbrella she held over his bowl — its rim
// edge-on to the eye at x −0.05, the canopy bulging to the right, the ring of the snake's eye near its rim, the shaft
// over the tray; a small cone of sand heaped behind it where the roof's sand comes down.
// the tray
g.fillStyle = "#7d6248";
g.fillRect(-0.58, -0.16, 0.5, 0.05);
g.fillStyle = "#6a523c";
g.fillRect(-0.56, -0.11, 0.06, 0.11);
g.fillRect(-0.16, -0.11, 0.06, 0.11);
// the bowl of rice and the dish
g.fillStyle = "#3d3a44";
g.beginPath();
g.moveTo(-0.48, -0.26);
g.quadraticCurveTo(-0.46, -0.16, -0.4, -0.16);
g.lineTo(-0.34, -0.16);
g.quadraticCurveTo(-0.28, -0.16, -0.26, -0.26);
g.closePath();
g.fill();
g.fillStyle = "#f0ece2";
g.beginPath();
g.ellipse(-0.37, -0.265, 0.11, 0.03, 0, Math.PI, 0);
g.fill();
g.fillStyle = "#b8a68a";
g.fillRect(-0.24, -0.19, 0.1, 0.03);
g.strokeStyle = "#9b7a52";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-0.55, -0.2);
g.lineTo(-0.12, -0.24);
g.moveTo(-0.55, -0.19);
g.lineTo(-0.12, -0.215);
g.stroke();

// the sand heaped behind where it comes down
g.fillStyle = "#d8b680";
g.beginPath();
g.moveTo(-0.2, 0.0);
g.quadraticCurveTo(-0.05, -0.1, 0.1, 0.0);
g.closePath();
g.fill();

// the umbrella on its side: the canopy, its ribs, the ring, the rim edge-on, the shaft
g.fillStyle = "#c27a45";
g.beginPath();
g.moveTo(-0.05, -0.6);
g.bezierCurveTo(0.3, -0.58, 0.5, -0.4, 0.52, -0.3);
g.bezierCurveTo(0.5, -0.2, 0.3, -0.02, -0.05, 0.0);
g.closePath();
g.fill();
g.fillStyle = "#ebe0c8";
g.beginPath();
g.moveTo(0.06, -0.58);
g.bezierCurveTo(0.12, -0.45, 0.12, -0.15, 0.06, -0.02);
g.lineTo(0.12, -0.04);
g.bezierCurveTo(0.18, -0.15, 0.18, -0.45, 0.12, -0.57);
g.closePath();
g.fill();
g.strokeStyle = "#8a5a33";
g.lineWidth = 0.008;
for (let k = 0; k < 7; k++) {
  const y = -0.58 + k * 0.0967;
  g.beginPath();
  g.moveTo(-0.04, y);
  g.quadraticCurveTo(0.3, y * 0.6 - 0.12, 0.52, -0.3);
  g.stroke();
}
g.fillStyle = "#a96438";
g.beginPath();
g.ellipse(-0.05, -0.3, 0.035, 0.3, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#7a6248";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.3, -0.3);
g.lineTo(-0.6, -0.33);
g.stroke();
g.fillStyle = "#5e4632";
g.fillRect(-0.62, -0.35, 0.1, 0.04);
