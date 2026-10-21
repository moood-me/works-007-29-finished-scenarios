// The inside of the stove's mouth, 0.35 m behind it: the sooty vault, two logs burning on a bed of coals, their cracks
// glowing (the layer `coals` trembles: flicker), the fire's light (`fire` — the scene's light `hearth`). It glows: the
// room's light does not darken it. The flames are the particles `fire` and `embers` before it.
const L = e.lib;
const back = g.createLinearGradient(0, -1.2, 0, 0);
back.addColorStop(0, '#1c120c');
back.addColorStop(0.6, '#3a2216');
back.addColorStop(1, '#7a3e1c');
g.fillStyle = back;
g.fillRect(-0.6, -1.2, 1.2, 1.2);
L.dabs(g, 111, -0.6, -1.2, 1.2, 0.8, ['#120b08', '#2a1a12'], 40, 0.06, 0.6, 0.6);
e.layer('coals', { flicker: 0.45 }, (g) => {
  // the bed of coals at the foot of the vault (0.42 m up: y −0.42 is the mouth's sill)
  const bed = g.createRadialGradient(0, -0.42, 0, 0, -0.42, 0.5);
  bed.addColorStop(0, '#ffcf6a');
  bed.addColorStop(0.35, '#f08a2c');
  bed.addColorStop(0.7, '#9a3a16');
  bed.addColorStop(1, 'rgba(90, 30, 12, 0)');
  g.fillStyle = bed;
  g.fillRect(-0.6, -0.8, 1.2, 0.5);
  // two logs crossed, dark, their cracks glowing
  for (const [x0, y0, x1, y1] of [[-0.36, -0.44, 0.3, -0.56], [-0.28, -0.6, 0.38, -0.45]]) {
    g.strokeStyle = '#3a2216';
    g.lineWidth = 0.09;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y1);
    g.stroke();
    g.strokeStyle = '#ff9a3a';
    g.lineWidth = 0.012;
    for (let k = 0; k < 4; k++) {
      const u = 0.15 + 0.2 * k;
      const x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u;
      g.beginPath();
      g.moveTo(x - 0.02, y - 0.03);
      g.lineTo(x + 0.02, y + 0.03);
      g.stroke();
    }
  }
  L.dabs(g, 113, -0.38, -0.5, 0.76, 0.1, ['#ffd27a', '#ff8a2a', '#c24a1a'], 40, 0.018, 0.8, 0.9);
});
e.light(0, -0.55, 0.3, '#ffa040', 1.2, 'fire');
