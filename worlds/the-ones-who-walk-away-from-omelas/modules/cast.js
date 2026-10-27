// The people of «The Ones Who Walk Away from Omelas» as people in a scene (an element with "person"): who they are —
// figures of shapes in this world's style, soft rounded shapes in plain light colours under the scene's own light (a
// bright summer city by the sea), faces simple enough to read across a square — and how they move: the motions in
// cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who, what each carries and what each motion
// is. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m); the points
// a part names (F.point) are the person's: "ila#flute", "mev#key", "ila#lamp", "mev#bowl".
const V = () => MooodShapes.V;
const WOOD = [0.66, 0.5, 0.32, 1], IRON = [0.24, 0.23, 0.22, 1], CORD = [0.36, 0.28, 0.2, 1], WICKER = [0.66, 0.53, 0.34, 1];
const GLASS = [1, 0.8, 0.5, 2], PORRIDGE = [0.86, 0.78, 0.62, 1], BOWL = [0.52, 0.38, 0.24, 1];
const FLOWERS = [[0.86, 0.42, 0.38, 1], [0.95, 0.86, 0.55, 1], [0.93, 0.92, 0.9, 1], [0.78, 0.55, 0.7, 1]];
return {
  ...data,
  characters: {
    // Ila at twelve: slight, quick, auburn hair loose to the shoulders, a light summer dress to below the knee, sandals;
    // her mother's wooden flute — at her lips here (the part `flute`)
    ila: { kind: 'shapes', style: 'omelas', who: 'child', garment: 'shift', hair: 'long', parts: ['flute'],
      body: { height: 0.85, head: 0.92, thick: 0.76, shoulders: 0.86, legs: 1.02 },
      colors: { skin: '#e2b08c', hair: '#7a3b22', top: '#eee3c8', garment: '#eee3c8', shoes: '#8b6446' } },
    // Ila at seventeen, five years on: grown tall and slender, the auburn hair tied back, a longer linen dress of
    // sea-green, sandals; the same flute (`flute`)
    ila_17: { kind: 'shapes', style: 'omelas', who: 'teen', garment: 'frock', hair: 'ponytail', parts: ['flute'],
      body: { height: 0.95, head: 0.9, thick: 0.8, shoulders: 0.88, legs: 1.04 },
      colors: { skin: '#e0ae8a', hair: '#7a3b22', top: '#9fbcae', garment: '#9fbcae', shoes: '#8b6446' } },
    // Pim at nine, the neighbours' boy Ila teaches the flute: small, tow-haired, a pale blue shirt, brown breeches,
    // barefoot; a flute of his own (`flute`)
    pim: { kind: 'shapes', style: 'omelas', who: 'child', garment: 'tunic', hair: 'short', barefoot: 'both', parts: ['flute'],
      body: { height: 0.76, head: 0.96, thick: 0.8, shoulders: 0.86 },
      colors: { skin: '#e6b893', hair: '#d6b06a', top: '#94b9d8', bottom: '#7a6650' } },
    // Mev, her grandmother, about seventy: small and solid, white hair in a bun, a dark blue-grey dress, a basket of
    // flowers from the market on her arm; the cellar's key on a cord round her neck
    mev: { kind: 'shapes', style: 'omelas', who: 'woman', garment: 'dress', hair: 'bun', parts: ['key_cord', 'basket'],
      body: { height: 0.88, head: 0.96, thick: 1.04, shoulders: 0.92 },
      colors: { skin: '#cf9f80', hair: '#e4e0d8', top: '#4f5d6e', garment: '#4f5d6e', shoes: '#3a322c' } },
    // Kor at twelve: sunburnt, sturdy, dark short hair, a horse-boy's oat-coloured shirt and brown breeches, barefoot
    kor: { kind: 'shapes', style: 'omelas', who: 'child', garment: 'tunic', hair: 'short', barefoot: 'both',
      body: { height: 0.86, head: 0.92, thick: 0.86, shoulders: 0.94 },
      colors: { skin: '#bd845c', hair: '#2b211b', top: '#d6c39a', bottom: '#6b5340' } },
    // the people of Omelas on the festival morning, stopped to listen: a woman in rose, a man in pale blue, an old man
    // in cream, a girl with flowers in her hair
    rose_woman: { kind: 'shapes', style: 'omelas', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.94, thick: 0.9 },
      colors: { skin: '#e0b494', hair: '#3b2a20', top: '#dfa7a0', garment: '#dfa7a0', shoes: '#6b4e3c' } },
    blue_man: { kind: 'shapes', style: 'omelas', who: 'man', garment: 'tunic', hair: 'short',
      body: { height: 1.02, thick: 0.96 },
      colors: { skin: '#c99272', hair: '#5a4030', top: '#a9c1d4', bottom: '#5d6670', shoes: '#4a3a2e' } },
    old_man: { kind: 'shapes', style: 'omelas', who: 'old', garment: 'coat', hair: 'short',
      body: { height: 0.95, thick: 0.92 },
      colors: { skin: '#d6ab8d', hair: '#ece8e0', garment: '#e7dcc4', bottom: '#8c8170', shoes: '#4a3f35' } },
    // the child in the cellar: it looks six, perhaps it is nearly ten — small and thin, the hair matted, a grey-brown rag
    // of a smock, barefoot, the skin pale from never seeing the sun
    the_child: { kind: 'shapes', style: 'omelas', who: 'child', garment: 'rag', hair: 'bob', barefoot: 'both',
      body: { height: 0.66, head: 0.96, thick: 0.6, shoulders: 0.8, arms: 0.98 },
      colors: { skin: '#cdb6a4', hair: '#4b3b2d', top: '#7a7062', garment: '#7a7062' } },
    flower_girl: { kind: 'shapes', style: 'omelas', who: 'child', garment: 'shift', hair: 'long',
      body: { height: 0.68, thick: 0.8 },
      colors: { skin: '#e7bb98', hair: '#c79a55', top: '#f0d98a', garment: '#f0d98a', shoes: '#9a7452' } },
  },
  shapes: {
    // the world's style: soft rounded figures (the engine's `soft`) in plain colours under the scene's own light, a
    // fine line, a simple face that takes a mood
    styles: { omelas: { from: 'soft', name: 'Omelas', paint: 'lit', line: 1.2, face: 'simple' } },
    garments: {
      // a girl's summer dress: from the waist to below the knee, bare arms
      shift: { name: 'summer dress', hang: [{ to: 1.3, from: 'waist', flare: 0.32, off: 0.94 }], short: true, bare: true, bodice: true },
      // a young woman's summer dress: from the waist to mid-calf, bare arms
      frock: { name: 'linen dress', hang: [{ to: 1.62, from: 'waist', flare: 0.26, off: 0.94 }], short: true, bare: true, bodice: true },
      // the child's smock: a rag hanging from the shoulders to the thighs, its hem torn, the arms and legs bare
      rag: { name: 'rag smock', hang: [{ to: 0.55, from: 'shoulders', flare: 0.1, ragged: true }], short: true, bare: true },
    },
    parts: {
      // the mother's wooden flute: a plain pale tube held across, from beyond the left hand through the right
      flute: { name: 'wooden flute', draw: F => {
        const { add, sub, mul, unit } = V(), m = F.fit.h, l = F.P('LeftHand'), r = F.P('RightHand');
        const along = unit(sub(r, l)), a = add(l, mul(along, -0.09 * m)), b = add(r, mul(along, 0.13 * m));
        F.bar(a, b, 0.012 * m, 0.011 * m, [[0, WOOD]], 8, F.side('Chest'));
        F.point('flute', mul(add(a, b), 0.5));
      } },
      // the cellar's key on a cord round the neck: an old iron key, its bow a ring, hanging on the breast
      key_cord: { name: 'key on a cord', draw: F => {
        const { add, mul } = V(), m = F.fit.h, neck = F.P('Neck1'), uc = F.up('Chest'), fc = F.fwd('Chest'), sc = F.side('Chest');
        const bow = F.clear(add(neck, add(mul(uc, -0.2 * m), mul(fc, 0.11 * m))), 1, 0.012 * m);
        for (const s of [-1, 1]) F.bar(add(neck, add(mul(sc, s * 0.055 * m), mul(fc, 0.02 * m))), bow, 0.003 * m, 0.003 * m, [[0, CORD]], 4, fc);
        F.ball(bow, [sc, uc, fc], [0.018 * m, 0.018 * m, 0.006 * m], IRON, 10);
        const tip = add(bow, mul(uc, -0.075 * m));
        F.bar(bow, tip, 0.005 * m, 0.005 * m, [[0, IRON]], 5, fc);
        F.ball(add(tip, mul(sc, 0.012 * m)), [sc, uc, fc], [0.013 * m, 0.008 * m, 0.004 * m], IRON, 6, 4);
        F.point('key', bow);
      } },
      // a wicker basket hanging from the left hand by its handle, heaped with flowers from the market; it swings a
      // little late as she moves
      basket: { name: 'basket of flowers', draw: F => {
        const { add, sub, mul, dot, cross, unit } = V(), m = F.fit.h, h = F.P('LeftHand');
        const mid = F.swing('basket', add(h, [0, -0.24 * m, 0]), 70), up = unit(sub(h, mid));
        const fwd = unit(sub(F.fwd('Hips'), mul(up, dot(F.fwd('Hips'), up)))), axes = [cross(up, fwd), up, fwd];
        F.ball(mid, axes, [0.12 * m, 0.09 * m, 0.18 * m], WICKER, 14, 2.4);
        for (const s of [-1, 1]) F.bar(add(mid, add(mul(fwd, s * 0.15 * m), mul(up, 0.04 * m))), h, 0.008 * m, 0.008 * m, [[0, WICKER]], 6, fwd, 0.6);
        FLOWERS.forEach((col, i) => {
          const f = [-0.1, -0.03, 0.04, 0.11][i], s2 = [0.03, -0.04, 0.04, -0.02][i];
          F.ball(add(add(mid, mul(up, 0.085 * m)), add(mul(fwd, f * m), mul(axes[0], s2 * m))), axes, [0.04 * m, 0.03 * m, 0.04 * m], col, 8);
        });
      } },
      // the cellar's lamp carried down: a small iron lantern hanging from the right hand by its bail, its glass lit
      // (it glows); it swings a little late as the hand moves (point "#lamp": where its flame is — the scene's light there)
      lamp: { name: 'lamp', draw: F => {
        const { add, sub, mul, cross, unit } = V(), m = F.fit.h, h = F.P('RightHand');
        const mid = F.swing('lamp', add(h, [0, -0.16 * m, 0]), 90), up = unit(sub(h, mid));
        const side = unit(cross(up, F.fwd('Hips'))), axes = [side, up, cross(side, up)];
        F.bar(h, add(mid, mul(up, 0.08 * m)), 0.004 * m, 0.004 * m, [[0, IRON]], 4, axes[2]);
        F.ball(add(mid, mul(up, 0.07 * m)), axes, [0.045 * m, 0.022 * m, 0.045 * m], IRON, 10);
        F.ball(mid, axes, [0.036 * m, 0.055 * m, 0.036 * m], GLASS, 12);
        F.ball(add(mid, mul(up, -0.062 * m)), axes, [0.047 * m, 0.016 * m, 0.047 * m], IRON, 10);
        F.point('lamp', mid);
      } },
      // the bowl carried down: a small wooden bowl held before the waist in both hands, half full of porridge
      bowl: { name: 'bowl', draw: F => {
        const { add, sub, mul, cross, level } = V(), m = F.fit.h, l = F.P('LeftHand'), r = F.P('RightHand');
        const side = level(sub(l, r)), up = [0, 1, 0], axes = [side, up, cross(side, up)];
        const mid = add(mul(add(l, r), 0.5), mul(up, 0.02 * m));
        F.ball(mid, axes, [0.085 * m, 0.04 * m, 0.085 * m], BOWL, 14);
        F.ball(add(mid, mul(up, 0.024 * m)), axes, [0.068 * m, 0.02 * m, 0.068 * m], PORRIDGE, 12);
        F.point('bowl', mid);
      } },
    },
  },
};
