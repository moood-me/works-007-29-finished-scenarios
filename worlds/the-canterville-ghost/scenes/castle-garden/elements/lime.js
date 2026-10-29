// A lime of the avenue (about 10 m): a dark trunk, boughs up into a wide crown — full summer green, or yellow going
// thin in autumn (key `autumn`) — gaps of sky through it; the crown a layer of its own, stirring in the wind.
const fall = (e.state.autumn ?? 0) > 0.5;
g.fillStyle = '#3e3228';
g.beginPath();
g.moveTo(-0.3, 0);
g.lineTo(-0.17, -3.8);
g.lineTo(0.17, -3.8);
g.lineTo(0.32, 0);
g.closePath();
g.fill();
g.strokeStyle = '#3e3228';
g.lineWidth = 0.13;
for (const [x, y] of [[-2.4, -6.8], [2.2, -7.2], [-0.5, -8.8], [0.9, -5.6]]) {
  g.beginPath();
  g.moveTo(0, -3.6);
  g.quadraticCurveTo(x * 0.3, -4.8, x, y);
  g.stroke();
}
e.layer('crown', { pivot: [0, -3.6], wind: 0.12 }, c => {
  const tones = fall ? ['#c8962c', '#d9a838', '#b07a24', '#e2bc52', '#9a7a2c'] : ['#4e7a3a', '#5e8a42', '#3e6a32', '#6e9a4c', '#46723a'];
  const n = fall ? 70 : 110;
  for (let i = 0; i < n; i++) {
    const a = e.rnd() * Math.PI * 2;
    const d = Math.sqrt(e.rnd());
    c.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    c.beginPath();
    c.arc(Math.cos(a) * d * 3.0, -6.2 + Math.sin(a) * d * 3.0, 0.45 + e.rnd() * 0.6, 0, Math.PI * 2);
    c.fill();
  }
});
