// The hangar across the field, 75 m off, seen through the window: its corrugated front dark against the sky, the great
// gate open and lit; the edge lamps of the field in a row before it; a floodlight mast. What is there by `outside`:
//   european — the night: the European mail's plane in the gate under the lamps, being made ready, two mechanics at it;
//   empty    — it has gone: the gate lit and empty;
//   rolled   — at dawn, stood down: the mechanics rolling it back into the hangar, two at the wing, one at the tail;
//   landing  — the next evening: the floodlights lit, the Chilean mail coming down out of the dusk over the field, its
//              lamp lit; the next European in the gate;
//   idle     — the next evening, the night mail suspended: the floodlights dark, the gate half shut, the Chilean mail
//              standing before it and Pellerin by it, smoking.
// The gate's light `gate`; the mast's lamps `mast` (lit only for the landing); the landing plane's lamp `lamp`.
const out = e.state.outside;
const R = 10;
const top = x => -7.2 - 2.2 * (1 - (x / R) ** 2);
g.fillStyle = '#4a5160';
g.beginPath();
g.moveTo(-R, 0);
for (let x = -R; x <= R + 0.01; x += 0.5) g.lineTo(x, top(x));
g.lineTo(R, 0);
g.closePath();
g.fill();
// the gate's lit inside: warm, brightest under the lamps; half shut when the line is idle
const inside = g.createLinearGradient(0, -6.4, 0, 0);
inside.addColorStop(0, '#e9b878');
inside.addColorStop(1, '#c08a52');
g.fillStyle = inside;
g.fillRect(-6, -6.3, 12, 6.3);
if (out === 'idle') {
  g.fillStyle = '#3e4553';
  g.fillRect(-6, -6.3, 8.2, 6.3);
  g.strokeStyle = 'rgba(25,28,36,0.5)';
  g.lineWidth = 0.08;
  for (let x = -5.6; x < 2.2; x += 0.7) {
    g.beginPath();
    g.moveTo(x, -6.3);
    g.lineTo(x, 0);
    g.stroke();
  }
}
// a parasol monoplane side on, nose to the left, at x, its band's colour; up — how high above the ground (in the air:
// the wheels hanging, its lamp lit)
const plane = (x, y, band, scale = 1) => {
  g.save();
  g.translate(x, y);
  g.scale(scale, scale);
  g.fillStyle = '#e4e1d8';
  g.beginPath();
  g.moveTo(-4.6, -2.0);
  g.lineTo(3.6, -2.3);
  g.lineTo(4.6, -2.9);
  g.lineTo(4.9, -2.1);
  g.lineTo(3.4, -1.5);
  g.lineTo(-4.4, -1.3);
  g.closePath();
  g.fill();
  g.fillStyle = band;
  g.fillRect(-4.4, -1.85, 7.8, 0.18);
  g.fillStyle = '#d6d2c6';
  g.fillRect(-3.4, -3.75, 4.4, 0.16);
  g.strokeStyle = '#6b6a66';
  g.lineWidth = 0.08;
  for (const sx of [-2.6, 0.2]) {
    g.beginPath();
    g.moveTo(sx, -3.6);
    g.lineTo(sx + 0.3, -2.0);
    g.stroke();
  }
  g.fillStyle = '#3c3a38';
  for (const sx of [-2.2, -0.9]) {
    g.beginPath();
    g.arc(sx, -0.45, 0.45, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#5a4a3c';
  g.fillRect(-5.1, -2.6, 0.18, 1.4);
  g.restore();
};
// a small figure dark against the light: x, its height, the head's colour; lean — forward, pushing
const figure = (x, h, lean = 0, col = '#3b3f48') => {
  g.save();
  g.translate(x, 0);
  g.rotate(lean);
  g.fillStyle = col;
  g.fillRect(-0.2, -h + 0.25, 0.4, h - 0.25);
  g.beginPath();
  g.arc(0, -h + 0.12, 0.15, 0, Math.PI * 2);
  g.fill();
  g.restore();
};
if (out === 'european' || out === 'landing') {
  plane(0, 0, '#9a3a32');
  figure(-5.6, 1.7);
  figure(-3.9, 1.65);
} else if (out === 'rolled') {
  // backed into the gate, tail first: the tail already inside, the nose still out under the lintel's edge
  plane(1.2, 0, '#9a3a32');
  // (stage 5) `roblet` keep: the near one at the wing is Roblet — his faded blue jacket, his grey head; else an
  // ordinary mechanic and, by the gate, his workbench bare
  if (e.state.roblet === 'keep') {
    figure(-3.8, 1.6, 0.25, '#4c6f93');
    g.fillStyle = '#b9b4ab';
    g.beginPath();
    g.arc(-3.8 + 1.48 * Math.sin(0.25), -1.48 * Math.cos(0.25), 0.15, 0, Math.PI * 2);
    g.fill();
  } else {
    figure(-3.8, 1.65, 0.25);
    g.fillStyle = '#4a3a2c';
    g.fillRect(6.4, -0.9, 1.8, 0.12);
    g.fillRect(6.5, -0.8, 0.1, 0.8);
    g.fillRect(8.0, -0.8, 0.1, 0.8);
  }
  figure(-2.4, 1.7, 0.25);
  figure(-5.8, 1.6, 0.2);
} else if (out === 'idle') {
  // the Chilean mail before the half-shut gate; Pellerin beside it, the glow of his cigarette
  plane(-1.5, 0, '#2f4769');
  figure(-7.4, 1.75, 0, '#3e3129');
  g.fillStyle = '#ffb070';
  g.beginPath();
  g.arc(-7.15, -1.5, 0.06, 0, Math.PI * 2);
  g.fill();
  e.light(-7.15, -1.5, 0.15, '#ff9a50', 0.6, 'cigarette');
}
// the lamps hanging in the gate
for (const x of [-3, 0, 3]) {
  g.fillStyle = '#fff2d0';
  g.beginPath();
  g.arc(x, -5.6, 0.25, 0, Math.PI * 2);
  g.fill();
}
e.light(0, -5.0, 3.5, '#ffd49a', 1, 'gate');
// the floodlight mast to the left of the hangar — lit for the landing
g.strokeStyle = '#3a404c';
g.lineWidth = 0.18;
g.beginPath();
g.moveTo(-17.6, 0);
g.lineTo(-17.1, -11.5);
g.moveTo(-16.4, 0);
g.lineTo(-16.9, -11.5);
g.stroke();
g.fillStyle = '#3a404c';
g.fillRect(-18, -12.2, 2, 0.8);
if (out === 'landing') {
  g.fillStyle = '#f4f7ff';
  for (const dx of [-0.6, 0, 0.6]) {
    g.beginPath();
    g.arc(-17 + dx, -11.8, 0.22, 0, Math.PI * 2);
    g.fill();
  }
  e.light(-17, -11.8, 2.2, '#eef2ff', 1, 'mast');
  // the Chilean mail coming down out of the dusk over the field, far to the left, its lamp lit
  plane(-30, -14, '#2f4769', 0.8);
  g.fillStyle = '#fff6e0';
  g.beginPath();
  g.arc(-34.2, -15.4, 0.18, 0, Math.PI * 2);
  g.fill();
  e.light(-34.2, -15.4, 0.8, '#fff2d0', 1, 'lamp');
}
// the edge lamps of the field, a row of small warm points running off to the right (dark when the line is idle)
if (out !== 'idle') {
  for (let k = 0; k < 7; k++) {
    const x = -24 + k * 7.5;
    g.fillStyle = '#ffd9a0';
    g.beginPath();
    g.arc(x, -0.4, 0.12, 0, Math.PI * 2);
    g.fill();
    e.light(x, -0.4, 0.5, '#ffcf8a', 0.5, `edge${k}`);
  }
}
