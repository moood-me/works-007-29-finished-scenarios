// The station house's long front, along the platform, facing the line (the card stands 6.5 m to the right of the line,
// parallel to it; x runs along the line toward the eye: x 0 is the door, 8 m along from the lib's P0, x +6 the near
// corner, x −6 the far one): a plinth of old brick, clapboard painted the railway's ochre, white corner boards and
// frieze, two windows each side of the door in white frames, the door's two leaves painted a dark green, a little
// iron canopy over it; by the door on the left the station's bell on its iron bracket, rung for a train (its rope's
// tail stirring in the air), on the right a lantern on a bracket, unlit by day; a bench along the wall by the near
// windows; in the window right of the door the stationmaster's lamp still burning in the fog (its flame a glow of the
// engine's, flickering a little: the element's `flicker`). No signs.
const L = e.lib;
// the plinth
g.fillStyle = "#94735f";
g.fillRect(-6.05, -0.42, 12.1, 0.42);
for (let r = 0; r < 4; r++) {
  for (let i = 0, x = -6.05 + (r % 2) * 0.12; x < 6.05; i++, x += 0.25) {
    g.fillStyle = ["#9d7b66", "#8a6a57", "#a3826b"][(i + r) % 3];
    g.fillRect(x, -0.41 + r * 0.1, Math.min(0.23, 6.05 - x), 0.085);
  }
}
// the clapboard, the corner boards, the frieze
L.boards(g, 161, -6, -3.0, 12, 2.58, 0.17, ["#cfae6e", "#c7a566", "#d4b577", "#c3a062"], false, 2.4);
g.fillStyle = "#e6e2d6";
g.fillRect(-6.1, -3.0, 0.16, 2.6);
g.fillRect(5.94, -3.0, 0.16, 2.6);
g.fillRect(-6.15, -3.22, 12.3, 0.24);
// the windows
for (const x of [-4.3, -2.3, 2.4, 4.4]) L.windowFrame(g, x, 1.05, 2.3, 0.86);
// the lamp on the sill inside the window right of the door: its base and glass chimney, its flame
g.fillStyle = "#5b4a36";
g.fillRect(2.5, -1.18, 0.14, 0.08);
g.fillStyle = "#d9c9a0";
g.fillRect(2.535, -1.38, 0.07, 0.2);
e.light(2.57, -1.32, 0.16, "#ffc47a", 1.4, "lamp");
// the door: its frame, two dark green leaves with their panels, the step, the canopy
g.fillStyle = "#e6e2d6";
g.fillRect(-0.78, -2.48, 1.56, 2.48);
g.fillStyle = "#4f6352";
g.fillRect(-0.66, -2.36, 1.32, 2.36);
g.fillStyle = "#435646";
for (const x of [-0.58, 0.06]) {
  g.fillRect(x, -2.24, 0.52, 0.9);
  g.fillRect(x, -1.2, 0.52, 1.02);
}
g.fillStyle = "#2f3a32";
g.fillRect(-0.012, -2.36, 0.024, 2.36);
g.fillStyle = "#b9a98a";
g.fillRect(-0.95, -0.12, 1.9, 0.12);
g.fillStyle = "#7f5546";
g.beginPath();
g.moveTo(-1.05, -2.62);
g.lineTo(1.05, -2.62);
g.lineTo(0.9, -2.82);
g.lineTo(-0.9, -2.82);
g.closePath();
g.fill();
// the bench by the near windows: its seat's edge, its legs
g.fillStyle = "#857661";
g.fillRect(1.9, -0.5, 3.0, 0.08);
g.fillStyle = "#6d604f";
for (const x of [2.0, 4.7]) g.fillRect(x, -0.42, 0.08, 0.42);
L.paper(g, -6.2, -3.3, 12.4, 3.3, 2.4);
// the lantern on its bracket right of the door
g.fillStyle = "#3a3f3b";
g.fillRect(0.95, -2.42, 0.36, 0.035);
g.fillRect(1.27, -2.42, 0.03, 0.12);
g.beginPath();
g.moveTo(1.12, -2.3);
g.lineTo(1.29, -2.44);
g.lineTo(1.46, -2.3);
g.closePath();
g.fill();
g.fillStyle = "#c3cbca";
g.fillRect(1.16, -2.3, 0.26, 0.3);
g.fillStyle = "#3a3f3b";
g.fillRect(1.28, -2.3, 0.02, 0.3);
g.fillRect(1.14, -2.02, 0.3, 0.04);
// the bell on its bracket left of the door
g.strokeStyle = "#3c403c";
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(-0.95, -2.62);
g.lineTo(-1.5, -2.62);
g.lineTo(-1.5, -2.52);
g.moveTo(-0.95, -2.36);
g.lineTo(-1.3, -2.62);
g.stroke();
g.fillStyle = "#a88a4a";
g.beginPath();
g.moveTo(-1.62, -2.52);
g.quadraticCurveTo(-1.62, -2.36, -1.68, -2.27);
g.lineTo(-1.32, -2.27);
g.quadraticCurveTo(-1.38, -2.36, -1.38, -2.52);
g.closePath();
g.fill();
g.fillStyle = "#c7aa64";
g.fillRect(-1.6, -2.49, 0.06, 0.17);
g.fillStyle = "#7e6634";
g.fillRect(-1.69, -2.29, 0.38, 0.028);
e.at(-1.5, -2.4, "bell");
e.at(0, -1.2, "door");
e.layer("rope", { pivot: [-1.5, -2.27], wind: { strength: 0.25, gust: 0.4 }, box: [-1.62, -2.3, -1.38, -1.66] }, (g) => {
  g.strokeStyle = "#8c7a5e";
  g.lineWidth = 0.026;
  g.beginPath();
  g.moveTo(-1.5, -2.27);
  g.quadraticCurveTo(-1.48, -1.98, -1.51, -1.7);
  g.stroke();
});
