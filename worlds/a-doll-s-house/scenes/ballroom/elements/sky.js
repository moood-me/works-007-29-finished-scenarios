// The night sky over the roofs across the street, seen only through the windows: low snow clouds, deep blue, lit a
// little from below by the town. Screen heights; the horizon at 0.55.
const sky = g.createLinearGradient(0, -0.35, 0, 0.75);
sky.addColorStop(0, '#121a30');
sky.addColorStop(0.55, '#26345a');
sky.addColorStop(0.85, '#3f4c74');
sky.addColorStop(1, '#5d5a74');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, e.aspect + 0.6, 1.6);
