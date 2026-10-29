// Outside the middle window: the stone wall of the wing where Mr and Mrs Otis sleep, standing out from the house
// across the window's view (1.1 m of it, 5.5 m away, facing the corridor), moonlit grey ashlar under a parapet — it
// hides their room from the window.
g.fillStyle = '#6e6a66';
g.fillRect(-0.55, -3.9, 1.1, 3.92);
g.strokeStyle = '#5a5652';
g.lineWidth = 0.015;
for (let y = -0.3, i = 0; y > -3.7; y -= 0.3, i++) {
  g.beginPath();
  g.moveTo(-0.55, y);
  g.lineTo(0.55, y);
  g.stroke();
  for (let x = -0.55 + (i % 2 ? 0.25 : 0); x < 0.55; x += 0.5) {
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x, y - 0.3);
    g.stroke();
  }
}
g.fillStyle = '#7c7874';
g.fillRect(-0.55, -3.9, 1.1, 0.14);
