// The casket open in her hands, close (an insert, opened by `casket_open`): a small old casket of dark wood with gilt
// corners, its lid thrown back on its lining of faded crimson velvet, full of old jewels — pearls, a ruby collar, gold
// chains, rings — in the candlelight; her hands at its sides, her green habit below. With `stub` her own candle-end lies
// on top of the jewels. The light is painted (an insert carries its own).
const W = e.aspect;
const cx = W / 2;
const bg = g.createRadialGradient(cx, 0.55, 0.05, cx, 0.55, 1.1);
bg.addColorStop(0, '#3a4a38');
bg.addColorStop(1, '#0e140e');
g.fillStyle = bg;
g.fillRect(cx - 1.4, -0.05, 2.8, 1.1);
// her hands at the casket's sides
g.fillStyle = '#e8c2a4';
for (const s of [-1, 1]) {
  g.beginPath();
  g.ellipse(cx + s * 0.4, 0.68, 0.09, 0.13, s * 0.4, 0, Math.PI * 2);
  g.fill();
}
// the lid thrown back: its inside, the velvet
g.fillStyle = '#3a2214';
g.beginPath();
g.moveTo(cx - 0.36, 0.42);
g.lineTo(cx + 0.36, 0.42);
g.lineTo(cx + 0.33, 0.16);
g.lineTo(cx - 0.33, 0.16);
g.closePath();
g.fill();
g.fillStyle = '#7a2230';
g.fillRect(cx - 0.3, 0.19, 0.6, 0.2);
// the box
g.fillStyle = '#4a2a18';
g.fillRect(cx - 0.38, 0.42, 0.76, 0.36);
g.fillStyle = '#5c3620';
g.fillRect(cx - 0.36, 0.44, 0.72, 0.06);
g.fillStyle = '#c8a050';
for (const [x, y] of [[-0.38, 0.42], [0.32, 0.42], [-0.38, 0.72], [0.32, 0.72]]) g.fillRect(cx + x, y, 0.06, 0.06);
g.fillRect(cx - 0.04, 0.58, 0.08, 0.07);
// the jewels heaped in it
g.fillStyle = '#6a1a24';
g.fillRect(cx - 0.34, 0.43, 0.68, 0.06);
const gem = (x, y, r, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.arc(cx + x, y, r, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = 'rgba(255,255,255,0.6)';
  g.beginPath();
  g.arc(cx + x - r * 0.3, y - r * 0.3, r * 0.3, 0, Math.PI * 2);
  g.fill();
};
for (let i = 0; i < 26; i++) gem(-0.3 + i * 0.024, 0.43 + Math.sin(i * 0.9) * 0.012, 0.013, '#efe8dc');
for (const [x, c] of [[-0.22, '#b0182a'], [-0.08, '#b0182a'], [0.06, '#1a4ab0'], [0.2, '#b0182a'], [0.12, '#1a8a4a']]) gem(x, 0.415, 0.022, c);
g.strokeStyle = '#e0b050';
g.lineWidth = 0.008;
for (const k of [0, 1]) {
  g.beginPath();
  g.moveTo(cx - 0.3, 0.41 + k * 0.02);
  g.quadraticCurveTo(cx, 0.36 + k * 0.03, cx + 0.3, 0.42 + k * 0.01);
  g.stroke();
}
// her candle-end on top of the jewels
if (e.state.stub) {
  g.save();
  g.translate(cx + 0.02, 0.38);
  g.rotate(-1.2);
  g.fillStyle = '#f2ebd8';
  g.fillRect(-0.025, -0.11, 0.05, 0.11);
  g.fillStyle = '#2a2420';
  g.fillRect(-0.004, -0.13, 0.008, 0.022);
  g.restore();
}
e.at(cx, 0.42, 'jewels');
