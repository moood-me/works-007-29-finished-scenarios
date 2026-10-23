// The right wall (x toward us: −2.5 at the back … 2.5 at its near end): boards laid across, a window cut through it
// (x −0.6…0.6, sill 1.3, head 2.5) with its cross bars; Niggle's sketches of leaves pinned round it; by its near end
// the card on its nail — the notice of the journey he has not packed for.
g.save();
g.beginPath();
g.rect(-2.5, -4.3, 5.0, 4.32);
g.rect(-0.6, -2.5, 1.2, 1.2);
g.clip('evenodd');
e.lib.planks(g, e, -2.5, -4.3, 2.5, 0.02, false, ['#8a7a66', '#827260', '#90806b', '#7c6c5a']);
g.restore();
// the window frame and its bars
g.strokeStyle = '#5e4d3c';
g.lineWidth = 0.08;
g.strokeRect(-0.62, -2.52, 1.24, 1.24);
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(0, -2.5);
g.lineTo(0, -1.3);
g.moveTo(-0.6, -1.9);
g.lineTo(0.6, -1.9);
g.stroke();
g.fillStyle = '#7a6650';
g.fillRect(-0.7, -1.32, 1.4, 0.06);
// the sketches: sheets of paper, a little askew, each with a leaf or a branch drawn on it
const sheets = [[-2.2, -2.75, 0.42, 0.55, -0.05], [-1.65, -2.45, 0.5, 0.38, 0.04], [-2.0, -1.95, 0.36, 0.48, 0.06], [-1.35, -1.75, 0.45, 0.34, -0.03], [0.95, -2.6, 0.4, 0.52, 0.05], [1.45, -2.25, 0.46, 0.36, -0.06]];
for (const [x, y, w, h, a] of sheets) {
  g.save();
  g.translate(x + w / 2, y + h / 2);
  g.rotate(a);
  g.fillStyle = 'rgba(40,30,20,0.25)';
  g.fillRect(-w / 2 + 0.015, -h / 2 + 0.015, w, h);
  g.fillStyle = '#e8e0cc';
  g.fillRect(-w / 2, -h / 2, w, h);
  g.strokeStyle = 'rgba(80,74,64,0.75)';
  g.lineWidth = 0.006;
  const n = 1 + Math.floor(e.rnd() * 3);
  for (let k = 0; k < n; k++) {
    const len = 0.12 + e.rnd() * 0.1;
    const lx = -w * 0.3 + e.rnd() * w * 0.2;
    const ly = -h * 0.2 + e.rnd() * h * 0.4;
    const la = -0.8 + e.rnd() * 1.2;
    g.save();
    g.translate(lx, ly);
    g.rotate(la);
    g.beginPath();
    g.moveTo(0, 0);
    g.bezierCurveTo(len * 0.3, -len * 0.32, len * 0.75, -len * 0.22, len, 0);
    g.bezierCurveTo(len * 0.75, len * 0.22, len * 0.3, len * 0.32, 0, 0);
    g.moveTo(0, 0);
    g.lineTo(len, 0);
    for (let v = 0.25; v < 0.9; v += 0.2) {
      g.moveTo(len * v, 0);
      g.lineTo(len * (v + 0.12), -len * 0.14);
      g.moveTo(len * v, 0);
      g.lineTo(len * (v + 0.12), len * 0.14);
    }
    g.stroke();
    if (e.rnd() < 0.5) e.lib.leaf(g, 0, 0, len, 0, 'rgba(120,140,90,0.45)', null);
    g.restore();
  }
  g.fillStyle = '#2f2a26';
  g.beginPath();
  g.arc(0, -h / 2 + 0.03, 0.012, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
// the card on its nail, by the bag: a few lines of writing too small to read
g.save();
g.translate(1.05, -1.3);
g.rotate(0.07);
g.fillStyle = '#efe8d6';
g.fillRect(-0.11, -0.07, 0.22, 0.14);
g.strokeStyle = 'rgba(60,50,45,0.6)';
g.lineWidth = 0.005;
for (let k = 0; k < 4; k++) {
  g.beginPath();
  g.moveTo(-0.085, -0.035 + k * 0.024);
  g.lineTo(0.06 - (k === 3 ? 0.05 : 0), -0.035 + k * 0.024);
  g.stroke();
}
g.fillStyle = '#2f2a26';
g.beginPath();
g.arc(0, -0.065, 0.01, 0, Math.PI * 2);
g.fill();
g.restore();
