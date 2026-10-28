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
      kind: 'shapes', style: 'aero', who: 'old', garment: 'coat', hair: 'short', hat: 'fedora',
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
    // Roblet, the old mechanic: twenty years on the engines — stooped a little, grey hair cut short, a faded blue
    // work jacket, a grey moustache, his cap off and held in both hands
    roblet: {
      kind: 'shapes', style: 'aero', who: 'old', garment: 'jacket', hair: 'short', parts: ['moustache', 'cap_held'],
      body: { height: 0.96, shoulders: 1.02, thick: 1.04, arms: 1.03 },
      colors: { skin: '#c69273', hair: '#b9b4ab', top: '#9aa3a8', garment: '#4c6f93', bottom: '#3d5470', shoes: '#2b2420', hat: '#9c805a' },
    },
    // Madame Fabien: twenty-two, married six weeks; a coat thrown on over a house dress, no hat, her dark hair put up
    // in haste
    madame: {
      kind: 'shapes', style: 'aero', who: 'woman', garment: 'coat', hair: 'bun', hat: 'none',
      body: { height: 0.94, shoulders: 0.92, thick: 0.9 },
      colors: { skin: '#e8c6a8', hair: '#3a2a20', top: '#cdbba2', garment: '#7c6870', bottom: '#cdbba2', shoes: '#3a2c28' },
    },
    // the European mail's pilot: young, a brown leather flying jacket, breeches and boots, a white scarf, fair hair;
    // his leather helmet in his hand
    pilot: {
      kind: 'shapes', style: 'aero', who: 'man', garment: 'jacket', hair: 'short', scarf: true, parts: ['helmet_held'],
      body: { height: 1.01, shoulders: 1.06, thick: 0.96 },
      colors: { skin: '#dcb08e', hair: '#a8835a', top: '#ece7dc', garment: '#6b4a32', bottom: '#8c8166', shoes: '#2a1f18', accent: '#ece7dc', hat: '#5a3c28' },
    },
    // the telegraphist: twenty years at the key, in shirtsleeves and a dark waistcoat, a green eyeshade, thin grey hair,
    // a small moustache
    telegraphist: {
      kind: 'shapes', style: 'aero', who: 'man', garment: 'none', hair: 'short', hat: 'visor', parts: ['moustache'],
      body: { height: 0.97, shoulders: 0.98, thick: 1.0 },
      colors: { skin: '#d9b294', hair: '#8f8a84', top: '#e2ded2', bottom: '#3a3d44', shoes: '#22201e', hat: '#3f7a56' },
    },
    // Fabien, the Patagonian mail's pilot: thirty, calm and exact; a black-brown leather coat, a white scarf, a leather
    // flying helmet with its goggles pushed up on the brow
    fabien: {
      kind: 'shapes', style: 'aero', who: 'man', garment: 'jacket', hair: 'short', hat: 'aviator', scarf: true,
      body: { height: 1.0, shoulders: 1.04, thick: 0.98 },
      colors: { skin: '#d8ab88', hair: '#4a3626', top: '#ece7dc', garment: '#3a2c24', bottom: '#4a4034', shoes: '#1f1813', accent: '#ece7dc', hat: '#4e3626' },
    },
    // Fabien's radio operator: young, a sheepskin-collared tan jacket, his helmet lighter, the headphones over it;
    // a message pad in his left hand
    radioman: {
      kind: 'shapes', style: 'aero', who: 'man', garment: 'jacket', hair: 'short', hat: 'aviator', parts: ['headphones', 'pad'],
      body: { height: 0.97, shoulders: 0.98, thick: 0.96 },
      colors: { skin: '#e2b896', hair: '#6a4e34', top: '#d8cdb8', garment: '#8a6a48', bottom: '#4f4636', shoes: '#241c16', accent: '#e4dccb', hat: '#7a5a3c' },
    },
  },
  shapes: {
    // the world's style: an airline poster's figures — the engine's flat geometry (straight edges, a coat a clean
    // trapezoid, plain colours under the scene's light), a fine line, a head a little larger and a simple face (eyes,
    // brows, nose, mouth) so faces read
    styles: { aero: { from: 'flat', name: 'Night Flight', head: 1.18, line: 0.9, face: 'simple' } },
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
      // the inspector's folder of reports held before him in both hands: grey-green board, its papers' edge
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
      // the mechanic's cloth cap, taken off and held in both hands before him, its top to us: the round flat crown,
      // its peak hanging below it darker
      cap_held: {
        name: 'cap in the hands',
        draw: F => {
          const { add, mul } = V();
          const m = F.fit.h;
          const { mid, axes } = heldInHands(F);
          const [, up, out] = axes;
          const c = add(mid, add(mul(up, -0.04 * m), mul(out, 0.04 * m)));
          F.ball(add(c, add(mul(up, -0.12 * m), mul(out, 0.012 * m))), axes, [0.1 * m, 0.045 * m, 0.012 * m], F.colors.hat.map((v, i) => (i < 3 ? v * 0.6 : v)), 16);
          F.ball(c, axes, [0.14 * m, 0.115 * m, 0.03 * m], F.colors.hat, 20);
        },
      },
      // a radio operator's headphones over his helmet: a band over the crown, a round black earpiece on each ear
      headphones: {
        name: 'headphones',
        draw: F => {
          const { add, mul } = V();
          const { at: head, axes: [hs, hu, hf], r: rh } = F.head;
          F.ball(add(head, mul(hu, rh * 1.1)), [hs, hu, hf], [rh * 1.0, rh * 0.08, rh * 0.14], [0.16, 0.16, 0.17, 1], F.sides);
          for (const s of [-1, 1]) F.ball(add(head, add(mul(hs, s * rh * 1.12), mul(hu, -rh * 0.12))), [hs, hu, hf], [rh * 0.14, rh * 0.34, rh * 0.34], [0.14, 0.14, 0.15, 1], F.sides);
        },
      },
      // a message pad in the left hand: a small block of pale sheets, held up to write on
      pad: {
        name: 'message pad',
        draw: F => {
          const { add, mul } = V();
          const m = F.fit.h;
          const axes = [F.side('LeftHand'), F.up('LeftHand'), F.fwd('LeftHand')];
          F.ball(add(F.P('LeftHand'), mul(axes[2], 0.06 * m)), axes, [0.07 * m, 0.012 * m, 0.1 * m], [0.92, 0.9, 0.84, 1], 4, 10);
        },
      },
      // a pilot's leather helmet hanging from his right hand by its strap: the round leather shell, the goggles on
      // its brow
      helmet_held: {
        name: 'helmet in the hand',
        draw: F => {
          const { add, mul } = V();
          const m = F.fit.h;
          const axes = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
          const c = add(F.P('RightHand'), [0, -0.1 * m, 0.02 * m]);
          F.ball(c, axes, [0.085 * m, 0.105 * m, 0.095 * m], F.colors.hat, 14);
          for (const s of [-1, 1]) F.ball(add(c, [s * 0.035 * m, 0.03 * m, 0.085 * m]), axes, [0.028 * m, 0.024 * m, 0.012 * m], [0.32, 0.36, 0.38, 1], 10);
          F.bar(add(c, [0, -0.1 * m, 0]), add(c, [0, -0.17 * m, 0.02 * m]), 0.012 * m, 0.01 * m, [[0, F.colors.hat]], 6, [1, 0, 0], 0.3);
        },
      },
    },
    hats: {
      // a pilot's leather flying helmet worn: a close leather shell over the skull and down over the ears, a strap
      // under the chin, the goggles pushed up on the brow (their glass catching the light)
      aviator: {
        name: 'flying helmet',
        draw: F => {
          const { add, mul } = V();
          const { at: head, axes: [hs, hu, hf], egg, r: rh, out, sides, square } = F.head;
          // the shell over the crown and the back of the head, its edge at the brow before and low at the nape
          F.cap(head, [hs, hu, hf], egg.map(e => e * rh * out * 1.08), [0, 0.55, -0.84], -0.3, F.colors.hat, sides, square);
          // the ear flaps
          for (const s of [-1, 1]) F.ball(add(head, add(mul(hs, s * rh * 0.95), mul(hu, -rh * 0.2))), [hs, hu, hf], [rh * 0.2, rh * 0.42, rh * 0.36], F.colors.hat, F.sides);
          // the goggles pushed up on the brow: their strap, two round glasses catching the light
          F.ball(add(head, add(mul(hu, rh * 0.6), mul(hf, rh * 0.62))), [hs, hu, hf], [rh * 1.0, rh * 0.09, rh * 0.5], [0.2, 0.17, 0.15, 1], F.sides);
          for (const s of [-1, 1]) F.ball(add(head, add(add(mul(hs, s * rh * 0.36), mul(hu, rh * 0.62)), mul(hf, rh * 0.86))), [hs, hu, hf], [rh * 0.28, rh * 0.2, rh * 0.12], [0.62, 0.7, 0.74, 1], 12);
        },
      },
      // a telegraphist's green celluloid eyeshade: a band round the head, its peak out over the eyes
      visor: {
        name: 'eyeshade',
        draw: F => {
          const { add, mul } = V();
          const { at: head, axes: [hs, hu, hf], r: rh } = F.head;
          F.ball(add(head, mul(hu, rh * 0.42)), [hs, hu, hf], [rh * 1.03, rh * 0.12, rh * 1.03], F.colors.hat, F.sides);
          F.ball(add(head, add(mul(hu, rh * 0.4), mul(hf, rh * 0.85))), [hs, hu, hf], [rh * 0.9, rh * 0.035, rh * 0.55], F.colors.hat, F.sides);
        },
      },
      // a hat of the 'twenties: a brim, a high rounded crown
      fedora: {
        name: 'fedora',
        draw: F => {
          const { add, mul, unit, cross } = V();
          const { at: head, axes: [hs, hu, hf], r: rh } = F.head;
          const tilt = unit(add(hu, mul(hf, 0.1)));
          const axes = [hs, tilt, cross(hs, tilt)];
          F.ball(add(head, add(mul(hu, rh * 0.45), mul(hf, rh * 0.06))), axes, [rh * 1.55, rh * 0.07, rh * 1.55], F.colors.hat, F.sides * 2);
          F.ball(add(head, mul(hu, rh * 0.62)), axes, [rh * 1.02, rh * 0.72, rh * 1.06], F.colors.hat, F.sides, 3);
        },
      },
    },
  },
};
