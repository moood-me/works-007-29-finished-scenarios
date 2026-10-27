// The old mirror's glass (0.8 m by 1.22 m), seen flat: silvering gone grey and spotted at its edges — it shows the room
// dimly, and nothing of him.
g.fillStyle = '#4a4c46';
g.fillRect(-0.4, -0.61, 0.8, 1.22);
const fox = g.createRadialGradient(0, 0, 0.25, 0, 0, 0.75);
fox.addColorStop(0, 'rgba(60,56,48,0)');
fox.addColorStop(1, 'rgba(60,56,48,0.8)');
g.fillStyle = fox;
g.fillRect(-0.4, -0.61, 0.8, 1.22);
for (let i = 0; i < 40; i++) {
  g.fillStyle = 'rgba(90,84,70,0.5)';
  const a = e.rnd() * Math.PI * 2;
  const d = 0.3 + e.rnd() * 0.3;
  g.beginPath();
  g.arc(Math.cos(a) * d * 0.6, Math.sin(a) * d, 0.006 + e.rnd() * 0.012, 0, Math.PI * 2);
  g.fill();
}
