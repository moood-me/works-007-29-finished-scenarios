// The landing's floor seen through the open panel, from above (0.8 m across, 1.6 m along): dark oak boards.
g.fillStyle = '#3a2618';
g.fillRect(-0.4, -0.8, 0.8, 1.6);
g.strokeStyle = '#26190f';
g.lineWidth = 0.01;
for (let x = -0.3; x < 0.4; x += 0.2) {
  g.beginPath();
  g.moveTo(x, -0.8);
  g.lineTo(x, 0.8);
  g.stroke();
}
