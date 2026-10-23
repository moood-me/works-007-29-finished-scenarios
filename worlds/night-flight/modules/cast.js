// The people of «Night Flight» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, an airline poster's broad-shouldered figures in plain colours lit by the scene — and what they
// move by (the motions in cast.data.json). cast.md says who is who and what each holds. A part's lengths are a man's
// metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
// where a thing held in both hands is, and its axes: across the hands, up the chest, out from it
function heldInHands(F) {
  const { add, sub, mul, unit, cross } = V();
  const r = F.P('RightHand');
  const l = F.P('LeftHand');
  const mid = mul(add(r, l), 0.5);
  const side = unit(sub(l, r));
  const out = unit(cross(side, F.up('Chest')));
  const up = cross(out, side);
  return { mid, axes: [side, up, out] };
}
return {
  ...data,
  characters: {
    // Rivière, the director of the line: past fifty, tall and upright, grey at the temples, a long dark overcoat
    // buttoned up, a dark hat; a white collar the one light thing on him
    riviere: {
      kind: 'shapes', style: 'aero', who: 'old', garment: 'coat', hair: 'short', hat: 'hat',
      body: { height: 1.02, shoulders: 1.04, thick: 0.92 },
      colors: { skin: '#cfa587', hair: '#9d978f', top: '#e2ddd3', garment: '#2c3240', bottom: '#262a33', hat: '#1f2229', shoes: '#18191d' },
    },
    // Robineau, the inspector: shorter, soft, a brown suit a little too tight, dark hair parted flat, a small
    // moustache; his folder always in his hands
    robineau: {
      kind: 'shapes', style: 'aero', who: 'man', garment: 'jacket', hair: 'short', parts: ['moustache', 'folder'],
      body: { height: 0.95, shoulders: 0.94, thick: 1.12 },
      colors: { skin: '#e0b896', hair: '#2a211c', top: '#d9d2c2', garment: '#6e5a45', bottom: '#5a4a3a', shoes: '#2a211c', accent: '#8c2f2a' },
    },
    // Roblet, the old mechanic: twenty years on the engines — stooped a little, white hair cut short, a faded blue
    // work jacket, his cap off and held in both hands
    roblet: {
      kind: 'shapes', style: 'aero', who: 'old', garment: 'jacket', hair: 'short', parts: ['cap_held'],
      body: { height: 0.96, shoulders: 1.02, thick: 1.04, arms: 1.03 },
      colors: { skin: '#c69273', hair: '#dcd8d0', top: '#9aa3a8', garment: '#4c6f93', bottom: '#3d5470', shoes: '#2b2420', hat: '#3f4650' },
    },
  },
  shapes: {
    // the world's style: an airline poster's figures — broad shoulders over a narrow waist, square-ish, plain colours
    // under the scene's light, a fine line, a simple face (eyes, brows, nose, mouth) so faces read
    styles: { aero: { from: 'graphic', name: 'Night Flight', paint: 'lit', line: 1.1, face: 'simple' } },
    parts: {
      // a small dark moustache under the nose (the hair's colour)
      moustache: {
        name: 'moustache',
        draw: F => {
          const { add, mul } = V();
          const h = F.head;
          const [hs, hu, hf] = h.axes;
          const r = h.r * h.out;
          F.ball(add(h.at, add(mul(hu, -r * 0.42), mul(hf, r * 0.93))), [hs, hu, hf], [r * 0.28, r * 0.07, r * 0.08], F.colors.hair, 10);
        },
      },
      // the inspector's folder of reports held against the chest in both hands: grey-green board, its papers' edge
      folder: {
        name: 'folder',
        draw: F => {
          const { add, mul } = V();
          const m = F.fit.h;
          const { mid, axes } = heldInHands(F);
          const c = add(mid, mul(axes[2], 0.02 * m));
          F.ball(c, axes, [0.17 * m, 0.22 * m, 0.016 * m], [0.42, 0.47, 0.4, 1], 4, 10);
          F.ball(add(c, mul(axes[1], 0.012 * m)), axes, [0.16 * m, 0.21 * m, 0.022 * m], [0.88, 0.86, 0.8, 1], 4, 10);
        },
      },
      // the mechanic's cloth cap, taken off and held by its peak in both hands before him: its crown towards us
      cap_held: {
        name: 'cap in the hands',
        draw: F => {
          const { add, mul } = V();
          const m = F.fit.h;
          const { mid, axes } = heldInHands(F);
          const [side, up, out] = axes;
          const crown = add(mid, mul(out, 0.05 * m));
          F.ball(crown, [side, out, mul(up, -1)], [0.11 * m, 0.045 * m, 0.1 * m], F.colors.hat, 14);
          F.ball(add(mid, mul(up, 0.06 * m)), axes, [0.085 * m, 0.012 * m, 0.05 * m], F.colors.hat, 10);
        },
      },
    },
  },
};
