// A small table under the map, against the wall: dark wood on four square legs, a drawer in its front (`drawer` 0 shut,
// 1 pulled open — its inside dark, the drawn flags' pins to go in it). Point `drawer` — the drawer's mouth.
g.fillStyle = '#3d2b1f';
g.fillRect(-0.4, -0.75, 0.8, 0.06);
g.fillRect(-0.37, -0.69, 0.06, 0.69);
g.fillRect(0.31, -0.69, 0.06, 0.69);
g.fillStyle = '#4e3828';
g.fillRect(-0.31, -0.69, 0.62, 0.16);
const open = e.state.drawer;
if (open) {
  // pulled out: its front lower and nearer, the dark inside showing above it
  g.fillStyle = '#1c140e';
  g.fillRect(-0.27, -0.66, 0.54, 0.08);
  g.fillStyle = '#5a412f';
  g.fillRect(-0.29, -0.58, 0.58, 0.13);
} else {
  g.fillStyle = '#5a412f';
  g.fillRect(-0.27, -0.66, 0.54, 0.1);
}
g.fillStyle = '#b89a5a';
g.beginPath();
g.arc(0, open ? -0.515 : -0.61, 0.02, 0, Math.PI * 2);
g.fill();
e.at(0, -0.64, 'drawer');
