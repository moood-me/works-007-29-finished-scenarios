// The people of «A Doll's House» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, dolls of painted clay with simple faces, lit by the scene's own light — and what they move by
// (the motions in cast.data.json). cast.md says who is who and what each has. A part's lengths are a man's metres times
// F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const PAPER = [0.78, 0.66, 0.5, 1];
const STRING = [0.62, 0.16, 0.14, 1];
const TIE = [0.12, 0.11, 0.12, 1];
// the chest's axes: across it, up it, out of it
const chestAxes = F => [F.side('Chest'), F.up('Chest'), F.fwd('Chest')];
// Nora's house dress, 1879: a fitted bodice and a long skirt (garment), an overskirt draped over it to the knee
// (top), gathered behind into a small bustle; a white collar (accent) round the neck
function houseDress(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const [sd, uc, fc] = chestAxes(F);
  const hips = [F.side('Hips'), F.up('Hips'), F.fwd('Hips')];
  F.ball(add(F.P('Neck1'), mul(uc, -0.025 * m)), [sd, uc, fc], [0.064 * m, 0.016 * m, 0.058 * m], F.colors.accent, 16);
  const back = add(F.P('Hips'), add(mul(hips[1], 0.06 * m), mul(hips[2], -0.13 * m)));
  F.ball(back, hips, [0.15 * m, 0.11 * m, 0.1 * m], F.colors.top, 14);
  F.ball(add(back, add(mul(hips[1], -0.14 * m), mul(hips[2], -0.03 * m))), hips, [0.17 * m, 0.13 * m, 0.1 * m], F.colors.top, 14);
}
// Torvald's frock coat, open at the chest: the light waistcoat and the shirt front (top), a dark necktie
function shirtFront(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const axes = chestAxes(F);
  const front = F.clear(add(F.P('Neck1'), mul(axes[1], -0.12 * m)), 1, 0.002 * m);
  F.ball(front, axes, [0.075 * m, 0.13 * m, 0.016 * m], F.colors.top, 12);
  F.ball(add(F.clear(add(F.P('Neck1'), mul(axes[1], -0.03 * m)), 1, 0.01 * m), mul(axes[2], 0.004 * m)), axes, [0.03 * m, 0.016 * m, 0.012 * m], TIE, 10);
}
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
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'housedress', hair: 'bun',
      body: { height: 0.93, thick: 0.92, head: 1.12 },
      colors: { skin: '#f1d3bb', hair: '#bf8a48', top: '#22566a', garment: '#2f7182', bottom: '#2f7182', shoes: '#2a2220', accent: '#efe6d8' },
    },
    // Torvald Helmer: tall and upright, a black frock coat, a light waistcoat and shirt, brown hair and moustache
    torvald: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'frockcoat', hair: 'short', parts: ['moustache'],
      body: { height: 1.03, shoulders: 1.04, head: 1.1 },
      colors: { skin: '#e9c6a8', hair: '#7b5a3a', top: '#d9d2c3', garment: '#24252c', bottom: '#2e2f35', shoes: '#1c1a19' },
    },
    // Nils Krogstad: thin, in a worn grey-brown overcoat and a dark hat, a scarf the colour of old brick — come in from
    // the snow and not taken his things off
    krogstad: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'coat', hair: 'short', hat: 'bowler', scarf: true,
      body: { height: 1, thick: 0.88, shoulders: 0.96, head: 1.1 },
      colors: { skin: '#d8b399', hair: '#3b342e', top: '#5d574e', garment: '#4c4841', bottom: '#38352f', shoes: '#211e1c', hat: '#262321', accent: '#6a3f35' },
    },
  },
  shapes: {
    // the world's style: dolls — the toys' chunky clay figurines with simple faces (eyes, brows, nose, mouth), so the
    // faces read in the doll's house's wide shot
    styles: { doll: { from: 'toy', name: "A Doll's House", face: 'simple' } },
    garments: {
      housedress: {
        name: 'house dress',
        hang: [{ to: 1.95, from: 'waist', flare: 0.4, off: 0.94 }, { to: 0.85, from: 'waist', flare: 0.3, off: 1.02, color: 'top', folds: false }],
        sleeves: 'garment', bare: true, bodice: true, draw: houseDress,
      },
      frockcoat: { name: 'frock coat', hang: [{ to: 0.95, from: 'shoulders', flare: 0.14 }], sleeves: 'garment', draw: shirtFront },
    },
    hats: {
      // a bowler: a round crown high on the head, a narrow brim curled at the sides — the eyes under it seen
      bowler: {
        name: 'bowler',
        draw: F => {
          const { add, mul, unit, cross } = V();
          const { at, axes: [hs, hu, hf], r } = F.head;
          const tilt = unit(add(hu, mul(hf, 0.1)));
          const axes = [hs, tilt, cross(hs, tilt)];
          F.ball(add(at, mul(hu, r * 0.6)), axes, [r * 1.32, r * 0.05, r * 1.26], F.colors.hat, F.sides * 2);
          F.ball(add(at, mul(hu, r * 0.78)), axes, [r * 0.98, r * 0.62, r * 0.96], F.colors.hat, F.sides);
        },
      },
    },
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
