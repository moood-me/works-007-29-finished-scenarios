// The people of «Of Mice and Men» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, plain straight-edged shapes in work clothes, lit by the scene's own light (the dust and the low
// sun of the Salinas valley), faces simple enough to read from across a fire — and how they move: the motions in
// cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who and what each motion is.
return {
  ...data,
  characters: {
    // George Milton: small and quick, a dark face, restless eyes, sharp strong features; a denim coat over a work
    // shirt, denim trousers, a black shapeless hat
    george: { kind: 'shapes', style: 'dust', who: 'man', garment: 'denim', hair: 'short', hat: 'slouch',
      body: { height: 0.95, head: 1.1, thick: 0.9, shoulders: 0.98 },
      colors: { skin: '#b0805e', hair: '#241c18', top: '#cbbfa6', garment: '#5d7290', bottom: '#34405a', hat: '#2a2725', shoes: '#3b2c21' } },
    // Lennie Small: huge, shapeless of face, pale; wide sloping shoulders, long heavy arms; the same denim, the same
    // black hat
    lennie: { kind: 'shapes', style: 'dust', who: 'man', garment: 'denim', hair: 'short', hat: 'slouch',
      body: { height: 1.12, head: 1.04, thick: 1.25, shoulders: 1.2, arms: 1.08, neck: 0.8 },
      colors: { skin: '#d8b092', hair: '#8b6c48', top: '#b5a88e', garment: '#6a7f9e', bottom: '#3e4c68', hat: '#2e2b29', shoes: '#3b2c21' } },
    // Slim, the jerkline skinner: tall and lean, a long hatchet face, black hair combed straight back; a dark leather
    // vest over a pale work shirt, jeans, a light Stetson — the prince of the ranch
    slim: { kind: 'shapes', style: 'dust', who: 'man', garment: 'vest', hair: 'short', hat: 'stetson',
      body: { height: 1.07, head: 0.98, thick: 0.86, shoulders: 1.02, arms: 1.04, neck: 1.1 },
      colors: { skin: '#b98a66', hair: '#1c1714', top: '#d9cfb8', garment: '#4a3326', bottom: '#3d4a63', hat: '#b49a74', shoes: '#3b2c21' } },
    // Candy, the swamper: a tall stoop-shouldered old man, white stubble and white hair cropped close; a faded grey
    // shirt, old jeans
    candy: { kind: 'shapes', style: 'dust', who: 'man', garment: 'none', hair: 'short', hat: 'none',
      body: { height: 0.98, head: 1.04, thick: 0.85, shoulders: 0.94, neck: 0.85 },
      colors: { skin: '#c99f82', hair: '#e2ddd2', top: '#9b9a8f', bottom: '#4f5a70', shoes: '#3b2c21' } },
    // Curley's wife: small and young, full-bodied; her hair in little rolled curls, a bright cotton house dress, red
    // mules with red ostrich feathers on the insteps
    curleys_wife: { kind: 'shapes', style: 'dust', who: 'woman', garment: 'dress', hair: 'curls', hat: 'none', parts: ['mules'],
      body: { height: 0.9, head: 1.0, thick: 0.86, shoulders: 0.9, hips: 1.06 },
      colors: { skin: '#e8c4a4', hair: '#b88a4c', top: '#d0706a', garment: '#d0706a', shoes: '#b3262c', accent: '#c8323a' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours under the scene's light — with
    // limbs a working man's, heavier than its own, and a simple face (eyes, brows, a nose, a mouth) that takes a mood
    styles: { dust: { from: 'flat', name: 'Dust', limb: 1.1, line: 0.8, face: 'simple' } },
    // a denim work jacket, short: to the hips, straight (the engine's jacket hangs halfway down the thighs, a smock)
    garments: {
      denim: { name: 'denim jacket', hang: [{ to: 0.14, from: 'shoulders', flare: 0.04, folds: false }], sleeves: 'garment' },
      // a vest: the same cut to the hips, no sleeves — the shirt's own
      vest: { name: 'leather vest', hang: [{ to: 0.12, from: 'shoulders', flare: 0.03, folds: false }] },
    },
    hair: {
      // little rolled curls, like sausages: the hair close over the crown, the curls in a ring round the sides and
      // the back at the ears' height
      curls: { name: 'rolled curls', draw: F => {
        const { add, mul } = MooodShapes.V, { at, axes: [hs, hu, hf], r: rh, egg, out, sides, square } = F.head;
        F.cap(at, [hs, hu, hf], egg.map(e => e * rh * out * 1.04), [0, 0.7, -0.7], -0.05, F.colors.hair, sides, square);
        for (let a = -2.6; a <= 2.61; a += 0.4) {
          if (Math.abs(a) < 1.2) continue;
          const d = add(mul(hs, Math.sin(a)), mul(hf, Math.cos(a)));
          F.ball(add(at, add(mul(d, rh * 0.98), mul(hu, -rh * 0.3))), [hs, hu, hf], [rh * 0.2, rh * 0.32, rh * 0.2], F.colors.hair, 8);
        }
        for (const sx of [-1, 1]) F.ball(add(at, add(add(mul(hs, sx * rh * 0.55), mul(hu, rh * 0.62)), mul(hf, rh * 0.55))), [hs, hu, hf], [rh * 0.3, rh * 0.18, rh * 0.22], F.colors.hair, 8);
      } },
    },
    hats: {
      // a black shapeless hat: a soft crown, a brim not so wide, pushed back off the brow — the face under it seen
      slouch: { name: 'slouch hat', draw: F => {
        const { add, mul, unit, cross } = MooodShapes.V, { at, axes: [hs, hu, hf], r: rh } = F.head;
        const tilt = unit(add(hu, mul(hf, -0.1))), axes = [hs, tilt, cross(hs, tilt)];
        F.ball(add(at, mul(hu, rh * 0.5)), axes, [rh * 1.58, rh * 0.05, rh * 1.48], F.colors.hat, F.sides * 2);
        F.ball(add(at, add(mul(hu, rh * 0.72), mul(hf, -rh * 0.08))), axes, [rh * 0.9, rh * 0.5, rh * 0.88], F.colors.hat, F.sides, 2.4);
      } },
      // a Stetson: a wide flat brim level over the brow, a tall squared crown, a dark band round its foot
      stetson: { name: 'Stetson', draw: F => {
        const { add, mul, unit, cross } = MooodShapes.V, { at, axes: [hs, hu, hf], r: rh } = F.head;
        const tilt = unit(add(hu, mul(hf, -0.04))), axes = [hs, tilt, cross(hs, tilt)];
        F.ball(add(at, mul(hu, rh * 0.52)), axes, [rh * 1.95, rh * 0.05, rh * 1.8], F.colors.hat, F.sides * 2);
        F.ball(add(at, mul(hu, rh * 0.62)), axes, [rh * 0.93, rh * 0.12, rh * 0.98], F.colors.garment, F.sides, 3);
        F.ball(add(at, mul(hu, rh * 0.9)), axes, [rh * 0.86, rh * 0.48, rh * 0.94], F.colors.hat, F.sides, 3);
      } },
    },
    parts: {
      // red mules: a puff of red ostrich feathers on each instep
      mules: { name: 'mules', draw: F => {
        const { add, mul } = MooodShapes.V;
        for (const s of ['Left', 'Right']) {
          const j = s + 'Foot', at = add(F.P(j), add(mul(F.fwd(j), 0.06 * F.fit.h), mul(F.up(j), 0.035 * F.fit.h)));
          F.ball(at, [F.side(j), F.up(j), F.fwd(j)], [0.035, 0.026, 0.04].map(v => v * F.fit.h), F.colors.accent, 8);
        }
      } },
      // a puppy held in both hands against the chest: white with a brown patch, lying across the arms, its brown head
      // at one end turned out, a pale muzzle, a black nose, the ears down; its point "#puppy"
      puppy: { name: 'puppy', draw: F => {
        const { add, mul, mean } = MooodShapes.V, c = mean([F.P('LeftHand'), F.P('RightHand')]);
        const [hs, hu, hf] = [F.side('Chest'), F.up('Chest'), F.fwd('Chest')], axes = [hs, hu, hf], k = F.fit.h;
        const at = (o, s, u, f) => add(o, add(mul(hs, s * k), add(mul(hu, u * k), mul(hf, f * k))));
        const body = at(c, 0, 0.04, 0.06);
        F.ball(body, axes, [0.13, 0.07, 0.075].map(v => v * k), [0.9, 0.86, 0.79], 10);
        F.ball(at(body, -0.05, 0.03, 0.02), axes, [0.06, 0.045, 0.055].map(v => v * k), [0.47, 0.33, 0.21], 8);
        const head = at(body, 0.11, 0.05, 0.04);
        F.ball(head, axes, [0.055, 0.05, 0.055].map(v => v * k), [0.47, 0.33, 0.21], 10);
        F.ball(at(head, 0.01, -0.012, 0.045), axes, [0.03, 0.025, 0.03].map(v => v * k), [0.9, 0.86, 0.79], 8);
        F.ball(at(head, 0.01, -0.005, 0.075), axes, [0.01, 0.009, 0.008].map(v => v * k), [0.08, 0.06, 0.05], 6);
        for (const sx of [-1, 1]) F.ball(at(head, sx * 0.045, -0.015, -0.005), axes, [0.012, 0.035, 0.018].map(v => v * k), [0.3, 0.2, 0.13], 6);
        F.point('puppy', head);
      } },
    },
  },
};
