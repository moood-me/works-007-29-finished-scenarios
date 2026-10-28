// The stone chimney over the roof, its cap a flat stone; the smoke rises from its mouth (the scene's particles).
const L = e.lib;
g.fillStyle = '#8a8378';
g.fillRect(-0.32, -1.1, 0.64, 1.1);
L.dabs(g, 91, -0.32, -1.1, 0.64, 1.1, ['#a29b8f', '#6f695f', '#9b9387'], 30, 0.08, 0.6, 0.9);
g.fillStyle = '#6c665d';
g.fillRect(-0.4, -1.2, 0.8, 0.1);
e.at(0, -1.2, 'mouth');
