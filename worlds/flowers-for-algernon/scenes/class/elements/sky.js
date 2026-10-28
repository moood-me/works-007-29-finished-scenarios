// An April evening just after sunset, seen through the classroom's windows over the roofs: deep blue high up going
// lighter, then a band of rose and a last warm gold low over the roofs where the sun went down; the evening star
// and a thin new moon. Screen heights.
const A = e.aspect;
const sky = g.createLinearGradient(0, -0.35, 0, 0.62);
sky.addColorStop(0, '#16224a');
sky.addColorStop(0.35, '#2c3c74');
sky.addColorStop(0.62, '#5b6496');
sky.addColorStop(0.8, '#b08aa0');
sky.addColorStop(0.92, '#e0a88a');
sky.addColorStop(1, '#efc48e');
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// a long thin cloud lit pink from below
g.fillStyle = 'rgba(214,150,160,0.35)';
g.beginPath();
g.ellipse(A * 0.42, 0.3, 0.32, 0.012, -0.02, 0, Math.PI * 2);
g.ellipse(A * 0.62, 0.33, 0.22, 0.009, 0.01, 0, Math.PI * 2);
g.fill();
// the evening star
g.fillStyle = '#fff6e0';
g.beginPath();
g.arc(A * 0.36, 0.12, 0.0035, 0, Math.PI * 2);
g.fill();
e.light(A * 0.36, 0.12, 0.012, '#fff2d8', 0.6);
// the new moon: a thin crescent
g.fillStyle = '#f6ecd0';
g.beginPath();
g.arc(A * 0.6, 0.08, 0.016, 0, Math.PI * 2);
g.arc(A * 0.6 + 0.006, 0.076, 0.015, 0, Math.PI * 2, true);
g.fill('evenodd');
