// The bed's cover from above (x −0.4…0.4, y −0.95…0.95): patchwork squares
const cols = ['#b07a6a', '#d9cbb0', '#7d8f9c', '#c9a76a', '#9aa28a'];
for (let i = 0; i < 4; i++) for (let j = 0; j < 10; j++) {
  g.fillStyle = cols[(i + j * 2) % 5];
  g.fillRect(-0.4 + i * 0.2, -0.95 + j * 0.19, 0.2, 0.19);
}
g.strokeStyle = 'rgba(74,63,58,0.4)';
g.lineWidth = 0.006;
g.strokeRect(-0.4, -0.95, 0.8, 1.9);
