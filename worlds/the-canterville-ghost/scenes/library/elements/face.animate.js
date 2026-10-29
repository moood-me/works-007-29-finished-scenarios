const k = e.state.face ?? 0;
e.layer('face').alpha = k;
e.glow('eyes', k);
