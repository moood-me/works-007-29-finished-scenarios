// the moon where it stands in the world — low over the slope across the stream, seen through the window — at night only
const p = e.point([64, 320, 15]);
const moon = e.layer('moon');
moon.x = p[0];
moon.y = p[1];
moon.alpha = e.state.night;
