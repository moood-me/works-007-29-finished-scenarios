// The kerosene lamp hung over the table from the ceiling: its chain, a white enamel shade, the tall glass chimney
// and the flame in it, the brass burner, the reservoir of amber glass. Its flame is the room's light (the light
// `lamp`); its glow the engine's. The lamp sways a very little on its chain (a layer about the hook).
// (x −0.22…0.22, the hook at y −0.8 at the ceiling, the reservoir's foot at y 0)
e.layer("lamp", { pivot: [0, -0.8] }, l => {
  l.strokeStyle = "#3a332c";
  l.lineWidth = 0.008;
  l.beginPath();
  l.moveTo(0, -0.8);
  l.lineTo(0, -0.44);
  l.stroke();
  // the shade
  l.fillStyle = "#ece8de";
  l.beginPath();
  l.moveTo(-0.2, -0.36);
  l.quadraticCurveTo(0, -0.47, 0.2, -0.36);
  l.lineTo(0.17, -0.34);
  l.quadraticCurveTo(0, -0.42, -0.17, -0.34);
  l.closePath();
  l.fill();
  l.fillStyle = "#3e5a7a";
  l.fillRect(-0.2, -0.365, 0.4, 0.008);
  // the chimney, clear glass
  l.fillStyle = "rgba(250,244,226,0.55)";
  l.beginPath();
  l.moveTo(-0.022, -0.36);
  l.lineTo(0.022, -0.36);
  l.lineTo(0.022, -0.24);
  l.quadraticCurveTo(0.045, -0.2, 0.04, -0.15);
  l.lineTo(-0.04, -0.15);
  l.quadraticCurveTo(-0.045, -0.2, -0.022, -0.24);
  l.closePath();
  l.fill();
  // the flame
  l.fillStyle = "#fff2c8";
  l.beginPath();
  l.ellipse(0, -0.19, 0.012, 0.028, 0, 0, Math.PI * 2);
  l.fill();
  // the burner and the reservoir
  l.fillStyle = "#b8903e";
  l.fillRect(-0.045, -0.15, 0.09, 0.03);
  l.fillStyle = "#c08a3a";
  l.beginPath();
  l.ellipse(0, -0.06, 0.075, 0.065, 0, 0, Math.PI * 2);
  l.fill();
  l.fillStyle = "rgba(255,226,160,0.5)";
  l.beginPath();
  l.ellipse(-0.025, -0.08, 0.02, 0.03, 0, 0, Math.PI * 2);
  l.fill();
  e.light(0, -0.19, 0.16, "#ffd590", 1.0, "flame");
});
