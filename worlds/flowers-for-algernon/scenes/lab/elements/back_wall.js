// The laboratory's back wall, from its foot (metres, across from the room's middle): the pale paint with the tall
// window cut through it (x −2.7…−0.9, sill 0.95, head 2.6) in a plain white casing.
g.save();
g.beginPath();
g.rect(-3.0, -3.02, 6.0, 3.04);
g.rect(-2.7, -2.6, 1.8, 1.65);
g.clip('evenodd');
e.lib.wallPaint(g, e, -3.0, 3.0);
g.strokeStyle = '#f1f1ea';
g.lineWidth = 0.12;
g.strokeRect(-2.76, -2.66, 1.92, 1.77);
g.strokeStyle = '#b9bfb4';
g.lineWidth = 0.015;
g.strokeRect(-2.83, -2.73, 2.06, 1.91);
g.restore();
