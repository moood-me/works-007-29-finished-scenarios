// Valdrada across the lake (lib.js lays it out): the quay wall standing out of the water, the wide stair going down
// into it in the middle under the palace, the row of houses with their arcades, balconies, roofs and domes, three
// towers, and the windows dark — the lit ones are city_lights'. Its double in the water is the lake's mirror.
const { QUAY, houses, windows, towers } = e.lib;
// the hills behind, low and far
g.fillStyle = '#4a5a84';
g.beginPath();
g.moveTo(-215, QUAY);
g.bezierCurveTo(-150, -30, -60, -22, 0, -27);
g.bezierCurveTo(70, -32, 140, -20, 215, -24);
g.lineTo(215, QUAY);
g.closePath();
g.fill();
// the towers, behind the houses
for (const [tx, tw, th] of towers) {
  g.fillStyle = '#a9a08f';
  g.fillRect(tx - tw / 2, QUAY - th, tw, th);
  g.fillStyle = '#8f8778';
  g.fillRect(tx - tw / 2 - 0.4, QUAY - th - 0.6, tw + 0.8, 0.8);
  g.beginPath();
  g.moveTo(tx - tw / 2, QUAY - th - 0.6);
  g.lineTo(tx, QUAY - th - 5.5);
  g.lineTo(tx + tw / 2, QUAY - th - 0.6);
  g.closePath();
  g.fill();
  g.fillStyle = '#3c4256';
  for (let k = 0; k < 2; k++) g.fillRect(tx - 0.7 + k * 0.9 - 0.45, QUAY - th + 2, 0.7, 2.6);
}
for (const hs of houses) {
  const { x, w, h, tone, roof } = hs;
  const top = QUAY - h;
  g.fillStyle = tone;
  g.fillRect(x, top, w, h);
  // the roof
  g.fillStyle = '#7d6a5c';
  if (roof === 'gable') {
    g.beginPath();
    g.moveTo(x - 0.3, top);
    g.lineTo(x + w / 2, top - Math.min(4, w * 0.3));
    g.lineTo(x + w + 0.3, top);
    g.closePath();
    g.fill();
  } else if (roof === 'dome' || roof === 'palace') {
    const r = roof === 'palace' ? 9 : Math.min(3.2, w * 0.3);
    g.fillStyle = roof === 'palace' ? '#8f9a9a' : '#8a7f70';
    g.fillRect(x + w / 2 - r * 0.85, top - r * 0.5, r * 1.7, r * 0.5);
    g.beginPath();
    g.arc(x + w / 2, top - r * 0.5, r * 0.85, Math.PI, 0);
    g.fill();
    g.fillRect(x + w / 2 - 0.15, top - r * 1.35 - 1.6, 0.3, 1.6);
  } else {
    g.fillStyle = '#9b917f';
    g.fillRect(x, top - 0.7, w, 0.7);
  }
  // the arcade on the quay
  g.fillStyle = '#3a3f50';
  const bays = Math.max(1, Math.round(w / 3.2));
  const bw = w / bays;
  for (let b = 0; b < bays; b++) {
    const cx = x + (b + 0.5) * bw;
    const r = bw * 0.32;
    g.beginPath();
    g.moveTo(cx - r, QUAY);
    g.lineTo(cx - r, QUAY - 3.1 + r);
    g.arc(cx, QUAY - 3.1 + r, r, Math.PI, 0);
    g.lineTo(cx + r, QUAY);
    g.closePath();
    g.fill();
  }
  // a cornice over the arcade, a balcony's rail now and then
  g.fillStyle = '#d3c9b5';
  g.fillRect(x, QUAY - 3.6, w, 0.25);
  if (h > 12) g.fillRect(x + w * 0.2, QUAY - 7.7, w * 0.6, 0.18);
}
// the windows, dark (city_lights lights a third of them)
g.fillStyle = '#3c4256';
for (const wd of windows) if (!wd.lit) g.fillRect(wd.x, wd.y, wd.w, wd.h);
// the quay wall and, in the middle, the wide stair going down into the water, its lowest treads under it
g.fillStyle = '#8d8676';
g.fillRect(-215, QUAY, 430, -QUAY + 0.6);
g.fillStyle = '#a49b88';
g.fillRect(-215, QUAY, 430, 0.25);
for (let s = 0; s < 9; s++) {
  const y = QUAY + s * 0.28;
  const half = 10 + s * 0.35;
  g.fillStyle = s % 2 ? '#a29a87' : '#b4ab97';
  g.fillRect(-half, y, half * 2, 0.28);
}
e.at(0, QUAY + 1.2, 'steps');
e.at(0, -14, 'city');
