// The people of «An Ordinary Miracle» as people in a scene (an element with "person", "cast": "cast"): who they are —
// figures of shapes in this world's style, `tale` (a storybook figure: the head a little large so the faces read, a
// tinted painted edge, plain warm colours lit by the scene's own light, faces with the whites of the eyes, the irises,
// lids, brows, a nose and the lips, each expression bold enough to read at a few metres) — and how they move: the
// motions in cast.data.json. cast.md says who is who. A part's lengths are a man's metres times F.fit.h (the person's
// height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const WHITES = [0.95, 0.92, 0.87, 1], IRIS = [0.22, 0.15, 0.1, 1], LASH = [0.16, 0.11, 0.08, 1], MOUTH = [0.32, 0.12, 0.1, 1];
const GOLD = [0.86, 0.66, 0.26, 1], GEM = [0.2, 0.36, 0.72, 1];
// the faces' expressions (a person's <id>_mood, by the engine's names): the brows' inner and outer ends up (+) or down,
// the eyes' opening (the upper lid: 1 at rest), the mouth's half-width, its corners up (+) or down, how open it is — in
// shares of the head's radius
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.17, corners: 0, open: 0 },
  smile: { inner: 0.03, outer: 0.02, eye: 0.84, wide: 0.21, corners: 0.08, open: 0.015 },
  laugh: { inner: 0.04, outer: 0.03, eye: 0.5, wide: 0.22, corners: 0.075, open: 0.1 },
  sad: { inner: 0.14, outer: -0.07, eye: 1.05, wide: 0.15, corners: -0.045, open: 0.03 },
  angry: { inner: -0.12, outer: 0.04, eye: 0.86, wide: 0.13, corners: -0.04, open: 0 },
  surprised: { inner: 0.1, outer: 0.1, eye: 1.35, wide: 0.1, corners: 0, open: 0.09 },
  afraid: { inner: 0.13, outer: 0, eye: 1.25, wide: 0.13, corners: -0.03, open: 0.03 },
  disgusted: { inner: -0.06, outer: -0.01, eye: 0.75, wide: 0.15, corners: -0.045, open: 0 },
  thinking: { inner: -0.05, outer: 0.02, eye: 0.88, wide: 0.13, corners: -0.01, open: 0 },
  tired: { inner: 0.05, outer: -0.09, eye: 0.62, wide: 0.15, corners: -0.04, open: 0 },
};
// the circlet's ring of points (made once a figure: F.keep)
const CIRCLET = () => ({ pts: new Array(17) });
// the crown's ring of points and its teeth (made once a figure)
const CROWN = () => ({ pts: new Array(25) });
const RUBY = [0.72, 0.1, 0.14, 1], GREY = [0.8, 0.79, 0.76, 1], SPECK = [0.12, 0.1, 0.1, 1];
// (a colour darkened to `k` of it)
const shade = (c, k) => c.map((v, i) => (i < 3 ? v * k : v));
// (a trunk's section moved along its own up by `dy` and widened by `s`: [centre, side, front, half-width, half-depth])
const sectionAt = (sec, up, dy, s) => {
  const { add, mul } = V();
  return [add(sec[0], mul(up, dy)), sec[1], sec[2], sec[3] * s, sec[4] * s];
};
return {
  ...data,
  characters: {
    // the young man who was a bear: twenty-three to look at, big and broad, shaggy chestnut hair, an undyed linen
    // shirt, a honey-coloured woven belt (the one warm colour on him — honey and amber are his), dark
    // trousers, soft boots
    medved: {
      kind: 'shapes', style: 'tale', who: 'youth', garment: 'none', hair: 'spiky', parts: ['sash'],
      body: { height: 1.05, shoulders: 1.05, thick: 1.0, arms: 1.03 },
      colors: { skin: '#e2b48e', hair: '#5b3a20', top: '#ddd1b4', garment: '#ddd1b4', bottom: '#4e4134', shoes: '#3b2b20', accent: '#d39a32' },
    },
    // the Princess: eighteen, slender, long dark-honey hair, a cornflower-blue travelling dress, a thin gold circlet
    princess: {
      kind: 'shapes', style: 'tale', who: 'woman', garment: 'dress', hair: 'long', parts: ['circlet'],
      body: { height: 0.93, thick: 0.84, shoulders: 0.86 },
      colors: { skin: '#f0cdb0', hair: '#6e4424', top: '#4f6fb3', garment: '#4f6fb3', shoes: '#3a2e2c', accent: '#d8a640' },
    },
    // the Master, the wizard: ageless — dark hair without a grey thread in it, a long bottle-green coat over a white
    // shirt, a crimson scarf
    hozyain: {
      kind: 'shapes', style: 'tale_coat', who: 'man', garment: 'coat', hair: 'short', scarf: true,
      body: { height: 1.01, thick: 0.92 },
      colors: { skin: '#e3b796', hair: '#2b211c', top: '#ece6da', garment: '#2f5446', bottom: '#2c2a2a', shoes: '#231c18', accent: '#b2333a' },
    },
    // the Mistress, the wizard's mortal wife: sturdy, past fifty, dark hair in a bun with one grey lock from the
    // brow she does not dye (so that he sees it), a madder-red homespun dress, a cream kerchief round her neck
    hozyayka: {
      kind: 'shapes', style: 'tale', who: 'woman', garment: 'dress_long', hair: 'bun_grey', scarf: true,
      body: { height: 0.92, thick: 1.0, shoulders: 0.92, hips: 1.12 },
      colors: { skin: '#e9bfa0', hair: '#3e2b20', top: '#9c4430', garment: '#9c4430', shoes: '#3a2a20', accent: '#efe5cf' },
    },
    // the King: short and round, a tyrant and a tender father — a crimson robe to the floor with an ermine cape on
    // the shoulders, a small gold crown with red stones, a ginger pointed beard and moustache
    korol: {
      kind: 'shapes', style: 'tale', who: 'man', garment: 'robe', hair: 'short', parts: ['ermine', 'crown', 'beard'],
      body: { height: 0.9, thick: 1.32, shoulders: 0.98, hips: 1.15 },
      colors: { skin: '#efc3a2', hair: '#9a5a2c', top: '#e1c27a', garment: '#9b2436', bottom: '#5a1c26', shoes: '#3a1e1a', accent: '#f1ece2' },
    },
    // Emil, the innkeeper: past fifty, broad and solid, greying hair cut short, a bushy moustache, a dark brown
    // waistcoat over a white shirt with the sleeves showing, a mug and a cloth in his hands (he rubs the same mug longer
    // than he needs to)
    emil: {
      kind: 'shapes', style: 'tale', who: 'man', garment: 'waistcoat', hair: 'short', parts: ['moustache', 'mug'],
      body: { height: 1.0, thick: 1.2, shoulders: 1.04 },
      colors: { skin: '#e6b591', hair: '#7a7064', top: '#eee6d4', garment: '#6b3d24', bottom: '#3d3029', shoes: '#2b211b', accent: '#f1ebdc' },
    },
    // Emilia, the lady of the court: past forty and still handsome, upright, auburn hair in a bun under a wide plum
    // travelling hat with a cream plume, a long plum-violet gown, a cream lace kerchief at the throat
    emilia: {
      kind: 'shapes', style: 'tale', who: 'woman', garment: 'dress_long', hair: 'bun', hat: 'hat', scarf: true, parts: ['plume'],
      body: { height: 0.95, thick: 0.86, shoulders: 0.88, hips: 1.04 },
      colors: { skin: '#efc8aa', hair: '#7a3a22', top: '#5a2f63', garment: '#5a2f63', hat: '#3e2347', shoes: '#2a1e22', accent: '#f0e6d2' },
    },
    // the Hunter: stout, grey, a ruddy face, a huge grey moustache, a loden-green jacket and leather breeches, a green
    // hunter's hat with a tawny feather, his long gun held upright between his knees (he has not fired it in ten years)
    okhotnik: {
      kind: 'shapes', style: 'tale', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat', parts: ['moustache', 'plume', 'gun'],
      body: { height: 0.99, thick: 1.25, shoulders: 1.02 },
      colors: { skin: '#e8ac86', hair: '#a29c92', top: '#ddd2b6', garment: '#4f5c33', bottom: '#6a4f33', shoes: '#2e2219', hat: '#3c4728', accent: '#c4893c' },
    },
  },
  shapes: {
    // the world's style: a storybook figure — made from the engine's `soft` with the head a little large (the faces
    // read), natural shoulders, limbs with cloth on them, working hands, a tinted painted edge, the colours lit by the
    // scene's own light (`lit`), smooth cloth (no facets)
    styles: {
      tale: { from: 'soft', name: 'storybook', sides: 16, head: 1.34, egg: [0.92, 1.05, 0.98], neck: 0.75, legs: 1.0, limb: 1.1, arms: 'hand', feet: 'trouser',
        trunk: { w: [0.94, 0.98, 0.88, 0.97, 0.95], d: [0.88, 0.88, 0.82, 0.86, 0.78] }, paint: 'lit', line: 1.7, tinted: true,
        folds: { n: 6, depth: 0.06 }, face: 'tale', ground: 'paper' },
      // the same with a long coat cut straight (its sides straight lines from the shoulders to the hem: a bell from the
      // hips reads as a dress)
      tale_coat: { from: 'tale', name: 'storybook, a straight coat', straight: true, folds: { n: 8, depth: 0.025 } },
    },
    // a homespun dress to the ankles with long sleeves, all of the garment's colour
    garments: {
      dress_long: { name: 'long-sleeved dress', hang: [{ to: 1.9, from: 'waist', flare: 0.42, off: 0.94 }], bodice: true, bare: true, sleeves: 'garment' },
      // a waistcoat to the hips over the shirt: the shirt's sleeves show
      waistcoat: { name: 'waistcoat', hang: [{ to: 0.42, from: 'shoulders', flare: 0.08, folds: false }] },
    },
    // hair in a bun, one grey lock from the brow's parting back over the crown
    hair: {
      bun_grey: { name: 'bun with a grey lock', draw: F => {
        MooodShapes.HAIR.bun.draw(F);
        const { axes, r: rh, on } = F.head;
        F.tube([on([0.06, 0.42, 0.9], 1.1), on([0.08, 0.8, 0.45], 1.15), on([0.07, 0.88, -0.25], 1.15), on([0.05, 0.62, -0.75], 1.13)],
          [[0, rh * 0.1], [1, rh * 0.13], [3, rh * 0.07]], [[0, GREY]], 8, axes[1], 0.5);
      } },
    },
    // an arm with a working hand (a broad palm, its fingers' ends not pinched); a leg in trousers
    arms: {
      hand: [[0, 0.036], [0.3, 0.043], [0.55, 0.041], [1, 0.034], [1.45, 0.032], [2, 0.025], [2.3, 0.037], [2.75, 0.035], [3, 0.02]],
    },
    legs: {
      trouser: [[0, 0.092], [0.5, 0.082], [1, 0.064], [1.4, 0.062], [2, 0.05], [2.3, 0.058], [2.8, 0.05], [3, 0]],
    },
    faces: {
      // a face that reads at a few metres: the whites of the eyes, the irises, the upper lids' dark line, the shade
      // under the eyes, brows of the hair's colour, the nose and the shade under it, the lips — each expression (MOODS)
      // moving the same solids
      tale: { name: 'storybook face', draw: F => {
        const { axes, r: rh, on } = F.head, hu = axes[1], x = MOODS[F.look.expression] ?? MOODS.neutral, skin = F.colors.skin;
        const under = shade(skin, 0.85), lips = [skin[0] * 0.8, skin[1] * 0.5, skin[2] * 0.46, 1];
        const brow = [0, 1, 2, 3].map(i => (i < 3 ? F.colors.hair[i] * 0.66 + skin[i] * 0.16 : 1));
        const lid = 0.06 + 0.14 * x.eye;
        for (const sx of [-1, 1]) {
          F.ball(on([sx * 0.34, 0.05, 0.94], 0.975), axes, [rh * 0.22, rh * 0.15 * x.eye, rh * 0.045], WHITES, 12);
          F.ball(on([sx * 0.32, 0.04, 0.95], 0.99), axes, [rh * 0.125, rh * 0.135 * Math.min(1, x.eye), rh * 0.038], IRIS, 10);
          F.tube([on([sx * 0.17, lid - 0.03, 0.93], 1.0), on([sx * 0.34, lid + 0.01, 0.95], 1.006), on([sx * 0.52, lid - 0.045, 0.85], 1.0)],
            [[0, rh * 0.036], [1, rh * 0.054], [2, rh * 0.028]], [[0, LASH]], 6, hu);
          F.tube([on([sx * 0.22, -0.09, 0.95], 0.99), on([sx * 0.36, -0.11, 0.95], 0.995), on([sx * 0.48, -0.07, 0.88], 0.99)],
            [[0, rh * 0.016], [2, rh * 0.012]], [[0, under]], 6, hu);
          F.tube([on([sx * 0.15, 0.32 + x.inner, 0.95], 1.0), on([sx * 0.32, 0.37 + (x.inner + x.outer) / 2, 0.92], 1.01), on([sx * 0.5, 0.3 + x.outer, 0.84], 1.0)],
            [[0, rh * 0.052], [1, rh * 0.062], [2, rh * 0.034]], [[0, brow]], 6, hu);
        }
        F.ball(on([0, -0.12, 1], 0.99), axes, [rh * 0.1, rh * 0.16, rh * 0.14], shade(skin, 0.97), 10);
        F.ball(on([0, -0.25, 0.98], 0.98), axes, [rh * 0.1, rh * 0.03, rh * 0.05], under, 8);
        const w = x.wide, y = -0.43;
        F.ball(on([0, y - x.open / 2, 0.93], 0.97), axes, [rh * w * 0.7, rh * x.open, rh * 0.03], MOUTH, 10);
        F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y + 0.01, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)],
          [[0, rh * 0.026], [1, rh * 0.042], [2, rh * 0.026]], [[0, lips]], 6, hu);
      } },
    },
    parts: {
      // a bushy moustache drooping at its ends, in the hair's colour
      moustache: { name: 'moustache', draw: F => {
        const { axes, r: rh, on } = F.head, hu = axes[1], c = F.colors.hair;
        for (const sx of [-1, 1]) {
          F.tube([on([sx * 0.03, -0.27, 0.99], 1.0), on([sx * 0.26, -0.31, 0.95], 1.04), on([sx * 0.42, -0.45, 0.85], 1.03)],
            [[0, rh * 0.1], [1, rh * 0.1], [2, rh * 0.04]], [[0, c]], 8, hu);
        }
      } },
      // a feather stuck in the hat's band at the left side, sweeping up and back, in the look's accent colour
      plume: { name: 'feather', draw: F => {
        const { axes, r, on } = F.head, c = F.colors.accent;
        for (const sx of [-1, 1]) {
          F.tube([on([sx * 0.85, 0.62, 0.3], 1.02), on([sx * 1.15, 1.15, -0.1], 1.0), on([sx * 1.0, 1.6, -0.8], 1.0), on([sx * 0.6, 1.5, -1.6], 1.0)],
            [[0, r * 0.08], [1, r * 0.22], [2, r * 0.17], [3, r * 0.03]], [[0, c]], 8, axes[0], 0.35);
        }
      } },
      // a clay mug held between the hands, a white cloth bunched in the right hand
      mug: { name: 'mug and cloth', draw: F => {
        const { add, mul, mean } = V();
        const m = F.fit.h, mid = mean([F.P('LeftHand'), F.P('RightHand')]), fw = F.fwd('Hips');
        const at = add(mid, mul(fw, 0.04 * m)), up = [0, 1, 0];
        F.bar(add(at, mul(up, -0.06 * m)), add(at, mul(up, 0.06 * m)), 0.045 * m, 0.042 * m, [[0, [0.66, 0.46, 0.3, 1]]], 12, fw);
        F.ball(add(at, mul(up, 0.058 * m)), [F.side('Hips'), up, fw], [0.04 * m, 0.008 * m, 0.04 * m], [0.36, 0.22, 0.14, 1], 10);
        F.ball(add(F.P('RightHand'), mul(fw, 0.03 * m)), [F.side('RightHand'), F.up('RightHand'), F.fwd('RightHand')], [0.05 * m, 0.04 * m, 0.045 * m], F.colors.accent, 10);
      } },
      // the Hunter's long gun held upright between the knees: the butt on the floor, the hands round the barrel
      gun: { name: 'long gun', draw: F => {
        const { add, mul, mean } = V();
        const m = F.fit.h, mid = mean([F.P('LeftHand'), F.P('RightHand')]), up = [0, 1, 0], fw = F.fwd('Hips');
        // (leaning on his right shoulder: the barrel clear of the face)
        const lean = add(mul(up, 0.5 * m), mul(F.side('Hips'), -0.2 * m));
        const butt = add(mid, mul(up, -0.62 * m)), lock = add(mid, mul(up, -0.2 * m)), muzzle = add(mid, lean);
        F.bar(butt, lock, 0.05 * m, 0.028 * m, [[0, [0.42, 0.26, 0.14, 1]]], 10, fw, 0.55);
        F.bar(lock, muzzle, 0.016 * m, 0.012 * m, [[0, [0.2, 0.2, 0.22, 1]]], 8, fw);
        F.ball(lock, [F.side('Hips'), up, fw], [0.022 * m, 0.035 * m, 0.03 * m], [0.62, 0.5, 0.3, 1], 8);
      } },
      // a woven belt round the waist in the look's accent colour, its knot at the left hip and the two ends hanging
      sash: { name: 'woven belt', draw: F => {
        const { add, mul } = V();
        const m = F.fit.h, sq = F.style.square, n = 24, waist = F.trunk(1)[2], upW = F.up('Spine1'), c = F.colors.accent;
        const rings = [
          F.ringOf(sectionAt(waist, upW, -0.03 * m, 1.07), n, sq),
          F.ringOf(sectionAt(waist, upW, -0.03 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.03 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.03 * m, 1.07), n, sq),
        ];
        F.rings(rings, c, null, null);
        const knot = add(waist[0], add(mul(waist[1], waist[3] * 0.85), mul(waist[2], waist[4] * 0.8)));
        F.ball(knot, [waist[1], upW, waist[2]], [0.03 * m, 0.028 * m, 0.022 * m], shade(c, 0.9), 8);
        const end = F.swing('sash', add(knot, [0, -0.2 * m, 0]), 120);
        F.bar(knot, end, 0.016 * m, 0.012 * m, [[0, c]], 6, waist[2], 0.4);
      } },
      // a thin gold circlet round the brow, a small point at its front with a blue stone
      circlet: { name: 'gold circlet', draw: F => {
        const { axes, r, on } = F.head;
        const K = F.keep(CIRCLET);
        for (let q = 0; q < 17; q++) {
          const a = -Math.PI + (q / 16) * Math.PI * 2;
          K.pts[q] = on([Math.sin(a), 0.4 - 0.12 * Math.cos(a), Math.cos(a)], 1.06);
        }
        F.tube(K.pts, [[0, r * 0.045], [16, r * 0.045]], [[0, GOLD]], 6, axes[1]);
        F.ball(on([0, 0.56, 0.86], 1.08), axes, [r * 0.07, r * 0.11, r * 0.04], GOLD, 8);
        F.ball(on([0, 0.44, 0.92], 1.11), axes, [r * 0.05, r * 0.05, r * 0.03], GEM, 8);
      } },
      // a small gold crown sitting on the crown of the head: a band with five teeth, a red stone at each tooth's foot
      crown: { name: 'gold crown', draw: F => {
        const { axes, r, on } = F.head, hu = axes[1];
        const K = F.keep(CROWN);
        for (let q = 0; q < 25; q++) {
          const a = -Math.PI + (q / 24) * Math.PI * 2;
          K.pts[q] = on([Math.sin(a), 0.62, Math.cos(a)], 1.1);
        }
        F.tube(K.pts, [[0, r * 0.1], [24, r * 0.1]], [[0, GOLD]], 6, hu, 0.5);
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2, foot = on([Math.sin(a), 0.62, Math.cos(a)], 1.1);
          const tip = on([Math.sin(a) * 0.8, 1.3, Math.cos(a) * 0.8], 1.12);
          F.bar(foot, tip, r * 0.09, r * 0.02, [[0, GOLD]], 6, hu);
          F.ball(on([Math.sin(a), 0.6, Math.cos(a)], 1.17), axes, [r * 0.07, r * 0.07, r * 0.05], RUBY, 8);
        }
      } },
      // an ermine collar over the shoulders: white fur round the neck and on the shoulders, black tail tips in it
      ermine: { name: 'ermine cape', draw: F => {
        const { add, mul, sub, unit } = V();
        const m = F.fit.h, k = F.k, sq = F.style.square, n = 24, sh = F.trunk(1)[4], uc = F.up('Chest');
        const neck = [add(F.P('Neck1'), mul(uc, 0.015 * m)), sh[1], sh[2], 0.07 * k, 0.065 * k];
        const rings = [
          F.ringOf(neck, n, sq),
          F.ringOf(sectionAt(sh, uc, 0.03 * m, 1.16), n, sq),
          F.ringOf(sectionAt(sh, uc, -0.035 * m, 1.2), n, sq),
        ];
        F.rings(rings, F.colors.accent, null, null);
        for (let q = 0; q < n; q += 3) {
          const p = rings[2][q], out = unit(sub(p, sh[0]));
          F.ball(add(p, mul(out, 0.006 * k)), [sh[1], uc, sh[2]], [0.008 * k, 0.012 * k, 0.006 * k], SPECK, 6);
        }
      } },
      // a ginger pointed beard under the chin and a moustache with its ends turned up
      beard: { name: 'pointed beard', draw: F => {
        const { axes, r: rh, on } = F.head, hu = axes[1], c = F.colors.hair;
        F.ball(on([0, -0.85, 0.62], 0.92), axes, [rh * 0.3, rh * 0.36, rh * 0.26], c, 10);
        F.bar(on([0, -0.95, 0.6], 0.95), on([0, -1.25, 0.55], 1.0), rh * 0.18, rh * 0.03, [[0, c]], 8, axes[2]);
        for (const sx of [-1, 1]) {
          F.tube([on([sx * 0.04, -0.3, 0.98], 1.0), on([sx * 0.3, -0.34, 0.92], 1.02), on([sx * 0.5, -0.16, 0.8], 1.03)],
            [[0, rh * 0.07], [1, rh * 0.06], [2, rh * 0.02]], [[0, c]], 6, hu);
        }
      } },
    },
  },
};
