// the square flat where the viewer stands, to its far edge at 31 m; past it the city goes down to the bay, gently,
// four metres in a hundred; the shore at 600 m, the sea's bed under the water beyond
return -0.04 * (distance - 31) * anim.span(distance, 31, 32) * (1 - anim.span(distance, 600, 640)) - 24 * anim.span(distance, 600, 640);
