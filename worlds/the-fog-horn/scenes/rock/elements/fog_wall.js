// The white wall of the fog on the horizon, coming (on the right): an opaque bank with a billowing top, rising out of
// nothing at its left end, and its softer see-through crest.
const top = x => 38 + 9 * Math.sin(x * 0.0105 + 0.5) + 6 * Math.sin(x * 0.0244 + 2) + 3 * Math.sin(x * 0.059);
const edge = x => Math.min(1, (x + 900) / 500);
g.fillStyle = '#e3e2e2';
g.beginPath();
g.moveTo(-900, 2);
for (let x = -900; x <= 900; x += 10) g.lineTo(x, -top(x) * edge(x));
g.lineTo(900, 2);
g.closePath();
g.fill();
g.fillStyle = 'rgba(236,236,238,0.45)';
g.beginPath();
g.moveTo(-900, 2);
for (let x = -900; x <= 900; x += 10) g.lineTo(x, -(top(x) + 8) * edge(x));
g.lineTo(900, 2);
g.closePath();
g.fill();
