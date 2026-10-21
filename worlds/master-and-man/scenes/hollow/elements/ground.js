// The snow of the hollow, seen from above, lying over its banks (draped): fresh, deep, unbroken but for what the night
// has done — the long soft ridges the wind lays across it (finer near), blue hollows in the lee of the swells, the
// furrow the sleigh ploughed coming down the bank from the right and stopping where it sank, half filled again; the
// trampled grey round the sleigh and under the horse where Nikita worked; a few stalks' shadows of wormwood.
// (x −45…45 m across, y −30…30: y = 30 − distance; the viewer's feet at y 30)
const C = e.lib.C;
const D = d => 30 - d;

g.fillStyle = C.snow;
g.fillRect(-45, -30, 90, 60);

// blue hollows: broad soft patches in the lee of the swells
for (let i = 0; i < 40; i++) {
  const x = -45 + e.rnd() * 90, y = -30 + e.rnd() * 54;
  const r = 1.5 + e.rnd() * 5;
  const h = g.createRadialGradient(x, y, 0, x, y, r);
  h.addColorStop(0, "rgba(176,194,222,0.45)");
  h.addColorStop(1, "rgba(176,194,222,0)");
  g.fillStyle = h;
  g.save();
  g.translate(x, y);
  g.scale(1.8, 0.6);
  g.beginPath();
  g.arc(0, 0, r, 0, Math.PI * 2);
  g.restore();
  g.fill();
}

// the wind's ridges: long soft strokes lying across, a shade bluer and a shade whiter, finer and denser near
g.lineCap = "round";
for (let i = 0; i < 320; i++) {
  const near = i < 170;
  const y = near ? D(1.5 + e.rnd() * 10) : -30 + e.rnd() * 48;
  const x = -45 + e.rnd() * 90;
  const len = near ? 0.5 + e.rnd() * 1.8 : 3 + e.rnd() * 10;
  g.strokeStyle = e.rnd() < 0.55 ? "rgba(184,200,224,0.6)" : "rgba(250,252,255,0.7)";
  g.lineWidth = near ? 0.03 + e.rnd() * 0.05 : 0.1 + e.rnd() * 0.25;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + len * 0.5, y - len * 0.06, x + len, y + len * 0.02);
  g.stroke();
}

// the sleigh's furrow: from the right, down the bank, to where it stopped (the sleigh's back at about across 2.0,
// distance 3.7); two runner grooves in a broad ploughed trough, half filled with new snow
g.strokeStyle = "rgba(168,186,214,0.55)";
g.lineWidth = 1.3;
g.beginPath();
g.moveTo(2.0, D(3.7));
g.bezierCurveTo(5, D(5.6), 10, D(9), 16, D(15));
g.stroke();
g.strokeStyle = "rgba(146,166,198,0.6)";
g.lineWidth = 0.08;
for (const off of [-0.45, 0.45]) {
  g.beginPath();
  g.moveTo(2.0 + off * 0.5, D(3.7 - off * 0.8));
  g.bezierCurveTo(5 + off * 0.5, D(5.6 - off * 0.8), 10 + off * 0.6, D(9 - off * 0.7), 16 + off * 0.6, D(15 - off * 0.7));
  g.stroke();
}

// the trampled snow round the sleigh's front and under the horse: grey-blue, broken, footprints in it
const tr = g.createRadialGradient(-0.9, D(4.1), 0, -0.9, D(4.1), 2.4);
tr.addColorStop(0, "rgba(170,182,204,0.6)");
tr.addColorStop(1, "rgba(170,182,204,0)");
g.fillStyle = tr;
g.save();
g.translate(-0.9, D(4.1));
g.scale(1.5, 0.7);
g.beginPath();
g.arc(0, 0, 2.4, 0, Math.PI * 2);
g.restore();
g.fill();
g.fillStyle = "rgba(140,156,186,0.55)";
for (let i = 0; i < 26; i++) {
  const x = -2.8 + e.rnd() * 3.6, y = D(3.3 + e.rnd() * 2.4);
  g.beginPath();
  g.ellipse(x, y, 0.07, 0.13, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
