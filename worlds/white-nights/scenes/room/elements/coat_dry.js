// His frock coat hung up on a nail on the stove's face to dry — «второй день не сохнет» (the «Окно» finale, after he
// stood in the rain): faded bottle green gone dark with wet, the shoulders slumped from the nail, the empty sleeves,
// the skirt to below the knee with darker patches where the water still is. Drawn while `coat_drying`
if (!e.state.coat_drying) return;
const INK = e.lib.INK, coat = '#566552', wet = 'rgba(40,52,40,0.35)';
g.fillStyle = coat;
g.beginPath();
g.moveTo(0, -1.84);
g.lineTo(-0.21, -1.74);
g.lineTo(-0.24, -1.2);
g.lineTo(-0.27, -0.84);
g.lineTo(0.27, -0.84);
g.lineTo(0.24, -1.2);
g.lineTo(0.21, -1.74);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.stroke();
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * 0.2, -1.74);
  g.quadraticCurveTo(s * 0.26, -1.4, s * 0.23, -1.08);
  g.lineTo(s * 0.17, -1.08);
  g.quadraticCurveTo(s * 0.19, -1.4, s * 0.15, -1.7);
  g.closePath();
  g.fill();
  g.stroke();
}
// (the lapels, the buttons, the folds)
g.beginPath();
g.moveTo(-0.05, -1.8);
g.lineTo(-0.02, -1.42);
g.moveTo(0.05, -1.8);
g.lineTo(0.02, -1.42);
g.moveTo(-0.1, -1.3);
g.quadraticCurveTo(-0.12, -1.05, -0.14, -0.85);
g.moveTo(0.09, -1.3);
g.quadraticCurveTo(0.11, -1.05, 0.12, -0.85);
g.strokeStyle = 'rgba(46,40,36,0.55)';
g.lineWidth = 0.006;
g.stroke();
g.fillStyle = '#2e2a26';
for (const y of [-1.38, -1.26, -1.14]) {
  g.beginPath();
  g.arc(0.03, y, 0.01, 0, Math.PI * 2);
  g.fill();
}
// (the wet: darker where the water still is, lowest on the skirt)
const low = g.createLinearGradient(0, -1.3, 0, -0.84);
low.addColorStop(0, 'rgba(40,52,40,0)');
low.addColorStop(1, wet);
g.fillStyle = low;
g.fillRect(-0.27, -1.3, 0.54, 0.46);
g.fillStyle = wet;
g.beginPath();
g.ellipse(-0.12, -1.55, 0.06, 0.1, 0.2, 0, Math.PI * 2);
g.ellipse(0.13, -1.0, 0.07, 0.09, 0, 0, Math.PI * 2);
g.fill();
