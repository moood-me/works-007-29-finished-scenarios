// A step's tread seen from above (each copy one tread): planks of worn wood, the snow trodden grey in the middle
// where feet go, white at its ends.
// (x −0.115…0.115 m across, y −0.6…0.6: its far end at the porch's side)
const C = e.lib.C;
g.fillStyle = "#8f7f6b";
g.fillRect(-0.115, -0.6, 0.23, 1.2);
g.fillStyle = C.snow;
g.fillRect(-0.115, -0.6, 0.23, 0.32);
g.fillRect(-0.115, 0.42, 0.23, 0.18);
g.fillStyle = "rgba(200,210,224,0.85)";
g.beginPath();
g.ellipse(0, 0.05, 0.1, 0.3, 0, 0, Math.PI * 2);
g.fill();
