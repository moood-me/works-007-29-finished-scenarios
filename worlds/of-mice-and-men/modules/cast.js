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
      body: { height: 1.12, head: 1.04, thick: 1.3, shoulders: 1.2, arms: 1.08, neck: 0.8 },
      colors: { skin: '#d8b092', hair: '#8b6c48', top: '#b5a88e', garment: '#6a7f9e', bottom: '#3e4c68', hat: '#2e2b29', shoes: '#3b2c21' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours under the scene's light — with
    // limbs a working man's, heavier than its own, work boots, and a simple face (eyes, brows, a nose, a mouth) that
    // takes a mood
    styles: { dust: { from: 'flat', name: 'Dust', limb: 1.1, feet: 'boot', line: 0.8, face: 'simple' } },
    // a denim work jacket, short: to the hips, straight (the engine's jacket hangs halfway down the thighs, a smock)
    garments: { denim: { name: 'denim jacket', hang: [{ to: 0.14, from: 'shoulders', flare: 0.04, folds: false }], sleeves: 'garment' } },
    hats: {
      // a black shapeless hat: a soft crown, a brim not so wide, pushed back off the brow — the face under it seen
      slouch: { name: 'slouch hat', draw: F => {
        const { add, mul, unit, cross } = MooodShapes.V, { at, axes: [hs, hu, hf], r: rh } = F.head;
        const tilt = unit(add(hu, mul(hf, -0.1))), axes = [hs, tilt, cross(hs, tilt)];
        F.ball(add(at, mul(hu, rh * 0.5)), axes, [rh * 1.58, rh * 0.05, rh * 1.48], F.colors.hat, F.sides * 2);
        F.ball(add(at, add(mul(hu, rh * 0.72), mul(hf, -rh * 0.08))), axes, [rh * 0.9, rh * 0.5, rh * 0.88], F.colors.hat, F.sides, 2.4);
      } },
    },
  },
};
