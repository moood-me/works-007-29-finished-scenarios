// The south door, open: the nave beyond lit by its candles for the service — a warm gloom, a pillar's edge, the
// door's oak leaf swung back into the dark (metres: x across the doorway's middle, y up from the sill).
const arch = () => {
  g.beginPath();
  g.moveTo(-0.55, 0.02);
  g.lineTo(-0.55, -1.7);
  g.quadraticCurveTo(-0.55, -2.4, 0, -2.58);
  g.quadraticCurveTo(0.55, -2.4, 0.55, -1.7);
  g.lineTo(0.55, 0.02);
  g.closePath();
};
const inside = g.createLinearGradient(0, -2.6, 0, 0);
inside.addColorStop(0, '#5a4430');
inside.addColorStop(0.5, '#a07a4c');
inside.addColorStop(1, '#6e5438');
g.fillStyle = inside;
arch();
g.fill();
g.save();
arch();
g.clip();
// a pillar of the arcade, its far side in the candles' light
g.fillStyle = '#7a6a54';
g.fillRect(0.18, -2.6, 0.2, 2.62);
g.fillStyle = '#b89464';
g.fillRect(0.18, -2.6, 0.05, 2.62);
// the candles far in, a warm haze about them
const glow = g.createRadialGradient(-0.1, -1.25, 0, -0.1, -1.25, 0.6);
glow.addColorStop(0, 'rgba(255,214,150,0.85)');
glow.addColorStop(1, 'rgba(255,214,150,0)');
g.fillStyle = glow;
g.fillRect(-0.7, -2.0, 1.2, 1.5);
// the oak door swung back, its edge toward us
g.fillStyle = '#3c2c20';
g.fillRect(-0.55, -2.25, 0.2, 2.27);
g.fillStyle = '#5a4430';
g.fillRect(-0.36, -2.15, 0.04, 2.17);
g.restore();
e.light(-0.1, -1.3, 0.6, '#ffc880', 0.7, 'candles');
e.at(0, -1.2, 'door');
