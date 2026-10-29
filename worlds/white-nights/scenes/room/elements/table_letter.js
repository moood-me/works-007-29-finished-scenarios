// Her letter lying on the table, seen from above (x across, y toward the viewer) — «как живое»: folded, a little grey,
// the red wax seal up, the address in her hand. Drawn while `letter_table`; its point `letter`
e.at(0, 0, 'letter');
if (!e.state.letter_table) return;
const INK = e.lib.INK;
e.lib.box(g, -0.09, -0.06, 0.18, 0.12, '#efebdf', 0.004);
g.strokeStyle = 'rgba(90,80,100,0.6)';
g.lineWidth = 0.003;
g.beginPath();
for (const [y, w] of [[-0.02, 0.1], [0.0, 0.12], [0.02, 0.07]]) {
  g.moveTo(-0.06, y);
  g.lineTo(-0.06 + w, y);
}
g.stroke();
g.fillStyle = '#9e1f1a';
g.beginPath();
g.arc(0.05, 0.03, 0.013, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.stroke();
