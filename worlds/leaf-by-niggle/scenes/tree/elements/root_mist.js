// The mist at the Tree's roots, like unprimed canvas (about its foot: from 5.5 m left of it to 4.2 right, 1.4 high):
// a low pale band lying on the grass round the roots, thickest at the ground, fading upward and toward its ends, a
// few soft swells on it. It sways a little along (its animate); `mist` fades it.
e.layer('mist', {}, l => {
  const band = l.createLinearGradient(0, -1.2, 0, 0.05);
  band.addColorStop(0, 'rgba(214,218,212,0)');
  band.addColorStop(0.6, 'rgba(214,218,212,0.22)');
  band.addColorStop(1, 'rgba(214,218,212,0.36)');
  l.fillStyle = band;
  l.fillRect(-5.2, -1.2, 9.1, 1.25);
  for (let i = 0; i < 9; i++) {
    const x = -4 + e.rnd() * 6.4;
    const r = 0.4 + e.rnd() * 0.35;
    const grad = l.createRadialGradient(x, -0.45, 0, x, -0.45, r);
    grad.addColorStop(0, 'rgba(214,218,212,0.16)');
    grad.addColorStop(1, 'rgba(214,218,212,0)');
    l.fillStyle = grad;
    l.beginPath();
    l.arc(x, -0.45, r, 0, Math.PI * 2);
    l.fill();
  }
  // its ends fade into the air
  l.globalCompositeOperation = 'destination-out';
  const ends = l.createLinearGradient(-5.2, 0, 3.9, 0);
  ends.addColorStop(0, 'rgba(0,0,0,1)');
  ends.addColorStop(0.3, 'rgba(0,0,0,0)');
  ends.addColorStop(0.75, 'rgba(0,0,0,0)');
  ends.addColorStop(1, 'rgba(0,0,0,1)');
  l.fillStyle = ends;
  l.fillRect(-5.2, -1.2, 9.1, 1.25);
});
