// The guest room's far wall: faded wallpaper of small blue-grey sprigs on cream over a plain painted dado, a picture
// rail; the window on the left and the door to the corridor on the right are holes in it (their casings painted round
// them), and over the bed a little framed print of a mountain lake.
const W = 3.4;
const H = 2.9;
const win = [-2.85, -2.2, 0.9, 1.35];
const door = [1.05, -2.15, 1.0, 2.15];
const holes = () => {
  g.rect(-W, -H, W * 2, H);
  g.rect(win[0], win[1], win[2], win[3]);
  g.rect(door[0], door[1], door[2], door[3]);
};
g.fillStyle = '#d9cfb8';
g.beginPath();
holes();
g.fill('evenodd');
g.save();
g.beginPath();
holes();
g.clip('evenodd');
// the sprigs
g.strokeStyle = 'rgba(92, 108, 128, 0.35)';
g.lineWidth = 0.008;
g.fillStyle = 'rgba(92, 108, 128, 0.3)';
for (let x = -W + 0.1; x < W; x += 0.24) {
  for (let y = -2.6; y < -0.9; y += 0.3) {
    const cx = x + ((Math.round(y / 0.3) % 2) ? 0.12 : 0);
    g.beginPath();
    g.moveTo(cx, y + 0.05);
    g.quadraticCurveTo(cx + 0.02, y, cx, y - 0.05);
    g.stroke();
    for (const s of [-1, 1]) {
      g.beginPath();
      g.ellipse(cx + s * 0.022, y - 0.01 * s, 0.018, 0.008, s * 0.6, 0, Math.PI * 2);
      g.fill();
    }
  }
}
// the dado: painted grey-green, a rail on top, the skirting
g.fillStyle = '#8c9481';
g.fillRect(-W, -0.85, W * 2, 0.85);
g.fillStyle = '#e8e0cc';
g.fillRect(-W, -0.89, W * 2, 0.05);
g.fillStyle = '#5a4a3c';
g.fillRect(-W, -0.1, W * 2, 0.1);
// the picture rail and the cornice
g.fillStyle = '#ece4d0';
g.fillRect(-W, -2.66, W * 2, 0.035);
g.fillRect(-W, -H, W * 2, 0.1);
g.restore();
// the casings: white-painted wood
const casing = (x, y, w, h, sill) => {
  g.fillStyle = '#ece6d6';
  g.beginPath();
  g.rect(x - 0.1, y - 0.12, w + 0.2, h + 0.12 + (sill ? 0.05 : 0));
  g.rect(x, y, w, h);
  g.fill('evenodd');
  g.strokeStyle = '#cfc4a8';
  g.lineWidth = 0.012;
  g.strokeRect(x - 0.05, y - 0.07, w + 0.1, h + 0.07);
  if (sill) {
    g.fillStyle = '#f2ecdc';
    g.fillRect(x - 0.15, y + h, w + 0.3, 0.05);
  }
};
casing(win[0], win[1], win[2], win[3], true);
casing(door[0], door[1], door[2], door[3], false);
// the print over the bed: a mountain lake in a thin black frame, a little askew
g.save();
g.translate(-0.95, -1.75);
g.rotate(0.03);
g.fillStyle = '#26221e';
g.fillRect(-0.24, -0.18, 0.48, 0.36);
g.fillStyle = '#efe8d6';
g.fillRect(-0.21, -0.15, 0.42, 0.3);
g.fillStyle = '#9fb3c4';
g.fillRect(-0.17, -0.11, 0.34, 0.12);
g.fillStyle = '#7d8c8a';
g.beginPath();
g.moveTo(-0.17, 0.01);
g.lineTo(-0.08, -0.08);
g.lineTo(0.0, -0.02);
g.lineTo(0.08, -0.09);
g.lineTo(0.17, 0.01);
g.closePath();
g.fill();
g.fillStyle = '#6f8ea0';
g.fillRect(-0.17, 0.01, 0.34, 0.08);
g.restore();
