// At night: the water glowing where it stirs along the skiff's hull and round its stern — the phosphorescence of the
// plankton and the Gulf weed, fine pale green specks (from above, metres; the skiff's waterline runs along y 0.8 here)
// that flicker, seen only as the night comes (its animate).
e.layer('specks', { flicker: 0.5 }, g => {
  for (let i = 0; i < 180; i++) {
    const x = -3.2 + Math.pow(e.rnd(), 0.7) * 6;
    const y = 0.82 + Math.pow(e.rnd(), 2) * 0.9 * (x < -1.6 ? 1.6 : 1) - (x < -2.3 ? e.rnd() * 0.9 : 0);
    g.fillStyle = e.rnd() < 0.7 ? 'rgba(160,250,210,0.6)' : 'rgba(220,255,240,0.8)';
    g.beginPath();
    g.arc(x, y, 0.008 + e.rnd() * 0.014, 0, Math.PI * 2);
    g.fill();
  }
});
