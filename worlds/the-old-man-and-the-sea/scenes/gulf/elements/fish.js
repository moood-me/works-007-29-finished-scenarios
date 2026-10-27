// The great fish up alongside on the third morning, by the skiff's near side, lying just under the surface, the head
// toward the skiff's bow — his tail past its stern, his sword out past its bow:
// his back and the top of his tail out of the water, dark purple-blue; his long silver flank under the water with its
// wide lavender stripes, his pectoral fins spread, his sword out ahead — the part under the water seen through it,
// sinking into its blue. He is two feet longer than the skiff. Metres, the water's level at the anchor (y 0), the
// whole of him one layer the animate brings up from the deep (`fish`).
e.layer('fish', { box: [-3.1, -0.95, 2.95, 1.95] }, g => {
  const C = 0.26;
  const X0 = -2.4;
  const X1 = 1.9;
  const p = x => {
    const u = Math.min(1, Math.max(0, (x - X0) / (X1 - X0)));
    return 0.14 + 0.86 * Math.sin(Math.PI * u ** 0.75) ** 0.6 * (1 - 0.45 * u ** 4);
  };
  const body = () => {
    g.beginPath();
    for (let i = 0; i <= 40; i++) {
      const x = X0 + ((X1 - X0) * i) / 40;
      g.lineTo(x, C - 0.44 * p(x));
    }
    g.quadraticCurveTo(X1 + 0.12, C - 0.02, X1, C + 0.1);
    for (let i = 40; i >= 0; i--) {
      const x = X0 + ((X1 - X0) * i) / 40;
      g.lineTo(x, C + 0.44 * p(x));
    }
    g.closePath();
  };
  const tail = () => {
    g.beginPath();
    g.moveTo(X0 + 0.1, C - 0.05);
    g.quadraticCurveTo(-2.75, -0.1, -3.0, -0.6);
    g.quadraticCurveTo(-2.72, -0.1, -2.62, C);
    g.quadraticCurveTo(-2.7, 0.85, -3.0, 1.4);
    g.quadraticCurveTo(-2.7, 0.8, X0 + 0.1, C + 0.08);
    g.closePath();
  };
  const fins = () => {
    // the pectoral spread wide under him, and the folded dorsal a low ridge along the back
    g.beginPath();
    g.moveTo(1.15, C + 0.12);
    g.quadraticCurveTo(0.7, C + 0.5, 0.2, C + 0.95);
    g.quadraticCurveTo(0.75, C + 0.45, 1.3, C + 0.2);
    g.closePath();
    g.moveTo(1.25, C - 0.38);
    g.quadraticCurveTo(0.6, C - 0.6, -0.35, C - 0.47);
    g.lineTo(-0.35, C - 0.42);
    g.lineTo(1.25, C - 0.35);
    g.closePath();
  };
  const all = () => {
    body();
    tail();
    fins();
  };
  // the sword, long and thin, a little up out of the water at its point
  g.fillStyle = '#2f3560';
  g.beginPath();
  g.moveTo(X1, C - 0.06);
  g.lineTo(2.85, C - 0.42);
  g.lineTo(X1, C + 0.04);
  g.closePath();
  g.fill();
  // the flank silver, the belly paler, the back dark
  body();
  const flank = g.createLinearGradient(0, C - 0.44, 0, C + 0.44);
  flank.addColorStop(0, '#2b346a');
  flank.addColorStop(0.22, '#4a4f8a');
  flank.addColorStop(0.4, '#b9bcd8');
  flank.addColorStop(1, '#e8e6f0');
  g.fillStyle = flank;
  g.fill();
  g.save();
  body();
  g.clip();
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
  tail();
  g.fillStyle = '#2b3164';
  g.fill();
  fins();
  g.fillStyle = '#3a3a78';
  g.fill();
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
  all();
  g.clip();
  const veil = g.createLinearGradient(0, 0, 0, 1.4);
  veil.addColorStop(0, 'rgba(38,47,114,0.35)');
  veil.addColorStop(0.18, 'rgba(38,47,114,0.75)');
  veil.addColorStop(0.4, 'rgba(38,47,114,0.96)');
  veil.addColorStop(1, 'rgba(38,47,114,1)');
  g.fillStyle = veil;
  g.fillRect(-3.1, 0, 6.1, 1.5);
  g.restore();
  // the water breaking over his back: a broken line of foam along it
  for (let i = 0; i < 70; i++) {
    const x = -2.2 + e.rnd() * 3.8;
    g.fillStyle = `rgba(236,240,248,${0.25 + 0.4 * e.rnd()})`;
    g.beginPath();
    g.ellipse(x, 0.004, 0.03 + e.rnd() * 0.09, 0.006 + e.rnd() * 0.008, 0, 0, Math.PI * 2);
    g.fill();
  }
});
