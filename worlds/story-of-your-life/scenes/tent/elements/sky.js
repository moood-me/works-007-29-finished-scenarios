// A clear summer morning seen through the doorway: pale blue above, warm and hazy low over the meadow. Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#93b6d8');
sky.addColorStop(0.55, '#c6d9e6');
sky.addColorStop(1, '#f2e8d4');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
