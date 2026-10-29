// The low ceiling seen from below, laid face down from the far wall (y 0) toward the viewer (y −4.75): great slabs of
// stone laid across on two old oak beams, black with age.
g.save();
g.beginPath();
g.rect(-3.0, -4.75, 6.0, 4.8);
g.clip();
g.fillStyle = '#383532';
g.fillRect(-3.0, -4.75, 6.0, 4.8);
const tones = ['#4c4843', '#46423e', '#514c46'];
for (let y = 0; y > -4.75; ) {
  const h = 0.55 + e.rnd() * 0.2;
  g.fillStyle = tones[Math.floor(e.rnd() * 3)];
  g.fillRect(-3.0, y - h + 0.025, 6.0, h - 0.05);
  y -= h;
}
g.fillStyle = '#2a1e16';
for (const y of [-1.5, -3.6]) g.fillRect(-3.0, y - 0.22, 6.0, 0.22);
g.restore();
