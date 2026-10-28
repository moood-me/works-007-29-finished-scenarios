// The old table tomb's end toward us: a chest of stone under a thick lid that overhangs it, a carved panel with an urn
// gone soft with weather, lichen gold on the lid's edge (metres: x across from its middle, y up from the ground).
g.fillStyle = '#a7a090';
g.fillRect(-0.45, -0.6, 0.9, 0.9);
g.fillStyle = '#bcb5a2';
g.fillRect(-0.52, -0.69, 1.04, 0.1);
g.fillStyle = 'rgba(70,66,56,0.35)';
g.fillRect(-0.45, -0.59, 0.9, 0.04);
g.fillStyle = '#b4ad9a';
g.fillRect(-0.5, -0.1, 1.0, 0.1);
g.strokeStyle = 'rgba(80,76,64,0.5)';
g.lineWidth = 0.014;
g.strokeRect(-0.3, -0.48, 0.6, 0.32);
g.fillStyle = 'rgba(80,76,64,0.35)';
g.beginPath();
g.ellipse(0, -0.3, 0.06, 0.08, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.035, -0.42, 0.07, 0.06);
for (let i = 0; i < 18; i++) {
  g.fillStyle = e.rnd() < 0.6 ? 'rgba(196,182,104,0.6)' : 'rgba(112,118,84,0.5)';
  g.beginPath();
  g.ellipse(-0.5 + e.rnd() * 1.0, -0.69 + e.rnd() * 0.68, 0.02 + e.rnd() * 0.05, 0.015 + e.rnd() * 0.03, 0, 0, Math.PI * 2);
  g.fill();
}
