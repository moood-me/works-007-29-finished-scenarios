// The lawn between Josie's house (behind the viewer) and the fence, from above (metres, its middle 4.5 m ahead; y
// toward the viewer — the fence along its far edge, y −2.5): short green grass, mown in strips running out to the
// fence, a few worn patches, a bare trodden patch before the gate.
g.fillStyle = '#7a8550';
g.fillRect(-30, -2.5, 60, 5);
for (let x = -30; x < 30; x += 1.2) {
  g.fillStyle = Math.round(x / 1.2) % 2 ? 'rgba(146,152,94,0.55)' : 'rgba(104,116,70,0.5)';
  g.fillRect(x, -2.5, 1.2, 5);
}
for (let i = 0; i < 400; i++) {
  g.fillStyle = ['rgba(92,104,60,0.5)', 'rgba(160,156,100,0.5)', 'rgba(124,132,78,0.5)'][i % 3];
  g.beginPath();
  g.ellipse(-30 + e.rnd() * 60, -2.5 + e.rnd() * 5, 0.1 + e.rnd() * 0.5, 0.04 + e.rnd() * 0.15, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
// worn before the gate, where Rick stands and the path begins
g.fillStyle = 'rgba(120,124,76,0.55)';
g.beginPath();
g.ellipse(1.0, -1.7, 1.3, 0.7, 0, 0, Math.PI * 2);
g.fill();
