// The lamp over the kitchen table, seen through the window (its foot the shade's rim; the cord up to the ceiling):
// the green enamel shade, cream inside, lit — the layer `lamp`, swaying a hair.
e.layer('lamp', { pivot: [0, -0.93] }, c => {
  c.strokeStyle = '#3a3630';
  c.lineWidth = 0.008;
  c.beginPath();
  c.moveTo(0, -0.93);
  c.lineTo(0, -0.2);
  c.stroke();
  c.fillStyle = '#3f5a4c';
  c.beginPath();
  c.moveTo(-0.04, -0.21);
  c.lineTo(0.04, -0.21);
  c.quadraticCurveTo(0.08, -0.12, 0.24, 0);
  c.lineTo(-0.24, 0);
  c.quadraticCurveTo(-0.08, -0.12, -0.04, -0.21);
  c.closePath();
  c.fill();
  c.fillStyle = '#efe6d2';
  c.beginPath();
  c.ellipse(0, 0, 0.24, 0.025, 0, 0, Math.PI * 2);
  c.fill();
  e.light(0, 0.01, 0.2, '#ffd89a', 0.9);
});
