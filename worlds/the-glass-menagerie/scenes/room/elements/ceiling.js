// The ceiling, seen from below (the card laid face down, its foot at the back wall, y −4.5 the end nearest the
// viewer): old plaster gone yellow, a long crack, a brown water stain from the flat above, a plaster rose.
g.fillStyle = '#d6c7b0';
g.fillRect(-3.2, -4.55, 6.4, 4.6);
g.fillStyle = 'rgba(160,128,92,0.22)';
g.beginPath();
g.ellipse(-1.2, -1.2, 0.7, 0.45, 0.3, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(150,120,90,0.4)';
g.lineWidth = 0.02;
g.beginPath();
g.ellipse(-1.2, -1.2, 0.72, 0.47, 0.3, 0, Math.PI * 2);
g.stroke();
g.strokeStyle = 'rgba(110,92,74,0.5)';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-2.6, -3.8);
g.lineTo(-1.9, -3.2);
g.lineTo(-1.5, -3.3);
g.lineTo(-0.6, -2.4);
g.lineTo(0.3, -2.3);
g.lineTo(1.1, -1.5);
g.stroke();
g.fillStyle = '#e2d6c2';
g.beginPath();
g.arc(0, -2.2, 0.22, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(150,130,110,0.5)';
g.beginPath();
g.arc(0, -2.2, 0.15, 0, Math.PI * 2);
g.stroke();
// the cornice along the back wall
g.fillStyle = '#c9b89e';
g.fillRect(-3.2, -0.12, 6.4, 0.14);
