// The people of «The Canterville Ghost» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, a storybook's round soft figures with simple faces that read in a room's wide shot,
// lit by the scene's own light — and what they move by (the motions in cast.data.json). cast.md says who is who. A
// part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
// colours a part draws in ([r, g, b, tone]: 1 lit by the scene, 2 glowing — its own colour whatever the light)
const EMBER = [1, 0.32, 0.12, 2];
const RUST = [0.42, 0.26, 0.18, 1];
const GLASS = [0.55, 0.42, 0.24, 1];
const LABEL = [0.86, 0.78, 0.6, 1];
const CORK = [0.6, 0.45, 0.3, 1];
// the face's expressions (a person's <id>_mood; the engine's names): the brows' inner and outer ends up (+) or down,
// the eyes opened (1 at rest) or narrowed, the mouth's half-width, its corners up (+) or down, how open
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.15, corners: 0, open: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.85, wide: 0.18, corners: 0.06, open: 0 },
  laugh: { inner: 0.03, outer: 0.02, eye: 0.5, wide: 0.17, corners: 0.055, open: 0.08 },
  sad: { inner: 0.08, outer: -0.05, eye: 0.85, wide: 0.12, corners: -0.045, open: 0 },
  angry: { inner: -0.09, outer: 0.03, eye: 0.8, wide: 0.12, corners: -0.03, open: 0 },
  surprised: { inner: 0.09, outer: 0.09, eye: 1.3, wide: 0.08, corners: 0, open: 0.09 },
  afraid: { inner: 0.1, outer: 0.01, eye: 1.25, wide: 0.13, corners: -0.03, open: 0.05 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.75, wide: 0.13, corners: -0.04, open: 0 },
  thinking: { inner: -0.04, outer: 0.035, eye: 0.85, wide: 0.12, corners: -0.02, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.55, wide: 0.13, corners: -0.02, open: 0 },
};
// a face: eyes, brows, a nose, a mouth, drawn bold enough to read across a room — the same solids for every
// expression; `eyes` the eyes' colour (the ghost's: glowing coals)
function face(F, eyes) {
  const { axes, r: rh, on } = F.head;
  const [, hu] = axes;
  const x = MOODS[F.look.expression] ?? MOODS.neutral;
  const dark = [0.16, 0.12, 0.11, 1];
  const brow = F.colors.hair.map((v, i) => (i < 3 ? v * 0.62 : v));
  const lips = F.colors.skin.map((v, i) => (i === 0 ? v * 0.86 : i < 3 ? v * 0.62 : v));
  for (const sx of [-1, 1]) {
    F.ball(on([sx * 0.33, 0.06, 0.94], 0.985), axes, [rh * 0.11, rh * 0.13 * x.eye, rh * 0.05], eyes ?? dark, 12);
    F.tube(
      [on([sx * 0.14, 0.36 + x.inner, 0.93], 0.995), on([sx * 0.32, 0.4 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.5, 0.34 + x.outer, 0.82], 0.995)],
      [[0, rh * 0.05], [1, rh * 0.06], [2, rh * 0.04]],
      [[0, brow]],
      6,
      hu,
    );
  }
  F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.09, rh * 0.13, rh * 0.12], F.colors.skin.map((v, i) => (i < 3 ? v * 0.94 : v)), 10);
  const w = x.wide;
  const y = -0.4;
  F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.8, rh * x.open * 1.3, rh * 0.03], dark, 10);
  F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)], [[0, rh * 0.035], [2, rh * 0.035]], [[0, lips]], 6, hu);
}
// a ruff: a wide pleated ring round the neck, standing out over the shoulders
function ruff(F) {
  const { add, mul } = V();
  const uc = F.up('Chest');
  const c = add(F.P('Neck1'), mul(uc, 0.01 * F.fit.h));
  const axes = [F.side('Chest'), uc, F.fwd('Chest')];
  const w = 0.11 * F.k;
  F.ball(c, axes, [w, 0.035 * F.fit.h, w * 0.92], F.colors.top, 20);
  F.ball(add(c, mul(uc, 0.012 * F.fit.h)), axes, [w * 0.82, 0.03 * F.fit.h, w * 0.76], F.colors.top.map((v, i) => (i < 3 ? v * 0.9 : v)), 20);
}
// a long white beard from the chin down the chest, swinging a little
const BEARD = F => ({ pts: [null, null, null], profile: [[0, F.head.r * 0.5], [1, F.head.r * 0.42], [2, F.head.r * 0.08]], colors: [[0, F.colors.hair]] });
function beard(F) {
  const { add, mul } = V();
  const h = F.head;
  const [hs, hu, hf] = h.axes;
  const r = h.r * h.out;
  const K = F.keep(BEARD);
  K.pts[0] = add(h.at, add(mul(hu, -r * 0.55), mul(hf, r * 0.6)));
  K.pts[1] = F.clear(F.swing('beard1', add(K.pts[0], add([0, -0.12 * F.fit.h, 0], mul(F.fwd('Chest'), 0.02 * F.k))), 150), 1, r * 0.1);
  K.pts[2] = F.clear(F.swing('beard2', add(K.pts[1], [0, -0.11 * F.fit.h, 0]), 90), 1, r * 0.1);
  F.tube(K.pts, K.profile, K.colors, 10, hs, 0.55);
}
// rusty manacles on both wrists and the chain sagging from one to the other before the body
const CHAIN = F => ({ pts: [null, null, null, null, null], profile: [[0, 0.016 * F.k], [4, 0.016 * F.k]], colors: [[0, RUST]] });
function shackles(F) {
  const { add, mul, mix } = V();
  const k = F.k;
  for (const s of ['Left', 'Right']) {
    const at = F.P(`${s}Hand`);
    const along = F.up(`${s}Hand`);
    F.ball(add(at, mul(along, 0.06 * F.fit.h)), [F.side(`${s}Hand`), along, F.fwd(`${s}Hand`)], [0.05 * k, 0.03 * F.fit.h, 0.05 * k], RUST, 12);
  }
  const K = F.keep(CHAIN);
  const a = add(F.P('LeftHand'), mul(F.up('LeftHand'), 0.05 * F.fit.h));
  const b = add(F.P('RightHand'), mul(F.up('RightHand'), 0.05 * F.fit.h));
  const sag = 0.16 * F.fit.h + 0.2 * Math.hypot(a[0] - b[0], a[2] - b[2]);
  const ahead = mul(F.fwd('Hips'), 0.06 * k);
  for (let i = 0; i < 5; i++) {
    const u = i / 4;
    K.pts[i] = add(add(mix(a, b, u), ahead), [0, -sag * 4 * u * (1 - u), 0]);
  }
  K.pts[2] = F.swing('chain', K.pts[2], 60);
  F.tube(K.pts, K.profile, K.colors, 6, F.side('Hips'), 1);
}
// a small square bottle of lubricator in the right hand, its label towards whom it is held out to
function bottle(F) {
  const { add, mul } = V();
  const m = F.fit.h;
  const up = [0, 1, 0];
  const fwd = F.fwd('RightHand');
  const side = F.side('RightHand');
  const c = add(add(F.P('RightHand'), mul(fwd, 0.03 * m)), mul(up, 0.05 * m));
  const axes = [side, up, fwd];
  F.ball(c, axes, [0.03 * m, 0.07 * m, 0.03 * m], GLASS, 8, 4);
  F.ball(add(c, mul(fwd, 0.004 * m)), axes, [0.031 * m, 0.03 * m, 0.031 * m], LABEL, 8, 4);
  F.ball(add(c, mul(up, 0.085 * m)), axes, [0.012 * m, 0.022 * m, 0.012 * m], GLASS, 8);
  F.ball(add(c, mul(up, 0.11 * m)), axes, [0.011 * m, 0.012 * m, 0.011 * m], CORK, 8);
}
// side whiskers along the jaw (the colour of the hair)
function whiskers(F) {
  const { add, mul } = V();
  const h = F.head;
  const [hs, hu, hf] = h.axes;
  const r = h.r * h.out;
  for (const sx of [-1, 1]) F.ball(add(h.at, add(add(mul(hs, sx * r * 0.86), mul(hu, -r * 0.25)), mul(hf, r * 0.05))), h.axes, [r * 0.12, r * 0.3, r * 0.2], F.colors.hair, h.sides);
}
return {
  ...data,
  characters: {
    // Virginia Otis, fifteen: slight and quick, golden-brown hair loose down her back, a white muslin frock to the
    // ankles with a pale blue sash
    virginia: {
      kind: 'shapes', style: 'canterville', who: 'woman', garment: 'frock', hair: 'long', face: 'storybook', parts: ['sash'],
      body: { height: 0.9, head: 1.04, shoulders: 0.84, hips: 0.96, thick: 0.8 },
      colors: { skin: '#f0d0b4', hair: '#b98a46', top: '#ece6da', garment: '#ece6da', bottom: '#ece6da', shoes: '#4a3a30', accent: '#7d9cc4' },
    },
    // Sir Simon de Canterville: a tall old man three hundred years dead — white hair and beard, a ruff, an old
    // doublet and cloak in rags gone the grey-green of the grave, eyes like red coals, rusty manacles and a chain
    simon: {
      kind: 'shapes', style: 'canterville', who: 'old', garment: 'cloak', hair: 'long', face: 'ghost', parts: ['ruff', 'beard', 'shackles'],
      body: { height: 1.06, thick: 0.86, shoulders: 1.02, head: 1.02 },
      colors: { skin: '#d6e6df', hair: '#f2f6f4', top: '#e8f0ec', garment: '#a9c4bb', bottom: '#8aa39b', shoes: '#66786f' },
    },
    // Mr Hiram B. Otis, the American Minister: upright, a black frock coat, a grey waistcoat, a white shirt, brown
    // hair going grey and side whiskers
    otis: {
      kind: 'shapes', style: 'canterville', who: 'man', garment: 'coat', hair: 'short', face: 'storybook', parts: ['whiskers'],
      body: { height: 1.02, shoulders: 1.04, thick: 1.04 },
      colors: { skin: '#ebc7a7', hair: '#6c5a48', top: '#8a8a88', garment: '#22242a', bottom: '#2b2c31', shoes: '#191818' },
    },
  },
  shapes: {
    // the world's style: the storybook's round soft figures (soft), their heads a little smaller, with a face of the
    // world's own drawn bold
    styles: { canterville: { from: 'soft', name: 'Canterville', head: 1.2, face: 'storybook' } },
    faces: {
      storybook: { name: 'storybook', draw: F => face(F) },
      // the ghost's: the same face, its eyes red coals that glow
      ghost: { name: 'ghost', draw: F => face(F, EMBER) },
    },
    garments: {
      // a girl's frock: a full skirt from the waist to the ankles, long sleeves, the bodice in its colour
      frock: { name: 'frock', hang: [{ to: 2.0, from: 'waist', flare: 0.4, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true },
      // an old cloak over the doublet, to below the knees, its hem in tatters
      cloak: { name: 'cloak', hang: [{ to: 1.5, from: 'shoulders', flare: 0.3, ragged: true }], sleeves: 'garment' },
    },
    parts: {
      ruff: { name: 'ruff', draw: ruff },
      beard: { name: 'beard', draw: beard },
      shackles: { name: 'manacles and chain', draw: shackles },
      whiskers: { name: 'side whiskers', draw: whiskers },
      bottle: { name: 'bottle of lubricator', draw: bottle },
      // a sash round the waist in the look's accent colour
      sash: {
        name: 'sash',
        draw: F => {
          const { add, mul } = V();
          const c = add(F.P('Spine1'), mul(F.up('Hips'), -0.01 * F.fit.h));
          F.ball(c, [F.side('Hips'), F.up('Hips'), F.fwd('Hips')], [0.18 * F.k, 0.035 * F.fit.h, 0.14 * F.k], F.colors.accent, 16);
        },
      },
    },
  },
};
