// On the worktop, from its face (x −1.4…1.4; the counter's left part): a cream enamel kettle, a bread bin, a jar of
// wooden spoons, a small radio.
// the kettle
g.fillStyle = '#ece4d0';
g.beginPath();
g.moveTo(-1.2, 0);
g.bezierCurveTo(-1.26, -0.12, -1.22, -0.22, -1.1, -0.24);
g.lineTo(-0.94, -0.24);
g.bezierCurveTo(-0.82, -0.22, -0.78, -0.12, -0.84, 0);
g.closePath();
g.fill();
g.strokeStyle = '#3c3a36';
g.lineWidth = 0.014;
g.beginPath();
g.moveTo(-1.12, -0.24);
g.quadraticCurveTo(-1.02, -0.36, -0.92, -0.24);
g.stroke();
g.fillStyle = '#ece4d0';
g.beginPath();
g.moveTo(-1.21, -0.1);
g.lineTo(-1.32, -0.2);
g.lineTo(-1.3, -0.22);
g.lineTo(-1.19, -0.15);
g.closePath();
g.fill();
g.fillStyle = '#3c3a36';
g.fillRect(-1.04, -0.27, 0.04, 0.03);
// the bread bin
g.fillStyle = '#b5482f';
g.beginPath();
g.roundRect(-0.55, -0.24, 0.42, 0.24, [0.1, 0.1, 0, 0]);
g.fill();
g.fillStyle = '#f1e8d6';
g.fillRect(-0.44, -0.15, 0.2, 0.05);
// the spoons in their jar
g.fillStyle = '#9b7a52';
for (const [x, a] of [[0.18, -0.15], [0.22, 0.05], [0.26, 0.2]]) {
  g.save();
  g.translate(x, -0.14);
  g.rotate(a);
  g.fillRect(-0.008, -0.2, 0.016, 0.2);
  g.beginPath();
  g.ellipse(0, -0.21, 0.022, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
g.fillStyle = '#d7d3c8';
g.fillRect(0.12, -0.15, 0.2, 0.15);
// the radio
g.fillStyle = '#6e5a46';
g.beginPath();
g.roundRect(0.7, -0.18, 0.34, 0.18, 0.03);
g.fill();
g.fillStyle = '#d9cfb8';
g.fillRect(0.74, -0.15, 0.16, 0.11);
g.fillStyle = '#2e2a26';
g.beginPath();
g.arc(0.97, -0.09, 0.03, 0, Math.PI * 2);
g.fill();
