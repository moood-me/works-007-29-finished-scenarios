// A lantern hanging from an iron bracket by the door; it swings a little on its hook in the wind (its animate). The
// flame's light is the scene's lantern_light
g.strokeStyle = "#2b2622";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.16, -0.6);
g.lineTo(0, -0.6);
g.lineTo(0, -0.56);
g.stroke();
e.layer("lantern", { pivot: [0, -0.56] }, (g) => {
  g.fillStyle = "#2b2622";
  g.beginPath();
  g.arc(0, -0.545, 0.018, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.moveTo(-0.08, -0.46);
  g.lineTo(0, -0.53);
  g.lineTo(0.08, -0.46);
  g.closePath();
  g.fill();
  g.fillStyle = "#ffd896";
  g.fillRect(-0.065, -0.46, 0.13, 0.22);
  g.fillStyle = "#2b2622";
  g.fillRect(-0.075, -0.46, 0.015, 0.22);
  g.fillRect(0.06, -0.46, 0.015, 0.22);
  g.fillRect(-0.085, -0.25, 0.17, 0.04);
  g.fillStyle = "#fff4d8";
  g.beginPath();
  g.ellipse(0, -0.34, 0.014, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  e.light(0, -0.34, 0.22, "#ffd08a", 1, "flame");
});
