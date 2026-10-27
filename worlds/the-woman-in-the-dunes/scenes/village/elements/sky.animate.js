// the evening, the night and the fog come in over the day's sky by their keys; the moon's glow with the night
const s = e.state;
e.layer("evening").alpha = s.evening;
e.layer("night").alpha = s.night;
e.layer("fog").alpha = 0.9 * s.fog;
e.glow("moonglow", s.night * (1 - s.fog));
