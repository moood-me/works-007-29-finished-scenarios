// Candy's old sheepdog lying on the floor at his feet, head toward his hand (metres, its foot at the middle; the head
// to the left): grey and white, his muzzle grey, his eyes pale and blind, his flank rising and falling (the layer
// `flank`, breathing).
e.layer('flank', { pivot: [0.1, 0] }, g => {
  g.fillStyle = '#b4ab9b';
  g.beginPath();
  g.moveTo(-0.3, 0);
  g.bezierCurveTo(-0.32, -0.22, -0.05, -0.3, 0.2, -0.28);
  g.bezierCurveTo(0.42, -0.26, 0.5, -0.12, 0.48, 0);
  g.closePath();
  g.fill();
  g.fillStyle = '#7e776c';
  g.beginPath();
  g.moveTo(-0.05, -0.29);
  g.bezierCurveTo(0.1, -0.31, 0.3, -0.29, 0.4, -0.2);
  g.bezierCurveTo(0.25, -0.2, 0.1, -0.2, -0.05, -0.22);
  g.closePath();
  g.fill();
});
// the tail along the floor, the hind leg
g.fillStyle = '#a39a8a';
g.beginPath();
g.moveTo(0.46, -0.05);
g.quadraticCurveTo(0.6, -0.04, 0.66, 0.0);
g.lineTo(0.46, 0.0);
g.closePath();
g.fill();
g.fillStyle = '#c4bcad';
g.beginPath();
g.ellipse(0.3, -0.04, 0.14, 0.05, 0, 0, Math.PI * 2);
g.fill();
// the forelegs out before him, the head laid on them, the ears down
g.fillStyle = '#cfc8ba';
g.fillRect(-0.48, -0.05, 0.24, 0.05);
g.fillStyle = '#b4ab9b';
g.beginPath();
g.ellipse(-0.34, -0.14, 0.12, 0.1, -0.2, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9b9488';
g.beginPath();
g.ellipse(-0.47, -0.1, 0.08, 0.05, 0.1, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2e2a26';
g.beginPath();
g.arc(-0.545, -0.11, 0.015, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#7e776c';
g.beginPath();
g.ellipse(-0.28, -0.16, 0.05, 0.08, 0.5, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d6d8d4';
g.beginPath();
g.arc(-0.4, -0.17, 0.012, 0, Math.PI * 2);
g.fill();
e.at(-0.36, -0.16, 'head');
