// The people of «The Man Who Planted Trees» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, straight-edged flat shapes in plain dusty colours lit by the scene's own light — and how
// they move: the motions in cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m); the
// points a part names (F.point) are the person's: "elzeard#rod".
const V = () => MooodShapes.V;
const IRON = [0.2, 0.2, 0.21, 1], TIN = [0.48, 0.48, 0.46, 1], LEATHER = [0.42, 0.31, 0.22, 1], CLOTH = [0.47, 0.5, 0.42, 1];
const STRAP = [0.3, 0.22, 0.16, 1], WOOD = [0.5, 0.38, 0.26, 1], HOOP = [0.27, 0.25, 0.24, 1], BOOK = [0.2, 0.18, 0.16, 1];
const WICKER = [0.62, 0.48, 0.3, 1];
// toward the person's right, level
function rightOf(F) {
  const { sub, unit } = V(), d = sub(F.P('RightLeg'), F.P('LeftLeg'));
  return unit([d[0], 0, d[2]]);
}
// the floor under them: a little below the lower ankle
function floorOf(F) {
  return Math.min(F.P('LeftFoot')[1], F.P('RightFoot')[1]) - 0.08 * F.fit.h;
}
return {
  ...data,
  characters: {
    // Elzéard, the shepherd, fifty-five: tall and lean, clean-shaven, short grey hair under a dark felt hat, a brown wool
    // jacket buttoned over a pale shirt (the iron rod he plants acorns with — the part `rod`, through `<id>_with`)
    elzeard: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat',
      body: { height: 1.04, thick: 0.84, shoulders: 1.0, neck: 1.05 },
      colors: { skin: '#cf9e7a', hair: '#aaa59c', top: '#d9d3c4', garment: '#5d4936', bottom: '#4a443b', hat: '#3b332b', shoes: '#2a241f' } },
    // the Traveller at twenty: slight, bare-headed, brown hair, a faded blue-grey jacket, a bag on a strap over the left
    // shoulder, a tin flask at the right hip
    traveller: { kind: 'shapes', style: 'plateau', who: 'youth', garment: 'jacket', hair: 'short', parts: ['satchel', 'flask'],
      body: { height: 0.99, thick: 0.84, shoulders: 0.98 },
      colors: { skin: '#d4a988', hair: '#5a3d28', top: '#e3ddcf', garment: '#5e6d7a', bottom: '#4d4b45', shoes: '#2e2822' } },
    // Lina at seventeen, the charcoal burner's daughter: sturdy, dark hair under a rust-red kerchief, a soot-grey dress,
    // barefoot; a tin mug in her right hand
    lina: { kind: 'shapes', style: 'plateau', who: 'woman', garment: 'dress', hair: 'long', hat: 'kerchief', barefoot: 'both', parts: ['mug'],
      body: { height: 0.9, thick: 0.88, shoulders: 0.88 },
      colors: { skin: '#c99a76', hair: '#2b211b', top: '#6b6558', garment: '#6b6558', hat: '#a4523c' } },
    // six years on (the second chapter): Elzéard at sixty-one — the same man, his hair gone white, the jacket faded;
    // the iron rod in his hand
    elzeard_61: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat', parts: ['rod'],
      body: { height: 1.03, thick: 0.82, shoulders: 0.99, neck: 1.05 },
      colors: { skin: '#cc9a76', hair: '#d6d2ca', top: '#dcd6c8', garment: '#655341', bottom: '#4a443b', hat: '#3b332b', shoes: '#2a241f' } },
    // the Traveller at twenty-six, back from the war: a soldier's greatcoat of faded grey-olive to the knee, a field cap,
    // the bag on its strap; no flask
    traveller_26: { kind: 'shapes', style: 'plateau', who: 'youth', garment: 'coat', hair: 'short', hat: 'cap', parts: ['satchel'],
      body: { height: 1.0, thick: 0.86, shoulders: 1.0 },
      colors: { skin: '#cfa382', hair: '#4f3624', top: '#cfc9b9', garment: '#6b6f57', bottom: '#4a4a40', hat: '#585b48', shoes: '#2b2620' } },
    // Lina at twenty-three: a grown woman, the same rust-red kerchief, a slate-blue dress, shoes now; a wooden pail in
    // her right hand
    lina_23: { kind: 'shapes', style: 'plateau', who: 'woman', garment: 'dress', hair: 'long', hat: 'kerchief', parts: ['pail'],
      body: { height: 0.92, thick: 0.9, shoulders: 0.9 },
      colors: { skin: '#c99a76', hair: '#2b211b', top: '#5d6670', garment: '#5d6670', hat: '#a4523c', shoes: '#3a2e26' } },
    // fourteen years on (the third chapter): the Traveller at forty — a man now, a short beard, the brown hair greying;
    // a faded blue-grey jacket again, as at twenty, the bag on its strap
    traveller_40: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', parts: ['satchel', 'beard'],
      body: { height: 1.0, thick: 0.9, shoulders: 1.0 },
      colors: { skin: '#c99c7b', hair: '#6a5848', top: '#ddd6c6', garment: '#55697a', bottom: '#4a463e', shoes: '#2e2822' } },
    // Lina at thirty-seven: broader, the same rust-red kerchief, a dark indigo dress, the pail in her right hand
    lina_37: { kind: 'shapes', style: 'plateau', who: 'woman', garment: 'dress', hair: 'long', hat: 'kerchief', parts: ['pail'],
      body: { height: 0.92, thick: 0.97, shoulders: 0.93 },
      colors: { skin: '#c49572', hair: '#2b211b', top: '#4d5670', garment: '#4d5670', hat: '#a4523c', shoes: '#3a2e26' } },
    // Jan at forty, the district's forester: the Traveller's comrade from the regiment; solid, clean-shaven, in the
    // forester's bottle-green coat to the knee and a peaked cap; his notebook in his left hand
    jan_40: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'coat', hair: 'short', hat: 'cap', parts: ['notebook'],
      body: { height: 1.02, thick: 0.98, shoulders: 1.06 },
      colors: { skin: '#d2a685', hair: '#3a2c22', top: '#cdc6b2', garment: '#3f5a48', bottom: '#34352e', hat: '#2f4537', shoes: '#231e1a' } },
    // the years after (the third chapter and the epilogue): Elzéard at seventy-five — leaner, his hair snow-white, the
    // jacket faded to the colour of dry earth; the rod in his hand
    elzeard_75: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat', parts: ['rod'],
      body: { height: 1.0, thick: 0.79, shoulders: 0.96, neck: 1.05 },
      colors: { skin: '#c99672', hair: '#e6e2da', top: '#d8d2c4', garment: '#6c5c4a', bottom: '#4a443b', hat: '#3b332b', shoes: '#2a241f' } },
    // Elzéard at eighty-five: thinner still, a little shorter, the jacket paler; the rod
    elzeard_85: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat', parts: ['rod'],
      body: { height: 0.98, thick: 0.75, shoulders: 0.94, neck: 1.05 },
      colors: { skin: '#c69470', hair: '#efece6', top: '#d6d0c2', garment: '#746652', bottom: '#4d473e', hat: '#3e362e', shoes: '#2a241f' } },
    // the Traveller at fifty (the epilogue): the beard and the hair gone grey-brown, the blue-grey jacket faded, the bag
    traveller_50: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', parts: ['satchel', 'beard'],
      body: { height: 1.0, thick: 0.94, shoulders: 1.0 },
      colors: { skin: '#c59878', hair: '#8c8379', top: '#ddd6c6', garment: '#5d6b74', bottom: '#4a463e', shoes: '#2e2822' } },
    // the chief from town (3.2): good-natured, delighted, stout; a camel town coat, a dark hat
    chief: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'coat', hair: 'short', hat: 'hat',
      body: { height: 0.97, thick: 1.22, shoulders: 1.04 },
      colors: { skin: '#dcae8e', hair: '#4a3a2c', top: '#ece6da', garment: '#9b8a6c', bottom: '#4a4440', hat: '#3a3430', shoes: '#1f1b18' } },
    // the young ranger who comes with the town's people and stays to guard the protected wood: a lighter forester's green
    // jacket, a cap
    ranger: { kind: 'shapes', style: 'plateau', who: 'youth', garment: 'jacket', hair: 'short', hat: 'cap',
      body: { height: 1.0, thick: 0.88, shoulders: 0.98 },
      colors: { skin: '#d8ac8a', hair: '#6a4a30', top: '#d6d0bc', garment: '#55704f', bottom: '#3c3e34', hat: '#435a40', shoes: '#26211c' } },
    // a man of the village with an axe (3.1, when the wood is no one's): broad, a worn brown jacket over his shirt, a
    // cap; the axe hanging from his right hand
    axeman: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'jacket', hair: 'short', hat: 'cap', parts: ['axe'],
      body: { height: 1.0, thick: 1.06, shoulders: 1.06 },
      colors: { skin: '#c49270', hair: '#3a2e24', top: '#b9ab8e', garment: '#6a5a46', bottom: '#4a4036', hat: '#4e4438', shoes: '#2a241f' } },
    // visitors come to look (3.5 on the Name, the epilogue's finals): a woman in a plum town coat and hat with a basket
    visitor_a: { kind: 'shapes', style: 'plateau', who: 'lady', parts: ['basket'],
      body: { height: 0.93, thick: 0.92, shoulders: 0.9 },
      colors: { skin: '#e0b496', hair: '#5a3e2c', garment: '#7a5f6e', hat: '#4a3a44', accent: '#c9b08a' } },
    // and a man in a grey-blue town coat and hat with a notebook
    visitor_b: { kind: 'shapes', style: 'plateau', who: 'man', garment: 'coat', hair: 'short', hat: 'hat', parts: ['notebook'],
      body: { height: 1.0, thick: 0.95, shoulders: 1.0 },
      colors: { skin: '#dab08e', hair: '#2e2620', top: '#e8e2d6', garment: '#5c6670', bottom: '#3a3a38', hat: '#2e2c2a', shoes: '#1f1b18' } },
    // a boy of nine among the visitors (the final «The Pupil»), who asks to try the rod: a straw-coloured shirt
    boy: { kind: 'shapes', style: 'plateau', who: 'child', garment: 'none', hair: 'short',
      colors: { skin: '#e0b08c', hair: '#7a5a3a', top: '#c9b48a', bottom: '#5a4a3a', shoes: '#3a2e26' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, clean colours, the scene's light; a simple face
    styles: { plateau: { from: 'flat', name: 'Plateau', line: 0.8, face: 'simple' } },
    hats: {
      // a kerchief over the hair, tied at the nape
      kerchief: { name: 'kerchief', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.08), [0, 0.7, -0.72], -0.05, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 0.45), mul(hf, -r * 1.02))), axes, [r * 0.22, r * 0.16, r * 0.14], F.colors.hat, 10);
      } },
    },
    parts: {
      // the iron rod, a thumb thick, upright in the right hand: from the ground to a hand's width over the fist; its top
      // is the person's point `rod`
      rod: { name: 'iron rod', draw: F => {
        const m = F.fit.h, h = F.P('RightHand'), foot = [h[0], floorOf(F), h[2]], top = [h[0], h[1] + 0.14 * m, h[2]];
        F.bar(foot, top, 0.011 * m, 0.012 * m, [[0, IRON]], 6, rightOf(F));
        F.point('rod', top);
      } },
      // a tin mug held upright in the right hand, by its rim
      mug: { name: 'tin mug', draw: F => {
        const { add, mul } = V(), m = F.fit.h, c = add(add(F.P('RightHand'), mul(F.fwd('RightHand'), 0.05 * m)), [0, -0.05 * m, 0]);
        F.bar(add(c, [0, -0.045 * m, 0]), add(c, [0, 0.045 * m, 0]), 0.04 * m, 0.043 * m, [[0, TIN]], 12, rightOf(F));
        F.point('mug', c);
      } },
      // a wooden pail hanging from the right hand by its iron bail
      pail: { name: 'pail', draw: F => {
        const { add, mul, cross } = V(), m = F.fit.h, right = rightOf(F), fwd = cross(right, [0, 1, 0]);
        const hand = add(F.P('RightHand'), mul(right, 0.05 * m)), rim = add(hand, [0, -0.15 * m, 0]), foot = add(hand, [0, -0.42 * m, 0]);
        F.bar(foot, rim, 0.11 * m, 0.13 * m, [[0, WOOD]], 12, right);
        F.bar(add(rim, [0, -0.05 * m, 0]), add(rim, [0, -0.025 * m, 0]), 0.132 * m, 0.134 * m, [[0, HOOP]], 12, right);
        F.bar(add(foot, [0, 0.03 * m, 0]), add(foot, [0, 0.055 * m, 0]), 0.114 * m, 0.116 * m, [[0, HOOP]], 12, right);
        F.tube([add(rim, mul(right, -0.13 * m)), add(hand, [0, -0.01 * m, 0]), add(rim, mul(right, 0.13 * m))],
          [[0, 0.006 * m], [2, 0.006 * m]], [[0, HOOP]], 5, fwd, 0.4);
        F.point('pail', add(foot, [0, 0.14 * m, 0]));
      } },
      // a short beard, the hair's colour, round the jaw and the chin under the mouth
      beard: { name: 'beard', draw: F => {
        const { add, mul } = V(), { at, axes, r } = F.head, [, hu, hf] = axes;
        F.ball(add(at, add(mul(hu, -r * 0.72), mul(hf, r * 0.42))), axes, [r * 0.68, r * 0.34, r * 0.52], F.colors.hair, 12);
      } },
      // a forester's notebook, dark oilcloth covers, held in the left hand; its point is the person's `#notebook`
      notebook: { name: 'notebook', draw: F => {
        const { add, mul } = V(), m = F.fit.h, axes = [F.side('LeftHand'), F.up('LeftHand'), F.fwd('LeftHand')];
        const c = add(F.P('LeftHand'), mul(axes[2], 0.05 * m));
        F.ball(c, axes, [0.016 * m, 0.1 * m, 0.075 * m], BOOK, 6, 3);
        F.point('notebook', c);
      } },
      // an axe hanging from the right hand, its head down by the knee, the blade forward; its point `axe` the head
      axe: { name: 'axe', draw: F => {
        const { add, mul, cross } = V(), m = F.fit.h, right = rightOf(F), fwd = cross(right, [0, 1, 0]);
        const hand = F.P('RightHand'), top = add(hand, [0, 0.06 * m, 0]), foot = add(hand, [0, -0.56 * m, 0]);
        F.bar(foot, top, 0.016 * m, 0.016 * m, [[0, WOOD]], 6, right);
        F.ball(add(foot, mul(fwd, 0.05 * m)), [right, [0, 1, 0], fwd], [0.012 * m, 0.05 * m, 0.08 * m], IRON, 6, 3);
        F.point('axe', foot);
      } },
      // a wicker basket hanging from the right hand by its handle
      basket: { name: 'basket', draw: F => {
        const { add, mul, cross } = V(), m = F.fit.h, right = rightOf(F), fwd = cross(right, [0, 1, 0]);
        const hand = add(F.P('RightHand'), mul(right, 0.09 * m)), rim = add(hand, [0, -0.2 * m, 0]), foot = add(hand, [0, -0.36 * m, 0]);
        F.bar(foot, rim, 0.13 * m, 0.16 * m, [[0, WICKER]], 12, right);
        F.tube([add(rim, mul(right, -0.15 * m)), add(hand, [0, 0.01 * m, 0]), add(rim, mul(right, 0.15 * m))],
          [[0, 0.009 * m], [2, 0.009 * m]], [[0, STRAP]], 5, fwd, 0.4);
        F.point('basket', add(rim, [0, 0.02 * m, 0]));
      } },
      // a canvas bag on a strap over the left shoulder, hanging at the left hip
      satchel: { name: 'bag', draw: F => {
        const { add, mul, cross } = V(), m = F.fit.h, right = rightOf(F), fwd = cross(right, [0, 1, 0]);
        const bag = add(add(F.P('LeftLeg'), mul(right, -0.14 * m)), mul(fwd, -0.04 * m));
        F.ball(bag, [right, [0, 1, 0], fwd], [0.05 * m, 0.13 * m, 0.12 * m], CLOTH, 10, 2.6);
        const shoulder = add(F.P('LeftArm'), [0, 0.04 * m, 0]);
        F.tube([shoulder, add(bag, [0, 0.11 * m, 0])], [[0, 0.012 * m], [1, 0.012 * m]], [[0, STRAP]], 5, right, 0.4);
        F.point('bag', bag);
      } },
      // a flat tin flask on a cord at the right hip
      flask: { name: 'flask', draw: F => {
        const { add, mul, cross } = V(), m = F.fit.h, right = rightOf(F), fwd = cross(right, [0, 1, 0]);
        const at = add(add(F.P('RightLeg'), mul(right, 0.13 * m)), add(mul(fwd, 0.03 * m), [0, -0.08 * m, 0]));
        F.ball(at, [fwd, [0, 1, 0], right], [0.07 * m, 0.09 * m, 0.03 * m], TIN, 12, 2);
        F.point('flask', at);
      } },
    },
  },
};
