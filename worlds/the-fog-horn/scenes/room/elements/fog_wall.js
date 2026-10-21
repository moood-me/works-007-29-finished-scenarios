// The white wall of the fog on the horizon, coming — tomorrow's: an opaque bank with a billowing top, rising out of
// nothing at its left end (seen in the window's right half), and its softer see-through crest.
const top = x => 30 + 7 * Math.sin(x * 0.0105 + 0.5) + 5 * Math.sin(x * 0.0244 + 2) + 3 * Math.sin(x * 0.059);
const edge = x => Math.min(1, Math.max(0, (x + 120) / 320));
g.fillStyle = '#e3e2e2';
g.beginPath();
g.moveTo(-120, 2);
for (let x = -120; x <= 900; x += 8) g.lineTo(x, -top(x) * edge(x));
g.lineTo(900, 2);
g.closePath();
g.fill();
g.fillStyle = 'rgba(236,236,238,0.45)';
g.beginPath();
g.moveTo(-120, 2);
for (let x = -120; x <= 900; x += 8) g.lineTo(x, -(top(x) + 7) * edge(x));
g.lineTo(900, 2);
g.closePath();
g.fill();
