// The hollow (лощина): the viewer and the sleigh at its flat bottom; its far bank rising from 9 m ahead to a crest some
// four metres up at 21 m, its sides rising beyond 8–9 m to either hand; a few low swells in the drifts beyond the sleigh.
const s = anim.ease.smooth;
const bank = 4.2 * s(anim.span(distance, 9, 21));
const left = 2.6 * s(anim.span(-across, 8, 18));
const right = 2.2 * s(anim.span(across, 9, 19));
const swell = 0.22 * Math.sin(across * 0.37 + distance * 0.21) * anim.span(distance, 5, 10);
return bank + left + right + swell;
