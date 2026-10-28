// The pier glass's glass (1.4 m by 2.5 m, standing upright before the back wall): silvered, a little grey-green with
// age, darker at its edges; it mirrors the room — the chandelier, the people's backs.
const grad = g.createLinearGradient(-0.7, 0, 0.7, 0);
grad.addColorStop(0, '#6f7b77');
grad.addColorStop(0.5, '#8d9893');
grad.addColorStop(1, '#6f7b77');
g.fillStyle = grad;
g.fillRect(-0.7, -1.25, 1.4, 2.5);
