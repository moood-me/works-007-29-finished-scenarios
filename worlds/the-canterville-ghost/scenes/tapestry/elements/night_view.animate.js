// the night view comes into the window with the night, and in the dark
e.layer('night').alpha = Math.max(e.state.night ?? 0, e.state.dark ?? 0);
