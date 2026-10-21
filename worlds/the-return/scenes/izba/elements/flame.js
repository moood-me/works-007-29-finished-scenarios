// The lamp's flame, inside its chimney over the burner: a small steady tongue, yellow round a white heart — a layer
// that trembles a little ("flicker"); its glow is the scene's light `lamp`.
e.layer("tongue", { flicker: 0.12, pivot: [0, -0.235] }, (p) => {
  p.fillStyle = "#ffc45c";
  p.beginPath();
  p.moveTo(-0.014, -0.235);
  p.quadraticCurveTo(-0.018, -0.27, 0, -0.305);
  p.quadraticCurveTo(0.018, -0.27, 0.014, -0.235);
  p.closePath();
  p.fill();
  p.fillStyle = "#fff4d0";
  p.beginPath();
  p.ellipse(0, -0.25, 0.006, 0.014, 0, 0, Math.PI * 2);
  p.fill();
});
e.light(0, -0.27, 0.12, "#ffcf80", 1.0, "flame");
