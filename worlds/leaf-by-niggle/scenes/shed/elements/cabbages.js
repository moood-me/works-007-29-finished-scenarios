// Parish's kitchen garden behind the fence: rows of blue-green cabbages, a few leeks (x across, 0.4 high).
for (let r = 0; r < 3; r++) {
  for (let x = -5 + r * 0.25; x < 5; x += 0.55) {
    const s = 0.16 + e.rnd() * 0.06;
    g.fillStyle = ['#7f9a8a', '#6f8c7c', '#8aa596'][Math.floor(e.rnd() * 3)];
    g.beginPath();
    g.ellipse(x, -s * 0.8 - r * 0.02, s * 1.3, s * 0.85, 0, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(210,225,210,0.35)';
    g.beginPath();
    g.ellipse(x, -s * 1.1 - r * 0.02, s * 0.6, s * 0.4, 0, 0, Math.PI * 2);
    g.fill();
  }
}
