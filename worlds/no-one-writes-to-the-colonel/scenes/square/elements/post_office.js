// The post office (metres from its foot; its front 7.4 m long): a low house washed a faded ochre over a red-brown
// band, its hipped roof of old tiles; the double door shut, the wicket open on the room within (x 0.9…1.8, sill
// 0.95, head 1.95 — cut through, the wicket's frame and shutters its own element), a brass post horn over it, a board
// of notices by the door, a barred window shuttered at the right end.
g.save();
g.beginPath();
g.rect(-3.7, -3.12, 7.4, 3.14);
g.rect(0.9, -1.95, 0.9, 1.0);
g.clip('evenodd');
e.lib.wash(g, e, -3.7, 3.7, 3.1, '#dccb9a', '#94584a');
// the wicket's reveal: the wall's thickness, darker
g.fillStyle = '#a89870';
g.fillRect(0.86, -1.99, 0.98, 0.05);
g.fillRect(0.86, -0.97, 0.98, 0.04);
g.restore();
e.lib.tiles(g, e, -3.75, 3.75, -3.08, -4.4, 1.3);
// the double door, shut: two leaves of boards painted a sea-green gone pale, iron studs
g.fillStyle = '#4c3c30';
g.fillRect(-2.66, -2.46, 1.22, 2.46);
for (const x0 of [-2.6, -2.04]) {
  g.fillStyle = '#5f8c84';
  g.fillRect(x0, -2.4, 0.54, 2.4);
  g.fillStyle = 'rgba(40,70,64,0.35)';
  for (let x = x0 + 0.09; x < x0 + 0.54; x += 0.11) g.fillRect(x, -2.38, 0.015, 2.36);
  g.fillStyle = '#4a6f68';
  g.fillRect(x0 + 0.05, -1.9, 0.44, 0.06);
  g.fillRect(x0 + 0.05, -0.7, 0.44, 0.06);
  g.fillStyle = '#2e2a26';
  for (let k = 0; k < 4; k++) g.fillRect(x0 + 0.08 + k * 0.12, -1.89, 0.03, 0.03);
}
g.fillStyle = '#2a2624';
g.fillRect(-2.08, -1.25, 0.05, 0.12);
g.fillStyle = 'rgba(196,184,150,0.6)';
for (let i = 0; i < 14; i++) g.fillRect(-2.6 + e.rnd() * 1.1, -2.3 + e.rnd() * 2.2, 0.02 + e.rnd() * 0.05, 0.02 + e.rnd() * 0.04);
// the board of notices by the door: papers pinned one over another, curling in the damp
g.fillStyle = '#6a5240';
g.fillRect(-0.95, -2.0, 0.75, 0.82);
for (let i = 0; i < 6; i++) {
  g.save();
  g.translate(-0.88 + e.rnd() * 0.45, -1.92 + e.rnd() * 0.45);
  g.rotate((e.rnd() - 0.5) * 0.25);
  g.fillStyle = e.rnd() < 0.5 ? '#e4ddc8' : '#d2c9ae';
  g.fillRect(0, 0, 0.18 + e.rnd() * 0.1, 0.24 + e.rnd() * 0.1);
  g.fillStyle = 'rgba(60,54,46,0.45)';
  for (let k = 0; k < 5; k++) g.fillRect(0.03, 0.05 + k * 0.035, 0.12, 0.01);
  g.restore();
}
// the post horn over the wicket, brass gone brown
g.strokeStyle = '#9a7a3a';
g.lineWidth = 0.035;
g.beginPath();
g.arc(1.35, -2.36, 0.12, 0.3, Math.PI * 2 - 0.3);
g.stroke();
g.fillStyle = '#9a7a3a';
g.beginPath();
g.moveTo(1.46, -2.4);
g.lineTo(1.7, -2.5);
g.lineTo(1.7, -2.24);
g.closePath();
g.fill();
// the barred window at the right end, its shutters shut
g.fillStyle = '#4c3c30';
g.fillRect(2.36, -2.24, 0.98, 1.2);
g.fillStyle = '#5f8c84';
g.fillRect(2.42, -2.18, 0.42, 1.08);
g.fillRect(2.86, -2.18, 0.42, 1.08);
g.strokeStyle = '#4a6f68';
g.lineWidth = 0.012;
for (let y = -2.12; y < -1.14; y += 0.06) {
  g.beginPath();
  g.moveTo(2.45, y);
  g.lineTo(3.25, y);
  g.stroke();
}
g.fillStyle = '#262220';
for (let x = 2.48; x < 3.32; x += 0.14) g.fillRect(x, -2.22, 0.022, 1.16);
