// The piece of wall at the back with the window's opening cut through it (1 m wide, from 0.8 m to 2.2 m): the deep
// embrasure (reveal, sill, soffit) goes back from here to the window itself.
e.lib.wall(g, e, -0.83, 0.83);
// a worn rim round the opening
g.strokeStyle = 'rgba(190,180,164,0.6)';
g.lineWidth = 0.06;
g.strokeRect(-0.53, -2.23, 1.06, 1.46);
g.globalCompositeOperation = 'destination-out';
g.fillRect(-0.5, -2.2, 1, 1.4);
g.globalCompositeOperation = 'source-over';
