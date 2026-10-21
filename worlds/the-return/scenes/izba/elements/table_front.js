// The table's long side toward the eye (1.65 m ahead, across −0.95…0.45): the top's thick edge, the apron board under
// it with a homespun cloth laid over the top and hanging down a hand's breadth, the two near legs — only its upper part is
// in the frame.
const L = e.lib;
g.fillStyle = "#8d7556";
g.fillRect(-0.68, -0.72, 1.36, 0.16);
g.fillStyle = "#937a5a";
g.fillRect(-0.7, -0.72, 0.08, 0.72);
g.fillRect(0.62, -0.72, 0.08, 0.72);
// the cloth's hem over the edge: linen, a red woven band
g.fillStyle = "#e3dccb";
g.fillRect(-0.7, -0.77, 1.4, 0.12);
g.fillStyle = "#a8463a";
g.fillRect(-0.7, -0.68, 1.4, 0.018);
g.fillRect(-0.7, -0.66, 1.4, 0.006);
L.strokes(g, 111, -0.7, -0.77, 1.4, 0.12, ["#f0eadc", "#cfc6b2"], 24, 0.2, 0.012, 0, 0.35);
L.paper(g, -0.7, -0.77, 1.4, 0.77, 0.8);
