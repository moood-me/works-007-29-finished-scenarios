// The meadow outside, seen from above (x across, y toward the house; the far edge at y −256): dull summer green under
// the storm cloud, darker patches, a pale path going off toward the hills.
const L = e.lib;
g.fillStyle = '#5f7c4c';
g.fillRect(-600, -256, 1200, 512);
L.dabs(g, 41, -600, -256, 1200, 512, ['#6b8a55', '#52703f', '#77935c'], 500, 9, 0.5, 0.5);
g.strokeStyle = '#a99e7c';
g.lineWidth = 1.6;
g.beginPath();
g.moveTo(-30, 256);
g.bezierCurveTo(-60, 120, -10, 0, -50, -256);
g.stroke();
