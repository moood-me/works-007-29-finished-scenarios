// His hat on its nail on the right wall by the greatcoat — at home it hangs there: a worn top hat seen from the side,
// its crown a little wider at the top, a narrow curled brim (x runs toward the viewer). Drawn while `hat_peg` (the nail
// always); its point `hat`
const INK = e.lib.INK;
e.at(0, -1.76, 'hat');
g.fillStyle = '#3e3732';
g.fillRect(-0.005, -1.68, 0.01, 0.03);
if (!e.state.hat_peg) return;
g.fillStyle = '#5e5249';
g.beginPath();
g.moveTo(-0.135, -1.66);
g.lineTo(-0.115, -1.86);
g.lineTo(0.105, -1.86);
g.lineTo(0.085, -1.66);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.007;
g.stroke();
g.beginPath();
g.moveTo(-0.185, -1.67);
g.quadraticCurveTo(-0.025, -1.63, 0.135, -1.67);
g.quadraticCurveTo(-0.025, -1.655, -0.185, -1.67);
g.fill();
g.stroke();
g.fillStyle = '#3e3732';
g.fillRect(-0.13, -1.71, 0.205, 0.035);
