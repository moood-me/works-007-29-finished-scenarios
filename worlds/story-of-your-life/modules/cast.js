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
    // Colonel Weber: square, upright, greying, close-cropped; the army's olive field jacket and cap
    weber: {
      kind: 'shapes', style: 'glass', who: 'man', garment: 'field', hair: 'none', hat: 'cap',
      body: { height: 1.0, thick: 1.04, shoulders: 1.06 },
      colors: { skin: '#d6a986', hair: '#7d776e', top: '#5c5d46', garment: '#5a5b40', bottom: '#56573e', shoes: '#1e1c1a', hat: '#55563c' },
    },
  },
  shapes: {
    // the world's style: soft rounded shapes and tinted lines, quieter and finer than `soft`; the head a little smaller
    // so the grown-ups read as grown-ups; a simple face (eyes, brows, nose, mouth — <id>_mood shows on it)
    styles: { glass: { from: 'soft', name: 'Story of Your Life', head: 1.28, neck: 0.55, legs: 0.93, line: 1.6 } },
    garments: {
      // a long cardigan: open, from the shoulders to the hips, its sleeves the cardigan's
      cardigan: { name: 'cardigan', hang: [{ to: 0.62, from: 'shoulders', flare: 0.08, folds: false }], sleeves: 'garment' },
      // a field jacket: straight, from the shoulders to below the belt
      field: { name: 'field jacket', hang: [{ to: 0.5, from: 'shoulders', flare: 0.05, folds: false }], sleeves: 'garment' },
    },
    parts: {
      cup: { name: 'cup of coffee', draw: cup },
      marker: { name: 'marker', draw: marker },
    },
  },
};
