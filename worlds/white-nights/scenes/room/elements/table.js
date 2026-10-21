// The writing table against the back wall, its front: a plain deal table under old dark varnish, its top's edge, a
// drawer with a wooden knob, square legs (the back two a little darker, inset)
const INK = e.lib.INK, wood = '#86674a';
g.fillStyle = '#6a5038';
for (const x of [-0.5, 0.46]) g.fillRect(x, -0.7, 0.04, 0.7);
for (const x of [-0.6, 0.55]) e.lib.box(g, x, -0.72, 0.05, 0.72, wood, 0.008);
e.lib.box(g, -0.6, -0.74, 1.2, 0.14, wood, 0.01);
e.lib.box(g, -0.25, -0.715, 0.5, 0.09, '#7c5f44', 0.007);
g.fillStyle = '#5a4432';
g.beginPath();
g.arc(0, -0.67, 0.018, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.005;
g.stroke();
e.lib.box(g, -0.61, -0.765, 1.22, 0.03, '#94744f', 0.01);
