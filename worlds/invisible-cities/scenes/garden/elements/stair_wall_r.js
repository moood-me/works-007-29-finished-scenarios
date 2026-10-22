// A side wall of the steps going down to the water: its coping follows the steps from the terrace (y −3.4) to the
// water (y 0 is 0.2 m under it), twelve steps of 0.22 m over 4.1 m. Painted from its anchor at the terrace's edge
// (x 0) away from the viewer (it faces across).
g.fillStyle = '#8f8676';
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, -3.45);
g.lineTo(0.25, -3.45);
g.lineTo(4.2, -0.75);
g.lineTo(4.5, -0.75);
g.lineTo(4.5, 0);
g.closePath();
g.fill();
g.strokeStyle = '#b3a995';
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(0, -3.4);
g.lineTo(0.25, -3.4);
g.lineTo(4.2, -0.7);
g.lineTo(4.5, -0.7);
g.stroke();
g.strokeStyle = 'rgba(60, 70, 80, 0.35)';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0, -0.45);
g.lineTo(4.5, -0.45);
g.stroke();
