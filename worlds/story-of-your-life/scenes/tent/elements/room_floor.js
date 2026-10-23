// The white room's floor, seen from above: white going faintly grey toward the glass.
const gr = g.createLinearGradient(0, -4.3, 0, 4.3);
gr.addColorStop(0, '#f4f5f2');
gr.addColorStop(1, '#e2e5e3');
g.fillStyle = gr;
g.fillRect(-6, -4.3, 12, 8.6);
