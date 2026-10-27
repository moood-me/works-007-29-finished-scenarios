// The mist at the Tree's roots, like unprimed canvas (about its foot: from 5.5 m left of it to 4.2 right, 1.4 high):
// a low pale band lying on the grass round the roots, thickest at the ground, fading upward and toward its ends.
// It sways a little along (its animate); `mist` fades it.
e.layer('mist', {}, l => {
  const band = l.createLinearGradient(0, -1.2, 0, 0.05);
  band.addColorStop(0, 'rgba(172,182,186,0)');
  band.addColorStop(0.6, 'rgba(172,182,186,0.22)');
  band.addColorStop(1, 'rgba(172,182,186,0.36)');
  l.fillStyle = band;
  l.fillRect(-5.2, -1.2, 9.1, 1.25);
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
