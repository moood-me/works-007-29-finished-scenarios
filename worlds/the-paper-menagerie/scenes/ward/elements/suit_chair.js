// Jack's suit in its dark bag hanging by the hanger's hook over the back of the chair («Остался», 2.3–2.4): the bag
// down the chair's back almost to the floor, its zip, the shop's tag at the shoulder. Only with `suit_on_chair`.
if (!e.state.suit_on_chair) return;
g.fillStyle = '#9ea4a8';
g.fillRect(-0.005, -0.98, 0.01, 0.08);
g.fillStyle = '#3e4458';
g.beginPath();
g.moveTo(-0.13, -0.9);
g.quadraticCurveTo(0, -0.95, 0.13, -0.9);
g.lineTo(0.17, -0.12);
g.quadraticCurveTo(0, -0.08, -0.17, -0.12);
g.closePath();
g.fill();
g.fillStyle = '#a3a6ad';
g.fillRect(-0.004, -0.9, 0.008, 0.76);
g.fillStyle = '#ede6cc';
g.fillRect(0.06, -0.86, 0.04, 0.06);
e.at(0, -0.6, 'bag');
