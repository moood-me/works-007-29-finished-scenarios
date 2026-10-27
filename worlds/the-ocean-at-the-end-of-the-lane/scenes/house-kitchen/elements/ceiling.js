// The ceiling seen from below (laid face down from the top of the back wall: y 0 there, -5.4 at the front): white
// emulsion gone a little yellow, the plaster rose the lamp hangs from (x 0.1, y -1.5).
g.fillStyle = '#e6e1d0';
g.fillRect(-2.75, -5.4, 5.5, 5.42);
g.strokeStyle = '#d4cdb8';
g.lineWidth = 0.02;
for (const r of [0.12, 0.18]) {
  g.beginPath();
  g.arc(0.1, -1.5, r, 0, Math.PI * 2);
  g.stroke();
}
