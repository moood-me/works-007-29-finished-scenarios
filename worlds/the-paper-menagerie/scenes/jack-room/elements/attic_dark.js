// What is seen of the attic up through the open hatch, laid face down: the underside of the roof, rafters and the
// boards between them in a dusty brown dusk, a thread of daylight from somewhere (only while the hatch is open).
if (e.state.hatch > 0.5) {
  g.fillStyle = '#4e3f34';
  g.fillRect(-0.33, -0.76, 0.66, 0.78);
  g.fillStyle = '#6a5442';
  for (const x of [-0.22, 0.12]) g.fillRect(x, -0.76, 0.07, 0.78);
  g.fillStyle = 'rgba(240,210,160,0.25)';
  g.fillRect(-0.33, -0.4, 0.66, 0.03);
}
