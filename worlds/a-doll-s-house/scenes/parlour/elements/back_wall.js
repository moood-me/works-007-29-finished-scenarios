// The parlour's back wall: the window to the street on the left (x −1.75…−0.55, from 0.8 m to 2.6 m), the open doorway
// to the hall on the right (x 0.3…1.5, 2.4 m high) — both cut through — a framed picture over the piano; red velvet
// portieres at the window under a pelmet, and one at the doorway, tied back.
const VELVET = '#7e2626';
const FOLD = '#622020';
e.lib.wall(g, e, -3.05, 3.05);
// the picture over the piano: a dark landscape in a gilt frame
g.fillStyle = '#a7843f';
g.fillRect(-2.84, -2.42, 0.84, 0.62);
g.fillStyle = '#4c5a4a';
g.fillRect(-2.77, -2.35, 0.7, 0.48);
g.fillStyle = '#7f8c78';
g.fillRect(-2.77, -2.35, 0.7, 0.2);
g.fillStyle = '#3a4538';
g.beginPath();
g.moveTo(-2.77, -1.95);
g.lineTo(-2.52, -2.12);
g.lineTo(-2.27, -2.0);
g.lineTo(-2.07, -2.15);
g.lineTo(-2.07, -1.87);
g.lineTo(-2.77, -1.87);
g.closePath();
g.fill();
// the window's architrave and its sill board
g.fillStyle = '#e4dac6';
g.fillRect(-1.85, -2.7, 1.4, 1.95);
g.fillStyle = '#d3c7ad';
g.fillRect(-1.91, -0.84, 1.52, 0.07);
// the doorway's architrave
g.fillStyle = '#e4dac6';
g.fillRect(0.2, -2.5, 1.4, 2.5);
g.fillStyle = '#d3c7ad';
g.fillRect(0.2, -2.5, 1.4, 0.04);
// the openings
g.globalCompositeOperation = 'destination-out';
g.fillRect(-1.75, -2.6, 1.2, 1.8);
g.fillRect(0.3, -2.4, 1.2, 2.45);
g.globalCompositeOperation = 'source-over';
// a heavy curtain falling from y0 to the floor-ish (y1), its inner edge `inner` drawn back toward `outer` at the tie
function portiere(outer, inner, y0, y1, tie) {
  g.fillStyle = VELVET;
  g.beginPath();
  g.moveTo(outer, y0);
  g.lineTo(inner, y0);
  g.quadraticCurveTo(inner, tie - 0.3, outer + (inner - outer) * 0.35, tie);
  g.quadraticCurveTo(inner + (outer - inner) * 0.1, tie + 0.4, inner, y1);
  g.lineTo(outer, y1);
  g.closePath();
  g.fill();
  g.strokeStyle = FOLD;
  g.lineWidth = 0.025;
  for (let k = 1; k < 4; k++) {
    const x = outer + ((inner - outer) * k) / 5;
    g.beginPath();
    g.moveTo(x, y0 + 0.05);
    g.lineTo(outer + ((inner - outer) * k) / 9, tie);
    g.lineTo(x, y1);
    g.stroke();
  }
  // the tie-back cord
  g.fillStyle = '#c49a52';
  g.fillRect(Math.min(outer, outer + (inner - outer) * 0.4) - 0.01, tie - 0.03, Math.abs(inner - outer) * 0.4 + 0.02, 0.05);
}
portiere(-2.1, -1.63, -2.75, -0.02, -1.25);
portiere(-0.3, -0.67, -2.75, -0.02, -1.25);
portiere(0.12, 0.42, -2.48, -0.02, -1.1);
// the window's pelmet
g.fillStyle = VELVET;
g.fillRect(-2.17, -2.92, 1.94, 0.24);
g.fillStyle = '#c49a52';
for (let x = -2.13; x < -0.25; x += 0.12) g.fillRect(x, -2.68, 0.06, 0.05);
