// each ring grows from her feet over 3.6 s and fades as it grows; the three a third of that apart
for (let k = 0; k < 3; k++) {
  const u = (e.t / 3.6 + k / 3) % 1, ring = e.layer(`ring${k}`);
  ring.scale = 0.12 + 0.88 * u;
  ring.alpha = (1 - u) * 0.8;
}
