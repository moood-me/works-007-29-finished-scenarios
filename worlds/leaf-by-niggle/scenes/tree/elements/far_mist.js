// The far edge of the country beyond the forest, still in mist (44 m wide, 14 high, about its foot): the pale warm
// grey of unprimed canvas, thickest at the left where nothing is yet, thinning toward the forest. It sways a little (its animate);
// `mist` (its animate) fades it.
e.layer('mist', {}, l => {
  for (let i = 0; i < 26; i++) {
    const x = -15 + e.rnd() * 30;
    const y = -2 - e.rnd() * 7;
    const left = 1 - (x + 22) / 44;
    const r = 3 + e.rnd() * 3;
    const grad = l.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(232,228,214,${0.08 + left * 0.22})`);
    grad.addColorStop(1, 'rgba(232,228,214,0)');
    l.fillStyle = grad;
    l.beginPath();
    l.arc(x, y, r, 0, Math.PI * 2);
    l.fill();
  }
});
