// The kitchen door, swung open into the kitchen (its hinge at x 0, its free edge at x 1.05): planks painted the
// shutters' green, worn to the wood along their edges, an iron latch
g.fillStyle = '#6f9184';
g.fillRect(0, -2.1, 1.05, 2.1);
g.strokeStyle = '#8d7258';
g.lineWidth = 0.02;
for (let x = 0.15; x < 1.05; x += 0.15) {
  g.beginPath();
  g.moveTo(x, -2.1);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = '#5d7e72';
for (const y of [-1.8, -0.4]) g.fillRect(0.02, y, 1.01, 0.1);
g.fillStyle = '#2f2b28';
g.fillRect(0.88, -1.08, 0.12, 0.04);
