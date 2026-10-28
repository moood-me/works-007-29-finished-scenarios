// A café curtain over the window's lower half: a brass rod, cream cotton with a thin red check, gathered into soft
// folds (paler and darker strips down it). Thin: the street's light comes through. Metres from its foot.
g.fillStyle = '#efe4cc';
g.fillRect(-0.88, -0.66, 1.76, 0.66);
g.fillStyle = 'rgba(176,64,60,0.22)';
for (let x = -0.88; x < 0.88; x += 0.09) g.fillRect(x, -0.66, 0.018, 0.66);
for (let y = -0.62; y < 0; y += 0.09) g.fillRect(-0.88, y, 1.76, 0.018);
for (let i = 0; i < 22; i++) {
  const x = -0.88 + i * 0.08;
  g.fillStyle = i % 2 ? 'rgba(255,255,250,0.22)' : 'rgba(120,96,70,0.14)';
  g.fillRect(x, -0.66, 0.04, 0.66);
}
g.fillStyle = '#b08d4a';
g.fillRect(-0.9, -0.69, 1.8, 0.025);
