// The wall with the door to the hall (facing into the room; its x runs toward the viewer: x 0 at distance 2.8, the
// west wall at x −1.6): warm white plaster, the skirting board, the doorway (x −0.92…−0.02, 2.1 high — the door
// itself open back into the hall, out of sight) in a pale casing.
const hole = c => c.rect(-0.92, -2.1, 0.9, 2.12);
g.save();
g.beginPath();
g.rect(-1.62, -2.62, 3.24, 2.64);
hole(g);
g.clip('evenodd');
g.fillStyle = '#e4dccf';
g.fillRect(-1.62, -2.62, 3.24, 2.64);
g.fillStyle = '#d9cfbf';
g.fillRect(-1.62, -0.12, 3.24, 0.14);
g.strokeStyle = '#f0eae0';
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-0.92, 0.02);
g.lineTo(-0.92, -2.1);
g.lineTo(-0.02, -2.1);
g.lineTo(-0.02, 0.02);
g.stroke();
g.restore();
// a light switch by the door
g.fillStyle = '#f2eee8';
g.fillRect(0.08, -1.25, 0.07, 0.11);
e.at(-0.47, -1.0, 'door');
