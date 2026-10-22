// The grain shed against the school's left end: a low wall of rough grey stone, half whitewashed (metres, x along its
// front, y up), its plank door open on the dark inside where the administration's sacks of grain are stacked; a sack or
// two by the door.
g.fillStyle = '#c9c3b5';
g.fillRect(-1.5, -2.45, 3, 2.45);
for (let i = 0; i < 40; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,143,130,0.5)' : 'rgba(220,214,202,0.5)';
  g.fillRect(-1.5 + e.rnd() * 2.8, -2.4 + e.rnd() * 2.3, 0.2 + e.rnd() * 0.25, 0.1 + e.rnd() * 0.1);
}
// the opening, dark inside, and the sacks in it, lit only a little from the door
g.fillStyle = '#2e2a25';
g.fillRect(-0.55, -1.95, 1.1, 1.95);
function sack(x, y, w, h, c) {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - w / 2, y);
  g.quadraticCurveTo(x - w / 2 - 0.04, y - h * 0.6, x - w * 0.35, y - h);
  g.quadraticCurveTo(x, y - h - 0.06, x + w * 0.35, y - h);
  g.quadraticCurveTo(x + w / 2 + 0.04, y - h * 0.6, x + w / 2, y);
  g.closePath();
  g.fill();
}
sack(-0.25, 0, 0.5, 0.42, '#7d6c52');
sack(0.25, 0, 0.5, 0.4, '#76664d');
sack(0, -0.38, 0.5, 0.4, '#837157');
sack(-0.3, -0.76, 0.45, 0.36, '#6f604a');
sack(0.22, -0.74, 0.45, 0.36, '#7a6a50');
// the door leaf folded back against the wall
g.fillStyle = '#7d6a55';
g.fillRect(0.6, -1.9, 0.5, 1.9);
g.strokeStyle = '#5f5141';
g.lineWidth = 0.02;
for (let x = 0.7; x < 1.1; x += 0.12) {
  g.beginPath();
  g.moveTo(x, -1.9);
  g.lineTo(x, 0);
  g.stroke();
}
// a sack outside by the door
sack(-0.95, 0, 0.55, 0.5, '#bba684');
// snow at the foot
g.fillStyle = '#eef1f4';
g.beginPath();
g.moveTo(-1.5, 0.02);
g.quadraticCurveTo(-1.3, -0.18, -1.0, -0.06);
g.lineTo(-0.6, 0.02);
g.moveTo(1.1, 0.02);
g.quadraticCurveTo(1.3, -0.2, 1.5, -0.12);
g.lineTo(1.5, 0.02);
g.fill();
