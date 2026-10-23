// An old apple tree in Niggle's yard, seen from the side window (x across from its foot, 5 m high): a crooked trunk,
// a round crown going yellow; its crown sways in the wind.
g.fillStyle = '#5a4a3a';
g.beginPath();
g.moveTo(-0.18, 0);
g.quadraticCurveTo(-0.3, -1.2, -0.05, -2.4);
g.lineTo(0.15, -2.4);
g.quadraticCurveTo(0.05, -1.2, 0.2, 0);
g.closePath();
g.fill();
e.layer('crown', { pivot: [0, -2.2], wind: { strength: 0.15, gust: 0.4 } }, l => {
  const tones = ['#a8a24e', '#c2a64c', '#8f9a4a', '#b98e48', '#9aa458'];
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * Math.PI * 2;
    const r = Math.sqrt(e.rnd()) * 1.9;
    l.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    l.beginPath();
    l.ellipse(Math.cos(a) * r, -3.3 + Math.sin(a) * r * 0.75, 0.35 + e.rnd() * 0.3, 0.28 + e.rnd() * 0.2, 0, 0, Math.PI * 2);
    l.fill();
  }
});
