// The window's panes in the left wall: the winter evening outside, blue going dark — the snowy plain, a dark line of
// willows, a sky still lighter low down —, frost flowers grown up from the corners of the panes, the snow blowing past
// (a layer that drifts down and aslant). It glows: the room's light does not darken it; its cold light comes in.
// (x −0.27…0.27, y −1.64…−0.88 — inside the casing painted on the wall)
const X0 = -0.27;
const X1 = 0.27;
const Y0 = -1.64;
const Y1 = -0.88;
const sky = g.createLinearGradient(0, Y0, 0, Y1);
sky.addColorStop(0, "#2c3e66");
sky.addColorStop(0.55, "#5a74a4");
sky.addColorStop(0.62, "#8aa0c8");
sky.addColorStop(0.66, "#4a5670");
sky.addColorStop(0.7, "#9cb0d2");
sky.addColorStop(1, "#7f96c0");
g.fillStyle = sky;
g.fillRect(X0, Y0, X1 - X0, Y1 - Y0);
// (frost flowers from the corners and the bottom of each pane)
g.save();
g.beginPath();
g.rect(X0, Y0, X1 - X0, Y1 - Y0);
g.clip();
g.fillStyle = "rgba(226,236,250,0.6)";
for (const [cx, cy, r] of [[X0, Y1, 0.2], [0, Y1, 0.16], [X1, Y1, 0.2], [X0, Y0, 0.1], [X1, -1.26, 0.09], [X0, -1.26, 0.11]]) {
  g.beginPath();
  g.ellipse(cx, cy, r, r * 0.8, 0, 0, Math.PI * 2);
  g.fill();
}
g.restore();
e.light(0, -1.3, 0.25, "#9db4e0", 0.5, "panes");
// the snow blowing past outside: flakes on a layer that drifts down and to the left, wrapping in the panes
e.layer("snow", { drift: [-0.05, 0.11], box: [X0, Y0, X1, Y1] }, s => {
  s.fillStyle = "rgba(240,244,252,0.85)";
  for (let i = 0; i < 46; i++) {
    const x = X0 + e.rnd() * (X1 - X0);
    const y = Y0 + e.rnd() * (Y1 - Y0);
    const r = 0.004 + e.rnd() * 0.006;
    s.beginPath();
    s.arc(x, y, r, 0, Math.PI * 2);
    s.fill();
  }
});
// the sash and its bars (four panes)
g.fillStyle = "#4a3828";
g.fillRect(X0, Y0, X1 - X0, 0.035);
g.fillRect(X0, Y1 - 0.035, X1 - X0, 0.035);
g.fillRect(X0, Y0, 0.035, Y1 - Y0);
g.fillRect(X1 - 0.035, Y0, 0.035, Y1 - Y0);
g.fillRect(-0.015, Y0, 0.03, Y1 - Y0);
g.fillRect(X0, -1.275, X1 - X0, 0.03);
e.at(0, -1.26, "panes");
