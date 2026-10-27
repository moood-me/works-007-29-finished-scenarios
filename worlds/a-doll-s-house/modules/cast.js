// The people of «A Doll's House» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, dolls of painted clay with simple faces, lit by the scene's own light — and what they move by
// (the motions in cast.data.json). cast.md says who is who and what each has. A part's lengths are a man's metres times
// F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const PAPER = [0.78, 0.66, 0.5, 1];
const STRING = [0.62, 0.16, 0.14, 1];
const TIE = [0.12, 0.11, 0.12, 1];
const SASH_STRIPE = [0.86, 0.68, 0.24, 1];
const WHITE = [0.95, 0.94, 0.9, 1];
const HOOP = [0.5, 0.32, 0.17, 1];
const SKIN_DRUM = [0.9, 0.83, 0.68, 1];
const BRASS = [0.82, 0.66, 0.32, 1];
const GLASS = [0.86, 0.9, 0.9, 1];
const WINE = [0.95, 0.84, 0.5, 1];
const TOBACCO = [0.36, 0.22, 0.13, 1];
const EMBER = [1, 0.45, 0.15, 2];
const IVORY = [0.93, 0.89, 0.8, 1];
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
// Nora's Neapolitan costume for the tarantella: a long red skirt and bodice (garment), the white blouse's sleeves rolled
// to the elbow and its neckline (top, short), a striped sash at the waist (accent)
function naples(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const [sd, uc, fc] = chestAxes(F);
  const hips = [F.side('Hips'), F.up('Hips'), F.fwd('Hips')];
  F.ball(add(F.P('Neck1'), mul(uc, -0.02 * m)), [sd, uc, fc], [0.07 * m, 0.016 * m, 0.06 * m], F.colors.top, 16);
  F.ball(add(F.P('Hips'), mul(hips[1], 0.09 * m)), hips, [0.148 * m, 0.03 * m, 0.112 * m], F.colors.accent, 16);
  F.ball(add(F.P('Hips'), mul(hips[1], 0.06 * m)), hips, [0.15 * m, 0.008 * m, 0.114 * m], SASH_STRIPE, 16);
}
// a lady's ball gown: a low bodice (the garment's), a pale lace bertha round the shoulders (accent)
function gown(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const [sd, uc, fc] = chestAxes(F);
  F.ball(add(F.P('Neck1'), mul(uc, -0.05 * m)), [sd, uc, fc], [0.1 * m, 0.022 * m, 0.075 * m], F.colors.accent, 16);
}
// a tailcoat's front: the white waistcoat and the shirt front (top), a white tie
function whiteTie(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const axes = chestAxes(F);
  const front = F.clear(add(F.P('Neck1'), mul(axes[1], -0.12 * m)), 1, 0.002 * m);
  F.ball(front, axes, [0.06 * m, 0.11 * m, 0.016 * m], F.colors.top, 12);
  F.ball(add(F.clear(add(F.P('Neck1'), mul(axes[1], -0.03 * m)), 1, 0.01 * m), mul(axes[2], 0.004 * m)), axes, [0.034 * m, 0.014 * m, 0.012 * m], WHITE, 10);
}
// the tambourine Nora holds up in her right hand: a round wooden hoop, the skin across it, little brass jingles in its rim
const TAMBOURINE = F => {
  const m = F.fit.h;
  return { m, rim: [0.032 * m, 0.13 * m, 0.13 * m], skin: [0.022 * m, 0.122 * m, 0.122 * m], bell: [0.014 * m, 0.02 * m, 0.02 * m], axes: [null, null, null] };
};
function tambourine(F) {
  const { add, mul, sub, unit, dot, cross } = V();
  const K = F.keep(TAMBOURINE);
  const hand = F.P('RightHand');
  // the hand holds the hoop at its rim, the hoop going on up the forearm's line from it, its skin to the front
  const along = unit(sub(hand, F.P('RightForeArm')));
  const front = F.fwd('Chest');
  const face = unit(sub(front, mul(along, dot(front, along))));
  K.axes[0] = face;
  K.axes[1] = along;
  K.axes[2] = cross(face, along);
  const c = add(hand, mul(along, 0.12 * K.m));
  F.ball(c, K.axes, K.rim, HOOP, 20, 8);
  F.ball(add(c, mul(face, 0.006 * K.m)), K.axes, K.skin, SKIN_DRUM, 20, 8);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.6;
    F.ball(add(c, add(mul(along, Math.cos(a) * 0.13 * K.m), mul(K.axes[2], Math.sin(a) * 0.13 * K.m))), K.axes, K.bell, BRASS, 8);
  }
}
// a coupe of champagne in the right hand: the shallow bowl on its stem
const COUPE = F => {
  const m = F.fit.h;
  return { m, bowl: [0.05 * m, 0.012 * m, 0.05 * m], wine: [0.042 * m, 0.004 * m, 0.042 * m], stem: [[0, GLASS]], axes: [null, null, null] };
};
function coupe(F) {
  const { add, mul } = V();
  const K = F.keep(COUPE);
  const hand = F.P('RightHand');
  K.axes[0] = [1, 0, 0];
  K.axes[1] = [0, 1, 0];
  K.axes[2] = [0, 0, 1];
  const foot = add(hand, mul(K.axes[1], -0.01 * K.m));
  const top = add(hand, mul(K.axes[1], 0.07 * K.m));
  F.bar(foot, top, 0.005 * K.m, 0.005 * K.m, K.stem, 6, K.axes[0]);
  F.ball(add(top, mul(K.axes[1], 0.015 * K.m)), K.axes, K.bowl, GLASS, 14);
  F.ball(add(top, mul(K.axes[1], 0.03 * K.m)), K.axes, K.wine, WINE, 14);
}
// Rank's cigar between the fingers of his right hand, its tip glowing (the point `tip`: the smoke rises from it)
const CIGAR = F => {
  const m = F.fit.h;
  return { m, leaf: [[0, TOBACCO]], ash: [0.0095 * m, 0.0095 * m, 0.0095 * m], axes: [null, null, null] };
};
function cigar(F) {
  const { add, mul } = V();
  const K = F.keep(CIGAR);
  const hand = F.P('RightHand');
  // held across the fingers: out of the hand on the thumb's side
  const sd = F.side('RightHand');
  const back = add(hand, mul(sd, -0.04 * K.m));
  const tip = add(hand, mul(sd, 0.13 * K.m));
  F.bar(back, tip, 0.01 * K.m, 0.009 * K.m, K.leaf, 8, F.up('RightHand'));
  K.axes[0] = sd;
  K.axes[1] = F.up('RightHand');
  K.axes[2] = F.fwd('RightHand');
  F.ball(tip, K.axes, K.ash, EMBER, 8);
  F.point('tip', tip);
}
// a lady's closed fan held in both hands before the waist
const FAN = F => {
  const m = F.fit.h;
  return { m, ribs: [[0, IVORY]] };
};
function fan(F) {
  const { add, mul, sub, unit, mean } = V();
  const K = F.keep(FAN);
  const l = F.P('LeftHand');
  const r = F.P('RightHand');
  const mid = mean([l, r]);
  const across = unit(sub(r, l));
  F.bar(add(mid, mul(across, -0.05 * K.m)), add(mid, add(mul(across, 0.12 * K.m), mul(F.up('Hips'), 0.1 * K.m))), 0.012 * K.m, 0.022 * K.m, K.ribs, 8, F.fwd('Hips'), 0.35);
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
    // Nora at the Stenborgs' ball, in the Neapolitan fisher-girl's costume Torvald had made for her in Capri: a red
    // skirt and bodice, a white blouse, a sash of green and yellow
    nora_naples: {
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'naples', hair: 'bun',
      body: { height: 0.93, thick: 0.92, head: 1.12 },
      colors: { skin: '#f1d3bb', hair: '#bf8a48', top: '#f2ece0', garment: '#a8302a', bottom: '#a8302a', shoes: '#2a2220', accent: '#3f7a52' },
    },
    // Torvald at the ball: evening dress — a black tailcoat, a white waistcoat and tie
    torvald_evening: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'tailcoat', hair: 'short', parts: ['moustache'],
      body: { height: 1.03, shoulders: 1.04, head: 1.1 },
      colors: { skin: '#e9c6a8', hair: '#7b5a3a', top: '#efebe2', garment: '#1d1e24', bottom: '#1d1e24', shoes: '#141313' },
    },
    // Doctor Rank: tall and thin, a little stooped, grey hair, pale; in evening dress like the rest
    rank: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'tailcoat', hair: 'short', parts: ['moustache'],
      body: { height: 1.02, thick: 0.84, shoulders: 0.95, head: 1.08 },
      colors: { skin: '#e2cdbd', hair: '#a9a49c', top: '#e8e4da', garment: '#26262b', bottom: '#26262b', shoes: '#151414' },
    },
    // the Stenborgs' hired pianist: a young man in a plain black coat
    pianist: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'frockcoat', hair: 'short',
      body: { height: 0.98, thick: 0.9, head: 1.1 },
      colors: { skin: '#e8c9ad', hair: '#3a2c22', top: '#d9d2c3', garment: '#2a2a30', bottom: '#2a2a30', shoes: '#151414' },
    },
    // the Stenborgs' guests: two ladies in pale silk gowns, two gentlemen in evening dress
    guest_dove: {
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'gown', hair: 'bun',
      body: { height: 0.95, thick: 0.98, head: 1.1 },
      colors: { skin: '#efd3be', hair: '#5b3d28', top: '#b9bfd0', garment: '#b9bfd0', bottom: '#b9bfd0', shoes: '#2a2220', accent: '#f1ece2' },
    },
    guest_rose: {
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'gown', hair: 'bun',
      body: { height: 0.92, thick: 1.04, head: 1.1 },
      colors: { skin: '#f0d6c2', hair: '#d4b27a', top: '#d9b4a8', garment: '#d9b4a8', bottom: '#d9b4a8', shoes: '#2a2220', accent: '#f1ece2' },
    },
    guest_consul: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'tailcoat', hair: 'short', parts: ['moustache'],
      body: { height: 0.99, thick: 1.18, shoulders: 1.06, head: 1.12 },
      colors: { skin: '#e6c0a2', hair: '#cfcac0', top: '#efebe2', garment: '#202127', bottom: '#202127', shoes: '#141313' },
    },
    guest_officer: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'tailcoat', hair: 'short',
      body: { height: 1.04, thick: 0.95, shoulders: 1.08, head: 1.08 },
      colors: { skin: '#e9c9ae', hair: '#8a6a44', top: '#efebe2', garment: '#1f2a3d', bottom: '#1f2a3d', shoes: '#141313' },
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
      naples: {
        name: 'Neapolitan costume',
        hang: [{ to: 1.9, from: 'waist', flare: 0.42, off: 0.94 }],
        short: true, bare: true, bodice: true, draw: naples,
      },
      gown: {
        name: 'ball gown',
        hang: [{ to: 2.0, from: 'waist', flare: 0.55, off: 0.94 }],
        sleeves: 'garment', short: true, bare: true, bodice: true, draw: gown,
      },
      tailcoat: { name: 'tailcoat', hang: [{ to: 0.9, from: 'shoulders', flare: 0.08 }], sleeves: 'garment', draw: whiteTie },
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
      tambourine: { name: 'tambourine', draw: tambourine },
      glass: { name: 'coupe of champagne', draw: coupe },
      cigar: { name: 'cigar', draw: cigar },
      fan: { name: 'closed fan', draw: fan },
    },
  },
};
