// The people of «Story of Your Life» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft, quiet shapes in plain colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who. A part's lengths are a man's metres times F.fit.h.
const V = () => MooodShapes.V;
const CUP = [0.93, 0.91, 0.86, 1], LID = [0.32, 0.3, 0.29, 1], MARKER = [0.16, 0.25, 0.42, 1], CAPWHITE = [0.9, 0.9, 0.88, 1];
// a paper cup of coffee held upright in the right hand (whatever the hand's turn: coffee stays level)
const cup = F => {
  const { add, mul } = V(), m = F.fit.h, h = F.P('RightHand'), s = F.side('RightHand');
  const base = add(add(h, mul(F.fwd('RightHand'), 0.035 * m)), [0, -0.04 * m, 0]), top = add(base, [0, 0.11 * m, 0]);
  F.tube([base, top], [[0, 0.03 * m], [1, 0.039 * m]], [[0, CUP]], 12, s);
  F.tube([top, add(top, [0, 0.012 * m, 0])], [[0, 0.041 * m], [1, 0.037 * m]], [[0, LID]], 12, s);
  F.point('cup', add(top, [0, 0.01 * m, 0]));
};
// a whiteboard marker in the right hand: the body out of the fist, its cap at the thumb's end
const marker = F => {
  const { add, mul } = V(), m = F.fit.h, h = F.P('RightHand'), s = F.side('RightHand'), f = F.fwd('RightHand');
  const a = add(h, mul(f, -0.02 * m)), b = add(h, mul(f, 0.1 * m));
  F.bar(a, b, 0.009 * m, 0.009 * m, [[0, CAPWHITE]], 6, s);
  F.bar(b, add(b, mul(f, 0.03 * m)), 0.0095 * m, 0.007 * m, [[0, MARKER]], 6, s);
};
// a climbing rope coiled and slung over the left shoulder, across the chest and the back to the right hip: six loops
// side by side, orange with a darker fleck
const ROPE = [[0.8, 0.36, 0.2, 1], [0.66, 0.27, 0.15, 1]];
const rope = F => {
  const { add, sub, mul, unit, cross, mix } = V(), m = F.fit.h, fwd = F.fwd('Chest');
  const shoulder = add(F.P('LeftArm'), mul(F.up('Chest'), 0.05 * m));
  const out = unit(sub(F.P('RightLeg'), F.P('LeftLeg')));
  const hip = add(F.P('RightLeg'), mul(out, 0.07 * m));
  const mid = mix(shoulder, hip, 0.5), half = sub(shoulder, mid), along = unit(half);
  const a = Math.hypot(half[0], half[1], half[2]) * 1.06, n = unit(cross(along, fwd));
  for (let k = 0; k < 6; k++) {
    const off = mul(n, (k - 2.5) * 0.017 * m), b = (0.15 + 0.008 * k) * m;
    const at = t => add(add(add(mid, mul(along, Math.cos(t) * a)), mul(fwd, Math.sin(t) * b)), off);
    // a loop as four tubes of eight points (a tube takes eight at most), each quarter meeting the next
    for (let q = 0; q < 4; q++) {
      const pts = [];
      for (let i = 0; i < 8; i++) pts.push(at(((q + i / 7) / 4) * Math.PI * 2));
      F.tube(pts, [[0, 0.011 * m], [1, 0.011 * m]], [[0, ROPE[k % 2]]], 6, n);
    }
  }
};
return {
  ...data,
  characters: {
    // Louise Banks, thirty-six: a linguist; slight, upright, dark brown hair to the jaw; a slate-blue cardigan over a
    // cream blouse, charcoal trousers
    louise: {
      kind: 'shapes', style: 'glass', who: 'woman', garment: 'cardigan', hair: 'bob',
      body: { height: 0.94, thick: 0.82, shoulders: 0.88, hips: 1.0 },
      colors: { skin: '#eccaae', hair: '#4a3326', top: '#ebe4d6', garment: '#46597a', bottom: '#45464d', shoes: '#2a2622' },
    },
    // Gary Donnelly, her age: a physicist; tall and loose, light brown tousled hair; a rust sweater, worn cords
    gary: {
      kind: 'shapes', style: 'glass', who: 'man', garment: 'none', hair: 'spiky',
      body: { height: 1.01, thick: 0.94, shoulders: 1.0 },
      colors: { skin: '#e6bd9b', hair: '#8a6240', top: '#b0603a', bottom: '#6e6656', shoes: '#3a2c22' },
    },
    // Louise at sixty-one: the same woman, a little heavier, her hair cut short and grey; a faded slate cardigan
    louise_61: {
      kind: 'shapes', style: 'glass', who: 'woman', garment: 'cardigan', hair: 'short',
      body: { height: 0.93, thick: 0.88, shoulders: 0.87, hips: 1.03 },
      colors: { skin: '#e8c3a6', hair: '#cdc8c0', top: '#ebe4d6', garment: '#66768a', bottom: '#4a4a50', shoes: '#2a2622' },
    },
    // their daughter at twenty-five: her father's height and his light-brown hair (in a ponytail), her mother's
    // slightness; a teal shell jacket over a cream top, jeans, boots — dressed for the rocks
    daughter_25: {
      kind: 'shapes', style: 'glass', who: 'woman', garment: 'jacket', hair: 'ponytail',
      body: { height: 0.97, thick: 0.8, shoulders: 0.9, hips: 0.98 },
      colors: { skin: '#eac6aa', hair: '#86603e', top: '#e2dac8', garment: '#2f6064', bottom: '#3c4458', shoes: '#5e4a38' },
    },
    // Colonel Weber: square, upright, greying, close-cropped; the army's olive field jacket and cap
    weber: {
      kind: 'shapes', style: 'glass', who: 'man', garment: 'field', hair: 'none', hat: 'cap',
      body: { height: 1.0, thick: 1.04, shoulders: 1.06 },
      colors: { skin: '#d6a986', hair: '#7d776e', top: '#5c5d46', garment: '#5a5b40', bottom: '#56573e', shoes: '#1e1c1a', hat: '#55563c' },
    },
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines, quieter and finer than `soft`, with grown-ups' proportions
    // — a head and a trunk of a grown-up's size, a neck, long legs, slim limbs with palms and shoes; a simple face (eyes,
    // brows, nose, mouth — <id>_mood shows on it)
    styles: {
      glass: {
        from: 'soft', name: 'Story of Your Life', head: 1.2, neck: 0.6, legs: 0.96, limb: 1.05, line: 1.3,
        trunk: { w: [0.96, 1.0, 0.92, 1.0, 0.98], d: [0.98, 1.0, 0.96, 0.98, 0.9] }, arms: 'palm', feet: 'shoe',
      },
    },
    garments: {
      // a long cardigan: open, from the shoulders to the hips, its sleeves the cardigan's
      cardigan: { name: 'cardigan', hang: [{ to: 0.62, from: 'shoulders', flare: 0.08, folds: false }], sleeves: 'garment' },
      // a field jacket: straight, from the shoulders to below the belt
      field: { name: 'field jacket', hang: [{ to: 0.5, from: 'shoulders', flare: 0.05, folds: false }], sleeves: 'garment' },
    },
    parts: {
      cup: { name: 'cup of coffee', draw: cup },
      marker: { name: 'marker', draw: marker },
      rope: { name: 'coiled rope', draw: rope },
    },
  },
};
