// The Dreamer's top hat lying on the table by the wall, on its side, its crown toward the viewer's left (state
// `hat_table`; nothing painted while it is not there); its point `hat`
if (!e.state.hat_table) return;
const INK = e.lib.INK;
g.fillStyle = '#3a3431';
g.beginPath();
g.ellipse(0.1, -0.085, 0.03, 0.085, 0, 0, Math.PI * 2);
g.fill();
g.fillRect(-0.12, -0.075, 0.22, 0.15);
g.beginPath();
g.ellipse(-0.12, -0.075, 0.025, 0.075, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.004;
g.strokeRect(-0.12, -0.075, 0.22, 0.15);
g.fillStyle = '#211e1d';
g.fillRect(0.02, -0.075, 0.03, 0.15);
e.at(0, -0.075, 'hat');
