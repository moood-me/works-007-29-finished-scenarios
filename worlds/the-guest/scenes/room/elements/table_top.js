// The table's top from above (metres; 0.76 m over the floor, y toward the viewer): three planks of white wood scrubbed
// grey, a knot, rings left by glasses; and on it, near its front edge, Balducci's revolver where he put it down —
// dark blued steel, the cylinder, a grip of brown wood, the lanyard ring (the point `revolver`).
g.fillStyle = '#b8a688';
g.fillRect(-0.575, -0.36, 1.15, 0.72);
for (const y of [-0.12, 0.12]) {
  g.fillStyle = 'rgba(80,66,48,0.6)';
  g.fillRect(-0.575, y - 0.004, 1.15, 0.008);
}
for (let i = 0; i < 14; i++) {
  g.fillStyle = 'rgba(120,100,76,0.3)';
  g.fillRect(-0.55 + e.rnd() * 1.0, -0.34 + e.rnd() * 0.68, 0.15 + e.rnd() * 0.3, 0.004);
}
g.fillStyle = 'rgba(100,80,56,0.6)';
g.beginPath();
g.ellipse(0.3, -0.2, 0.025, 0.015, 0.3, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(120,90,50,0.35)';
g.lineWidth = 0.006;
for (const [x, y] of [[0.05, -0.05], [0.2, 0.0], [-0.1, -0.2]]) {
  g.beginPath();
  g.arc(x, y, 0.028, 0, Math.PI * 2);
  g.stroke();
}
// the revolver, its muzzle to the right
g.save();
g.translate(0.02, 0.18);
g.rotate(-0.25);
g.fillStyle = '#26282c';
g.fillRect(-0.02, -0.018, 0.2, 0.026);
g.fillRect(-0.06, -0.032, 0.07, 0.05);
g.fillStyle = '#3a3d42';
g.fillRect(-0.05, -0.026, 0.05, 0.038);
g.fillStyle = '#5b3d26';
g.beginPath();
g.moveTo(-0.06, -0.03);
g.lineTo(-0.15, -0.045);
g.lineTo(-0.17, 0.0);
g.lineTo(-0.06, 0.018);
g.closePath();
g.fill();
g.fillStyle = '#26282c';
g.beginPath();
g.arc(-0.175, -0.02, 0.012, 0, Math.PI * 2);
g.fill();
g.restore();
e.at(0.02, 0.18, 'revolver');
