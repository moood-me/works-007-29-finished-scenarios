// A treadle sewing machine on its table, seen from its back (metres from the table top; the sewer sits behind it, so
// the needle's head is on our right, the hand wheel on our left): black japanned iron with gold scrolls worn thin, the
// bed, the pillar and the arm, the spool on its pin, the presser foot; cloth under the needle.
g.fillStyle = '#d8d2c2';
g.beginPath();
g.moveTo(-0.05, 0);
g.lineTo(0.42, 0);
g.lineTo(0.4, -0.02);
g.lineTo(-0.02, -0.025);
g.closePath();
g.fill();
// the bed
g.fillStyle = '#151416';
g.fillRect(-0.3, -0.045, 0.6, 0.045);
// the pillar on the left, the arm across, the head on the right
g.beginPath();
g.moveTo(-0.26, -0.045);
g.lineTo(-0.27, -0.3);
g.quadraticCurveTo(-0.26, -0.36, -0.18, -0.36);
g.lineTo(0.2, -0.34);
g.lineTo(0.26, -0.34);
g.lineTo(0.27, -0.13);
g.lineTo(0.18, -0.13);
g.lineTo(0.17, -0.27);
g.lineTo(-0.15, -0.28);
g.lineTo(-0.14, -0.045);
g.closePath();
g.fill();
// the hand wheel at the pillar's end
g.fillStyle = '#2a2826';
g.beginPath();
g.ellipse(-0.3, -0.24, 0.025, 0.085, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8a8478';
g.fillRect(-0.32, -0.25, 0.02, 0.02);
// the needle bar and the presser foot
g.fillStyle = '#9a9a96';
g.fillRect(0.205, -0.13, 0.012, 0.09);
g.fillRect(0.235, -0.13, 0.008, 0.11);
g.fillRect(0.19, -0.04, 0.06, 0.008);
// the spool on its pin
g.fillStyle = '#c8a878';
g.fillRect(-0.05, -0.41, 0.06, 0.01);
g.fillRect(-0.05, -0.37, 0.06, 0.01);
g.fillStyle = '#2a2a30';
g.fillRect(-0.045, -0.4, 0.05, 0.03);
g.strokeStyle = 'rgba(230,226,214,0.6)';
g.lineWidth = 0.002;
g.beginPath();
g.moveTo(0, -0.39);
g.lineTo(0.2, -0.33);
g.lineTo(0.22, -0.13);
g.stroke();
// the gold scrolls, worn
g.strokeStyle = 'rgba(200,160,70,0.75)';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.1, -0.31);
g.bezierCurveTo(-0.05, -0.34, 0.0, -0.28, 0.06, -0.31);
g.bezierCurveTo(0.1, -0.33, 0.13, -0.29, 0.15, -0.31);
g.moveTo(-0.24, -0.1);
g.bezierCurveTo(-0.2, -0.14, -0.22, -0.2, -0.18, -0.22);
g.stroke();
g.fillStyle = 'rgba(200,160,70,0.6)';
g.fillRect(-0.28, -0.03, 0.56, 0.006);
e.at(0.22, -0.06, 'needle');
