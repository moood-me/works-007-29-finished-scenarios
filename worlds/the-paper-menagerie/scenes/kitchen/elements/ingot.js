// Jack's yellow square on the oilcloth before him, from above (metres, its middle at the element's place; y toward the
// viewer): the game's mini-game «Сгиб» folds it along its line, from `ingot#start` to `ingot#end` (`ingot_fold` 0..1:
// the far half coming over onto the near one, the corners turned up into a little ingot, a boat of gold paper);
// with `ingot_named` his name on it in pencil. Shown while there are ingots on the table (`ingots` above 0).
const st = e.state;
if (!(st.ingots > 0) || st.packed) return;
const f = Math.max(0, Math.min(1, st.ingot_fold));
const h = 0.075;
// the near half, always
g.fillStyle = '#e6bd42';
g.fillRect(-h, 0, 2 * h, h);
// the far half: shortened as it comes over (seen from above), lighter as it turns to the lamp
const far = h * (1 - 2 * Math.min(f, 0.5)) ;
if (f < 0.5) {
  g.fillStyle = '#ecc95a';
  g.fillRect(-h, -far, 2 * h, far);
} else {
  g.fillStyle = '#f2d36e';
  g.fillRect(-h, 0, 2 * h, h * (2 * f - 1));
}
// the line, and then the turned-up corners
g.strokeStyle = 'rgba(120,90,20,0.6)';
g.lineWidth = 0.002;
g.beginPath();
g.moveTo(-h, 0);
g.lineTo(h, 0);
g.stroke();
if (f > 0.85) {
  g.fillStyle = '#c99e2c';
  g.beginPath();
  g.moveTo(-h, 0);
  g.lineTo(-h * 0.6, h * 0.5);
  g.lineTo(-h, h);
  g.moveTo(h, 0);
  g.lineTo(h * 0.6, h * 0.5);
  g.lineTo(h, h);
  g.fill();
}
if (st.ingot_named) {
  g.strokeStyle = '#4a4a50';
  g.lineWidth = 0.0025;
  g.beginPath();
  for (let i = 0; i < 4; i++) {
    const x = -0.04 + i * 0.022;
    g.moveTo(x, h * 0.62);
    g.lineTo(x + 0.006, h * 0.38);
    g.lineTo(x + 0.014, h * 0.6);
  }
  g.stroke();
}
e.at(-h, 0, 'start');
e.at(h, 0, 'end');
e.at(0, h * 0.5);
