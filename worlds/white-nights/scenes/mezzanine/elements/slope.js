// The roof's slope over the knee wall, from above as it slopes (x −2.1…2.1 along the room, y −0.98 at its top by
// the flat ceiling … 0.98 down at the knee wall): whitewashed boards between two dark rafters
const INK = e.lib.INK;
g.fillStyle = '#e6dfd2';
g.fillRect(-2.1, -0.98, 4.2, 1.96);
e.lib.wash(g, -2.1, -0.98, 4.2, 1.96, [230, 223, 210], 64, 0.3, 0.6, 0);
g.beginPath();
for (let y = -0.98; y < 0.98; y += 0.18) { g.moveTo(-2.1, y); g.lineTo(2.1, y); }
g.strokeStyle = 'rgba(74,63,58,0.2)';
g.lineWidth = 0.008;
g.stroke();
for (const x of [-1.2, 0.3, 1.8]) e.lib.box(g, x - 0.06, -0.98, 0.12, 1.96, '#8a6c54', 0.01);
