// The lucky boat, bigger and freshly painted — white over a red strake —, drawn up with its oars aboard; its crew's
// catch is already sold. Metres, the keel's middle at the anchor, the bow toward the water.
const { sheer } = e.lib.skiff(g, 6, '#e6e1d2', '#a64a3b', '#3b6466');
g.strokeStyle = '#8f7556';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-3.4, -1.1);
g.lineTo(1.9, sheer(1.9) - 0.08);
g.stroke();
// the stump of its mast, unstepped and laid along the thwarts
g.lineWidth = 0.09;
g.strokeStyle = '#9b8058';
g.beginPath();
g.moveTo(-2.2, -1.02);
g.lineTo(2.6, sheer(2.6) - 0.12);
g.stroke();
