// The chair's seat from above: worn boards, a little paler where he sits
g.fillStyle = '#82644c';
g.fillRect(-0.21, -0.2, 0.42, 0.4);
g.fillStyle = 'rgba(176,150,120,0.35)';
g.beginPath();
g.ellipse(0, 0.02, 0.13, 0.11, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.006;
g.strokeRect(-0.21, -0.2, 0.42, 0.4);
