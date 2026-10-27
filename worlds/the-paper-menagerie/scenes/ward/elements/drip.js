// The drip stand behind the bed (facing the room): a chrome pole on its five-wheeled foot, the hook at the top with
// an empty bag on it today, the line looped up over the hook.
g.fillStyle = '#9ea2a4';
g.fillRect(-0.012, -1.85, 0.024, 1.8);
g.fillRect(-0.22, -0.06, 0.44, 0.022);
for (const x of [-0.21, -0.1, 0.1, 0.21]) {
  g.fillStyle = '#4a4a4c';
  g.beginPath();
  g.arc(x, -0.025, 0.025, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = '#9ea2a4';
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.12, -1.85);
g.lineTo(0.12, -1.85);
g.moveTo(-0.12, -1.85);
g.lineTo(-0.12, -1.8);
g.moveTo(0.12, -1.85);
g.lineTo(0.12, -1.8);
g.stroke();
g.fillStyle = 'rgba(226,236,240,0.7)';
g.beginPath();
g.moveTo(-0.17, -1.79);
g.lineTo(-0.07, -1.79);
g.lineTo(-0.075, -1.55);
g.quadraticCurveTo(-0.12, -1.5, -0.165, -1.55);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(220,230,232,0.8)';
g.lineWidth = 0.005;
g.beginPath();
g.moveTo(-0.12, -1.52);
g.bezierCurveTo(-0.15, -1.2, 0.1, -1.25, 0.12, -1.79);
g.stroke();
