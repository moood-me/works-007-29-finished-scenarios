// The land: flat under the school (the room, the classroom) and before it; behind the school, past distance 13, the
// plateau rising slowly into the long hill (9 m at most), a little higher to the right.
const d = Math.max(0, distance - 13);
return (9 + 0.01 * across) * (1 - Math.exp(-d / 50)) + 0.6 * anim.noise(across * 0.02 + distance * 0.01, 5) * anim.span(distance, 13, 40);
