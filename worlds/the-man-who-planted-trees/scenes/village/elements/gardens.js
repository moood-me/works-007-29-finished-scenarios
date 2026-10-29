// The village's gardens as seen from the square, each a part at its own depth: a fence of sticks along its near side,
// rows behind it — bean poles, cabbages, young seedlings: Lina's by the stream from the second chapter (new then:
// seedlings and a few poles), the one by the house on the right from the third, one more beyond it in the epilogue.
// Its point: `lina` (Lina's garden)
const t = e.lib.T(e);
const garden = (g, w, fresh, flowers) => {
  // rows behind the fence: cabbages and bean poles
  for (let k = 0; k < (fresh ? 2 : 4); k++) {
    const y = -0.15 - k * 0.12;
    for (let x = -w / 2 + 0.3; x < w / 2 - 0.2; x += fresh ? 0.45 : 0.55) {
      if (!fresh && k % 2 === 1) {
        g.strokeStyle = "#7d6a50";
        g.lineWidth = 0.03;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 0.03, y - 1.5);
        g.stroke();
        g.fillStyle = "#62803f";
        for (let j = 0; j < 6; j++) {
          g.beginPath();
          g.ellipse(x + (e.rnd() - 0.5) * 0.14, y - 0.3 - j * 0.2, 0.08, 0.06, 0, 0, Math.PI * 2);
          g.fill();
        }
      } else {
        const r = fresh ? 0.07 : 0.15;
        g.fillStyle = fresh ? "#7f9a52" : e.rnd() < 0.5 ? "#6f8f52" : "#88a468";
        g.beginPath();
        g.ellipse(x, y - r * 0.7, r, r * 0.75, 0, 0, Math.PI * 2);
        g.fill();
        if (flowers && e.rnd() < 0.4) {
          g.fillStyle = "#e8d98a";
          g.beginPath();
          g.arc(x + 0.05, y - r * 1.4, 0.04, 0, Math.PI * 2);
          g.fill();
        }
      }
    }
  }
  // the fence: posts and two rails of sticks
  g.strokeStyle = "#7a6650";
  g.lineCap = "round";
  g.lineWidth = 0.05;
  for (let x = -w / 2; x <= w / 2 + 0.01; x += 0.9) {
    g.beginPath();
    g.moveTo(x, 0.02);
    g.lineTo(x + 0.02, -0.9);
    g.stroke();
  }
  g.lineWidth = 0.03;
  for (const y of [-0.35, -0.72]) {
    g.beginPath();
    g.moveTo(-w / 2 - 0.05, y);
    g.lineTo(w / 2 + 0.05, y - 0.03);
    g.stroke();
  }
};
// [across from the anchor, metres farther, width, from which time]
for (const [dx, dz, w, from, name] of [[-12.8, -0.8, 5, 1, "lina"], [11.5, -3.7, 5, 2, "right"], [15.5, 0.5, 4.4, 3, ""]]) {
  if (t < from) continue;
  e.part(dx, dz, (g) => garden(g, w, t === 1, t === 3), [-w / 2 - 0.2, -1.8, w / 2 + 0.2, 0.1]);
}
if (t >= 1) e.at(-12.8, -0.6, "lina");
