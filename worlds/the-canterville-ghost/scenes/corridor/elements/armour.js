// A suit of plate armour on its stand against the right wall, from before (2.05 m with its plinth): an old knight's
// harness standing empty — the close helmet with its visor down, the breastplate, the pauldrons, the arms hanging, the
// gauntlets resting on the pommel of a long sword set point down between the feet. Its point `helm`.
const STEEL = '#aab2b6';
const DARK = '#717a80';
const LIGHT = '#d4d9dc';
// the plinth
g.fillStyle = '#3a2618';
g.fillRect(-0.36, -0.14, 0.72, 0.14);
g.fillStyle = '#4a3222';
g.fillRect(-0.38, -0.17, 0.76, 0.04);
// the sword: blade between the feet, the cross, the grip, the pommel under the gauntlets
g.fillStyle = '#b8bec2';
g.fillRect(-0.02, -0.92, 0.04, 0.76);
g.fillStyle = DARK;
g.fillRect(-0.16, -0.95, 0.32, 0.035);
g.fillStyle = '#3a2a1e';
g.fillRect(-0.018, -1.12, 0.036, 0.17);
// the legs: sabatons, greaves, knee cops, thigh plates
for (const s of [-1, 1]) {
  g.fillStyle = DARK;
  g.beginPath();
  g.ellipse(s * 0.12, -0.2, 0.09, 0.035, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = STEEL;
  g.fillRect(s * 0.12 - 0.055, -0.62, 0.11, 0.42);
  g.fillStyle = LIGHT;
  g.fillRect(s * 0.12 - 0.015, -0.6, 0.03, 0.38);
  g.fillStyle = DARK;
  g.beginPath();
  g.arc(s * 0.12, -0.66, 0.065, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = STEEL;
  g.fillRect(s * 0.12 - 0.065, -1.02, 0.13, 0.34);
}
// the tassets over the hips, the breastplate, its ridge
g.fillStyle = DARK;
g.fillRect(-0.2, -1.12, 0.4, 0.14);
g.fillStyle = STEEL;
g.beginPath();
g.moveTo(-0.19, -1.12);
g.lineTo(-0.21, -1.5);
g.quadraticCurveTo(0, -1.58, 0.21, -1.5);
g.lineTo(0.19, -1.12);
g.closePath();
g.fill();
g.fillStyle = LIGHT;
g.fillRect(-0.012, -1.54, 0.024, 0.4);
// the pauldrons and the arms down to the gauntlets on the pommel
for (const s of [-1, 1]) {
  g.fillStyle = STEEL;
  g.beginPath();
  g.ellipse(s * 0.22, -1.5, 0.075, 0.055, s * 0.3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = STEEL;
  g.beginPath();
  g.moveTo(s * 0.25, -1.46);
  g.lineTo(s * 0.28, -1.3);
  g.lineTo(s * 0.1, -1.13);
  g.lineTo(s * 0.05, -1.17);
  g.lineTo(s * 0.19, -1.33);
  g.closePath();
  g.fill();
  g.fillStyle = DARK;
  g.beginPath();
  g.arc(s * 0.265, -1.32, 0.03, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(s * 0.05, -1.14, 0.05, 0.035, 0, 0, Math.PI * 2);
  g.fill();
}
// the gorget and the close helmet, its visor down, the eye slit black
g.fillStyle = DARK;
g.fillRect(-0.09, -1.62, 0.18, 0.07);
g.fillStyle = STEEL;
g.beginPath();
g.ellipse(0, -1.76, 0.11, 0.14, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = LIGHT;
g.beginPath();
g.moveTo(-0.1, -1.76);
g.quadraticCurveTo(0, -1.66, 0.1, -1.76);
g.lineTo(0.06, -1.68);
g.quadraticCurveTo(0, -1.63, -0.06, -1.68);
g.closePath();
g.fill();
g.fillStyle = '#141414';
g.fillRect(-0.08, -1.79, 0.16, 0.018);
// a faded crest on the helm
g.fillStyle = '#7a2420';
g.beginPath();
g.ellipse(0, -1.93, 0.035, 0.05, 0, 0, Math.PI * 2);
g.fill();
e.at(0, -1.76, 'helm');
