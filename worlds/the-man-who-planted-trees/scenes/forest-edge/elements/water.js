// The stream's water, from above (x across, y toward the viewer; its centre 14 m ahead, so a point `d` metres ahead is
// at y = 14 − d), lying at the water's level in the channel the relief cuts: painted only where the water is — the
// sky's pale colour it mirrors (a mirror shows no sky: its own paint stands for it), a few darker lines of the current.
// In the wood the land's painting carries the stream on.
const L = e.lib, Y = (d) => 14 - d;
const edgeAt = (d, side) => L.streamX(d) + side * (L.streamW(d) / 2 + 0.6);
g.fillStyle = "#9db3c7";
g.beginPath();
for (let d = -4; d <= 32; d += 0.25) g.lineTo(edgeAt(d, -1), Y(d));
for (let d = 32; d >= -4; d -= 0.25) g.lineTo(edgeAt(d, 1), Y(d));
g.closePath();
g.fill();
g.strokeStyle = "rgba(120, 140, 152, 0.55)";
g.lineCap = "round";
for (let i = 0; i < 110; i++) {
  const d = -4 + e.rnd() * 35, l = 0.6 + e.rnd() * 1.6, off = (e.rnd() - 0.5) * L.streamW(d) * 0.7;
  g.lineWidth = 0.025 + e.rnd() * 0.03;
  g.beginPath();
  g.moveTo(L.streamX(d) + off, Y(d));
  g.lineTo(L.streamX(d + l) + off, Y(d + l));
  g.stroke();
}
