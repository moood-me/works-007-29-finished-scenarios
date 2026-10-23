const evening = e.state.evening;
e.layer('evening').alpha = evening;
e.layer('clouds').alpha = 1 - 0.8 * evening;
