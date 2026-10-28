const k = e.state.candles;
e.layer('flames').alpha = k;
e.layer('glints').alpha = k;
e.glow('glow', k);
