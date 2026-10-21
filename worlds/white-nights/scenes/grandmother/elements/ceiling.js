// The low ceiling from above, as it lies (x −2.7…2.7, y −3 at the back wall … 3 at the front): whitewashed boards,
// two dark beams across the room, and over the stair the hatch to the mezzanine (x 2.05…2.65, 4.2…4.6 m in), its
// opening the dim wood of the room above
const INK = e.lib.INK;
g.fillStyle = '#ebe4d6';
g.fillRect(-2.7, -3, 5.4, 6);
// nearer the viewer, away from the windows, the whitewash goes into a warm shade
const shade = g.createLinearGradient(0, -1, 0, 3);
shade.addColorStop(0, 'rgba(120,96,74,0)');
shade.addColorStop(1, 'rgba(120,96,74,0.5)');
g.fillStyle = shade;
g.fillRect(-2.7, -3, 5.4, 6);
g.beginPath();
for (let x = -2.7; x <= 2.7; x += 0.3) {
  g.moveTo(x, -3);
  g.lineTo(x, 3);
}
g.strokeStyle = 'rgba(74,63,58,0.18)';
g.lineWidth = 0.008;
g.stroke();
for (const y of [-2.2, 0.3]) e.lib.box(g, -2.7, y - 0.11, 5.4, 0.22, '#a5896c', 0.012);
e.lib.box(g, 1.98, -1.67, 0.74, 0.54, '#d8ccb6', 0.012);
e.lib.box(g, 2.05, -1.6, 0.6, 0.4, '#6c5848', 0.012);
