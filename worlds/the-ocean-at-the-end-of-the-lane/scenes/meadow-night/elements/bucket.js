// The tin bucket Lettie brought from the farm, set down at the circle's edge (0.3 m high): galvanised, dented, its
// wire handle fallen to one side — and in it a little of the ocean, shining: the water's face a pale sea-green light
// that moves (the shader), its glow the point "bucket#water" the light on their faces comes from; its rim "bucket#rim".
const h = 0.3, rt = 0.15, rb = 0.12;
const tin = g.createLinearGradient(-rt, 0, rt, 0);
tin.addColorStop(0, '#8d9396');
tin.addColorStop(0.35, '#c3c8c9');
tin.addColorStop(0.6, '#a3a9ab');
tin.addColorStop(1, '#7c8285');
g.fillStyle = tin;
g.beginPath();
g.moveTo(-rt, -h);
g.lineTo(rt, -h);
g.lineTo(rb, -0.01);
g.ellipse(0, -0.01, rb, 0.03, 0, 0, Math.PI);
g.closePath();
g.fill();
// its ribs and a dent
g.strokeStyle = 'rgba(90, 96, 99, 0.8)';
g.lineWidth = 0.008;
for (const y of [-0.22, -0.08]) {
  const r = rb + (rt - rb) * (-y / h);
  g.beginPath();
  g.ellipse(0, y, r, 0.03, 0, 0, Math.PI);
  g.stroke();
}
g.fillStyle = 'rgba(110, 116, 118, 0.5)';
g.beginPath();
g.ellipse(0.05, -0.15, 0.035, 0.025, 0.4, 0, Math.PI * 2);
g.fill();
// the rim, and the water inside it
g.fillStyle = '#d3d7d6';
g.beginPath();
g.ellipse(0, -h, rt, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#a8e2d6';
g.beginPath();
g.ellipse(0, -h + 0.004, rt - 0.012, 0.032, 0, 0, Math.PI * 2);
g.fill();
// the wire handle, fallen toward us on the left
g.strokeStyle = '#5d6264';
g.lineWidth = 0.007;
g.beginPath();
g.moveTo(-rt, -h + 0.01);
g.quadraticCurveTo(-0.02, -h + 0.2, rt, -h + 0.01);
g.stroke();
e.light(0, -h - 0.04, 0.3, '#b9f0e6', 1.3, 'water');
e.at(0.11, -h, 'rim');
