// The crate's right side (metres from its foot's middle): the same rough boards, a batten, shadowed a little more.
const W = 0.4;
const H = 0.42;
g.fillStyle = '#a3865e';
g.fillRect(-W / 2, -H, W, H);
g.fillStyle = 'rgba(80,58,36,0.55)';
for (const y of [-H + 0.14, -H + 0.28]) g.fillRect(-W / 2, y, W, 0.008);
g.fillStyle = '#937752';
g.fillRect(-W / 2, -H, 0.05, H);
g.fillRect(W / 2 - 0.05, -H, 0.05, H);
