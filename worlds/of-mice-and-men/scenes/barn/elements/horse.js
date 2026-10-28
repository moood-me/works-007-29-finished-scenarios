// A work horse standing in its stall, side on, its head down in the manger by the left wall (metres, its foot at the
// middle; the head at x −1.5, the rump at x 1.3 toward the aisle): a big bay, black mane and legs, a blaze; its tail
// (the layer `tail`, hung from the croup) stirring now and then against the flies.
const bay = '#7b4b2d', dark = '#2b1d15';
// the far legs, darker
g.fillStyle = '#3a271b';
for (const x of [-0.45, 0.95]) g.fillRect(x - 0.06, -0.95, 0.12, 0.95);
// the body: barrel, chest, quarters
g.fillStyle = bay;
g.beginPath();
g.moveTo(-0.75, -1.05);
g.bezierCurveTo(-0.8, -1.4, -0.55, -1.6, -0.2, -1.55);
g.bezierCurveTo(0.3, -1.5, 0.7, -1.62, 1.05, -1.6);
g.bezierCurveTo(1.38, -1.58, 1.45, -1.3, 1.35, -1.0);
g.bezierCurveTo(1.25, -0.85, 1.05, -0.8, 0.85, -0.85);
g.bezierCurveTo(0.4, -0.78, -0.2, -0.78, -0.55, -0.85);
g.closePath();
g.fill();
// the neck down to the manger, the head in it
g.beginPath();
g.moveTo(-0.3, -1.52);
g.bezierCurveTo(-0.7, -1.6, -1.05, -1.4, -1.25, -1.15);
g.lineTo(-1.5, -1.0);
g.lineTo(-1.55, -0.82);
g.lineTo(-1.35, -0.8);
g.bezierCurveTo(-1.1, -0.95, -0.85, -1.0, -0.7, -0.95);
g.closePath();
g.fill();
g.fillStyle = dark;
g.beginPath();
g.moveTo(-0.3, -1.54);
g.bezierCurveTo(-0.7, -1.62, -1.05, -1.42, -1.22, -1.2);
g.lineTo(-1.16, -1.15);
g.bezierCurveTo(-1.0, -1.36, -0.7, -1.52, -0.3, -1.47);
g.closePath();
g.fill();
g.fillStyle = '#e8dcc8';
g.beginPath();
g.moveTo(-1.42, -0.98);
g.lineTo(-1.5, -0.85);
g.lineTo(-1.45, -0.84);
g.closePath();
g.fill();
g.fillStyle = dark;
g.beginPath();
g.moveTo(-1.18, -1.2);
g.lineTo(-1.12, -1.34);
g.lineTo(-1.08, -1.22);
g.closePath();
g.fill();
// the near legs: forearm and cannon, the hind leg's gaskin and hock; black below, the hooves
g.fillStyle = bay;
g.beginPath();
g.moveTo(-0.62, -0.95);
g.lineTo(-0.38, -0.95);
g.lineTo(-0.42, -0.5);
g.lineTo(-0.56, -0.5);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.85, -1.0);
g.bezierCurveTo(1.2, -0.95, 1.25, -0.7, 1.16, -0.48);
g.lineTo(1.02, -0.48);
g.bezierCurveTo(1.0, -0.65, 0.88, -0.75, 0.8, -0.85);
g.closePath();
g.fill();
g.fillStyle = dark;
g.fillRect(-0.55, -0.52, 0.12, 0.47);
g.fillRect(1.03, -0.5, 0.12, 0.45);
g.fillStyle = '#1b1410';
g.fillRect(-0.58, -0.07, 0.17, 0.07);
g.fillRect(1.0, -0.07, 0.17, 0.07);
// the harness marks, the hip's point
g.fillStyle = 'rgba(40,25,15,0.35)';
g.beginPath();
g.ellipse(-0.45, -1.25, 0.12, 0.3, 0.2, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(255,230,200,0.12)';
g.beginPath();
g.ellipse(0.95, -1.42, 0.25, 0.1, 0, 0, Math.PI * 2);
g.fill();
// the tail, from the croup
e.layer('tail', { pivot: [1.36, -1.42], wind: { strength: 0.6, gust: 0.8, scale: 0.4 } }, g => {
  g.fillStyle = '#1f1510';
  g.beginPath();
  g.moveTo(1.3, -1.45);
  g.bezierCurveTo(1.5, -1.4, 1.52, -1.0, 1.48, -0.55);
  g.lineTo(1.4, -0.45);
  g.lineTo(1.36, -0.6);
  g.bezierCurveTo(1.38, -1.0, 1.34, -1.25, 1.28, -1.38);
  g.closePath();
  g.fill();
});
