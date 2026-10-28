// Mukhorty, the gelding, in harness, seen from his near side, his head to the LEFT (the card stands turned a little —
// facing 160 —, so his head comes toward the eye at the left and his body goes back to the right, the sleigh behind
// him): a small strong peasant horse in his shaggy winter coat — bay-brown with tan markings ("подпалины": the
// muzzle, round the eye, the flank, the belly, the inside of the legs), dark legs with feathered fetlocks, a thick dark
// mane falling on his near side and a long tail, rime on his back. A horse's true build: a short back, a deep round
// barrel, a big rump, a thick crested neck, a big plain head; forelegs with their forearm, knee, cannon, fetlock and
// pastern; hind legs with the gaskin and the hock bent back.
// His harness, Russian: the collar (хомут) round the neck's base, its wooden hames along its front; the shaft-bow (дуга)
// rising over the withers from the shafts' ends; the near shaft (оглобля) running back to the sleigh; the saddle-pad
// (седёлка) on his back with its girth; the breeching (шлея) round the hindquarters; the bridle; the reins (вожжи)
// from the bit back through the collar to the sleigh. Nikita holds him by the bit (the point `bit`).
// Drawn as a horse facing right, mirrored (g.scale(-1, 1)): the numbers below are the right-facing drawing's; the
// pivots and the points, given to the engine, are mirrored by hand (x negated).
// Layers: `mane` and `tail` bent by the wind; `harness` (still, over the mane); `head` nodding a little about the
// throat (animate).
// Points: `head`, `cheek`, `nose` (his breath), `bit` (where Nikita's hand holds him), `neck`.
// (right-facing: the muzzle at x 1.53, the chest 0.97, the rump −1.04, the tail −1.12, the shaft's end at the sleigh
// −1.76; mirrored, x −1.55…1.8; its foot at 0, the bow's top at 2.24)
const L = e.lib;
const C = L.C;
const COAT = "#5d4433";
const COAT_DARK = "#47342a";
const TAN = "#a8835d";
const LEG = "#33261e";
const FAR = "#3e2e25";
const FAR_LEG = "#2a1f19";
const HAIR = "#241a15";
const HOOF = "#2c2824";
const LEATHER = "#2a221d";
const WOOD = "#7b5d3f";
const RIME = "rgba(240,244,250,0.9)";
const rnd = () => e.rnd();

g.save();
g.scale(-1, 1);

// a foreleg standing at x (the hoof's middle): the forearm's muscle tapering to a flat broad knee, a straight cannon,
// the fetlock's round joint with its tuft of hair behind, the sloping pastern, the hoof; below the knee its own
// colour (darker)
function fore(x, coat, low) {
  g.fillStyle = coat;
  g.beginPath();
  g.moveTo(x - 0.12, -0.9);
  g.lineTo(x + 0.1, -0.96);
  g.quadraticCurveTo(x + 0.11, -0.7, x + 0.065, -0.5);
  g.lineTo(x + 0.07, -0.43);
  g.lineTo(x - 0.05, -0.43);
  g.lineTo(x - 0.055, -0.5);
  g.quadraticCurveTo(x - 0.08, -0.7, x - 0.12, -0.9);
  g.closePath();
  g.fill();
  lower(x, low, 0.045, -0.035, -0.47);
}
// a hind leg standing at x: the gaskin's muscle down and back to the hock's sharp point, the cannon straight down
// from it, the fetlock, pastern and hoof as a foreleg's
function hind(x, coat, low) {
  g.fillStyle = coat;
  g.beginPath();
  g.moveTo(x - 0.06, -0.94);
  g.lineTo(x + 0.13, -0.88);
  g.quadraticCurveTo(x + 0.1, -0.66, x + 0.03, -0.52);
  g.lineTo(x + 0.035, -0.44);
  g.lineTo(x - 0.06, -0.44);
  g.lineTo(x - 0.11, -0.54);
  g.quadraticCurveTo(x - 0.12, -0.7, x - 0.17, -0.84);
  g.closePath();
  g.fill();
  lower(x, low, 0.035, -0.05, -0.5);
}
// a leg below the knee or the hock: the cannon from y0 down, the fetlock, the pastern, the hoof, the feathering
function lower(x, low, front, back, y0) {
  g.fillStyle = low;
  g.beginPath();
  g.moveTo(x + front + 0.012, y0);
  g.lineTo(x + front, -0.18);
  g.quadraticCurveTo(x + front + 0.03, -0.13, x + front + 0.02, -0.1);
  g.lineTo(x + 0.08, -0.06);
  g.lineTo(x - 0.06, -0.06);
  g.quadraticCurveTo(x + back - 0.05, -0.1, x + back - 0.02, -0.17);
  g.lineTo(x + back, y0 + 0.04);
  g.closePath();
  g.fill();
  // (the feathering: long hair falling over the fetlock and the heel)
  g.fillStyle = HAIR;
  g.beginPath();
  g.moveTo(x + back + 0.01, -0.2);
  g.quadraticCurveTo(x + back - 0.07, -0.12, x + back - 0.06, -0.035);
  g.lineTo(x + back - 0.02, -0.06);
  g.lineTo(x + back + 0.0, -0.025);
  g.lineTo(x + 0.02, -0.07);
  g.quadraticCurveTo(x + 0.0, -0.14, x + back + 0.01, -0.2);
  g.closePath();
  g.fill();
  // (the hoof: dark horn, wider at the ground, a little snow over its toe)
  g.fillStyle = HOOF;
  g.beginPath();
  g.moveTo(x - 0.055, -0.075);
  g.lineTo(x + 0.07, -0.075);
  g.lineTo(x + 0.11, 0.0);
  g.lineTo(x - 0.07, 0.0);
  g.closePath();
  g.fill();
  g.fillStyle = C.snow;
  g.beginPath();
  g.ellipse(x + 0.02, 0.0, 0.11, 0.03, 0, Math.PI, 0);
  g.fill();
}

// the far legs, a shade darker, a little behind the near ones
fore(0.6, FAR, FAR_LEG);
hind(-0.64, FAR, FAR_LEG);

// the body: withers, a short back, the loin, the big round croup, the buttock down to the gaskin, the stifle, the
// belly's deep curve, the girth, the elbow, the chest, the point of the shoulder
const body = new Path2D();
body.moveTo(0.58, -1.44);
body.bezierCurveTo(0.42, -1.42, 0.3, -1.36, 0.18, -1.36);
body.bezierCurveTo(-0.1, -1.36, -0.32, -1.46, -0.56, -1.46);
body.bezierCurveTo(-0.78, -1.46, -0.9, -1.42, -0.97, -1.33);
body.bezierCurveTo(-1.05, -1.24, -1.07, -1.1, -1.03, -1.0);
body.bezierCurveTo(-1.0, -0.9, -0.96, -0.8, -0.82, -0.74);
body.lineTo(-0.62, -0.74);
body.bezierCurveTo(-0.6, -0.8, -0.58, -0.84, -0.52, -0.86);
body.bezierCurveTo(-0.36, -0.76, -0.16, -0.7, 0.04, -0.71);
body.bezierCurveTo(0.24, -0.72, 0.4, -0.76, 0.52, -0.82);
body.bezierCurveTo(0.64, -0.86, 0.78, -0.86, 0.88, -0.92);
body.bezierCurveTo(0.95, -0.98, 0.98, -1.06, 0.97, -1.14);
body.bezierCurveTo(0.92, -1.3, 0.76, -1.43, 0.58, -1.44);
body.closePath();
g.fillStyle = COAT;
g.fill(body);

// the neck: thick, its crest arched up to the poll, its underside down from the throat into the chest
const neck = new Path2D();
neck.moveTo(0.46, -1.38);
neck.bezierCurveTo(0.62, -1.6, 0.84, -1.8, 1.0, -1.86);
neck.lineTo(1.1, -1.76);
neck.bezierCurveTo(1.1, -1.5, 1.02, -1.26, 0.97, -1.08);
neck.lineTo(0.68, -1.08);
neck.closePath();
g.fill(neck);

// the coat's colour round the body: darker along the back and the top of the neck, the tan of the flank and the
// belly, a lighter round over the hip and the shoulder (the muscles under the winter coat)
g.save();
g.clip(body);
const back = g.createLinearGradient(0, -1.48, 0, -1.12);
back.addColorStop(0, "rgba(52,37,29,0.7)");
back.addColorStop(1, "rgba(52,37,29,0)");
g.fillStyle = back;
g.fillRect(-1.1, -1.5, 2.1, 0.4);
const belly = g.createLinearGradient(0, -1.0, 0, -0.7);
belly.addColorStop(0, "rgba(168,131,93,0)");
belly.addColorStop(1, "rgba(168,131,93,0.75)");
g.fillStyle = belly;
g.fillRect(-0.62, -1.0, 1.25, 0.32);
for (const [x, y, rx, ry, c] of [[-0.66, -1.18, 0.26, 0.2, "rgba(122,92,70,0.45)"], [0.74, -1.1, 0.16, 0.2, "rgba(122,92,70,0.4)"], [-0.48, -0.92, 0.2, 0.1, "rgba(168,131,93,0.45)"]]) {
  const r = g.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
  r.addColorStop(0, c);
  r.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = r;
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  g.fill();
}
// (the winter coat: short strokes of hair, lighter and darker, lying back along him)
g.lineCap = "round";
for (let i = 0; i < 260; i++) {
  const x = -1.05 + rnd() * 2.05;
  const y = -1.48 + rnd() * 0.8;
  const len = 0.04 + rnd() * 0.06;
  g.strokeStyle = rnd() < 0.5 ? "rgba(120,92,70,0.35)" : "rgba(40,28,22,0.3)";
  g.lineWidth = 0.008 + rnd() * 0.008;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x - len, y + len * 0.35);
  g.stroke();
}
g.restore();
g.save();
g.clip(neck);
const crest = g.createLinearGradient(0.6, -1.8, 0.9, -1.3);
crest.addColorStop(0, "rgba(52,37,29,0.6)");
crest.addColorStop(1, "rgba(52,37,29,0)");
g.fillStyle = crest;
g.fillRect(0.4, -1.9, 0.75, 0.85);
g.restore();

// the near legs over the body
hind(-0.8, COAT, LEG);
fore(0.76, COAT, LEG);
// (the tan inside of the near forearm and gaskin)
g.fillStyle = "rgba(168,131,93,0.5)";
g.beginPath();
g.ellipse(0.71, -0.72, 0.035, 0.15, 0, 0, Math.PI * 2);
g.ellipse(-0.83, -0.7, 0.04, 0.12, -0.3, 0, Math.PI * 2);
g.fill();

// rime on his back and croup: a dusting of white along the top line, thicker on the croup
g.fillStyle = RIME;
for (let i = 0; i < 70; i++) {
  const x = -0.95 + rnd() * 1.45;
  const top = x < -0.56 ? -1.46 + 0.13 * ((x + 0.56) / 0.4) ** 2 : x < 0.18 ? -1.36 - 0.1 * ((0.18 - x) / 0.74) : -1.36 - 0.08 * ((x - 0.18) / 0.4);
  g.beginPath();
  g.ellipse(x, top + 0.012 + rnd() * 0.03, 0.015 + rnd() * 0.035, 0.008, 0, 0, Math.PI * 2);
  g.fill();
}

// the breeching: a strap from the collar back along his side, round the buttocks, held up by a strap over the loin
g.strokeStyle = LEATHER;
g.lineCap = "round";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(0.72, -1.2);
g.bezierCurveTo(0.2, -1.04, -0.5, -1.04, -1.0, -1.08);
g.stroke();
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-0.45, -1.45);
g.quadraticCurveTo(-0.48, -1.25, -0.5, -1.06);
g.moveTo(-0.75, -1.44);
g.quadraticCurveTo(-0.8, -1.25, -0.84, -1.07);
g.stroke();
// the saddle-pad on his back, its girth round the belly, the strap from it down to the shaft
g.fillStyle = "#3a302a";
g.beginPath();
g.moveTo(0.05, -1.4);
g.quadraticCurveTo(0.2, -1.47, 0.36, -1.42);
g.lineTo(0.34, -1.28);
g.lineTo(0.06, -1.28);
g.closePath();
g.fill();
L.snowCap(g, 0.08, 0.32, -1.44, 0.025, 74);
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(0.2, -1.3);
g.lineTo(0.24, -0.73);
g.stroke();
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0.3, -1.3);
g.lineTo(0.32, -1.0);
g.stroke();

// the near shaft: from the sleigh's front up along his side to the collar, a little past it where the bow is tied
g.strokeStyle = "#76604a";
g.lineWidth = 0.065;
g.beginPath();
g.moveTo(-1.76, -0.44);
g.quadraticCurveTo(-0.5, -0.82, 1.0, -1.1);
g.stroke();
g.strokeStyle = "#5a4836";
g.lineWidth = 0.018;
g.beginPath();
g.moveTo(-1.76, -0.42);
g.quadraticCurveTo(-0.5, -0.8, 1.0, -1.08);
g.stroke();
L.snowCap(g, -1.5, -0.6, -0.55, 0.02, 75);

// the reins: from the bit back through the collar's ring, along his side, down to the sleigh
g.strokeStyle = LEATHER;
g.lineWidth = 0.016;
g.beginPath();
g.moveTo(1.41, -1.33);
g.quadraticCurveTo(1.1, -1.3, 0.86, -1.32);
g.quadraticCurveTo(0.0, -1.18, -1.72, -0.78);
g.stroke();
g.restore();

// the mane on the near side of the crest: thick, shaggy, hanging in locks with rime on it — the wind bends it
e.layer("mane", { pivot: [-0.75, -1.65], wind: { strength: 0.3, gust: 0.6, scale: 0.6 } }, c => {
  c.save();
  c.scale(-1, 1);
  c.fillStyle = HAIR;
  c.beginPath();
  c.moveTo(0.4, -1.42);
  c.bezierCurveTo(0.58, -1.64, 0.82, -1.86, 1.02, -1.9);
  c.lineTo(1.04, -1.8);
  const n = 12;
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    const x = 1.02 - u * 0.62;
    const y = -1.8 + u * 0.36 + 0.06 * Math.sin(u * Math.PI);
    c.lineTo(x - 0.02, y + 0.13 + (i % 3) * 0.04);
    c.lineTo(x - 0.05, y + 0.04);
  }
  c.closePath();
  c.fill();
  // (lighter strands in it, and the rime on its top)
  c.strokeStyle = "rgba(78,60,48,0.8)";
  c.lineWidth = 0.012;
  for (let i = 0; i < 16; i++) {
    const u = rnd();
    const x = 1.0 - u * 0.58;
    const y = -1.84 + u * 0.36;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x - 0.03, y + 0.12 + rnd() * 0.06);
    c.stroke();
  }
  c.fillStyle = RIME;
  for (let i = 0; i < 18; i++) {
    const u = rnd();
    c.beginPath();
    c.ellipse(1.0 - u * 0.58, -1.86 + u * 0.38 + rnd() * 0.04, 0.02 + rnd() * 0.02, 0.008, -0.6, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();
});

// the collar and the bow over the mane: a layer of their own, still
e.layer("harness", {}, c => {
  c.save();
  c.scale(-1, 1);
  c.lineCap = "round";
  // the collar: a thick padded ring of dark leather round the neck's base, from over the withers down round the chest;
  // its wooden hames along its front
  c.strokeStyle = LEATHER;
  c.lineWidth = 0.15;
  c.beginPath();
  c.moveTo(0.62, -1.64);
  c.bezierCurveTo(0.68, -1.42, 0.78, -1.2, 0.92, -1.02);
  c.stroke();
  c.strokeStyle = "#4a3c32";
  c.lineWidth = 0.05;
  c.beginPath();
  c.moveTo(0.6, -1.66);
  c.bezierCurveTo(0.64, -1.44, 0.74, -1.22, 0.86, -1.04);
  c.stroke();
  c.strokeStyle = "#8d6b47";
  c.lineWidth = 0.035;
  c.beginPath();
  c.moveTo(0.7, -1.66);
  c.bezierCurveTo(0.76, -1.42, 0.86, -1.2, 0.99, -1.04);
  c.stroke();
  L.snowCap(c, 0.57, 0.72, -1.7, 0.03, 76);

  // the shaft-bow: bent ash, painted long ago — a faded red band and pale flowers along it —, rising from the shafts'
  // ends by the collar up over the withers
  c.strokeStyle = WOOD;
  c.lineWidth = 0.085;
  c.beginPath();
  c.moveTo(0.98, -1.1);
  c.bezierCurveTo(1.0, -1.62, 0.92, -2.0, 0.74, -2.2);
  c.stroke();
  c.strokeStyle = "rgba(150,70,52,0.75)";
  c.lineWidth = 0.035;
  c.beginPath();
  c.moveTo(0.985, -1.2);
  c.bezierCurveTo(1.0, -1.62, 0.92, -1.98, 0.76, -2.16);
  c.stroke();
  c.fillStyle = "rgba(226,214,184,0.85)";
  for (let i = 1; i < 7; i++) {
    const u = i / 7;
    const x = 0.98 + 0.02 * Math.sin(u * Math.PI) - 0.24 * u ** 2;
    const y = -1.15 - 1.05 * u;
    c.beginPath();
    c.arc(x, y, 0.014, 0, Math.PI * 2);
    c.fill();
  }
  L.snowCap(c, 0.68, 0.84, -2.22, 0.035, 71);
  c.restore();
});

// the tail: long and thick, from the root down past the hocks, its strands parting, its end swinging in the wind
e.layer("tail", { pivot: [0.97, -1.36], wind: { strength: 0.5, gust: 0.7, scale: 0.8 } }, c => {
  c.save();
  c.scale(-1, 1);
  c.fillStyle = HAIR;
  c.beginPath();
  c.moveTo(-0.95, -1.4);
  c.bezierCurveTo(-1.08, -1.34, -1.14, -1.1, -1.13, -0.86);
  c.bezierCurveTo(-1.12, -0.62, -1.16, -0.44, -1.12, -0.3);
  c.lineTo(-1.07, -0.36);
  c.lineTo(-1.04, -0.28);
  c.lineTo(-1.01, -0.38);
  c.bezierCurveTo(-1.0, -0.6, -1.02, -0.9, -1.0, -1.12);
  c.bezierCurveTo(-0.99, -1.26, -0.95, -1.32, -0.95, -1.4);
  c.closePath();
  c.fill();
  c.strokeStyle = "rgba(78,60,48,0.8)";
  c.lineWidth = 0.01;
  for (const dx of [-0.02, 0.02, 0.05]) {
    c.beginPath();
    c.moveTo(-1.02 + dx * 0.5, -1.3);
    c.quadraticCurveTo(-1.1 + dx, -0.9, -1.08 + dx, -0.45);
    c.stroke();
  }
  c.restore();
});

// the head: big and plain, a little lowered — the poll, the broad forehead, the straight face, the soft muzzle, the
// round jowl; the ears, the forelock, the eye, the nostril, the tan of the muzzle and round the eye; the bridle and
// the bit — it nods about the throat
e.layer("head", { pivot: [-1.05, -1.66] }, c => {
  c.save();
  c.scale(-1, 1);
  const head = new Path2D();
  head.moveTo(0.98, -1.88);
  head.bezierCurveTo(1.06, -1.92, 1.14, -1.88, 1.18, -1.82);
  head.bezierCurveTo(1.3, -1.66, 1.44, -1.52, 1.5, -1.42);
  head.bezierCurveTo(1.55, -1.36, 1.54, -1.3, 1.48, -1.28);
  head.bezierCurveTo(1.44, -1.25, 1.38, -1.26, 1.34, -1.28);
  head.bezierCurveTo(1.28, -1.32, 1.2, -1.36, 1.14, -1.42);
  head.bezierCurveTo(1.06, -1.48, 1.02, -1.56, 1.04, -1.62);
  head.bezierCurveTo(1.04, -1.72, 0.96, -1.8, 0.98, -1.88);
  head.closePath();
  c.fillStyle = COAT;
  c.fill(head);
  c.save();
  c.clip(head);
  // (the jowl's round, darker; the tan of the muzzle, soft-edged; the tan round the eye)
  c.fillStyle = COAT_DARK;
  c.beginPath();
  c.ellipse(1.13, -1.5, 0.11, 0.1, 0, 0, Math.PI * 2);
  c.fill();
  const muzzle = c.createRadialGradient(1.47, -1.32, 0.01, 1.47, -1.32, 0.13);
  muzzle.addColorStop(0, TAN);
  muzzle.addColorStop(0.6, "rgba(168,131,93,0.7)");
  muzzle.addColorStop(1, "rgba(168,131,93,0)");
  c.fillStyle = muzzle;
  c.fillRect(1.3, -1.48, 0.3, 0.25);
  c.restore();
  const brow = c.createRadialGradient(1.13, -1.71, 0.005, 1.13, -1.71, 0.06);
  brow.addColorStop(0, TAN);
  brow.addColorStop(1, "rgba(168,131,93,0)");
  c.fillStyle = brow;
  c.beginPath();
  c.ellipse(1.13, -1.71, 0.06, 0.045, 0.6, 0, Math.PI * 2);
  c.fill();
  // (the eye: dark, big, a glint of the sky in it; the nostril; the mouth's line)
  c.fillStyle = "#16110e";
  c.beginPath();
  c.ellipse(1.13, -1.71, 0.028, 0.02, 0.6, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = "rgba(220,230,244,0.85)";
  c.beginPath();
  c.arc(1.137, -1.716, 0.006, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = "#2a1d16";
  c.beginPath();
  c.ellipse(1.47, -1.38, 0.022, 0.012, 1.0, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = "#2a1d16";
  c.lineWidth = 0.008;
  c.beginPath();
  c.moveTo(1.5, -1.3);
  c.quadraticCurveTo(1.45, -1.31, 1.4, -1.3);
  c.stroke();
  // (the ears: the near one, the far one behind it; the forelock falling over the forehead)
  c.fillStyle = FAR;
  c.beginPath();
  c.moveTo(1.0, -1.88);
  c.quadraticCurveTo(1.0, -1.98, 1.04, -2.04);
  c.quadraticCurveTo(1.08, -1.96, 1.08, -1.87);
  c.closePath();
  c.fill();
  c.fillStyle = COAT;
  c.beginPath();
  c.moveTo(0.93, -1.86);
  c.quadraticCurveTo(0.9, -1.97, 0.94, -2.05);
  c.quadraticCurveTo(1.01, -1.96, 1.02, -1.87);
  c.closePath();
  c.fill();
  c.fillStyle = HAIR;
  c.beginPath();
  c.moveTo(0.98, -1.9);
  c.bezierCurveTo(1.08, -1.9, 1.16, -1.84, 1.2, -1.74);
  c.lineTo(1.17, -1.76);
  c.lineTo(1.16, -1.7);
  c.bezierCurveTo(1.1, -1.8, 1.04, -1.82, 0.98, -1.82);
  c.closePath();
  c.fill();
  // (the bridle: the cheek strap from behind the ears down to the bit, the noseband, the browband; the bit's ring)
  c.strokeStyle = LEATHER;
  c.lineWidth = 0.024;
  c.lineCap = "round";
  c.beginPath();
  c.moveTo(1.0, -1.86);
  c.quadraticCurveTo(1.12, -1.6, 1.38, -1.33);
  c.moveTo(1.25, -1.52);
  c.lineTo(1.39, -1.42);
  c.moveTo(1.02, -1.83);
  c.lineTo(1.14, -1.8);
  c.stroke();
  c.strokeStyle = C.iron;
  c.lineWidth = 0.012;
  c.beginPath();
  c.arc(1.41, -1.32, 0.028, 0, Math.PI * 2);
  c.stroke();
  c.restore();
  e.at(-1.1, -1.72, "head");
  e.at(-1.15, -1.52, "cheek");
  e.at(-1.5, -1.36, "nose");
  e.at(-1.41, -1.32, "bit");
});
e.at(-1.1, -1.75);
e.at(-0.8, -1.5, "neck");
