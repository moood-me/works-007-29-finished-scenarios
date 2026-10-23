// The wall with the door to the hall (facing into the room; its x runs toward the viewer: x 0 at distance 3.9, the
// west wall at x −1.3): warm white plaster, the skirting board, the doorway (x −0.42…0.48, 2.1 high — the door
// itself open back into the hall, out of sight) in a pale casing.
const hole = c => c.rect(-0.42, -2.1, 0.9, 2.12);
g.save();
g.beginPath();
g.rect(-1.32, -2.72, 2.64, 2.74);
hole(g);
g.clip('evenodd');
g.fillStyle = '#e4dccf';
g.fillRect(-1.32, -2.72, 2.64, 2.74);
g.fillStyle = '#d9cfbf';
g.fillRect(-1.32, -0.12, 2.64, 0.14);
g.strokeStyle = '#f0eae0';
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-0.42, 0.02);
g.lineTo(-0.42, -2.1);
g.lineTo(0.48, -2.1);
g.lineTo(0.48, 0.02);
g.stroke();
g.restore();
// a light switch by the door
g.fillStyle = '#f2eee8';
g.fillRect(0.58, -1.25, 0.07, 0.11);
e.at(0.03, -1.0, 'door');
