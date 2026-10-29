// (Stage 5) The order on the lid of Roblet's tool box, close — an insert opened by `paper_open` (М2 «Перо», `pen`):
// the box's worn wooden lid under the work lamp, the typed order lying on it, the pen in Rivière's hand. The
// signature runs from `paper#from` to `paper#to`: painted once as a layer under a strip of paper (`veil`) that draws
// back toward its end as `ink` rises (animate); the pen's nib goes along with it (`pen`); a blot (`blot`) is a layer
// of its own. Stage heights; the warm lamp light is painted into it.
const W = e.aspect;
const cx = W / 2;
const PAPER = '#efe8d6';
// the box's lid: dark oiled wood, its planks, an iron corner
const wood = g.createLinearGradient(0, -0.1, 0, 1.1);
wood.addColorStop(0, '#5a4028');
wood.addColorStop(0.5, '#6e5034');
wood.addColorStop(1, '#3e2c1c');
g.fillStyle = wood;
g.fillRect(cx - 1.3, -0.1, 2.6, 1.2);
g.strokeStyle = 'rgba(30,20,12,0.6)';
g.lineWidth = 0.004;
for (const y of [0.18, 0.46, 0.74, 1.0]) {
  g.beginPath();
  g.moveTo(cx - 1.3, y);
  g.lineTo(cx + 1.3, y);
  g.stroke();
}
g.fillStyle = '#4a4a48';
g.fillRect(cx + 0.58, 0.02, 0.12, 0.12);
// the sheet, a little askew, its shadow on the wood
g.save();
g.translate(cx, 0.5);
g.rotate(-0.025);
g.fillStyle = 'rgba(0,0,0,0.35)';
g.fillRect(-0.3, -0.4, 0.62, 0.86);
g.fillStyle = PAPER;
g.fillRect(-0.32, -0.42, 0.62, 0.86);
g.fillStyle = '#2a2622';
g.textAlign = 'center';
g.font = 'bold 0.04px serif';
g.fillText(tr('ORDER'), -0.01, -0.31);
g.textAlign = 'left';
g.font = '0.024px monospace';
const lines = [tr('Roblet, mechanic, is dismissed'), tr('from the service of the line'), tr('for a fault in the inspection'), tr('of an engine.')];
lines.forEach((t, i) => g.fillText(t, -0.27, -0.2 + i * 0.045));
g.font = 'italic 0.026px serif';
g.fillText(tr('The Director:'), -0.27, 0.13);
g.strokeStyle = 'rgba(42,38,34,0.4)';
g.lineWidth = 0.002;
g.beginPath();
g.moveTo(-0.26, 0.24);
g.lineTo(0.26, 0.24);
g.stroke();
g.restore();
// the signature: from FROM to TO, a quick hand
const FROM = [cx - 0.2, 0.71];
const TO = [cx + 0.2, 0.7];
e.layer('sign', { box: [FROM[0] - 0.02, 0.6, TO[0] + 0.03, 0.8] }, c => {
  c.strokeStyle = '#1e2a52';
  c.lineWidth = 0.005;
  c.lineCap = 'round';
  c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(FROM[0], FROM[1]);
  const n = 40;
  for (let k = 1; k <= n; k++) {
    const t = k / n;
    const x = FROM[0] + (TO[0] - FROM[0]) * t;
    const y = FROM[1] + (TO[1] - FROM[1]) * t - 0.035 * Math.sin(t * Math.PI * 7) * (1 - 0.6 * t) - 0.02 * Math.sin(t * Math.PI);
    c.lineTo(x, y);
  }
  c.stroke();
});
// the strip of paper over it, drawing back toward TO as `ink` rises
e.layer('veil', { pivot: [TO[0] + 0.025, 0.7], box: [FROM[0] - 0.02, 0.62, TO[0] + 0.025, 0.79] }, c => {
  c.fillStyle = PAPER;
  c.fillRect(FROM[0] - 0.02, 0.62, TO[0] - FROM[0] + 0.045, 0.17);
});
// a blot where the pen pressed too hard
e.layer('blot', { box: [FROM[0] + 0.05, 0.64, FROM[0] + 0.17, 0.78] }, c => {
  c.fillStyle = '#1b264a';
  c.beginPath();
  c.ellipse(FROM[0] + 0.11, 0.71, 0.03, 0.022, 0.4, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(FROM[0] + 0.15, 0.74, 0.008, 0, Math.PI * 2);
  c.fill();
});
// the pen in his hand: its nib at FROM, the holder going up to the right, the cuff of his sleeve
e.layer('pen', { box: [FROM[0] - 0.02, 0.2, FROM[0] + 0.62, 0.74] }, c => {
  c.fillStyle = '#d8b48c';
  c.beginPath();
  c.ellipse(FROM[0] + 0.26, 0.45, 0.13, 0.08, -0.7, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#2a2e38';
  c.beginPath();
  c.moveTo(FROM[0] + 0.33, 0.32);
  c.lineTo(FROM[0] + 0.62, 0.2);
  c.lineTo(FROM[0] + 0.62, 0.44);
  c.lineTo(FROM[0] + 0.4, 0.5);
  c.closePath();
  c.fill();
  c.strokeStyle = '#1a1a1c';
  c.lineWidth = 0.012;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(FROM[0] + 0.005, FROM[1] - 0.008);
  c.lineTo(FROM[0] + 0.2, 0.47);
  c.stroke();
  c.strokeStyle = '#b8a060';
  c.lineWidth = 0.004;
  c.beginPath();
  c.moveTo(FROM[0], FROM[1]);
  c.lineTo(FROM[0] + 0.012, FROM[1] - 0.02);
  c.stroke();
});
e.at(FROM[0], FROM[1], 'from');
e.at(TO[0], TO[1], 'to');
