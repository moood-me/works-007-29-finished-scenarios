// The sky over the plateau at the hour the state says (`time`; the light's looks follow it — script.js):
//   dusk  — deep violet overhead going down through mauve and rose to apricot at the horizon; the sun sitting on the far
//           mountains left of the house; the first stars high up
//   dawn  — a pale cool blue overhead, rose and pale gold low down; the sun just up over the mountains on the right
//   day   — a clear blue paling to a warm haze at the horizon; the sun high behind the viewer (not painted: the light
//           `day_sun`)
//   night — deep blue, the moon high on the left (its point `moon`, where the light `moon` comes from), many stars
// Its points: `sun` (where the light `sun` comes from), `moon`. Long thin clouds drift slowly (a layer)
const H = 0.58, A = e.aspect, time = e.state.time;
const SKIES = {
  dusk: [[0, "#28264a"], [0.2, "#3b3560"], [0.42, "#6e5479"], [0.56, "#b77d86"], [0.66, "#e9a684"], [0.72, "#f6c896"], [1, "#f1c39a"]],
  dawn: [[0, "#5d6f9c"], [0.22, "#8696bc"], [0.42, "#bcb6c8"], [0.54, "#e2bfb8"], [0.62, "#f2d2b0"], [0.7, "#f6e0be"], [1, "#efdcbf"]],
  day: [[0, "#6688bb"], [0.2, "#86a2c8"], [0.42, "#b3c4d8"], [0.55, "#dcdcd4"], [0.62, "#ece2cc"], [1, "#ece2cc"]],
  night: [[0, "#0e1430"], [0.25, "#16204a"], [0.45, "#22305e"], [0.56, "#34406c"], [0.64, "#4a5274"], [1, "#454c66"]],
};
const sky = g.createLinearGradient(0, -0.35, 0, 1.25);
for (const [at, colour] of SKIES[time] ?? SKIES.dusk) sky.addColorStop(at, colour);
g.fillStyle = sky;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// the sun: on the mountains at dusk (left of the house), just up at dawn (right), behind the viewer by day
const sunX = time === "dawn" ? A * 0.86 : A * 0.34, sunY = time === "dawn" ? H - 0.06 : time === "day" ? -0.3 : H - 0.03;
if (time === "dusk" || time === "dawn") {
  const glow = g.createRadialGradient(sunX, sunY, 0, sunX, sunY, 0.55);
  glow.addColorStop(0, time === "dawn" ? "rgba(255, 238, 200, 0.85)" : "rgba(255, 228, 176, 0.85)");
  glow.addColorStop(0.25, time === "dawn" ? "rgba(255, 214, 170, 0.3)" : "rgba(255, 196, 140, 0.35)");
  glow.addColorStop(1, "rgba(255, 180, 130, 0)");
  g.fillStyle = glow;
  g.fillRect(sunX - 0.6, H - 0.6, 1.2, 1.0);
  g.fillStyle = "#fff0cf";
  g.beginPath();
  g.arc(sunX, sunY, 0.022, 0, Math.PI * 2);
  g.fill();
  e.light(sunX, sunY, 0.06, "#ffd9a0", 0.6);
}
e.at(sunX, sunY, "sun");
// the moon, high on the left (painted at night; its point always marked)
const moonX = A * 0.18, moonY = 0.12;
if (time === "night") {
  const halo = g.createRadialGradient(moonX, moonY, 0, moonX, moonY, 0.2);
  halo.addColorStop(0, "rgba(220, 228, 255, 0.35)");
  halo.addColorStop(1, "rgba(200, 210, 255, 0)");
  g.fillStyle = halo;
  g.fillRect(moonX - 0.2, moonY - 0.2, 0.4, 0.4);
  g.fillStyle = "#f2f0e2";
  g.beginPath();
  g.arc(moonX, moonY, 0.026, 0, Math.PI * 2);
  g.fill();
  e.light(moonX, moonY, 0.07, "#e8ecff", 0.7);
}
e.at(moonX, moonY, "moon");
// the stars: the first few at dusk, many at night, none by day or at dawn
const stars = time === "night" ? 160 : time === "dusk" ? 40 : 0;
if (stars) {
  e.layer("stars", {}, (g) => {
    for (let i = 0; i < stars; i++) {
      const x = -0.3 + e.rnd() * (A + 0.6), y = -0.33 + Math.pow(e.rnd(), 1.6) * (time === "night" ? 0.8 : 0.32), r = 0.0012 + e.rnd() * 0.0016;
      g.fillStyle = `rgba(255, 246, 228, ${0.35 + e.rnd() * 0.45})`;
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }
  });
}
// long thin clouds drifting slowly, painted so the ends meet: rose underneath at dusk and dawn, white by day, dark
// and moon-edged at night
const W = A + 0.6;
const TONES = {
  dusk: [["rgba(120, 92, 128, 0.55)", "rgba(226, 150, 140, 0.55)"], ["rgba(132, 96, 128, 0.5)", "rgba(240, 166, 140, 0.6)"], ["rgba(150, 104, 128, 0.45)", "rgba(246, 180, 146, 0.6)"], ["rgba(168, 112, 124, 0.4)", "rgba(250, 192, 150, 0.6)"], ["rgba(190, 124, 124, 0.35)", "rgba(255, 206, 160, 0.55)"]],
  dawn: [["rgba(196, 190, 214, 0.5)", "rgba(240, 190, 180, 0.5)"], ["rgba(204, 196, 216, 0.5)", "rgba(246, 200, 180, 0.55)"], ["rgba(214, 204, 216, 0.45)", "rgba(250, 210, 182, 0.55)"], ["rgba(224, 210, 214, 0.4)", "rgba(252, 220, 188, 0.55)"], ["rgba(232, 216, 212, 0.35)", "rgba(255, 228, 196, 0.5)"]],
  day: [["rgba(248, 246, 242, 0.55)", "rgba(216, 214, 220, 0.45)"], ["rgba(250, 248, 244, 0.6)", "rgba(220, 216, 220, 0.5)"], ["rgba(250, 248, 244, 0.55)", "rgba(222, 218, 220, 0.5)"], ["rgba(250, 246, 240, 0.5)", "rgba(226, 220, 216, 0.5)"], ["rgba(250, 246, 240, 0.45)", "rgba(228, 222, 216, 0.45)"]],
  night: [["rgba(40, 48, 84, 0.6)", "rgba(110, 120, 160, 0.4)"], ["rgba(44, 52, 88, 0.55)", "rgba(116, 126, 164, 0.4)"], ["rgba(48, 56, 90, 0.5)", "rgba(120, 128, 164, 0.35)"], ["rgba(52, 60, 92, 0.45)", "rgba(122, 130, 160, 0.35)"], ["rgba(56, 62, 92, 0.4)", "rgba(124, 130, 158, 0.3)"]],
};
const tone = TONES[time] ?? TONES.dusk;
e.layer("clouds", { drift: [0.0025, 0], box: [-0.3, 0.05, A + 0.3, 0.5] }, (g) => {
  const band = (y, x0, len, thick, [top, under]) => {
    for (const dx of [0, -W, W]) {
      g.fillStyle = top;
      g.beginPath();
      g.ellipse(x0 + dx, y, len, thick, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = under;
      g.beginPath();
      g.ellipse(x0 + dx + len * 0.08, y + thick * 0.45, len * 0.82, thick * 0.55, 0, 0, Math.PI * 2);
      g.fill();
    }
  };
  band(0.16, A * 0.15, 0.32, 0.008, tone[0]);
  band(0.24, A * 0.62, 0.45, 0.011, tone[1]);
  band(0.31, A * 0.95, 0.28, 0.007, tone[2]);
  band(0.37, A * 0.35, 0.5, 0.009, tone[3]);
  band(0.44, A * 0.8, 0.36, 0.006, tone[4]);
});
