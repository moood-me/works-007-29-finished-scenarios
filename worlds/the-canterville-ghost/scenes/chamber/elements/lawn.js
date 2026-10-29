// The garden under the window, from above (30 m by 30 m, 2.2 m below the chamber's floor): grass grey-green in the
// moonlight, darker under the old trees.
g.fillStyle = '#3d4a3a';
g.fillRect(-15, -15, 30, 30);
for (let i = 0; i < 500; i++) {
  g.fillStyle = ['#46543f', '#36422f', '#4e5a44', '#2e382a'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.ellipse(-15 + e.rnd() * 30, -15 + e.rnd() * 30, 0.3 + e.rnd() * 0.8, 0.15 + e.rnd() * 0.4, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
