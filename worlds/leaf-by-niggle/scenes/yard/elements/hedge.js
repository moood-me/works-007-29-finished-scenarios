// A hedge tree at the field's edge (6 m high): a dark rounded crown going brown, a short trunk; copies stand along the
// field, smaller and greyer far off.
g.fillStyle = '#4e4436';
g.fillRect(-0.15, -1.6, 0.3, 1.62);
const tones = ['#6c6f4a', '#7c7448', '#5f6646', '#857a4c'];
for (let i = 0; i < 26; i++) {
  const a = e.rnd() * Math.PI * 2;
  const r = Math.sqrt(e.rnd()) * 2.1;
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.beginPath();
  g.ellipse(Math.cos(a) * r, -3.6 + Math.sin(a) * r * 0.9, 0.9 + e.rnd() * 0.5, 0.8 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
