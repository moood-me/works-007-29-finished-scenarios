// The two casements in the outer face of the wall: white-painted wood gone a little grey, each three panes high and
// two across, the panes open to the morning (no glass drawn: by day it shows nothing of the room).
const frame = new Path2D();
frame.rect(-0.8, -2.05, 1.6, 1.1);
const bar = 0.03, pw = (0.75 - 3 * bar) / 2, ph = 0.33;
for (const left of [-0.775, 0.025]) {
  for (let c = 0; c < 2; c++) for (let r = 0; r < 3; r++) {
    frame.rect(left + bar / 2 + c * (pw + bar), -2.0 + bar / 2 + r * (ph + bar), pw, ph);
  }
}
g.fillStyle = '#d6d2c6';
g.fill(frame, 'evenodd');
