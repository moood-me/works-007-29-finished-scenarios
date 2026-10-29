// The landing's floor seen through the open panel, from above (2.4 m across, 5 m along): dark oak boards running
// along the landing.
g.fillStyle = '#3a2618';
g.fillRect(-1.2, -2.5, 2.4, 5.0);
g.strokeStyle = '#26190f';
g.lineWidth = 0.01;
for (let x = -1.1; x < 1.2; x += 0.2) {
  g.beginPath();
  g.moveTo(x, -2.5);
  g.lineTo(x, 2.5);
  g.stroke();
}
