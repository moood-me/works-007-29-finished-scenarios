// A whiteboard on a wheeled stand (metres from its foot, 1.92 m tall): the board's aluminium frame, the stand's legs,
// a tray with markers; on it Louise's notes — semagrams copied out and a few lines between them.
g.fillStyle = '#8e9196';
g.fillRect(-0.62, -0.95, 0.04, 0.95);
g.fillRect(0.58, -0.95, 0.04, 0.95);
g.fillRect(-0.7, -0.04, 0.32, 0.04);
g.fillRect(0.38, -0.04, 0.32, 0.04);
g.fillStyle = '#b8bcc0';
g.fillRect(-0.66, -1.92, 1.32, 0.96);
g.fillStyle = '#f4f4f1';
g.fillRect(-0.62, -1.88, 1.24, 0.88);
e.lib.semagram(g, -0.3, -1.5, 0.42, 21, '#2a3a63');
e.lib.semagram(g, 0.25, -1.36, 0.34, 22, '#2a3a63');
g.strokeStyle = '#8b3a36';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.08, -1.48);
g.lineTo(0.06, -1.42);
g.moveTo(0.02, -1.45);
g.lineTo(0.06, -1.42);
g.lineTo(0.03, -1.39);
g.stroke();
g.strokeStyle = '#2a3a63';
for (let i = 0; i < 3; i++) {
  g.beginPath();
  g.moveTo(-0.5, -1.16 + i * 0.05);
  g.lineTo(-0.5 + 0.3 + e.rnd() * 0.5, -1.16 + i * 0.05);
  g.stroke();
}
g.fillStyle = '#9da1a5';
g.fillRect(-0.62, -1.0, 1.24, 0.03);
g.fillStyle = '#2a3a63';
g.fillRect(-0.4, -1.025, 0.12, 0.016);
g.fillStyle = '#8b3a36';
g.fillRect(-0.22, -1.025, 0.12, 0.016);
