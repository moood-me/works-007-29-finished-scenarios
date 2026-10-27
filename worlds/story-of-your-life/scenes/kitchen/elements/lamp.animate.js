// The lamp sways a hair about its rose, as a lamp does in a room where people move.
e.layer('lamp').rotate = 0.006 * e.anim.drift(e.t * 0.25, 3);
