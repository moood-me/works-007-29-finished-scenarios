// A stretch of the forest farther up the slope: eight of Elzéard's oaks close together, their crowns one mass over the
// dark row of their trunks, as tall as `time` has grown them; too far for the wind to show
const L = e.lib, h = L.OAK_H[L.T(e)];
if (h > 0) {
  for (let i = 0; i < 8; i++) {
    const hh = h * (0.9 + e.rnd() * 0.25);
    L.oak(g, e, { at: -14 + i * 4 + (e.rnd() - 0.5) * 1.2, h: hh, w: hh * (0.27 + e.rnd() * 0.08), lean: (e.rnd() - 0.5) * 0.6, wind: 0, young: h < 5 });
  }
}
