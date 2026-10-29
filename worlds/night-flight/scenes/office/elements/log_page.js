// (Stage 5) The log's page close (an insert, `log_open`): the line's ledger open under the desk lamp — ruled columns,
// the night's entries in ink above, and the new line Rivière writes (М2 «Перо»): which words by `log_line` (bearing —
// the place over the sea; unknown — no place), written from the point `from` to `to` as `ink` goes (a paper-coloured
// cover over the words drawn back by animate, the pen's nib going along — point `pen`); a blot where the pen was when
// `blot` came (a miss). Stage heights: the page in the middle of the frame.
const A = e.aspect;
const C = A / 2;
const LINE = {
  bearing: tr('Fabien, radio operator. Over the sea, a hundred and fifty east of Trelew. 2:45.'),
  unknown: tr('Fabien, radio operator. Position unknown.'),
};
const W = { bearing: 1.05, unknown: 0.62 };
const which = e.state.log_line === 'unknown' ? 'unknown' : 'bearing';
const X0 = C - 0.55;
const Y = 0.66;
// the desk's green leather round it, the lamp's warm light falling across from the right
const bg = g.createRadialGradient(C + 0.5, 0.2, 0.1, C, 0.5, 1.4);
bg.addColorStop(0, '#4a5a40');
bg.addColorStop(1, '#1c261c');
g.fillStyle = bg;
g.fillRect(C - 1.4, -0.1, 2.8, 1.2);
// the page
g.fillStyle = '#efe6cf';
g.fillRect(C - 0.66, 0.1, 1.32, 0.84);
g.fillStyle = 'rgba(60,40,20,0.25)';
g.fillRect(C - 0.66, 0.1, 0.03, 0.84);
// red column rules, blue lines
g.fillStyle = 'rgba(150,60,50,0.55)';
g.fillRect(X0 - 0.04, 0.1, 0.004, 0.84);
g.fillRect(C + 0.56, 0.1, 0.004, 0.84);
g.fillStyle = 'rgba(80,100,140,0.45)';
for (let y = 0.2; y < 0.92; y += 0.078) g.fillRect(C - 0.63, y + 0.012, 1.26, 0.002);
// the night's entries above in a quick hand: lines of ink
g.strokeStyle = 'rgba(28,28,52,0.85)';
g.lineWidth = 0.004;
for (let k = 0; k < 6; k++) {
  const y = 0.2 + k * 0.078;
  const len = 0.5 + 0.55 * e.rnd();
  g.beginPath();
  for (let x = 0; x < len; x += 0.006) {
    const yy = y - 0.012 - 0.01 * Math.abs(Math.sin(x * 140 + k)) * (0.5 + 0.5 * e.rnd());
    if (x) g.lineTo(X0 + x, yy);
    else g.moveTo(X0 + x, yy);
  }
  g.stroke();
}
// the new line's words, written to fill W[which] exactly
g.save();
g.translate(X0, Y);
g.scale(0.001, 0.001);
g.font = 'italic 46px Georgia, serif';
const w = g.measureText(LINE[which]).width || 1;
g.scale((W[which] * 1000) / w, 1);
g.fillStyle = '#1e1e3a';
g.fillText(LINE[which], 0, 0);
g.restore();
e.at(X0, Y - 0.015, 'from');
e.at(X0 + W[which], Y - 0.015, 'to');
// the cover over the words not yet written (drawn back toward its right end by animate as `ink` goes)
e.layer('cover', { pivot: [X0 + W[which] + 0.01, Y], box: [X0 - 0.01, Y - 0.06, X0 + W[which] + 0.01, Y + 0.025] }, c => {
  c.fillStyle = '#efe6cf';
  c.fillRect(X0 - 0.01, Y - 0.06, W[which] + 0.02, 0.085);
  c.fillStyle = 'rgba(80,100,140,0.45)';
  c.fillRect(X0 - 0.01, Y + 0.012, W[which] + 0.02, 0.002);
});
// the pen: its nib at the line's start, its holder leaning up to the right (moved along by animate)
e.layer('pen', { box: [X0 - 0.02, Y - 0.4, X0 + 0.3, Y + 0.01] }, c => {
  c.strokeStyle = '#2a2420';
  c.lineWidth = 0.018;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(X0 + 0.03, Y - 0.05);
  c.lineTo(X0 + 0.26, Y - 0.38);
  c.stroke();
  c.fillStyle = '#9a8a5a';
  c.beginPath();
  c.moveTo(X0, Y - 0.005);
  c.lineTo(X0 + 0.04, Y - 0.045);
  c.lineTo(X0 + 0.022, Y - 0.06);
  c.closePath();
  c.fill();
});
// the blot (a miss): a round splash of ink with a drop beside it, placed by animate where the pen was
e.layer('blot', { box: [X0 - 0.05, Y - 0.06, X0 + 0.06, Y + 0.04] }, c => {
  c.fillStyle = '#1a1a34';
  c.beginPath();
  c.arc(X0 + 0.005, Y - 0.012, 0.028, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(X0 + 0.034, Y + 0.008, 0.009, 0, Math.PI * 2);
  c.fill();
});
