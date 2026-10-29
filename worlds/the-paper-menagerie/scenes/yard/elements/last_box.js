// The last of the moving boxes on the porch by the door, taped shut (a year on: there while `sold`, till Dad carries
// it away: `last_box` false).
if (!e.state.sold || e.state.last_box === false) return;
g.fillStyle = '#b8905f';
g.fillRect(-0.3, -0.42, 0.6, 0.42);
g.fillStyle = '#9c7748';
g.fillRect(-0.3, -0.45, 0.6, 0.04);
g.fillStyle = 'rgba(232,220,180,0.75)';
g.fillRect(-0.03, -0.45, 0.06, 0.45);
g.strokeStyle = 'rgba(40,40,60,0.6)';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.22, -0.25);
g.lineTo(-0.1, -0.27);
g.lineTo(-0.16, -0.2);
g.stroke();
