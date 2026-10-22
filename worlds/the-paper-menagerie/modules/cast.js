// The people of «The Paper Menagerie» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style — soft rounded shapes, toned colours, tinted lines, a simple face so faces read across
// a room — and what they move by (the motions in cast.data.json). cast.md says who is who.
const { add, sub, mul, mix, unit, cross } = MooodShapes.V;
return {
  ...data,
  characters: {
    // Jack at ten: slight, black-brown hair, a green sweater, jeans
    jack: {
      kind: 'shapes',
      style: 'paper',
      who: 'child',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      body: { height: 0.79, head: 1.1, thick: 0.84 },
      colors: { skin: '#e8c4a2', hair: '#2b2220', top: '#6f8c63', bottom: '#4b5670', shoes: '#6a4a37' },
    },
    // Mom, thirty-four: small, black hair in a low bun, a blue-grey blouse, dark trousers, a cream apron; the sheet
    // she folds in her hands (part `sheet`)
    mom: {
      kind: 'shapes',
      style: 'paper',
      who: 'woman',
      garment: 'apron',
      hair: 'bun',
      parts: ['sheet'],
      face: 'simple',
      body: { height: 0.9, thick: 0.8, shoulders: 0.84, hips: 1.0 },
      colors: {
        skin: '#ecc9a4',
        hair: '#16131a',
        top: '#7a8fa6',
        bottom: '#3b3a45',
        garment: '#eadcc2',
        shoes: '#2c2628',
        accent: '#e9c24c',
      },
    },
    // Dad, forty-five: broad, sandy thinning hair, a pale blue work shirt, brown trousers
    dad: {
      kind: 'shapes',
      style: 'paper',
      who: 'man',
      garment: 'none',
      hair: 'short',
      face: 'simple',
      body: { height: 1.0, thick: 1.08, shoulders: 1.06 },
      colors: { skin: '#eac3a3', hair: '#9b7a55', top: '#a9bacb', bottom: '#5c4f43', shoes: '#3a2c24' },
    },
  },
  shapes: {
    // the world's style: made from soft (round, toned, tinted lines) with a smaller head, so the grown-ups read as
    // grown-ups beside the boy, and a simple face (eyes, brows, nose, mouth — <id>_mood shows on it)
    styles: {
      paper: {
        from: 'soft',
        name: 'The Paper Menagerie',
        head: 1.2,
        neck: 0.5,
        legs: 0.9,
        sides: 14,
        line: 1.8,
        face: 'simple',
      },
    },
    parts: {
      // a square of paper held between the hands, being folded: its colour the look's accent
      sheet: {
        name: 'a sheet of paper',
        draw: F => {
          const l = F.P('LeftHand'),
            r = F.P('RightHand'),
            c = mix(l, r, 0.5);
          const across = unit(sub(r, l)),
            fwd = unit(cross(across, F.up('Chest'))),
            flat = cross(fwd, across);
          const span = Math.hypot(r[0] - l[0], r[1] - l[1], r[2] - l[2]) * 0.5;
          const half = Math.min(0.09, Math.max(0.05, span)) * F.fit.h;
          const radii = [half, 0.004, 0.075 * F.fit.h];
          F.ball(add(c, mul(flat, 0.02 * F.fit.h)), [across, flat, fwd], radii, F.colors.accent, 4, 8);
        },
      },
    },
  },
};
