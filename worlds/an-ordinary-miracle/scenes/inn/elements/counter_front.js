// The counter's front (1.64 m long, 0.95 m high): a thick oak top edge, three sunk panels painted in the folk way —
// red with a pair of white birds and green leaves in the middle one, tulips in the side ones — a dark plinth.
const L = e.lib, W = 0.82, H = 0.95;
g.fillStyle = '#6a4428';
g.fillRect(-W, -H, 2 * W, H);
L.dabs(g, 401, -W, -H, 2 * W, H, ['#7a5232', '#5a3a24'], 40, 0.08, 0.5, 0.4);
g.fillStyle = '#8a6038';
g.fillRect(-W - 0.04, -H - 0.02, 2 * W + 0.08, 0.07);
g.fillStyle = '#3f2818';
g.fillRect(-W, -0.1, 2 * W, 0.1);
const panel = (cx, w, birds) => {
  g.fillStyle = '#4a3020';
  g.fillRect(cx - w / 2 - 0.02, -0.8, w + 0.04, 0.6);
  g.fillStyle = '#a63a2c';
  g.fillRect(cx - w / 2, -0.78, w, 0.56);
  g.strokeStyle = '#e2b048';
  g.lineWidth = 0.012;
  g.strokeRect(cx - w / 2 + 0.03, -0.75, w - 0.06, 0.5);
  // a stem and leaves
  g.strokeStyle = '#4f7a3e';
  g.lineWidth = 0.014;
  g.beginPath();
  g.moveTo(cx, -0.28);
  g.quadraticCurveTo(cx - 0.02, -0.45, cx, -0.6);
  g.stroke();
  g.fillStyle = '#5f8a4a';
  for (const s of [-1, 1]) {
    g.beginPath();
    g.ellipse(cx + s * 0.05, -0.42, 0.05, 0.018, s * 0.6, 0, Math.PI * 2);
    g.fill();
  }
  if (birds) {
    for (const s of [-1, 1]) {
      g.fillStyle = '#f1ebdc';
      g.beginPath();
      g.ellipse(cx + s * 0.13, -0.6, 0.06, 0.035, s * -0.2, 0, Math.PI * 2);
      g.fill();
      g.beginPath();
      g.arc(cx + s * 0.08, -0.64, 0.025, 0, Math.PI * 2);
      g.fill();
      g.beginPath();
      g.moveTo(cx + s * 0.18, -0.6);
      g.lineTo(cx + s * 0.24, -0.66);
      g.lineTo(cx + s * 0.23, -0.57);
      g.fill();
      g.fillStyle = '#e2b048';
      g.beginPath();
      g.moveTo(cx + s * 0.055, -0.645);
      g.lineTo(cx + s * 0.03, -0.635);
      g.lineTo(cx + s * 0.055, -0.628);
      g.fill();
    }
    g.fillStyle = '#e2b048';
    g.beginPath();
    g.arc(cx, -0.63, 0.03, 0, Math.PI * 2);
    g.fill();
  } else {
    g.fillStyle = '#e2b048';
    g.beginPath();
    g.moveTo(cx - 0.05, -0.62);
    g.lineTo(cx - 0.05, -0.7);
    g.lineTo(cx - 0.02, -0.66);
    g.lineTo(cx, -0.72);
    g.lineTo(cx + 0.02, -0.66);
    g.lineTo(cx + 0.05, -0.7);
    g.lineTo(cx + 0.05, -0.62);
    g.quadraticCurveTo(cx, -0.56, cx - 0.05, -0.62);
    g.fill();
  }
};
panel(-0.52, 0.42, false);
panel(0, 0.5, true);
panel(0.52, 0.42, false);
