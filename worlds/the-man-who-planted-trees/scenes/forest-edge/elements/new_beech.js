// The beech sapling the Traveller plants this year (`new_beech`, МИ4), at new_beech_a/d: a knee-high sapling in its
// fresh dark earth — standing straight ("straight") or askew ("crooked"); nothing ("none"). Its point `top`
const v = e.state.new_beech;
if (v !== "crooked" && v !== "straight") return;
g.fillStyle = "#5e4d3a";
g.beginPath();
g.ellipse(0, 0, 0.22, 0.04, 0, 0, Math.PI * 2);
g.fill();
g.save();
if (v === "crooked") g.rotate(0.38);
e.lib.beech(g, e, { h: 0.7, w: 0.22, wind: 0 });
g.restore();
e.at(v === "crooked" ? 0.25 : 0, -0.65, "top");
