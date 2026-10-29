// The flat of the ceiling under the ridge (x −0.7…0.7, y −2.1…2.1): whitewashed boards
g.fillStyle = '#ebe5d9';
g.fillRect(-0.7, -2.1, 1.4, 4.2);
g.beginPath();
for (let x = -0.7; x <= 0.7; x += 0.18) { g.moveTo(x, -2.1); g.lineTo(x, 2.1); }
g.strokeStyle = 'rgba(74,63,58,0.2)';
g.lineWidth = 0.008;
g.stroke();
