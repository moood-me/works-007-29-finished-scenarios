// The avenue's gravel drive from above (3.6 m wide, 64 m back, from the house behind the viewer to the gates): pale
// raked gravel, the wheel ruts a little darker, grass creeping at its edges; in autumn yellow lime leaves along them.
const fall = (e.state.autumn ?? 0) > 0.5;
g.fillStyle = '#cbb98f';
g.fillRect(-1.8, -32, 3.6, 64);
for (let i = 0; i < 1500; i++) {
  g.fillStyle = ['#bfac82', '#d6c69e', '#b8a47a', '#ddd0aa'][Math.floor(e.rnd() * 4)];
  g.fillRect(-1.8 + e.rnd() * 3.6, -32 + e.rnd() * 64, 0.04 + e.rnd() * 0.06, 0.04 + e.rnd() * 0.06);
}
g.fillStyle = 'rgba(150,130,96,0.35)';
for (const x of [-0.75, 0.75]) g.fillRect(x - 0.12, -32, 0.24, 64);
g.fillStyle = '#7a9a4e';
for (let i = 0; i < 500; i++) {
  const s = e.rnd() < 0.5 ? -1 : 1;
  g.beginPath();
  g.ellipse(s * (1.8 - e.rnd() * 0.15), -32 + e.rnd() * 64, 0.06, 0.12, 0, 0, Math.PI * 2);
  g.fill();
}
if (fall) {
  for (let i = 0; i < 500; i++) {
    const s = e.rnd() < 0.5 ? -1 : 1;
    g.fillStyle = ['#c89a36', '#d8aa44', '#a87428'][Math.floor(e.rnd() * 3)];
    g.beginPath();
    g.ellipse(s * (1.8 - e.rnd() * e.rnd() * 1.4), -32 + e.rnd() * 64, 0.07, 0.045, e.rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
