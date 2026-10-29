// the edge lamps come on with the first mast (flood_0), go out with it
const k = e.state.flood_0 ?? e.state.floods;
e.layer('lit').alpha = k;
e.glow('glass', k);
