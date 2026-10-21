// Mukhorty, the gelding, in harness, seen from his near side, his head to the LEFT (the card stands turned so that he
// comes toward the eye at the left, his body going away to the right — the sleigh behind him): a small strong
// peasant horse, bay-brown with tan markings — the muzzle, round the eye, the flank, the inside of the legs —, dark
// legs, a thick dark mane and tail, frost on his back. On him: the collar, the painted wooden bow over it, the near
// shaft running back to the sleigh, the saddle-pad with its straps, the bridle (Nikita holds him at the cheek).
// Drawn as a horse facing right, mirrored (g.scale(-1, 1)): the numbers below are the right-facing drawing's; the
// pivots and the points, given to the engine, are mirrored by hand (x negated).
// Layers: `tail` and `mane` bent by the wind; `head` nodding a little about the throat (animate).
// Points: `head`, `cheek` (where Nikita's hand lies), `nose` (his breath), `neck`.
// (x −1.55…2.25 m: the muzzle x −1.47, the rump x 0.95, the shaft's end at the sleigh x 2.2; its foot at 0)
const L = e.lib;
const C = L.C;
const COAT = "#5b4536";
const TAN = "#97806a";
const LEG = "#3e2b20";
const HAIR = "#2e211a";
const HOOF = "#38322c";
const FAR = "#47362b";
g.save();
g.scale(-1, 1);

// a leg: from its top (x, y) down to the hoof at (fx, 0), a joint at (kx, ky); w — its width at the top
function leg(x, y, kx, ky, fx, w, coat, lower) {
  g.fillStyle = coat;
  g.beginPath();
  g.moveTo(x - w / 2, y);
  g.quadraticCurveTo(kx - w * 0.45, (y + ky) / 2, kx - w * 0.22, ky);
  g.lineTo(fx - w * 0.17, -0.1);
  g.lineTo(fx + w * 0.17, -0.1);
  g.lineTo(kx + w * 0.22, ky);
  g.quadraticCurveTo(kx + w * 0.5, (y + ky) / 2, x + w / 2, y);
  g.closePath();
  g.fill();
  g.fillStyle = lower;
  g.beginPath();
  g.moveTo(kx - w * 0.22, ky + 0.06);
  g.lineTo(fx - w * 0.19, -0.08);
  g.lineTo(fx + w * 0.19, -0.08);
  g.lineTo(kx + w * 0.22, ky + 0.06);
  g.closePath();
  g.fill();
  // (the fetlock's tuft and the hoof)
  g.fillStyle = HAIR;
  g.beginPath();
  g.ellipse(fx - w * 0.1, -0.11, w * 0.2, 0.05, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = HOOF;
  g.beginPath();
  g.moveTo(fx - w * 0.2, -0.1);
  g.lineTo(fx - w * 0.26, 0);
  g.lineTo(fx + w * 0.3, 0);
  g.lineTo(fx + w * 0.2, -0.1);
  g.closePath();
  g.fill();
}

// the far legs, a shade darker, a little apart from the near ones
leg(-0.62, -1.0, -0.66, -0.48, -0.58, 0.2, FAR, "#2e2119");
leg(0.58, -0.9, 0.64, -0.46, 0.66, 0.15, FAR, "#2e2119");

// the body: the barrel, the haunch, the shoulder and the chest
g.fillStyle = COAT;
g.beginPath();
g.moveTo(0.42, -1.47);
g.bezierCurveTo(0.2, -1.42, 0.05, -1.38, -0.2, -1.4);
g.bezierCurveTo(-0.45, -1.43, -0.6, -1.48, -0.78, -1.42);
g.bezierCurveTo(-0.95, -1.36, -0.98, -1.15, -0.9, -0.98);
g.bezierCurveTo(-0.85, -0.85, -0.75, -0.8, -0.6, -0.88);
g.bezierCurveTo(-0.3, -0.84, 0.1, -0.8, 0.42, -0.84);
g.bezierCurveTo(0.62, -0.86, 0.76, -0.96, 0.78, -1.12);
g.bezierCurveTo(0.8, -1.3, 0.62, -1.46, 0.42, -1.47);
g.closePath();
g.fill();
// (the tan of the flank and the belly, soft-edged)
const flank = g.createRadialGradient(-0.05, -0.9, 0.05, -0.05, -0.9, 0.45);
flank.addColorStop(0, "rgba(168,120,79,0.75)");
flank.addColorStop(1, "rgba(168,120,79,0)");
g.fillStyle = flank;
g.beginPath();
g.ellipse(-0.05, -0.92, 0.55, 0.14, 0, 0, Math.PI * 2);
g.fill();
// the near hind leg: the thigh's big curve, the gaskin, the hock
g.fillStyle = COAT;
g.beginPath();
g.moveTo(-0.9, -1.3);
g.bezierCurveTo(-1.0, -1.05, -0.95, -0.8, -0.82, -0.62);
g.lineTo(-0.82, -0.5);
g.lineTo(-0.66, -0.5);
g.bezierCurveTo(-0.62, -0.72, -0.5, -0.9, -0.48, -1.15);
g.closePath();
g.fill();
leg(-0.74, -0.62, -0.75, -0.46, -0.7, 0.17, COAT, LEG);
// the near foreleg
leg(0.5, -0.95, 0.52, -0.46, 0.5, 0.16, COAT, LEG);
// (the tan inside of the forearm)
g.fillStyle = "rgba(151,128,106,0.6)";
g.beginPath();
g.ellipse(0.46, -0.66, 0.03, 0.14, 0, 0, Math.PI * 2);
g.fill();

// the neck: the crest up to the poll, the throat down to the chest
g.fillStyle = COAT;
g.beginPath();
g.moveTo(0.4, -1.46);
g.bezierCurveTo(0.6, -1.62, 0.8, -1.8, 0.96, -1.86);
g.lineTo(1.04, -1.6);
g.bezierCurveTo(0.95, -1.42, 0.85, -1.25, 0.78, -1.08);
g.lineTo(0.66, -1.2);
g.closePath();
g.fill();

// the frost on his back and croup: a dusting of white along the top line
g.fillStyle = "rgba(240,244,248,0.85)";
for (let i = 0; i < 40; i++) {
  const x = -0.82 + e.rnd() * 1.2;
  const top = x < -0.2 ? -1.42 - 0.04 * Math.sin((x + 0.8) * 5) : -1.4;
  g.beginPath();
  g.ellipse(x, top + 0.015 + e.rnd() * 0.03, 0.02 + e.rnd() * 0.03, 0.008, 0, 0, Math.PI * 2);
  g.fill();
}

// the saddle-pad, its girth round the belly and the strap down to the shaft
g.fillStyle = "#3a302a";
g.beginPath();
g.moveTo(-0.02, -1.44);
g.quadraticCurveTo(0.12, -1.5, 0.28, -1.45);
g.lineTo(0.27, -1.32);
g.lineTo(-0.01, -1.32);
g.closePath();
g.fill();
g.strokeStyle = "#3a302a";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0.13, -1.34);
g.lineTo(0.16, -0.83);
g.stroke();
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.2, -1.34);
g.lineTo(0.24, -0.98);
g.stroke();

// the near shaft: from the sleigh's front up to the collar
g.strokeStyle = "#7a6448";
g.lineWidth = 0.055;
g.beginPath();
g.moveTo(-2.2, -0.4);
g.quadraticCurveTo(-0.6, -0.86, 0.84, -1.14);
g.stroke();
g.strokeStyle = "#5e4b35";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-2.2, -0.38);
g.quadraticCurveTo(-0.6, -0.84, 0.84, -1.12);
g.stroke();

g.restore();

// the mane on the near side of the crest, hanging in locks: the wind bends it
e.layer("mane", { pivot: [-0.7, -1.68], wind: { strength: 0.3, gust: 0.6, scale: 0.6 } }, c => {
  c.save();
  c.scale(-1, 1);
  c.fillStyle = HAIR;
  c.beginPath();
  c.moveTo(0.36, -1.5);
  c.bezierCurveTo(0.58, -1.68, 0.8, -1.86, 0.97, -1.9);
  c.lineTo(0.98, -1.8);
  for (let i = 0; i <= 10; i++) {
    const u = i / 10;
    const x = 0.98 - u * 0.6;
    const y = -1.8 + u * 0.34;
    c.lineTo(x - 0.03, y + 0.1 + (i % 2) * 0.05);
    c.lineTo(x - 0.06, y + 0.02);
  }
  c.closePath();
  c.fill();
  c.restore();
});

// the collar and the bow sit over the mane: a layer of their own, painted after it (still)
e.layer("harness", {}, c => {
  c.save();
  c.scale(-1, 1);
  // the collar: a thick padded ring round the neck's base, its wooden hames along it
  c.strokeStyle = "#2f2621";
  c.lineWidth = 0.16;
  c.lineCap = "round";
  c.beginPath();
  c.moveTo(0.56, -1.6);
  c.quadraticCurveTo(0.66, -1.32, 0.82, -1.04);
  c.stroke();
  c.strokeStyle = "#8a6a46";
  c.lineWidth = 0.04;
  c.beginPath();
  c.moveTo(0.62, -1.62);
  c.quadraticCurveTo(0.72, -1.32, 0.88, -1.06);
  c.stroke();

  // the bow over the collar: bent ash, painted with a faded pattern, rising from the shafts' ends
  c.strokeStyle = "#6b5a44";
  c.lineWidth = 0.075;
  c.beginPath();
  c.moveTo(0.84, -1.12);
  c.bezierCurveTo(0.88, -1.6, 0.86, -2.0, 0.74, -2.24);
  c.stroke();
  c.strokeStyle = "#9a8160";
  c.lineWidth = 0.025;
  c.setLineDash([0.05, 0.06]);
  c.beginPath();
  c.moveTo(0.85, -1.2);
  c.bezierCurveTo(0.89, -1.6, 0.87, -2.0, 0.75, -2.2);
  c.stroke();
  c.setLineDash([]);
  L.snowCap(c, 0.68, 0.8, -2.26, 0.03, 71);
  c.restore();
});

// the tail: long, thick, hanging from the croup, its end swinging in the wind
e.layer("tail", { pivot: [0.9, -1.36], wind: { strength: 0.5, gust: 0.7, scale: 0.8 } }, c => {
  c.save();
  c.scale(-1, 1);
  c.fillStyle = HAIR;
  c.beginPath();
  c.moveTo(-0.86, -1.4);
  c.bezierCurveTo(-1.02, -1.3, -1.06, -1.0, -1.02, -0.72);
  c.bezierCurveTo(-1.0, -0.6, -1.08, -0.5, -1.06, -0.42);
  c.lineTo(-0.98, -0.5);
  c.lineTo(-0.94, -0.44);
  c.bezierCurveTo(-0.9, -0.62, -0.92, -0.9, -0.88, -1.12);
  c.bezierCurveTo(-0.86, -1.25, -0.82, -1.32, -0.86, -1.4);
  c.closePath();
  c.fill();
  c.restore();
});

// the head: from the poll down to the muzzle, a little lowered; the ears, the forelock, the eye, the tan of the
// muzzle and round the eye, the bridle and the bit — it nods about the throat
e.layer("head", { pivot: [-0.98, -1.66] }, c => {
  c.save();
  c.scale(-1, 1);
  c.fillStyle = COAT;
  c.beginPath();
  c.moveTo(0.94, -1.88);
  c.bezierCurveTo(1.04, -1.86, 1.12, -1.78, 1.2, -1.66);
  c.bezierCurveTo(1.3, -1.52, 1.4, -1.42, 1.46, -1.34);
  c.bezierCurveTo(1.5, -1.28, 1.47, -1.23, 1.4, -1.22);
  c.bezierCurveTo(1.34, -1.22, 1.3, -1.25, 1.24, -1.3);
  c.bezierCurveTo(1.14, -1.36, 1.06, -1.42, 1.02, -1.52);
  c.bezierCurveTo(0.98, -1.6, 0.94, -1.66, 0.94, -1.88);
  c.closePath();
  c.fill();
  // (the muzzle's tan, the round of the cheek a shade darker, the tan round the eye)
  c.fillStyle = TAN;
  c.beginPath();
  c.ellipse(1.42, -1.29, 0.075, 0.06, 0.6, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.ellipse(1.1, -1.69, 0.05, 0.035, 0.5, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = "#5e3f2b";
  c.beginPath();
  c.ellipse(1.07, -1.52, 0.09, 0.08, 0, 0, Math.PI * 2);
  c.fill();
  // (the eye, the nostril)
  c.fillStyle = "#1c1612";
  c.beginPath();
  c.ellipse(1.1, -1.69, 0.024, 0.017, 0.5, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.ellipse(1.43, -1.33, 0.018, 0.01, 0.9, 0, Math.PI * 2);
  c.fill();
  // (the ears, the forelock)
  c.fillStyle = COAT;
  c.beginPath();
  c.moveTo(0.93, -1.86);
  c.lineTo(0.9, -2.03);
  c.lineTo(1.0, -1.88);
  c.closePath();
  c.fill();
  c.fillStyle = FAR;
  c.beginPath();
  c.moveTo(0.98, -1.86);
  c.lineTo(1.0, -2.0);
  c.lineTo(1.05, -1.84);
  c.closePath();
  c.fill();
  c.fillStyle = HAIR;
  c.beginPath();
  c.moveTo(0.98, -1.88);
  c.quadraticCurveTo(1.1, -1.84, 1.12, -1.74);
  c.quadraticCurveTo(1.04, -1.8, 0.98, -1.8);
  c.closePath();
  c.fill();
  // (the bridle: the cheek strap, the noseband, the brow band; the bit's ring)
  c.strokeStyle = "#2a221d";
  c.lineWidth = 0.022;
  c.beginPath();
  c.moveTo(0.98, -1.85);
  c.lineTo(1.3, -1.3);
  c.moveTo(1.24, -1.48);
  c.lineTo(1.36, -1.38);
  c.moveTo(1.0, -1.82);
  c.lineTo(1.1, -1.8);
  c.stroke();
  c.strokeStyle = C.iron;
  c.lineWidth = 0.012;
  c.beginPath();
  c.arc(1.33, -1.28, 0.025, 0, Math.PI * 2);
  c.stroke();
  c.restore();
  e.at(-1.08, -1.66, "head");
  e.at(-1.2, -1.5, "cheek");
  e.at(-1.48, -1.3, "nose");
});
e.at(-1.08, -1.7);
e.at(-0.8, -1.5, "neck");
