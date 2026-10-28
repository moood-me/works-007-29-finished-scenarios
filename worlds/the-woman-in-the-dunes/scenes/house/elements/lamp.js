// The oil lamp hung from the beam's hook (x 0, the hook at 2.15 m): its cord, a tin reflector over it, the glass
// chimney, the brass font; its flame the glow `flame` (the scene's light `lamp`, lit by the key `lamp`). One layer,
// `lamp`, hung from the hook: the air of the room stirs it a very little (animate).
e.layer("lamp", { pivot: [0, -2.15] }, (c) => {
  c.strokeStyle = "#3a332c";
  c.lineWidth = 0.01;
  c.beginPath();
  c.moveTo(0, -2.15);
  c.lineTo(0, -2.0);
  c.moveTo(0, -2.0);
  c.lineTo(-0.07, -1.96);
  c.moveTo(0, -2.0);
  c.lineTo(0.07, -1.96);
  c.stroke();
  // the tin reflector
  c.fillStyle = "#8d8a82";
  c.beginPath();
  c.moveTo(-0.03, -2.0);
  c.lineTo(0.03, -2.0);
  c.lineTo(0.1, -1.95);
  c.lineTo(-0.1, -1.95);
  c.closePath();
  c.fill();
  // the glass chimney, pale and a little clouded
  c.fillStyle = "rgba(236, 228, 206, 0.75)";
  c.beginPath();
  c.moveTo(-0.025, -1.95);
  c.lineTo(0.025, -1.95);
  c.quadraticCurveTo(0.055, -1.86, 0.035, -1.8);
  c.lineTo(-0.035, -1.8);
  c.quadraticCurveTo(-0.055, -1.86, -0.025, -1.95);
  c.closePath();
  c.fill();
  // the burner's collar and the brass font
  c.fillStyle = "#6e6458";
  c.fillRect(-0.04, -1.8, 0.08, 0.025);
  c.fillStyle = "#a8874e";
  c.beginPath();
  c.ellipse(0, -1.72, 0.065, 0.05, 0, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = "#8a6c3c";
  c.fillRect(-0.03, -1.67, 0.06, 0.04);
  e.light(0, -1.87, 0.12, "#ffc27a", 1.4, "flame");
});
