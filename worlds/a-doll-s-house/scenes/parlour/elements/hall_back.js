// The hall's far wall, seen through the parlour's doorway (x −0.5…1.0 of it in view): the front door (x 0.25), dark
// brown, panelled, a fanlight over it; on the door, at chest height, the locked letter box of brass with its little
// glass window — a letter's white corner behind the glass (the point `letterbox`); right of the door the coat pegs
// (a man's coat and hat, a woman's cloak and muff) under a brass wall lamp (its flame the point `sconce`, the scene's
// light "hall").
e.lib.wall(g, e, -1.15, 1.15);
// the door and its frame
g.fillStyle = '#d3c7ad';
g.fillRect(-0.3, -2.62, 1.1, 2.62);
g.fillStyle = '#2b3a4f';
g.fillRect(-0.2, -2.55, 0.9, 0.2);
g.strokeStyle = '#d3c7ad';
g.lineWidth = 0.025;
for (const x of [0.05, 0.25, 0.45]) {
  g.beginPath();
  g.moveTo(x, -2.55);
  g.lineTo(x, -2.35);
  g.stroke();
}
g.fillStyle = '#4e3324';
g.fillRect(-0.2, -2.32, 0.9, 2.32);
g.strokeStyle = '#3d281c';
g.lineWidth = 0.025;
for (const x of [-0.12, 0.29]) {
  g.strokeRect(x, -2.2, 0.33, 0.85);
  g.strokeRect(x, -0.75, 0.33, 0.6);
}
g.fillStyle = '#b8924a';
g.beginPath();
g.arc(0.6, -1.0, 0.028, 0, Math.PI * 2);
g.fill();
// the letter box: a brass box, its slot, its little window and the letter behind it, the keyhole
g.fillStyle = '#a8864a';
g.fillRect(0.06, -1.24, 0.38, 0.3);
g.fillStyle = '#7d6638';
g.fillRect(0.06, -1.24, 0.38, 0.03);
g.fillStyle = '#1e1a18';
g.fillRect(0.12, -1.2, 0.26, 0.012);
g.fillStyle = '#5b6470';
g.fillRect(0.14, -1.15, 0.22, 0.12);
g.fillStyle = '#f1ece0';
g.beginPath();
g.moveTo(0.16, -1.03);
g.lineTo(0.3, -1.1);
g.lineTo(0.36, -1.03);
g.closePath();
g.fill();
g.fillStyle = '#2a2420';
g.beginPath();
g.arc(0.25, -0.99, 0.01, 0, Math.PI * 2);
g.fill();
e.at(0.25, -1.09, 'letterbox');
// the coat pegs: a rail, a man's black coat and hat, a woman's dark blue cloak and a fur muff
g.fillStyle = '#5c4632';
g.fillRect(0.75, -1.85, 0.4, 0.05);
g.fillStyle = '#222326';
g.beginPath();
g.moveTo(0.8, -1.8);
g.lineTo(0.95, -1.8);
g.lineTo(1.0, -0.95);
g.lineTo(0.76, -0.95);
g.closePath();
g.fill();
g.fillRect(0.8, -1.98, 0.14, 0.12);
g.fillRect(0.76, -1.88, 0.22, 0.025);
g.fillStyle = '#2d3b57';
g.beginPath();
g.moveTo(1.0, -1.8);
g.lineTo(1.12, -1.8);
g.lineTo(1.15, -1.1);
g.lineTo(0.98, -1.1);
g.closePath();
g.fill();
g.fillStyle = '#7a6352';
g.beginPath();
g.ellipse(1.06, -1.12, 0.07, 0.05, 0, 0, Math.PI * 2);
g.fill();
// the wall lamp over the pegs
g.fillStyle = '#a8864a';
g.fillRect(0.93, -2.22, 0.03, 0.14);
g.fillStyle = '#f0e2c0';
g.beginPath();
g.arc(0.945, -2.3, 0.05, 0, Math.PI * 2);
g.fill();
e.light(0.945, -2.3, 0.06, '#ffcf8a', 0.8, 'sconce');
