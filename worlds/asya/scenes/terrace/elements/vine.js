// The vine over the terrace, close over our heads (2.7 m ahead): the pergola's beam along the top of the frame and
// the vine hanging from it — big leaves, tendrils, a few green bunches — each stretch of it swaying on its own in the
// evening air. Toward the frame's sides the leaves are only pencilled.
const L = e.lib;
const ACROSS = 0.4;
const D = 2.7;
const BEAM = -0.5;
// the beam
g.fillStyle = "#8a6c4e";
g.fillRect(-4.4, BEAM - 0.07, 8.8, 0.12);
L.unfinish(g, [-4.4, BEAM - 0.08, 4.4, BEAM + 0.06], ACROSS, D);
// the leaves, stretch by stretch (1.1 m each), hanging from the beam
for (let s = 0; s < 8; s++) {
  const x0 = -4.4 + s * 1.1;
  e.layer(`stretch${s}`, { pivot: [x0 + 0.55, BEAM], wind: { strength: 0.16, gust: 0.5, scale: 1.5 }, box: [x0 - 0.3, -1.1, x0 + 1.4, 0.35] }, (v) => {
    for (let i = 0; i < 22; i++) {
      const n = s * 40 + i;
      const x = x0 + 1.1 * L.rnd(n, 131);
      const hang = (0.05 + 0.4 * L.rnd(n, 133) ** 1.6) * (0.6 + 0.8 * L.rnd(s, 135));
      const y = BEAM - 0.25 + hang + 0.2 * L.rnd(n, 137);
      const k = L.edge((ACROSS + x) / D);
      const size = 0.17 + 0.1 * L.rnd(n, 139);
      L.leaf(v, x, y, size, -0.6 + 1.2 * L.rnd(n, 141));
      if (k < 0.95) {
        v.fillStyle = L.toPaper(["#6a8c45", "#7d9c52", "#5a7a3c", "#8aa65c"][n % 4], k);
        v.fill();
      }
      if (k > 0.1) {
        v.strokeStyle = L.graphite(0.6 * k);
        v.lineWidth = 0.004;
        v.stroke();
      }
    }
    // a tendril and, now and then, a bunch of green grapes
    const k = L.edge((ACROSS + x0 + 0.55) / D);
    v.strokeStyle = k > 0.5 ? L.graphite(0.5) : "#7d9a4e";
    v.lineWidth = 0.008;
    v.beginPath();
    v.moveTo(x0 + 0.5, BEAM);
    v.bezierCurveTo(x0 + 0.6, BEAM + 0.15, x0 + 0.4, BEAM + 0.25, x0 + 0.52, BEAM + 0.36);
    v.stroke();
    if (s % 3 === 1) {
      for (let i = 0; i < 12; i++) {
        const row = Math.floor(Math.sqrt(i * 2));
        v.fillStyle = L.toPaper("#a6bf6a", k);
        v.beginPath();
        v.arc(x0 + 0.75 + (i % 3) * 0.035 - row * 0.012, BEAM + 0.12 + row * 0.04, 0.022, 0, Math.PI * 2);
        v.fill();
      }
    }
  });
}
