// What lies on the table (from above, as the table top: x across, y toward the viewer; Elzéard sits at the far side,
// the Traveller at the left end): each thing a layer shown by its key (animate) — `soup` the two bowls of soup with
// their spoons and the bread; `notebook` the Traveller's notebook, open or shut, by his place; `letter` the city's
// letter beside it; the empty sack, folded at the far right, once the acorns are poured (`acorns` not none). Its
// points: `bowl` (his), `heap` (where the acorns lie), `notebook`, `letter`
const bowl = (g, x, y) => {
  g.fillStyle = '#7a6250';
  g.beginPath();
  g.arc(x, y, 0.085, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#c99a5a';
  g.beginPath();
  g.arc(x, y, 0.065, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#5a5654';
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(x + 0.03, y + 0.02);
  g.lineTo(x + 0.15, y + 0.08);
  g.stroke();
};
e.layer('soup', {}, (g) => {
  bowl(g, 0.12, -0.2);
  bowl(g, -0.62, 0.02);
  g.fillStyle = '#b08552';
  g.beginPath();
  g.ellipse(-0.25, -0.12, 0.13, 0.08, 0.3, 0, Math.PI * 2);
  g.fill();
});
e.layer('sack', {}, (g) => {
  g.fillStyle = '#9a8460';
  g.beginPath();
  g.roundRect(0.38, -0.36, 0.3, 0.2, 0.05);
  g.fill();
  g.strokeStyle = '#7a6648';
  g.lineWidth = 0.008;
  for (let i = 1; i < 4; i++) {
    g.beginPath();
    g.moveTo(0.38, -0.36 + i * 0.05);
    g.lineTo(0.68, -0.36 + i * 0.05);
    g.stroke();
  }
});
e.layer('notebook_shut', {}, (g) => {
  g.fillStyle = '#3a3028';
  g.save();
  g.translate(-0.55, 0.12);
  g.rotate(-0.2);
  g.fillRect(-0.08, -0.11, 0.16, 0.22);
  g.restore();
});
e.layer('notebook_open', {}, (g) => {
  g.save();
  g.translate(-0.55, 0.12);
  g.rotate(-0.2);
  g.fillStyle = '#3a3028';
  g.fillRect(-0.17, -0.115, 0.34, 0.23);
  g.fillStyle = '#e8e0cc';
  g.fillRect(-0.16, -0.105, 0.155, 0.21);
  g.fillRect(0.005, -0.105, 0.155, 0.21);
  g.fillStyle = 'rgba(60, 50, 40, 0.5)';
  for (let i = 0; i < 9; i++) g.fillRect(-0.15, -0.09 + i * 0.022, 0.12 - (i % 3) * 0.02, 0.005);
  g.restore();
});
e.layer('letter', {}, (g) => {
  g.save();
  g.translate(-0.28, 0.2);
  g.rotate(0.25);
  g.fillStyle = '#efe9da';
  g.fillRect(-0.1, -0.07, 0.2, 0.14);
  g.fillStyle = 'rgba(40, 40, 60, 0.45)';
  for (let i = 0; i < 6; i++) g.fillRect(-0.085, -0.05 + i * 0.02, 0.15 - (i % 2) * 0.04, 0.004);
  g.restore();
});
e.at(0.12, -0.2, 'bowl');
e.at(0.05, -0.05, 'heap');
e.at(-0.55, 0.12, 'notebook');
e.at(-0.28, 0.2, 'letter');
