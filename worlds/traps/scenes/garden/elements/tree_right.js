// The second chestnut, farther back on the right before the villa's corner: a straighter trunk, a round crown.
const bark = '#5e4c3f';
g.fillStyle = bark;
g.beginPath();
g.moveTo(-0.45, 0.05);
g.bezierCurveTo(-0.28, -1.5, -0.3, -3, -0.22, -3.8);
g.lineTo(0.25, -3.8);
g.bezierCurveTo(0.3, -2.8, 0.26, -1.4, 0.48, 0.05);
g.closePath();
g.fill();
g.strokeStyle = bark;
g.lineCap = 'round';
g.lineWidth = 0.24;
g.beginPath();
g.moveTo(0, -3.6);
g.bezierCurveTo(-0.6, -4.4, -1.6, -5, -2.6, -5.6);
g.moveTo(0, -3.6);
g.bezierCurveTo(0.5, -4.6, 1.2, -5.4, 2.2, -6.2);
g.stroke();
const crown = e.lib.crown;
const rnd = e.rnd;
e.layer('crown_back', { pivot: [0, -3.8], wind: { strength: 0.04, gust: 0.4 } }, c => {
  crown(c, rnd, { cx: -0.4, cy: -7.2, rx: 4.6, ry: 3.2, n: 280, leaf: 0.5, mass: '#2f4426', colors: ['#2f4527', '#3a5530', '#466338'] });
});
e.layer('crown_front', { pivot: [0, -3.8], wind: { strength: 0.06, gust: 0.5 }, depth: 0.4 }, c => {
  crown(c, rnd, { cx: -0.6, cy: -6.4, rx: 4.2, ry: 2.6, n: 300, leaf: 0.46, colors: ['#3d5a31', '#4d6c3a', '#5f7f44', '#6f8f4b'] });
});
