// The engine's exhaust flickering, and the propeller's blur trembling a little as the blades go round.
e.glow('exhaust', 0.75 + 0.25 * e.anim.noise(e.t * 6, 2));
e.layer('prop').scaleY = 1 + 0.03 * e.anim.noise(e.t * 9, 5);
