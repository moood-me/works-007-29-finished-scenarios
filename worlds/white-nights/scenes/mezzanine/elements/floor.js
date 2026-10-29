// The mezzanine's floor from above (x −2…2 across, y −2.1 at the gable … 2.1 at the front): wide unpainted boards,
// scrubbed pale; the stair's hatch in the front right corner (x 1.2…1.85, y 0.6…1.9), its dark well going down
const INK = e.lib.INK, { hash } = e.anim;
for (let i = 0; i < 16; i++) {
  const x = -2 + i * 0.25, k = hash(i, 61);
  g.fillStyle = `rgb(${Math.round(192 + 16 * k)},${Math.round(164 + 12 * k)},${Math.round(126 + 10 * k)})`;
  g.fillRect(x, -2.1, 0.25, 4.2);
}
e.lib.wash(g, -2, -2.1, 4, 4.2, [196, 168, 130], 62, 0.3, 0.6, 0);
g.beginPath();
for (let i = 0; i <= 16; i++) { g.moveTo(-2 + i * 0.25, -2.1); g.lineTo(-2 + i * 0.25, 2.1); }
g.strokeStyle = 'rgba(74,63,58,0.35)';
g.lineWidth = 0.008;
g.stroke();
// a rag rug by the table
const bands = ['#8d5a4e', '#d9cbb0', '#6f7f8f', '#d9cbb0'];
for (let i = 0; i < 12; i++) {
  g.fillStyle = bands[i % 4];
  g.fillRect(-1.5 + i * 0.1, -0.15, 0.1, 0.9);
}
g.strokeStyle = INK;
g.lineWidth = 0.008;
g.strokeRect(-1.5, -0.15, 1.2, 0.9);
// the hatch: its frame, the well's dark, the top treads going down in it
e.lib.box(g, 1.15, 0.55, 0.75, 1.4, '#8c6a50', 0.012);
g.fillStyle = '#4a3a30';
g.fillRect(1.22, 0.62, 0.61, 1.26);
for (let k = 0; k < 4; k++) {
  g.fillStyle = `rgba(150,118,90,${0.8 - k * 0.18})`;
  g.fillRect(1.22, 0.62 + k * 0.3, 0.61, 0.12);
}
e.at(1.52, 1.25, 'hatch');
