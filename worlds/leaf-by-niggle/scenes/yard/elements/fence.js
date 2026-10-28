// The fence between Niggle's yard and Parish's (x across from its middle, 1.15 high): grey palings on two rails, a
// gate where the path meets it (x −3.1…−2.1), its latch.
g.fillStyle = '#7a705f';
g.fillRect(-7, -0.95, 14, 0.07);
g.fillRect(-7, -0.35, 14, 0.07);
for (let x = -7; x < 7; x += 0.16) {
  const gate = x > -3.1 && x < -2.1;
  const h = 1.05 + (e.rnd() - 0.5) * 0.08 + (gate ? 0.05 : 0);
  g.fillStyle = gate ? '#a49784' : ['#8e8574', '#968c7a', '#867c6b'][Math.floor(e.rnd() * 3)];
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, -h);
  g.lineTo(x + 0.05, -h - 0.05);
  g.lineTo(x + 0.1, -h);
  g.lineTo(x + 0.1, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = '#5b5246';
g.fillRect(-3.15, -1.15, 0.07, 1.15);
g.fillRect(-2.12, -1.15, 0.07, 1.15);
g.fillStyle = '#2f2a26';
g.fillRect(-2.22, -0.7, 0.1, 0.03);
