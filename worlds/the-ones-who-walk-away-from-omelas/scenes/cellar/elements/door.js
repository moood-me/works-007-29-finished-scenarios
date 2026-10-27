// The storeroom's door, open into the corridor (its hinge at x 0, its free edge at x −0.9): its inner face — heavy
// planks, two iron straps, the lock's plate with the keyhole near the free edge
g.fillStyle = '#4f3c2b';
g.fillRect(-0.9, -1.85, 0.9, 1.85);
g.strokeStyle = '#3a2c20';
g.lineWidth = 0.012;
for (let x = -0.75; x < 0; x += 0.15) {
  g.beginPath();
  g.moveTo(x, -1.85);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = '#2d2824';
for (const y of [-1.5, -0.4]) g.fillRect(-0.88, y, 0.86, 0.06);
g.fillRect(-0.86, -1.0, 0.12, 0.2);
g.fillStyle = '#100d0b';
g.beginPath();
g.arc(-0.8, -0.93, 0.012, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.805, -0.93, 0.01, 0.04);
