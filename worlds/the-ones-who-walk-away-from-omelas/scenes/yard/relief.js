// the yard flat; past its low wall on the left (and far behind the house) the ground drops six metres to the lower
// city, which goes on down to the bay five metres in a hundred, under the water past its shore
return -6 * anim.span(Math.max(-across - 6, distance - 18), 0, 2) - 0.05 * Math.max(0, Math.max(-across - 6, distance - 18) - 2);
