// The people of «Invisible Cities» as people in a scene (an element with "person"): who they are — figures of shapes
// in this world's style, clean straight-edged shapes in plain, quiet colours lit by the scene's own light — and how
// they move: the motions in cast.data.json. cast.md says who is who, what each carries and what each motion is.
// A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const WOOD = [0.36, 0.26, 0.18, 1];
const BRASS = [0.66, 0.52, 0.3, 1];
const SACKCLOTH = [0.6, 0.52, 0.4, 1];
return {
  ...data,
  characters: {
    // the Khan, seventy-seven: a big frame gone heavy and slow, a white beard, white hair cropped short under a soft dark
    // round cap, a heavy plum robe to the floor over a pale under-robe, a stick at his knee
    khan: { kind: 'shapes', style: 'cities', who: 'old', garment: 'robe', hair: 'short', hat: 'round', parts: ['beard', 'stick'],
      body: { height: 0.98, shoulders: 1.12, thick: 1.22 },
      colors: { skin: '#c99a7a', hair: '#e4dfd6', top: '#d8ccb4', garment: '#553a5c', bottom: '#553a5c', shoes: '#2a2220',
        hat: '#2e2836' } },
    // the Khan seventeen years before (the prologue): the same man, strong, his beard still dark
    khan_young: { kind: 'shapes', style: 'cities', who: 'man', garment: 'robe', hair: 'short', parts: ['beard'],
      body: { height: 1.02, shoulders: 1.16, thick: 1.24 },
      colors: { skin: '#c99a7a', hair: '#3a302a', top: '#cfc4b0', garment: '#4a2f3c', bottom: '#4a2f3c', shoes: '#2a2220' } },
    // Marco, thirty-seven: lean, grey at the temples, a long travelling coat the colour of road dust, a muted red scarf
    marco: { kind: 'shapes', style: 'cities', who: 'man', garment: 'long_coat', hair: 'short', scarf: true,
      body: { height: 1.0, thick: 0.9, shoulders: 1.0 },
      colors: { skin: '#d2a684', hair: '#4a3d34', top: '#d8d0c0', garment: '#6f7378', bottom: '#3c3a38', shoes: '#2c2622',
        accent: '#9a4a3c' } },
    // Marco at twenty (the prologue): the same coat, wet, darker; no grey
    marco_young: { kind: 'shapes', style: 'cities', who: 'youth', garment: 'long_coat', hair: 'short', scarf: true,
      body: { height: 1.0, thick: 0.86 },
      colors: { skin: '#dcb08e', hair: '#2e2520', top: '#d8d0c0', garment: '#4f5459', bottom: '#33312f', shoes: '#2a2420',
        accent: '#9a4a3c' } },
    // the Khan's boatman: no age, a plain dark tunic, bareheaded
    boatman: { kind: 'shapes', style: 'cities', who: 'man', garment: 'tunic', hair: 'short',
      body: { height: 0.97, thick: 1.04 },
      colors: { skin: '#b88866', hair: '#2a2420', top: '#5b5650', bottom: '#3a3632', shoes: '#26211e' } },
    // the ferrywoman of Valdrada, about seventy: small and straight, a long plain dress with sleeves the grey-blue of
    // lake water, a brown kerchief over grey hair
    ferrywoman: { kind: 'shapes', style: 'cities', who: 'woman', garment: 'robe', hair: 'bun', hat: 'kerchief',
      body: { height: 0.9, shoulders: 0.9, hips: 1.04, thick: 0.92 },
      colors: { skin: '#c79a7c', hair: '#bdb6ac', top: '#cfc6b4', garment: '#4d5a68', bottom: '#4d5a68', shoes: '#2a2624',
        hat: '#8a6f4e' } },
    // the last man of Ersilia, about fifty: broad, weathered, a long brown coat, his sack on his back
    ersilian: { kind: 'shapes', style: 'cities', who: 'man', garment: 'coat', hair: 'short', parts: ['sack'],
      body: { height: 0.99, shoulders: 1.06, thick: 1.06 },
      colors: { skin: '#c08c68', hair: '#5d554c', top: '#c9bca2', garment: '#6b5642', bottom: '#4a4037', shoes: '#2c2520' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, lit by the scene; a simple face
    styles: { cities: { from: 'flat', name: 'Invisible Cities', line: 0.8, face: 'simple' } },
    garments: {
      // a long travelling coat: from the shoulders to the shin, long sleeves
      long_coat: { name: 'long coat', hang: [{ to: 1.45, from: 'shoulders', flare: 0.22 }], sleeves: 'garment' },
    },
    hats: {
      // a soft round cap over the crown, without a brim
      round: { name: 'round cap', draw: F => {
        const { at, axes, egg, r, out, sides, square } = F.head;
        F.cap(at, axes, egg.map(e => e * r * out * 1.07), [0, 1, -0.12], 0.2, F.colors.hat, sides, square);
      } },
      // a kerchief over the crown and the back of the head down to the nape, the face left open
      kerchief: { name: 'kerchief', draw: F => {
        const { at, axes, egg, r, out, sides, square } = F.head;
        F.cap(at, axes, egg.map(e => e * r * out * 1.08), [0, 0.8, -0.6], -0.15, F.colors.hat, sides, square);
      } },
    },
    parts: {
      // a beard falling long from under the chin onto the chest (the face left clear)
      beard: { name: 'beard', draw: F => {
        const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out;
        F.ball(add(h.at, add(mul(hu, -r * 1.3), mul(hf, r * 0.42))), h.axes, [r * 0.5, r * 0.8, r * 0.38], F.colors.hair, h.sides);
      } },
      // a sack of sackcloth on the back between the shoulder blades, what a man takes when he leaves a town
      sack: { name: 'sack', draw: F => {
        const { add, mul } = V(), m = F.fit.h, axes = [F.side('Chest'), F.up('Chest'), F.fwd('Chest')];
        const c = add(F.P('Chest'), add(mul(axes[2], -0.24 * m), mul(axes[1], -0.06 * m)));
        F.ball(c, axes, [0.21 * m, 0.27 * m, 0.14 * m], SACKCLOTH, 12);
        F.ball(add(c, mul(axes[1], 0.27 * m)), axes, [0.07 * m, 0.06 * m, 0.06 * m], SACKCLOTH, 8);
      } },
      // a walking stick, its brass knob by the right knee, its foot on the floor beside the right foot: standing or
      // sitting, it leans there
      stick: { name: 'walking stick', draw: F => {
        const { add, mul, level } = V(), m = F.fit.h, side = level(F.side('Hips')), fwd = level(F.fwd('Hips'));
        const foot = F.P('RightFoot'), knee = F.P('RightShin');
        const floor = Math.min(F.P('LeftFoot')[1], foot[1]) - 0.07 * m;
        const bottom = add([foot[0], floor, foot[2]], add(mul(side, -0.14 * m), mul(fwd, 0.16 * m)));
        const top = add(knee, add(add(mul(side, -0.12 * m), mul(fwd, 0.1 * m)), [0, 0.12 * m, 0]));
        F.bar(bottom, top, 0.012 * m, 0.014 * m, [[0, WOOD]], 6, fwd);
        F.ball(top, [side, [0, 1, 0], fwd], [0.026 * m, 0.03 * m, 0.026 * m], BRASS, 8);
      } },
    },
  },
};
