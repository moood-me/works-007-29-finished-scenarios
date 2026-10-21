// The ceiling seen from below (4.5 m up): dark planks between heavy beams running toward the back.
g.fillStyle = '#5a3e28';
g.fillRect(-5, -1.7, 10, 3.4);
for (let x = -5, i = 0; x < 5; x += 0.3, i++) {
  g.fillStyle = ['#64462c', '#563a24', '#6a4a30'][i % 3];
  g.fillRect(x, -1.7, 0.3, 3.4);
}
for (const x of [-3, -0.6, 1.8, 4.2]) {
  g.fillStyle = '#3a2618';
  g.fillRect(x - 0.12, -1.7, 0.24, 3.4);
}
