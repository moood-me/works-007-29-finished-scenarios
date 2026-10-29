// The estate agent's sign on the lawn by the fence, a year on (there while `sold`): a white post and arm, the board
// hanging from it, «Sold» across it in red.
if (!e.state.sold) return;
g.fillStyle = '#f4f1e8';
g.fillRect(-0.04, -1.5, 0.08, 1.5);
g.fillRect(-0.04, -1.5, 0.75, 0.06);
g.fillStyle = '#5a5862';
g.fillRect(0.12, -1.44, 0.01, 0.08);
g.fillRect(0.58, -1.44, 0.01, 0.08);
g.fillStyle = '#f7f4ee';
g.fillRect(0.05, -1.36, 0.6, 0.36);
g.fillStyle = '#c23b32';
g.fillRect(0.05, -1.36, 0.6, 0.05);
g.font = 'bold 0.16px sans-serif';
g.textAlign = 'center';
g.textBaseline = 'middle';
g.fillText(tr('Sold'), 0.35, -1.15);
e.at(0.35, -1.18, 'sign');
