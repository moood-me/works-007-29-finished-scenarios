// A white haze in the heptapods' room, drifting slowly across it: soft bands (metres from its foot).
e.layer('mist', { drift: [0.05, 0], box: [-7, -4, 7, 0.05] }, c => {
  for (let i = 0; i < 9; i++) {
    const x = -7 + (i / 9) * 14 + e.rnd() * 0.8, y = -0.4 - e.rnd() * 2.6;
    for (const dx of [-14, 0, 14]) {
      const gr = c.createRadialGradient(x + dx, y, 0, x + dx, y, 1.6);
      gr.addColorStop(0, 'rgba(255,255,255,0.32)');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = gr;
      c.beginPath();
      c.ellipse(x + dx, y, 2.4, 0.9, 0, 0, Math.PI * 2);
      c.fill();
    }
  }
});
