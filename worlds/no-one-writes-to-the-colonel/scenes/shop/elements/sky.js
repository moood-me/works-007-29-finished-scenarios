// The rain sky: low grey cloud, a little lighter toward its top.
const gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, '#9aa4a8');
gr.addColorStop(0.6, '#b4bcbe');
gr.addColorStop(1, '#a8b0b0');
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, e.aspect + 0.6, 1.6);
