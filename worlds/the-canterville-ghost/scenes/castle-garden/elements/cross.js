// An old stone cross on a stepped base (1.3 m), grey, mossed at its foot.
g.fillStyle = '#8e8a80';
g.fillRect(-0.3, -0.18, 0.6, 0.2);
g.fillRect(-0.22, -0.3, 0.44, 0.13);
g.fillStyle = '#a29e94';
g.fillRect(-0.07, -1.3, 0.14, 1.0);
g.fillRect(-0.3, -1.05, 0.6, 0.13);
g.fillStyle = '#7a766c';
g.fillRect(0.03, -1.3, 0.04, 1.0);
g.fillStyle = '#5a7040';
for (let i = 0; i < 10; i++) {
  g.beginPath();
  g.arc((e.rnd() - 0.5) * 0.6, -0.05 - e.rnd() * 0.2, 0.03 + e.rnd() * 0.04, 0, Math.PI * 2);
  g.fill();
}
