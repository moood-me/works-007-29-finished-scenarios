// Virginia's folding camp stool (0.45 m), there while `easel` is: crossed wooden legs, a seat of striped canvas.
if (!e.state.easel) return;
g.lineCap = 'round';
g.strokeStyle = '#8a6a46';
g.lineWidth = 0.03;
for (const [a, b] of [[-0.18, 0.18], [0.18, -0.18]]) {
  g.beginPath();
  g.moveTo(a, 0.02);
  g.lineTo(b, -0.43);
  g.stroke();
}
g.fillStyle = '#c8b48a';
g.fillRect(-0.21, -0.47, 0.42, 0.06);
g.fillStyle = '#9a3a32';
for (let x = -0.18; x < 0.2; x += 0.09) g.fillRect(x, -0.47, 0.035, 0.06);
e.at(0, -0.45, 'seat');
