// The boatman's boat, drawn up with its bow on the shingle and its stern in the water: a double-ended open boat of
// tarred planks, 4.4 m long, a pale strake under the gunwale — a form lofted over its frames (x along it, the bow at
// −x; y up; z across). The painting is a frame's length (gunwale to keel to gunwale, left to right) by the boat's
// length (bow at the top, stern at the bottom)
const Lb = 4.4, B = 0.68, D = 0.56, ribs = [];
for (let k = 0; k <= 12; k++) {
  const s = -1 + (2 * k) / 12, x = (s * Lb) / 2, b = B * Math.pow(Math.max(0, 1 - s * s), 0.55) + 0.015;
  const top = D + 0.16 * s * s, keel = 0.05 * s * s, rib = [];
  for (let j = 0; j <= 10; j++) {
    const t = -Math.PI / 2 + (Math.PI * j) / 10;
    rib.push([x, top - (top - keel) * Math.pow(Math.cos(t), 0.7), b * Math.sin(t)]);
  }
  ribs.push(rib);
}
const [l, t, rr, bt] = e.area, w = rr - l, h = bt - t;
g.fillStyle = '#4c4339';
g.fillRect(l, t, w, h);
// the planks, each a little different, running the boat's length
const r = e.lib.rnd(81), planks = 9;
for (let i = 0; i < planks; i++) {
  const u0 = i / planks;
  g.fillStyle = ['#51473c', '#483f35', '#564b3f'][Math.floor(r() * 3)];
  g.fillRect(l + w * u0, t, w / planks, h);
  g.fillStyle = 'rgba(30,24,20,0.5)';
  g.fillRect(l + w * u0, t, w * 0.006, h);
}
// the pale strake and the gunwale along both rims
for (const [u0, u1, c] of [[0, 0.05, '#7d6c58'], [0.05, 0.1, '#a99f8f'], [0.9, 0.95, '#a99f8f'], [0.95, 1, '#7d6c58']]) {
  g.fillStyle = c;
  g.fillRect(l + w * u0, t, w * (u1 - u0), h);
}
// worn tar and salt
for (let i = 0; i < 60; i++) {
  g.fillStyle = r() < 0.5 ? 'rgba(200,190,170,0.12)' : 'rgba(25,20,16,0.18)';
  g.beginPath();
  g.ellipse(l + r() * w, t + r() * h, 0.02 + r() * 0.06, 0.1 + r() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
e.form(e.kit.loft(ribs), { ground: '#4c4339' });
e.at(0, -1.1, 'stern');
