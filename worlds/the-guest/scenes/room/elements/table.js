// The table seen from the front (metres from the floor; 1.15 wide): its top's edge, the apron with the drawer in the
// middle and its little wooden knob, four square legs of white wood gone grey.
g.fillStyle = '#9f8d70';
g.fillRect(-0.585, -0.78, 1.17, 0.04);
g.fillStyle = '#8e7c60';
g.fillRect(-0.55, -0.74, 1.1, 0.12);
// the drawer
g.strokeStyle = '#5f5240';
g.lineWidth = 0.008;
g.strokeRect(-0.22, -0.73, 0.44, 0.1);
g.fillStyle = '#4e4232';
g.beginPath();
g.arc(0, -0.68, 0.015, 0, Math.PI * 2);
g.fill();
// the legs
g.fillStyle = '#8a785c';
for (const x of [-0.55, 0.49]) g.fillRect(x, -0.74, 0.06, 0.74);
g.fillStyle = 'rgba(60,50,38,0.35)';
for (const x of [-0.5, 0.54]) g.fillRect(x, -0.62, 0.01, 0.62);
