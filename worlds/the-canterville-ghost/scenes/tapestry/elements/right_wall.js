// The chamber's right wall (5.7 m along the room, from 6.6 m to 0.9 m away, +x running toward the viewer): the old
// mirror (x −1.7…−0.9, 4.65…5.45 m away; its glass is the element `mirror`) in a carved frame, its gilt gone brown,
// an oak chest under it; a tapestry of the hunt over the dado nearer.
e.lib.wall(g, -2.85, 2.85, 3.1);
e.lib.tapestry(g, e, -0.45, -2.85, 2.75, -0.98, 4);
// the frame
g.fillStyle = '#6a5230';
g.fillRect(-1.77, -2.34, 0.94, 1.38);
g.fillStyle = '#8a6c3c';
g.fillRect(-1.73, -2.3, 0.86, 1.3);
g.fillStyle = '#6a5230';
g.beginPath();
g.moveTo(-1.77, -2.34);
g.quadraticCurveTo(-1.3, -2.68, -0.83, -2.34);
g.closePath();
g.fill();
g.fillStyle = '#1a1814';
g.fillRect(-1.7, -2.26, 0.8, 1.22);
// the chest under it
g.fillStyle = '#3a2618';
g.fillRect(-1.9, -0.62, 1.2, 0.62);
g.strokeStyle = '#2a1c12';
g.lineWidth = 0.02;
g.strokeRect(-1.85, -0.56, 0.52, 0.44);
g.strokeRect(-1.27, -0.56, 0.52, 0.44);
g.fillStyle = '#4a3020';
g.fillRect(-1.93, -0.66, 1.26, 0.06);
