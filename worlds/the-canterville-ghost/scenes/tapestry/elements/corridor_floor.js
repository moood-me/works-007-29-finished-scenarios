// The corridor's floor seen through the door, from above (0.8 m across, 1.4 m along): dark boards in the dusk.
g.fillStyle = '#24180f';
g.fillRect(-0.4, -0.7, 0.8, 1.4);
g.strokeStyle = '#1a110b';
g.lineWidth = 0.01;
for (let x = -0.3; x < 0.4; x += 0.2) {
  g.beginPath();
  g.moveTo(x, -0.7);
  g.lineTo(x, 0.7);
  g.stroke();
}
