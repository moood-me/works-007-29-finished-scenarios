// The concrete apron before the hangar, seen from above (metres; origin its middle; y toward the viewer): pale
// slabs with dark joints, oil stains where engines have stood, a faint line of wheel tracks from the field.
g.fillStyle = '#aaa79d';
g.fillRect(-15, -8, 30, 16);
for (let i = 0; i < 70; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,147,138,0.45)' : 'rgba(190,187,178,0.35)';
  g.fillRect(-15 + 5 * Math.floor(e.rnd() * 6), -8 + 4 * Math.floor(e.rnd() * 4), 5, 4);
}
g.strokeStyle = '#7e7a72';
g.lineWidth = 0.05;
for (let x = -15; x <= 15; x += 5) {
  g.beginPath();
  g.moveTo(x, -8);
  g.lineTo(x, 8);
  g.stroke();
}
for (let y = -8; y <= 8; y += 4) {
  g.beginPath();
  g.moveTo(-15, y);
  g.lineTo(15, y);
  g.stroke();
}
// oil stains
for (const [x, y, r] of [[-4.8, -1.4, 1.1], [-3.6, -0.9, 0.6], [3, -5, 1.4], [8, -3.5, 0.8], [-1, 3, 0.5]]) {
  const s = g.createRadialGradient(x, y, 0, x, y, r);
  s.addColorStop(0, 'rgba(60,58,56,0.55)');
  s.addColorStop(1, 'rgba(60,58,56,0)');
  g.fillStyle = s;
  g.beginPath();
  g.ellipse(x, y, r * 1.3, r, 0.4, 0, Math.PI * 2);
  g.fill();
}
// wheel tracks from the field to the gate
g.strokeStyle = 'rgba(96,92,84,0.35)';
g.lineWidth = 0.18;
for (const k of [-1.6, 1.6]) {
  g.beginPath();
  g.moveTo(-15, 2 + k * 0.4);
  g.bezierCurveTo(-6, 1 + k, 0, -3 + k * 0.6, 4 + k, -8);
  g.stroke();
}
// the edge where the concrete meets the grass: a darker rim
g.strokeStyle = 'rgba(90,96,80,0.6)';
g.lineWidth = 0.3;
g.strokeRect(-15, -8, 30, 16);
