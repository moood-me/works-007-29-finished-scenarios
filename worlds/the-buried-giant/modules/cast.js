// The people of «The Buried Giant» as people in a scene (an element with "person"): figures of shapes in the world's
// style — clean flat shapes in muted colours, lit by the scene's own light, faces simple and readable. cast.md says who
// is who and what each carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a
// man's 1.76 m).
const V = () => MooodShapes.V;
const CLOTH = [0.6, 0.55, 0.46, 1], LEATHER = [0.24, 0.18, 0.13, 1], STEEL = [0.66, 0.67, 0.68, 1], BRASS = [0.6, 0.5, 0.3, 1];
// the hood's edge round the face: high over the brow in front, down past the cheeks at the sides, to the nape behind
const EDGE = x => 0.5 - 1.5 * Math.min(1, Math.max(0, (Math.abs(x) - 0.75) / 0.8));
const COWL = F => ({ pts: [null, null, null], profile: [[0, F.head.r * 1.0], [2, 0.16 * F.k]], colors: [[0, F.colors.garment]] });
const OAR = [0.55, 0.45, 0.33, 1], IRON = [0.2, 0.19, 0.18, 1], FLAME = [1, 0.8, 0.45, 2], RUST = [0.55, 0.53, 0.5, 1];
// what Gawain's parts keep from one frame to the next (F.keep): their sizes, lists and fixed offsets
const WHISKERS = F => {
  const r = F.head.r * F.head.out;
  return { radii: F.head.egg.map(e => e * r * 1.05), dir: [0, -0.95, 0.3], pts: [null, null, null], tips: [[null, null, null], [null, null, null]],
    beard: [[0, r * 0.42], [1, r * 0.3], [2, r * 0.06]], tip: [[0, r * 0.08], [1, r * 0.075], [2, r * 0.03]], colors: [[0, F.colors.hair]] };
};
const PAULDRONS = F => ({ axes: [null, null, null], radii: [0.1 * F.fit.h, 0.075 * F.fit.h, 0.11 * F.fit.h] });
const GREATSWORD = F => {
  const m = F.fit.h;
  return { up: [0, 1, 0], toGuard: [0, -0.08 * m, 0], toTop: [0, 0.07 * m, 0], toPommel: [0, 0.09 * m, 0], tip: [0, 0, 0],
    axes: [null, [0, 1, 0], null], pommel: [0.03 * m, 0.03 * m, 0.03 * m], leather: [[0, LEATHER]], steel: [[0, STEEL]] };
};
// the face's expressions (<id>_mood): brows' inner and outer ends up, the eyes' openness, the mouth's width, its
// corners up or down — as the engine's simple face has them
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.15, corners: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.85, wide: 0.17, corners: 0.05 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.85, wide: 0.14, corners: -0.045 },
  thinking: { inner: -0.03, outer: 0.03, eye: 0.85, wide: 0.1, corners: -0.01 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.55, wide: 0.14, corners: -0.02 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.3, wide: 0.13, corners: -0.03 },
};
// toward the person's right, level
function rightOf(F) {
  const { sub, unit } = V(), d = sub(F.P('RightLeg'), F.P('LeftLeg'));
  return unit([d[0], 0, d[2]]);
}
return {
  ...data,
  characters: {
    // Axl, past seventy: lean, a little bowed, white hair and a short white beard, a worn brown-grey coat; a bundle
    // in his right hand
    axl: { kind: 'shapes', style: 'giant', who: 'old', garment: 'coat', hair: 'short', parts: ['beard', 'bundle'],
      body: { height: 0.96, thick: 0.9, shoulders: 0.95 },
      colors: { skin: '#cfa587', hair: '#d6d1c8', garment: '#6e6252', top: '#b9ae99', bottom: '#4b443b', shoes: '#2e2924' } },
    // Beatrice, past seventy: small, straight-backed, grey hair in a knot, a long slate-blue dress, the red shawl —
    // the only red in the game
    beatrice: { kind: 'shapes', style: 'giant', who: 'woman', garment: 'shawl_dress', hair: 'bun', scarf: true,
      body: { height: 0.9, thick: 0.86, shoulders: 0.86 },
      colors: { skin: '#dcb398', hair: '#9d9790', garment: '#596572', top: '#596572', accent: '#b0302b', shoes: '#2b2724' } },
    // Wistan, about thirty-five: tall, broad, dark short hair, a long moss-dark coat over a warrior's tunic, a sword
    // at his left hip
    wistan: { kind: 'shapes', style: 'giant', who: 'man', garment: 'coat', hair: 'short', parts: ['sword'],
      body: { height: 1.05, shoulders: 1.1, thick: 1.02 },
      colors: { skin: '#c49474', hair: '#3a2b21', garment: '#414b3d', top: '#7c7462', bottom: '#3b362f', shoes: '#2a241f' } },
    // the boatman: tall, in a long hooded robe of weathered grey-blue, the oar on his right shoulder (his right hand
    // on its loom — the scene's `<id>_reach` puts it there), a lantern hanging from his left hand
    boatman: { kind: 'shapes', style: 'giant', who: 'man', garment: 'robe', hair: 'none', parts: ['cowl', 'oar', 'lantern'],
      body: { height: 1.08, shoulders: 1.02, thick: 0.92 },
      colors: { skin: '#c7a084', hair: '#5a5049', garment: '#6d7681', top: '#6d7681', bottom: '#33363a', shoes: '#26282b' } },
    // Sir Gawain, very old: tall but stooping, long white hair, long drooping white moustaches and beard, a rusted
    // mail coat to below the knee under a faded ochre surcoat, dented pauldrons; leaning on his great sword planted
    // point down before him (both hands on its hilt — the scene's `<id>_reach` puts them there)
    gawain: { kind: 'shapes', style: 'giant', who: 'old', garment: 'hauberk', hair: 'long', parts: ['whiskers', 'pauldrons', 'greatsword'],
      body: { height: 1.0, shoulders: 1.04, thick: 0.98 },
      colors: { skin: '#d3a68a', hair: '#e4e0d8', garment: '#77706a', top: '#8f7f57', bottom: '#4a443c', shoes: '#3a3029' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours lit by the scene, a fine line,
    // a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { giant: { from: 'flat', name: 'The Buried Giant', head: 1.2, line: 0.8, face: 'giant' } },
    faces: {
      // the simple face drawn bolder, so it reads at a few metres: larger dark eyes, thicker brows a shade darker than
      // the hair, a nose, a mouth
      giant: { name: 'bold simple', draw: F => {
        const { axes, r: rh, on } = F.head, [, hu] = axes, dark = [0.15, 0.12, 0.11, 1];
        const brow = [...F.colors.hair.slice(0, 3).map(v => v * 0.6), 1], lips = [...F.colors.skin.slice(0, 3).map(v => v * 0.68), 1];
        const x = MOODS[F.look.expression] ?? MOODS.neutral;
        for (const sx of [-1, 1]) {
          F.ball(on([sx * 0.33, 0.06, 0.94], 0.985), axes, [rh * 0.1, rh * 0.12 * x.eye, rh * 0.05], dark, 10);
          F.tube([on([sx * 0.15, 0.34 + x.inner, 0.93], 0.995), on([sx * 0.3, 0.37 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.47, 0.31 + x.outer, 0.84], 0.995)],
            [[0, rh * 0.045], [1, rh * 0.05], [2, rh * 0.032]], [[0, brow]], 6, hu);
        }
        F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.1, rh * 0.14, rh * 0.13], [...F.colors.skin.slice(0, 3).map(v => v * 0.93), 1], 10);
        const w = x.wide, y = -0.38;
        F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.028], [2, rh * 0.028]], [[0, lips]], 6, hu);
      } },
    },
    garments: {
      // a long dress with long sleeves, and over the shoulders a short shawl in the accent colour
      shawl_dress: { name: 'dress and shawl', hang: [
        { to: 1.95, from: 'shoulders', flare: 0.32 },
        { to: 0.05, from: 'shoulders', flare: 0.55, off: 1.3, color: 'accent' },
      ], sleeves: 'garment' },
      // a knight's mail coat to below the knee, mail sleeves, and over it a sleeveless surcoat to the knee in the
      // `top` colour
      hauberk: { name: 'mail and surcoat', hang: [
        { to: 1.25, from: 'shoulders', flare: 0.2 },
        { to: 0.95, from: 'shoulders', flare: 0.16, off: 1.22, color: 'top' },
      ], sleeves: 'garment' },
    },
    parts: {
      // a short beard on the chin and under it (the colour of the hair), the mouth above it left clear
      beard: { name: 'beard', draw: F => {
        const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out;
        F.cap(h.at, h.axes, h.egg.map(e => e * r * 1.04), [0, -0.95, 0.3], 0.68, F.colors.hair, h.sides, h.square);
        F.ball(add(h.at, add(mul(hu, -r * 0.92), mul(hf, r * 0.42))), h.axes, [r * 0.42, r * 0.32, r * 0.3], F.colors.hair, h.sides);
      } },
      // a cloth bundle tied at the top, hanging from the right hand
      bundle: { name: 'bundle', draw: F => {
        const { add } = V(), m = F.fit.h, h = F.P('RightHand');
        const axes = [F.side('Hips'), [0, 1, 0], F.fwd('Hips')];
        F.ball(F.swing('bundle', add(h, [0, -0.15 * m, 0]), 70), axes, [0.13 * m, 0.11 * m, 0.1 * m], CLOTH, 14);
        F.ball(add(h, [0, -0.03 * m, 0]), axes, [0.03 * m, 0.04 * m, 0.03 * m], CLOTH, 10);
      } },
      // a sword in its scabbard at the left hip, the hilt forward, the point down behind the leg
      sword: { name: 'sword', draw: F => {
        const { add, mul, cross, unit } = V(), m = F.fit.h, right = rightOf(F), fwd = cross([0, 1, 0], right);
        const hip = add(F.P('Hips'), add(add(mul(right, -0.2 * m), mul(fwd, -0.04 * m)), [0, 0.04 * m, 0]));
        const guard = add(hip, add(mul(fwd, 0.1 * m), [0, 0.04 * m, 0])), tip = add(hip, add(mul(fwd, -0.5 * m), [0, -0.72 * m, 0]));
        const down = unit([tip[0] - guard[0], tip[1] - guard[1], tip[2] - guard[2]]), pommel = add(guard, mul(down, -0.2 * m));
        F.bar(guard, tip, 0.03 * m, 0.022 * m, [[0, LEATHER]], 6, right);
        F.bar(add(guard, mul(right, -0.08 * m)), add(guard, mul(right, 0.08 * m)), 0.012 * m, 0.012 * m, [[0, BRASS]], 5, fwd);
        F.bar(guard, pommel, 0.014 * m, 0.014 * m, [[0, LEATHER]], 5, right);
        F.ball(pommel, [right, down, fwd], [0.025 * m, 0.025 * m, 0.025 * m], STEEL, 8);
      } },
      // a hood thrown up over the head that leaves the face open: it frames the face at the sides, covers the brow,
      // and falls behind onto the shoulders
      cowl: { name: 'hood', draw: F => {
        const { add, mul, mix } = V(), h = F.head, a = h.axes, r = h.r * h.out, K = F.keep(COWL);
        const c = add(h.at, add(mul(a[1], r * 0.06), mul(a[2], -r * 0.08)));
        F.shell(c, a, [h.egg[0] * r * 1.22, h.egg[1] * r * 1.18, h.egg[2] * r * 1.2], EDGE, 0.2, F.colors.garment, h.sides);
        const back = add(F.P('Chest'), mul(F.fwd('Chest'), -0.06 * F.k));
        K.pts[0] = add(c, mul(a[2], -r * 0.5)); K.pts[1] = mix(K.pts[0], back, 0.5); K.pts[2] = back;
        F.tube(K.pts, K.profile, K.colors, F.sides, a[2]);
      } },
      // an oar on the right shoulder: from the hand on its loom up over the shoulder, the blade high behind him
      oar: { name: 'oar', draw: F => {
        const { add, sub, mul, unit, cross } = V(), m = F.fit.h, hand = F.P('RightHand'), right = rightOf(F);
        const top = add(F.P('RightArm'), [0, 0.07 * m, 0]), dir = unit(sub(top, hand));
        const grip = add(hand, mul(dir, -0.16 * m)), root = add(top, mul(dir, 1.25 * m)), tip = add(root, mul(dir, 0.62 * m));
        const flat = unit(cross(dir, right));
        F.bar(grip, root, 0.022 * m, 0.026 * m, [[0, OAR]], 6, right);
        F.ball(add(root, mul(dir, 0.3 * m)), [right, dir, flat], [0.08 * m, 0.34 * m, 0.016 * m], OAR, 10);
      } },
      // a small iron lantern hanging from the left hand, its glass lit (its point `flame`: the scene's light there)
      lantern: { name: 'lantern', draw: F => {
        const { add } = V(), m = F.fit.h, hand = F.P('LeftHand');
        const axes = [F.side('Hips'), [0, 1, 0], F.fwd('Hips')], c = F.swing('lantern', add(hand, [0, -0.2 * m, 0]), 60);
        F.bar(add(hand, [0, -0.02 * m, 0]), add(c, [0, 0.1 * m, 0]), 0.008 * m, 0.008 * m, [[0, IRON]], 5, axes[0]);
        F.ball(add(c, [0, 0.09 * m, 0]), axes, [0.05 * m, 0.03 * m, 0.05 * m], IRON, 8);
        F.ball(c, axes, [0.055 * m, 0.08 * m, 0.055 * m], FLAME, 10, 2.6);
        F.ball(add(c, [0, -0.085 * m, 0]), axes, [0.06 * m, 0.02 * m, 0.06 * m], IRON, 8);
        F.point('flame', c);
      } },
      // long drooping moustaches and a beard to the chest, in the hair's colour, the mouth left clear
      whiskers: { name: 'moustaches and beard', draw: F => {
        const { add, mul } = V(), h = F.head, [hs, hu, hf] = h.axes, r = h.r * h.out, K = F.keep(WHISKERS), p = K.pts;
        F.cap(h.at, h.axes, K.radii, K.dir, 0.72, F.colors.hair, h.sides, h.square);
        p[0] = add(h.at, add(mul(hu, -r * 0.95), mul(hf, r * 0.45)));
        p[1] = add(p[0], add(mul(hu, -r * 0.7), mul(hf, r * 0.08)));
        p[2] = add(p[0], add(mul(hu, -r * 1.3), mul(hf, -r * 0.02)));
        F.tube(p, K.beard, K.colors, h.sides, hs);
        for (let i = 0; i < 2; i++) {
          const sx = i * 2 - 1, q = K.tips[i];
          q[0] = add(h.at, add(add(mul(hs, sx * r * 0.18), mul(hu, -r * 0.28)), mul(hf, r * 0.9)));
          q[1] = add(q[0], add(add(mul(hs, sx * r * 0.3), mul(hu, -r * 0.18)), mul(hf, -r * 0.02)));
          q[2] = add(q[0], add(add(mul(hs, sx * r * 0.42), mul(hu, -r * 0.75)), mul(hf, -r * 0.08)));
          F.tube(q, K.tip, K.colors, 6, hf);
        }
      } },
      // rounded steel plates over both shoulders, dull with rust
      pauldrons: { name: 'pauldrons', draw: F => {
        const K = F.keep(PAULDRONS), a = K.axes;
        a[0] = F.side('Chest'); a[1] = F.up('Chest'); a[2] = F.fwd('Chest');
        F.ball(F.P('LeftArm'), a, K.radii, RUST, 12);
        F.ball(F.P('RightArm'), a, K.radii, RUST, 12);
      } },
      // a great sword planted point down before him, both hands on its hilt: the pommel over the hands, the guard
      // under them, the blade straight down to the ground
      greatsword: { name: 'great sword', draw: F => {
        const { add, mul, mix, sub, unit, cross } = V(), m = F.fit.h, K = F.keep(GREATSWORD), grip = mix(F.P('RightHand'), F.P('LeftHand'), 0.5);
        const floor = Math.min(F.P('LeftFoot')[1], F.P('RightFoot')[1]) - 0.07 * m, side = unit(sub(F.P('RightHand'), F.P('LeftHand')));
        const flat = unit(cross(side, K.up)), guard = add(grip, K.toGuard), tip = K.tip;
        tip[0] = grip[0]; tip[1] = floor; tip[2] = grip[2];
        K.axes[0] = side; K.axes[2] = flat;
        F.bar(add(grip, K.toTop), guard, 0.016 * m, 0.016 * m, K.leather, 6, side);
        F.ball(add(grip, K.toPommel), K.axes, K.pommel, STEEL, 8);
        F.bar(add(guard, mul(side, -0.13 * m)), add(guard, mul(side, 0.13 * m)), 0.016 * m, 0.016 * m, K.steel, 5, flat);
        F.bar(guard, tip, 0.028 * m, 0.006 * m, K.steel, 4, side, true);
      } },
    },
  },
};
