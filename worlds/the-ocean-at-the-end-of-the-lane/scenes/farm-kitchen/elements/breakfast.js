// The boy's breakfast: a blue-and-white bowl of porridge with a spoon in it (the jam stirred in turns it purple), and
// the jar of blackcurrant jam beside it.
g.fillStyle = '#ecebe4';
g.beginPath();
g.moveTo(-0.11, -0.07);
g.quadraticCurveTo(-0.1, 0, 0, 0);
g.quadraticCurveTo(0.1, 0, 0.11, -0.07);
g.closePath();
g.fill();
g.fillStyle = '#4a6aa2';
g.fillRect(-0.11, -0.075, 0.22, 0.012);
g.fillStyle = '#8c5a86';
g.beginPath();
g.ellipse(0, -0.075, 0.105, 0.012, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#b4b2ac';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.02, -0.075);
g.lineTo(0.09, -0.15);
g.stroke();
// the jam jar, a paper top tied with string
g.fillStyle = '#4a1f3a';
g.fillRect(0.14, -0.12, 0.08, 0.12);
g.fillStyle = '#efe7d4';
g.fillRect(0.135, -0.14, 0.09, 0.025);
g.fillStyle = '#d8cdb4';
g.fillRect(0.16, -0.09, 0.04, 0.03);
