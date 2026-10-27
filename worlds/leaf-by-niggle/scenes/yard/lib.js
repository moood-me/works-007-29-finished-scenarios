// What the yard's boards share (as the shed's): weathered planks over x0…x1, y0…y1 (metres, the caller's), running
// up and down (`upright`) or across, each a little different in tone, with dark seams, a few knots and nail heads.
// `tones` — the wood's colours; the caller clips holes (a door, a window) itself.
function planks(g, e, x0, y0, x1, y1, upright, tones) {
  const w = x1 - x0;
  const h = y1 - y0;
  g.save();
  g.beginPath();
  g.rect(x0, y0, w, h);
  g.clip();
  g.fillStyle = tones[0];
  g.fillRect(x0, y0, w, h);
  const B = 0.17;
  const span = upright ? w : h;
  for (let s = 0; s < span; s += B) {
    const b = Math.min(B, span - s);
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    if (upright) g.fillRect(x0 + s + 0.008, y0, b - 0.016, h);
    else g.fillRect(x0, y0 + s + 0.008, w, b - 0.016);
    // the grain: a few long faint streaks along the board
    g.strokeStyle = 'rgba(60,46,34,0.16)';
    g.lineWidth = 0.006;
    for (let k = 0; k < 3; k++) {
      const o = s + 0.02 + e.rnd() * (b - 0.04);
      g.beginPath();
      if (upright) {
        g.moveTo(x0 + o, y0);
        g.bezierCurveTo(x0 + o + 0.02, y0 + h * 0.3, x0 + o - 0.02, y0 + h * 0.7, x0 + o + 0.01, y1);
      } else {
        g.moveTo(x0, y0 + o);
        g.bezierCurveTo(x0 + w * 0.3, y0 + o + 0.015, x0 + w * 0.7, y0 + o - 0.015, x1, y0 + o + 0.008);
      }
      g.stroke();
    }
    // a knot now and then
    if (e.rnd() < 0.5) {
      const a = upright ? x0 + s + b / 2 : x0 + e.rnd() * w;
      const c = upright ? y0 + e.rnd() * h : y0 + s + b / 2;
      g.fillStyle = 'rgba(70,52,38,0.45)';
      g.beginPath();
      g.ellipse(a, c, upright ? 0.025 : 0.04, upright ? 0.04 : 0.025, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
  // the seams between the boards
  g.fillStyle = 'rgba(40,30,22,0.55)';
  for (let s = B; s < span; s += B) {
    if (upright) g.fillRect(x0 + s - 0.008, y0, 0.016, h);
    else g.fillRect(x0, y0 + s - 0.008, w, 0.016);
  }
  // weather: a few boards darker toward their foot, where damp rises
  for (let i = 0; i < 5; i++) {
    const a = e.rnd() * span;
    const grad = upright ? g.createLinearGradient(0, y1 - 0.9, 0, y1) : g.createLinearGradient(x0, 0, x0 + 0.9, 0);
    grad.addColorStop(0, 'rgba(50,40,30,0)');
    grad.addColorStop(1, 'rgba(50,40,30,0.25)');
    g.fillStyle = grad;
    if (upright) g.fillRect(x0 + a, y1 - 0.9, B, 0.9);
    else g.fillRect(x0, y0 + a, 0.9, B);
  }
  g.restore();
}
// A leaf as Niggle paints them: a pointed oval about (x, y), `len` long, turned by `a` (radians), filled `fill`, its
// midrib and veins in `vein` (none: null).
function leaf(g, x, y, len, a, fill, vein) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(0, 0);
  g.bezierCurveTo(len * 0.3, -len * 0.32, len * 0.75, -len * 0.22, len, 0);
  g.bezierCurveTo(len * 0.75, len * 0.22, len * 0.3, len * 0.32, 0, 0);
  g.fill();
  if (vein) {
    g.strokeStyle = vein;
    g.lineWidth = len * 0.03;
    g.beginPath();
    g.moveTo(0, 0);
    g.lineTo(len * 0.95, 0);
    g.stroke();
  }
  g.restore();
}
return { planks, leaf };
