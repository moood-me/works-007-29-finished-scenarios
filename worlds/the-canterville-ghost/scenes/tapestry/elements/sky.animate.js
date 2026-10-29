// the evening's dusk and the night (in the dark too: the window black but for the night sky) over the afternoon's sky
e.layer('dusk').alpha = e.state.evening ?? 0;
e.layer('night').alpha = Math.max(e.state.night ?? 0, e.state.dark ?? 0);
