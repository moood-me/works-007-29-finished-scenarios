// The station house's near end, its gable toward the eye's right (x runs back from the platform: x −3 the corner by the
// front, x 0 under the ridge, x +3 the back corner): the plinth, the ochre clapboard, one window, the white corner
// boards and frieze, the gable's upright boards and its round vent, the iron roof's red-brown lip and the white
// bargeboards under it.
const L = e.lib;
g.fillStyle = "#94735f";
g.fillRect(-3.05, -0.42, 6.1, 0.42);
L.boards(g, 171, -3, -3.0, 6, 2.58, 0.17, ["#cfae6e", "#c7a566", "#d4b577", "#c3a062"], false, 1.6);
L.windowFrame(g, 0.4, 1.05, 2.3, 0.86);
g.fillStyle = "#e6e2d6";
g.fillRect(-3.08, -3.0, 0.16, 2.6);
g.fillRect(2.92, -3.0, 0.16, 2.6);
g.fillRect(-3.1, -3.22, 6.2, 0.24);
// the gable
g.save();
g.beginPath();
g.moveTo(-3.1, -3.2);
g.lineTo(0, -5.0);
g.lineTo(3.1, -3.2);
g.closePath();
g.clip();
L.boards(g, 177, -3.1, -5.0, 6.2, 1.8, 0.15, ["#c9a868", "#bf9d5f", "#cdb075"], true, 1.6);
g.restore();
g.fillStyle = "#e6e2d6";
g.beginPath();
g.arc(0, -4.0, 0.22, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#4b4f50";
g.beginPath();
g.arc(0, -4.0, 0.15, 0, Math.PI * 2);
g.fill();
// the bargeboards and the iron lip over them
const slope = (y0, y1, x0) => {
  g.beginPath();
  g.moveTo(-x0, y0);
  g.lineTo(0, y1);
  g.lineTo(x0, y0);
  g.lineTo(x0, y0 + 0.13);
  g.lineTo(0, y1 + 0.15);
  g.lineTo(-x0, y0 + 0.13);
  g.closePath();
  g.fill();
};
g.fillStyle = "#e6e2d6";
slope(-3.05, -5.02, 3.35);
g.fillStyle = "#8a5646";
slope(-3.08, -5.16, 3.45);
L.paper(g, -3.5, -5.2, 7, 5.2, 1.6);
