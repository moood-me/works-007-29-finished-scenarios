// What the tailors' shop's walls share.
// wash(g, e, x0, x1, h): a wall of the shop over x0…x1, h metres high (metres from its foot, up negative) — a pale
// blue wash gone chalky over plaster, an ochre dado to 1.1 m with a dark line along its top, the wash rubbed grey at
// shoulder height where backs and elbows lean, damp rising from the floor and stains running down from the ceiling.
// The caller clips its openings itself.
function wash(g, e, x0, x1, h) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -h - 0.02, w, h + 0.04);
  g.clip();
  g.fillStyle = '#b9c9cc';
  g.fillRect(x0, -h - 0.02, w, h + 0.04);
  for (let i = 0; i < w * 10; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,178,182,0.35)' : 'rgba(214,224,224,0.4)';
    g.fillRect(x0 + e.rnd() * w, -h + e.rnd() * h, 0.3 + e.rnd() * 0.8, 0.05 + e.rnd() * 0.12);
  }
  for (let i = 0; i < w * 1.1; i++) {
    const x = x0 + e.rnd() * w;
    const len = 0.3 + e.rnd() * 0.9;
    const gr = g.createLinearGradient(0, -h, 0, -h + len);
    gr.addColorStop(0, 'rgba(120,112,92,0.35)');
    gr.addColorStop(1, 'rgba(120,112,92,0)');
    g.fillStyle = gr;
    g.beginPath();
    g.moveTo(x - 0.1, -h);
    g.quadraticCurveTo(x - 0.04, -h + len * 0.6, x, -h + len);
    g.quadraticCurveTo(x + 0.05, -h + len * 0.6, x + 0.08 + e.rnd() * 0.1, -h);
    g.fill();
  }
  // rubbed grey where shoulders lean
  g.fillStyle = 'rgba(120,130,130,0.12)';
  g.fillRect(x0, -1.6, w, 0.4);
  // the ochre dado and its dark line
  g.fillStyle = '#b8955c';
  g.fillRect(x0, -1.1, w, 1.12);
  for (let i = 0; i < w * 6; i++) {
    g.fillStyle = e.rnd() < 0.5 ? 'rgba(150,116,66,0.35)' : 'rgba(206,176,120,0.3)';
    g.fillRect(x0 + e.rnd() * w, -1.08 + e.rnd() * 1.0, 0.2 + e.rnd() * 0.6, 0.04 + e.rnd() * 0.1);
  }
  g.fillStyle = '#5e4a34';
  g.fillRect(x0, -1.12, w, 0.035);
  // knocks in the dado, the plaster showing
  for (let i = 0; i < w * 1.5; i++) {
    g.fillStyle = 'rgba(214,204,184,0.8)';
    g.beginPath();
    g.ellipse(x0 + e.rnd() * w, -0.15 - e.rnd() * 0.8, 0.03 + e.rnd() * 0.08, 0.02 + e.rnd() * 0.04, e.rnd() - 0.5, 0, Math.PI * 2);
    g.fill();
  }
  const damp = g.createLinearGradient(0, 0, 0, -0.4);
  damp.addColorStop(0, 'rgba(70,58,44,0.4)');
  damp.addColorStop(1, 'rgba(70,58,44,0)');
  g.fillStyle = damp;
  g.fillRect(x0, -0.4, w, 0.42);
  g.restore();
}
return { wash };
