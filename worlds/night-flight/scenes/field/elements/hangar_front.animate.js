e.layer('lit').alpha = e.state.hangar;
// the switch's lever: down (turned half round from up) … up
e.layer('lever').rotate = (1 - (e.state.lever ?? 1)) * Math.PI;
