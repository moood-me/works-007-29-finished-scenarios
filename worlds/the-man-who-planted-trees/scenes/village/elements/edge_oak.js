// An oak of the forest's lower edge, just over the village: grown as the others (oak.js) while `edge` is "whole";
// felled for charcoal ("stumps": nothing stands, edge_stump paints what is left); ten years on ("regrown") a young oak
// as tall as a man among the old stumps
const L = e.lib, t = L.T(e), edge = t >= 2 ? e.state.edge ?? "whole" : "whole";
if (edge === "regrown") L.oak(g, e, { h: 1.9 + e.rnd() * 0.5, w: 0.75, lean: 0.05, wind: 0.2, young: true });
else if (edge === "whole") {
  const h = L.OAK_H[t];
  if (h > 0) L.oak(g, e, { h, w: h * 0.3, lean: 0.2, wind: h > 5 ? 0.08 : 0.15, young: h < 5 });
}
