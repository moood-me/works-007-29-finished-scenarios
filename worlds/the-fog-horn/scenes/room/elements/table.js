// The round table's top from above (1 m across): scrubbed boards, a darker worn rim, the ring a hot kettle left.
g.fillStyle = '#6b5039';
g.beginPath();
g.arc(0, 0, 0.53, 0, Math.PI * 2);
g.fill();
g.save();
g.beginPath();
g.arc(0, 0, 0.5, 0, Math.PI * 2);
g.clip();
const tones = ['#8b6a4b', '#86664a', '#91714f'];
for (let i = 0, x = -0.5; x < 0.5; x += 0.2, i++) {
  g.fillStyle = tones[i % 3];
  g.fillRect(x + 0.006, -0.5, 0.188, 1);
}
g.strokeStyle = 'rgba(96,72,52,0.45)';
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.22, -0.18, 0.08, 0, Math.PI * 2);
g.stroke();
g.restore();
