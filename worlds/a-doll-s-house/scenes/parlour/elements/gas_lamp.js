// The gas lamp in the street under the window (its head is what the window shows): an iron post, a four-sided
// lantern with snow on its cap, its glass lit as the day goes (the layer `lit` and the glow `flame` — the scene's light
// "street" — by its animate). Metres, the foot at the street.
g.fillStyle = '#26272b';
g.fillRect(-0.05, -3.9, 0.1, 3.9);
g.fillRect(-0.12, -0.4, 0.24, 0.4);
g.fillRect(-0.3, -3.92, 0.6, 0.04);
g.beginPath();
g.moveTo(-0.16, -3.95);
g.lineTo(0.16, -3.95);
g.lineTo(0.2, -4.4);
g.lineTo(-0.2, -4.4);
g.closePath();
g.fill();
g.fillStyle = '#dcd8cc';
g.fillRect(-0.15, -4.35, 0.3, 0.36);
e.layer('lit', {}, c => {
  c.fillStyle = '#ffd47e';
  c.fillRect(-0.15, -4.35, 0.3, 0.36);
});
g.fillStyle = '#26272b';
g.fillRect(-0.012, -4.35, 0.024, 0.36);
g.beginPath();
g.moveTo(-0.26, -4.4);
g.lineTo(0.26, -4.4);
g.lineTo(0, -4.62);
g.closePath();
g.fill();
g.fillStyle = '#f2f4f6';
g.beginPath();
g.moveTo(-0.24, -4.43);
g.lineTo(0.24, -4.43);
g.lineTo(0, -4.6);
g.closePath();
g.fill();
e.light(0, -4.17, 0.25, '#ffd9a0', 1, 'flame');
