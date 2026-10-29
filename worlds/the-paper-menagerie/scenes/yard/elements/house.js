// The front of the house (metres from its foot at the middle, y up negative): a grey concrete foundation to the porch's
// height (0.6 m), butter-yellow clapboard over it to the eaves (3.4 m), white trim and a white soffit board. The front
// door behind the porch (x −1.0: a sage-green door with four panels and a small pane, a brass knob), the porch lamp
// beside it, off in the day; the kitchen window (x 2.4, 1.6–2.7 m up: white frame, the kitchen's white curtains with
// their red edge, the two paper goats on the sill inside); Jack's window (x −4.4: a pale blue curtain, a paper crane
// hanging in it). Jack's window is open glass — his room behind it is `jack_room`, and whoever stands in it is seen. At
// dusk the kitchen window's warm light is the layer `kitchen_lit` (animate fades it in by `house_lights`; its glow
// `kitchen`), the goats over it in the layer `sill`; the porch lamp's glow `lamp` (lit by `porch_lamp`). Sold
// (`sold`): no curtains, nothing on the sills.
g.fillStyle = '#b7b1a8';
g.fillRect(-8.2, -0.62, 16.4, 0.64);
for (let i = 0; i < 120; i++) {
  g.fillStyle = 'rgba(120,112,104,0.25)';
  g.fillRect(-8.2 + e.rnd() * 16.4, -0.6 + e.rnd() * 0.58, 0.04, 0.02);
}
g.fillStyle = '#ecdcab';
g.fillRect(-8.2, -3.42, 16.4, 2.82);
for (let y = -3.4; y < -0.6; y += 0.17) {
  g.fillStyle = 'rgba(150,120,70,0.22)';
  g.fillRect(-8.2, y + 0.15, 16.4, 0.02);
  g.fillStyle = 'rgba(255,250,230,0.35)';
  g.fillRect(-8.2, y, 16.4, 0.015);
}
// corner boards and the soffit
g.fillStyle = '#f4f1e8';
g.fillRect(-8.2, -3.62, 16.4, 0.22);
g.fillRect(-8.2, -3.42, 0.16, 2.82);
g.fillRect(8.04, -3.42, 0.16, 2.82);
const sold = !!e.state.sold;
// a window: frame, glass dark with the room behind (none where the window is open to the room), the curtains, the sill
const window = (cx, w, y0, y1, curtain, edge, open) => {
  g.fillStyle = '#f4f1e8';
  g.fillRect(cx - w / 2 - 0.1, y1 - 0.1, w + 0.2, y0 - y1 + 0.2);
  if (open) {
    // cut through the wall: the room behind is seen
    g.globalCompositeOperation = 'destination-out';
    g.fillRect(cx - w / 2, y1, w, y0 - y1);
    g.globalCompositeOperation = 'source-over';
  } else {
    g.fillStyle = '#4c4b55';
    g.fillRect(cx - w / 2, y1, w, y0 - y1);
  }
  g.fillStyle = sold ? 'rgba(0,0,0,0)' : curtain;
  g.beginPath();
  g.moveTo(cx - w / 2, y1);
  g.lineTo(cx - w / 2 + w * 0.3, y1);
  g.quadraticCurveTo(cx - w / 2 + w * 0.12, (y0 + y1) / 2, cx - w / 2 + w * 0.22, y0);
  g.lineTo(cx - w / 2, y0);
  g.closePath();
  g.moveTo(cx + w / 2, y1);
  g.lineTo(cx + w / 2 - w * 0.3, y1);
  g.quadraticCurveTo(cx + w / 2 - w * 0.12, (y0 + y1) / 2, cx + w / 2 - w * 0.22, y0);
  g.lineTo(cx + w / 2, y0);
  g.closePath();
  g.fill();
  if (edge && !sold) {
    g.fillStyle = edge;
    g.fillRect(cx - w / 2, y0 - 0.05, w * 0.22, 0.05);
    g.fillRect(cx + w / 2 - w * 0.22, y0 - 0.05, w * 0.22, 0.05);
  }
  g.fillStyle = '#f4f1e8';
  g.fillRect(cx - 0.025, y1, 0.05, y0 - y1);
  g.fillRect(cx - w / 2, (y0 + y1) / 2 - 0.025, w, 0.05);
  g.fillStyle = '#e6e2d6';
  g.fillRect(cx - w / 2 - 0.16, y0 + 0.08, w + 0.32, 0.07);
};
window(2.4, 1.3, -1.6, -2.7, '#f6f2e8', '#c9473c', false);
window(-4.4, 1.1, -1.6, -2.6, '#cfdbe6', null, true);
// the kitchen window lit from within at dusk: warm glass behind the curtains and the bars, faded in by animate
e.layer('kitchen_lit', {}, l => {
  l.fillStyle = '#f4c27e';
  l.fillRect(1.75, -2.7, 1.3, 1.1);
  l.fillStyle = sold ? 'rgba(0,0,0,0)' : 'rgba(250,240,222,0.85)';
  for (const s of [-1, 1]) {
    l.beginPath();
    l.moveTo(2.4 + s * 0.65, -2.7);
    l.lineTo(2.4 + s * 0.26, -2.7);
    l.quadraticCurveTo(2.4 + s * 0.49, -2.15, 2.4 + s * 0.36, -1.6);
    l.lineTo(2.4 + s * 0.65, -1.6);
    l.closePath();
    l.fill();
  }
  l.fillStyle = '#f4f1e8';
  l.fillRect(2.375, -2.7, 0.05, 1.1);
  l.fillRect(1.75, -2.175, 1.3, 0.05);
});
e.light(2.4, -2.15, 0.7, '#ffcf8f', 0.8, 'kitchen');
// on the kitchen sill inside: the two paper goats, green and brown
const goat = (g, x, c, d) => {
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(x - 0.07, -1.66);
  g.lineTo(x - 0.06, -1.74);
  g.lineTo(x + 0.04, -1.75);
  g.lineTo(x + 0.07, -1.82);
  g.lineTo(x + 0.09, -1.76);
  g.lineTo(x + 0.06, -1.7);
  g.lineTo(x + 0.05, -1.66);
  g.closePath();
  g.fill();
  g.fillStyle = d;
  g.fillRect(x - 0.06, -1.7, 0.012, 0.06);
  g.fillRect(x + 0.03, -1.7, 0.012, 0.06);
};
e.layer('sill', {}, l => {
  if (sold) return;
  goat(l, 2.05, '#a4b88a', '#7f936a');
  goat(l, 2.3, '#c0a582', '#987e60');
});
// in Jack's window: a paper crane on a thread
if (!sold) {
g.strokeStyle = 'rgba(240,240,236,0.8)';
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-4.25, -2.6);
g.lineTo(-4.25, -2.2);
g.stroke();
g.fillStyle = '#f2efe6';
g.beginPath();
g.moveTo(-4.36, -2.18);
g.lineTo(-4.25, -2.13);
g.lineTo(-4.13, -2.2);
g.lineTo(-4.25, -2.2);
g.closePath();
g.fill();
}
// the front door
g.fillStyle = '#f4f1e8';
g.fillRect(-1.6, -2.82, 1.2, 2.22);
g.fillStyle = '#7e9a86';
g.fillRect(-1.48, -2.72, 0.96, 2.12);
g.fillStyle = 'rgba(40,60,50,0.25)';
for (const [x, y, w, h] of [
  [-1.4, -2.62, 0.34, 0.5],
  [-0.94, -2.62, 0.34, 0.5],
  [-1.4, -1.5, 0.34, 0.8],
  [-0.94, -1.5, 0.34, 0.8],
])
  g.fillRect(x, y, w, h);
g.fillStyle = '#5a5862';
g.fillRect(-1.3, -2.0, 0.6, 0.36);
g.fillStyle = '#d8b260';
g.beginPath();
g.arc(-0.62, -1.62, 0.035, 0, Math.PI * 2);
g.fill();
// the porch lamp beside the door: a little black lantern, off
g.fillStyle = '#2f2d30';
g.fillRect(-0.24, -2.42, 0.03, 0.18);
g.fillRect(-0.3, -2.62, 0.16, 0.22);
g.fillStyle = '#ddd7c4';
g.fillRect(-0.27, -2.58, 0.1, 0.14);
e.light(-0.22, -2.51, 0.16, '#ffd08a', 1, 'lamp');
e.at(2.4, -2.15, 'kitchen_window');
e.at(-1.0, -1.7, 'door');
e.at(-4.4, -2.1, 'jack_window');
