// The mist at the Tree's roots, like unprimed canvas (about its foot: from 5.5 m left of it to 4.2 right, 1.4 high):
// a low pale band, thick round the roots, fading upward and to its ends. It sways (its animate); `mist` (its animate) fades it.
e.layer('mist', {}, l => {
  for (let i = 0; i < 22; i++) {
    const x = -3.6 + e.rnd() * 5.6;
    const y = -0.15 - e.rnd() * 0.5;
    const r = 0.6 + e.rnd() * 0.7;
    const grad = l.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(236,232,218,0.42)');
    grad.addColorStop(1, 'rgba(236,232,218,0)');
    l.fillStyle = grad;
    l.beginPath();
    l.ellipse(x, y, r * 1.3, r, 0, 0, Math.PI * 2);
    l.fill();
  }
});
