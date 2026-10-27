// The bulbs under the counter's lamps, seen a little from below inside their shades (glows): one painting, three
// places. Metres from its foot.
g.fillStyle = '#fff3d6';
g.beginPath();
g.ellipse(0, -0.02, 0.17, 0.025, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#ffffff';
g.beginPath();
g.ellipse(0, -0.025, 0.06, 0.02, 0, 0, Math.PI * 2);
g.fill();
e.light(0, -0.02, 0.18, '#ffd79a', 0.6, 'bulb');
