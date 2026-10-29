// The shoe box seen from above (0.34 × 0.2 m; it stands on the box's front, `on` it): `shut` — the blue lid with its
// white band; `empty` — the inside, white card and a sheet of tissue paper; `opened` — the inside dusty, the tissue
// crumpled where they lay.
const k = e.state.box;
if (k === 'shut') {
  e.layer('top', { pivot: [0, 0] }, l => {
    l.fillStyle = '#3f5a86';
    l.fillRect(-0.178, -0.105, 0.356, 0.21);
    l.fillStyle = '#f2efe6';
    l.fillRect(-0.06, -0.105, 0.02, 0.21);
  });
} else if (k === 'empty' || k === 'opened') {
  e.layer('top', { pivot: [0, 0] }, l => {
    l.fillStyle = '#d8d0bc';
    l.fillRect(-0.17, -0.1, 0.34, 0.2);
    l.fillStyle = '#f4f0e6';
    l.fillRect(-0.155, -0.085, 0.31, 0.17);
    l.fillStyle = 'rgba(250,246,240,0.9)';
    l.beginPath();
    l.moveTo(-0.14, -0.06);
    l.lineTo(0.1, -0.08);
    l.lineTo(0.13, 0.05);
    l.lineTo(-0.12, 0.07);
    l.closePath();
    l.fill();
    if (k === 'opened') e.lib.dust(l, -0.18, -0.11, 0.36, 0.22);
  });
}
