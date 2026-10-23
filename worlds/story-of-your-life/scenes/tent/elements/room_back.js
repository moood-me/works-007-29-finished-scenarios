// The heptapods' room beyond the glass: white, without a corner or a seam that can be seen — brightest in its middle,
// a little greyer toward its sides (metres from its foot).
const gr = g.createRadialGradient(0, -2.5, 0.5, 0, -2.5, 9);
gr.addColorStop(0, '#fbfbf8');
gr.addColorStop(0.6, '#eef0ee');
gr.addColorStop(1, '#d9dedd');
g.fillStyle = gr;
g.fillRect(-9, -9.02, 18, 9.1);
