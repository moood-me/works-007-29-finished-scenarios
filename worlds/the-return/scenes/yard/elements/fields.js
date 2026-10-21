// The fields beyond the line, seen from above (x across, y toward the eye; 60 m … 2 km ahead): stubble and fallow in
// long bands of ochre and dry green, furrows near.
const L = e.lib, C = ["#c9b27e", "#d5c294", "#b9ae7b", "#aaa676", "#dac99d", "#c2b48a"];
g.fillStyle = "#cdb889";
g.fillRect(-2500, -1000, 5000, 2000);
for (let i = 0, y = 1000; y > -1000; i++) {
  const h = 25 + 90 * L.rnd(i, 31);
  g.fillStyle = C[i % C.length];
  g.fillRect(-2500, y - h, 5000, h);
  y -= h;
}
L.strokes(g, 41, -400, 880, 800, 120, ["#b8a573", "#ddd0a6", "#a99d6d"], 1400, 4, 0.35, 0, 0.32);
L.strokes(g, 43, -2500, -1000, 5000, 1900, ["#bba977", "#d8cb9f"], 900, 60, 4, 0, 0.25);
