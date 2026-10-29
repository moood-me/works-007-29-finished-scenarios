// The gable end at the far end (facing us, metres from its foot at the middle): rough boards up to the roof's two
// slopes, cut for the little window (x −0.1…0.5, 1.5…2.0 m up); the light coming in through it is the attic's light.
g.save();
g.beginPath();
g.moveTo(-2.62, 0.02);
g.lineTo(-2.62, -0.45);
g.lineTo(0, -2.55);
g.lineTo(2.62, -0.45);
g.lineTo(2.62, 0.02);
g.closePath();
g.rect(-0.1, -2.0, 0.6, 0.5);
g.clip('evenodd');
e.lib.boards(g, -2.62, 2.62, -2.56, 0.02, 0.2, 11);
g.fillStyle = 'rgba(110,86,64,0.3)';
g.fillRect(-2.62, -2.56, 5.24, 2.58);
g.restore();
