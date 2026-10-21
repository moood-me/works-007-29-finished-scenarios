// The people of «The Man Who Planted Trees» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, straight-edged flat shapes in plain dusty colours lit by the scene's own light — and how
// they move: the motions in cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who and what each
// carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m); the
// points a part names (F.point) are the person's: "elzeard#rod".
const V = () => MooodShapes.V;
const IRON = [0.2, 0.2, 0.21, 1], TIN = [0.48, 0.48, 0.46, 1], LEATHER = [0.42, 0.31, 0.22, 1], CLOTH = [0.47, 0.5, 0.42, 1];
const STRAP = [0.3, 0.22, 0.16, 1];
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
      colors: { skin: '#b98a68', hair: '#aaa59c', top: '#d9d3c4', garment: '#5d4936', bottom: '#4a443b', hat: '#3b332b', shoes: '#2a241f' } },
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
