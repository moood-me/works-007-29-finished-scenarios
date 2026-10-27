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
const BELT = [0.2, 0.15, 0.12, 1];
const PAPER_GREEN = [0.24, 0.42, 0.3, 1];
const PAPER_RED = [0.66, 0.16, 0.14, 1];
const SNOW = [0.95, 0.96, 0.98, 1];
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
// Rank's cigar in his left hand, its tip glowing (the point `tip`: the smoke rises from it)
const CIGAR = F => {
  const m = F.fit.h;
  return { m, leaf: [[0, TOBACCO]], ash: [0.0105 * m, 0.0105 * m, 0.0105 * m], axes: [null, null, null] };
};
function cigar(F) {
  const { add, mul, sub, unit, cross } = V();
  const K = F.keep(CIGAR);
  const hand = F.P('LeftHand');
  // out of the fist, on along the forearm's line and away from the chest
  const along = unit(sub(hand, F.P('LeftForeArm')));
  const out = unit(add(along, F.fwd('Chest')));
  const back = add(hand, mul(out, 0.04 * K.m));
  const tip = add(hand, mul(out, 0.17 * K.m));
  const across = unit(cross(out, F.up('Chest')));
  F.bar(back, tip, 0.01 * K.m, 0.009 * K.m, K.leaf, 8, across);
  K.axes[0] = across;
  K.axes[1] = out;
  K.axes[2] = unit(cross(across, out));
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
// Nora's winter coat: fitted to the waist and long to the ground (garment), its sleeves; a band of fur at the hem
// showing under it (the first hang) and a fur collar (accent)
function paletot(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const [sd, uc, fc] = chestAxes(F);
  F.ball(add(F.P('Neck1'), mul(uc, -0.03 * m)), [sd, uc, fc], [0.085 * m, 0.03 * m, 0.075 * m], F.colors.accent, 16);
}
// the porter's sheepskin coat to the knee (garment): a fleece collar (accent), a dark belt round the waist
function sheepskin(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const [sd, uc, fc] = chestAxes(F);
  const hips = [F.side('Hips'), F.up('Hips'), F.fwd('Hips')];
  F.ball(add(F.P('Neck1'), mul(uc, -0.035 * m)), [sd, uc, fc], [0.095 * m, 0.035 * m, 0.085 * m], F.colors.accent, 16);
  F.ball(add(F.P('Hips'), mul(hips[1], 0.1 * m)), hips, [0.168 * m, 0.022 * m, 0.13 * m], BELT, 16);
}
// an armful of Christmas parcels on the forearms, between the hands: a big one in brown paper tied with red string,
// a green one on it tied with gold, a small red one on top, a little askew ([side, up, out] and sizes: a man's metres)
const PARCELS = [
  { at: [0, 0.07, 0.02], size: [0.17, 0.065, 0.12], paper: PAPER, string: STRING },
  { at: [-0.02, 0.18, 0.01], size: [0.125, 0.05, 0.09], paper: PAPER_GREEN, string: SASH_STRIPE },
  { at: [0.035, 0.265, 0.015], size: [0.07, 0.04, 0.06], paper: PAPER_RED, string: SASH_STRIPE },
];
function parcels(F) {
  const { add, mul, mean } = V();
  const m = F.fit.h;
  const axes = [F.side('Hips'), F.up('Hips'), F.fwd('Hips')];
  const base = mean([F.P('LeftHand'), F.P('RightHand'), F.P('LeftForeArm'), F.P('RightForeArm')]);
  for (const p of PARCELS) {
    const c = add(base, add(mul(axes[0], p.at[0] * m), add(mul(axes[1], p.at[1] * m), mul(axes[2], p.at[2] * m))));
    const [w, h, d] = p.size;
    F.ball(c, axes, [w * m, h * m, d * m], p.paper, 16, 8);
    F.ball(c, axes, [(w + 0.004) * m, (h + 0.004) * m, 0.01 * m], p.string, 16, 8);
    F.ball(c, axes, [0.01 * m, (h + 0.004) * m, (d + 0.004) * m], p.string, 16, 8);
  }
}
// a coin lying on the porter's right palm
const COIN = F => {
  const m = F.fit.h;
  return { m, size: [0.018 * m, 0.005 * m, 0.018 * m], axes: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] };
};
function coin(F) {
  const { add, mul } = V();
  const K = F.keep(COIN);
  F.ball(add(F.P('RightHand'), mul(K.axes[1], 0.03 * K.m)), K.axes, K.size, BRASS, 12);
}
// a snowball in the right hand
const SNOWBALL = F => {
  const m = F.fit.h;
  return { r: [0.05 * m, 0.05 * m, 0.05 * m] };
};
function snowball(F) {
  const K = F.keep(SNOWBALL);
  F.ball(F.P('RightHand'), [F.side('RightHand'), F.up('RightHand'), F.fwd('RightHand')], K.r, SNOW, 12);
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
      colors: { skin: '#e2cdbd', hair: '#d8d4cc', top: '#e8e4da', garment: '#26262b', bottom: '#26262b', shoes: '#151414' },
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
    // Nora in the street: her long winter coat in her own teal-blue, trimmed with brown fur, a little fur toque
    nora_out: {
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'paletot', hair: 'bun', hat: 'toque',
      body: { height: 0.93, thick: 0.95, head: 1.12 },
      colors: { skin: '#f1d3bb', hair: '#bf8a48', top: '#22566a', garment: '#2a6678', bottom: '#2a6678', shoes: '#2a2220', accent: '#6e4c34', hat: '#6e4c34' },
    },
    // the porter who carries the tree up: a sheepskin coat to the knee, a cloth cap, a grey knitted scarf
    porter: {
      kind: 'shapes', style: 'doll', who: 'man', garment: 'sheepskin', hair: 'short', hat: 'cap', scarf: true,
      body: { height: 0.98, thick: 1.08, shoulders: 1.04, head: 1.1 },
      colors: { skin: '#e6b596', hair: '#6b4a30', top: '#7a5b3c', garment: '#7a5b3c', bottom: '#3a3530', shoes: '#241f1b', hat: '#34363c', accent: '#ddd0b4' },
    },
    // Anne-Marie, the nurse: grey-haired, in a long dark dress, a grey knitted shawl over the shoulders, a white cap
    anne_marie: {
      kind: 'shapes', style: 'doll', who: 'woman', garment: 'nanny', hair: 'bun', hat: 'bonnet',
      body: { height: 0.91, thick: 1.08, shoulders: 0.94, head: 1.1 },
      colors: { skin: '#ebcfb8', hair: '#c9c2b6', top: '#8d877c', garment: '#3a3136', bottom: '#3a3136', shoes: '#211d1c', hat: '#efe9df' },
    },
    // the Helmers' children in their winter things: Ivar, the eldest, and Bob in coats and knitted caps, little Emmy in
    // a red coat and a white bonnet
    ivar: {
      kind: 'shapes', style: 'doll', who: 'child', garment: 'kidcoat', hair: 'short', hat: 'stocking', scarf: true,
      body: { height: 0.74 },
      colors: { skin: '#f2d4bc', hair: '#c4914e', top: '#2d4a6b', garment: '#2d4a6b', bottom: '#2b2c33', shoes: '#211d1c', hat: '#b23a2e', accent: '#e6dcc8' },
    },
    bob: {
      kind: 'shapes', style: 'doll', who: 'child', garment: 'kidcoat', hair: 'short', hat: 'stocking', scarf: true,
      body: { height: 0.66 },
      colors: { skin: '#f2d4bc', hair: '#c4914e', top: '#6b4b33', garment: '#6b4b33', bottom: '#2b2c33', shoes: '#211d1c', hat: '#2f6b4f', accent: '#c9a23a' },
    },
    emmy: {
      kind: 'shapes', style: 'doll', who: 'toddler', garment: 'kidcoat', hair: 'short', hat: 'bonnet',
      colors: { skin: '#f4d8c2', hair: '#d0a060', top: '#b2362f', garment: '#b2362f', bottom: '#f1ebe0', shoes: '#3a2a24', hat: '#f1ebe0' },
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
      paletot: {
        name: 'winter coat',
        hang: [{ to: 1.97, from: 'waist', flare: 0.42, off: 0.95, color: 'accent', folds: false }, { to: 1.82, from: 'waist', flare: 0.4, off: 0.98 }],
        sleeves: 'garment', bodice: true, draw: paletot,
      },
      sheepskin: { name: 'sheepskin coat', hang: [{ to: 1.0, from: 'shoulders', flare: 0.22 }], sleeves: 'garment', draw: sheepskin },
      nanny: {
        name: "a nurse's dress and shawl",
        hang: [{ to: 1.95, from: 'waist', flare: 0.4, off: 0.94 }, { to: 0.5, from: 'shoulders', flare: 0.3, color: 'top', folds: false }],
        sleeves: 'garment', bodice: true,
      },
      kidcoat: { name: "a child's coat", hang: [{ to: 0.85, from: 'shoulders', flare: 0.24 }], sleeves: 'garment' },
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
      // Nora's toque: a small round fur hat set high on the knot of her hair
      toque: {
        name: 'fur toque',
        draw: F => {
          const { add, mul, unit, cross } = V();
          const { at, axes: [hs, hu, hf], r } = F.head;
          const tilt = unit(add(hu, mul(hf, -0.25)));
          const axes = [hs, tilt, cross(hs, tilt)];
          F.ball(add(at, add(mul(hu, r * 0.78), mul(hf, -r * 0.12))), axes, [r * 0.86, r * 0.42, r * 0.8], F.colors.hat, F.sides);
        },
      },
      // a white cap (the nurse's) or a child's bonnet: over the crown and the back of the head, the face left open
      bonnet: {
        name: 'bonnet',
        draw: F => {
          const { add, mul } = V();
          const { at, axes, egg, r, out, sides, square } = F.head;
          const [, hu, hf] = axes;
          F.cap(add(at, add(mul(hu, r * 0.06), mul(hf, -r * 0.1))), axes, egg.map(v => v * r * out * 1.1), [0, 0.55, -0.85], 0.62, F.colors.hat, sides, square);
        },
      },
      // a knitted stocking cap pulled down to the brows, a pompom on top
      stocking: {
        name: 'knitted cap',
        draw: F => {
          const { add, mul } = V();
          const { at, axes, egg, r, out, sides, square } = F.head;
          const [, hu, hf] = axes;
          F.cap(at, axes, egg.map(v => v * r * out * 1.08), [0, 0.96, -0.25], 0.32, F.colors.hat, sides, square);
          F.ball(add(at, add(mul(hu, r * 1.18), mul(hf, -r * 0.18))), axes, [r * 0.32, r * 0.32, r * 0.32], F.colors.accent, sides);
        },
      },
    },
    parts: {
      parcels: { name: 'armful of parcels', draw: parcels },
      coin: { name: 'coin', draw: coin },
      snowball: { name: 'snowball', draw: snowball },
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
