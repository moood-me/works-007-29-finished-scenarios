// At night: the water glowing round the skiff where it stirs — the phosphorescence of the Gulf weed and the plankton,
// pale green specks (from above, metres) that flicker, seen only as the night comes (its animate).
e.layer('specks', { flicker: 0.5 }, g => {
  for (let i = 0; i < 260; i++) {
    const a = e.rnd() * Math.PI * 2;
    const r = Math.sqrt(e.rnd());
    const x = Math.cos(a) * r * 3.2;
    const y = Math.sin(a) * r * 1.1;
    g.fillStyle = e.rnd() < 0.7 ? 'rgba(170,255,214,0.85)' : 'rgba(220,255,240,0.95)';
    g.beginPath();
    g.arc(x, y, 0.015 + e.rnd() * 0.03, 0, Math.PI * 2);
    g.fill();
  }
});
