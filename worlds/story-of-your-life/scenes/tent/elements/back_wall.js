// The tent's back wall, from its foot (x −4.2…4.2, its gable to the ridge at 4.4 m): the canvas cut round the looking
// glass — a half circle 3 m high, its middle at x −0.8 —, sewn to the glass's thin grey rim; two sheets of semagrams
// pinned up to the right of it.
const R = 3.0, CX = -0.8;
g.save();
g.beginPath();
g.moveTo(-4.2, 0.02);
g.lineTo(-4.2, -2.3);
g.lineTo(0, -4.42);
g.lineTo(4.2, -2.3);
g.lineTo(4.2, 0.02);
g.closePath();
g.moveTo(CX + R, 0.02);
g.arc(CX, 0.02, R, 0, Math.PI, true);
g.closePath();
g.clip('evenodd');
e.lib.canvas(g, e, -4.2, -4.42, 4.2, 0.02, 1.4);
// the frame's posts at the corners and its rafters up the gable
g.fillStyle = '#9a9890';
g.fillRect(-4.2, -2.3, 0.08, 2.32);
g.fillRect(4.12, -2.3, 0.08, 2.32);
g.save();
g.lineWidth = 0.07;
g.strokeStyle = '#9a9890';
g.beginPath();
g.moveTo(-4.16, -2.3);
g.lineTo(0, -4.38);
g.lineTo(4.16, -2.3);
g.stroke();
g.restore();
e.lib.sheet(g, 2.55, -1.95, 0.42, 0.56, 11, -0.03);
e.lib.sheet(g, 3.15, -1.7, 0.42, 0.56, 12, 0.04);
e.lib.sheet(g, 2.8, -1.05, 0.42, 0.56, 13, 0.02);
g.restore();
// the glass's rim, and the low steel sill it stands on
g.strokeStyle = '#4a4d52';
g.lineWidth = 0.08;
g.beginPath();
g.arc(CX, 0, R + 0.02, Math.PI, 0);
g.stroke();
g.fillStyle = '#44474c';
g.fillRect(CX - R - 0.06, -0.08, 2 * R + 0.12, 0.1);
e.at(CX, -1.6, 'glass');
