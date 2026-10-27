// The great fish up alongside on the third morning, by the skiff's near side, lying just under the surface, the head
// toward the skiff's bow — his tail past its stern, his sword out past its bow:
// his back and the top of his tail out of the water, dark purple-blue; his long silver flank under the water with its
// wide lavender stripes, his pectoral fins spread, his sword out ahead — the part under the water seen through it,
// sinking into its blue. He is two feet longer than the skiff. Metres, the water's level at the anchor (y 0), the
// whole of him one layer the animate brings up from the deep (`fish`).
e.layer('fish', { box: [-3.1, -0.95, 2.95, 1.95] }, g => {
  // (deeper than a few hands the water hides him: nothing of him is painted there)
  g.beginPath();
  g.rect(-3.1, -0.95, 6.05, 1.17);
  g.clip();
  const C = 0.2;
  const X0 = -2.4;
  const X1 = 1.9;
  const p = x => {
    const u = Math.min(1, Math.max(0, (x - X0) / (X1 - X0)));
    return 0.14 + 0.86 * Math.sin(Math.PI * u ** 0.75) ** 0.6 * (1 - 0.45 * u ** 4);
  };
  const body = () => {
    const path = new Path2D();
    for (let i = 0; i <= 40; i++) {
      const x = X0 + ((X1 - X0) * i) / 40;
      path.lineTo(x, C - 0.44 * p(x));
    }
    path.quadraticCurveTo(X1 + 0.12, C - 0.02, X1, C + 0.1);
    for (let i = 40; i >= 0; i--) {
      const x = X0 + ((X1 - X0) * i) / 40;
      path.lineTo(x, C + 0.44 * p(x));
    }
    path.closePath();
    return path;
  };
  const tail = () => {
    const path = new Path2D();
    path.moveTo(X0 + 0.1, C - 0.05);
    path.quadraticCurveTo(-2.75, -0.1, -3.0, -0.6);
    path.quadraticCurveTo(-2.72, -0.1, -2.62, C);
    path.quadraticCurveTo(-2.7, 0.85, -3.0, 1.4);
    path.quadraticCurveTo(-2.7, 0.8, X0 + 0.1, C + 0.08);
    path.closePath();
    return path;
  };
  const fins = () => {
    // the pectoral spread wide under him, and the folded dorsal a low ridge along the back
    const path = new Path2D();
    path.moveTo(1.15, C + 0.12);
    path.quadraticCurveTo(0.7, C + 0.5, 0.2, C + 0.95);
    path.quadraticCurveTo(0.75, C + 0.45, 1.3, C + 0.2);
    path.closePath();
    path.moveTo(1.25, C - 0.38);
    path.quadraticCurveTo(0.6, C - 0.6, -0.35, C - 0.47);
    path.lineTo(-0.35, C - 0.42);
    path.lineTo(1.25, C - 0.35);
    path.closePath();
    return path;
  };
  const all = new Path2D();
  for (const part of [body(), tail(), fins()]) all.addPath(part);
  // the sword, long and thin, a little up out of the water at its point
  g.fillStyle = '#2f3560';
  g.beginPath();
  g.moveTo(X1, C - 0.06);
  g.lineTo(2.85, C - 0.42);
  g.lineTo(X1, C + 0.04);
  g.closePath();
  g.fill();
  // the flank silver, the belly paler, the back dark
  const flank = g.createLinearGradient(0, C - 0.44, 0, C + 0.44);
  flank.addColorStop(0, '#1f2552');
  flank.addColorStop(0.25, '#3c4282');
  flank.addColorStop(0.4, '#b9bcd8');
  flank.addColorStop(1, '#e8e6f0');
  g.fillStyle = flank;
  g.fill(body());
  g.save();
  g.clip(body());
  // the wide stripes, pale lavender, down the flank
  g.fillStyle = 'rgba(136,124,196,0.5)';
  for (let x = -1.9; x < 1.25; x += 0.3 + e.rnd() * 0.12) {
    const w = 0.05 + e.rnd() * 0.05;
    g.beginPath();
    g.moveTo(x, C - 0.32);
    g.quadraticCurveTo(x + w + 0.03, C, x + 0.01, C + 0.34);
    g.lineTo(x - w, C + 0.3);
    g.quadraticCurveTo(x - 0.02, C, x - w * 0.5, C - 0.32);
    g.closePath();
    g.fill();
  }
  g.restore();
  g.fillStyle = '#2b3164';
  g.fill(tail());
  g.fillStyle = '#25295a';
  g.fill(fins());
  // the eye, big and dark
  g.fillStyle = '#121528';
  g.beginPath();
  g.arc(1.6, C + 0.05, 0.055, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = 'rgba(200,204,226,0.8)';
  g.lineWidth = 0.012;
  g.stroke();
  e.at(1.4, C - 0.2);
  e.at(1.98, C + 0.02, 'mouth');
  // what is under the water seen through it: sinking into its blue the deeper it lies
  g.save();
  g.clip(all);
  const veil = g.createLinearGradient(0, 0, 0, 1.4);
  veil.addColorStop(0, 'rgba(30,38,92,0.45)');
  veil.addColorStop(0.08, 'rgba(30,38,92,0.7)');
  veil.addColorStop(0.2, 'rgba(30,38,92,0.8)');
  g.fillStyle = veil;
  g.fillRect(-3.1, 0, 6.1, 1.5);
  // and he goes out of sight into it, the sea's own paint showing where he is too deep to be seen
  const out = g.createLinearGradient(0, 0.06, 0, 0.3);
  out.addColorStop(0, 'rgba(0,0,0,0)');
  out.addColorStop(1, 'rgba(0,0,0,1)');
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = out;
  g.fillRect(-3.1, 0.06, 6.1, 1.5);
  g.globalCompositeOperation = 'source-over';
  g.restore();
  // the water breaking over his back: a broken line of foam along it
  for (let i = 0; i < 70; i++) {
    const x = -2.2 + e.rnd() * 3.8;
    g.fillStyle = `rgba(236,240,248,${0.15 + 0.3 * e.rnd()})`;
    g.beginPath();
    g.ellipse(x, 0.004, 0.03 + e.rnd() * 0.09, 0.006 + e.rnd() * 0.008, 0, 0, Math.PI * 2);
    g.fill();
  }
});
