// The embankment's street from above (x −3.9 at the parapet … 3.9 at the yellow house; y toward the viewer, its far
// end 320 m off at −160): flagstones two metres wide along the parapet, their joints; the cobbled roadway beyond
// them, a warm grey wash with stones dabbed in only near (they blur to a tone further off)
const W = 7.8, D = 320;
g.fillStyle = '#b6aea4';
g.fillRect(-W / 2, -D / 2, W, D);
g.fillStyle = '#c6beb3';
g.fillRect(-W / 2, -D / 2, 2.0, D);
g.beginPath();
for (let y = -D / 2; y < D / 2; y += 1.1) {
  g.moveTo(-W / 2, y);
  g.lineTo(-W / 2 + 2.0, y);
}
g.moveTo(-W / 2 + 1.0, -D / 2);
g.lineTo(-W / 2 + 1.0, D / 2);
g.moveTo(-W / 2 + 2.0, -D / 2);
g.lineTo(-W / 2 + 2.0, D / 2);
g.strokeStyle = 'rgba(74,63,58,0.32)';
g.lineWidth = 0.02;
g.stroke();
// (the roadway's stones, near the viewer: 0…40 m)
g.beginPath();
for (let i = 0; i < 1100; i++) {
  const x = -W / 2 + 2.15 + (W - 2.3) * e.anim.hash(i, 31), y = D / 2 - 40 * e.anim.hash(i, 32);
  g.moveTo(x + 0.07, y);
  g.ellipse(x, y, 0.07, 0.05, 0, 0, Math.PI * 2);
}
g.fillStyle = 'rgba(120,108,100,0.14)';
g.fill();
// (the gutter by the houses)
g.fillStyle = 'rgba(110,100,96,0.25)';
g.fillRect(W / 2 - 0.35, -D / 2, 0.35, D);
