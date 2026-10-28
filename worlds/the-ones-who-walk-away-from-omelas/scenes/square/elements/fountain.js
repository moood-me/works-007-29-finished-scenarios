// The fountain's basin: a low round wall of pale stone, 1.65 m across from its centre, its rim a broad flat coping
// where people sit; inside, the water's surface (the water plane lies just over it). A form turned on a lathe — the
// painting is the way round (u) by the profile from the middle of the water out over the rim and down (v).
const prof = [[0, 0.44], [1.45, 0.44], [1.47, 0.52], [1.68, 0.52], [1.7, 0.46], [1.64, 0.1], [1.74, 0]];
let len = 0;
const at = [0];
for (let i = 1; i < prof.length; i++) {
  len += Math.hypot(prof[i][0] - prof[i - 1][0], prof[i][1] - prof[i - 1][1]);
  at.push(len);
}
const round = 2 * Math.PI * 1.7;
g.fillStyle = '#6f9aa3';
g.fillRect(-round / 2, 0, round, at[1]);
g.fillStyle = '#e4dccb';
g.fillRect(-round / 2, at[1], round, at[4] - at[1]);
g.fillStyle = '#d6cdb9';
g.fillRect(-round / 2, at[4], round, at[6] - at[4]);
// the joints of the coping and of the wall's stones
g.fillStyle = '#c9bea8';
for (let k = 0; k < 24; k++) {
  const x = -round / 2 + (k / 24) * round;
  g.fillRect(x, at[1], 0.03, at[4] - at[1]);
  g.fillRect(x + round / 48, at[4], 0.03, at[6] - at[4]);
}
e.form(e.kit.revolve(prof), { closed: 'u', ground: '#d6cdb9' });
