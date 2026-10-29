// The stream's water near the village, from above (x across from −12, y toward the viewer; its centre 14 m ahead, so a
// point `d` metres ahead is at y = 14 − d), lying at the water's level in the channel the relief cuts: painted only
// where the water is and only once it is back (not in the prologue: the bed dry) — the sky's pale colour it mirrors,
// a few darker lines of the current. Up the slope the land's painting carries the stream on.
const L = e.lib, X = (a) => a + 12, Y = (d) => 14 - d;
if (L.T(e) > 0) {
  const edgeAt = (d, side) => L.streamX(d) + side * (L.streamW(d) / 2 + 0.55);
  g.fillStyle = "#9db3c7";
  g.beginPath();
  for (let d = -6; d <= 34; d += 0.25) g.lineTo(X(edgeAt(d, -1)), Y(d));
  for (let d = 34; d >= -6; d -= 0.25) g.lineTo(X(edgeAt(d, 1)), Y(d));
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(120, 140, 152, 0.55)";
  g.lineCap = "round";
  for (let i = 0; i < 90; i++) {
    const d = -6 + e.rnd() * 39, l = 0.6 + e.rnd() * 1.6, off = (e.rnd() - 0.5) * L.streamW(d) * 0.7;
    g.lineWidth = 0.025 + e.rnd() * 0.03;
    g.beginPath();
    g.moveTo(X(L.streamX(d) + off), Y(d));
    g.lineTo(X(L.streamX(d + l) + off), Y(d + l));
    g.stroke();
  }
}
