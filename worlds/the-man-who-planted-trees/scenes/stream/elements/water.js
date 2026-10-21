// The stream's water, from above (x across, y toward the viewer; its centre 18.5 m ahead, so a point `d` metres
// ahead is at y = 18.5 − d), lying at the water's level in the channel the relief cuts: painted only where the water
// is — the sky's pale colour it mirrors (a mirror shows no sky: its own paint stands for it), a few darker lines of
// the current along it. Up the slope the channel's bed rises out of it, and the land's painting carries the stream on.
const L = e.lib, Y = (d) => 18.5 - d;
const edgeAt = (d, side) => L.streamX(d) + side * (L.streamW(d) / 2 + 0.35);
g.fillStyle = "#cdd5dc";
g.beginPath();
for (let d = 0; d <= 37; d += 0.25) g.lineTo(edgeAt(d, -1), Y(d));
for (let d = 37; d >= 0; d -= 0.25) g.lineTo(edgeAt(d, 1), Y(d));
g.closePath();
g.fill();
g.strokeStyle = "rgba(150, 166, 180, 0.5)";
g.lineCap = "round";
for (let i = 0; i < 70; i++) {
  const d = e.rnd() * 36, l = 0.6 + e.rnd() * 1.6, off = (e.rnd() - 0.5) * L.streamW(d) * 0.7;
  g.lineWidth = 0.025 + e.rnd() * 0.03;
  g.beginPath();
  g.moveTo(L.streamX(d) + off, Y(d));
  g.lineTo(L.streamX(d + l) + off, Y(d + l));
  g.stroke();
}
