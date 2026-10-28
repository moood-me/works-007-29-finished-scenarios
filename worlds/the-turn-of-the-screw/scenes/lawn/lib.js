// What the tower's two faces share: their old stone and their battlements (metres, x along the face, y up negative).
// rnd — the painting's own seeded random.
function stone(g, rnd, x0, x1, top) {
  g.fillStyle = '#aba493';
  g.fillRect(x0, top, x1 - x0, -top);
  // the courses: rows of blocks of uneven lengths, their joints a little darker
  g.strokeStyle = 'rgba(78,72,60,0.28)';
  g.lineWidth = 0.025;
  for (let y = -0.45, row = 0; y > top; y -= 0.45, row++) {
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x1, y);
    let x = x0 + (row % 2) * 0.4;
    while (x < x1) {
      g.moveTo(x, y);
      g.lineTo(x, y + 0.45);
      x += 0.6 + rnd() * 0.55;
    }
    g.stroke();
  }
  // a few blocks of another tone, the stone mended over centuries
  for (let i = 0; i < 70; i++) {
    const x = x0 + rnd() * (x1 - x0 - 0.8);
    const y = top + 1.5 + rnd() * (-top - 2);
    g.fillStyle = rnd() < 0.5 ? 'rgba(150,142,124,0.55)' : 'rgba(186,178,160,0.5)';
    g.fillRect(x, Math.round(y / 0.45) * 0.45 - 0.45, 0.6 + rnd() * 0.4, 0.45);
  }
  // weathering: dark streaks run down from the parapet and the string courses
  for (let i = 0; i < 16; i++) {
    const x = x0 + rnd() * (x1 - x0);
    const y = top + 1 + Math.floor(rnd() * 3) * 7;
    const h = 2 + rnd() * 5;
    const r = g.createLinearGradient(0, y, 0, y + h);
    r.addColorStop(0, 'rgba(70,66,58,0.3)');
    r.addColorStop(1, 'rgba(70,66,58,0)');
    g.fillStyle = r;
    g.fillRect(x, y, 0.15 + rnd() * 0.4, h);
  }
  // the string courses and their shadow lines; the corbel table under the parapet
  for (const y of [-7.2, -14.2]) {
    g.fillStyle = '#bfb8a6';
    g.fillRect(x0, y - 0.22, x1 - x0, 0.22);
    g.fillStyle = 'rgba(60,55,46,0.35)';
    g.fillRect(x0, y, x1 - x0, 0.08);
  }
  g.fillStyle = '#b8b19f';
  g.fillRect(x0, top + 1.55, x1 - x0, 0.25);
  for (let x = x0 + 0.15; x < x1 - 0.2; x += 0.55) {
    g.fillStyle = '#b8b19f';
    g.fillRect(x, top + 1.8, 0.28, 0.3);
    g.fillStyle = 'rgba(60,55,46,0.4)';
    g.fillRect(x, top + 2.1, 0.28, 0.05);
  }
}
// the battlements: the parapet's top cut into merlons and crenels (top: the merlons' top)
function battlements(g, x0, x1, top) {
  const n = Math.max(2, Math.round((x1 - x0 + 0.45) / 1.3));
  const step = (x1 - x0 + 0.45) / n;
  g.save();
  g.globalCompositeOperation = 'destination-out';
  for (let k = 0; k < n - 1; k++) g.fillRect(x0 + k * step + step - 0.45, top - 0.05, 0.45, 0.8);
  g.restore();
  g.fillStyle = 'rgba(60,55,46,0.35)';
  for (let k = 0; k < n - 1; k++) g.fillRect(x0 + k * step + step - 0.45, top + 0.75, 0.45, 0.05);
}
// a narrow pointed window: dark, its stone dressing round it
function lancet(g, x, bottom, w, h) {
  const path = () => {
    g.beginPath();
    g.moveTo(x - w / 2, bottom);
    g.lineTo(x - w / 2, bottom - h + w * 0.8);
    g.quadraticCurveTo(x - w / 2, bottom - h, x, bottom - h - w * 0.15);
    g.quadraticCurveTo(x + w / 2, bottom - h, x + w / 2, bottom - h + w * 0.8);
    g.lineTo(x + w / 2, bottom);
    g.closePath();
  };
  g.save();
  g.translate(x, bottom);
  g.scale(1.45, 1.12);
  g.translate(-x, -bottom);
  g.fillStyle = '#bdb6a3';
  path();
  g.fill();
  g.restore();
  g.fillStyle = '#26282d';
  path();
  g.fill();
}
// the jackdaws over the tower: where each is painted [x, y] (metres from the parapet's middle top), how wide it
// wheels (m), how fast (radians a second; − the other way round), its phase
const JACKDAWS = [
  [-3.5, -2.5, 3.2, 0.55, 0],
  [2.5, -4.0, 2.6, -0.62, 1.7],
  [4.5, -1.8, 3.6, 0.48, 3.1],
  [-1.0, -5.5, 2.2, -0.7, 4.4],
  [0.8, -2.2, 4.0, 0.42, 2.2],
  [-5.0, -4.2, 2.8, -0.5, 5.3],
];
return { stone, battlements, lancet, JACKDAWS };
