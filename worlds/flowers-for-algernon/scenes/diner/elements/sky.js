// An April night over the town, seen only through the window over the houses: deep blue going warmer and lighter to
// the roofs, where the town's lights are in the air; a few faint stars high up. Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#10162a');
sky.addColorStop(0.55, '#232a45');
sky.addColorStop(0.85, '#3b3a52');
sky.addColorStop(1, '#55475a');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
g.fillStyle = 'rgba(230,232,255,0.55)';
for (let i = 0; i < 40; i++) {
  g.beginPath();
  g.arc(-0.3 + e.rnd() * (A + 0.6), -0.35 + e.rnd() * 0.5, 0.0015 + e.rnd() * 0.0015, 0, Math.PI * 2);
  g.fill();
}
