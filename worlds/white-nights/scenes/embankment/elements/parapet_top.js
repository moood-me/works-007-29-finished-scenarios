// The near parapet's top, from above (x −0.25…0.25 across it, y toward the viewer, its far end at −159.5): a
// lighter granite where hands rest, the joints of its slabs across it
g.fillStyle = '#b9ada8';
g.fillRect(-0.25, -159.5, 0.5, 319);
g.beginPath();
for (let y = -159.5; y < 159.5; y += 2.2) {
  g.moveTo(-0.25, y);
  g.lineTo(0.25, y);
}
g.moveTo(0.25, -159.5);
g.lineTo(0.25, 159.5);
g.strokeStyle = 'rgba(74,63,58,0.5)';
g.lineWidth = 0.02;
g.stroke();
