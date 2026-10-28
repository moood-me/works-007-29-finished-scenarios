// The Gagins' terrace — what its paintings share: the world's way of painting (an etude of Gagin's: alive and coloured
// in the middle, the edges a light unfinished drawing — paper, graphite hatching), the palette, and a few drawing
// helpers. The camera is a still picture from the start (across 0, distance 0), so where a thing is seen across the
// frame is its across over its distance (sx, in frame heights from the middle): the further out, the less finished.
const PAPER = [243, 240, 231];
const GRAPHITE = [104, 97, 89];
const smooth = (a, b, v) => {
  const u = anim.clamp((v - a) / (b - a), 0, 1);
  return u * u * (3 - 2 * u);
};
// how unfinished a thing is where it is seen sx frame heights off the middle: 0 painted … 1 a pencil drawing
const edge = (sx) => smooth(0.56, 0.86, Math.abs(sx));
// how unfinished the floor is near the frame's foot (its distance, metres: the frame's foot is 2.66 m off)
const foot = (distance) => smooth(3.2, 2.7, distance);
const rgbOf = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
const css = (c, a) => `rgba(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])}, ${a ?? 1})`;
// a colour going over to the paper by k
const toPaper = (hex, k) => {
  const c = rgbOf(hex);
  return css([c[0] + (PAPER[0] - c[0]) * k, c[1] + (PAPER[1] - c[1]) * k, c[2] + (PAPER[2] - c[2]) * k]);
};
const paper = (a) => css(PAPER, a);
const graphite = (a) => css(GRAPHITE, a);
// a steady random 0…1 for i (and a seed)
const rnd = (i, seed) => anim.hash(i, seed ?? 1);

// Over what a card has painted so far (its own pixels only): toward the frame's edges the paint goes over to the paper
// and graphite hatching lies on it — a card standing `across` metres aside at `distance`, its box [l, t, r, b] in its
// own metres. Hatching strokes about 7 px apart however far the card is.
function unfinish(g, box, across, distance) {
  const [l, t, r, b] = box;
  const grd = g.createLinearGradient(l, 0, r, 0);
  const n = 24;
  for (let i = 0; i <= n; i++) {
    const x = l + ((r - l) * i) / n;
    grd.addColorStop(i / n, paper(edge((across + x) / distance)));
  }
  g.save();
  g.globalCompositeOperation = "source-atop";
  g.fillStyle = grd;
  g.fillRect(l, t, r - l, b - t);
  hatch(g, box, across, distance);
  g.restore();
}
// graphite hatching over the box where it is unfinished (drawn as it is: source-atop by the caller, or over paper)
function hatch(g, box, across, distance) {
  const [l, t, r, b] = box;
  const gap = distance * 0.0072;
  g.save();
  g.beginPath();
  g.rect(l, t, r - l, b - t);
  g.clip();
  const lean = (b - t) * 0.45;
  g.lineWidth = distance * 0.0011;
  for (let x = l - lean, i = 0; x < r; x += gap, i++) {
    const k = edge((across + x + lean * 0.5) / distance);
    if (k < 0.12) continue;
    const a = k * (0.22 + 0.2 * rnd(i, 7));
    const y0 = t + (b - t) * 0.25 * rnd(i, 3);
    const y1 = b - (b - t) * 0.3 * rnd(i, 5);
    g.strokeStyle = graphite(a);
    g.beginPath();
    g.moveTo(x + lean * ((y0 - t) / (b - t)), y0);
    g.lineTo(x + lean * ((y1 - t) / (b - t)), y1);
    g.stroke();
  }
  g.restore();
}
// a vine leaf: five rounded lobes round (x, y), s across, turned a radians
function leaf(g, x, y, s, a) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.beginPath();
  for (let i = 0; i < 5; i++) {
    const q = -Math.PI / 2 + ((i - 2) * Math.PI) / 3.2;
    const rr = s * (i === 2 ? 0.5 : i === 0 || i === 4 ? 0.34 : 0.44);
    g.moveTo(0, 0);
    g.ellipse(Math.cos(q) * rr * 0.62, Math.sin(q) * rr * 0.62 + s * 0.12, rr * 0.55, rr * 0.48, q, 0, Math.PI * 2);
  }
  g.restore();
}
return { PAPER, GRAPHITE, smooth, edge, foot, rgbOf, css, toPaper, paper, graphite, rnd, unfinish, hatch, leaf };
