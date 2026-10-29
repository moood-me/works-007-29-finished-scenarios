// What is on the window sill (its anchor the sill at the middle, 0.88 m up): `scraps` — the torn pieces of Laohu, red
// with gold stars, laid out where Jack left them; `zoo` — the buffalo standing in a flower pot, looking out (the
// whole house awake).
const st = e.state;
if (st.scraps) {
  const pieces = [[-0.32, -0.012, 0.2], [-0.22, -0.01, -0.3], [-0.12, -0.014, 0.5], [-0.04, -0.01, -0.1], [0.04, -0.012, 0.9]];
  for (const [x, y, a] of pieces) {
    g.save();
    g.translate(x, y);
    g.rotate(a * 0.2);
    e.lib.poly(g, [[-0.04, 0], [0.035, -0.006], [0.03, 0.006], [-0.03, 0.008]], '#e8503f');
    e.lib.poly(g, [[-0.04, 0], [0.0, -0.004], [-0.01, 0.006]], '#b02a20');
    g.fillStyle = '#ecc65a';
    g.fillRect(0.005, -0.004, 0.006, 0.006);
    g.restore();
  }
  e.at(-0.14, -0.02, 'scraps');
}
if (st.zoo) {
  e.lib.pot(g, 0.38);
  e.layer('buffalo', { pivot: [0.38, -0.13] }, l => {
    l.save();
    l.translate(0, -0.13);
    e.lib.buffalo(l, 0.38, -1);
    l.restore();
  });
  e.at(0.38, -0.2, 'buffalo');
}
