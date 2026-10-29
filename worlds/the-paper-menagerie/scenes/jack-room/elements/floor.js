// The floor from above (metres, its middle at across −0.2, distance 3.15; y toward the viewer): honey-coloured oak
// boards running away from us through the room and the hall; in the room a braided oval rug, blue and rust (rolled
// away once the room is emptied: a cleaner oval of boards where it lay); in the hall a long red-brown runner.
g.fillStyle = '#c99d68';
g.fillRect(-2.7, -1.1, 5.4, 2.2);
for (let x = -2.7, i = 0; x < 2.7; x += 0.12, i++) {
  g.fillStyle = i % 3 === 0 ? 'rgba(120,80,40,0.16)' : i % 3 === 1 ? 'rgba(255,230,190,0.1)' : 'rgba(150,100,50,0.08)';
  g.fillRect(x, -1.1, 0.12, 2.2);
  g.fillStyle = 'rgba(90,60,30,0.35)';
  g.fillRect(x, -1.1, 0.006, 2.2);
  g.fillRect(x, -1.1 + ((i * 0.71) % 1) * 2.2, 0.12, 0.006);
}
if (e.state.packed) {
  g.fillStyle = 'rgba(240,210,160,0.18)';
  g.beginPath();
  g.ellipse(-1.0, 0.05, 0.85, 0.5, 0, 0, Math.PI * 2);
  g.fill();
} else {
  for (let k = 0; k < 7; k++) {
    g.strokeStyle = ['#46648e', '#b5603e', '#d8c49a', '#46648e', '#8e4a3a', '#c9b48a', '#3a5478'][k];
    g.lineWidth = 0.065;
    g.beginPath();
    g.ellipse(-1.0, 0.05, 0.82 - k * 0.11, 0.48 - k * 0.065, 0, 0, Math.PI * 2);
    g.stroke();
  }
}
// the hall's runner
g.fillStyle = '#8c3f34';
g.fillRect(1.32, -1.1, 0.9, 2.2);
g.fillStyle = '#c9a26a';
g.fillRect(1.36, -1.1, 0.02, 2.2);
g.fillRect(2.16, -1.1, 0.02, 2.2);
