// The tent's floor, seen from above (metres, y toward the viewer; x −4.2…4.2, the back wall at y −3.5): sheets of
// plywood laid on the grass, their seams and scuffs; cables from the generator outside to the looking glass's sensors,
// the camera and the table.
g.fillStyle = '#c9b48e';
g.fillRect(-4.2, -3.5, 8.4, 7.0);
for (let i = 0; i < 40; i++) {
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,138,100,0.22)' : 'rgba(222,206,170,0.25)';
  g.beginPath();
  g.ellipse(-4.2 + e.rnd() * 8.4, -3.5 + e.rnd() * 7.0, 0.2 + e.rnd() * 0.6, 0.05 + e.rnd() * 0.15, 0, 0, Math.PI * 2);
  g.fill();
}
g.strokeStyle = 'rgba(110,92,64,0.5)';
g.lineWidth = 0.012;
for (let x = -4.2; x <= 4.2; x += 1.22) {
  g.beginPath();
  g.moveTo(x, -3.5);
  g.lineTo(x, 3.5);
  g.stroke();
}
for (let y = -3.5; y <= 3.5; y += 2.44) {
  g.beginPath();
  g.moveTo(-4.2, y);
  g.lineTo(4.2, y);
  g.stroke();
}
// the cables: black, lying loose
g.strokeStyle = '#22211f';
g.lineCap = 'round';
g.lineWidth = 0.022;
const cable = pts => {
  g.beginPath();
  g.moveTo(...pts[0]);
  for (let i = 1; i < pts.length; i += 2) g.quadraticCurveTo(...pts[i], ...pts[i + 1]);
  g.stroke();
};
cable([[4.2, -1.6], [2.6, -2.2], [1.2, -2.9], [0.2, -3.3], [-0.6, -3.46]]);
cable([[4.2, -1.5], [1.5, -1.5], [-1.4, -2.2], [-2.2, -2.4], [-2.4, -2.5]]);
g.lineWidth = 0.016;
cable([[4.2, -1.4], [3.4, -0.6], [2.6, -0.1], [2.2, 0.1], [2.0, 0.05]]);
