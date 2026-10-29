// The left wall (4.8 m along the room, +x running away from the viewer: x = distance − 3.0): whitewashed stone, and in
// it the door (2.2…3.0 m away, 1.9 m high) standing open on the plateau, cut through — its oak frame round it; his hat
// on a peg beside it, and his iron rod leaning in the corner by it, left at the door. Its point `door` (the doorway)
e.lib.lime(g, -2.42, 2.42, 2.52, 3);
g.fillStyle = '#5a4434';
g.fillRect(-0.9, -2.0, 1.0, 2.02);
g.globalCompositeOperation = 'destination-out';
g.fillRect(-0.8, -1.9, 0.8, 1.92);
g.globalCompositeOperation = 'source-over';
// the rod leaning in the corner past the door
g.strokeStyle = '#2f2f31';
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.3, -0.02);
g.lineTo(0.42, -1.42);
g.stroke();
// the peg and his dark felt hat on it
g.fillStyle = '#4c3a2a';
g.fillRect(0.62, -1.66, 0.05, 0.04);
g.fillStyle = '#3b332b';
g.beginPath();
g.ellipse(0.66, -1.6, 0.17, 0.035, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.roundRect(0.56, -1.74, 0.2, 0.14, 0.04);
g.fill();
e.at(-0.4, -1.0, 'door');
