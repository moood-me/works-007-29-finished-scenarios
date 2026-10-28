// A band of mist lying on the water, drifting: see-through, soft above and below (thicker as the fog comes: its animate).
e.layer('band', { drift: [0.8, 0] }, g => {
  const r = g.createLinearGradient(0, -9, 0, 1);
  r.addColorStop(0, 'rgba(230,228,230,0)');
  r.addColorStop(0.55, 'rgba(230,228,230,0.32)');
  r.addColorStop(1, 'rgba(230,228,230,0.12)');
  g.fillStyle = r;
  g.fillRect(-450, -9, 900, 10);
});
