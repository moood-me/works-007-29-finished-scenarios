// The door's leaf (1 m wide, 2.1 m high), hung at its far edge, standing ajar out into the corridor: planks of old oak,
// iron strap hinges, a ring for a handle.
g.fillStyle = '#4a3020';
e.lib.arch(g, -1.0, 0, -2.12, 0, 0.28);
g.fill();
g.strokeStyle = '#33221a';
g.lineWidth = 0.015;
for (let x = -0.85; x < 0; x += 0.17) {
  g.beginPath();
  g.moveTo(x, -2.05);
  g.lineTo(x, 0);
  g.stroke();
}
g.fillStyle = '#2a2622';
for (const y of [-1.8, -0.4]) g.fillRect(-0.7, y, 0.7, 0.05);
g.strokeStyle = '#2a2622';
g.lineWidth = 0.02;
g.beginPath();
g.arc(-0.85, -1.0, 0.05, 0, Math.PI * 2);
g.stroke();
