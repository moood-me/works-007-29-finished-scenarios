// The land: the terrace level (0) and the house on it to 9 m, the slope falling away beyond it to the Rhine's bed (115 m
// below), the river's floor to the far bank at 1.45 km, and that bank rising 5 m over the water.
if (distance < 9) return 0;
if (distance < 1450) return -115 * anim.ease.smooth(anim.span(distance, 9, 40));
return -115 + 5 * anim.ease.smooth(anim.span(distance, 1450, 1470));
