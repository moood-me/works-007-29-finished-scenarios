// The floor, seen from above (x to the right, y toward the eye; its far edge at the back wall): wide scrubbed boards
// running from the back wall toward the eye, worn paler where people walk, and a rag runner — faded stripes of old cloth
// — laid across from the door toward the stove.
const L = e.lib;
L.planks(g, 61, -2.95, -2.4, 5.9, 4.8, 0.3, ["#a48c68", "#9b8360", "#ad9572", "#94805f"], true, 0.7);
g.globalAlpha = 0.25;
g.fillStyle = "#cdb995";
g.beginPath();
g.ellipse(0.4, 0.3, 1.6, 0.7, 0, 0, Math.PI * 2);
g.fill();
g.globalAlpha = 1;
// the runner: across the room, 0.7 wide, from under the door to the stove's corner
const x0 = -1.5, x1 = 2.85, y0 = -0.35, h = 0.7;
const STRIPES = ["#a35a48", "#c9b48a", "#5f6e86", "#b98a5a", "#7d8a6a", "#c9b48a", "#8f4f44"];
for (let x = x0, i = 0; x < x1; i++) {
  const w = 0.05 + 0.09 * L.rnd(i, 7);
  g.fillStyle = STRIPES[i % STRIPES.length];
  g.fillRect(x, y0, Math.min(w, x1 - x), h);
  x += w;
}
L.strokes(g, 63, x0, y0, x1 - x0, h, ["#d8c8a4", "#6d5a48"], 90, 0.18, 0.015, Math.PI / 2, 0.35);
g.fillStyle = "rgba(60,48,36,0.35)";
g.fillRect(x0, y0, x1 - x0, 0.02);
g.fillRect(x0, y0 + h - 0.02, x1 - x0, 0.02);
L.paper(g, x0, y0, x1 - x0, h, 0.6);
