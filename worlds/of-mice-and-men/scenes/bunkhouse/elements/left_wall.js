// The left wall (its face to the room; x from the front, −3.8, to the back corner, 3.8; its foot at the middle): the
// same grey whitewash; the wash bench with its tin basin and bucket, a scrap of mirror and the towel on a nail over it;
// toward the corner a row of pegs with a coat, a hat and a pair of chaps.
e.lib.boards(g, -3.85, -3.05, 3.85, 0.02, 0.2, '#d0c8b4', 17);
g.fillStyle = 'rgba(110,95,75,0.35)';
g.fillRect(-3.85, -0.12, 7.7, 0.12);
// the wash bench, the basin and the bucket, the mirror and the towel
g.fillStyle = '#7d6449';
g.fillRect(0.9, -0.82, 1.3, 0.06);
g.fillRect(0.95, -0.78, 0.06, 0.78);
g.fillRect(2.1, -0.78, 0.06, 0.78);
g.fillStyle = '#9da2a6';
g.beginPath();
g.ellipse(1.3, -0.86, 0.22, 0.05, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(1.68, -1.08, 0.24, 0.26);
g.fillStyle = '#b8b6ae';
g.fillRect(1.2, -1.62, 0.26, 0.32);
g.fillStyle = '#7e8a92';
g.fillRect(1.23, -1.59, 0.2, 0.26);
g.fillStyle = '#e6dfcf';
g.fillRect(1.72, -1.5, 0.15, 0.4);
// the pegs and what hangs on them
g.fillStyle = '#6e5a43';
g.fillRect(2.4, -1.9, 1.4, 0.08);
g.fillStyle = '#4a5468';
g.beginPath();
g.moveTo(2.55, -1.84);
g.lineTo(2.85, -1.84);
g.lineTo(2.95, -0.98);
g.lineTo(2.42, -0.98);
g.closePath();
g.fill();
g.fillStyle = '#2b2725';
g.beginPath();
g.ellipse(3.2, -1.82, 0.19, 0.05, 0, 0, Math.PI * 2);
g.ellipse(3.2, -1.9, 0.1, 0.08, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#6b4a32';
g.beginPath();
g.moveTo(3.45, -1.84);
g.lineTo(3.7, -1.84);
g.lineTo(3.65, -1.04);
g.lineTo(3.55, -1.04);
g.lineTo(3.57, -1.64);
g.lineTo(3.5, -1.04);
g.lineTo(3.4, -1.04);
g.closePath();
g.fill();
