// The ceiling seen from below (metres from its back edge over the back wall, y toward the viewer): boards of bare pine
// darkened by the years and the lamp's smoke, crossed by the rafters' ties, the stovepipe's tin collar over the stove.
e.lib.boards(g, -4.25, -7.65, 4.25, 0.05, 0.22, '#6f5a43', 23);
g.fillStyle = '#4a3b2d';
for (let y = -0.5; y > -7.6; y -= 1.55) g.fillRect(-4.25, y - 0.09, 8.5, 0.18);
g.fillStyle = '#8d8a84';
g.beginPath();
g.arc(-2.75, -4.4, 0.16, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3c3a38';
g.beginPath();
g.arc(-2.75, -4.4, 0.08, 0, Math.PI * 2);
g.fill();
