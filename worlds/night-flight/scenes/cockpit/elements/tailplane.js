// The tailplane seen from above, out either side of the fuselage at the tail: silver fabric, its elevator's hinge
// line, ribs. x across (its chord, leading edge on the left), y toward the viewer (x −0.55…0.55, y −1.7…1.7).
g.fillStyle = '#bdbdb5';
g.beginPath();
g.moveTo(-0.55, -1.2);
g.quadraticCurveTo(-0.5, -1.7, 0.1, -1.7);
g.lineTo(0.55, -1.6);
g.lineTo(0.55, 1.6);
g.lineTo(0.1, 1.7);
g.quadraticCurveTo(-0.5, 1.7, -0.55, 1.2);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(100,100,96,0.7)';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.2, -1.7);
g.lineTo(0.2, 1.7);
g.stroke();
