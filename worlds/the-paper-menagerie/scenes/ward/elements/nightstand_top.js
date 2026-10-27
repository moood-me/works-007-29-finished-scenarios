// The bedside table's top from above (metres, its middle at across −0.62, distance 4.08; y toward the viewer): cream
// laminate with a steel edge, a paper napkin, the ring a glass has left.
g.fillStyle = '#e6e3d6';
g.fillRect(-0.25, -0.21, 0.5, 0.42);
g.strokeStyle = '#b4b4ac';
g.lineWidth = 0.012;
g.strokeRect(-0.244, -0.204, 0.488, 0.408);
g.fillStyle = '#f7f5ee';
g.save();
g.translate(0.08, 0.06);
g.rotate(0.3);
g.fillRect(-0.06, -0.06, 0.12, 0.12);
g.restore();
g.strokeStyle = 'rgba(150,140,120,0.35)';
g.lineWidth = 0.004;
g.beginPath();
g.arc(-0.14, 0.12, 0.035, 0, Math.PI * 2);
g.stroke();
