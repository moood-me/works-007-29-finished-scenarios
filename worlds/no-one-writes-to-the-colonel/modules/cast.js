// The people of «No One Writes to the Colonel» as people in a scene (an element with "person"): who they are — figures
// of shapes in this world's style, flat shapes in sun-faded colours lit by the scene, a simple face so a face reads
// across the room — and what they move by (the motions in cast.data.json). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const UMBRELLA = [0.09, 0.085, 0.09, 1];
const HANDLE = [0.3, 0.2, 0.13, 1];
return {
  ...data,
  characters: {
    // the colonel, seventy-five: tall, all bone and sinew, grey hair cut short, a grey moustache; his one black suit of
    // wool cloth, a white collarless shirt buttoned to the throat, polished black shoes
    colonel: {
      kind: 'shapes', style: 'macondo', who: 'old', garment: 'jacket', hair: 'short', face: 'simple', parts: ['moustache'],
      body: { height: 1.0, thick: 0.78, shoulders: 0.98, neck: 1.1 },
      colors: { skin: '#b9845f', hair: '#cfc9bf', top: '#ece6d8', garment: '#1f1d22', bottom: '#1f1d22', shoes: '#141215' },
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
    // the world's style: the engine's graphic figures — flat colours, a narrow waist, long limbs — toned by the light,
    // with a simple face (eyes, brows, nose, mouth: <id>_mood shows on it)
    styles: { macondo: { from: 'graphic', name: 'No One Writes to the Colonel', paint: 'toned', face: 'simple', line: 1.4 } },
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
      // his old black umbrella, furled, held like a cane: the crook in the right hand, the ferrule on the floor
      umbrella: {
        name: 'umbrella',
        draw: F => {
          const { add, mul, sub, unit } = V();
          const hand = F.P('RightHand');
          const floor = Math.min(F.P('RightFoot')[1], F.P('LeftFoot')[1]) - 0.07 * F.fit.h;
          const tip = [hand[0] + F.fwd('Hips')[0] * 0.06, floor, hand[2] + F.fwd('Hips')[2] * 0.06];
          const along = unit(sub(hand, tip));
          const top = add(hand, mul(along, 0.06 * F.fit.h));
          const shaft = sub(top, mul(along, 0.3 * F.fit.h));
          F.bar(top, tip, 0.008 * F.fit.h, 0.006 * F.fit.h, [[0, UMBRELLA]], 6, F.side('Hips'));
          // the furled cloth: a long spindle from under the hand to above the ferrule
          F.tube(
            [shaft, mul(add(shaft, tip), 0.5), add(tip, mul(along, 0.1 * F.fit.h))],
            [[0, 0.018 * F.fit.h], [1, 0.03 * F.fit.h], [2, 0.01 * F.fit.h]],
            [[0, UMBRELLA]],
            8,
            F.side('Hips'),
          );
          // the crook over the hand
          const back = mul(F.fwd('Hips'), -1);
          F.tube(
            [top, add(top, mul(along, 0.05 * F.fit.h)), add(add(top, mul(along, 0.06 * F.fit.h)), mul(back, 0.05 * F.fit.h)), add(add(top, mul(along, 0.02 * F.fit.h)), mul(back, 0.08 * F.fit.h))],
            [[0, 0.011 * F.fit.h], [3, 0.01 * F.fit.h]],
            [[0, HANDLE]],
            6,
            F.side('Hips'),
          );
        },
      },
    },
  },
};
