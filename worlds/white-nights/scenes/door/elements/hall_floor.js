// The hall's floor (x −1.58…1.58, y −0.98…0.98): waxed boards, warm brown
g.fillStyle = '#a77b52';
g.fillRect(-1.58, -0.98, 3.16, 1.96);
g.beginPath();
for (let x = -1.58; x <= 1.58; x += 0.16) { g.moveTo(x, -0.98); g.lineTo(x, 0.98); }
g.strokeStyle = 'rgba(74,63,58,0.35)';
g.lineWidth = 0.008;
g.stroke();
