// Two beer tins on a table (copies): plain tins, their bands faded red, one tipped over empty. Metres, standing on the
// table top at the anchor (point `can`).
const tin = (x, band) => {
  g.fillStyle = '#bdb6a6';
  g.fillRect(x - 0.033, -0.12, 0.066, 0.12);
  g.fillStyle = band;
  g.fillRect(x - 0.033, -0.09, 0.066, 0.045);
  g.fillStyle = '#e2ddd0';
  g.fillRect(x - 0.033, -0.12, 0.066, 0.01);
};
tin(-0.06, '#a24a3a');
tin(0.06, '#a8503e');
e.at(0, -0.06, 'can');
