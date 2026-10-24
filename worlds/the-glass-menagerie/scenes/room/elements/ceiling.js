// The ceiling, seen from below (the card laid face down, its foot at the back wall, y −3.5 the end nearest the
// viewer): old plaster gone brown with smoke, darker toward the room's open side, a long crack, a water stain from
// the flat above in the corner over the glass, a plaster rose.
const smoke = g.createLinearGradient(0, 0, 0, -3.55);
smoke.addColorStop(0, '#bfae94');
smoke.addColorStop(1, '#7d6c5a');
g.fillStyle = smoke;
g.fillRect(-3.0, -3.55, 6.0, 3.6);
g.fillStyle = 'rgba(120,96,70,0.25)';
g.beginPath();
g.ellipse(-2.3, -2.4, 0.5, 0.35, 0.3, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(110,92,74,0.5)';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-2.6, -3.4);
g.lineTo(-1.9, -3.0);
g.lineTo(-1.5, -3.1);
g.lineTo(-0.6, -2.4);
g.lineTo(0.3, -2.3);
g.lineTo(1.1, -1.5);
g.stroke();
g.fillStyle = '#e2d6c2';
g.beginPath();
g.arc(0, -1.7, 0.22, 0, Math.PI * 2);
g.fill();
g.strokeStyle = 'rgba(150,130,110,0.5)';
g.beginPath();
g.arc(0, -1.7, 0.15, 0, Math.PI * 2);
g.stroke();
// the cornice along the back wall
g.fillStyle = '#c9b89e';
g.fillRect(-3.0, -0.12, 6.0, 0.14);
