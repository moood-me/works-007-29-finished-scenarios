// A stack of moving boxes (metres from its foot; each copy a stack): two brown cardboard boxes, the lower one wide,
// taped across, a scrawl of marker on its side; there while the kitchen is packed (`packed`, chapter 3).
if (!e.state.packed) return;
const box = (x, y, w, h, c) => {
  g.fillStyle = c;
  g.fillRect(x - w / 2, y - h, w, h);
  g.fillStyle = 'rgba(80,56,30,0.25)';
  g.fillRect(x - w / 2, y - h, w, 0.03);
  g.fillStyle = 'rgba(232,220,180,0.75)';
  g.fillRect(x - 0.03, y - h, 0.06, h);
};
box(0, 0, 0.62, 0.46, '#b8905f');
box(0.04, -0.46, 0.5, 0.38, '#c49d6a');
g.strokeStyle = 'rgba(40,40,60,0.6)';
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-0.24, -0.22);
g.lineTo(-0.12, -0.25);
g.lineTo(-0.16, -0.18);
g.lineTo(-0.06, -0.2);
g.stroke();
