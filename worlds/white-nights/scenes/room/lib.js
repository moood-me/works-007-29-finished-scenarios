// «The Dreamer's Room» — what its paintings share, in the world's look (the embankment's, Grandmother's room): a wash
// of colour and a fine sepia ink line round every shape, all in daylight colours (the scene's light is the engine's:
// notes.md).
const { hash } = anim;
const INK = '#4a3f3a';

// A wall of the room on x0…x1 (metres), from the ceiling at -top down to the floor at 0: old green distemper gone
// dull, washed on unevenly (paler and darker patches), smoked darker under the ceiling, a few runs of damp down it,
// cracks in the plaster drawn in ink, a dark skirting board
function greenWall(g, x0, x1, top, seed) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -top, w, top);
  g.clip();
  g.fillStyle = '#93a084';
  g.fillRect(x0, -top, w, top);
  // (the wash: soft patches, paler and darker, with no edge)
  const n = Math.ceil(w * 5);
  for (let i = 0; i < n; i++) {
    const x = x0 + hash(i, seed) * w, y = -top + hash(i, seed + 1) * top, r = 0.3 + 0.5 * hash(i, seed + 2);
    const tone = hash(i, seed + 3) > 0.5 ? '178,188,160' : '100,112,88';
    const blot = g.createRadialGradient(x, y, 0, x, y, r);
    blot.addColorStop(0, `rgba(${tone},0.16)`);
    blot.addColorStop(1, `rgba(${tone},0)`);
    g.fillStyle = blot;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  // (the soot of years of candles and the stove's smoke, thickest under the ceiling)
  const soot = g.createLinearGradient(0, -top, 0, -top + 1.0);
  soot.addColorStop(0, 'rgba(62,60,48,0.42)');
  soot.addColorStop(1, 'rgba(62,60,48,0)');
  g.fillStyle = soot;
  g.fillRect(x0, -top, w, 1.0);
  // (runs of damp)
  for (let i = 0; i < Math.ceil(w * 0.8); i++) {
    const x = x0 + 0.2 + hash(i, seed + 5) * (w - 0.4), len = 0.5 + 0.9 * hash(i, seed + 6);
    const run = g.createLinearGradient(0, -top, 0, -top + len);
    run.addColorStop(0, 'rgba(84,90,70,0.28)');
    run.addColorStop(1, 'rgba(84,90,70,0)');
    g.fillStyle = run;
    g.beginPath();
    g.moveTo(x - 0.05, -top);
    g.quadraticCurveTo(x - 0.02, -top + len * 0.6, x, -top + len);
    g.quadraticCurveTo(x + 0.03, -top + len * 0.6, x + 0.07, -top);
    g.fill();
  }
  // (cracks)
  g.beginPath();
  for (let i = 0; i < Math.ceil(w * 0.7); i++) {
    let x = x0 + 0.3 + hash(i, seed + 8) * (w - 0.6), y = -top + 0.3 + hash(i, seed + 9) * (top - 0.8);
    g.moveTo(x, y);
    for (let k = 0; k < 4; k++) {
      x += (hash(i * 7 + k, seed + 10) - 0.5) * 0.16;
      y += 0.06 + 0.08 * hash(i * 7 + k, seed + 11);
      g.lineTo(x, y);
    }
  }
  g.strokeStyle = 'rgba(74,63,58,0.45)';
  g.lineWidth = 0.006;
  g.stroke();
  // (the skirting)
  g.fillStyle = '#5e5044';
  g.fillRect(x0, -0.12, w, 0.12);
  g.beginPath();
  g.moveTo(x0, -0.12);
  g.lineTo(x1, -0.12);
  g.strokeStyle = INK;
  g.lineWidth = 0.01;
  g.stroke();
  g.restore();
}

// A cut through a painting (an opening in a wall): what is painted there is taken away
function cut(g, x, y, w, h) {
  g.save();
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = '#000';
  g.fillRect(x, y, w, h);
  g.restore();
}

// A rectangle filled and outlined in ink
function box(g, x, y, w, h, fill, line = 0.01) {
  g.fillStyle = fill;
  g.fillRect(x, y, w, h);
  g.strokeStyle = INK;
  g.lineWidth = line;
  g.strokeRect(x, y, w, h);
}

return { INK, greenWall, cut, box };
