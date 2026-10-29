// A stump where the forest's lower edge was cut for charcoal (from the third chapter, when `edge` is not "whole"):
// its cut face pale and fresh ("stumps"), or grey and weathered ten years on ("regrown")
const L = e.lib, edge = L.T(e) >= 2 ? e.state.edge ?? "whole" : "whole";
if (edge !== "whole") {
  L.stump(g, e, edge === "regrown");
  e.at(0, -0.4);
}
