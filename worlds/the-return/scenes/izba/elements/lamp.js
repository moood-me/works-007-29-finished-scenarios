// The kerosene lamp on the table: a glass foot and font with the oil in it, the brass burner, the tall glass chimney
// — clear, a little smoked at its top. Its flame is `flame` (the scene's light `lamp`).
g.fillStyle = "#9fa8a2";
g.beginPath();
g.moveTo(-0.07, 0);
g.lineTo(-0.03, -0.06);
g.lineTo(-0.025, -0.1);
g.quadraticCurveTo(-0.085, -0.13, -0.065, -0.18);
g.lineTo(0.065, -0.18);
g.quadraticCurveTo(0.085, -0.13, 0.025, -0.1);
g.lineTo(0.03, -0.06);
g.lineTo(0.07, 0);
g.closePath();
g.fill();
g.fillStyle = "#c9b27a";
g.fillRect(-0.05, -0.16, 0.1, 0.03);
g.fillStyle = "#b08f4a";
g.fillRect(-0.04, -0.22, 0.08, 0.04);
g.fillStyle = "#8e7438";
g.fillRect(-0.045, -0.23, 0.09, 0.012);
// the chimney: a bulb low, a long neck up
g.globalAlpha = 0.45;
g.fillStyle = "#e9eee9";
g.beginPath();
g.moveTo(-0.03, -0.23);
g.quadraticCurveTo(-0.07, -0.28, -0.035, -0.34);
g.lineTo(-0.022, -0.46);
g.lineTo(0.022, -0.46);
g.lineTo(0.035, -0.34);
g.quadraticCurveTo(0.07, -0.28, 0.03, -0.23);
g.closePath();
g.fill();
g.globalAlpha = 0.35;
g.fillStyle = "#6d6a64";
g.fillRect(-0.022, -0.47, 0.044, 0.035);
g.globalAlpha = 1;
g.fillStyle = "#ffffff";
g.fillRect(-0.028, -0.33, 0.006, 0.08);
e.at(0, -0.28, "lamp");
