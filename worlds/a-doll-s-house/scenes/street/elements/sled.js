// The children's sled, side on, its front to the left: a deck of three slats on two struts, the runners curling up in
// front; the rope from its front to Ivar's hand (the layer `rope`, a metre long from the front's ring: its animate
// turns and stretches it to the hand). Metres, the runners on the snow.
g.fillStyle = '#9a6a3e';
g.fillRect(-0.45, -0.3, 0.95, 0.06);
g.fillStyle = '#86592f';
for (const x of [-0.3, 0.05, 0.38]) g.fillRect(x, -0.25, 0.05, 0.19);
g.strokeStyle = '#3a3f46';
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0.52, -0.03);
g.lineTo(-0.42, -0.03);
g.quadraticCurveTo(-0.62, -0.03, -0.6, -0.22);
g.quadraticCurveTo(-0.58, -0.33, -0.48, -0.31);
g.stroke();
g.fillStyle = 'rgba(240,244,248,0.9)';
g.fillRect(-0.45, -0.33, 0.95, 0.03);
e.layer('rope', { pivot: [-0.56, -0.3] }, c => {
  c.strokeStyle = '#b89c6c';
  c.lineWidth = 0.016;
  c.beginPath();
  c.moveTo(-0.56, -0.3);
  c.quadraticCurveTo(-0.06, -0.26, 0.44, -0.3);
  c.stroke();
});
e.at(-0.56, -0.3, 'front');
