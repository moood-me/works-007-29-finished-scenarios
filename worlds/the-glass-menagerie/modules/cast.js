// The people of «The Glass Menagerie» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, soft rounded shapes in quiet colours, lit by the scene — and what they move by (the
// motions in cast.data.json). cast.md says who is who.
return {
  ...data,
  characters: {
    // Tom Wingfield, twenty-three: lean, dark hair, in his shirtsleeves — a white shirt, dark trousers (his overcoat
    // hangs by the door) — the warehouse clerk who writes poems at night
    tom: {
      kind: 'shapes', style: 'memory', who: 'man', garment: 'none', hair: 'short',
      body: { height: 0.99, thick: 0.86, shoulders: 0.98 },
      colors: { skin: '#e2b896', hair: '#2b211c', top: '#ebe5d6', bottom: '#3b3a44', shoes: '#25201d' },
    },
    // Tom on his way in or out: the same, in his grey overcoat (it hangs on the hook by the door at home)
    tom_coat: {
      kind: 'shapes', style: 'memory', who: 'man', garment: 'coat', hair: 'short',
      body: { height: 0.99, thick: 0.86, shoulders: 0.98 },
      colors: { skin: '#e2b896', hair: '#2b211c', top: '#ebe5d6', garment: '#56555c', bottom: '#3b3a44', shoes: '#25201d' },
    },
    // Laura Wingfield, twenty-four: slight, a dark bob, a plain pale-blue dress (blue roses), dark shoes
    laura: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bob',
      body: { height: 0.91, thick: 0.78, shoulders: 0.84, hips: 0.98 },
      colors: { skin: '#efcdb2', hair: '#46302a', top: '#8eaee6', garment: '#8eaee6', shoes: '#4a3b36' },
    },
    // Amanda Wingfield, past fifty: upright, fuller, greying hair in a bun, a faded plum house dress
    amanda: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.9, thick: 0.98, shoulders: 0.92, hips: 1.1 },
      colors: { skin: '#e3b99a', hair: '#6b615b', top: '#6a4b5e', garment: '#6a4b5e', shoes: '#2e2523' },
    },
    // Amanda on the gentleman caller's evening: the old jonquil-yellow dress of her girlhood, taken out of the trunk
    amanda_jonquils: {
      kind: 'shapes', style: 'memory', who: 'woman', garment: 'dress', hair: 'bun',
      body: { height: 0.9, thick: 0.98, shoulders: 0.92, hips: 1.1 },
      colors: { skin: '#e3b99a', hair: '#6b615b', top: '#e6c35e', garment: '#e6c35e', shoes: '#5a4632' },
    },
    // Jim O'Connor, twenty-four: broad, easy, sandy-red hair, in his good light-brown jacket and dark trousers — the
    // high-school hero, now a shipping clerk at the same warehouse
    jim: {
      kind: 'shapes', style: 'memory', who: 'man', garment: 'jacket', hair: 'short',
      body: { height: 1.0, thick: 0.98, shoulders: 1.08 },
      colors: { skin: '#eebd9c', hair: '#9a5a32', top: '#e9e2d0', garment: '#9b7a55', bottom: '#33302e', shoes: '#2a1f1a' },
    },
    // Jim at work in the warehouse: his jacket off, a pale-blue work shirt with the sleeves rolled up, grey trousers
    jim_work: {
      kind: 'shapes', style: 'memory', who: 'man', garment: 'rolled', hair: 'short',
      body: { height: 1.0, thick: 0.98, shoulders: 1.08 },
      colors: { skin: '#eebd9c', hair: '#9a5a32', top: '#bccbd8', bottom: '#4b4642', shoes: '#2a1f1a' },
    },
  },
  shapes: {
    // a shirt with its sleeves rolled up above the elbow: the forearms bare
    garments: { rolled: { name: 'shirt, sleeves rolled up', short: true } },
    // what they hold: Laura's little glass deer, cupped in both hands — clear glass that keeps its own light (it glows,
    // whatever lights it); its point `deer` ("laura#deer")
    parts: {
      deer: { name: 'glass deer', draw: F => {
        const { add, mul, mix } = MooodShapes.V, m = F.fit.h, GLASS = [0.86, 0.94, 1, 2];
        const c = add(mix(F.P('RightHand'), F.P('LeftHand'), 0.5), [0, 0.035 * m, 0]), axes = [F.side('Hips'), [0, 1, 0], F.fwd('Hips')];
        F.ball(c, axes, [0.038 * m, 0.02 * m, 0.018 * m], GLASS, 10);
        F.ball(add(c, add(mul(axes[0], 0.032 * m), [0, 0.034 * m, 0])), axes, [0.011 * m, 0.013 * m, 0.011 * m], GLASS, 8);
        F.point('deer', c);
      } },
      // a cigarette between the right hand's fingers, its tip a coal that glows whatever lights it; its point `ember`
      // ("tom#ember") — where its smoke rises from
      cigarette: { name: 'cigarette', draw: F => {
        const { add, mul, sub, unit } = MooodShapes.V, m = F.fit.h, hand = F.P('RightHand');
        const tip = add(hand, mul(sub(F.P('RightHandMiddle1'), hand), 1.5)), along = unit(F.side('RightHand'));
        const a = add(tip, mul(along, -0.012 * m)), b = add(tip, mul(along, 0.06 * m));
        F.bar(a, b, 0.0055 * m, 0.0055 * m, [[0, [0.95, 0.93, 0.88, 1]]], 6, F.up('RightHand'));
        const coal = add(b, mul(along, 0.004 * m));
        F.ball(coal, [along, F.up('RightHand'), F.fwd('RightHand')], [0.006 * m, 0.006 * m, 0.006 * m], [1, 0.42, 0.16, 2], 6);
        F.point('ember', coal);
      } },
      // a shoebox lid lying across the knees of one sitting, cardboard; its point `lid` ("tom#lid") — what he writes on
      lid: { name: 'shoebox lid', draw: F => {
        const { add, mix, mean } = MooodShapes.V, m = F.fit.h;
        const knees = mean([mix(F.P('LeftShin'), F.P('LeftLeg'), 0.3), mix(F.P('RightShin'), F.P('RightLeg'), 0.3)]);
        const c = add(knees, [0, 0.075 * m, 0]), axes = [F.side('Hips'), [0, 1, 0], F.fwd('Hips')];
        F.ball(c, axes, [0.19 * m, 0.014 * m, 0.12 * m], [0.9, 0.84, 0.7, 1], 12, 8);
        F.point('lid', c);
      } },
      // a yellow pencil in the right hand, its point down toward what it writes on
      pencil: { name: 'pencil', draw: F => {
        const { add, mul, sub, unit } = MooodShapes.V, m = F.fit.h, hand = F.P('RightHand');
        const grip = add(hand, mul(sub(F.P('RightHandMiddle1'), hand), 1.2)), along = unit(F.fwd('RightHand'));
        F.bar(add(grip, mul(along, -0.05 * m)), add(grip, mul(along, 0.07 * m)), 0.0045 * m, 0.003 * m, [[0, [0.85, 0.68, 0.22, 1]], [0.9, [0.3, 0.26, 0.24, 1]]], 6, F.up('RightHand'));
      } },
    },
    // the world's style: soft rounded shapes and tinted lines (soft), the head a shade smaller so the grown-ups read
    // as grown-ups yet big enough that a simple face (eyes, brows, nose, mouth — <id>_mood shows on it) reads across
    // the room
    styles: { memory: { from: 'soft', name: 'The Glass Menagerie', head: 1.3, neck: 0.5, legs: 0.92, line: 1.8 } },
  },
};
