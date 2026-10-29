// The armchair Mr Otis sets by Virginia's door, from before — its back and its wings (1.2 m high, 0.9 m wide), old
// green velvet, brass nails; its arms and its seat's front are armchair_front, before whoever sits in it. Only when
// `armchair` is true.
if (e.state.armchair) {
  g.fillStyle = '#2f4a3a';
  g.beginPath();
  g.moveTo(-0.34, -0.45);
  g.lineTo(-0.34, -1.08);
  g.quadraticCurveTo(-0.34, -1.22, -0.2, -1.22);
  g.lineTo(0.2, -1.22);
  g.quadraticCurveTo(0.34, -1.22, 0.34, -1.08);
  g.lineTo(0.34, -0.45);
  g.closePath();
  g.fill();
  g.fillStyle = '#3a5a46';
  for (const s of [-1, 1]) {
    g.beginPath();
    g.moveTo(s * 0.34, -1.12);
    g.quadraticCurveTo(s * 0.47, -1.06, s * 0.45, -0.78);
    g.lineTo(s * 0.44, -0.5);
    g.lineTo(s * 0.33, -0.5);
    g.closePath();
    g.fill();
  }
  g.fillStyle = '#26382d';
  g.fillRect(-0.32, -0.5, 0.64, 0.08);
  g.fillStyle = '#a08040';
  for (let x = -0.3; x <= 0.31; x += 0.06) {
    g.beginPath();
    g.arc(x, -1.19, 0.008, 0, Math.PI * 2);
    g.fill();
  }
}
