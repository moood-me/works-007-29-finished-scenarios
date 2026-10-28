// The skiff's transom, the flat board closing its stern: the section at the stern (lib.section) filled with planks
// laid across, bare grey-brown inside, its top edge the dark worn rail. Metres, the water's level at the anchor.
const ring = e.lib.section(0);
const outline = () => {
  g.beginPath();
  for (let i = 0; i <= 20; i++) g.lineTo(ring[i][2], -ring[i][1]);
  g.closePath();
};
outline();
g.fillStyle = '#8f7d63';
g.fill();
g.save();
outline();
g.clip();
g.strokeStyle = 'rgba(70,56,42,0.45)';
g.lineWidth = 0.012;
for (let y = -0.5; y < 0.2; y += 0.17) {
  g.beginPath();
  g.moveTo(-0.7, y);
  g.lineTo(0.7, y);
  g.stroke();
}
g.fillStyle = '#5b4a3a';
g.fillRect(-0.7, -0.65, 1.4, 0.06);
g.restore();
