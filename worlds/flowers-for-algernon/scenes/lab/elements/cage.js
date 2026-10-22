// Algernon's cage on the bench, empty while he runs the maze: a wire box on a white tray, cedar shavings, a little
// wooden house, a water bottle hung on its side. Metres from its foot, x −0.24…0.24.
g.fillStyle = '#eceae2';
g.fillRect(-0.24, -0.06, 0.48, 0.06);
g.fillStyle = '#d9b98a';
g.fillRect(-0.22, -0.08, 0.44, 0.03);
g.fillStyle = '#a77d55';
g.fillRect(-0.18, -0.15, 0.12, 0.08);
g.beginPath();
g.moveTo(-0.19, -0.15);
g.lineTo(-0.12, -0.2);
g.lineTo(-0.05, -0.15);
g.closePath();
g.fill();
g.fillStyle = '#5e4632';
g.beginPath();
g.arc(-0.12, -0.08, 0.025, Math.PI, 0);
g.fill();
// the bottle
g.fillStyle = 'rgba(200,225,235,0.75)';
g.fillRect(0.12, -0.27, 0.06, 0.15);
g.fillStyle = '#9aa2a4';
g.fillRect(0.145, -0.12, 0.01, 0.05);
// the wire: verticals and a top, thin grey
g.strokeStyle = 'rgba(130,136,138,0.9)';
g.lineWidth = 0.004;
g.beginPath();
for (let x = -0.23; x <= 0.235; x += 0.025) {
  g.moveTo(x, -0.06);
  g.lineTo(x, -0.3);
}
g.moveTo(-0.23, -0.3);
g.lineTo(0.23, -0.3);
g.moveTo(-0.23, -0.18);
g.lineTo(0.23, -0.18);
g.stroke();
g.lineWidth = 0.008;
g.strokeRect(-0.23, -0.31, 0.46, 0.25);
e.at(0, -0.18, 'cage');
