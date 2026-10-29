// A side of the narrow way behind the wall (3 m long, 2.9 m high): rough courses of dark stone, damp.
g.fillStyle = '#1a1612';
g.fillRect(-1.55, -2.95, 3.1, 2.97);
for (let y = -2.9; y < 0; y += 0.3) {
  for (let x = -1.55 + e.rnd() * 0.3; x < 1.55; x += 0.35 + e.rnd() * 0.25) {
    g.fillStyle = e.rnd() < 0.5 ? '#221d17' : '#1c1814';
    g.fillRect(x + 0.02, y + 0.02, 0.3, 0.26);
  }
}
