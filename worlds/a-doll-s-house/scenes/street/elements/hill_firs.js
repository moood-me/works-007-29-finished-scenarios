// The spruces on the hill at the lane's end (copies, by size and turn): a dark snowy spruce. Metres, its foot at the
// snow.
const tiers = [[0, 0.9], [-0.9, 0.78], [-1.7, 0.62], [-2.4, 0.46], [-3.0, 0.3]];
for (const [y, w] of tiers) {
  g.fillStyle = '#25392d';
  g.beginPath();
  g.moveTo(-w, y);
  g.lineTo(0, y - 1.25);
  g.lineTo(w, y);
  g.closePath();
  g.fill();
  g.fillStyle = 'rgba(238,242,247,0.92)';
  g.beginPath();
  g.moveTo(-w * 0.9, y - 0.05);
  g.lineTo(0, y - 1.15);
  g.lineTo(-w * 0.25, y - 0.22);
  g.closePath();
  g.fill();
}
