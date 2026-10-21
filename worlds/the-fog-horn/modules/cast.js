// The people of «The Fog Horn» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, plain flat shapes in quiet colours lit by the scene's own light — and what they move by (the
// motions in cast.data.json). cast.md says who is who and what each carries. A part's lengths are a man's metres times
// F.fit.h (the person's height as a share of a man's 1.76 m); the points a part names (F.point) are the person's:
// "johnny#flame".
const V = () => MooodShapes.V;
const IRON = [0.17, 0.17, 0.18, 1];
const GLASS = [0.52, 0.56, 0.56, 1];
const FLAME = [1, 0.82, 0.52, 2];
// McDunn's hand lantern hanging by its bail from the right hand, swinging a little late as the hand moves: an iron
// cap, a glass, an iron foot; the middle of its glass is the person's point `flame` (where the scene's light stands)
function lantern(F, glass) {
  const { add, sub, mul, unit, cross } = V();
  const m = F.fit.h;
  const hand = F.P('RightHand');
  const mid = F.swing('lantern', add(hand, [0, -0.2 * m, 0]), 90);
  const up = unit(sub(hand, mid));
  const side = unit(cross(up, F.fwd('Hips')));
  const fwd = cross(side, up);
  const axes = [side, up, fwd];
  F.bar(add(mid, mul(up, 0.1 * m)), hand, 0.006 * m, 0.006 * m, [[0, IRON]], 5, fwd);
  F.ball(add(mid, mul(up, 0.085 * m)), axes, [0.052 * m, 0.026 * m, 0.052 * m], IRON, 10);
  F.ball(mid, axes, [0.044 * m, 0.068 * m, 0.044 * m], glass, 12);
  F.ball(add(mid, mul(up, -0.074 * m)), axes, [0.056 * m, 0.018 * m, 0.056 * m], IRON, 10);
  F.point('flame', mid);
}
return {
  ...data,
  characters: {
    // Johnny, the keeper's assistant: twenty-two, lean, dark hair, a short navy pea jacket over a grey jumper, a
    // rust-coloured scarf — the one warm colour on him
    johnny: {
      kind: 'shapes', style: 'fog', who: 'youth', garment: 'jacket', hair: 'short', scarf: true,
      body: { height: 0.99, thick: 0.86, shoulders: 0.98 },
      colors: { skin: '#d9ae8c', hair: '#33261f', top: '#a9a69e', garment: '#34435a', bottom: '#3b3b3e', shoes: '#262220', accent: '#a5533a' },
    },
    // McDunn, the keeper: twenty-five years on the rock — broad, heavy, a white beard, a dark knitted cap, a thick
    // oiled jacket over a grey-brown jumper
    mcdunn: {
      kind: 'shapes', style: 'fog', who: 'old', garment: 'jacket', hair: 'short', hat: 'cap', parts: ['beard'],
      body: { height: 0.99, shoulders: 1.1, thick: 1.16, arms: 1.02 },
      colors: { skin: '#c4957a', hair: '#cfcac1', top: '#8b8174', garment: '#2c3540', bottom: '#33312e', hat: '#272b31', shoes: '#211e1c' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { fog: { from: 'flat', name: 'The Fog Horn', line: 0.8, face: 'simple' } },
    parts: {
      // a full beard over the jaw, the mouth and the chin, the eyes and the nose clear (the colour of the hair)
      beard: {
        name: 'beard',
        draw: F => {
          const { add, mul } = V();
          const h = F.head;
          const [, hu, hf] = h.axes;
          const r = h.r * h.out;
          F.cap(h.at, h.axes, h.egg.map(e => e * r * 1.05), [0, -0.85, 0.53], 0.62, F.colors.hair, h.sides, h.square);
          F.ball(add(h.at, add(mul(hu, -r * 1.0), mul(hf, r * 0.45))), h.axes, [r * 0.5, r * 0.36, r * 0.34], F.colors.hair, h.sides);
        },
      },
      // the hand lantern, out: grey glass
      lantern: { name: 'lantern', draw: F => lantern(F, GLASS) },
      // …lit: the glass glows (its light is the scene's, at "<id>#flame")
      lantern_lit: { name: 'lit lantern', draw: F => lantern(F, FLAME) },
    },
  },
};
