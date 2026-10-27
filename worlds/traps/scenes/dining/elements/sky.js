// The sky over the garden after sunset, seen only through the window: deep blue above, a rose and amber band low
// where the sun went down.
const W = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
sky.addColorStop(0, '#2e3f6e');
sky.addColorStop(0.3, '#4c5f93');
sky.addColorStop(0.5, '#8a7fa6');
sky.addColorStop(0.6, '#d49a8e');
sky.addColorStop(0.68, '#eab58a');
sky.addColorStop(1, '#e2a47e');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, W + 0.6, 1.6);
