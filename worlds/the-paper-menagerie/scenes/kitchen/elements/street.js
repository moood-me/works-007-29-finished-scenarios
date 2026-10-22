// Across the street (26 m off): Mark's house — a white clapboard house with a grey roof, a porch, a lit window — its
// neighbours' roofs to either side, a dark tree, and at the kerb the school bus stop's sign on its post.
const house = (x, w, h, wall, roof, lit) => {
  g.fillStyle = wall;
  g.fillRect(x - w / 2, -h, w, h);
  g.fillStyle = 'rgba(0,0,0,0.06)';
  for (let y = -h + 0.25; y < 0; y += 0.25) g.fillRect(x - w / 2, y, w, 0.03);
  g.fillStyle = roof;
  g.beginPath();
  g.moveTo(x - w / 2 - 0.4, -h);
  g.lineTo(x, -h - w * 0.32);
  g.lineTo(x + w / 2 + 0.4, -h);
  g.closePath();
  g.fill();
  for (const [wx, on] of lit) {
    g.fillStyle = '#4e4a54';
    g.fillRect(x + wx - 0.45, -h + 0.7, 0.9, 1.1);
    if (on) {
      g.fillStyle = '#ffd890';
      g.fillRect(x + wx - 0.38, -h + 0.77, 0.76, 0.96);
      e.light(x + wx, -h + 1.25, 0.6, '#ffcf88', 0.6, `window${Math.round(wx * 10)}`);
    } else {
      g.fillStyle = '#7a7f9c';
      g.fillRect(x + wx - 0.38, -h + 0.77, 0.76, 0.96);
    }
  }
};
// the neighbours
house(-7.5, 6, 3.2, '#cdbfae', '#6d5d58', [[-1.4, false], [1.4, false]]);
house(7.6, 6.4, 3.0, '#b9c2bf', '#5e5f6a', [[-1.6, false], [1.6, true]]);
// Mark's: its porch, steps, the lit front window
house(0, 7, 3.3, '#ecebe4', '#62646f', [[-2, true], [2, false]]);
g.fillStyle = '#5a4e48';
g.fillRect(-0.55, -2.2, 1.1, 2.2);
g.fillStyle = '#d9d6cc';
g.fillRect(-1.4, -2.5, 2.8, 0.18);
g.fillRect(-1.3, -2.5, 0.12, 2.5);
g.fillRect(1.18, -2.5, 0.12, 2.5);
// a dark tree between the houses
g.fillStyle = '#4a5644';
g.beginPath();
g.ellipse(-4.3, -3.6, 1.6, 2.2, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3e3430';
g.fillRect(-4.4, -1.6, 0.2, 1.6);
// the bus stop: a post and its yellow sign at the kerb (nearer the street, left)
g.fillStyle = '#5b5a5e';
g.fillRect(3.6, -2.3, 0.07, 2.3);
g.fillStyle = '#e8c23f';
g.fillRect(3.4, -2.55, 0.48, 0.34);
e.at(0, -1.6, 'house');
