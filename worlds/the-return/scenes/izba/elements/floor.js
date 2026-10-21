// The floor, seen from above (x to the right, y toward the eye; its middle 2.8 m ahead and 0.15 m left — a point is at
// x = across + 0.15, y = 2.8 − distance): wide scrubbed boards running from the back wall toward the eye, worn paler
// where people walk, and a rag runner — faded stripes of old cloth — from the doorway into the room (3.5…4.1 ahead,
// across 0.5…1.95): Semyon Yevseyevich stands on its end.
const L = e.lib;
L.planks(g, 61, -2.1, -1.6, 4.2, 3.2, 0.3, ["#a68c66", "#9c825e", "#ae9470", "#97805e"], true, 0.6);
g.globalAlpha = 0.22;
g.fillStyle = "#d2bf9a";
g.beginPath();
g.ellipse(0.4, -0.1, 1.4, 0.8, 0, 0, Math.PI * 2);
g.fill();
g.globalAlpha = 1;
const x0 = 0.65, x1 = 2.1, y0 = -1.3, h = 0.6;
const STRIPES = ["#a35a48", "#c9b48a", "#5f6e86", "#b98a5a", "#7d8a6a", "#c9b48a", "#8f4f44"];
for (let x = x0, i = 0; x < x1; i++) {
  const sw = 0.05 + 0.09 * L.rnd(i, 7);
  g.fillStyle = STRIPES[i % STRIPES.length];
  g.fillRect(x, y0, Math.min(sw, x1 - x), h);
  x += sw;
}
g.fillStyle = "rgba(60,48,36,0.3)";
g.fillRect(x0, y0, x1 - x0, 0.02);
g.fillRect(x0, y0 + h - 0.02, x1 - x0, 0.02);
L.paper(g, x0, y0, x1 - x0, h, 0.6, 0.4);
