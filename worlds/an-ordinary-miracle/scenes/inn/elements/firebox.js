// The inside of the fireplace, 0.35 m behind its mouth: the sooty back, three logs burning on a bed of coals, their
// cracks glowing (the layer `coals` trembles), a black kettle hanging on its hook over the fire, the fire's light
// (`fire` — the scene's light `hearth`). It glows: the hall's light does not darken it. The flames are the particles
// `fire` and `embers` before it.
const L = e.lib;
const back = g.createLinearGradient(0, -1.4, 0, -0.3);
back.addColorStop(0, '#1a110c');
back.addColorStop(0.6, '#3a2216');
back.addColorStop(1, '#8a4a1e');
g.fillStyle = back;
g.fillRect(-0.75, -1.4, 1.5, 1.1);
L.dabs(g, 231, -0.75, -1.4, 1.5, 0.7, ['#120b08', '#2a1a12'], 40, 0.07, 0.6, 0.6);
g.fillStyle = '#2a2420';
g.fillRect(-0.75, -0.3, 1.5, 0.3);
e.layer('coals', { flicker: 0.45 }, (g) => {
  const bed = g.createRadialGradient(0, -0.32, 0, 0, -0.32, 0.6);
  bed.addColorStop(0, '#ffd27a');
  bed.addColorStop(0.35, '#f08a2c');
  bed.addColorStop(0.7, '#9a3a16');
  bed.addColorStop(1, 'rgba(90, 30, 12, 0)');
  g.fillStyle = bed;
  g.fillRect(-0.75, -0.75, 1.5, 0.5);
  for (const [x0, y0, x1, y1] of [[-0.42, -0.34, 0.36, -0.46], [-0.32, -0.5, 0.44, -0.36], [-0.1, -0.33, 0.12, -0.55]]) {
    g.strokeStyle = '#3a2216';
    g.lineWidth = 0.1;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y1);
    g.stroke();
    g.strokeStyle = '#ff9a3a';
    g.lineWidth = 0.014;
    for (let k = 0; k < 4; k++) {
      const u = 0.15 + 0.2 * k, x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u;
      g.beginPath();
      g.moveTo(x - 0.02, y - 0.03);
      g.lineTo(x + 0.02, y + 0.03);
      g.stroke();
    }
  }
  L.dabs(g, 233, -0.45, -0.4, 0.9, 0.1, ['#ffd27a', '#ff8a2a', '#c24a1a'], 46, 0.02, 0.8, 0.9);
});
// the kettle on its hook
g.strokeStyle = '#1e1a18';
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.05, -1.4);
g.lineTo(0.05, -0.98);
g.stroke();
g.fillStyle = '#26221f';
g.beginPath();
g.ellipse(0.05, -0.86, 0.17, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.12, -0.99, 0.34, 0.04);
g.beginPath();
g.moveTo(0.2, -0.88);
g.lineTo(0.33, -0.98);
g.lineTo(0.31, -0.94);
g.lineTo(0.2, -0.84);
g.fill();
g.fillStyle = 'rgba(255, 150, 70, 0.5)';
g.beginPath();
g.ellipse(0.05, -0.76, 0.14, 0.04, 0, 0, Math.PI * 2);
g.fill();
e.light(0, -0.6, 0.35, '#ffa040', 1.3, 'fire');
