// The neighbours' house across the yard (metres from its foot): a limewashed adobe wall gone grey in the rain, a
// rusted zinc roof's edge dripping over it, a shut door painted ochre and a small shuttered window.
g.fillStyle = '#cfcbbf';
g.fillRect(-5.0, -3.4, 10.0, 3.42);
for (let i = 0; i < 30; i++) {
  g.fillStyle = 'rgba(140,132,116,0.25)';
  g.fillRect(-5 + e.rnd() * 10, -3.4, 0.1 + e.rnd() * 0.3, 0.6 + e.rnd() * 1.6);
}
g.fillStyle = 'rgba(96,84,70,0.4)';
g.fillRect(-5.0, -0.6, 10.0, 0.62);
// the roof's edge
g.fillStyle = '#6f5a4a';
g.beginPath();
g.moveTo(-5.0, -3.35);
g.lineTo(5.0, -3.35);
g.lineTo(5.0, -4.2);
g.lineTo(-5.0, -3.8);
g.closePath();
g.fill();
g.fillStyle = 'rgba(150,80,44,0.5)';
for (let x = -5.0; x < 5.0; x += 0.12) g.fillRect(x, -3.75 - (x + 5) * 0.04, 0.05, 0.4);
// the door and the window
g.fillStyle = '#b08a3e';
g.fillRect(-1.6, -2.1, 0.95, 2.1);
g.fillStyle = 'rgba(80,60,30,0.4)';
for (let x = -1.55; x < -0.7; x += 0.16) g.fillRect(x, -2.08, 0.015, 2.06);
g.fillStyle = '#5f8d86';
g.fillRect(1.2, -2.1, 0.9, 0.9);
g.fillStyle = '#4c766f';
g.fillRect(1.63, -2.1, 0.04, 0.9);
