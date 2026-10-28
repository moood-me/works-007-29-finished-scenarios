// The dining table, laid with a white cloth that falls nearly to the floor, two chair backs at its far side, a
// little vase of paper jonquils in the middle.
g.fillStyle = '#ece5d6';
g.beginPath();
g.moveTo(-0.85, -0.78);
g.lineTo(0.85, -0.78);
g.lineTo(0.9, -0.12);
g.lineTo(-0.9, -0.12);
g.closePath();
g.fill();
g.fillStyle = 'rgba(160,150,135,0.35)';
for (const x of [-0.6, -0.2, 0.25, 0.62]) g.fillRect(x, -0.74, 0.02, 0.6);
g.fillStyle = '#4a3226';
g.fillRect(-0.82, -0.12, 0.05, 0.14);
g.fillRect(0.77, -0.12, 0.05, 0.14);
// the chair backs, behind the table
for (const x of [-0.45, 0.45]) {
  g.fillStyle = '#4a3226';
  g.fillRect(x - 0.2, -1.12, 0.04, 0.36);
  g.fillRect(x + 0.16, -1.12, 0.04, 0.36);
  g.fillRect(x - 0.2, -1.14, 0.4, 0.06);
  g.fillRect(x - 0.2, -0.98, 0.4, 0.03);
}
// the vase and its jonquils
g.fillStyle = '#7c8fa0';
g.fillRect(-0.04, -0.92, 0.08, 0.14);
for (let i = 0; i < 5; i++) {
  const a = -0.5 + i * 0.25;
  g.strokeStyle = '#6b7b44';
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(0, -0.9);
  g.lineTo(Math.sin(a) * 0.12, -0.9 - Math.cos(a) * 0.16);
  g.stroke();
  g.fillStyle = '#e8c74a';
  g.beginPath();
  g.arc(Math.sin(a) * 0.12, -0.9 - Math.cos(a) * 0.16, 0.022, 0, Math.PI * 2);
  g.fill();
}
