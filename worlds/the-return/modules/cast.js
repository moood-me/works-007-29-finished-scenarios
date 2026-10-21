// The people of «The Return» as people in a scene (an element with "person", "cast": "cast"): who they are — figures of
// shapes in this world's style, `gouache` (natural proportions, a painted tinted edge, plain colours lit by the scene's
// own light, faces that read: the whites of the eyes, brows, a nose, a mouth) — and how they move: the motions in
// cast.data.json (put_motion's). cast.md says who is who and what each motion is. A part's lengths are a man's metres
// times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
// the colours of the things the cast's parts are (each [r, g, b, 1])
const SACK = [0.5, 0.47, 0.33, 1], STRAP = [0.36, 0.33, 0.23, 1], APRON = [0.74, 0.71, 0.64, 1];
const LEATHER = [0.35, 0.23, 0.14, 1], BRASS = [0.72, 0.6, 0.32, 1], BOARD = [0.58, 0.56, 0.41, 1], STAR = [0.72, 0.14, 0.1, 1];
const WHITES = [0.92, 0.89, 0.84, 1];
// the apron's rows: from the waist down to the knees, each across the front (made once a figure: F.keep)
const APRON_ROWS = 6, APRON_ACROSS = 7;
const apronRows = () => ({ rows: Array.from({ length: APRON_ROWS }, () => new Array(APRON_ACROSS)) });
// (a trunk's section moved along its own up by `dy` and widened by `s`: [centre, side, front, half-width, half-depth])
const sectionAt = (sec, up, dy, s) => {
  const { add, mul } = V();
  return [add(sec[0], mul(up, dy)), sec[1], sec[2], sec[3] * s, sec[4] * s];
};
// (a point on the front of a trunk's section, `x` of its half-width across — on its surface, `out` metres off it)
const frontOf = (sec, x, out) => {
  const { add, mul } = V(), u = Math.max(-0.98, Math.min(0.98, x));
  return add(sec[0], add(mul(sec[1], u * sec[3]), mul(sec[2], sec[4] * Math.sqrt(1 - u * u) + out)));
};
// (a section between two of the trunk's, `u` of the way: centre, half-width and half-depth mixed; the second's axes)
const mix2 = (a, b, u) => [V().mix(a[0], b[0], u), b[1], b[2], a[3] + (b[3] - a[3]) * u, a[4] + (b[4] - a[4]) * u];
return {
  ...data,
  characters: {
    // Alexei Alexeyevich Ivanov, a captain of 36: lean, upright, sunburnt; a soldier's greatcoat to mid-shin, belted, its
    // two rows of brass buttons, the shoulder boards, the collar; a side cap with its star, boots, the kit bag on his back
    ivanov: { kind: 'shapes', style: 'gouache', who: 'man', garment: 'greatcoat', hair: 'short', hat: 'pilotka', parts: ['kitbag', 'coat_kit'], line: true,
      body: { height: 1.0, shoulders: 1.1, thick: 0.92 },
      colors: { skin: '#c4936f', hair: '#4a3a2e', top: '#6e6a55', garment: '#6e6a55', bottom: '#4c4a3e', shoes: '#2a2420', hat: '#7c7a5c' } },
    // Lyubov Vasilyevna (Lyuba), his wife, 33: slight, tired; a faded blue cotton dress, a grey linen apron over it, a
    // white kerchief, her hair in a knot under it
    lyuba: { kind: 'shapes', style: 'gouache', who: 'woman', garment: 'dress', hair: 'bun', hat: 'kerchief', parts: ['apron'], line: true,
      body: { height: 0.93, thick: 0.82, shoulders: 0.86, neck: 1.04 },
      colors: { skin: '#d6a888', hair: '#5a4232', top: '#6f8197', garment: '#6f8197', hat: '#e6e1d4', shoes: '#3e352e' } },
    // Petrushka (Pyotr Alexeyevich), the son, 11: thin but square-shouldered, grown up too early; a man's shirt cut down
    // to him, patched dark trousers, barefoot
    petrushka: { kind: 'shapes', style: 'gouache', who: 'child', garment: 'tunic', hair: 'short', barefoot: 'both', line: true,
      body: { height: 0.82, thick: 0.84, shoulders: 0.98, head: 1.04 },
      colors: { skin: '#c9976f', hair: '#8b6a43', top: '#bdb69e', bottom: '#55524a' } },
  },
  shapes: {
    // the world's style: gouache on rough paper — round, natural proportions, a tinted painted edge, the colours lit by
    // the scene's light (`lit`), a face that reads
    styles: {
      gouache: { from: 'soft', name: 'gouache', head: 1.1, egg: [0.92, 1.06, 0.98], neck: 0.8, legs: 1.02, limb: 0.9, arms: 'palm', feet: 'boot',
        trunk: { w: [0.92, 0.96, 0.84, 1.0, 1.06], d: [0.86, 0.86, 0.8, 0.84, 0.76] }, paint: 'lit', line: 1.4, tinted: true,
        folds: { n: 6, depth: 0.05 }, face: 'gouache', ground: 'paper' },
    },
    faces: {
      // the engine's simple face (eyes, brows, a nose, a mouth — and their expressions) over the whites of the eyes: at a
      // few metres the eyes read as eyes, not dots
      gouache: { name: 'gouache face', draw: F => {
        const { axes, r: rh, on } = F.head;
        for (const sx of [-1, 1]) F.ball(on([sx * 0.33, 0.08, 0.94], 0.978), axes, [rh * 0.13, rh * 0.06, rh * 0.035], WHITES, 10);
        MooodShapes.FACES.simple.draw(F);
      } },
    },
    garments: {
      // a soldier's greatcoat: fitted to the waist (the trunk in its cloth), from the belt a flared skirt to mid-shin, long
      // sleeves
      greatcoat: { name: 'greatcoat', hang: [{ to: 1.45, from: 'waist', flare: 0.34, off: 1.02 }], sleeves: 'garment', bodice: true },
    },
    hats: {
      // a white kerchief over the hair, tied at the nape
      kerchief: { name: 'kerchief', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.08), [0, 0.7, -0.72], -0.05, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 0.45), mul(hf, -r * 1.02))), axes, [r * 0.22, r * 0.16, r * 0.14], F.colors.hat, 10);
      } },
      // a soldier's side cap: a narrow boat of cloth along the crown, tipped to the right, its turned-up flap a shade
      // darker, the red star at its front
      pilotka: { name: 'side cap', draw: F => {
        const { add, mul, unit, cross } = V(), { at, axes: [hs, hu, hf], r: rh, out } = F.head, r = rh * out, tip = unit(add(hu, mul(hs, 0.12)));
        const axes = [unit(cross(tip, hf)), tip, hf], flap = F.colors.hat.map((v, i) => (i < 3 ? v * 0.82 : v));
        const crown = add(at, mul(tip, r * 0.86));
        F.ball(add(crown, mul(tip, r * 0.1)), axes, [r * 0.34, r * 0.3, r * 1.0], F.colors.hat, 12, 3);
        F.ball(crown, axes, [r * 0.42, r * 0.16, r * 1.04], flap, 12, 3);
        F.ball(add(crown, add(mul(hf, r * 0.98), mul(tip, r * 0.04))), axes, [r * 0.07, r * 0.07, r * 0.03], STAR, 8);
      } },
    },
    parts: {
      // the kit bag on his back: a soft sack between the shoulder blades, tied at its neck; its two straps over the
      // shoulders and down the front to under the arms, lying on the coat
      kitbag: { name: 'kit bag', draw: F => {
        const { add, mul, mix } = V(), m = F.fit.h, k = F.k, up = F.up('Chest'), fwd = F.fwd('Chest'), side = F.side('Chest');
        const c = add(F.P('Chest'), add(mul(fwd, -0.22 * k), mul(up, -0.1 * m)));
        F.ball(c, [side, up, fwd], [0.17 * m, 0.2 * m, 0.1 * m], SACK, 12, 2.2);
        const neck = add(c, mul(up, 0.21 * m));
        F.ball(neck, [side, up, fwd], [0.05 * m, 0.03 * m, 0.04 * m], STRAP, 8);
        const secs = F.trunk(1), sh = secs[4], ch = secs[3];
        for (const s of [-1, 1]) {
          const edge = add(sh[0], add(mul(sh[1], s * sh[3]), sh[5] ?? [0, 0, 0]));
          const top = add(mix(F.P('Neck1'), edge, 0.55), mul(up, 0.016 * m));
          const front = frontOf(sectionAt(ch, up, 0.07 * m, 1), s * 0.62, 0.012 * m);
          const under = frontOf(sectionAt(ch, up, -0.05 * m, 1), s * 0.92, 0.012 * m);
          F.tube([add(neck, mul(side, s * 0.04 * m)), top, front, under], [[0, 0.014 * m], [3, 0.014 * m]], [[0, STRAP]], 6, up, 0.35);
        }
      } },
      // the greatcoat's own: the belt round the waist and its brass buckle, two rows of brass buttons up the chest, the
      // shoulder boards, the collar round the neck
      coat_kit: { name: 'greatcoat belt, buttons, boards, collar', draw: F => {
        const { add, mul, mix, sub, unit } = V(), m = F.fit.h, sq = F.style.square, n = 24, secs = F.trunk(1);
        const upW = F.up('Spine1'), waist = secs[2], up = F.up('Chest'), fwd = F.fwd('Chest'), chest = secs[3], sh = secs[4];
        // the belt: a band of four rings (in, out below; out, in above) a little off the coat
        const belt = [
          F.ringOf(sectionAt(waist, upW, -0.024 * m, 1.06), n, sq),
          F.ringOf(sectionAt(waist, upW, -0.024 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.03 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.03 * m, 1.06), n, sq),
        ];
        F.rings(belt, LEATHER, null, null);
        F.ball(frontOf(sectionAt(waist, upW, 0.003 * m, 1.13), 0, 0.004 * m), [F.side('Spine1'), upW, F.fwd('Spine1')], [0.034 * m, 0.03 * m, 0.01 * m], BRASS, 8, 3);
        // two rows of four buttons, from just over the belt up to the chest
        for (const u of [0.22, 0.48, 0.74, 1]) {
          const sec = mix2(waist, chest, u);
          for (const s of [-1, 1]) F.ball(frontOf(sec, s * 0.36, 0.006 * m), [F.side('Chest'), up, fwd], [0.012 * m, 0.012 * m, 0.006 * m], BRASS, 8);
        }
        // the shoulder boards: flat along the top of each shoulder, from near the neck to its edge
        for (const s of [-1, 1]) {
          const edge = add(sh[0], add(mul(sh[1], s * sh[3]), sh[5] ?? [0, 0, 0])), lift = mul(up, 0.01 * m);
          const a = add(mix(F.P('Neck1'), edge, 0.36), lift), b = add(mix(F.P('Neck1'), edge, 0.9), lift);
          F.bar(a, b, 0.027 * m, 0.025 * m, [[0, BOARD]], 6, fwd, 0.25, 3);
          F.ball(add(a, mul(unit(sub(b, a)), 0.02 * m)), [F.side('Chest'), up, fwd], [0.01 * m, 0.008 * m, 0.01 * m], BRASS, 6);
        }
        // the collar: a band round the base of the neck, lower before (where it turns down)
        const ring = (dy, rx, rz, drop) => Array.from({ length: n }, (_, q) => {
          const a = (q / n) * Math.PI * 2, c = Math.cos(a), s2 = Math.sin(a), low = drop * Math.max(0, s2) ** 3;
          return add(F.P('Neck1'), add(add(mul(F.side('Chest'), rx * c), mul(fwd, rz * s2)), mul(up, dy - low)));
        });
        F.rings([ring(-0.012 * m, 0.08 * m, 0.072 * m, 0.02 * m), ring(0.04 * m, 0.066 * m, 0.06 * m, 0.04 * m)], F.colors.garment.map((v, i) => (i < 3 ? v * 0.9 : v)), null, null);
      } },
      // a linen apron over the dress: from the waist to the knees, before the skirt, hanging as cloth
      apron: { name: 'apron', draw: F => {
        const { add, mul, mix, level } = V(), k = F.k, f = level(F.fwd('Hips')), s = level(F.side('Hips')), hips = F.P('Hips');
        const waist = F.P('Spine1')[1], knees = mix(F.P('LeftShin'), F.P('RightShin'), 0.5)[1], K = F.keep(apronRows);
        for (let r = 0; r < APRON_ROWS; r++) {
          const u = r / (APRON_ROWS - 1), y = waist + (knees - waist) * u * 0.96, front = 0.13 * k * (1 + 0.6 * u), half = 0.15 * k * (1 + 0.25 * u);
          const row = K.rows[r];
          for (let q = 0; q < APRON_ACROSS; q++) {
            const x = (q / (APRON_ACROSS - 1)) * 2 - 1;
            row[q] = F.clear(add(hips, add(add(mul(f, front - 0.2 * half * x * x), mul(s, x * half)), [0, y - hips[1], 0])), 1, 0.01 * k);
          }
        }
        F.cloth(K.rows, APRON, 1);
      } },
    },
  },
};
