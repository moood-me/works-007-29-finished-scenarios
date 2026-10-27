// A pupils' desk seen side-on (metres from the floor; facing the blackboard on the right): a sloping lid of dark
// varnished wood worn pale at its front edge, the box under it, the bench before it on the left joined to it by the
// two runners on the floor, an inkwell let into the top.
const W = '#5e4330';
const L = '#7a5a40';
// the runners
g.fillStyle = '#3c2c20';
g.fillRect(-0.62, -0.06, 1.24, 0.06);
// the bench: its seat and its legs
g.fillStyle = W;
g.fillRect(-0.62, -0.44, 0.42, 0.05);
g.fillRect(-0.58, -0.4, 0.05, 0.36);
g.fillRect(-0.29, -0.4, 0.05, 0.36);
g.fillStyle = L;
g.fillRect(-0.62, -0.45, 0.42, 0.015);
// the desk: legs, the box, the sloping lid
g.fillStyle = W;
g.fillRect(-0.06, -0.62, 0.05, 0.58);
g.fillRect(0.52, -0.72, 0.05, 0.68);
g.fillRect(-0.08, -0.66, 0.66, 0.16);
g.beginPath();
g.moveTo(-0.12, -0.66);
g.lineTo(0.62, -0.76);
g.lineTo(0.62, -0.72);
g.lineTo(-0.12, -0.62);
g.closePath();
g.fillStyle = L;
g.fill();
g.fillStyle = 'rgba(210,180,140,0.5)';
g.fillRect(-0.12, -0.66, 0.05, 0.04);
// the inkwell
g.fillStyle = '#d8d4c8';
g.fillRect(0.5, -0.8, 0.04, 0.05);
