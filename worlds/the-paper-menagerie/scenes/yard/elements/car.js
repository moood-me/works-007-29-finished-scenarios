// Mark's car parked at the far curb (chapter 3): a dark green hatchback side on, its nose to the right of one looking
// from the yard, a bag on the back seat seen through the glass; the point `door` (the driver's, toward us).
g.fillStyle = '#2f5a48';
g.beginPath();
g.moveTo(-2.1, -0.3);
g.lineTo(-2.15, -0.85);
g.lineTo(-1.6, -1.35);
g.lineTo(0.7, -1.38);
g.lineTo(1.5, -0.88);
g.lineTo(2.15, -0.8);
g.lineTo(2.2, -0.3);
g.closePath();
g.fill();
g.fillStyle = '#9fb2bf';
g.beginPath();
g.moveTo(-1.5, -0.92);
g.lineTo(-1.45, -1.27);
g.lineTo(-0.35, -1.29);
g.lineTo(-0.35, -0.92);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-0.25, -0.92);
g.lineTo(-0.25, -1.29);
g.lineTo(0.62, -1.3);
g.lineTo(1.25, -0.92);
g.closePath();
g.fill();
g.fillStyle = '#3a4a5c';
g.fillRect(-1.3, -1.02, 0.5, 0.12);
g.fillStyle = 'rgba(20,36,30,0.6)';
g.fillRect(-0.3, -0.9, 0.02, 0.6);
g.fillStyle = '#c8ccd0';
g.fillRect(-2.2, -0.42, 0.25, 0.1);
g.fillRect(1.95, -0.42, 0.3, 0.1);
g.fillStyle = '#f2e6b8';
g.fillRect(2.08, -0.72, 0.1, 0.1);
for (const x of [-1.4, 1.35]) {
  g.fillStyle = '#232326';
  g.beginPath();
  g.arc(x, -0.3, 0.3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#a9adb2';
  g.beginPath();
  g.arc(x, -0.3, 0.13, 0, Math.PI * 2);
  g.fill();
}
e.at(0.2, -0.9, 'door');
