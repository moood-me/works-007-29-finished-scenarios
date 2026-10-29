// The little gable window (its face the opening x −0.3…0.3, from 1.5 m up 0.5 m): a grey weathered frame, four small
// panes filmy with dust, a cobweb across one corner, dead flies on the sill.
g.fillStyle = '#8a7a68';
g.fillRect(-0.33, -0.53, 0.66, 0.05);
g.fillRect(-0.33, -0.03, 0.66, 0.06);
g.fillRect(-0.33, -0.53, 0.05, 0.53);
g.fillRect(0.28, -0.53, 0.05, 0.53);
g.fillRect(-0.015, -0.5, 0.03, 0.5);
g.fillRect(-0.3, -0.27, 0.6, 0.025);
g.fillStyle = 'rgba(220,210,190,0.22)';
g.fillRect(-0.28, -0.48, 0.56, 0.45);
g.strokeStyle = 'rgba(240,238,230,0.5)';
g.lineWidth = 0.002;
g.beginPath();
for (let k = 1; k < 5; k++) {
  g.moveTo(0.28 - k * 0.025, -0.48);
  g.quadraticCurveTo(0.28 - k * 0.012, -0.48 + k * 0.012, 0.28, -0.48 + k * 0.025);
}
for (let a = 0; a < 5; a++) {
  g.moveTo(0.28, -0.48);
  g.lineTo(0.28 - 0.12 * Math.cos(a * 0.35), -0.48 + 0.12 * Math.sin(a * 0.35));
}
g.stroke();
g.fillStyle = '#2e2622';
for (const x of [-0.2, -0.12, 0.15]) g.fillRect(x, -0.035, 0.008, 0.005);
e.at(0, -0.25, 'pane');
