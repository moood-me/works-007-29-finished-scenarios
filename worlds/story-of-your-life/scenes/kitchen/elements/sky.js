// An early clear morning seen through the window: pale blue above, warm and hazy low over the street. Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.6);
sky.addColorStop(0, '#86acd2');
sky.addColorStop(0.45, '#bed3e2');
sky.addColorStop(0.75, '#f2dcb6');
sky.addColorStop(1, '#f6e3c2');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
