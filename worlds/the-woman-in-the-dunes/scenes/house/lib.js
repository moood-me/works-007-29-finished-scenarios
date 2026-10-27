// The House — what its paintings share: a steady random stream, the walls' weathered boards with the sand seeping
// through their seams. Everything is painted in the day's colours; the hour and the lamp are the scene's light.

// a steady random 0…1 stream from a seed (the same every painting)
function stream(seed) {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// a wall of vertical boards over x0…x1, from `top` down to the floor (y 0), as the house's front outside but
// smoke-browned within: the boards in a few close tones, their seams darker, and the sand that the wind drives
// through the seams — pale streaks running down from them, and small fans of it lying at the wall's foot
function boards(g, seed, x0, x1, top) {
  const r = stream(seed);
  const tones = ["#8a735b", "#806a53", "#917a61", "#856f58"];
  let x = x0;
  let i = 0;
  const seams = [];
  while (x < x1) {
    const w = 0.17 + r() * 0.07;
    g.fillStyle = tones[i % tones.length];
    g.fillRect(x, top, Math.min(w, x1 - x), -top + 0.02);
    seams.push(x);
    x += w;
    i++;
  }
  g.fillStyle = "rgba(58, 44, 33, 0.6)";
  for (const s of seams) g.fillRect(s, top, 0.018, -top + 0.02);
  // a rail along the wall at the height of the door's head, the boards nailed to it
  g.fillStyle = "#6c5642";
  g.fillRect(x0, -1.98, x1 - x0, 0.1);
  g.fillStyle = "rgba(40, 30, 22, 0.45)";
  g.fillRect(x0, -1.89, x1 - x0, 0.02);
  // sand seeping through the seams: pale streaks from where it comes in, a fan of it on the floor below
  for (let k = 0; k < seams.length; k++) {
    if (r() > 0.45) continue;
    const sx = seams[k];
    const from = -0.3 - r() * 1.6;
    const len = Math.min(0.25 + r() * 0.9, -from - 0.02);
    const run = g.createLinearGradient(0, from, 0, from + len);
    run.addColorStop(0, "rgba(222, 196, 146, 0.75)");
    run.addColorStop(1, "rgba(222, 196, 146, 0)");
    g.fillStyle = run;
    g.fillRect(sx - 0.02, from, 0.05, len);
    if (r() < 0.6) {
      g.fillStyle = "#d6b680";
      g.beginPath();
      g.ellipse(sx, 0.02, 0.12 + r() * 0.12, 0.05 + r() * 0.05, 0, Math.PI, 0);
      g.fill();
    }
  }
}

return { stream, boards };
