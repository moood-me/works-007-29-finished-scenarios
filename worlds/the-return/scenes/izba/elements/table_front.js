// The table's long side toward the eye (3.3 m ahead, across −0.05…1.15): the top's thick edge, the apron board under
// it with a homespun cloth laid over the top and hanging down a hand's breadth, the two near legs and a stretcher low
// between them — the bench before it hides its foot.
const L = e.lib;
g.fillStyle = "#8d7556";
g.fillRect(-0.58, -0.72, 1.16, 0.16);
g.fillStyle = "#937a5a";
g.fillRect(-0.6, -0.72, 0.08, 0.72);
g.fillRect(0.52, -0.72, 0.08, 0.72);
g.fillStyle = "#7d6649";
g.fillRect(-0.52, -0.2, 1.04, 0.04);
// the cloth's hem over the edge: linen, a red woven band
g.fillStyle = "#e3dccb";
g.fillRect(-0.6, -0.77, 1.2, 0.12);
g.fillStyle = "#a8463a";
g.fillRect(-0.6, -0.68, 1.2, 0.018);
g.fillRect(-0.6, -0.66, 1.2, 0.006);
L.strokes(g, 111, -0.6, -0.77, 1.2, 0.12, ["#f0eadc", "#cfc6b2"], 20, 0.2, 0.012, 0, 0.35);
L.paper(g, -0.6, -0.77, 1.2, 0.77, 0.8);
