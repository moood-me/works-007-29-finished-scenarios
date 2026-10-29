// The square's middle, where Lina's mother's lime stood: by `stump` —
// "stump": the lime's stump, cut for charcoal in a hungry winter: grey bark, its roots gripping the trodden earth,
//   its cut face pale with rings, a split, the axe's notches; `wet` — water just poured on it, the face and a run down
//   the bark dark; `mug` — Lina's tin mug set on it upside down;
// "dug": the stump gone, a pit where it was, the fresh earth heaped beside it, a young lime lying ready, its root ball
//   in sacking;
// "planted": the young lime standing in the pit filled in, tied to a stake, a ring of dark earth round it (darker
//   with `wet`), its fresh leaves stirring.
// Its points: `top` (the stump's face, the pit, the young lime's foot), `spot` (the ground where the lime goes — what the
// player presses), `crown` (the young lime's leaves)
const kind = e.state.stump ?? "stump", wet = !!e.state.wet;
if (kind === "stump") {
  // roots spreading into the ground
  g.fillStyle = "#6c6358";
  for (const [x0, x1, s] of [[-0.22, -0.62, -1], [0.2, 0.66, 1], [-0.05, -0.34, -1], [0.1, 0.4, 1]]) {
    g.beginPath();
    g.moveTo(x0 - 0.08 * s, -0.2);
    g.quadraticCurveTo(x0 + (x1 - x0) * 0.4, -0.04, x1, 0.02);
    g.lineTo(x0 + 0.1 * s, 0.02);
    g.closePath();
    g.fill();
  }
  // the trunk's stump
  g.fillStyle = "#7d7468";
  g.beginPath();
  g.moveTo(-0.34, 0.02);
  g.quadraticCurveTo(-0.27, -0.12, -0.27, -0.42);
  g.lineTo(0.27, -0.44);
  g.quadraticCurveTo(0.28, -0.12, 0.36, 0.02);
  g.closePath();
  g.fill();
  g.strokeStyle = "#5e564c";
  g.lineWidth = 0.018;
  for (const x of [-0.18, -0.06, 0.08, 0.19]) {
    g.beginPath();
    g.moveTo(x, -0.42);
    g.lineTo(x + 0.02, -0.02);
    g.stroke();
  }
  if (wet) {
    g.fillStyle = "rgba(60, 52, 44, 0.55)";
    g.beginPath();
    g.moveTo(-0.05, -0.43);
    g.quadraticCurveTo(-0.1, -0.2, -0.04, 0.02);
    g.lineTo(0.12, 0.02);
    g.quadraticCurveTo(0.1, -0.25, 0.12, -0.44);
    g.closePath();
    g.fill();
    g.fillStyle = "rgba(70, 60, 50, 0.5)";
    g.beginPath();
    g.ellipse(0.05, 0.02, 0.45, 0.06, 0, 0, Math.PI * 2);
    g.fill();
  }
  // the cut face, a little tilted toward the eye: pale wood, rings, a split; an axe's notch at its rim
  g.fillStyle = wet ? "#8e7f68" : "#bcae94";
  g.beginPath();
  g.ellipse(0, -0.43, 0.27, 0.075, -0.04, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = wet ? "#76684f" : "#a39377";
  g.lineWidth = 0.008;
  for (const k of [0.3, 0.55, 0.8]) {
    g.beginPath();
    g.ellipse(0.01, -0.43, 0.27 * k, 0.075 * k, -0.04, 0, Math.PI * 2);
    g.stroke();
  }
  g.strokeStyle = "#5e5446";
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(-0.02, -0.43);
  g.lineTo(0.2, -0.47);
  g.stroke();
  g.fillStyle = "#5e564c";
  g.beginPath();
  g.moveTo(-0.27, -0.42);
  g.lineTo(-0.18, -0.36);
  g.lineTo(-0.27, -0.3);
  g.closePath();
  g.fill();
  if (e.state.mug) {
    // the tin mug upside down on the face
    g.fillStyle = "#7c7c76";
    g.fillRect(0.02, -0.56, 0.11, 0.12);
    g.fillStyle = "#9a9a92";
    g.beginPath();
    g.ellipse(0.075, -0.56, 0.055, 0.016, 0, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = "#6a6a64";
    g.lineWidth = 0.014;
    g.beginPath();
    g.arc(0.14, -0.5, 0.035, -Math.PI / 2, Math.PI / 2);
    g.stroke();
  }
  e.at(0, -0.44, "top");
} else {
  // the pit (filled in once planted) and the earth round it
  g.fillStyle = kind === "dug" ? "#3e3226" : wet ? "#4a3c2e" : "#5d4b3a";
  g.beginPath();
  g.ellipse(0, 0, 0.55, 0.1, 0, 0, Math.PI * 2);
  g.fill();
  if (kind === "dug") {
    // the fresh earth heaped behind-left of the pit
    g.fillStyle = "#6b5640";
    g.beginPath();
    g.moveTo(-1.25, 0.0);
    g.quadraticCurveTo(-0.95, -0.42, -0.55, -0.36);
    g.quadraticCurveTo(-0.35, -0.3, -0.3, -0.04);
    g.closePath();
    g.fill();
    g.fillStyle = "#806a50";
    for (let i = 0; i < 9; i++) {
      g.beginPath();
      g.ellipse(-1.1 + e.rnd() * 0.7, -0.08 - e.rnd() * 0.22, 0.05, 0.03, 0, 0, Math.PI * 2);
      g.fill();
    }
    // the young lime lying ready on the right: its root ball in sacking, a slender stem, a few leafing twigs
    g.fillStyle = "#a8916c";
    g.beginPath();
    g.ellipse(0.62, -0.13, 0.17, 0.13, 0, 0, Math.PI * 2);
    g.fill();
    g.strokeStyle = "#8a7656";
    g.lineWidth = 0.012;
    g.beginPath();
    g.moveTo(0.48, -0.2);
    g.lineTo(0.76, -0.06);
    g.moveTo(0.5, -0.06);
    g.lineTo(0.74, -0.2);
    g.stroke();
    g.strokeStyle = "#6a5a46";
    g.lineWidth = 0.035;
    g.lineCap = "round";
    g.beginPath();
    g.moveTo(0.76, -0.14);
    g.lineTo(1.35, -0.05);
    g.stroke();
    g.lineWidth = 0.015;
    for (const [x, dy] of [[1.0, -0.1], [1.15, 0.05], [1.25, -0.12]]) {
      g.beginPath();
      g.moveTo(x, -0.1);
      g.lineTo(x + 0.15, -0.1 + dy);
      g.stroke();
      g.fillStyle = "#a6c27a";
      g.beginPath();
      g.ellipse(x + 0.16, -0.1 + dy, 0.045, 0.03, 0, 0, Math.PI * 2);
      g.fill();
    }
    e.at(0, -0.02, "top");
  } else {
    // the stake, and the young lime tied to it; its crown a layer stirring in the wind
    g.fillStyle = "#8f7a5c";
    g.fillRect(0.07, -1.55, 0.04, 1.55);
    g.strokeStyle = "#5c4a38";
    g.lineWidth = 0.04;
    g.lineCap = "round";
    g.beginPath();
    g.moveTo(0, 0);
    g.quadraticCurveTo(-0.02, -0.8, 0.01, -1.55);
    g.stroke();
    g.strokeStyle = "#d8cfb6";
    g.lineWidth = 0.02;
    g.beginPath();
    g.moveTo(0, -1.0);
    g.lineTo(0.11, -1.02);
    g.stroke();
    e.layer("crown", { pivot: [0, -1.4], wind: { strength: 0.35, gust: 0.4 } }, (g) => {
      g.strokeStyle = "#5c4a38";
      g.lineWidth = 0.02;
      for (const [x, y] of [[-0.35, -1.95], [0.3, -2.05], [-0.1, -2.35], [0.4, -1.7], [-0.45, -1.65]]) {
        g.beginPath();
        g.moveTo(0.01, -1.45);
        g.quadraticCurveTo(x * 0.4, (y - 1.45) / 2 - 0.7, x, y);
        g.stroke();
      }
      // heart-shaped leaves, fresh green, paler on top
      for (let i = 0; i < 46; i++) {
        const a = e.rnd() * Math.PI * 2, r = Math.sqrt(e.rnd()), x = Math.cos(a) * 0.5 * r, y = -1.95 + Math.sin(a) * 0.42 * r;
        g.fillStyle = y < -2.0 ? "#b6cc7e" : e.rnd() < 0.5 ? "#9cb86a" : "#86a45a";
        g.beginPath();
        g.moveTo(x, y + 0.05);
        g.bezierCurveTo(x - 0.07, y, x - 0.05, y - 0.06, x, y - 0.03);
        g.bezierCurveTo(x + 0.05, y - 0.06, x + 0.07, y, x, y + 0.05);
        g.fill();
      }
    });
    e.at(0, -1.95, "crown");
    e.at(0, -0.02, "top");
  }
}
e.at(0, -0.02, "spot");
