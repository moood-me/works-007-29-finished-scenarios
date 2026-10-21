// The people of «The Return» as people in a scene (an element with "person", "cast": "cast"): who they are — figures of
// shapes in this world's style, `gouache` (natural proportions, a painted tinted edge, plain colours lit by the scene's
// own light, faces that read: eyes, brows, a nose, a mouth) — and how they move: the motions in cast.data.json
// (put_motion's). cast.md says who is who and what each motion is. A part's lengths are a man's metres times F.fit.h (the
// person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
// the colours of the things the cast's parts are (each [r, g, b, 1])
const SACK = [0.5, 0.47, 0.33, 1], STRAP = [0.36, 0.33, 0.23, 1], APRON = [0.74, 0.71, 0.64, 1];
// the apron's rows: from the waist down to the knees, each across the front (made once a figure: F.keep)
const APRON_ROWS = 6, APRON_ACROSS = 7;
const apronRows = () => ({ rows: Array.from({ length: APRON_ROWS }, () => new Array(APRON_ACROSS)) });
return {
  ...data,
  characters: {
    // Alexei Alexeyevich Ivanov, a captain of 36: lean, upright, sunburnt; a soldier's greatcoat to mid-shin buttoned up, a
    // side cap, boots, the kit bag on his back
    ivanov: { kind: 'shapes', style: 'gouache', who: 'man', garment: 'greatcoat', hair: 'short', hat: 'pilotka', parts: ['kitbag'], line: true,
      body: { height: 1.0, shoulders: 1.04, thick: 0.92 },
      colors: { skin: '#c4936f', hair: '#4a3a2e', top: '#8a8462', garment: '#78715b', bottom: '#4c4a3e', shoes: '#2a2420', hat: '#7f7a56' } },
    // Lyubov Vasilyevna (Lyuba), his wife, 33: slight, tired; a faded blue cotton dress, a grey linen apron over it, a
    // white kerchief, her hair in a knot under it
    lyuba: { kind: 'shapes', style: 'gouache', who: 'woman', garment: 'dress', hair: 'bun', hat: 'kerchief', parts: ['apron'], line: true,
      body: { height: 0.93, thick: 0.82, shoulders: 0.86, neck: 1.04 },
      colors: { skin: '#d6a888', hair: '#5a4232', top: '#6f8197', garment: '#6f8197', hat: '#e6e1d4', shoes: '#3e352e' } },
    // Petrushka (Pyotr Alexeyevich), the son, 11: thin, grown up too early; a man's shirt cut down to him, patched dark
    // trousers, barefoot
    petrushka: { kind: 'shapes', style: 'gouache', who: 'child', garment: 'tunic', hair: 'short', barefoot: 'both', line: true,
      body: { height: 0.8, thick: 0.78, head: 1.06 },
      colors: { skin: '#c9976f', hair: '#8b6a43', top: '#bdb69e', bottom: '#55524a' } },
  },
  shapes: {
    // the world's style: gouache on rough paper — round, natural proportions, a tinted painted edge, the colours lit by
    // the scene's light (`lit`), a face that reads
    styles: {
      gouache: { from: 'soft', name: 'gouache', head: 1.06, egg: [0.92, 1.06, 0.98], neck: 0.8, legs: 1.02, limb: 0.9, arms: 'palm', feet: 'boot',
        trunk: { w: [0.92, 0.96, 0.84, 1.0, 1.06], d: [0.86, 0.86, 0.8, 0.84, 0.76] }, paint: 'lit', line: 1.4, tinted: true,
        folds: { n: 6, depth: 0.05 }, face: 'simple', ground: 'paper' },
    },
    garments: {
      // a soldier's greatcoat: from the shoulders to mid-shin, a little wider at the hem, long sleeves
      greatcoat: { name: 'greatcoat', hang: [{ to: 1.45, from: 'shoulders', flare: 0.24 }], sleeves: 'garment' },
    },
    hats: {
      // a white kerchief over the hair, tied at the nape
      kerchief: { name: 'kerchief', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.08), [0, 0.7, -0.72], -0.05, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 0.45), mul(hf, -r * 1.02))), axes, [r * 0.22, r * 0.16, r * 0.14], F.colors.hat, 10);
      } },
      // a soldier's side cap: a boat of cloth along the crown, tipped to the right
      pilotka: { name: 'side cap', draw: F => {
        const { add, mul, unit, cross } = V(), { at, axes: [hs, hu, hf], r } = F.head, tip = unit(add(hu, mul(hs, 0.18)));
        const axes = [unit(cross(tip, hf)), tip, hf];
        F.ball(add(at, add(mul(tip, r * 0.86), mul(hs, r * 0.12))), axes, [r * 0.42, r * 0.3, r * 0.98], F.colors.hat, 12, 2.6);
      } },
    },
    parts: {
      // the kit bag on his back: a soft sack between the shoulder blades, its two straps over the shoulders
      kitbag: { name: 'kit bag', draw: F => {
        const { add, mul } = V(), m = F.fit.h, k = F.k, up = F.up('Chest'), fwd = F.fwd('Chest'), side = F.side('Chest');
        const c = add(F.P('Chest'), add(mul(fwd, -0.21 * k), mul(up, -0.1 * m)));
        F.ball(c, [side, up, fwd], [0.15 * m, 0.19 * m, 0.08 * m], SACK, 12, 2.2);
        const neck = add(c, add(mul(up, 0.2 * m), mul(fwd, 0.03 * m)));
        F.ball(neck, [side, up, fwd], [0.05 * m, 0.03 * m, 0.04 * m], STRAP, 8);
        for (const s of [-1, 1]) {
          const shoulder = add(F.P(s < 0 ? 'LeftArm' : 'RightArm'), add(mul(up, 0.05 * m), mul(side, -s * 0.03 * m)));
          F.bar(neck, shoulder, 0.012 * m, 0.012 * m, [[0, STRAP]], 5, fwd, 0.5);
          F.bar(shoulder, add(shoulder, add(mul(fwd, 0.1 * k), mul(up, -0.2 * m))), 0.012 * m, 0.012 * m, [[0, STRAP]], 5, side, 0.5);
        }
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
