// The tour group's coach in the lay-by, side on, its front to the left (metres from its foot at the middle, y up
// negative): a white body with the tour company's teal sweep and a yellow line, the long band of tinted windows, the
// windscreen raked at the front, the door just behind it standing open (its steps up into the dark, the folded
// leaves), three wheels. Points: `door`.
const BODY = '#f2f1ec',
  TEAL = '#2f8f8a',
  YELLOW = '#f0c23e',
  TINT = '#3e4b5a',
  TYRE = '#2a2a2c';
// the body, its corners rounded
g.fillStyle = BODY;
g.beginPath();
g.moveTo(-5.7, -0.35);
g.lineTo(-6.0, -0.9);
g.lineTo(-5.95, -2.9);
g.quadraticCurveTo(-5.85, -3.42, -5.3, -3.45);
g.lineTo(5.75, -3.45);
g.quadraticCurveTo(6.0, -3.42, 6.0, -3.1);
g.lineTo(6.0, -0.35);
g.closePath();
g.fill();
// the windscreen, raked
g.fillStyle = TINT;
g.beginPath();
g.moveTo(-5.92, -1.75);
g.lineTo(-5.86, -3.0);
g.quadraticCurveTo(-5.8, -3.3, -5.45, -3.3);
g.lineTo(-5.42, -1.75);
g.closePath();
g.fill();
// the windows, pillar by pillar
for (let x = -4.25; x < 5.7; x += 1.42) {
  g.fillStyle = TINT;
  g.fillRect(x, -3.25, 1.3, 1.35);
  g.fillStyle = 'rgba(214,226,240,0.28)';
  g.beginPath();
  g.moveTo(x + 0.15, -3.2);
  g.lineTo(x + 0.55, -3.2);
  g.lineTo(x + 0.2, -1.95);
  g.lineTo(x + 0.08, -1.95);
  g.closePath();
  g.fill();
}
// the company's sweep along the side, and its yellow line
g.fillStyle = TEAL;
g.beginPath();
g.moveTo(-4.2, -0.9);
g.bezierCurveTo(-1, -1.0, 2, -1.7, 6.0, -1.75);
g.lineTo(6.0, -0.9);
g.closePath();
g.fill();
g.fillStyle = YELLOW;
g.fillRect(-5.95, -1.82, 1.6, 0.07);
g.fillRect(-4.2, -0.98, 10.2, 0.08);
// the door, open: the doorway dark, its steps going up, the two leaves folded against the frame
g.fillStyle = '#2b2f37';
g.fillRect(-5.3, -3.05, 0.95, 2.75);
g.fillStyle = '#6c707a';
for (let i = 0; i < 3; i++) g.fillRect(-5.28, -0.5 - i * 0.28, 0.9, 0.06);
g.fillStyle = 'rgba(200,214,226,0.55)';
g.fillRect(-5.42, -3.0, 0.14, 2.65);
g.fillRect(-4.36, -3.0, 0.14, 2.65);
// the skirt, the shadow under it, the wheels and their arches
g.fillStyle = '#dcdcd6';
g.fillRect(-5.9, -0.5, 11.9, 0.15);
g.fillStyle = 'rgba(40,40,44,0.6)';
g.fillRect(-5.6, -0.35, 11.4, 0.33);
for (const x of [-3.7, 3.2, 4.45]) {
  g.fillStyle = '#3a3a3e';
  g.beginPath();
  g.arc(x, -0.5, 0.62, Math.PI, 0);
  g.fill();
  g.fillStyle = TYRE;
  g.beginPath();
  g.arc(x, -0.5, 0.5, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#a9adb2';
  g.beginPath();
  g.arc(x, -0.5, 0.24, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#7d8187';
  g.beginPath();
  g.arc(x, -0.5, 0.08, 0, Math.PI * 2);
  g.fill();
}
// the front lamp and the mirror on its arm
g.fillStyle = '#f6e7b8';
g.fillRect(-5.98, -0.85, 0.12, 0.22);
g.fillStyle = '#2b2f37';
g.fillRect(-6.25, -3.1, 0.3, 0.05);
g.fillRect(-6.3, -3.1, 0.07, 0.42);
e.at(-4.83, -1.5, 'door');
