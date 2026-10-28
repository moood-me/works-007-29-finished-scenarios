// The house's long front, turned to the yard: honey-coloured logs on a footing of grey stones, the porch's door open
// on the right (the room inside warm with the hearth's light — the glow's light is the scene's `hearth`), a window on
// the left in a carved white frame with blue shutters open; a horseshoe over the door. Painted from its right corner
// (the anchor) to the left; the logs' ends stand out at the corner.
const L = e.lib, W = 8, H = 2.7;
// the footing
g.fillStyle = '#8d877c';
g.fillRect(-W, -0.32, W + 0.3, 0.34);
L.dabs(g, 61, -W, -0.3, W + 0.3, 0.3, ['#a39d91', '#757066', '#b1ab9d'], 70, 0.09, 0.6, 0.8);
g.save();
g.translate(0, -0.3);
L.logs(g, 63, -W, 0, -(H - 0.3), 0.2, 0.3);
g.restore();
// the door's opening: the room inside, warm and dim, the hearth's glow low on the left
const DX0 = -1.05, DX1 = -0.15, DY0 = -2.3, DY1 = -0.45;
g.fillStyle = '#3a2416';
g.fillRect(DX0, DY0, DX1 - DX0, DY1 - DY0);
const warm = g.createRadialGradient(DX0 + 0.25, DY1 - 0.35, 0, DX0 + 0.25, DY1 - 0.35, 1.3);
warm.addColorStop(0, '#e59a4f');
warm.addColorStop(0.5, '#8a4f2a');
warm.addColorStop(1, 'rgba(58, 36, 22, 0)');
g.fillStyle = warm;
g.fillRect(DX0, DY0, DX1 - DX0, DY1 - DY0);
// the leaf open inward, seen edgewise on the right of the opening
g.fillStyle = '#7b5535';
g.fillRect(DX1 - 0.2, DY0 + 0.04, 0.2, DY1 - DY0 - 0.04);
g.fillStyle = '#5c3e26';
g.fillRect(DX1 - 0.2, DY0 + 0.04, 0.04, DY1 - DY0 - 0.04);
// the door's frame and lintel
g.fillStyle = '#e9dfc8';
g.fillRect(DX0 - 0.09, DY0 - 0.1, 0.09, DY1 - DY0 + 0.1);
g.fillRect(DX1, DY0 - 0.1, 0.09, DY1 - DY0 + 0.1);
g.fillRect(DX0 - 0.12, DY0 - 0.16, DX1 - DX0 + 0.24, 0.1);
// the horseshoe over the door
g.strokeStyle = '#4a4a50';
g.lineWidth = 0.035;
g.beginPath();
g.arc((DX0 + DX1) / 2, DY0 - 0.32, 0.08, Math.PI * 0.15, Math.PI * 0.85, true);
g.stroke();
e.light(DX0 + 0.28, DY1 - 0.35, 0.45, '#ffae5c', 0.9, 'hearth');
// the window: panes warm from the room, a cross of glazing bars, the carved frame with its arched crest, the shutters
const WX = -3.6, WW = 0.86, WY0 = -1.98, WY1 = -1.0;
const pane = g.createLinearGradient(0, WY0, 0, WY1);
pane.addColorStop(0, '#6a4a32');
pane.addColorStop(1, '#c98a4c');
g.fillStyle = pane;
g.fillRect(WX - WW / 2, WY0, WW, WY1 - WY0);
g.fillStyle = '#efe7d2';
g.fillRect(WX - 0.025, WY0, 0.05, WY1 - WY0);
g.fillRect(WX - WW / 2, (WY0 + WY1) / 2 - 0.12, WW, 0.05);
g.fillRect(WX - WW / 2 - 0.1, WY0 - 0.06, 0.1, WY1 - WY0 + 0.12);
g.fillRect(WX + WW / 2, WY0 - 0.06, 0.1, WY1 - WY0 + 0.12);
g.fillRect(WX - WW / 2 - 0.14, WY1, WW + 0.28, 0.08);
// the crest over it: an arch with carved scallops and a blue sun
g.beginPath();
g.moveTo(WX - WW / 2 - 0.16, WY0 - 0.04);
g.quadraticCurveTo(WX, WY0 - 0.52, WX + WW / 2 + 0.16, WY0 - 0.04);
g.closePath();
g.fill();
g.fillStyle = '#4f72b0';
g.beginPath();
g.arc(WX, WY0 - 0.17, 0.08, 0, Math.PI * 2);
g.fill();
for (let i = -2; i <= 2; i++) {
  g.beginPath();
  g.arc(WX + i * 0.2, WY0 - 0.06, 0.035, 0, Math.PI * 2);
  g.fill();
}
// the shutters, folded back against the logs: blue boards with a white diamond
for (const s of [-1, 1]) {
  const x = s < 0 ? WX - WW / 2 - 0.1 - 0.42 : WX + WW / 2 + 0.1;
  g.fillStyle = '#4f72b0';
  g.fillRect(x, WY0, 0.42, WY1 - WY0);
  g.fillStyle = '#3c5d97';
  g.fillRect(x, WY0, 0.42, 0.04);
  g.fillRect(x, WY1 - 0.04, 0.42, 0.04);
  g.fillStyle = '#efe7d2';
  g.beginPath();
  g.moveTo(x + 0.21, WY0 + 0.3);
  g.lineTo(x + 0.33, (WY0 + WY1) / 2);
  g.lineTo(x + 0.21, WY1 - 0.3);
  g.lineTo(x + 0.09, (WY0 + WY1) / 2);
  g.fill();
}
e.light(WX, (WY0 + WY1) / 2 + 0.1, 0.35, '#ffc77a', 0.45, 'window');
