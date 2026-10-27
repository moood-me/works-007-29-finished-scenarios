// A band of mist lying on the water near the rock, drifting: see-through, soft above and below, with soft lumps in it
// so its drift is seen (each drawn again one width over, so the layer's two ends meet); thicker as the fog comes (its
// animate).
e.layer('band', { drift: [1.2, 0] }, g => {
  const r = g.createLinearGradient(0, -9, 0, 1);
  r.addColorStop(0, 'rgba(230,228,230,0)');
  r.addColorStop(0.55, 'rgba(230,228,230,0.3)');
  r.addColorStop(1, 'rgba(230,228,230,0.12)');
  g.fillStyle = r;
  g.fillRect(-450, -9, 900, 10);
  for (let i = 0; i < 16; i++) {
    const x = -450 + e.rnd() * 900;
    const w = 20 + e.rnd() * 40;
    const h = 2 + e.rnd() * 3;
    for (const k of [-900, 0, 900]) {
      g.save();
      g.translate(x + k, -3.5);
      g.scale(w, h);
      const b = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      b.addColorStop(0, 'rgba(234,234,238,0.28)');
      b.addColorStop(1, 'rgba(234,234,238,0)');
      g.fillStyle = b;
      g.beginPath();
      g.arc(0, 0, 1, 0, Math.PI * 2);
      g.fill();
      g.restore();
    }
  }
});
