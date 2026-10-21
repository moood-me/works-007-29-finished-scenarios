// What stands on the table, seen from the room: a round loaf on a board at the master's end, his tea glass in its
// holder, a sugar bowl, the old man's glass and the bottle of vodka (green glass, half drunk) at the old man's end.
// A card on the table's top at the line of the glasses.
// (x −0.9…0.9 along the table, y up from the top at 0)
const L = e.lib;
const C = L.C;
// the loaf on its board
g.fillStyle = C.boardDark;
g.fillRect(-0.85, -0.02, 0.3, 0.02);
g.fillStyle = "#b07a42";
g.beginPath();
g.ellipse(-0.7, -0.02, 0.12, 0.07, 0, Math.PI, 0);
g.closePath();
g.fill();
g.fillStyle = "#d8b07a";
g.fillRect(-0.62, -0.07, 0.03, 0.05);
// tea glasses in holders: the tea amber, the holder's handle
function glass(x) {
  g.fillStyle = "#a85a22";
  g.fillRect(x - 0.03, -0.1, 0.06, 0.08);
  g.fillStyle = "rgba(240,236,226,0.6)";
  g.fillRect(x - 0.03, -0.11, 0.06, 0.015);
  g.fillStyle = "#9a9a92";
  g.fillRect(x - 0.034, -0.05, 0.068, 0.05);
  g.strokeStyle = "#9a9a92";
  g.lineWidth = 0.008;
  g.beginPath();
  g.arc(x + 0.045, -0.055, 0.022, -Math.PI / 2, Math.PI / 2);
  g.stroke();
}
glass(-0.38);
glass(0.42);
// the sugar bowl
g.fillStyle = "#e8e6e0";
g.beginPath();
g.ellipse(-0.08, -0.04, 0.05, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#5a6a9a";
g.fillRect(-0.12, -0.045, 0.08, 0.01);
// the bottle: green glass, the vodka down to half, a stopper (at x 0.75, by the old man's hands)
g.save();
g.translate(0.2, 0);
g.fillStyle = "#3e5a3a";
g.beginPath();
g.moveTo(0.5, 0);
g.lineTo(0.5, -0.17);
g.quadraticCurveTo(0.5, -0.21, 0.53, -0.23);
g.lineTo(0.53, -0.29);
g.lineTo(0.57, -0.29);
g.lineTo(0.57, -0.23);
g.quadraticCurveTo(0.6, -0.21, 0.6, -0.17);
g.lineTo(0.6, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(190,214,186,0.5)";
g.fillRect(0.505, -0.09, 0.09, 0.085);
g.fillStyle = "#c8b48a";
g.fillRect(0.528, -0.31, 0.044, 0.025);
g.restore();
e.at(0.75, -0.15, "bottle");
