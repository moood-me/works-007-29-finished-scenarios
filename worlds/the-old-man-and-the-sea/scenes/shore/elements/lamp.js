// The oil lamp hanging in the boy's open door, from a nail in its lintel: its tin cap and foot, and its glass — a layer lit with the dusk
// (its glow and its light by `dusk`, in the animate). Metres, the glass's middle at the anchor.
g.fillStyle = '#3d342c';
g.fillRect(-0.004, -0.38, 0.008, 0.2);
g.fillRect(-0.05, -0.19, 0.1, 0.03);
g.fillRect(-0.06, 0.07, 0.12, 0.04);
e.layer('glass', {}, g => {
  g.fillStyle = '#ffd59a';
  g.beginPath();
  g.ellipse(0, -0.04, 0.045, 0.11, 0, 0, Math.PI * 2);
  g.fill();
  e.light(0, -0.04, 0.6, '#ffc27a', 1.8, 'flame');
});
