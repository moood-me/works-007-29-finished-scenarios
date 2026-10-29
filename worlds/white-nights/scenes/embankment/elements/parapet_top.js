// The near parapet's top, from above (x −0.25…0.25 across it, y toward the viewer, its far end at −179.5; it runs 39 m behind the viewer too, past the corner): a
// lighter granite where hands rest, the joints of its slabs across it
g.fillStyle = '#d6ccc5';
g.fillRect(-0.25, -179.5, 0.5, 359);
g.beginPath();
for (let y = -179.5; y < 179.5; y += 2.2) {
  g.moveTo(-0.25, y);
  g.lineTo(0.25, y);
}
g.moveTo(0.25, -179.5);
g.lineTo(0.25, 179.5);
g.strokeStyle = 'rgba(74,63,58,0.65)';
g.lineWidth = 0.025;
g.stroke();
