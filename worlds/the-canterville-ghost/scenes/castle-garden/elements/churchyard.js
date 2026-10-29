// The churchyard's ground from above (42.6 m across, from the railing at 6.6 m back to the park wall): unmown grass,
// darker and rougher than the lawn, in tussocks, with moss — duller in autumn (key `autumn`).
const fall = (e.state.autumn ?? 0) > 0.5;
g.fillStyle = fall ? '#5a6440' : '#5f7a44';
g.fillRect(-21.3, -24.7, 42.6, 49.4);
const tones = fall ? ['#525c3a', '#646a42', '#4a5434', '#7a6a3a', '#5e663c'] : ['#56703e', '#688448', '#4e6838', '#70884c', '#5a7440'];
for (let i = 0; i < 2500; i++) {
  g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
  g.beginPath();
  g.ellipse(-21.3 + e.rnd() * 42.6, -24.7 + e.rnd() * 49.4, 0.15 + e.rnd() * 0.35, 0.06 + e.rnd() * 0.14, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
