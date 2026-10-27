// The worktop seen from above (x -1.09...1.09, y -0.3 at the wall ... 0.3 at the front): white Formica with a grey
// fleck, the stainless sink under the window with its draining board, a washing-up bowl, a stack of plates, the
// kettle by the cooker.
g.fillStyle = '#ecebe2';
g.fillRect(-1.09, -0.3, 2.18, 0.6);
g.fillStyle = 'rgba(140, 140, 132, 0.4)';
for (let k = 0; k < 220; k++) g.fillRect(-1.09 + 2.18 * e.rnd(), -0.3 + 0.6 * e.rnd(), 0.006, 0.006);
// the sink and the draining board (ribbed)
g.fillStyle = '#b8bcbd';
g.beginPath();
g.roundRect(-0.25, -0.22, 0.5, 0.38, 0.04);
g.fill();
g.fillStyle = '#8f9496';
g.beginPath();
g.roundRect(-0.21, -0.18, 0.42, 0.3, 0.03);
g.fill();
g.fillStyle = '#c3c7c8';
g.fillRect(-0.85, -0.22, 0.56, 0.38);
g.strokeStyle = '#a3a8aa';
g.lineWidth = 0.008;
for (let x = -0.8; x < -0.3; x += 0.05) {
  g.beginPath();
  g.moveTo(x, -0.18);
  g.lineTo(x, 0.12);
  g.stroke();
}
// the red washing-up bowl in the sink
g.fillStyle = '#b5443a';
g.beginPath();
g.roundRect(-0.17, -0.15, 0.34, 0.24, 0.04);
g.fill();
// plates on the draining board, a stack
g.fillStyle = '#f2efe6';
g.beginPath();
g.arc(-0.6, -0.02, 0.12, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#6f8fbf';
g.lineWidth = 0.008;
g.beginPath();
g.arc(-0.6, -0.02, 0.1, 0, Math.PI * 2);
g.stroke();
// the kettle near the cooker: chrome, seen from above
g.fillStyle = '#c9cccc';
g.beginPath();
g.arc(0.82, -0.05, 0.1, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2b2a2a';
g.fillRect(0.76, -0.07, 0.12, 0.03);
