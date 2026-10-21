// The stone bridge on the far shore, to the right, where the stream comes down out of the park into the water: three
// round arches on two piers, a coping along the top, voussoirs drawn round each arch. Its foot is the water's level —
// the piers stand in it on pointed cutwaters, the stone wet and darker at the waterline; under the arches the vaults
// are in shade and the stream goes back between its banks. At either end the parapet sweeps down in a wing wall into a
// grassy embankment that runs into the park's own lawn, with a clump of shrubs where the stone meets the grass — the
// bridge leads from bank to bank, it does not stop. The water doubles it
const L = e.kit.brush, px = L.px(e), r = L.rand(53);
const STONE = '#ddd0b1';
const arches = [-9, 0.5, 10.5].map(c => [c, 3.6]);
// (an arch's opening: from the water up its sides to the springing, round the crown)
const opening = (p, c, rad) => {
  p.moveTo(c - rad, 0.2);
  p.lineTo(c - rad, -1.4);
  p.arc(c, -1.4, rad, Math.PI, 0);
  p.lineTo(c + rad, 0.2);
  p.closePath();
};
// what is seen through the arches: the stream going back between its banks in the vault's shade
const through = new Path2D();
for (const [c, rad] of arches) opening(through, c, rad);
g.fillStyle = '#7e9175';
g.fill(through);
g.save();
g.clip(through);
const stream = g.createLinearGradient(0, -1.2, 0, 0.2);
stream.addColorStop(0, '#83978d');
stream.addColorStop(1, '#94a89f');
g.fillStyle = stream;
g.fillRect(-14, -1.2, 29, 1.4);
g.fillStyle = 'rgba(214,224,220,0.3)';
for (const [c] of arches) g.fillRect(c - 1.6, -0.75, 3.2, 0.09);
// (the vault's shade: deepest under the crown, the far opening lighter)
for (const [c, rad] of arches) {
  const v = g.createRadialGradient(c, -0.6, rad * 0.3, c, -0.9, rad * 1.05);
  v.addColorStop(0, 'rgba(70,82,64,0)');
  v.addColorStop(1, 'rgba(70,82,64,0.75)');
  g.fillStyle = v;
  g.fillRect(c - rad, -5.1, rad * 2, 5.3);
}
g.restore();
// the stone: the face with its three openings cut out
const body = new Path2D();
body.rect(-17, -6.2, 39, 6.4);
for (const [c, rad] of arches) opening(body, c, rad);
g.fillStyle = STONE;
g.fill(body, 'evenodd');
for (let i = 0; i < 5; i++) {
  const x = -17 + 39 * r(), y = -6 + 6 * r(), rad = 3 + 5 * r();
  const gr = g.createRadialGradient(x, y, 0, x, y, rad), k = r() < 0.5 ? 0.92 : 1.08;
  gr.addColorStop(0, L.tone(STONE, k, 0.5));
  gr.addColorStop(1, L.tone(STONE, k, 0));
  g.fillStyle = gr;
  g.fill(body, 'evenodd');
}
// the piers' cutwaters: pointed footings standing out of the water before each pier, a shade darker
const feet = new Path2D();
for (const [x0, x1] of [[-5.4, -3.1], [4.1, 6.9]]) {
  const xc = (x0 + x1) / 2;
  feet.moveTo(x0 - 0.3, 0.2);
  feet.lineTo(x0 - 0.3, -1.3);
  feet.lineTo(xc, -2.2);
  feet.lineTo(x1 + 0.3, -1.3);
  feet.lineTo(x1 + 0.3, 0.2);
  feet.closePath();
}
L.wash(g, feet, '#cfc19f', [-6, -2.3, 7.5, 0.2], r, 2);
// the wing walls: the parapet sweeping down at either end into the embankment
const wings = new Path2D();
wings.moveTo(21.9, -6.65);
wings.quadraticCurveTo(25.5, -6.4, 29.5, -1.9);
wings.lineTo(30.2, 0.2);
wings.lineTo(21.9, 0.2);
wings.closePath();
wings.moveTo(-16.9, -6.65);
wings.quadraticCurveTo(-20.5, -6.4, -24.5, -1.9);
wings.lineTo(-25.2, 0.2);
wings.lineTo(-16.9, 0.2);
wings.closePath();
L.wash(g, wings, STONE, [-25.2, -6.7, 30.2, 0.2], r, 3);
// (the stone wet and darker along the waterline: the face, the cutwaters, the wings)
g.save();
g.clip(body, 'evenodd');
g.fillStyle = 'rgba(112,122,104,0.4)';
g.fillRect(-17, -0.45, 39, 0.65);
g.restore();
g.save();
g.clip(feet);
g.fillStyle = 'rgba(112,122,104,0.4)';
g.fillRect(-6, -0.45, 13.5, 0.65);
g.restore();
// the coping, a shade lighter, along the top and down the wings
const coping = new Path2D();
coping.moveTo(-24.5, -1.9);
coping.quadraticCurveTo(-20.5, -6.4, -16.9, -6.65);
coping.lineTo(21.9, -6.65);
coping.quadraticCurveTo(25.5, -6.4, 29.5, -1.9);
g.strokeStyle = L.tone(STONE, 1.08);
g.lineWidth = 0.45;
g.lineCap = 'round';
g.stroke(coping);
// the voussoirs and the courses
const lines = new Path2D();
for (const [c, rad] of arches) {
  for (let k = 0; k <= 10; k++) {
    const a = Math.PI + (k / 10) * Math.PI, ca = Math.cos(a), sa = Math.sin(a);
    lines.moveTo(c + ca * rad, -1.4 + sa * rad);
    lines.lineTo(c + ca * (rad + 0.9), -1.4 + sa * (rad + 0.9));
  }
}
lines.moveTo(-17, -5.0); lines.lineTo(22, -5.0);
lines.moveTo(-17, 0.0); lines.lineTo(22, 0.0);
L.pen(g, lines, 1.71 * px, 0.65);
// (the shade inside each arch's crown, hatched)
const vaults = new Path2D();
for (const [c, rad] of arches) { vaults.moveTo(c + rad, -1.4); vaults.arc(c, -1.4, rad, 0, Math.PI, true); vaults.closePath(); }
L.hatch(g, vaults, [-13, -5.2, 14.5, -1.4], 0.32, 0.9, 1.1 * px, 0.35);
L.pen(g, body, 2.09 * px, 0.85);
L.pen(g, feet, 1.8 * px, 0.75);
L.pen(g, wings, 1.8 * px, 0.7);
L.pen(g, coping, 1.5 * px, 0.6);
// the embankments: the park's grass rising over the wings' feet and running on into the lawn either side, in its greens
const banks = new Path2D();
banks.moveTo(-33, 0.25);
banks.lineTo(-33, -1.2);
banks.quadraticCurveTo(-27, -1.6, -23.2, -3.6);
banks.quadraticCurveTo(-21.5, -1.2, -19.2, 0.25);
banks.closePath();
banks.moveTo(24.6, 0.25);
banks.quadraticCurveTo(26.4, -1.4, 28.4, -3.6);
banks.quadraticCurveTo(32, -1.7, 39, -1.3);
banks.lineTo(39, 0.25);
banks.closePath();
L.wash(g, banks, '#a2b583', [-33, -3.7, 39, 0.25], r, 3);
L.grass(g, [[-29, -1.2, 9], [-25, -2.1, 7], [30, -1.9, 8], [35, -1.3, 9]], 0.35, r, 1.2 * px, 0.4);
// a clump of shrubs at either end where the stone meets the grass
L.foliage(g, [[-24.2, -3.4, 2.0], [-27.6, -2.4, 1.8], [-21.6, -1.6, 1.3], [29.6, -3.5, 2.2], [33.4, -2.6, 1.9], [27.2, -1.6, 1.3]],
  ['#56704c', '#6e8a5a', '#90aa74'], r, 0.5, 1.6 * px);
