// The packing crate Tom sits on, its front (metres from its foot's middle, y up negative): rough pine boards, a
// batten across, stencilled marks long faded, nail heads.
const W = 0.6;
const H = 0.42;
g.fillStyle = '#b39468';
g.fillRect(-W / 2, -H, W, H);
g.fillStyle = 'rgba(80,58,36,0.55)';
for (const y of [-H + 0.14, -H + 0.28]) g.fillRect(-W / 2, y, W, 0.008);
g.fillStyle = '#a2845a';
g.fillRect(-W / 2, -H, 0.05, H);
g.fillRect(W / 2 - 0.05, -H, 0.05, H);
g.fillStyle = 'rgba(70,52,40,0.35)';
g.fillRect(-0.16, -0.27, 0.32, 0.03);
g.fillRect(-0.1, -0.21, 0.2, 0.02);
g.fillStyle = '#3d3530';
for (const [x, y] of [[-0.275, -0.38], [0.275, -0.38], [-0.275, -0.05], [0.275, -0.05]]) g.fillRect(x - 0.006, y - 0.006, 0.012, 0.012);
