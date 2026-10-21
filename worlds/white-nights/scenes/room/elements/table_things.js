// What stands on the table, seen from the room (x along the table, y up from its top): a pile of papers tied with
// string, an inkwell with a quill, a cup on its saucer, cold since last night, and a brass candlestick with a stub of
// candle burnt down, wax run down it — still burning: he sat up all night and forgot it. Its flame is a layer that
// sways and trembles; its light, `flame`, the scene's `candle`
const INK = e.lib.INK;
// (the papers)
e.lib.box(g, -0.5, -0.1, 0.32, 0.1, '#e9e0c9', 0.006);
g.beginPath();
for (let k = 1; k < 6; k++) {
  g.moveTo(-0.5, -k * 0.017);
  g.lineTo(-0.18, -k * 0.017);
}
g.moveTo(-0.34, -0.1);
g.lineTo(-0.34, 0);
g.strokeStyle = 'rgba(74,63,58,0.5)';
g.lineWidth = 0.003;
g.stroke();
// (the inkwell, the quill)
e.lib.box(g, -0.08, -0.06, 0.07, 0.06, '#3c3a40', 0.005);
g.beginPath();
g.moveTo(-0.045, -0.05);
g.quadraticCurveTo(-0.03, -0.15, 0.02, -0.25);
g.strokeStyle = '#efe8da';
g.lineWidth = 0.01;
g.stroke();
g.strokeStyle = INK;
g.lineWidth = 0.003;
g.stroke();
// (the cup on its saucer)
g.fillStyle = '#e8e2d6';
g.beginPath();
g.ellipse(0.16, -0.008, 0.06, 0.008, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.moveTo(0.125, -0.075);
g.lineTo(0.195, -0.075);
g.lineTo(0.185, -0.012);
g.lineTo(0.135, -0.012);
g.closePath();
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.004;
g.stroke();
g.beginPath();
g.arc(0.205, -0.048, 0.015, -Math.PI / 2, Math.PI / 2);
g.stroke();
// (the candlestick: its round foot, the stem, the socket; the stub of candle with the wax run down it)
g.fillStyle = '#b08a44';
g.beginPath();
g.ellipse(0.4, -0.008, 0.055, 0.01, 0, 0, Math.PI * 2);
g.fill();
g.stroke();
e.lib.box(g, 0.39, -0.12, 0.02, 0.11, '#b8924a', 0.004);
e.lib.box(g, 0.37, -0.135, 0.06, 0.018, '#c49c52', 0.004);
e.lib.box(g, 0.385, -0.185, 0.03, 0.05, '#efe6cf', 0.004);
g.fillStyle = '#efe6cf';
g.beginPath();
g.ellipse(0.383, -0.15, 0.006, 0.016, 0, 0, Math.PI * 2);
g.ellipse(0.418, -0.142, 0.005, 0.012, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = INK;
g.lineWidth = 0.003;
g.beginPath();
g.moveTo(0.4, -0.185);
g.lineTo(0.4, -0.195);
g.stroke();
// (the flame)
e.layer('flame', { pivot: [0.4, -0.195], flicker: 0.35 }, f => {
  f.fillStyle = '#ffd890';
  f.beginPath();
  f.moveTo(0.4, -0.245);
  f.quadraticCurveTo(0.412, -0.21, 0.4, -0.193);
  f.quadraticCurveTo(0.388, -0.21, 0.4, -0.245);
  f.fill();
  f.fillStyle = '#fff4dc';
  f.beginPath();
  f.ellipse(0.4, -0.205, 0.004, 0.01, 0, 0, Math.PI * 2);
  f.fill();
});
e.light(0.4, -0.215, 0.06, '#ffc27a', 0.9, 'flame');
e.at(0.4, -0.215, 'flame');
e.at(0.16, -0.05, 'cup');
e.at(-0.34, -0.06, 'papers');
