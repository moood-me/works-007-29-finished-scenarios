// The landing's underside seen from below, laid face down from the far wall (y 0) toward the viewer (y −1.6): oak
// boards on three joists running out to the fascia.
const L = e.lib;
g.fillStyle = '#4a3222';
g.fillRect(-1.75, -1.62, 3.5, 1.64);
g.fillStyle = L.OAK_DARK;
for (const x of [-1.2, 0, 1.2]) g.fillRect(x - 0.07, -1.62, 0.14, 1.64);
g.strokeStyle = '#3a2618';
g.lineWidth = 0.012;
for (let x = -1.75; x < 1.75; x += 0.18) {
  g.beginPath();
  g.moveTo(x, -1.62);
  g.lineTo(x, 0.02);
  g.stroke();
}
