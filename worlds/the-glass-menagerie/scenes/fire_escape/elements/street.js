// The street past the building's corner, 9 m down (from above): dark wet cobbles, paler where the moon catches them,
// the kerbs' lines.
g.fillStyle = '#1b1a24';
g.fillRect(-20, -23, 40, 46);
for (let i = 0; i < 160; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(70,72,100,0.35)' : 'rgba(20,18,26,0.4)';
  g.fillRect(-20 + e.rnd() * 40, -23 + e.rnd() * 46, 0.6 + e.rnd() * 2, 0.3 + e.rnd() * 0.8);
}
g.fillStyle = '#34323f';
g.fillRect(-20, -6, 40, 0.25);
g.fillRect(-20, 6, 40, 0.25);
