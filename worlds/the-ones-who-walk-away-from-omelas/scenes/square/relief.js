// the square flat where the viewer stands, to its far edge at 31 m; past it a terrace wall drops six metres to the
// lower city, which goes on down to the bay five metres in a hundred; the shore at 600 m, the sea's bed under the water
return -6 * anim.span(distance, 31, 33) - 0.05 * (distance - 33) * anim.span(distance, 33, 34) * (1 - anim.span(distance, 600, 640)) - 28.4 * anim.span(distance, 600, 640);
