// The people of «The Return» as people in a scene (an element with "person", "cast": "cast"): who they are — figures of
// shapes in this world's style, `gouache` (natural proportions, a painted tinted edge, plain colours lit by the scene's
// own light, faces that read at a few metres: the whites of the eyes and the irises, the lids, thick brows, a nose, the
// lips — each expression bolder than the engine's) — and how they move: the motions in cast.data.json (put_motion's).
// cast.md says who is who and what each motion is. A part's lengths are a man's metres times F.fit.h (the person's height
// as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
// the colours of the things the cast's parts are (each [r, g, b, 1])
const SACK = [0.52, 0.48, 0.34, 1], CORD = [0.33, 0.29, 0.2, 1], APRON = [0.74, 0.71, 0.64, 1];
const LEATHER = [0.3, 0.2, 0.12, 1], BRASS = [0.74, 0.62, 0.32, 1], BOARD = [0.55, 0.53, 0.4, 1], STAR = [0.72, 0.14, 0.1, 1];
const WHITES = [0.93, 0.9, 0.85, 1], IRIS = [0.2, 0.15, 0.12, 1], LASH = [0.16, 0.12, 0.1, 1], MOUTH = [0.25, 0.12, 0.1, 1];
const UP = [0, 1, 0];
// the faces' expressions (a person's <id>_mood, by the engine's names): the brows' inner and outer ends up (+) or down,
// the eyes' opening (the upper lid: 1 at rest), the mouth's half-width, its corners up (+) or down, how open it is —
// in shares of the head's radius, larger than the engine's own so that they read at the distance people stand at
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.17, corners: 0, open: 0 },
  smile: { inner: 0.02, outer: 0.02, eye: 0.85, wide: 0.2, corners: 0.06, open: 0.015 },
  laugh: { inner: 0.04, outer: 0.03, eye: 0.5, wide: 0.21, corners: 0.07, open: 0.09 },
  // grief held in: the brows' inner ends raised, the eyes open and waiting, the lips parted a little, their corners down
  sad: { inner: 0.11, outer: -0.06, eye: 1.05, wide: 0.15, corners: -0.04, open: 0.025 },
  angry: { inner: -0.1, outer: 0.04, eye: 0.8, wide: 0.15, corners: -0.035, open: 0 },
  surprised: { inner: 0.1, outer: 0.1, eye: 1.35, wide: 0.1, corners: 0, open: 0.09 },
  afraid: { inner: 0.11, outer: 0.01, eye: 1.3, wide: 0.15, corners: -0.035, open: 0.05 },
  disgusted: { inner: -0.06, outer: -0.01, eye: 0.75, wide: 0.15, corners: -0.045, open: 0 },
  // wary: the brows drawn down and together, the eyes narrowed, the mouth shut tight
  thinking: { inner: -0.06, outer: 0.02, eye: 0.86, wide: 0.12, corners: -0.015, open: 0 },
  // worn out: the lids heavy, the brows' outer ends down, the mouth's corners down
  tired: { inner: 0.04, outer: -0.07, eye: 0.62, wide: 0.15, corners: -0.035, open: 0 },
};
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
// (a colour darkened to `k` of it)
const shade = (c, k) => c.map((v, i) => (i < 3 ? v * k : v));
return {
  ...data,
  characters: {
    // Alexei Alexeyevich Ivanov, a captain of 36: lean but broad in the shoulders, upright, sunburnt; a soldier's
    // greatcoat to the calves, belted, its two rows of brass buttons, the shoulder boards, the collar; a side cap with its
    // star, high boots; the kit bag carried by its neck in his left hand
    ivanov: { kind: 'shapes', style: 'soldier', who: 'man', garment: 'greatcoat', hair: 'short', hat: 'pilotka', parts: ['coat_kit', 'sack'], line: true,
      body: { height: 1.0, shoulders: 1.04, thick: 1.02 },
      colors: { skin: '#c08b66', hair: '#3e3027', top: '#5d604c', garment: '#5d604c', bottom: '#46463a', shoes: '#26201b', hat: '#6f7055' } },
    // Lyubov Vasilyevna (Lyuba), his wife, 33: slight, tired; a faded blue cotton dress, a grey linen apron over it, a
    // white kerchief, her hair in a knot under it
    lyuba: { kind: 'shapes', style: 'gouache', who: 'woman', garment: 'dress', hair: 'bun', hat: 'kerchief', parts: ['apron'], line: true,
      body: { height: 0.93, thick: 0.88, shoulders: 0.88, neck: 1.04 },
      colors: { skin: '#dcae8c', hair: '#5a4232', top: '#64809e', garment: '#64809e', hat: '#efe9db', shoes: '#3e352e' } },
    // Petrushka (Pyotr Alexeyevich), the son, 11: thin but square-shouldered, grown up too early; a man's shirt cut down
    // to him, patched dark trousers, a man's old boots too big for him
    petrushka: { kind: 'shapes', style: 'gouache', who: 'child', garment: 'tunic', hair: 'short', line: true,
      body: { height: 0.82, thick: 0.96, shoulders: 1.0, head: 1.04 },
      colors: { skin: '#cf9e78', hair: '#8b6a43', top: '#c9c1a6', bottom: '#4f4c44', shoes: '#3a3027' } },
    // Semyon Yevseyevich, 50: a widower, the night watchman at the store by the station; a little stooped, grey and
    // cropped, his cap off indoors; an old dark jacket over a grey collarless shirt, worn trousers, boots
    semyon: { kind: 'shapes', style: 'gouache', who: 'man', garment: 'jacket', hair: 'short', line: true,
      body: { height: 0.96, shoulders: 0.96, thick: 0.94, neck: 0.94 },
      colors: { skin: '#c49a7c', hair: '#bdb7ad', top: '#9c9785', garment: '#4f483f', bottom: '#3d3a34', shoes: '#2b251f' } },
    // Nastya, 5: small, fair, round-faced; a faded rose cotton frock with short sleeves, her bare legs, little shoes
    nastya: { kind: 'shapes', style: 'gouache', who: 'child', garment: 'dress', hair: 'bob', line: true,
      body: { height: 0.62, head: 1.2, thick: 0.9, shoulders: 0.9 },
      colors: { skin: '#e8c0a0', hair: '#c9a46c', top: '#c98e82', garment: '#c98e82', shoes: '#6b5444' } },
  },
  shapes: {
    // the world's style: gouache on rough paper — round, natural proportions with the head a little large (the faces
    // read), a tinted painted edge, the colours lit by the scene's light (`lit`), working hands, trousers and boots of
    // some thickness; `soldier` — the same in a soldier's high boots
    styles: {
      gouache: { from: 'soft', name: 'gouache', head: 1.16, egg: [0.92, 1.06, 0.98], neck: 0.8, legs: 1.02, limb: 1.0, arms: 'hand', feet: 'trouser',
        trunk: { w: [0.94, 0.98, 0.88, 1.0, 0.98], d: [0.88, 0.88, 0.82, 0.86, 0.78] }, paint: 'lit', line: 1.4, tinted: true,
        folds: { n: 6, depth: 0.05 }, face: 'gouache', ground: 'paper' },
      soldier: { from: 'gouache', name: 'gouache, in high boots', feet: 'jackboot' },
    },
    // an arm with a working hand (a broad palm, not a tip); a leg in trousers; a leg in a high boot from below the knee
    arms: {
      hand: [[0, 0.05], [0.55, 0.045], [1, 0.036], [1.45, 0.034], [2, 0.025], [2.35, 0.036], [2.75, 0.032], [3, 0.012]],
    },
    legs: {
      trouser: [[0, 0.092], [0.5, 0.082], [1, 0.064], [1.4, 0.062], [2, 0.05], [2.3, 0.058], [2.8, 0.05], [3, 0]],
      jackboot: [[0, 0.094], [0.5, 0.084], [1, 0.07], [1.3, 0.074], [1.9, 0.066], [2, 0.064], [2.3, 0.068], [2.8, 0.056], [3, 0]],
    },
    faces: {
      // a face that reads at a few metres: the whites of the eyes, the irises as open as the lids let them, the upper
      // lids' dark line, the shade under the eyes, thick brows, the nose and the shade under it, the lips — each
      // expression (MOODS) moving the same solids
      gouache: { name: 'gouache face', draw: F => {
        const { axes, r: rh, on } = F.head, hu = axes[1], x = MOODS[F.look.expression] ?? MOODS.neutral, skin = F.colors.skin;
        const under = shade(skin, 0.84), brow = shade(F.colors.hair, 0.6), lips = [skin[0] * 0.74, skin[1] * 0.5, skin[2] * 0.46, 1];
        const lid = 0.04 + 0.1 * x.eye;
        for (const sx of [-1, 1]) {
          F.ball(on([sx * 0.34, 0.05, 0.94], 0.975), axes, [rh * 0.15, rh * 0.095 * x.eye, rh * 0.04], WHITES, 12);
          F.ball(on([sx * 0.32, 0.04, 0.95], 0.99), axes, [rh * 0.075, rh * 0.08 * Math.min(1, x.eye), rh * 0.035], IRIS, 10);
          F.tube([on([sx * 0.19, lid - 0.03, 0.93], 1.0), on([sx * 0.34, lid + 0.01, 0.95], 1.006), on([sx * 0.5, lid - 0.04, 0.85], 1.0)],
            [[0, rh * 0.022], [1, rh * 0.032], [2, rh * 0.018]], [[0, LASH]], 6, hu);
          F.tube([on([sx * 0.22, -0.09, 0.95], 0.99), on([sx * 0.36, -0.11, 0.95], 0.995), on([sx * 0.48, -0.07, 0.88], 0.99)],
            [[0, rh * 0.016], [2, rh * 0.012]], [[0, under]], 6, hu);
          F.tube([on([sx * 0.14, 0.3 + x.inner, 0.95], 1.0), on([sx * 0.32, 0.35 + (x.inner + x.outer) / 2, 0.92], 1.01), on([sx * 0.5, 0.28 + x.outer, 0.84], 1.0)],
            [[0, rh * 0.05], [1, rh * 0.055], [2, rh * 0.03]], [[0, brow]], 6, hu);
        }
        F.ball(on([0, -0.12, 1], 0.99), axes, [rh * 0.1, rh * 0.16, rh * 0.14], shade(skin, 0.97), 10);
        F.ball(on([0, -0.25, 0.98], 0.98), axes, [rh * 0.1, rh * 0.03, rh * 0.05], under, 8);
        const w = x.wide, y = -0.43;
        F.ball(on([0, y - x.open / 2, 0.93], 0.97), axes, [rh * w * 0.7, rh * x.open, rh * 0.03], MOUTH, 10);
        F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y + 0.01, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)],
          [[0, rh * 0.02], [1, rh * 0.034], [2, rh * 0.02]], [[0, lips]], 6, hu);
      } },
    },
    garments: {
      // a soldier's greatcoat: fitted to the waist (the trunk in its cloth), from the belt a skirt of heavy cloth to the
      // calves, flaring only a little; long sleeves
      greatcoat: { name: 'greatcoat', hang: [{ to: 1.62, from: 'waist', flare: 0.11, off: 1.02 }], sleeves: 'garment', bodice: true },
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
        const axes = [unit(cross(tip, hf)), tip, hf], flap = shade(F.colors.hat, 0.82);
        const crown = add(at, mul(tip, r * 0.86));
        F.ball(add(crown, mul(tip, r * 0.1)), axes, [r * 0.34, r * 0.3, r * 1.0], F.colors.hat, 12, 3);
        F.ball(crown, axes, [r * 0.42, r * 0.16, r * 1.04], flap, 12, 3);
        F.ball(add(crown, add(mul(hf, r * 0.98), mul(tip, r * 0.04))), axes, [r * 0.07, r * 0.07, r * 0.03], STAR, 8);
      } },
    },
    parts: {
      // the kit bag carried by its neck in the left hand: its gathered neck tied with a cord under the fist, the soft
      // sack hanging from it (a little late as the hand moves), broad to the front and back, narrow to the side
      sack: { name: 'kit bag in hand', draw: F => {
        const { add, sub, mul, mix, unit, cross, level } = V(), m = F.fit.h, hand = F.P('LeftHand');
        const out = level(sub(hand, F.P('Hips'))), fw = level(F.fwd('Hips'));
        const bottom = F.swing('sack', add(hand, add(mul(UP, -0.46 * m), mul(out, 0.03 * m))), 90);
        const along = unit(sub(hand, bottom)), across = unit(cross(along, fw)), axes = [across, along, unit(cross(across, along))];
        F.ball(mix(hand, bottom, 0.56), axes, [0.1 * m, 0.21 * m, 0.15 * m], SACK, 12, 2.2);
        F.ball(add(hand, mul(along, -0.07 * m)), axes, [0.04 * m, 0.045 * m, 0.045 * m], SACK, 8);
        F.ball(add(hand, mul(along, -0.045 * m)), axes, [0.042 * m, 0.012 * m, 0.042 * m], CORD, 8);
      } },
      // the greatcoat's own: the belt round the waist and its brass buckle, two rows of brass buttons up the chest, the
      // shoulder boards lying on the shoulders, the collar round the neck
      coat_kit: { name: 'greatcoat belt, buttons, boards, collar', draw: F => {
        const { add, mul, mix, sub, unit } = V(), m = F.fit.h, sq = F.style.square, n = 24, secs = F.trunk(1);
        const upW = F.up('Spine1'), waist = secs[2], up = F.up('Chest'), fwd = F.fwd('Chest'), chest = secs[3], sh = secs[4];
        // the belt: a band of four rings (in, out below; out, in above) a little off the coat
        const belt = [
          F.ringOf(sectionAt(waist, upW, -0.026 * m, 1.06), n, sq),
          F.ringOf(sectionAt(waist, upW, -0.026 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.032 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.032 * m, 1.06), n, sq),
        ];
        F.rings(belt, LEATHER, null, null);
        F.ball(frontOf(sectionAt(waist, upW, 0.003 * m, 1.13), 0, 0.004 * m), [F.side('Spine1'), upW, F.fwd('Spine1')], [0.036 * m, 0.032 * m, 0.01 * m], BRASS, 8, 3);
        // two rows of four buttons, from just over the belt up to the chest
        for (const u of [0.22, 0.48, 0.74, 1]) {
          const sec = mix2(waist, chest, u);
          for (const s of [-1, 1]) F.ball(frontOf(sec, s * 0.36, 0.006 * m), [F.side('Chest'), up, fwd], [0.013 * m, 0.013 * m, 0.006 * m], BRASS, 8);
        }
        // the shoulder boards: flat along the top of each shoulder, from near the neck to just short of its edge
        for (const s of [-1, 1]) {
          const edge = add(sh[0], add(mul(sh[1], s * sh[3]), sh[5] ?? [0, 0, 0])), lift = mul(up, 0.008 * m);
          const a = add(mix(F.P('Neck1'), edge, 0.32), lift), b = add(mix(F.P('Neck1'), edge, 0.8), lift);
          F.bar(a, b, 0.026 * m, 0.024 * m, [[0, BOARD]], 6, fwd, 0.25, 3);
          F.ball(add(a, mul(unit(sub(b, a)), 0.02 * m)), [F.side('Chest'), up, fwd], [0.01 * m, 0.008 * m, 0.01 * m], BRASS, 6);
        }
        // the collar: a band round the base of the neck, lower before (where it turns down)
        const ring = (dy, rx, rz, drop) => Array.from({ length: n }, (_, q) => {
          const a = (q / n) * Math.PI * 2, c = Math.cos(a), s2 = Math.sin(a), low = drop * Math.max(0, s2) ** 3;
          return add(F.P('Neck1'), add(add(mul(F.side('Chest'), rx * c), mul(fwd, rz * s2)), mul(up, dy - low)));
        });
        F.rings([ring(-0.012 * m, 0.08 * m, 0.072 * m, 0.02 * m), ring(0.04 * m, 0.066 * m, 0.06 * m, 0.04 * m)], shade(F.colors.garment, 0.9), null, null);
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
