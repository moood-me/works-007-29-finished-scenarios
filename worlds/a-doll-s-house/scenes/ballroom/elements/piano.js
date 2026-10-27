// The grand piano before the left wall's back part, seen side-on: black lacquer, its lid propped open, the keyboard at
// its right end (toward the room) with a sheet of music on the desk, three turned legs, the pedal lyre; the pianist's
// bench beyond the keyboard (x 1.45…1.9, the seat 0.5 m up). The point `keys` is the keyboard.
const BLACK = '#17151a';
const SHINE = '#3a3742';
// the lid, raised on its stick: its underside, then its edge
g.fillStyle = '#231f25';
g.beginPath();
g.moveTo(-1.15, -1.0);
g.lineTo(0.78, -1.0);
g.lineTo(-0.1, -1.66);
g.closePath();
g.fill();
g.strokeStyle = SHINE;
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.78, -1.0);
g.lineTo(-0.1, -1.66);
g.stroke();
g.strokeStyle = '#8a7a5a';
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.1, -1.0);
g.lineTo(0.12, -1.42);
g.stroke();
// the case: straight along the keyboard's side, curving into the tail
g.fillStyle = BLACK;
g.beginPath();
g.moveTo(1.05, -1.0);
g.lineTo(-0.55, -1.0);
g.quadraticCurveTo(-1.05, -1.0, -1.22, -0.92);
g.lineTo(-1.22, -0.72);
g.lineTo(1.05, -0.72);
g.closePath();
g.fill();
g.fillStyle = SHINE;
g.fillRect(-1.0, -0.95, 1.95, 0.015);
// the keyboard's end: the key bed, the keys, the cheek; the music desk with its sheet
g.fillStyle = BLACK;
g.fillRect(1.0, -0.82, 0.3, 0.1);
g.fillStyle = '#f0ead8';
g.fillRect(1.04, -0.84, 0.24, 0.02);
g.fillStyle = BLACK;
g.fillRect(1.26, -0.88, 0.04, 0.16);
g.fillStyle = '#2a262c';
g.beginPath();
g.moveTo(0.86, -1.0);
g.lineTo(0.98, -1.0);
g.lineTo(0.92, -1.26);
g.lineTo(0.84, -1.26);
g.closePath();
g.fill();
g.fillStyle = '#ede5d2';
g.beginPath();
g.moveTo(0.95, -1.03);
g.lineTo(0.99, -1.03);
g.lineTo(0.93, -1.3);
g.lineTo(0.89, -1.3);
g.closePath();
g.fill();
e.at(1.15, -0.84, 'keys');
// the legs and the castors, the lyre with its pedals
g.fillStyle = BLACK;
for (const x of [-0.95, 0.88]) {
  g.beginPath();
  g.moveTo(x - 0.07, -0.72);
  g.lineTo(x + 0.07, -0.72);
  g.lineTo(x + 0.035, -0.04);
  g.lineTo(x - 0.035, -0.04);
  g.closePath();
  g.fill();
  g.fillStyle = '#b8924a';
  g.fillRect(x - 0.035, -0.05, 0.07, 0.05);
  g.fillStyle = BLACK;
}
g.fillRect(0.47, -0.72, 0.03, 0.66);
g.fillRect(0.6, -0.72, 0.03, 0.66);
g.fillStyle = '#b8924a';
g.fillRect(0.44, -0.07, 0.22, 0.03);
// the bench
g.fillStyle = '#2a1d17';
g.fillRect(1.45, -0.5, 0.45, 0.06);
g.fillStyle = '#5c3b2a';
g.fillRect(1.47, -0.55, 0.41, 0.06);
g.fillStyle = '#2a1d17';
for (const x of [1.48, 1.84]) g.fillRect(x, -0.44, 0.035, 0.44);
