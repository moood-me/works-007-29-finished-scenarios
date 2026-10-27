// The left wall (metres along it from distance 3.2, x growing away from the viewer): whitewash, and the door out to
// the shed's side of the terrace (x −0.8…0.2, 2.0 high): heavy boards gone grey, two ledges and a brace, an iron
// latch and a bolt, its frame of rough wood. The nail with the rope is the element `rope` (x 0.75).
e.lib.whitewash(g, e, -2.62, 2.62, 2.85);
// the frame
g.fillStyle = '#4e3d2f';
g.fillRect(-0.88, -2.1, 0.08, 2.1);
g.fillRect(0.2, -2.1, 0.08, 2.1);
g.fillRect(-0.88, -2.14, 1.16, 0.08);
// the boards
for (let k = 0; k < 5; k++) {
  const x = -0.8 + k * 0.2;
  g.fillStyle = k % 2 ? '#7a6c5c' : '#837463';
  g.fillRect(x, -2.06, 0.2, 2.06);
  g.fillStyle = 'rgba(40,32,26,0.5)';
  g.fillRect(x + 0.195, -2.06, 0.01, 2.06);
  for (let i = 0; i < 4; i++) {
    g.fillStyle = 'rgba(70,60,50,0.3)';
    g.fillRect(x + 0.02 + e.rnd() * 0.14, -2.0 + e.rnd() * 1.9, 0.006, 0.2 + e.rnd() * 0.4);
  }
}
// the ledges and the brace
g.fillStyle = '#6b5d4e';
g.fillRect(-0.8, -1.75, 1.0, 0.1);
g.fillRect(-0.8, -0.4, 1.0, 0.1);
g.beginPath();
g.moveTo(-0.76, -0.4);
g.lineTo(-0.66, -0.4);
g.lineTo(0.16, -1.65);
g.lineTo(0.06, -1.65);
g.closePath();
g.fill();
// the latch and the bolt
g.fillStyle = '#2b2927';
g.fillRect(0.02, -1.05, 0.14, 0.03);
g.fillRect(0.1, -1.1, 0.03, 0.12);
g.fillRect(-0.1, -1.4, 0.22, 0.025);
// the cold coming in under the door: a pale line
g.fillStyle = 'rgba(200,210,230,0.5)';
g.fillRect(-0.8, -0.015, 1.0, 0.015);
