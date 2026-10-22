// The roof seen from below (the card laid face down, its foot at the back wall, y −3.8 the end nearest the viewer):
// sheets of corrugated zinc gone grey and rusting along their laps, on round rafters running from the back wall
// forward and two purlins across them.
g.fillStyle = '#8d8c86';
g.fillRect(-3.0, -3.85, 6.0, 3.9);
// the corrugations, running front to back
for (let x = -3.0; x < 3.0; x += 0.076) {
  g.fillStyle = 'rgba(60,58,56,0.28)';
  g.fillRect(x, -3.85, 0.03, 3.9);
  g.fillStyle = 'rgba(200,198,190,0.18)';
  g.fillRect(x + 0.038, -3.85, 0.02, 3.9);
}
// the sheets' laps, and the rust bleeding from them and from the nails
for (const y of [-1.3, -2.6]) {
  const gr = g.createLinearGradient(0, y - 0.25, 0, y + 0.1);
  gr.addColorStop(0, 'rgba(140,78,40,0)');
  gr.addColorStop(0.7, 'rgba(140,78,40,0.55)');
  gr.addColorStop(1, 'rgba(90,50,30,0.7)');
  g.fillStyle = gr;
  g.fillRect(-3.0, y - 0.25, 6.0, 0.35);
}
for (let i = 0; i < 40; i++) {
  g.fillStyle = 'rgba(130,70,36,0.35)';
  g.beginPath();
  g.ellipse(-3 + e.rnd() * 6, -3.8 + e.rnd() * 3.8, 0.05 + e.rnd() * 0.25, 0.1 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
// the purlins across, the rafters along
g.fillStyle = '#4a3a2c';
for (const y of [-1.0, -2.4, -3.6]) g.fillRect(-3.0, y - 0.05, 6.0, 0.1);
for (const x of [-2.4, -1.2, 0, 1.2, 2.4]) {
  g.fillStyle = '#54402f';
  g.fillRect(x - 0.06, -3.85, 0.12, 3.9);
  g.fillStyle = 'rgba(30,22,16,0.4)';
  g.fillRect(x + 0.02, -3.85, 0.04, 3.9);
}
