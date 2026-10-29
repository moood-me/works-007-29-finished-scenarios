// what is on the table close, and each moving acorn toward where it belongs now — eased (e.mem), its point with it
const s = e.state, A = e.aspect, M = A / 2, I = e.lib.INSERT, mode = s.acorns;
const sorting = mode === 'heap' || mode === 'sorted', counting = mode === 'counting';
const m = e.mem, k8 = Math.min(1, e.dt * 9);
m.c ??= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
m.l ??= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
e.layer('good').alpha = sorting ? 1 : 0;
e.layer('tens').alpha = counting ? 1 : 0;
for (let k = 0; k < 10; k++) {
  // a cracked acorn: in the heap, or put aside on the pile (its bit set, or the heap sorted)
  const [cx, cy] = I.cracked[k];
  const aside = mode === 'sorted' || ((s.cracked_out ?? 0) >> k) & 1;
  const tx = aside ? I.aside[0] + (k % 3) * 0.05 - 0.05 - cx : 0, ty = aside ? I.aside[1] - Math.floor(k / 3) * 0.035 - cy : 0;
  m.c[2 * k] += (tx - m.c[2 * k]) * k8;
  m.c[2 * k + 1] += (ty - m.c[2 * k + 1]) * k8;
  const c = e.layer(`cracked_${k}`);
  c.x = m.c[2 * k];
  c.y = m.c[2 * k + 1];
  c.alpha = sorting ? 1 : 0;
  if (sorting && !aside) e.at(M + cx + c.x, cy + c.y, `cracked_${k}`);
  // one of the last ten: in the loose line, or counted into the tenth heap
  const [lx, ly] = I.loose(k), [hx, hy] = I.tens(9);
  const counted = k < (s.counted ?? 0);
  const ux = counted ? hx + ((k * 37) % 9 - 4) * 0.011 - lx : 0, uy = counted ? hy + ((k * 53) % 7 - 3) * 0.011 - ly : 0;
  m.l[2 * k] += (ux - m.l[2 * k]) * k8;
  m.l[2 * k + 1] += (uy - m.l[2 * k + 1]) * k8;
  const l = e.layer(`loose_${k}`);
  l.x = m.l[2 * k];
  l.y = m.l[2 * k + 1];
  l.alpha = counting ? 1 : 0;
  if (counting) e.at(M + lx + l.x, ly + l.y, `acorn_${k}`);
}
const next = s.counted ?? 0;
if (counting && next < 10) {
  const [lx, ly] = I.loose(next);
  e.at(M + lx, ly, 'next');
}
if (sorting) e.at(M + I.heap[0], I.heap[1], 'heap');
e.layer('notebook_open').alpha = s.notebook === 'open' ? 1 : 0;
e.layer('notebook_shut').alpha = s.notebook === 'shut' ? 1 : 0;
e.layer('letter').alpha = s.letter ? 1 : 0;
