// The telephone on Rivière's desk: a black candlestick — round foot, upright stem, the mouthpiece on top — its
// earpiece on the hook at the side, the cord off the desk. Its point `phone`.
g.fillStyle = '#151413';
g.beginPath();
g.ellipse(0, -0.02, 0.07, 0.02, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.012, -0.3, 0.024, 0.28);
g.beginPath();
g.ellipse(0.0, -0.32, 0.035, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(0.01, -0.34, 0.03, 0.02);
g.fillRect(0.035, -0.26, 0.05, 0.012);
g.fillRect(0.07, -0.26, 0.022, 0.1);
g.beginPath();
g.ellipse(0.081, -0.15, 0.022, 0.03, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#2a2622';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0.05, -0.02);
g.quadraticCurveTo(0.18, 0.0, 0.25, 0.02);
g.stroke();
e.at(0, -0.3, 'phone');
