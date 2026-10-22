// The people of «A Doll's House» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, dolls of painted clay with simple faces, lit by the scene's own light — and what they move by
// (the motions in cast.data.json). cast.md says who is who and what each has. A part's lengths are a man's metres times
// F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const PAPER = [0.78, 0.66, 0.5, 1];
const STRING = [0.62, 0.16, 0.14, 1];
// a Christmas parcel held in both hands before the chest: brown paper, tied crosswise with red string
function parcel(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const axes = [F.side('Hips'), F.up('Hips'), F.fwd('Hips')];
  const c = add(mul(add(F.P('LeftHand'), F.P('RightHand')), 0.5), mul(axes[2], 0.03 * m));
  F.ball(c, axes, [0.13 * m, 0.075 * m, 0.09 * m], PAPER, 16, 8);
  F.ball(c, axes, [0.134 * m, 0.079 * m, 0.012 * m], STRING, 16, 8);
  F.ball(c, axes, [0.012 * m, 0.079 * m, 0.094 * m], STRING, 16, 8);
}
return {
  ...data,
  characters: {
    // Nora Helmer: small, quick, fair hair up in a knot, a teal-blue house dress with a white collar — the brightest
    // colour in the room after the tree
    nora: {
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.93, thick: 0.92 },
      colors: { skin: '#f1d3bb', hair: '#bf8a48', top: '#2e6a78', garment: '#2e6a78', bottom: '#2e6a78', shoes: '#2a2220', accent: '#efe6d8' },
    },
    // Torvald Helmer: tall and upright, a black frock coat, a light waistcoat and shirt, brown hair and moustache
    torvald: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'coat', hair: 'short', parts: ['moustache'],
      body: { height: 1.03, shoulders: 1.04 },
      colors: { skin: '#e9c6a8', hair: '#7b5a3a', top: '#d9d2c3', garment: '#24252c', bottom: '#2e2f35', shoes: '#1c1a19' },
    },
    // Nils Krogstad: thin, in a worn grey-brown overcoat and a dark hat, a scarf the colour of old brick — come in from
    // the snow and not taken his things off
    krogstad: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'coat', hair: 'short', hat: 'hat', scarf: true,
      body: { height: 1, thick: 0.88, shoulders: 0.96 },
      colors: { skin: '#d8b399', hair: '#3b342e', top: '#5d574e', garment: '#4c4841', bottom: '#38352f', shoes: '#211e1c', hat: '#262321', accent: '#6a3f35' },
    },
  },
  shapes: {
    // the world's style: dolls — the toys' chunky clay figurines with simple faces (eyes, brows, nose, mouth), so the
    // faces read in the doll's house's wide shot
    styles: { doll: { from: 'toy', name: "A Doll's House", face: 'simple' } },
    parts: {
      // a moustache under the nose (the colour of the hair)
      moustache: {
        name: 'moustache',
        draw: F => {
          const { add, mul } = V();
          const h = F.head;
          const [, hu, hf] = h.axes;
          const r = h.r * h.out;
          F.ball(add(h.at, add(mul(hu, -r * 0.36), mul(hf, r * 0.9))), h.axes, [r * 0.34, r * 0.09, r * 0.12], F.colors.hair, h.sides);
        },
      },
      parcel: { name: 'parcel', draw: parcel },
    },
  },
};
