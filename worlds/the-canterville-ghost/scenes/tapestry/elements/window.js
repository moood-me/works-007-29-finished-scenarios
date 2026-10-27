// The window at the back of its embrasure (0.5 m behind the wall's face): the stone round it, two mullions and a
// transom making six lights, each glazed with small diamond quarries of clear old glass in lead — the avenue and the
// sky seen through them. Its anchor is the middle of the opening's foot.
g.fillStyle = '#7d7366';
g.fillRect(-1.3, -3.0, 2.6, 2.7);
g.globalCompositeOperation = 'destination-out';
e.lib.arch(g, -0.95, 0.95, -2.66, -0.55, 0.3);
g.fill();
g.globalCompositeOperation = 'source-over';
// the mullions and the transom
g.fillStyle = '#857a6c';
for (const x of [-0.34, 0.28]) g.fillRect(x, -2.7, 0.07, 2.2);
g.fillRect(-1.0, -1.98, 2.0, 0.07);
// the lead: diamond quarries over the lights
g.save();
e.lib.arch(g, -0.95, 0.95, -2.66, -0.55, 0.3);
g.clip();
g.strokeStyle = 'rgba(40,36,34,0.85)';
g.lineWidth = 0.008;
for (let k = -4; k < 4; k += 0.16) {
  g.beginPath();
  g.moveTo(-1 + k, -0.5);
  g.lineTo(-1 + k + 2.2, -2.7);
  g.moveTo(1 - k, -0.5);
  g.lineTo(1 - k - 2.2, -2.7);
  g.stroke();
}
g.restore();
// a shelf of a sill
g.fillStyle = '#6f665a';
g.fillRect(-1.05, -0.55, 2.1, 0.06);
