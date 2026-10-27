// The ward's floor from above (metres, its middle at distance 2.65, y toward the viewer): grey-green linoleum laid in
// half-metre squares, faintly speckled, its seams a little darker; worn paler from the door to the bed.
g.fillStyle = '#b6bfae';
g.fillRect(-2.9, -1.75, 5.8, 3.5);
for (let i = 0; i < 900; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(120,132,118,0.35)' : 'rgba(225,230,214,0.4)';
  g.fillRect(-2.9 + e.rnd() * 5.8, -1.75 + e.rnd() * 3.5, 0.012, 0.012);
}
g.fillStyle = 'rgba(110,122,108,0.4)';
for (let x = -2.9; x <= 2.9; x += 0.5) g.fillRect(x, -1.75, 0.008, 3.5);
for (let y = -1.75; y <= 1.75; y += 0.5) g.fillRect(-2.9, y, 5.8, 0.008);
g.fillStyle = 'rgba(232,236,222,0.22)';
g.beginPath();
g.ellipse(1.6, 0.2, 1.3, 0.5, -0.5, 0, Math.PI * 2);
g.fill();
