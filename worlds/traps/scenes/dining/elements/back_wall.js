// The dining room's far wall: olive-green wallpaper with a faint gold stripe over a dark walnut wainscot, a picture
// rail, the cornice under the ceiling; the window on the left and the door to the hall on the right are holes in it
// (their casings painted round them), and between them the old magistrate's portrait in its gilt frame.
const W = 4.45;
const H = 3.32;
const win = [-3.3, -2.7, 1.3, 1.85];
const door = [1.5, -2.45, 1.0, 2.45];
const holes = () => {
  g.rect(-W, -H, W * 2, H);
  g.rect(win[0], win[1], win[2], win[3]);
  g.rect(door[0], door[1], door[2], door[3]);
};
// the wallpaper
g.fillStyle = '#5f6b49';
g.beginPath();
holes();
g.fill('evenodd');
g.save();
g.beginPath();
holes();
g.clip('evenodd');
g.strokeStyle = 'rgba(214, 186, 112, 0.22)';
g.lineWidth = 0.025;
g.beginPath();
for (let x = -W + 0.1; x < W; x += 0.22) {
  g.moveTo(x, -H);
  g.lineTo(x, -1.0);
}
g.stroke();
g.fillStyle = 'rgba(214, 186, 112, 0.16)';
for (let x = -W + 0.21; x < W; x += 0.44) {
  for (let y = -2.9; y < -1.1; y += 0.42) {
    g.beginPath();
    g.ellipse(x, y + ((x * 10) % 2 > 1 ? 0.21 : 0), 0.035, 0.06, 0, 0, Math.PI * 2);
    g.fill();
  }
}
// the wainscot: walnut panels, a moulded rail on top
g.fillStyle = '#4a3326';
g.fillRect(-W, -1.0, W * 2, 1.0);
g.strokeStyle = '#3a271d';
g.lineWidth = 0.03;
for (let x = -W + 0.12; x < W - 0.5; x += 0.72) g.strokeRect(x, -0.86, 0.6, 0.68);
g.fillStyle = '#5e4232';
g.fillRect(-W, -1.04, W * 2, 0.07);
g.fillStyle = '#2f1f17';
g.fillRect(-W, -0.12, W * 2, 0.12);
// the picture rail and the cornice
g.fillStyle = '#e4d7bd';
g.fillRect(-W, -2.94, W * 2, 0.04);
g.fillRect(-W, -H, W * 2, 0.16);
g.fillStyle = '#cdbd9d';
g.fillRect(-W, -H + 0.16, W * 2, 0.05);
g.restore();
// the casings round the window and the door: cream-painted wood
const casing = (x, y, w, h, sill) => {
  g.fillStyle = '#e6dcc6';
  g.beginPath();
  g.rect(x - 0.12, y - 0.14, w + 0.24, h + 0.14 + (sill ? 0.06 : 0));
  g.rect(x, y, w, h);
  g.fill('evenodd');
  g.strokeStyle = '#c9b996';
  g.lineWidth = 0.015;
  g.strokeRect(x - 0.06, y - 0.08, w + 0.12, h + 0.08);
  if (sill) {
    g.fillStyle = '#efe6d2';
    g.fillRect(x - 0.18, y + h, w + 0.36, 0.06);
  }
};
casing(win[0], win[1], win[2], win[3], true);
casing(door[0], door[1], door[2], door[3], false);
// the portrait: a magistrate of long ago in a gilt frame — black cap, red robe, white bands, a stern pale face
const px = -0.95;
const py = -2.72;
g.fillStyle = '#b48c3e';
g.fillRect(px - 0.42, py, 0.84, 1.02);
g.fillStyle = '#d6b45c';
g.fillRect(px - 0.37, py + 0.05, 0.74, 0.92);
g.fillStyle = '#2b2620';
g.fillRect(px - 0.32, py + 0.1, 0.64, 0.82);
g.fillStyle = '#8a2a26';
g.beginPath();
g.moveTo(px - 0.28, py + 0.92);
g.quadraticCurveTo(px - 0.26, py + 0.55, px, py + 0.5);
g.quadraticCurveTo(px + 0.26, py + 0.55, px + 0.28, py + 0.92);
g.closePath();
g.fill();
g.fillStyle = '#efe9dc';
g.fillRect(px - 0.035, py + 0.52, 0.03, 0.14);
g.fillRect(px + 0.005, py + 0.52, 0.03, 0.14);
g.fillStyle = '#d9b394';
g.beginPath();
g.ellipse(px, py + 0.38, 0.1, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#1e1a17';
g.beginPath();
g.ellipse(px, py + 0.27, 0.11, 0.05, 0, Math.PI, 0);
g.fill();
g.fillStyle = '#3a2a24';
g.fillRect(px - 0.05, py + 0.36, 0.03, 0.012);
g.fillRect(px + 0.02, py + 0.36, 0.03, 0.012);
g.fillRect(px - 0.03, py + 0.45, 0.06, 0.01);
