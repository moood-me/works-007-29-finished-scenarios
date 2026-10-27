// The table's top seen from above (x −0.65…0.65, y toward the viewer ±0.4): a pale oilcloth checked in faded blue, a
// plate with the crusts of her toast, the folded newspaper, a few crumbs.
g.fillStyle = '#f0ead9';
g.fillRect(-0.67, -0.42, 1.34, 0.84);
g.fillStyle = 'rgba(74,108,150,0.18)';
for (let x = -0.67; x < 0.67; x += 0.1) g.fillRect(x, -0.42, 0.05, 0.84);
for (let y = -0.42; y < 0.42; y += 0.1) g.fillRect(-0.67, y, 1.34, 0.05);
// the plate and the crusts
g.fillStyle = '#f8f6f0';
g.beginPath();
g.arc(-0.38, 0.12, 0.11, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(74,108,150,0.6)';
g.lineWidth = 0.006;
g.beginPath();
g.arc(-0.38, 0.12, 0.095, 0, Math.PI * 2);
g.stroke();
g.fillStyle = '#c08a52';
g.fillRect(-0.42, 0.08, 0.08, 0.015);
g.fillRect(-0.4, 0.13, 0.07, 0.015);
// the newspaper, folded
g.save();
g.translate(0.05, -0.22);
g.rotate(0.12);
g.fillStyle = '#e4e0d4';
g.fillRect(-0.16, -0.1, 0.32, 0.2);
g.fillStyle = 'rgba(60,60,60,0.35)';
for (let y = -0.07; y < 0.09; y += 0.025) g.fillRect(-0.14, y, 0.28, 0.008);
g.restore();
g.fillStyle = 'rgba(176,130,80,0.6)';
for (let i = 0; i < 12; i++) g.fillRect(-0.5 + e.rnd() * 0.3, 0.0 + e.rnd() * 0.3, 0.008, 0.008);
