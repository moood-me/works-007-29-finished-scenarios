// A dray loaded with furniture standing in the far bank's street (the key `cart`: the city going to the dachas in the
// prologue, coming back from them in the morning): a brown horse in harness at the left, the long low dray on two
// pairs of wheels, a wardrobe roped on it, chairs upside down on a table, a rolled mattress, a mirror in its frame
// leaning on the wardrobe. Side on; x along the street, y up negative from its foot (metres); the lithograph's ink line
if (!e.state.cart) return;
const INK = e.lib.INK;
g.lineJoin = 'round';
const ink = (w = 0.025) => { g.strokeStyle = INK; g.lineWidth = w; g.stroke(); };
// the horse: body, neck and head down a little, legs, tail
g.fillStyle = '#7a5a42';
g.beginPath();
g.ellipse(-2.35, -1.35, 0.85, 0.36, 0, 0, Math.PI * 2);
g.fill(); ink();
g.beginPath();
g.moveTo(-3.0, -1.55); g.lineTo(-3.35, -2.05); g.lineTo(-3.62, -1.95); g.lineTo(-3.55, -1.72); g.lineTo(-3.2, -1.3); g.closePath();
g.fill(); ink();
for (const x of [-2.95, -2.75, -1.95, -1.75]) {
  g.fillStyle = '#6a4c38';
  g.fillRect(x - 0.05, -1.1, 0.1, 1.1);
  g.strokeStyle = INK; g.lineWidth = 0.02; g.strokeRect(x - 0.05, -1.1, 0.1, 1.1);
}
g.fillStyle = '#3e2e24';
g.beginPath(); g.moveTo(-1.52, -1.45); g.quadraticCurveTo(-1.35, -1.0, -1.45, -0.7); g.lineTo(-1.55, -1.3); g.closePath(); g.fill();
// the harness: the collar and the shafts to the dray
g.fillStyle = '#4a3b30';
g.beginPath(); g.ellipse(-3.0, -1.6, 0.12, 0.24, 0.3, 0, Math.PI * 2); g.fill();
g.strokeStyle = '#5a4434'; g.lineWidth = 0.05;
g.beginPath(); g.moveTo(-3.0, -1.4); g.lineTo(-1.1, -0.95); g.stroke();
// the dray: its bed, its wheels
g.fillStyle = '#8c7458';
g.fillRect(-1.2, -1.0, 4.4, 0.18);
g.strokeStyle = INK; g.lineWidth = 0.025; g.strokeRect(-1.2, -1.0, 4.4, 0.18);
for (const x of [-0.6, 2.6]) {
  g.beginPath(); g.arc(x, -0.42, 0.42, 0, Math.PI * 2);
  g.fillStyle = '#6a5442'; g.fill(); ink(0.03);
  g.beginPath(); g.arc(x, -0.42, 0.3, 0, Math.PI * 2); g.fillStyle = '#a8a0a8'; g.fill();
  g.beginPath();
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; g.moveTo(x, -0.42); g.lineTo(x + Math.cos(a) * 0.4, -0.42 + Math.sin(a) * 0.4); }
  ink(0.025);
}
// the load: a wardrobe, a mirror leaning on it, a table with chairs upside down on it, a rolled mattress
g.fillStyle = '#9a6a44';
g.fillRect(1.6, -2.75, 1.1, 1.75); g.strokeStyle = INK; g.lineWidth = 0.025; g.strokeRect(1.6, -2.75, 1.1, 1.75);
g.beginPath(); g.moveTo(2.15, -2.65); g.lineTo(2.15, -1.1); ink(0.02);
g.fillStyle = '#c8a462'; g.fillRect(1.25, -2.2, 0.42, 1.2);
g.fillStyle = '#d6dbe4'; g.fillRect(1.31, -2.12, 0.3, 1.04); g.strokeStyle = INK; g.strokeRect(1.25, -2.2, 0.42, 1.2);
g.fillStyle = '#7a5a3e';
g.fillRect(-0.9, -1.5, 1.6, 0.08); g.fillRect(-0.85, -1.45, 0.07, 0.45); g.fillRect(0.58, -1.45, 0.07, 0.45);
g.strokeRect(-0.9, -1.5, 1.6, 0.08);
for (const x of [-0.65, 0.2]) {
  g.fillStyle = '#6e4e36';
  g.fillRect(x, -2.0, 0.42, 0.06); g.fillRect(x, -2.0, 0.05, -0.0); g.fillRect(x + 0.02, -2.0, 0.04, 0.5); g.fillRect(x + 0.36, -2.0, 0.04, 0.5);
  g.fillRect(x, -1.56, 0.42, 0.05);
}
g.fillStyle = '#d8ccb4';
g.beginPath(); g.ellipse(1.0, -1.2, 0.5, 0.2, 0, 0, Math.PI * 2); g.fill(); ink(0.02);
// ropes over the load
g.beginPath(); g.moveTo(1.5, -2.6); g.lineTo(2.9, -1.0); g.moveTo(2.8, -2.6); g.lineTo(1.4, -1.0);
g.strokeStyle = '#b8a582'; g.lineWidth = 0.02; g.stroke();
