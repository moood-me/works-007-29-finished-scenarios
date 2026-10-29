// The old trencher on the floor, from above (0.36 m across): a pewter dish, dull and dented, its broad rim — empty,
// dust in it. Just beyond the skeleton's fingers.
g.fillStyle = '#a2a29c';
g.beginPath();
g.arc(0, 0, 0.18, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#8e8e88';
g.beginPath();
g.arc(0, 0, 0.12, 0, Math.PI * 2);
g.fill();
g.fillStyle = 'rgba(140,132,118,0.45)';
g.beginPath();
g.arc(0.02, 0.01, 0.09, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#a4a49e';
g.lineWidth = 0.008;
g.beginPath();
g.arc(0, 0, 0.17, Math.PI * 1.1, Math.PI * 1.7);
g.stroke();
e.at(0, 0, 'trencher');
