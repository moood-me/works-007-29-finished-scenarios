// The low ceiling seen from below, laid face down from the back wall (y 0) toward the viewer (y −4.8): boards gone
// dark with the smoke of years, on three rough beams across the room
g.fillStyle = '#4a3c30';
g.fillRect(-3.05, -4.8, 6.1, 4.85);
const tones = ['#5a4a3c', '#544538', '#614f40'];
for (let x = -3.05; x < 3.05; x += 0.22) {
  g.fillStyle = tones[Math.floor(e.rnd() * 3)];
  g.fillRect(x + 0.01, -4.8, 0.2, 4.85);
}
g.fillStyle = '#2e241c';
for (const y of [-0.9, -2.5, -4.1]) g.fillRect(-3.05, y - 0.2, 6.1, 0.2);
