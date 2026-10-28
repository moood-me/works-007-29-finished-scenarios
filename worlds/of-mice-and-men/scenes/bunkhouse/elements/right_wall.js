// The right wall (its face to the room; x from the back corner, −3.8, to the front, 3.8; its foot at the middle): the
// grey whitewash; a small square window on the night; Slim's coiled jerkline rope and a bridle on pegs.
g.save();
g.beginPath();
g.rect(-3.85, -3.05, 7.7, 3.07);
g.rect(-0.6, -2.0, 0.7, 0.7);
g.clip('evenodd');
e.lib.boards(g, -3.85, -3.05, 3.85, 0.02, 0.2, '#d0c8b4', 29);
g.fillStyle = 'rgba(110,95,75,0.35)';
g.fillRect(-3.85, -0.12, 7.7, 0.12);
g.fillStyle = '#b6a586';
g.fillRect(-0.66, -2.06, 0.82, 0.06);
g.fillRect(-0.66, -1.3, 0.82, 0.06);
g.fillRect(-0.66, -2.06, 0.06, 0.82);
g.fillRect(0.1, -2.06, 0.06, 0.82);
g.restore();
// pegs, the rope coiled on one, a bridle on the other
g.fillStyle = '#6e5a43';
g.fillRect(0.8, -1.9, 1.6, 0.07);
g.strokeStyle = '#b39a6a';
g.lineWidth = 0.025;
for (let i = 0; i < 5; i++) {
  g.beginPath();
  g.ellipse(1.15, -1.55 + i * 0.012, 0.18 - i * 0.008, 0.32, 0, 0, Math.PI * 2);
  g.stroke();
}
g.strokeStyle = '#4c3424';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(1.95, -1.86);
g.lineTo(1.85, -1.2);
g.lineTo(2.1, -1.0);
g.moveTo(1.95, -1.86);
g.lineTo(2.1, -1.0);
g.stroke();
