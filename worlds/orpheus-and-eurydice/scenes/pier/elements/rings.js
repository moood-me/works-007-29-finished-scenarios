// Rings spreading on the water from her feet (from above: x across, y toward the viewer, metres from her feet): three
// thin pale rings, each a layer its animate grows and fades, one after another.
for (let k = 0; k < 3; k++) {
  e.layer(`ring${k}`, { pivot: [0, 0], box: [-0.8, -0.8, 0.8, 0.8] }, g => {
    g.strokeStyle = 'rgba(205,215,240,0.75)';
    g.lineWidth = 0.02;
    g.beginPath();
    g.arc(0, 0, 0.7, 0, Math.PI * 2);
    g.stroke();
  });
}
