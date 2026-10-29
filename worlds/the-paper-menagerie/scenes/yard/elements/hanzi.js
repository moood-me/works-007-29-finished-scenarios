// The bottom of her sheet, close (an insert, opened by `hanzi_close`; the mini-game «Иероглиф»): the cream back of the
// wrapping on his knee, the last of her columns, her 爱 large in ink, and under it the room where he writes his —
// drawn as far as `hanzi` (0…1, stroke by stroke), crooked with `hanzi_crooked`. Its points: `hanzi#start` (where his
// pen begins) and `hanzi#end` (where his last stroke ends).
const A = e.aspect, st = e.state, P = e.kit.paper;
const x0 = (A - 7 / 3) / 2 - 0.2;
g.fillStyle = '#6e6a7c';
g.fillRect(x0, -0.05, 7 / 3 + 0.4, 1.1);
g.fillStyle = '#efe4cc';
g.fillRect(A / 2 - 0.62, -0.05, 1.24, 1.0);
g.strokeStyle = 'rgba(150,120,90,0.35)';
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(A / 2 - 0.62, 0.22);
g.lineTo(A / 2 + 0.62, 0.22);
g.moveTo(A / 2, -0.05);
g.lineTo(A / 2, 0.95);
g.stroke();
// the end of her last columns, on the right
g.strokeStyle = '#2b2326';
g.lineCap = 'round';
for (let c = 0; c < 3; c++)
  for (let r = 0; r < 3; r++) {
    const x = A / 2 + 0.48 - c * 0.12, y = 0.06 + r * 0.1;
    g.lineWidth = 0.008;
    g.beginPath();
    g.moveTo(x - 0.025, y);
    g.lineTo(x + 0.025, y + 0.004);
    g.moveTo(x, y - 0.03);
    g.lineTo(x + 0.004, y + 0.03);
    g.stroke();
  }
// her 爱, and his under it
P.sign(g, A / 2 - 0.2, 0.3, 0.17, 1, false, '#2b2326');
P.sign(g, A / 2 - 0.2, 0.72, 0.15, st.hanzi ?? 0, st.hanzi_crooked, '#26355a');
const S = P.SIGN;
e.at(A / 2 - 0.2 + S[0][0][0] * 0.15, 0.72 + S[0][0][1] * 0.15, 'start');
e.at(A / 2 - 0.2 + S[S.length - 1][2][0] * 0.15, 0.72 + S[S.length - 1][2][1] * 0.15, 'end');
e.at(A / 2 - 0.2, 0.72);
