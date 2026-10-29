// The people of «The Canterville Ghost» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, a storybook's round soft figures with simple faces that read in a room's wide shot,
// lit by the scene's own light — and what they move by (the motions in cast.data.json). cast.md says who is who. A
// part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
// colours a part draws in ([r, g, b, tone]: 1 lit by the scene, 2 glowing — its own colour whatever the light)
const EMBER = [1, 0.32, 0.12, 2];
// the ghost's own pale light: his hair, his beard, his ruff glow with it
const GHOSTLY = [0.6, 0.74, 0.69, 2];
const RUST = [0.42, 0.26, 0.18, 1];
// the ghost's eye sockets, dark under the brows; his cloak, the grave's grey-green gone dark
const SOCKET = [0.16, 0.22, 0.21, 1];
const SHROUD = [0.3, 0.38, 0.36, 1];
// the bottle of the Tammany Rising Sun Lubricator: brown glass, a paper label, a cork
const GLASS = [0.36, 0.2, 0.08, 1];
const LABEL = [0.86, 0.8, 0.62, 1];
const CORK = [0.62, 0.48, 0.3, 1];
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
// expression; the ghost's (`ghost`): his eyes red coals glowing deep in dark sockets under heavy white brows
function face(F, ghost) {
  const { axes, r: rh, on } = F.head;
  const [, hu] = axes;
  const x = MOODS[F.look.expression] ?? MOODS.neutral;
  const dark = [0.16, 0.12, 0.11, 1];
  const brow = ghost ? GHOSTLY : F.colors.hair.map((v, i) => (i < 3 ? v * 0.62 : v));
  const lips = F.colors.skin.map((v, i) => (i === 0 ? v * 0.86 : i < 3 ? v * 0.62 : v));
  for (const sx of [-1, 1]) {
    if (ghost) {
      F.ball(on([sx * 0.33, 0.06, 0.94], 0.975), axes, [rh * 0.16, rh * 0.15, rh * 0.05], SOCKET, 12);
      F.ball(on([sx * 0.33, 0.05, 0.94], 0.99), axes, [rh * 0.07, rh * 0.07 * x.eye, rh * 0.04], EMBER, 12);
    } else F.ball(on([sx * 0.33, 0.06, 0.94], 0.985), axes, [rh * 0.11, rh * 0.13 * x.eye, rh * 0.05], dark, 12);
    const bw = ghost ? 1.7 : 1;
    F.tube(
      [on([sx * 0.14, 0.36 + x.inner, 0.93], 0.995), on([sx * 0.32, 0.4 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.5, 0.34 + x.outer, 0.82], 0.995)],
      [[0, rh * 0.05 * bw], [1, rh * 0.06 * bw], [2, rh * 0.04 * bw]],
      [[0, brow]],
      6,
      hu,
    );
  }
  F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.09, rh * (ghost ? 0.17 : 0.13), rh * 0.12], F.colors.skin.map((v, i) => (i < 3 ? v * 0.94 : v)), 10);
  const w = x.wide;
  const y = -0.4;
  F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.8, rh * x.open * 1.3, rh * 0.03], dark, 10);
  F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)], [[0, rh * 0.035], [2, rh * 0.035]], [[0, lips]], 6, hu);
}
// the ghost's ruff: a wide ring round the neck, standing out over the shoulders, glowing
function ruff(F) {
  const { add, mul } = V();
  const uc = F.up('Chest');
  const c = add(F.P('Neck1'), mul(uc, -0.02 * F.fit.h));
  const w = 0.13 * F.k;
  F.ball(c, [F.side('Chest'), uc, F.fwd('Chest')], [w, 0.03 * F.fit.h, w * 0.9], GHOSTLY, 20);
}
// the ghost's long white beard from the chin down the chest, glowing, swinging a little
const BEARD = F => ({ pts: [null, null, null], profile: [[0, F.head.r * 0.5], [1, F.head.r * 0.42], [2, F.head.r * 0.08]], colors: [[0, GHOSTLY]] });
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
// the ghost's hair, glowing: a cap over the crown tipped back, and long locks down his back, swinging
const LOCKS = F => ({
  radii: F.head.egg.map(v => v * F.head.r * F.head.out * 1.03),
  pts: [null, null, null],
  profile: [[0, F.head.r * 0.85], [1, F.head.r * 0.7], [1.7, F.head.r * 0.45], [2, 0]],
  colors: [[0, GHOSTLY]],
});
function ghostHair(F) {
  const { add, mul } = V();
  const h = F.head;
  const a = h.axes;
  const rh = h.r;
  const K = F.keep(LOCKS);
  F.cap(h.at, a, K.radii, [0, 0.8, -0.6], 0.12, GHOSTLY, h.sides, h.square);
  K.pts[0] = add(h.at, add(mul(a[2], -rh * 0.55), mul(a[1], -rh * 0.1)));
  K.pts[1] = F.swing('locks1', add(K.pts[0], add([0, -0.18 * F.fit.h, 0], mul(F.fwd('Chest'), -0.05 * F.k))), 160);
  K.pts[2] = F.swing('locks2', add(K.pts[1], add([0, -0.16 * F.fit.h, 0], mul(F.fwd('Chest'), -0.02 * F.k))), 90);
  F.tube(K.pts, K.profile, K.colors, F.sides, a[0], 0.65);
}
// rusty manacles on both wrists and the chain sagging from one to the other before the body
const LINKS = 8;
const CHAIN = F => ({ pts: Array.from({ length: LINKS }, () => null), profile: [[0, 0.015 * F.k], [LINKS - 1, 0.015 * F.k]], colors: [[0, RUST]] });
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
  for (let i = 0; i < LINKS; i++) {
    const u = i / (LINKS - 1);
    K.pts[i] = add(add(mix(a, b, u), ahead), [0, -sag * 4 * u * (1 - u), 0]);
  }
  F.tube(K.pts, K.profile, K.colors, 6, F.side('Hips'), 1);
}
// irons on both ankles and a short chain between them lying on the floor
const FETTER = F => ({ pts: [null, null, null], profile: [[0, 0.02 * F.k], [2, 0.02 * F.k]], colors: [[0, RUST]] });
function fetters(F) {
  const { add, mul, mix } = V();
  const k = F.k;
  const K = F.keep(FETTER);
  for (const [i, s] of [[0, 'Left'], [2, 'Right']]) {
    const along = F.up(`${s}Shin`);
    K.pts[i] = add(F.P(`${s}Foot`), mul(along, 0.05 * F.fit.h));
    F.ball(K.pts[i], [F.side(`${s}Shin`), along, F.fwd(`${s}Shin`)], [0.05 * k, 0.03 * F.fit.h, 0.05 * k], RUST, 12);
  }
  K.pts[1] = mix(K.pts[0], K.pts[2], 0.5);
  K.pts[1][1] = Math.min(K.pts[0][1], K.pts[2][1]) - 0.05 * F.fit.h;
  F.tube(K.pts, K.profile, K.colors, 6, F.side('Hips'), 1);
}
// his cloak: from his shoulders down his back to the calves, wide and flat, swinging a little behind him as he moves
// (the engine hangs a sheet of cloth — F.cloth — only before a garment: this one is a flat tube, as his locks are)
const CLOAK = F => ({
  pts: [null, null, null, null],
  profile: [[0, 0.2 * F.k], [1, 0.25 * F.k], [3, 0.3 * F.k]],
  colors: [[0, SHROUD]],
});
function cloak(F) {
  const { add, mul, mix } = V();
  const k = F.k;
  const h = F.fit.h;
  const K = F.keep(CLOAK);
  const back = mul(F.fwd('Chest'), -0.14 * k);
  K.pts[0] = add(mix(F.P('LeftArm'), F.P('RightArm'), 0.5), add(back, [0, -0.02 * h, 0]));
  K.pts[1] = F.clear(add(K.pts[0], add(mul(F.fwd('Hips'), -0.03 * k), [0, -0.3 * h, 0])), -1, 0.04 * k);
  K.pts[2] = F.clear(F.swing('cloak1', add(K.pts[1], add(mul(F.fwd('Hips'), -0.04 * k), [0, -0.4 * h, 0])), 120), -1, 0.05 * k);
  K.pts[3] = F.clear(F.swing('cloak2', add(K.pts[2], add(mul(F.fwd('Hips'), -0.03 * k), [0, -0.38 * h, 0])), 80), -1, 0.05 * k);
  F.tube(K.pts, K.profile, K.colors, 12, F.side('Hips'), 0.18);
}
// the bottle of oil for his chains Mr Otis offers him, held up in the right hand
function bottle(F) {
  const { add, mul } = V();
  const k = F.k;
  const c = add(F.P('RightHand'), add(mul(F.up('RightHand'), 0.06 * F.fit.h), mul(F.fwd('RightHand'), 0.02 * k)));
  const s = F.side('RightHand');
  const at = y => add(c, [0, y * F.fit.h, 0]);
  F.bar(at(-0.07), at(0.05), 0.032 * k, 0.032 * k, [[0, GLASS]], 12, s);
  F.bar(at(-0.035), at(0.025), 0.034 * k, 0.034 * k, [[0, LABEL]], 12, s);
  F.bar(at(0.05), at(0.1), 0.012 * k, 0.012 * k, [[0, GLASS]], 8, s);
  F.bar(at(0.1), at(0.125), 0.014 * k, 0.014 * k, [[0, CORK]], 8, s);
}
// a candle in a little brass candlestick, held in the right hand and standing upright whatever the hand does; its
// flame glows (the point `flame`: a scene's light "at" "<id>#flame" — the candle lights nothing by itself)
const BRASS = [0.66, 0.5, 0.24, 1];
const WAX = [0.93, 0.9, 0.82, 1];
const FLAME = [1, 0.84, 0.5, 2];
const UPRIGHT = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
// what a candle keeps from frame to frame (F.keep): the heights up from the hand (its foot, the stem, the wax's
// foot and top, the flame), its colours, the flame's size
const CANDLE = F => ({
  up: [-0.02, -0.005, 0.03, 0.17, 0.2].map(y => [0, y * F.fit.h, 0]),
  brass: [[0, BRASS]],
  wax: [[0, WAX]],
  flame: [0.009 * F.k, 0.024 * F.fit.h, 0.009 * F.k],
});
function candle(F) {
  const { add, mul } = V();
  const k = F.k;
  const h = F.fit.h;
  const c = add(F.P('RightHand'), add(mul(F.up('RightHand'), 0.06 * h), mul(F.fwd('RightHand'), 0.02 * k)));
  const s = F.side('RightHand');
  const K = F.keep(CANDLE);
  const at = i => add(c, K.up[i]);
  F.bar(at(0), at(1), 0.055 * k, 0.055 * k, K.brass, 14, s);
  F.bar(at(1), at(2), 0.014 * k, 0.014 * k, K.brass, 8, s);
  F.bar(at(2), at(3), 0.013 * k, 0.013 * k, K.wax, 8, s);
  const flame = at(4);
  F.ball(flame, UPRIGHT, K.flame, FLAME, 8);
  F.point('flame', flame);
}
// (the garden by the castle: what its people carry — a torch, a brush, the cross of almond blossom; the torch upright by
// the candle's UPRIGHT)
const WOOD = [0.34, 0.24, 0.16, 1];
const PITCH = [0.16, 0.12, 0.1, 1];
const BLOSSOM = [0.97, 0.95, 0.93, 1];
const PINK = [0.95, 0.8, 0.84, 1];
const TWIG = [0.3, 0.22, 0.18, 1];
// a torch held upright in the right hand: a stave, a head of pitch-soaked tow, its flame glowing (the point `torch`:
// a scene's fire and light there)
// (what the torch keeps from frame to frame, F.keep: its heights up from the hand — the stave's foot and top, the
// head, the flame —, its sizes, its colours; nothing made anew each frame)
const TORCH = F => ({
  up: [-0.26, 0.42, 0.47, 0.58].map(y => [0, y * F.fit.h, 0]),
  head: [0.045 * F.k, 0.07 * F.fit.h, 0.045 * F.k],
  flame: [0.05 * F.k, 0.1 * F.fit.h, 0.05 * F.k],
  wood: [[0, WOOD]],
});
function torch(F) {
  const { add } = V();
  const k = F.k;
  const K = F.keep(TORCH);
  const hand = F.P('RightHand');
  F.bar(add(hand, K.up[0]), add(hand, K.up[1]), 0.02 * k, 0.026 * k, K.wood, 8, F.side('RightHand'));
  F.ball(add(hand, K.up[2]), UPRIGHT, K.head, PITCH, 10);
  const flame = add(hand, K.up[3]);
  F.ball(flame, UPRIGHT, K.flame, FLAME, 10);
  F.point('torch', flame);
}
// a long paint brush in the right hand, pointing out before her and a little up
const BRUSH = F => ({ lift: [0, 0.6, 0], tip: [0.008 * F.k, 0.018 * F.fit.h, 0.008 * F.k], axes: [null, null, null], wood: [[0, WOOD]] });
function brush(F) {
  const { add, mul, unit } = V();
  const K = F.keep(BRUSH);
  const hand = F.P('RightHand');
  const dir = unit(add(F.fwd('Chest'), K.lift));
  F.bar(add(hand, mul(dir, -0.06 * F.fit.h)), add(hand, mul(dir, 0.2 * F.fit.h)), 0.007 * F.k, 0.004 * F.k, K.wood, 6, F.side('Chest'));
  K.axes[0] = F.side('Chest');
  K.axes[1] = dir;
  K.axes[2] = F.fwd('Chest');
  F.ball(add(hand, mul(dir, 0.215 * F.fit.h)), K.axes, K.tip, PITCH, 6);
}
// a cross of white and pink almond blossom held upright between both hands before the chest: two twigs, the flowers
// bunched along them
const CROSS = [[0, -0.3], [0, -0.24], [0, -0.18], [0, -0.12], [0, -0.06], [0, 0], [0, 0.06], [0, 0.12], [0, 0.18], [0, 0.23],
  [-0.15, 0.08], [-0.1, 0.08], [-0.05, 0.08], [0.05, 0.08], [0.1, 0.08], [0.15, 0.08]];
// (what the cross keeps, F.keep: each flower's height up and its size, the twigs' ends, the axes, the colours)
const ALMOND_CROSS = F => ({
  up: CROSS.map(([, y]) => [0, y * F.fit.h, 0]),
  ends: [[0, -0.32], [0, 0.25], [-0.17, 0.08], [0.17, 0.08]].map(([x, y]) => [x * F.fit.h, [0, y * F.fit.h, 0]]),
  radii: CROSS.map((_, i) => { const r = (i % 3 === 1 ? 0.03 : 0.036) * F.k; return [r, r, r * 0.8]; }),
  axes: [null, [0, 1, 0], null],
  twig: [[0, TWIG]],
});
function almondCross(F) {
  const { add, mul, mix } = V();
  const h = F.fit.h;
  const k = F.k;
  const K = F.keep(ALMOND_CROSS);
  const s = F.side('Chest');
  const f = F.fwd('Chest');
  const c = add(mix(F.P('LeftHand'), F.P('RightHand'), 0.5), mul(f, 0.05 * k));
  const end = i => add(c, add(mul(s, K.ends[i][0]), K.ends[i][1]));
  F.bar(end(0), end(1), 0.008 * k, 0.008 * k, K.twig, 6, s);
  F.bar(end(2), end(3), 0.008 * k, 0.008 * k, K.twig, 6, f);
  K.axes[0] = s;
  K.axes[2] = f;
  const front = mul(f, 0.012 * k);
  for (let i = 0; i < CROSS.length; i++) {
    F.ball(add(add(c, add(mul(s, CROSS[i][0] * h), K.up[i])), front), K.axes, K.radii[i], i % 3 === 1 ? PINK : BLOSSOM, 8);
  }
}
// a housekeeper's white cap: a soft crown set back on the head, a frilled band over the brow
const BONNET = F => ({ radii: F.head.egg.map(v => v * F.head.r * F.head.out * 1.1) });
function bonnet(F) {
  const { add, mul } = V();
  const { at: head, axes: [hs, hu, hf], r: rh, sides, square } = F.head;
  F.cap(head, [hs, hu, hf], F.keep(BONNET).radii, [0, 0.8, -0.6], 0.25, F.colors.hat, sides, square);
  F.ball(add(head, add(mul(hu, rh * 0.62), mul(hf, rh * 0.28))), [hs, hu, hf], [rh * 1.02, rh * 0.14, rh * 0.86], F.colors.hat, sides);
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
    // Virginia back from riding (the same girl, a look of hers for a scene's person.who): her riding habit of
    // bottle-green cloth, a fitted jacket and a long full skirt, a white stock at her throat, riding boots
    virginia_habit: {
      kind: 'shapes', style: 'canterville', who: 'woman', garment: 'habit', hair: 'long', face: 'storybook', parts: ['stock'],
      body: { height: 0.9, head: 1.04, shoulders: 0.84, hips: 0.96, thick: 0.8 },
      colors: { skin: '#f0d0b4', hair: '#b98a46', top: '#3a5a46', garment: '#3a5a46', bottom: '#3a5a46', shoes: '#2a201a', accent: '#ece6da' },
    },
    // Sir Simon de Canterville: a tall gaunt old man three hundred years dead — wild white hair and a long beard, a
    // ruff, an old doublet with puffed trunk hose and a ragged cloak, gone the grey-green of the grave, eyes like red
    // coals in dark sockets, rusty manacles on his wrists and irons on his ankles, chains between
    simon: {
      kind: 'shapes', style: 'canterville', who: 'old', garment: 'doublet', hair: 'ghost', face: 'ghost', parts: ['cloak', 'ruff', 'beard', 'shackles', 'fetters'],
      body: { height: 1.1, thick: 0.78, shoulders: 1.0, head: 0.92, legs: 1.06 },
      colors: { skin: '#cfe2dc', hair: '#f2f6f4', top: '#a9c4bb', garment: '#8fa9a0', bottom: '#7d958d', shoes: '#4e5d57' },
    },
    // Sir Simon in the Garden of Death, out of time: the same old man without his irons — no manacles, no chains, no
    // leg irons; simpler, and older
    simon_garden: {
      kind: 'shapes', style: 'canterville', who: 'old', garment: 'doublet', hair: 'ghost', face: 'ghost', parts: ['cloak', 'ruff', 'beard'],
      body: { height: 1.1, thick: 0.78, shoulders: 1.0, head: 0.92, legs: 1.06 },
      colors: { skin: '#cfe2dc', hair: '#f2f6f4', top: '#a9c4bb', garment: '#8fa9a0', bottom: '#7d958d', shoes: '#4e5d57' },
    },
    // Mr Hiram B. Otis, the American Minister: upright, a black frock coat, a grey waistcoat, a white shirt, brown
    // hair going grey
    otis: {
      kind: 'shapes', style: 'canterville', who: 'man', garment: 'coat', hair: 'short', face: 'storybook',
      body: { height: 1.02, shoulders: 1.04, thick: 1.04 },
      colors: { skin: '#ebc7a7', hair: '#857560', top: '#8a8a88', garment: '#2e333d', bottom: '#2b2c31', shoes: '#191818' },
    },
    // Mrs Lucretia R. Otis: a handsome, healthy middle-aged woman, her dark hair up in a knot, a gown of deep plum
    // to the floor
    mrs_otis: {
      kind: 'shapes', style: 'canterville', who: 'woman', garment: 'gown', hair: 'bun', face: 'storybook',
      body: { height: 0.95, thick: 1.0 },
      colors: { skin: '#efcfb2', hair: '#5a3a26', top: '#5e3446', garment: '#5e3446', bottom: '#5e3446', shoes: '#2a1e1c' },
    },
    // Washington Otis, the eldest son: a fair-haired, rather good-looking young man in a dark blue-grey frock coat
    // over a light waistcoat
    washington: {
      kind: 'shapes', style: 'canterville', who: 'man', garment: 'coat', hair: 'short', face: 'storybook',
      body: { height: 1.0, thick: 0.92 },
      colors: { skin: '#efcbab', hair: '#c9a866', top: '#b8b0a0', garment: '#3a4252', bottom: '#2c3038', shoes: '#1c1a1a' },
    },
    // the twins, ten years old, "the Stars and Stripes": two boys alike as two peas — the same short jackets and
    // knickerbockers of navy cloth, white shirts and stockings, the same brown hair
    twin_star: {
      kind: 'shapes', style: 'canterville', who: 'child', garment: 'jacket', hair: 'short', face: 'storybook', socks: true,
      body: { height: 0.78 },
      colors: { skin: '#f0cfb0', hair: '#7a5030', top: '#e8e2d4', garment: '#2f3f5e', bottom: '#2f3f5e', shoes: '#2a201a', socks: '#e8e2d4' },
    },
    twin_stripes: {
      kind: 'shapes', style: 'canterville', who: 'child', garment: 'jacket', hair: 'short', face: 'storybook', socks: true,
      body: { height: 0.78 },
      colors: { skin: '#f0cfb0', hair: '#7a5030', top: '#e8e2d4', garment: '#2f3f5e', bottom: '#2f3f5e', shoes: '#2a201a', socks: '#e8e2d4' },
    },
    // Mrs Umney, the housekeeper: an old woman, stout, in black silk to the floor, a white cap over grey hair
    mrs_umney: {
      kind: 'shapes', style: 'canterville', who: 'woman', garment: 'frock', hair: 'bun', hat: 'bonnet', face: 'storybook',
      body: { height: 0.9, shoulders: 0.92, hips: 1.08, thick: 1.04 },
      colors: { skin: '#ecc8ac', hair: '#c9c3ba', top: '#2a262e', garment: '#2a262e', bottom: '#2a262e', shoes: '#1c1a1e', hat: '#f4f1ea' },
    },
    // Cecil, the young Duke of Cheshire, fifteen: slim, fair-brown hair, a dark blue riding coat, buff breeches, boots
    cecil: {
      kind: 'shapes', style: 'canterville', who: 'teen', garment: 'jacket', hair: 'short', face: 'storybook',
      body: { height: 0.93, shoulders: 0.94, thick: 0.84 },
      colors: { skin: '#f0cdb0', hair: '#a07a4a', top: '#ece6da', garment: '#2f3c5e', bottom: '#d6c49c', shoes: '#2a201a' },
    },
    // Virginia years later, the young Duchess of Cheshire (a look of hers for <id>_wear): grown, her hair up, a deep
    // blue dress with a pale lilac sash
    virginia_duchess: {
      kind: 'shapes', style: 'canterville', who: 'woman', garment: 'frock', hair: 'bun', face: 'storybook', parts: ['sash'],
      body: { height: 0.94, head: 1.0, shoulders: 0.86, hips: 0.98, thick: 0.84 },
      colors: { skin: '#f0d0b4', hair: '#b98a46', top: '#34416e', garment: '#34416e', bottom: '#34416e', shoes: '#2a2224', accent: '#d8cce4' },
    },
    // Cecil years later, the Duke (a look of his for <id>_wear): grown, a dark blue frock coat
    cecil_duke: {
      kind: 'shapes', style: 'canterville', who: 'man', garment: 'coat', hair: 'short', face: 'storybook',
      body: { height: 1.0, shoulders: 1.0, thick: 0.9 },
      colors: { skin: '#f0cdb0', hair: '#a07a4a', top: '#d6d0c2', garment: '#2a3452', bottom: '#2c2e36', shoes: '#191818' },
    },
  },
  shapes: {
    // the world's style: the storybook's round soft figures (soft), their heads a little smaller, with a face of the
    // world's own drawn bold
    styles: { canterville: { from: 'soft', name: 'Canterville', head: 1.2, face: 'storybook' } },
    faces: {
      storybook: { name: 'storybook', draw: F => face(F) },
      // the ghost's: the same face, its eyes red coals that glow
      ghost: { name: 'ghost', draw: F => face(F, true) },
    },
    hair: { ghost: { name: 'ghost', draw: ghostHair } },
    hats: { bonnet: { name: 'white cap', draw: bonnet } },
    garments: {
      // a girl's frock: a full skirt from the waist to the ankles, long sleeves, the bodice in its colour
      frock: { name: 'frock', hang: [{ to: 2.0, from: 'waist', flare: 0.4, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true },
      // a riding habit: the skirt full and long from the waist, the jacket and its sleeves in the same cloth
      habit: { name: 'riding habit', hang: [{ to: 2.0, from: 'waist', flare: 0.36, off: 0.96 }], sleeves: 'garment', bodice: true },
      // an old doublet to the hips, its trunk hose puffed out round the tops of the thighs, in tatters
      doublet: { name: 'doublet', hang: [{ to: 0.36, from: 'shoulders', flare: 0.35, ragged: true }], sleeves: 'garment' },
      // a lady's gown: a full skirt from the waist to the floor, long sleeves, the bodice in its colour
      gown: { name: 'gown', hang: [{ to: 2.05, from: 'waist', flare: 0.45, off: 0.96 }], sleeves: 'garment', bodice: true },
    },
    parts: {
      ruff: { name: 'ruff', draw: ruff },
      beard: { name: 'beard', draw: beard },
      shackles: { name: 'manacles and chain', draw: shackles },
      fetters: { name: 'leg irons', draw: fetters },
      cloak: { name: 'cloak', draw: cloak },
      bottle: { name: 'a bottle of oil', draw: bottle },
      candle: { name: 'a candle', draw: candle },
      // a white stock at the throat, in the look's accent colour
      stock: {
        name: 'stock',
        draw: F => {
          const { add, mul } = V();
          const c = add(F.P('Neck1'), mul(F.fwd('Chest'), 0.035 * F.k));
          F.ball(c, [F.side('Chest'), F.up('Chest'), F.fwd('Chest')], [0.045 * F.k, 0.05 * F.fit.h, 0.03 * F.k], F.colors.accent, 12);
        },
      },
      // a sash round the waist in the look's accent colour
      sash: {
        name: 'sash',
        draw: F => {
          const { add, mul } = V();
          const c = add(F.P('Spine1'), mul(F.up('Hips'), -0.01 * F.fit.h));
          F.ball(c, [F.side('Hips'), F.up('Hips'), F.fwd('Hips')], [0.18 * F.k, 0.035 * F.fit.h, 0.14 * F.k], F.colors.accent, 16);
        },
      },
      torch: { name: 'torch', draw: torch },
      brush: { name: 'paint brush', draw: brush },
      almond_cross: { name: 'cross of almond blossom', draw: almondCross },
    },
  },
};
