// The sand of the pit, its walls and the dunes beyond the lip — one plane draped over the land (relief.js), seen from
// above: x = across, y = 8 − distance (the plane's middle at distance 8). Warm dry sand; wind ripples on the floor and
// on the dunes beyond the lip (none on the steep walls); on the walls the sand's own runs down the slope, paler and
// darker; the lip's edge catching the light; the floor trampled and dug before the house; footprints from the door to
// where he stands and from him to the foot of the far wall; the rope from the winch down the far wall to the bucket.
const r = e.lib.stream(11);
const R = (x, y) => e.lib.pitR(x, 8 - y);
g.fillStyle = "#d9b882";
g.fillRect(-22, -16, 44, 32);

// broad soft patches, a shade darker or paler
for (let i = 0; i < 16; i++) {
  const x = -20 + r() * 40;
  const y = -15 + r() * 30;
  const rad = 1.5 + r() * 3.5;
  const dark = r() < 0.5;
  const p = g.createRadialGradient(x, y, 0, x, y, rad);
  p.addColorStop(0, dark ? "rgba(196, 158, 104, 0.22)" : "rgba(236, 210, 160, 0.25)");
  p.addColorStop(1, dark ? "rgba(196, 158, 104, 0)" : "rgba(236, 210, 160, 0)");
  g.fillStyle = p;
  g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
}

// the trampled, dug floor before the house: a soft darker ground
const trodden = g.createRadialGradient(-1.6, 1.6, 0.3, -1.6, 1.6, 3.4);
trodden.addColorStop(0, "rgba(186, 146, 96, 0.32)");
trodden.addColorStop(1, "rgba(186, 146, 96, 0)");
g.fillStyle = trodden;
g.fillRect(-5.2, -2, 7.2, 7.2);

// wind ripples: broken crests across the wind, a shadowed line and a lit one behind it — on the floor and beyond the
// lip, not on the walls, fewer on the trodden ground
const ripples = new Path2D();
for (let y = -16; y < 16; y += 0.28 + r() * 0.12) {
  let x = -22 + r() * 1.5;
  while (x < 22) {
    const len = 0.6 + r() * 2.2;
    const mx = x + len / 2;
    const rr = R(mx, y);
    const tx = mx + 1.6;
    const ty = y - 1.6;
    const worn = tx * tx + ty * ty < 5.5;
    if (!(rr > 0.98 && rr < 1.33) && !(worn && r() < 0.8)) {
      const a = 0.04 + r() * 0.05;
      const ph = r() * 6;
      ripples.moveTo(x, y + a * Math.sin(ph));
      ripples.quadraticCurveTo(x + len * 0.5, y + (r() - 0.5) * 0.18, x + len, y + a * Math.sin(ph + 2));
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

// the walls: the sand running down them in long tongues, darker and paler, from just under the lip to the foot
const runDark = new Path2D();
const runPale = new Path2D();
for (let i = 0; i < 900; i++) {
  const th = r() * Math.PI * 2;
  const r0 = 1.0 + r() * 0.24;
  const r1 = Math.min(1.29, r0 + 0.03 + r() * 0.09);
  const a = e.lib.pitAt(r0, th);
  const b = e.lib.pitAt(r1, th);
  const p = r() < 0.55 ? runDark : runPale;
  p.moveTo(a[0], 8 - a[1]);
  p.lineTo(b[0], 8 - b[1]);
}
g.strokeStyle = "#c79e66";
g.lineWidth = 0.05;
g.stroke(runDark);
g.strokeStyle = "#ead09f";
g.lineWidth = 0.04;
g.stroke(runPale);

// the lip: its edge a clean paler line, a softer one just inside it where the sand breaks over
g.strokeStyle = "#f0dbaf";
g.lineWidth = 0.08;
g.beginPath();
g.ellipse(0.5, 3, 7.5 * 1.3, 6.5 * 1.3, 0, 0, Math.PI * 2);
g.stroke();
g.strokeStyle = "rgba(200, 160, 106, 0.6)";
g.lineWidth = 0.12;
g.beginPath();
g.ellipse(0.5, 3, 7.5 * 1.27, 6.5 * 1.27, 0, 0, Math.PI * 2);
g.stroke();

// where she digs, before the house: the shovel's scoops, short crescents
g.strokeStyle = "#bd935a";
g.lineWidth = 0.06;
for (let i = 0; i < 12; i++) {
  const x = -5.4 + r() * 4.2;
  const y = 1.8 + r() * 1.2;
  const rad = 0.18 + r() * 0.16;
  const turn = -0.4 + r() * 0.8;
  g.beginPath();
  g.arc(x, y, rad, Math.PI * 0.15 + turn, Math.PI * 0.85 + turn);
  g.stroke();
}

// footprints: from the door to where he stands, from him to the foot of the far wall, from the door to the barrel
g.fillStyle = "rgba(168, 128, 82, 0.55)";
const prints = (a0, d0, a1, d1) => {
  const dx = a1 - a0;
  const dy = (8 - d1) - (8 - d0);
  const len = Math.hypot(dx, dy);
  const n = Math.floor(len / 0.34);
  const ux = dx / len;
  const uy = dy / len;
  const rot = Math.atan2(uy, ux) + Math.PI / 2;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const side = i % 2 ? 0.09 : -0.09;
    const x = a0 + dx * t - uy * side + (r() - 0.5) * 0.03;
    const y = 8 - d0 + dy * t + ux * side + (r() - 0.5) * 0.03;
    g.beginPath();
    g.ellipse(x, y, 0.05, 0.12, rot, 0, Math.PI * 2);
    g.fill();
  }
};
prints(-2.4, 6.3, 1.0, 5.25);
prints(1.4, 5.8, -0.6, 10.9);
prints(-2.2, 6.4, -1.0, 6.6);

// the rope from the winch on the lip down the far wall to the bucket at its foot
g.strokeStyle = "#6e5538";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-0.92, 8 - 13.62);
g.quadraticCurveTo(-0.78, 8 - 12.4, -0.88, 8 - 11.42);
g.stroke();
