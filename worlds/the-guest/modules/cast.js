// The people of «The Guest» as people in a scene (an element with "person"): who they are — figures of shapes in this
// world's style, plain flat shapes lit by the scene's own light, a simple face so a face reads — and what they move by
// (the motions in cast.data.json). cast.md says who is who and what each carries. A part's lengths are a man's metres
// times F.fit.h (the person's height as a share of a man's 1.76 m); a point a part names (F.point) is the person's:
// "arab#bonds".
const V = () => MooodShapes.V;
const ROPE = [0.6, 0.52, 0.38, 1];
const VISOR = [0.1, 0.1, 0.11, 1];
const BAND = [0.62, 0.62, 0.6, 1];
return {
  ...data,
  characters: {
    // Daru, the teacher: forty, lean, short dark hair, a sun-darkened face; a worn brown wool jacket over a grey jumper
    daru: {
      kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', face: 'simple',
      body: { height: 1, thick: 0.9, shoulders: 1 },
      colors: { skin: '#cf9f7c', hair: '#2b221d', top: '#9a958c', garment: '#5a4a3c', bottom: '#3a3836', shoes: '#2a2420' },
    },
    // Balducci, the old Corsican gendarme: heavy, broad, a grey moustache, a dark blue kepi, the gendarme's dark blue
    // cape to the knees
    balducci: {
      kind: 'shapes', style: 'plateau', who: 'old', garment: 'coat', hair: 'short', hat: 'kepi', face: 'simple', parts: ['moustache'],
      body: { height: 0.97, shoulders: 1.1, thick: 1.24, arms: 1.02 },
      colors: { skin: '#c78f74', hair: '#bdb8b0', top: '#3a3f4c', garment: '#2c3446', bottom: '#2b2e36', hat: '#252c3d', shoes: '#1d1b1a' },
    },
    // the Arab (Sliman): tall and thin, a faded blue jellaba to the ankles, a narrow cream chèche wound round the head,
    // raw-wool socks in sandals; his wrists tied together in front
    arab: {
      kind: 'shapes', style: 'plateau', who: 'man', garment: 'jellaba', hair: 'short', hat: 'chech', face: 'simple', parts: ['bonds'],
      body: { height: 1.04, thick: 0.8, shoulders: 0.94 },
      colors: { skin: '#a77356', hair: '#1f1a17', top: '#5d728c', garment: '#5d728c', bottom: '#5d728c', hat: '#d8cfbb', shoes: '#9a8a72' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { plateau: { from: 'flat', name: 'The Guest', line: 0.8, face: 'simple' } },
    garments: {
      // a jellaba: a long loose robe from the shoulders to the ankles, its sleeves wide
      jellaba: { name: 'jellaba', hang: [{ to: 1.75, from: 'shoulders', flare: 0.26 }], sleeves: 'garment', wide: 0.35 },
    },
    hats: {
      // the gendarme's kepi: a stiff crown leaning a little forward, narrower at its flat top, a pale band at its foot, a
      // black visor tipped down over the brow
      kepi: {
        name: 'kepi',
        draw: F => {
          const { add, mul, unit, cross } = V();
          const { at: head, axes: [hs, hu, hf], r: rh, out } = F.head;
          const up = unit(add(hu, mul(hf, 0.18)));
          const foot = add(head, add(mul(hu, rh * 0.32), mul(hf, -rh * 0.05)));
          const top = add(foot, mul(up, rh * 0.95));
          F.tube([foot, top], [[0, rh * out * 1.04], [1, rh * out * 0.9]], [[0, F.colors.hat]], F.sides, hs, 1, 2, true);
          F.tube([add(foot, mul(up, -rh * 0.02)), add(foot, mul(up, rh * 0.14))], [[0, rh * out * 1.06], [1, rh * out * 1.05]], [[0, BAND]], F.sides, hs, 1, 2, true);
          const tilt = unit(add(hu, mul(hf, 0.45)));
          F.ball(add(foot, mul(hf, rh * 0.95)), [hs, tilt, cross(hs, tilt)], [rh * 0.7, rh * 0.05, rh * 0.42], VISOR, F.sides);
        },
      },
      // a chèche: a cream cloth wound round the head — over the crown down to the brow, a thick turn of it round the head
      // at the brow
      chech: {
        name: 'chèche',
        draw: F => {
          const { add, mul } = V();
          const { at: head, axes: [hs, hu, hf], egg, r: rh, out, sides, square } = F.head;
          F.cap(head, [hs, hu, hf], egg.map(e => e * rh * out * 1.1), [0, 0.9, -0.3], -0.2, F.colors.hat, sides, square);
          const c = add(head, add(mul(hu, rh * 0.28), mul(hf, -rh * 0.04)));
          const ring = [];
          for (let i = 0; i <= 14; i++) {
            const a = (i / 14) * Math.PI * 2;
            ring.push(add(c, add(mul(hs, Math.sin(a) * rh * 1.02), mul(hf, Math.cos(a) * rh * 1.04))));
          }
          F.tube(ring, [[0, rh * 0.17], [14, rh * 0.17]], [[0, F.colors.hat]], 8, hu, 0.8);
        },
      },
    },
    parts: {
      // a heavy moustache under the nose, drooping at its ends (the colour of the hair)
      moustache: {
        name: 'moustache',
        draw: F => {
          const { axes, r: rh, on } = F.head;
          const [, hu] = axes;
          F.tube(
            [on([-0.34, -0.36, 0.86], 1.0), on([-0.14, -0.23, 0.97], 1.04), on([0, -0.25, 1], 1.05), on([0.14, -0.23, 0.97], 1.04), on([0.34, -0.36, 0.86], 1.0)],
            [[0, rh * 0.03], [1, rh * 0.075], [2, rh * 0.08], [3, rh * 0.075], [4, rh * 0.03]],
            [[0, F.colors.hair]],
            8,
            hu,
          );
        },
      },
      // the rope tied round both wrists, held together before him; the knot between them is the person's point `bonds`
      // (where the rope Balducci holds is tied)
      bonds: {
        name: 'bonds',
        draw: F => {
          const { mean } = V();
          const l = F.P('LeftHand');
          const r = F.P('RightHand');
          const t = 0.022 * F.fit.h;
          F.bar(l, r, t, t, [[0, ROPE]], 8, F.fwd('Hips'));
          F.point('bonds', mean([l, r]));
        },
      },
    },
  },
};
