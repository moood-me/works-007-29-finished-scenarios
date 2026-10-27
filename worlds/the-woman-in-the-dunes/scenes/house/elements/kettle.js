// The pot-hook over the hearth (3 m ahead, x 0 the hearth's middle): a bamboo pole hung from the dark of the roof, the
// wooden fish that holds its height, the iron hook and on it the black iron kettle a hand over the coals, its spout to
// the right (point `spout`, where the steam comes from).
g.fillStyle = "#a08a5c";
g.fillRect(-0.025, -3.1, 0.05, 2.4);
g.fillStyle = "rgba(70, 56, 40, 0.5)";
for (let y = -3.0; y < -0.75; y += 0.32) g.fillRect(-0.03, y, 0.06, 0.02);
// the wooden fish across it
g.fillStyle = "#6e5640";
g.beginPath();
g.moveTo(-0.22, -1.42);
g.quadraticCurveTo(0, -1.5, 0.2, -1.43);
g.lineTo(0.27, -1.48);
g.lineTo(0.26, -1.36);
g.lineTo(0.2, -1.4);
g.quadraticCurveTo(0, -1.33, -0.22, -1.38);
g.closePath();
g.fill();
// the iron rod and hook, the kettle low over the coals
g.save();
g.translate(0, 0.3);
g.fillStyle = "#3a3632";
g.fillRect(-0.012, -1.0, 0.024, 0.14);
g.strokeStyle = "#3a3632";
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(0, -0.87);
g.lineTo(0, -0.82);
g.stroke();
// the kettle: a low round iron body, its lid and knob, the bail, the spout
g.fillStyle = "#3e3934";
g.beginPath();
g.moveTo(-0.18, -0.62);
g.quadraticCurveTo(-0.24, -0.5, -0.17, -0.42);
g.lineTo(0.17, -0.42);
g.quadraticCurveTo(0.24, -0.5, 0.18, -0.62);
g.closePath();
g.fill();
g.fillStyle = "#4a443e";
g.fillRect(-0.12, -0.66, 0.24, 0.04);
g.fillRect(-0.025, -0.7, 0.05, 0.04);
g.strokeStyle = "#3a3632";
g.lineWidth = 0.016;
g.beginPath();
g.moveTo(-0.17, -0.62);
g.quadraticCurveTo(0, -0.86, 0.17, -0.62);
g.stroke();
g.fillStyle = "#3e3934";
g.beginPath();
g.moveTo(0.19, -0.56);
g.lineTo(0.3, -0.62);
g.lineTo(0.31, -0.6);
g.lineTo(0.2, -0.5);
g.closePath();
g.fill();
g.restore();
e.at(0.3, -0.31, "spout");
