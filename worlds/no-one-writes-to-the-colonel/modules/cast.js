// The people of «No One Writes to the Colonel» as people in a scene (an element with "person"): who they are — figures
// of shapes in this world's style, matte figurines in sun-faded colours lit by the scene, a simple face so a face
// reads across the room — and what they move by (the motions in cast.data.json). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const UMBRELLA = [0.09, 0.085, 0.09, 1];
const HANDLE = [0.3, 0.2, 0.13, 1];
const UP = [0, 1, 0];
// what the umbrella keeps from frame to frame (F.keep: once a figure) — its colours, its profiles at the figure's
// size, the lists its points are put in
const KEPT = F => {
  const h = F.fit.h;
  return {
    h,
    rod: [[0, UMBRELLA]],
    crook: [[0, HANDLE]],
    cloth: [[0, 0.018 * h], [1, 0.03 * h], [2, 0.01 * h]],
    hook: [[0, 0.011 * h], [3, 0.01 * h]],
    spindle: [null, null, null],
    curl: [null, null, null, null],
  };
};
return {
  ...data,
  characters: {
    // the colonel, seventy-five: tall, all bone and sinew, grey hair cut short, a grey moustache; his one black suit of
    // wool cloth, a white collarless shirt buttoned to the throat, polished black shoes
    colonel: {
      kind: 'shapes', style: 'macondo', who: 'old', garment: 'jacket', hair: 'short', face: 'simple', parts: ['moustache'],
      body: { height: 1.0, thick: 0.78, shoulders: 0.98, neck: 1.1 },
      colors: { skin: '#b9845f', hair: '#cfc9bf', top: '#ece6d8', garment: '#2b2a31', bottom: '#2b2a31', shoes: '#141215' },
    },
    // his wife, about seventy: small and bony, grey hair drawn back in a knot, a faded dark-blue house dress gone grey
    // with washing, bare feet in slippers
    wife: {
      kind: 'shapes', style: 'macondo', who: 'woman', garment: 'dress', hair: 'bun', face: 'simple',
      body: { height: 0.9, thick: 0.74, shoulders: 0.84, hips: 0.96 },
      colors: { skin: '#c4916c', hair: '#bdb6ac', top: '#46506a', garment: '#46506a', shoes: '#3a2f2a' },
    },
  },
  shapes: {
    // the world's style: the engine's toy figurines — soft matte volumes lit by the room's light, quiet and upright —
    // with a simple face (eyes, brows, nose, mouth: <id>_mood shows on it)
    styles: { macondo: { from: 'toy', name: 'No One Writes to the Colonel', face: 'simple' } },
    parts: {
      // a grey moustache under the nose, drooping a little at its ends (the colour of the hair)
      moustache: {
        name: 'moustache',
        draw: F => {
          const { axes, r: rh, on } = F.head;
          F.tube(
            [on([-0.32, -0.36, 0.86], 1.0), on([-0.14, -0.24, 0.97], 1.04), on([0, -0.26, 1], 1.05), on([0.14, -0.24, 0.97], 1.04), on([0.32, -0.36, 0.86], 1.0)],
            [[0, rh * 0.03], [1, rh * 0.07], [2, rh * 0.075], [3, rh * 0.07], [4, rh * 0.03]],
            [[0, F.colors.hair]],
            8,
            axes[1],
          );
        },
      },
      // his old black umbrella, furled, held like a cane: the crook in the right hand, the ferrule on the floor. Drawn
      // each frame (it goes with the hand and the feet): what it needs is kept (F.keep), the vectors are the frame's own
      umbrella: {
        name: 'umbrella',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const K = F.keep(KEPT);
          const h = K.h;
          const hand = F.P('RightHand');
          const fwd = F.fwd('Hips');
          const across = F.side('Hips');
          const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.07 * h;
          const tip = sub(add(hand, mul(fwd, 0.06)), mul(UP, hand[1] - floor));
          const along = unit(sub(hand, tip));
          const top = add(hand, mul(along, 0.06 * h));
          const shaft = sub(top, mul(along, 0.3 * h));
          F.bar(top, tip, 0.008 * h, 0.006 * h, K.rod, 6, across);
          // the furled cloth: a long spindle from under the hand to above the ferrule
          K.spindle[0] = shaft;
          K.spindle[1] = mul(add(shaft, tip), 0.5);
          K.spindle[2] = add(tip, mul(along, 0.1 * h));
          F.tube(K.spindle, K.cloth, K.rod, 8, across);
          // the crook over the hand
          const back = mul(fwd, -1);
          K.curl[0] = top;
          K.curl[1] = add(top, mul(along, 0.05 * h));
          K.curl[2] = add(K.curl[1], add(mul(along, 0.01 * h), mul(back, 0.05 * h)));
          K.curl[3] = add(top, add(mul(along, 0.02 * h), mul(back, 0.08 * h)));
          F.tube(K.curl, K.hook, K.crook, 6, across);
        },
      },
    },
  },
};
