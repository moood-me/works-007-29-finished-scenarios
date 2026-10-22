// Algernon, the white mouse, in a corridor of the maze, side on, nose to the right: a white body, a long pink tail,
// pink ears and feet, a red eye, whiskers. His head is the layer `head`, turning about his neck as he sniffs (his
// animate). Metres from his feet.
g.strokeStyle = '#e8b4b0';
g.lineCap = 'round';
g.lineWidth = 0.005;
g.beginPath();
g.moveTo(-0.035, -0.014);
g.bezierCurveTo(-0.07, -0.004, -0.08, -0.02, -0.105, -0.006);
g.stroke();
g.fillStyle = '#efb7b2';
for (const x of [-0.022, 0.018]) {
  g.beginPath();
  g.ellipse(x, -0.002, 0.009, 0.004, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = '#fbfaf6';
g.beginPath();
g.ellipse(-0.003, -0.022, 0.042, 0.022, -0.08, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(200,200,205,0.35)';
g.beginPath();
g.ellipse(-0.006, -0.012, 0.034, 0.008, 0, 0, Math.PI * 2);
g.fill();
e.layer('head', { pivot: [0.028, -0.024] }, c => {
  c.fillStyle = '#fbfaf6';
  c.beginPath();
  c.moveTo(0.022, -0.04);
  c.quadraticCurveTo(0.062, -0.04, 0.078, -0.022);
  c.quadraticCurveTo(0.064, -0.01, 0.024, -0.008);
  c.closePath();
  c.fill();
  c.fillStyle = '#f2c7c3';
  c.beginPath();
  c.arc(0.036, -0.046, 0.011, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#fbfaf6';
  c.beginPath();
  c.arc(0.036, -0.046, 0.006, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#e48f8a';
  c.beginPath();
  c.arc(0.078, -0.022, 0.004, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#b8323a';
  c.beginPath();
  c.arc(0.054, -0.03, 0.0035, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = 'rgba(200,200,200,0.8)';
  c.lineWidth = 0.0008;
  c.beginPath();
  for (const dy of [-0.006, 0, 0.006]) {
    c.moveTo(0.074, -0.022);
    c.lineTo(0.098, -0.022 + dy * 1.6);
  }
  c.stroke();
});
e.at(0.055, -0.03);
