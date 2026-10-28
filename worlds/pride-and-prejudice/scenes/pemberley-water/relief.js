// The land: this side's lawn level (0) to the bank at 9.4 m; the pond's bed below the water (−0.7, the water's
// surface at −0.2); beyond it the park rising to the house (8 m up at 150 m) and on up to the woods (22 m at 280 m),
// swelling a little along it
if (distance < 9.4) return 0;
if (distance < 104) return -0.7;
const w = anim.span(distance, 150, 280);
return -0.7 + 9 * anim.ease.smooth(anim.span(distance, 104, 150)) + 14 * w + 1.5 * Math.sin(across * 0.017) * w;
