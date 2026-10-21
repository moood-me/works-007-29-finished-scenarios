const k = e.state.lamp;
e.layer('lit').alpha = k;
e.layer('dark').alpha = 1 - k;
