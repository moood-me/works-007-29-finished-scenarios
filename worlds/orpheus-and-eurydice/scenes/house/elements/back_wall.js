// The hall's back wall, 10.6 m ahead, seen square (x across −4.8 … 4.8, y up negative, the floor at 0): the masonry and
// the rock over it (lib.wall), and in it, a little left of the middle, a tall round-headed doorway open onto the meadow
// — cut out of the painting, so what stands beyond it is seen through: the pale light of the meadow, the shades come to
// listen. A worn threshold stone at its foot.
e.lib.wall(g, -4.8, 4.8, -8, 300);
const X = -0.6, W = 0.78, H = 2.75;
// the doorway's jambs and arch: dressed stones round it, a little paler
g.fillStyle = '#958a7e';
g.beginPath();
g.moveTo(X - W - 0.22, 0.05);
g.lineTo(X - W - 0.22, -H + W);
g.arc(X, -H + W, W + 0.22, Math.PI, 0);
g.lineTo(X + W + 0.22, 0.05);
g.closePath();
g.fill();
g.globalCompositeOperation = 'destination-out';
g.beginPath();
g.moveTo(X - W, 0.05);
g.lineTo(X - W, -H + W);
g.arc(X, -H + W, W, Math.PI, 0);
g.lineTo(X + W, 0.05);
g.closePath();
g.fill();
g.globalCompositeOperation = 'source-over';
e.at(X, -1.6, 'door');
