// A banana plant (metres from its foot): a green-brown trunk of wrapped stalks, big leaves arching out from its top,
// torn into strips by the wind, one dead leaf hanging brown down the trunk. The crown is a layer the wind stirs.
g.fillStyle = '#6f7a42';
g.beginPath();
g.moveTo(-0.14, 0.02);
g.lineTo(-0.1, -1.8);
g.lineTo(0.1, -1.8);
g.lineTo(0.15, 0.02);
g.closePath();
g.fill();
g.strokeStyle = 'rgba(70,60,36,0.5)';
g.lineWidth = 0.02;
for (let i = 0; i < 4; i++) {
  g.beginPath();
  g.moveTo(-0.1 + i * 0.06, 0);
  g.lineTo(-0.08 + i * 0.05, -1.75);
  g.stroke();
}
g.fillStyle = '#8a6a3a';
g.beginPath();
g.moveTo(0.05, -1.7);
g.quadraticCurveTo(0.35, -1.4, 0.25, -0.7);
g.lineTo(0.15, -0.75);
g.quadraticCurveTo(0.2, -1.3, 0.0, -1.6);
g.closePath();
g.fill();
e.layer('crown', { pivot: [0, -1.75], wind: { strength: 0.35, gust: 0.5 } }, c => {
  const leaf = (ang, len, col) => {
    const ex = Math.cos(ang) * len;
    const ey = -1.75 - Math.sin(ang) * len * 0.7;
    const mx = Math.cos(ang) * len * 0.5;
    const my = -1.75 - Math.sin(ang) * len * 0.9 - 0.35;
    c.fillStyle = col;
    c.beginPath();
    c.moveTo(0, -1.75);
    c.quadraticCurveTo(mx - 0.2, my - 0.25, ex, ey + 0.3);
    c.quadraticCurveTo(mx + 0.2, my + 0.15, 0, -1.75);
    c.fill();
    c.strokeStyle = 'rgba(230,236,190,0.6)';
    c.lineWidth = 0.02;
    c.beginPath();
    c.moveTo(0, -1.75);
    c.quadraticCurveTo(mx, my - 0.05, ex, ey + 0.3);
    c.stroke();
    // the tears
    c.strokeStyle = 'rgba(178,190,170,0.9)';
    c.lineWidth = 0.012;
    for (let k = 0.3; k < 0.95; k += 0.17) {
      c.beginPath();
      c.moveTo(Math.cos(ang) * len * k, -1.75 - Math.sin(ang) * len * k * 0.8 - 0.3 * Math.sin(k * Math.PI));
      c.lineTo(Math.cos(ang) * len * k + 0.05, -1.75 - Math.sin(ang) * len * k * 0.8 - 0.3 * Math.sin(k * Math.PI) + 0.22);
      c.stroke();
    }
  };
  leaf(Math.PI * 0.85, 1.5, '#4e7a32');
  leaf(Math.PI * 0.62, 1.3, '#5e8a3a');
  leaf(Math.PI * 0.4, 1.4, '#4a7230');
  leaf(Math.PI * 0.15, 1.6, '#5a8638');
  leaf(Math.PI * 0.5, 1.0, '#6e9a44');
});
