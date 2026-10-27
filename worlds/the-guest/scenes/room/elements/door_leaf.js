// The classroom door's leaf, swung back into the classroom against its hinge (metres; 0.96 wide, 2.08 high), seen
// from inside: boards of the faded blue the outside door has, two ledges and a brace, the latch.
g.fillStyle = '#4f7884';
g.fillRect(-0.48, -2.08, 0.96, 2.08);
for (let x = -0.48 + 0.16; x < 0.48; x += 0.16) {
  g.fillStyle = 'rgba(40,62,70,0.55)';
  g.fillRect(x, -2.08, 0.012, 2.08);
}
g.fillStyle = '#466c77';
g.fillRect(-0.48, -1.8, 0.96, 0.1);
g.fillRect(-0.48, -0.4, 0.96, 0.1);
g.beginPath();
g.moveTo(-0.44, -1.7);
g.lineTo(-0.34, -1.7);
g.lineTo(0.44, -0.5);
g.lineTo(0.34, -0.5);
g.closePath();
g.fill();
g.fillStyle = '#2b2a28';
g.fillRect(0.34, -1.08, 0.1, 0.03);
