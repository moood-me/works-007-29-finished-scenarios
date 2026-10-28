// The sand of the dunes and of the village — one plane draped over the land (relief.js), seen from above: x = across,
// y = 120 − distance (the plane's middle 120 m ahead; it runs from 10 m behind the eye to 250 m ahead). Warm dry sand,
// broad paler and darker drifts; wind ripples near the eye; in every pit the sand's own runs down its walls and a
// paler line along its lip; the track of the shore road on the right; his footprints along the rise and the old man's
// from his winch.
const r = e.lib.stream(11);
const Y = (d) => 120 - d;
g.fillStyle = "#d9b882";
g.fillRect(-300, -130, 600, 260);

// broad soft drifts, a shade darker or paler: big far off, smaller near
for (let i = 0; i < 70; i++) {
  const x = -280 + r() * 560;
  const d = -5 + r() * 250;
  const rad = 4 + d * 0.12 + r() * 10;
  const dark = r() < 0.5;
  const p = g.createRadialGradient(x, Y(d), 0, x, Y(d), rad);
  p.addColorStop(0, dark ? "rgba(196, 158, 104, 0.22)" : "rgba(238, 214, 166, 0.28)");
  p.addColorStop(1, dark ? "rgba(196, 158, 104, 0)" : "rgba(238, 214, 166, 0)");
  g.fillStyle = p;
  g.fillRect(x - rad, Y(d) - rad, rad * 2, rad * 2);
}

// wind ripples on the near sand, broken crests across the wind: a shadowed line and a lit one behind it — not
// inside the pits
const inPit = (x, d) => {
  for (let i = 0; i < e.lib.PITS.length; i++) if (e.lib.pitR(i, x, d) < 1.32) return true;
  return false;
};
const ripples = new Path2D();
for (let d = -8; d < 70; d += 0.3 + r() * 0.12 + Math.max(0, d - 20) * 0.02) {
  let x = -60 + r() * 1.5;
  while (x < 60) {
    const len = 0.6 + r() * 2.2;
    const mx = x + len / 2;
    if (!inPit(mx, d)) {
      const a = 0.04 + r() * 0.05;
      const ph = r() * 6;
      ripples.moveTo(x, Y(d) + a * Math.sin(ph));
      ripples.quadraticCurveTo(x + len * 0.5, Y(d) + (r() - 0.5) * 0.18, x + len, Y(d) + a * Math.sin(ph + 2));
    }
    x += len + 0.2 + r() * 0.9;
  }
}
g.lineCap = "round";
g.strokeStyle = "#c29a62";
g.lineWidth = 0.04;
g.stroke(ripples);
g.save();
g.translate(0, 0.05);
g.strokeStyle = "#ecd4a6";
g.lineWidth = 0.03;
g.stroke(ripples);
g.restore();

// the pits: the floor a little darker and trodden, the sand running down the walls in long tongues, the lip's edge
// a clean paler line and a softer one just inside it where the sand breaks over
const runDark = new Path2D();
const runPale = new Path2D();
for (let i = 0; i < e.lib.PITS.length; i++) {
  const [cx, cd, rx, rd] = e.lib.PITS[i];
  const floor = g.createRadialGradient(cx, Y(cd), 0, cx, Y(cd), Math.max(rx, rd));
  floor.addColorStop(0, "rgba(186, 146, 96, 0.3)");
  floor.addColorStop(1, "rgba(186, 146, 96, 0.1)");
  g.fillStyle = floor;
  g.beginPath();
  g.ellipse(cx, Y(cd), rx, rd, 0, 0, Math.PI * 2);
  g.fill();
  for (let k = 0; k < 320; k++) {
    const th = r() * Math.PI * 2;
    const r0 = 1.0 + r() * 0.24;
    const r1 = Math.min(1.29, r0 + 0.03 + r() * 0.09);
    const a = e.lib.pitAt(i, r0, th);
    const b = e.lib.pitAt(i, r1, th);
    const p = r() < 0.55 ? runDark : runPale;
    p.moveTo(a[0], Y(a[1]));
    p.lineTo(b[0], Y(b[1]));
  }
  g.strokeStyle = "#f0dbaf";
  g.lineWidth = 0.1;
  g.beginPath();
  g.ellipse(cx, Y(cd), rx * 1.3, rd * 1.3, 0, 0, Math.PI * 2);
  g.stroke();
  g.strokeStyle = "rgba(200, 160, 106, 0.6)";
  g.lineWidth = 0.14;
  g.beginPath();
  g.ellipse(cx, Y(cd), rx * 1.27, rd * 1.27, 0, 0, Math.PI * 2);
  g.stroke();
}
g.strokeStyle = "#c79e66";
g.lineWidth = 0.06;
g.stroke(runDark);
g.strokeStyle = "#ead09f";
g.lineWidth = 0.05;
g.stroke(runPale);

// the shore road: two ruts and the trodden way between, from the right of the eye out past the bus stop and away
// along the dunes toward the shore
const road = new Path2D();
road.moveTo(18, Y(-8));
road.bezierCurveTo(15, Y(10), 13, Y(20), 17, Y(28));
road.bezierCurveTo(24, Y(40), 34, Y(60), 46, Y(90));
road.bezierCurveTo(54, Y(120), 62, Y(170), 70, Y(250));
g.strokeStyle = "rgba(186, 150, 104, 0.45)";
g.lineWidth = 2.4;
g.stroke(road);
for (const off of [-0.8, 0.8]) {
  g.save();
  g.translate(off, 0);
  g.strokeStyle = "rgba(160, 124, 82, 0.55)";
  g.lineWidth = 0.35;
  g.stroke(road);
  g.restore();
}

// footprints: his, along the rise from the left; the old man's, from his winch round to where he stands
g.fillStyle = "rgba(168, 128, 82, 0.55)";
const prints = (a0, d0, a1, d1) => {
  const dx = a1 - a0;
  const dy = Y(d1) - Y(d0);
  const len = Math.hypot(dx, dy);
  const n = Math.floor(len / 0.36);
  const ux = dx / len;
  const uy = dy / len;
  const rot = Math.atan2(uy, ux) + Math.PI / 2;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const side = i % 2 ? 0.09 : -0.09;
    const x = a0 + dx * t - uy * side + (r() - 0.5) * 0.03;
    const y = Y(d0) + dy * t + ux * side + (r() - 0.5) * 0.03;
    g.beginPath();
    g.ellipse(x, y, 0.05, 0.12, rot, 0, Math.PI * 2);
    g.fill();
  }
};
prints(-14, 1, -6, 3.2);
prints(-6, 3.2, -2.5, 5.0);
prints(2.2, 7.3, 3.0, 6.8);
